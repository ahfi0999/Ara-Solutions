/**
 * What the site remembers for the timed enquiry pop-up (see EnquiryNudge): seconds spent on the site in this
 * visit, when to offer the form next, and whether the visitor has sent an enquiry.
 */
export const NUDGE = {
  /** Seconds on the site before the pop-up first appears. */
  firstAfter: 30,
  /** Seconds on the site after the visitor closes the form before it appears again. */
  againAfter: 120,
} as const;

const KEYS = { time: 'ara-time-on-site', next: 'ara-nudge-next', sent: 'ara-enquiry-sent' } as const;

/** Storage can be blocked (private windows, strict settings): then the pop-up simply never shows. */
function store(kind: 'local' | 'session', key: string, value?: string): string | null {
  try {
    const storage = kind === 'local' ? window.localStorage : window.sessionStorage;
    if (value !== undefined) storage.setItem(key, value);
    return storage.getItem(key);
  } catch {
    return null;
  }
}

/** Adds one second to this visit's time on the site; returns the new total, or null if nothing can be stored. */
export function countSecond(): number | null {
  const seconds = Number(store('session', KEYS.time) ?? 0) + 1;
  return store('session', KEYS.time, String(seconds)) === null ? null : seconds;
}

/** Seconds on the site at which the pop-up may appear next. */
export const nextNudgeAt = () => Number(store('session', KEYS.next) ?? NUDGE.firstAfter);

/** The visitor closed the form without sending it: offer it again after two more minutes on the site. */
export function snoozeNudge() {
  const seconds = Number(store('session', KEYS.time) ?? 0);
  store('session', KEYS.next, String(seconds + NUDGE.againAfter));
}

/** The visitor sent an enquiry (pop-up or any form): never show the pop-up to them again. */
export const markEnquirySent = () => store('local', KEYS.sent, String(Date.now()));
export const enquirySent = () => store('local', KEYS.sent) !== null;
