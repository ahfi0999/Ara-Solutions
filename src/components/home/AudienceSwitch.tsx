'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Building2, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/cn';

const PARTS = [
  { key: 'business', label: 'For businesses', target: 'for-businesses', icon: Building2 },
  { key: 'training', label: 'For professionals', target: 'for-professionals', icon: GraduationCap },
] as const;

/** After this long without scrolling, a tucked-away switch comes back. */
const IDLE_MS = 1200;
/** From this width the page has an empty margin on the left, so the switch can sit there. */
const SIDE_QUERY = '(min-width: 1360px)';

/**
 * A small floating switch shown while the visitor is inside the two audience halves of the home page.
 * It shows which half they are in, and jumps to the other one.
 * - Wide screens: a slim vertical switch in the empty left margin (the chat box has the bottom-right
 *   corner), so it never covers the page.
 * - Smaller screens: a pill at the bottom that tucks away while the visitor scrolls down and returns
 *   when they scroll up or pause.
 */
export function AudienceSwitch() {
  const [active, setActive] = useState<(typeof PARTS)[number]['key'] | null>(null);
  const [tucked, setTucked] = useState(false);
  const [side, setSide] = useState(false);

  useEffect(() => {
    const wide = window.matchMedia(SIDE_QUERY);
    const sync = () => setSide(wide.matches);
    sync();
    wide.addEventListener('change', sync);
    let lastY = window.scrollY;
    let idle: ReturnType<typeof setTimeout> | undefined;
    const onScroll = () => {
      const y = window.scrollY;
      const dy = y - lastY;
      lastY = y;
      if (wide.matches) return;
      if (dy > 2) setTucked(true);
      else if (dy < -2) setTucked(false);
      clearTimeout(idle);
      idle = setTimeout(() => setTucked(false), IDLE_MS);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      wide.removeEventListener('change', sync);
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

  const show = active && (side || !tucked);

  return (
    <AnimatePresence>
      {show && (
        <motion.nav
          key={side ? 'side' : 'bottom'}
          aria-label="Jump to"
          initial={side ? { opacity: 0, x: -20 } : { opacity: 0, y: 20 }}
          animate={side ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 }}
          exit={side ? { opacity: 0, x: -20 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.25 }}
          className={cn(
            'pointer-events-none fixed z-40 flex',
            side
              ? 'inset-y-0 left-2 items-center min-[1440px]:left-4'
              : 'inset-x-0 bottom-24 justify-center lg:bottom-6',
          )}
        >
          <div
            className={cn(
              'pointer-events-auto flex border border-white/10 bg-ink/90 p-1 shadow-lift backdrop-blur',
              side ? 'flex-col rounded-[1.25rem]' : 'rounded-full',
            )}
          >
            {PARTS.map((part) => (
              <button
                key={part.key}
                type="button"
                aria-current={active === part.key ? 'true' : undefined}
                onClick={() => jump(part.target)}
                className={cn(
                  'relative flex items-center font-medium text-white',
                  side
                    ? 'flex-col-reverse gap-2.5 rounded-2xl px-2 py-4 text-[13px]'
                    : 'gap-2 rounded-full px-4 py-2 text-sm',
                )}
              >
                {active === part.key && (
                  <motion.span
                    layoutId={side ? 'audience-pill-side' : 'audience-pill'}
                    className={cn('absolute inset-0 bg-brand', side ? 'rounded-2xl' : 'rounded-full')}
                    transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                  />
                )}
                <part.icon aria-hidden className="relative size-4 shrink-0" />
                {/* On the side, the label reads upwards from its icon, like the menu's red side strips. */}
                <span
                  className={cn(
                    'relative',
                    side && 'rotate-180 whitespace-nowrap [writing-mode:vertical-rl]',
                  )}
                >
                  {part.label}
                </span>
              </button>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
