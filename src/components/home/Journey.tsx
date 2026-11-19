'use client';

import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { motion, useMotionValueEvent, useScroll, useSpring } from 'motion/react';
import { Check, PartyPopper } from 'lucide-react';
import { journey, journeyFinale } from '@/content/home';
import { cn } from '@/lib/cn';
import { Container, SectionHeading } from '@/components/ui/Section';
import { EnquiryButton } from '@/components/enquiry/EnquiryProvider';
import { useReducedMotionSafe } from '@/components/motion/primitives';

const CONFETTI_COLOURS = ['#e5232d', '#1f2680', '#10b981', '#f59e0b', '#ff7a80'];

/** A one-off burst of confetti from the finish-line marker. Mounted only when it should play. */
function Confetti() {
  const pieces = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => {
        const angle = ((-150 + Math.random() * 170) * Math.PI) / 180; // mostly up and to the right
        const distance = 70 + Math.random() * 110;
        return {
          dx: Math.cos(angle) * distance,
          dy: Math.sin(angle) * distance,
          rotate: (Math.random() - 0.5) * 720,
          colour: CONFETTI_COLOURS[i % CONFETTI_COLOURS.length],
          round: i % 3 === 0,
          delay: Math.random() * 0.08,
        };
      }),
    [],
  );
  return (
    <span aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 z-20">
      {pieces.map((piece, i) => (
        <motion.span
          key={i}
          className={cn(
            'absolute -ml-1 -mt-1',
            piece.round ? 'size-2 rounded-full' : 'h-2.5 w-1.5 rounded-[1px]',
          )}
          style={{ backgroundColor: piece.colour }}
          initial={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 0.6 }}
          animate={{
            x: [0, piece.dx, piece.dx * 1.15],
            y: [0, piece.dy, piece.dy + 90],
            rotate: piece.rotate,
            opacity: [1, 1, 0],
            scale: 1,
          }}
          transition={{ duration: 1.5, delay: piece.delay, times: [0, 0.45, 1], ease: 'easeOut' }}
        />
      ))}
    </span>
  );
}

/**
 * Learner journey with a progress line that fills as you scroll; each step gets a tick as the line
 * reaches it. The line ends at a finish line: when it gets there the marker turns green, confetti
 * bursts once and an offer letter gets its "Offer accepted" stamp. `eyebrow`, `id` and `children`
 * (shown under the heading) let other pages reuse it.
 */
