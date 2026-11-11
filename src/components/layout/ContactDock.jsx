'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp, Mail, Minus, Phone, Sparkles, Video, X } from 'lucide-react';
import { STARTER_QUESTIONS } from '../../data/assistant';
import { site } from '../../data/site';
import { useRouter } from '../../lib/router';

/** Pre-filled WhatsApp message based on the page, so the team knows what the visitor wants. */
function whatsappMessage(path) {
  if (path.includes('servicenow'))
    return "Hi ARA Solutions, I'm interested in ServiceNow training. Please share the details.";
  if (path.includes('cybersecurity'))
    return "Hi ARA Solutions, I'm interested in Cybersecurity training. Please share the details.";
  if (path.includes('ai-ml'))
    return "Hi ARA Solutions, I'm interested in AI & Machine Learning training. Please share the details.";
  if (path.includes('training-placement'))
    return "Hi ARA Solutions, I'd like to know about your training and placement programs.";
  if (path.startsWith('/services'))
    return "Hi ARA Solutions, I'm looking to hire and would like to discuss your staffing services.";
  if (path.startsWith('/careers'))
    return "Hi ARA Solutions, I'd like to know about job openings at ARA Solutions.";
  return "Hi ARA Solutions, I'd like to know more about your services.";
}
const waLink = (text) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const phoneDigits = site.phone.replace(/\D/g, ''); // "918019603000"
// Matches **bold**, the company email, the company phone (any spacing, optional +) and web links.
const TOKEN = new RegExp(
  [
    String.raw`\*\*[^*]+\*\*`,
    escapeRegExp(site.email),
    String.raw`\+?` + phoneDigits.split('').join(String.raw`[\s-]?`),
    String.raw`https?:\/\/[^\s)]+`,
  ].join('|'),
  'g',
);

/** Renders an assistant reply: **bold** becomes bold; phone, email and links become tappable. */
function FormattedText({ text }) {
  const parts = [];
  let last = 0;
  for (const match of text.matchAll(TOKEN)) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    const token = match[0];
    const key = match.index;
    if (token.startsWith('**')) parts.push(<strong key={key}>{token.slice(2, -2)}</strong>);
    else if (token === site.email)
      parts.push(
        <a key={key} href={site.emailHref} className="font-medium text-navy underline underline-offset-2">
          {token}
        </a>,
      );
    else if (token.startsWith('http'))
      parts.push(
        <a
          key={key}
          href={token}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-navy underline underline-offset-2"
        >
          {token}
        </a>,
      );
    else
      parts.push(
        <a key={key} href={site.phoneHref} className="font-medium text-navy underline underline-offset-2">
          {token}
        </a>,
      );
    last = match.index + token.length;
  }
  parts.push(text.slice(last));
  return parts;
}

function WhatsAppIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.47 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35ZM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.56.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.43-9.43a9.37 9.37 0 0 1 6.67 2.77 9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.23 9.43-9.43 9.43Zm8.03-17.46A11.27 11.27 0 0 0 12.05.7C5.8.7.7 5.79.7 12.05c0 2 .52 3.95 1.52 5.67L.6 23.6l6.02-1.58a11.32 11.32 0 0 0 5.42 1.38h.01c6.25 0 11.34-5.09 11.35-11.35 0-3.03-1.18-5.88-3.32-8.02Z" />
    </svg>
  );
}

