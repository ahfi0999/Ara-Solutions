'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Building2, GraduationCap } from 'lucide-react';

const PARTS = [
  { key: 'business', label: 'For businesses', target: 'for-businesses', icon: Building2 },
  { key: 'training', label: 'For professionals', target: 'for-professionals', icon: GraduationCap },
] as const;

/** After this long without scrolling, a tucked-away switch comes back. */
const IDLE_MS = 1200;

/**
 * A small floating switch shown while the visitor is inside the two audience halves of the home page.
 * It shows which half they are in, and jumps to the other one. On phones and tablets it tucks away while the
 * visitor scrolls down (so it never covers what they are reading) and returns when they scroll up or pause.
 */
export function AudienceSwitch() {
  const [active, setActive] = useState<(typeof PARTS)[number]['key'] | null>(null);
  const [tucked, setTucked] = useState(false);

  useEffect(() => {
    const small = window.matchMedia('(max-width: 1023px)');
    let lastY = window.scrollY;
    let idle: ReturnType<typeof setTimeout> | undefined;
    const onScroll = () => {
      const y = window.scrollY;
      const dy = y - lastY;
      lastY = y;
      if (!small.matches) return;
      if (dy > 2) setTucked(true);
      else if (dy < -2) setTucked(false);
      clearTimeout(idle);
      idle = setTimeout(() => setTucked(false), IDLE_MS);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(idle);
    };
  }, []);

  useEffect(() => {
    const business = document.getElementById('for-businesses');
    const training = document.getElementById('for-professionals');
    const end = document.getElementById('results');
    if (!business || !training || !end) return;
    const onScroll = () => {
      const line = window.innerHeight * 0.5;
      if (business.getBoundingClientRect().top > line || end.getBoundingClientRect().top < line)
        setActive(null);
      else setActive(training.getBoundingClientRect().top <= line ? 'training' : 'business');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const jump = (target: string) => {
    const el = document.getElementById(target);
    if (!el) return;
    const lenis = (window as unknown as { lenis?: { scrollTo: (el: HTMLElement, opts: object) => void } })
      .lenis;
    if (lenis)
      lenis.scrollTo(el, {}); // the page's scroll padding already leaves room for the menu bar
    else el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {active && !tucked && (
        <motion.nav
          aria-label="Jump to"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25 }}
          className="pointer-events-none fixed inset-x-0 bottom-24 z-40 flex justify-center lg:bottom-6"
        >
          <div className="pointer-events-auto flex rounded-full border border-white/10 bg-ink/90 p-1 shadow-lift backdrop-blur">
            {PARTS.map((part) => (
              <button
                key={part.key}
                type="button"
                aria-current={active === part.key ? 'true' : undefined}
                onClick={() => jump(part.target)}
                className="relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white"
              >
                {active === part.key && (
                  <motion.span
                    layoutId="audience-pill"
                    className="absolute inset-0 rounded-full bg-brand"
                    transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                  />
                )}
                <part.icon aria-hidden className="relative size-4" />
                <span className="relative">{part.label}</span>
              </button>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