export function Journey({
  eyebrow = 'How it works',
  id = 'journey',
  children,
}: {
  eyebrow?: string;
  id?: string;
  children?: ReactNode;
}) {
  const listRef = useRef<HTMLOListElement>(null);
  const finaleRef = useRef<HTMLLIElement>(null);
  const reduce = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 75%', 'end 60%'] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  // The line stops at the finish-line marker (20px into the last item), whatever height its card has.
  const [lineBottom, setLineBottom] = useState<number>();
  useEffect(() => {
    const finale = finaleRef.current;
    if (!finale) return;
    const update = () => setLineBottom(finale.offsetHeight - 20);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(finale);
    return () => observer.disconnect();
  }, []);

  // Celebrate once, when the drawn line reaches the finish line.
  const [arrived, setArrived] = useState(false);
  const [burst, setBurst] = useState(false);
  const arrivedRef = useRef(false);
  const arrive = useCallback(() => {
    if (arrivedRef.current) return;
    arrivedRef.current = true;
    setArrived(true);
    setBurst(true);
  }, []);
  useMotionValueEvent(progress, 'change', (value) => {
    if (value >= 0.98) arrive();
  });
  // Page opened (or restored) already past the section.
  useEffect(() => {
    if (scrollYProgress.get() >= 0.98) arrive();
  }, [arrive, scrollYProgress]);
  useEffect(() => {
    if (!burst) return;
    const timer = setTimeout(() => setBurst(false), 2000);
    return () => clearTimeout(timer);
  }, [burst]);
  const finished = reduce || arrived;
  const lineStyle = lineBottom === undefined ? undefined : { bottom: lineBottom };

  return (
    <section id={id} className="overflow-x-clip py-20 sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow={eyebrow}
            title={
              <>
                From your first call to <em>your first offer.</em>
              </>
            }
            intro="A clear, supported path. You always know what comes next and who to ask."
          />
          {children}
          <EnquiryButton className="mt-8" arrow>
            Start with step one
          </EnquiryButton>
        </div>

        <ol ref={listRef} className="relative">
          <span aria-hidden style={lineStyle} className="absolute bottom-6 left-[19px] top-6 w-px bg-line" />
          <motion.span
            aria-hidden
            style={{ ...lineStyle, scaleY: reduce ? 1 : progress }}
            className="absolute bottom-6 left-[19px] top-6 w-px origin-top bg-brand"
          />
          {journey.map((step, index) => (
            <li key={step.title} className="relative flex gap-6 pb-12">
              <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-line bg-paper font-mono text-sm font-medium text-text shadow-soft">
                {String(index + 1).padStart(2, '0')}
                {/* Tick pops in as the progress line reaches this step. */}
                <motion.span
                  aria-hidden
                  initial={reduce ? false : { scale: 0, rotate: -40 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true, margin: '0px 0px -42% 0px' }}
                  transition={{ type: 'spring', stiffness: 420, damping: 16 }}
                  className="absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full bg-emerald-500 text-white ring-2 ring-paper"
                >
                  <Check className="size-3" strokeWidth={3} />
                </motion.span>
              </span>
              <div className="pt-1.5">
                <h3 className="text-xl font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-2 max-w-md leading-relaxed text-muted">{step.text}</p>
              </div>
            </li>
          ))}

          {/* The finish line: the goal every step works towards. */}
          <li ref={finaleRef} className="relative flex gap-6">
            <span className="relative z-10 size-10 shrink-0">
              <span className="absolute inset-0 flex items-center justify-center rounded-full border border-line bg-paper text-faint shadow-soft">
                <PartyPopper aria-hidden className="size-[18px]" />
              </span>
              <motion.span
                aria-hidden
                initial={reduce ? false : { scale: 0 }}
                animate={{ scale: finished ? 1 : 0 }}
                transition={{ type: 'spring', stiffness: 380, damping: 15 }}
                className="absolute inset-0 flex items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_0_0_6px_rgb(16_185_129/0.18)]"
              >
                <PartyPopper className="size-[18px]" />
              </motion.span>
              {burst && !reduce && <Confetti />}
            </span>
            <motion.div
              initial={reduce ? false : { opacity: 0.45, y: 14 }}
              animate={finished ? { opacity: 1, y: 0 } : { opacity: 0.45, y: 14 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                'relative -mt-1 min-w-0 flex-1 rounded-2xl border bg-paper p-5 transition-[border-color,box-shadow] duration-700 sm:p-6',
                finished ? 'border-emerald-500/30 shadow-lift' : 'border-line shadow-soft',
              )}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-[12px] font-semibold uppercase tracking-wider text-muted">
                  {journeyFinale.label}
                </p>
                <motion.span
                  initial={reduce ? false : { opacity: 0, scale: 2, rotate: -20 }}
                  animate={
                    finished ? { opacity: 1, scale: 1, rotate: -6 } : { opacity: 0, scale: 2, rotate: -20 }
                  }
                  transition={{ delay: reduce ? 0 : 0.45, type: 'spring', stiffness: 400, damping: 16 }}
                  className="inline-flex shrink-0 origin-right items-center gap-1 rounded-md border-2 border-emerald-500 px-2 py-0.5 text-[12px] font-bold uppercase tracking-wider text-emerald-600"
                >
                  {journeyFinale.stamp} <Check aria-hidden className="size-3.5" strokeWidth={3.5} />
                </motion.span>
              </div>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">{journeyFinale.title}</h3>
              <p className="mt-2 max-w-md leading-relaxed text-muted">{journeyFinale.text}</p>
            </motion.div>
          </li>
        </ol>
      </Container>
    </section>
  );
}
