import { BACKGROUNDS, INTERESTS, enquirySummary, labelFor, validateEnquiry } from '@/lib/enquiry';
import { appendRow } from '@/lib/sheets';

/**
 * Receives enquiry-form submissions and delivers them to every channel that is configured:
 *
 *   LEAD_WEBHOOK_URL               JSON POST (Google Apps Script / Sheets, Zapier, Make, a CRM...)
 *   RESEND_API_KEY + LEAD_EMAIL_TO Email via Resend (LEAD_EMAIL_FROM optional)
 *   SALESFORCE_WEB_TO_LEAD_OID     Salesforce Web-to-Lead (creates a Lead in your org)
 *   GOOGLE_SHEETS_ID +             A new row in a Google Sheet, written by a service account the sheet
 *   GOOGLE_SHEETS_CLIENT_EMAIL +   is shared with (GOOGLE_SHEETS_TAB optional, default Sheet1)
 *   GOOGLE_SHEETS_PRIVATE_KEY
 *
 * If nothing is configured the endpoint answers 503 NOT_CONFIGURED and the form tells the
 * visitor honestly, offering WhatsApp instead. It never pretends a lead was saved.
 */

export const dynamic = 'force-dynamic';

const RATE_LIMIT = { windowMs: 10 * 60 * 1000, max: 5 };
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < RATE_LIMIT.windowMs);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > RATE_LIMIT.max;
}

type Lead = NonNullable<ReturnType<typeof validateEnquiry>['data']>;

async function toWebhook(url: string, lead: Lead, receivedAt: string) {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      receivedAt,
      name: lead.name,
      phone: lead.phone,
      email: lead.email,
      interest: labelFor(INTERESTS, lead.interest),
      background: labelFor(BACKGROUNDS, lead.background),
      message: lead.message,
      source: lead.source,
    }),
    signal: AbortSignal.timeout(10_000),
  });
  if (!response.ok) throw new Error(`webhook responded ${response.status}`);
}

async function toEmail(apiKey: string, to: string, lead: Lead) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({
      from: process.env.LEAD_EMAIL_FROM || 'ARA Website <onboarding@resend.dev>',
      to: to.split(',').map((address) => address.trim()),
      reply_to: lead.email || undefined,
      subject: `New enquiry: ${labelFor(INTERESTS, lead.interest)} - ${lead.name}`,
      text: `${enquirySummary(lead)}\nPage: ${lead.source}`,
    }),
    signal: AbortSignal.timeout(10_000),
  });
  if (!response.ok) throw new Error(`email responded ${response.status}`);
}

/** One row per enquiry: Received (IST) | Name | Phone | Email | Interested in | I am a | Message | Page. */
async function toSheet(lead: Lead, receivedAt: string) {
  await appendRow(
    {
      sheetId: process.env.GOOGLE_SHEETS_ID!,
      clientEmail: process.env.GOOGLE_SHEETS_CLIENT_EMAIL!,
      privateKey: process.env.GOOGLE_SHEETS_PRIVATE_KEY!,
      tab: process.env.GOOGLE_SHEETS_TAB || undefined,
    },
    [
      new Date(receivedAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      lead.name,
      lead.phone,
      lead.email,
      labelFor(INTERESTS, lead.interest),
      lead.background ? labelFor(BACKGROUNDS, lead.background) : '',
      lead.message,
      lead.source,
    ],
  );
}

async function toSalesforce(oid: string, lead: Lead) {
  const [first, ...rest] = lead.name.split(' ');
  const form = new URLSearchParams({
    oid,
    first_name: rest.length ? first : '',
    last_name: rest.length ? rest.join(' ') : first,
    phone: lead.phone,
    email: lead.email,
    lead_source: 'Website',
    description: `${enquirySummary(lead)}\nPage: ${lead.source}`,
  });
  const response = await fetch('https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: form,
    signal: AbortSignal.timeout(10_000),
  });
  if (!response.ok) throw new Error(`salesforce responded ${response.status}`);
}

export async function POST(request: Request) {
  const ip = (request.headers.get('x-forwarded-for') ?? 'local').split(',')[0].trim();
  if (rateLimited(ip)) {
    return Response.json(
      {
        ok: false,
        code: 'RATE_LIMITED',
        message: 'Too many submissions. Please try again in a few minutes.',
      },
      { status: 429 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, code: 'BAD_REQUEST', message: 'Invalid request.' }, { status: 400 });
  }

  const { data, errors } = validateEnquiry(body);
  if (!data) return Response.json({ ok: false, code: 'INVALID', errors }, { status: 422 });

  // Honeypot filled in: almost certainly a bot. Accept silently without delivering.
  if (data.website) return Response.json({ ok: true });

  const receivedAt = new Date().toISOString();
  const deliveries: Promise<void>[] = [];
  if (process.env.LEAD_WEBHOOK_URL)
    deliveries.push(toWebhook(process.env.LEAD_WEBHOOK_URL, data, receivedAt));
  if (process.env.RESEND_API_KEY && process.env.LEAD_EMAIL_TO)
    deliveries.push(toEmail(process.env.RESEND_API_KEY, process.env.LEAD_EMAIL_TO, data));
  if (process.env.SALESFORCE_WEB_TO_LEAD_OID)
    deliveries.push(toSalesforce(process.env.SALESFORCE_WEB_TO_LEAD_OID, data));
  if (
    process.env.GOOGLE_SHEETS_ID &&
    process.env.GOOGLE_SHEETS_CLIENT_EMAIL &&
    process.env.GOOGLE_SHEETS_PRIVATE_KEY
  )
    deliveries.push(toSheet(data, receivedAt));

  if (deliveries.length === 0) {
    return Response.json(
      { ok: false, code: 'NOT_CONFIGURED', message: 'Online enquiries are not connected yet.' },
      { status: 503 },
    );
  }

  const results = await Promise.allSettled(deliveries);
  const delivered = results.filter((result) => result.status === 'fulfilled').length;
  results.forEach((result) => {
    if (result.status === 'rejected') console.error('[enquiry] delivery failed:', result.reason?.message);
  });

  if (delivered === 0) {
    return Response.json(
      { ok: false, code: 'DELIVERY_FAILED', message: 'We could not send your enquiry right now.' },
      { status: 502 },
    );
  }
  return Response.json({ ok: true });
}
