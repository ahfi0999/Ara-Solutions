'use client';

import { useId, useState, type FormEvent } from 'react';
import { usePathname } from 'next/navigation';
import { CheckCircle2, Loader2, MessageCircle, Phone } from 'lucide-react';
import { BACKGROUNDS, INTERESTS, enquirySummary, validateEnquiry, type FieldErrors } from '@/lib/enquiry';
import { lineFor, staffingLine, trainingLine, whatsappLink, type ContactLine } from '@/content/site';
import { cn } from '@/lib/cn';

type Status = 'idle' | 'sending' | 'sent' | 'fallback';

const inputBase =
  'block w-full rounded-xl border bg-white px-3.5 py-3 text-[15px] text-text shadow-[0_1px_0_rgb(11_13_34/0.03)] outline-none transition-colors placeholder:text-faint focus:border-navy focus:ring-4 focus:ring-navy/10';

function Field({
  id,
  label,
  error,
  optional,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 flex items-baseline justify-between text-sm font-medium text-text"
      >
        {label}
        {optional && <span className="text-xs font-normal text-faint">Optional</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-[13px] text-brand-600">
          {error}
        </p>
      )}
    </div>
  );
}

/**
 * Enquiry / callback form. Posts to /api/enquiry. When online delivery isn't configured
 * (or fails), it says so and offers to send the same details on WhatsApp.
 */
