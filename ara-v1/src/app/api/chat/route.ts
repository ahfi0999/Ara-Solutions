import { ASSISTANT_PROMPT } from '@/content/assistant';

/**
 * "Ask ARA" chat endpoint. Works with any OpenAI-compatible Chat Completions API
 * (Groq, OpenAI, Anthropic, ...). Configure with AI_BASE_URL, AI_API_KEY and AI_MODEL
 * (see .env.example). The key stays on the server and is never sent to the browser.
 */

// Always run on request (never cached at build time): it depends on secret environment settings.
export const dynamic = 'force-dynamic';

const MAX_MESSAGES = 12; // conversation history sent to the model
const MAX_CHARS = 1000; // per visitor message
const RATE_LIMIT = { windowMs: 10 * 60 * 1000, max: 20 }; // per visitor IP

const config = () => ({
  baseUrl: (process.env.AI_BASE_URL || '').replace(/\/+$/, ''),
  apiKey: process.env.AI_API_KEY || '',
  model: process.env.AI_MODEL || '',
});
const isConfigured = ({ baseUrl, apiKey, model }: ReturnType<typeof config>) => Boolean(baseUrl && apiKey && model);

// Best-effort, in-memory rate limit (per server instance) to stop abuse running up API costs.
const hits = new Map<string, number[]>();
function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((time) => now - time < RATE_LIMIT.windowMs);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > RATE_LIMIT.max;
}

/** Lets the website know whether to show the chat input. */
export function GET() {
  return Response.json({ enabled: isConfigured(config()) });
}

export async function POST(request: Request) {
  const settings = config();
  if (!isConfigured(settings)) {
    return Response.json({ error: 'The assistant is not configured yet.' }, { status: 503 });
  }

  const ip = (request.headers.get('x-forwarded-for') || 'local').split(',')[0].trim();
  if (rateLimited(ip)) {
    return Response.json(
      { error: "You've sent a lot of messages. Please wait a few minutes, or WhatsApp our team." },
      { status: 429 },
    );
  }

  let body: { messages?: unknown };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400 });
  }
  const messages = (Array.isArray(body?.messages) ? body.messages : [])
    .filter(
      (m: { role?: unknown; content?: unknown }): m is { role: 'user' | 'assistant'; content: string } =>
        (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string',
    )
    .slice(-MAX_MESSAGES)
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_CHARS) }));
  if (messages.length === 0 || messages.at(-1)?.role !== 'user') {
    return Response.json({ error: 'Please type a question.' }, { status: 400 });
  }

  let upstream: Response;
  try {
    upstream = await fetch(`${settings.baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${settings.apiKey}`,
      },
      body: JSON.stringify({
        model: settings.model,
        messages: [{ role: 'system', content: ASSISTANT_PROMPT }, ...messages],
        // Generous limit: some models (e.g. gpt-oss) also spend tokens on hidden reasoning.
        max_tokens: 1500,
        temperature: 0.4,
        stream: true,
      }),
    });
  } catch (error) {
    console.error('[ask-ara] provider unreachable:', (error as Error).message);
    return Response.json({ error: 'The assistant is unavailable right now.' }, { status: 502 });
  }

  if (!upstream.ok || !upstream.body) {
    console.error('[ask-ara] provider error', upstream.status, (await upstream.text()).slice(0, 500));
    return Response.json({ error: 'The assistant is unavailable right now.' }, { status: 502 });
  }

  // Convert the provider's server-sent events into a plain text stream for the browser.
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();
  let buffer = '';
  const stream = upstream.body.pipeThrough(
    new TransformStream({
      transform(chunk: Uint8Array, controller) {
        buffer += decoder.decode(chunk, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() ?? '';
        for (const line of lines) {
          const data = line.trim();
          if (!data.startsWith('data:')) continue;
          const payload = data.slice(5).trim();
          if (payload === '[DONE]') continue;
          try {
            const text = JSON.parse(payload).choices?.[0]?.delta?.content;
            if (text) controller.enqueue(encoder.encode(text));
          } catch {
            // Ignore keep-alive or partial lines.
          }
        }
      },
    }),
  );

  return new Response(stream, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' },
  });
}
