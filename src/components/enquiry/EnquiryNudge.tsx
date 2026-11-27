'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { getProgram } from '@/content/programs';
import { getService } from '@/content/services';
import { countSecond, enquirySent, nextNudgeAt } from '@/lib/visit-memory';
import { useEnquiry, type OpenOptions } from './EnquiryProvider';

/**
 * Opens the enquiry form after 30 seconds on the site (time with the tab in front, counted across pages).
 * If the visitor closes it, it comes back after 2 more minutes; once they send an enquiry (here or in any form
 * on the site) it never shows again. Timings are in lib/visit-memory. It never appears on the contact, careers
 * and privacy pages, over another dialog or the chat, or while the visitor is typing in a form (it waits).
 */
const SKIP_PAGES = ['/contact/', '/careers/', '/privacy/'];

/** What the pop-up says depends on the page: a course, a staffing service, training in general, or anything. */
function optionsFor(pathname: string): OpenOptions {
  const [, section, slug] = pathname.split('/');
  if (section === 'training-placement') {
    const program = slug ? getProgram(slug) : undefined;
    return program
      ? {
          title: `Questions about the ${program.shortName} course?`,
          intro:
            'Leave your details and an advisor will call you back about the syllabus, batches and placement support.',
          interest: program.slug,
        }
      : {
          title: 'Need help choosing a course?',
          intro: 'Leave your details and an advisor will call you back to help you pick the right course.',
        };
  }
  if (section === 'services') {
    return {
      title: 'Hiring? Tell us what you need',
      intro: 'Leave your details and our staffing team will call you back.',
      interest: (slug && getService(slug)?.slug) || undefined,
    };
  }
  return {
    title: 'Can we help?',
    intro: 'Leave your details and we will call you back, for hiring or for training.',
  };
}

const typing = () => {
  const el = document.activeElement;
  return el instanceof HTMLElement && (el.matches('input, textarea, select') || el.isContentEditable);
};
const dialogOpen = () => Boolean(document.querySelector('dialog[open], [role="dialog"]'));

export function EnquiryNudge() {
  const { open } = useEnquiry();
  const pathname = usePathname() ?? '/';
  const path = useRef(pathname);
  path.current = pathname.endsWith('/') ? pathname : `${pathname}/`;

  useEffect(() => {
    if (enquirySent()) return undefined;
    const timer = window.setInterval(() => {
      if (document.visibilityState !== 'visible') return;
      const seconds = countSecond();
      if (seconds === null || enquirySent()) return window.clearInterval(timer);
      if (seconds < nextNudgeAt()) return;
      if (SKIP_PAGES.includes(path.current) || dialogOpen() || typing()) return; // try again next second
      open(optionsFor(path.current));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [open]);

  return null;
}