export function EnquiryForm({
  defaultInterest = '',
  submitLabel = 'Request a callback',
  compact = false,
  onDone,
}: {
  defaultInterest?: string;
  submitLabel?: string;
  compact?: boolean;
  onDone?: () => void;
}) {
  const uid = useId();
  const pathname = usePathname();
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<FieldErrors>({});
  const [summary, setSummary] = useState('');
  const [notice, setNotice] = useState('');
  // The phone line to offer after sending: training for a course, staffing for hiring, else the page's line.
  const [line, setLine] = useState<ContactLine>(() => lineFor(pathname));
  const id = (name: string) => `${uid}-${name}`;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = { ...Object.fromEntries(form), consent: form.get('consent') === 'on', source: pathname };

    const { data, errors: fieldErrors } = validateEnquiry(payload);
    if (!data) {
      setErrors(fieldErrors ?? {});
      const first = Object.keys(fieldErrors ?? {})[0];
      if (first) document.getElementById(id(first))?.focus();
      return;
    }
    setErrors({});
    const group = INTERESTS.find((item) => item.value === data.interest)?.group;
    setLine(
      group === 'Training & placement'
        ? trainingLine
        : group === 'Hire talent'
          ? staffingLine
          : lineFor(pathname),
    );
    setSummary(enquirySummary(data));
    setStatus('sending');

    try {
      const response = await fetch('/api/enquiry/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));
      if (response.ok && result.ok) {
        setStatus('sent');
        return;
      }
      if (response.status === 422 && result.errors) {
        setErrors(result.errors);
        setStatus('idle');
        return;
      }
      setNotice(
        result.code === 'NOT_CONFIGURED'
          ? 'Our online enquiry form is not connected yet.'
          : result.message || 'We could not send your enquiry right now.',
      );
      setStatus('fallback');
    } catch {
      setNotice('We could not reach our server. Please check your connection.');
      setStatus('fallback');
    }
  }

  if (status === 'sent') {
    return (
      <div role="status" className="flex flex-col items-center px-2 py-8 text-center">
        <span className="flex size-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <CheckCircle2 className="size-7" aria-hidden />
        </span>
        <h3 className="mt-5 text-xl font-semibold tracking-tight">Thank you, we&apos;ve got your enquiry</h3>
        <p className="mt-2 max-w-sm text-muted">
          Our team will contact you on the number you shared. For anything urgent, call{' '}
          <a href={line.phoneHref} className="font-medium text-text underline underline-offset-2">
            {line.phone}
          </a>
          .
        </p>
        {onDone && (
          <button
            type="button"
            onClick={onDone}
            className="mt-6 text-sm font-medium text-navy underline underline-offset-4"
          >
            Close
          </button>
        )}
      </div>
    );
  }

  if (status === 'fallback') {
    return (
      <div role="status" className="px-1 py-4">
        <h3 className="text-lg font-semibold tracking-tight">{notice}</h3>
        <p className="mt-2 text-muted">
          Your details have <strong className="font-semibold text-text">not</strong> been sent. Please reach
          us directly. We&apos;ve prepared your message so you can send it on WhatsApp in one tap.
        </p>
        <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
          <a
            href={whatsappLink(`Hi ARA Solutions, I'd like to enquire.\n\n${summary}`, line.whatsapp)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#1faa53] font-medium text-white transition-colors hover:bg-[#178f45]"
          >
            <MessageCircle className="size-5" aria-hidden /> Send on WhatsApp
          </a>
          <a
            href={line.phoneHref}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line bg-white font-medium text-text hover:border-text/30"
          >
            <Phone className="size-4" aria-hidden /> Call {line.phone}
          </a>
        </div>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-4 text-sm text-muted underline underline-offset-4"
        >
          Back to the form
        </button>
      </div>
    );
  }

  const describedBy = (name: keyof FieldErrors) => (errors[name] ? `${id(name)}-error` : undefined);
  const invalid = (name: keyof FieldErrors) =>
    cn(inputBase, errors[name] ? 'border-brand-600' : 'border-line');

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className={cn('grid gap-4', !compact && 'sm:grid-cols-2')}>
        <Field id={id('name')} label="Full name" error={errors.name}>
          <input
            id={id('name')}
            name="name"
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={!!errors.name}
            aria-describedby={describedBy('name')}
            className={invalid('name')}
          />
        </Field>
        <Field id={id('phone')} label="Phone / WhatsApp" error={errors.phone}>
          <input
            id={id('phone')}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+91 98xxx xxxxx"
            aria-invalid={!!errors.phone}
            aria-describedby={describedBy('phone')}
            className={invalid('phone')}
          />
        </Field>
      </div>
      <Field id={id('email')} label="Email" error={errors.email} optional>
        <input
          id={id('email')}
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          aria-invalid={!!errors.email}
          aria-describedby={describedBy('email')}
          className={invalid('email')}
        />
      </Field>
      <div className={cn('grid gap-4', !compact && 'sm:grid-cols-2')}>
        <Field id={id('interest')} label="I'm interested in" error={errors.interest}>
          <select
            id={id('interest')}
            name="interest"
            defaultValue={defaultInterest}
            aria-invalid={!!errors.interest}
            aria-describedby={describedBy('interest')}
            className={cn(
              invalid('interest'),
              'appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 fill=%27none%27 stroke=%27%235b5f76%27 stroke-width=%272%27%3E%3Cpath d=%27m4 6 4 4 4-4%27/%3E%3C/svg%3E")] bg-[position:right_0.9rem_center] bg-no-repeat pr-10',
            )}
          >
            <option value="" disabled>
              Choose an option
            </option>
            {(['Hire talent', 'Training & placement', 'Other'] as const).map((group) => (
              <optgroup key={group} label={group}>
                {INTERESTS.filter((item) => item.group === group).map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </Field>
        <Field id={id('background')} label="I am a" optional>
          <select
            id={id('background')}
            name="background"
            defaultValue=""
            className={cn(
              inputBase,
              'border-line appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 fill=%27none%27 stroke=%27%235b5f76%27 stroke-width=%272%27%3E%3Cpath d=%27m4 6 4 4 4-4%27/%3E%3C/svg%3E")] bg-[position:right_0.9rem_center] bg-no-repeat pr-10',
            )}
          >
            <option value="">Select</option>
            {BACKGROUNDS.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </Field>
      </div>
      {!compact && (
        <Field id={id('message')} label="Anything you'd like us to know?" optional>
          <textarea
            id={id('message')}
            name="message"
            rows={3}
            maxLength={1000}
            placeholder="Roles you are hiring for, or your background and goals"
            className={cn(inputBase, 'resize-y border-line')}
          />
        </Field>
      )}

      {/* Honeypot: hidden from people, bots tend to fill it in. */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={id('website')}>Website</label>
        <input id={id('website')} name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-3 text-[13px] leading-relaxed text-muted">
          <input
            id={id('consent')}
            name="consent"
            type="checkbox"
            defaultChecked
            aria-invalid={!!errors.consent}
            aria-describedby={describedBy('consent')}
            className="mt-0.5 size-4 shrink-0 rounded border-line accent-brand"
          />
          <span>
            I agree to be contacted by ARA Solutions by phone, WhatsApp or email about my enquiry. See our{' '}
            <a href="/privacy/" className="underline underline-offset-2 hover:text-text">
              privacy notice
            </a>
            .
          </span>
        </label>
        {errors.consent && (
          <p id={`${id('consent')}-error`} role="alert" className="mt-1.5 text-[13px] text-brand-600">
            {errors.consent}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand font-medium text-white shadow-[0_10px_28px_-10px_rgb(229_35_45/0.8)] transition-colors hover:bg-brand-600 disabled:opacity-70"
      >
        {status === 'sending' ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden /> Sending…
          </>
        ) : (
          submitLabel
        )}
      </button>
    </form>
  );
}