/** Chat window: conversation with "Ask ARA", starter questions and a hand-off to WhatsApp. */
function ChatPanel({ messages, pending, error, onSend, onClose }) {
  const [draft, setDraft] = useState('');
  const listRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => inputRef.current?.focus(), []);
  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages, pending]);

  const submit = (event) => {
    event.preventDefault();
    if (!draft.trim() || pending) return;
    onSend(draft.trim());
    setDraft('');
  };

  const userQuestions = messages.filter((m) => m.role === 'user').map((m) => `- ${m.content}`);
  const handoff = waLink(
    userQuestions.length
      ? `Hi ARA Solutions, I was chatting with Ask ARA on your website. My questions:\n${userQuestions.slice(-5).join('\n')}`
      : "Hi ARA Solutions, I'd like to talk to your team.",
  );

  return (
    <motion.section
      role="dialog"
      aria-label="Ask ARA assistant"
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 16, scale: 0.98 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="fixed inset-0 z-[60] flex flex-col bg-white sm:inset-auto sm:bottom-6 sm:right-6 sm:h-[min(600px,calc(100vh-3rem))] sm:w-[400px] sm:overflow-hidden sm:rounded-2xl sm:border sm:border-line sm:shadow-lift"
    >
      <header className="flex items-center gap-3 bg-navy px-4 py-3.5 text-white">
        <span className="flex size-9 items-center justify-center rounded-full bg-white">
          <img src="/logo-mark.png" alt="" className="size-6" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-display text-sm font-semibold">Ask ARA</p>
          <p className="text-xs text-slate-300">AI assistant · replies instantly</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close chat"
          className="flex size-9 items-center justify-center rounded-full hover:bg-white/10"
        >
          <X className="size-5" />
        </button>
      </header>

      <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto bg-mist px-4 py-4">
        <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-3.5 py-2.5 text-sm leading-relaxed text-ink shadow-card">
          Hi! I&apos;m ARA&apos;s assistant. Ask me about our staffing services or our ServiceNow,
          Cybersecurity and AI/ML training.
        </div>
        {messages.length === 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {STARTER_QUESTIONS.map((question) => (
              <button
                key={question}
                type="button"
                onClick={() => onSend(question)}
                className="rounded-full border border-line bg-white px-3 py-1.5 text-left text-[13px] text-navy transition-colors hover:border-navy"
              >
                {question}
              </button>
            ))}
          </div>
        )}
        {messages.map((message, index) => (
          <div
            key={index}
            className={`max-w-[85%] whitespace-pre-line rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${message.role === 'user' ? 'ml-auto rounded-tr-sm bg-navy text-white' : 'rounded-tl-sm bg-white text-ink shadow-card'}`}
          >
            {message.role === 'assistant' ? <FormattedText text={message.content} /> : message.content}
          </div>
        ))}
        {pending && messages.at(-1)?.role === 'user' && (
          <div className="flex w-16 items-center justify-center gap-1 rounded-2xl rounded-tl-sm bg-white py-3.5 shadow-card">
            {[0, 1, 2].map((dot) => (
              <span
                key={dot}
                className="size-1.5 animate-bounce rounded-full bg-muted"
                style={{ animationDelay: `${dot * 0.15}s` }}
              />
            ))}
          </div>
        )}
        {error && <p className="rounded-lg bg-brand-tint px-3 py-2 text-[13px] text-brand-dark">{error}</p>}
      </div>

      <div className="border-t border-line bg-white px-3 pb-3 pt-3">
        <a
          href={handoff}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-2.5 flex items-center justify-center gap-2 rounded-lg bg-[#25D366]/10 py-2 text-[13px] font-semibold text-[#128C4B] transition-colors hover:bg-[#25D366]/20"
        >
          <WhatsAppIcon className="size-4" />
          Talk to our team on WhatsApp
        </a>
        <form onSubmit={submit} className="flex items-center gap-2">
          <label htmlFor="ask-ara-input" className="sr-only">
            Your question
          </label>
          <input
            id="ask-ara-input"
            ref={inputRef}
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            maxLength={1000}
            placeholder="Type your question…"
            autoComplete="off"
            className="h-11 min-w-0 flex-1 rounded-full border border-line bg-mist px-4 text-sm text-ink outline-none placeholder:text-muted focus:border-navy"
          />
          <button
            type="submit"
            disabled={!draft.trim() || pending}
            aria-label="Send"
            className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand-dark disabled:bg-slate-200 disabled:text-muted"
          >
            <ArrowUp className="size-5" />
          </button>
        </form>
        <p className="mt-2 text-center text-[11px] text-muted">
          AI can make mistakes. Please don&apos;t share sensitive personal details.
        </p>
      </div>
    </motion.section>
  );
}

/** Contact buttons (call, WhatsApp, email, video) plus the "Ask ARA" assistant. Shown on every page. */
export default function ContactDock() {
  const { currentPath } = useRouter();
  const [chatEnabled, setChatEnabled] = useState(false);
  const [open, setOpen] = useState(false);
  const [minimised, setMinimised] = useState(false);
  const [messages, setMessages] = useState([]);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState('');
  const [draft, setDraft] = useState('');

  // Only show the assistant when an AI provider is configured on the server.
  useEffect(() => {
    fetch('/api/chat/')
      .then((response) => (response.ok ? response.json() : { enabled: false }))
      .then((data) => setChatEnabled(Boolean(data.enabled)))
      .catch(() => setChatEnabled(false));
    setMinimised(sessionStorage.getItem('ara-dock-min') === '1');
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => event.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const minimise = (value) => {
    setMinimised(value);
    sessionStorage.setItem('ara-dock-min', value ? '1' : '0');
  };

  const send = async (text) => {
    const history = [...messages, { role: 'user', content: text }];
    setMessages(history);
    setOpen(true);
    setPending(true);
    setError('');
    try {
      const response = await fetch('/api/chat/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history }),
      });
      if (!response.ok || !response.body) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || 'Something went wrong.');
      }
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let reply = '';
      setMessages([...history, { role: 'assistant', content: '' }]);
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        reply += decoder.decode(value, { stream: true });
        setMessages([...history, { role: 'assistant', content: reply }]);
      }
      if (!reply.trim()) throw new Error('No reply received.');
    } catch (err) {
      setMessages(history);
      setError(`${err.message} You can also reach us on WhatsApp or call ${site.phone}.`);
    } finally {
      setPending(false);
    }
  };

  const actions = [
    { label: 'Call', href: site.phoneHref, icon: Phone, tone: 'text-ink hover:border-navy' },
    {
      label: 'WhatsApp',
      href: waLink(whatsappMessage(currentPath)),
      icon: WhatsAppIcon,
      tone: 'text-[#128C4B] hover:border-[#25D366]',
      external: true,
    },
    { label: 'Email', href: site.emailHref, icon: Mail, tone: 'text-navy hover:border-navy' },
    site.videoCallUrl && {
      label: 'Video',
      href: site.videoCallUrl,
      icon: Video,
      tone: 'text-brand hover:border-brand',
      external: true,
    },
  ].filter(Boolean);

  const submitDraft = (event) => {
    event.preventDefault();
    if (!draft.trim()) return setOpen(true);
    send(draft.trim());
    setDraft('');
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <ChatPanel
            messages={messages}
            pending={pending}
            error={error}
            onSend={send}
            onClose={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Desktop: contact chips + "Ask ARA" box, can be minimised to a single button. */}
      {!open && (
        <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
          {minimised ? (
            <button
              type="button"
              onClick={() => minimise(false)}
              aria-label="Contact us"
              className="flex size-14 items-center justify-center rounded-full bg-navy text-white shadow-lift transition-transform hover:scale-105"
            >
              {chatEnabled ? <Sparkles className="size-6" /> : <Phone className="size-6" />}
            </button>
          ) : (
            <div className="w-[380px] rounded-2xl border border-line bg-white/95 p-3 shadow-lift backdrop-blur">
              <div className="relative flex items-center justify-center px-8 pb-2">
                <p className="font-display text-[13px] font-semibold text-ink">Talk to ARA Solutions</p>
                <button
                  type="button"
                  onClick={() => minimise(true)}
                  aria-label="Minimise"
                  className="absolute right-0 top-1/2 flex size-7 -translate-y-[calc(50%+4px)] items-center justify-center rounded-full text-muted hover:bg-mist hover:text-ink"
                >
                  <Minus className="size-4" />
                </button>
              </div>
              <div className="flex gap-2">
                {actions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <a
                      key={action.label}
                      href={action.href}
                      {...(action.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className={`flex h-10 flex-1 items-center justify-center gap-1.5 rounded-full border border-line bg-white font-display text-[13px] font-semibold transition-colors ${action.tone}`}
                    >
                      <Icon className="size-4" />
                      {action.label}
                    </a>
                  );
                })}
              </div>
              {chatEnabled && (
                <form onSubmit={submitDraft} className="mt-2.5 flex items-center gap-2">
                  <label htmlFor="ask-ara-dock" className="sr-only">
                    Ask ARA a question
                  </label>
                  <div className="relative min-w-0 flex-1">
                    <Sparkles
                      aria-hidden="true"
                      className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-brand"
                    />
                    <input
                      id="ask-ara-dock"
                      value={draft}
                      onChange={(event) => setDraft(event.target.value)}
                      onFocus={() => messages.length > 0 && setOpen(true)}
                      maxLength={1000}
                      placeholder="Ask ARA anything…"
                      autoComplete="off"
                      className="h-11 w-full rounded-full border border-line bg-mist pl-10 pr-4 text-sm text-ink outline-none placeholder:text-muted focus:border-navy"
                    />
                  </div>
                  <button
                    type="submit"
                    aria-label="Ask"
                    className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand-dark"
                  >
                    <ArrowUp className="size-5" />
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      )}

      {/* Mobile: bottom action bar. The spacer keeps the footer from hiding behind it. */}
      <div aria-hidden="true" className="h-16 sm:hidden" />
      {!open && (
        <nav
          aria-label="Contact"
          className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-line bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur sm:hidden"
        >
          <a
            href={site.phoneHref}
            className="flex h-16 flex-col items-center justify-center gap-1 text-[12px] font-semibold text-ink"
          >
            <Phone className="size-5" />
            Call
          </a>
          <a
            href={waLink(whatsappMessage(currentPath))}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-16 flex-col items-center justify-center gap-1 text-[12px] font-semibold text-[#128C4B]"
          >
            <WhatsAppIcon className="size-5" />
            WhatsApp
          </a>
          {chatEnabled ? (
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex h-16 flex-col items-center justify-center gap-1 bg-navy text-[12px] font-semibold text-white"
            >
              <Sparkles className="size-5" />
              Ask ARA
            </button>
          ) : (
            <a
              href={site.emailHref}
              className="flex h-16 flex-col items-center justify-center gap-1 text-[12px] font-semibold text-navy"
            >
              <Mail className="size-5" />
              Email
            </a>
          )}
        </nav>
      )}
    </>
  );
}
