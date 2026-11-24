'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion, useInView } from 'motion/react';
import { Check, CirclePlay, Megaphone, Sparkles, Video } from 'lucide-react';
import { lmsFeatures, lmsIntro, type LmsFeatureKey } from '@/content/lms';
import { cn } from '@/lib/cn';
import { Container, SectionHeading } from '@/components/ui/Section';
import { EASE, Reveal, useReducedMotionSafe } from '@/components/motion/primitives';
import { LMS_ICONS } from '@/components/program/lmsIcons';

const KEYS = lmsFeatures.map((feature) => feature.key);
const STEP_MS = 3400;

/**
 * "Learn on our own platform": the learning platform's features, with an illustrated platform screen.
 * While the section is on screen it steps through the features, lighting up each one on the screen;
 * pointing at (or tapping) a feature shows it and holds it there.
 */
export function LmsPlatform() {
  const [active, setActive] = useState<LmsFeatureKey>(KEYS[0]);
  const [held, setHeld] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.35 });
  const reduce = useReducedMotionSafe();

  useEffect(() => {
    if (!inView || held || reduce) return;
    const timer = window.setInterval(
      () => setActive((key) => KEYS[(KEYS.indexOf(key) + 1) % KEYS.length]),
      STEP_MS,
    );
    return () => window.clearInterval(timer);
  }, [inView, held, reduce]);

  const show = (key: LmsFeatureKey) => {
    setActive(key);
    setHeld(true);
  };

  return (
    <section id="learning-platform" className="overflow-x-clip border-y border-line bg-paper py-20 sm:py-28">
      <Container>
        <div
          ref={ref}
          className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 [&>*]:min-w-0"
        >
          <div>
            <SectionHeading
              eyebrow="Learning platform"
              title={
                <>
                  Learn on <em>our own platform</em>
                </>
              }
              intro={lmsIntro}
            />
            <ul className="mt-10 space-y-1.5" onMouseLeave={() => setHeld(false)}>
              {lmsFeatures.map((feature) => {
                const Icon = LMS_ICONS[feature.key];
                const on = feature.key === active;
                return (
                  <li key={feature.key}>
                    <button
                      type="button"
                      aria-pressed={on}
                      onMouseEnter={() => show(feature.key)}
                      onFocus={() => show(feature.key)}
                      onClick={() => show(feature.key)}
                      onBlur={() => setHeld(false)}
                      className="relative flex w-full items-start gap-4 rounded-2xl p-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                    >
                      {on && (
                        <motion.span
                          layoutId="lms-feature"
                          aria-hidden
                          className="absolute inset-0 rounded-2xl border border-line bg-canvas shadow-soft"
                          transition={{ type: 'spring', stiffness: 400, damping: 36 }}
                        />
                      )}
                      <span
                        className={cn(
                          'relative flex size-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300',
                          on ? 'bg-brand text-white' : 'bg-ink/[0.06] text-ink',
                        )}
                      >
                        <Icon aria-hidden className="size-5" />
                      </span>
                      <span className="relative">
                        <span className="block font-semibold tracking-tight">{feature.title}</span>
                        <span className="mt-0.5 block text-[15px] leading-relaxed text-muted">{feature.text}</span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <Reveal delay={0.1}>
            <PlatformScreen active={active} play={inView} reduce={reduce} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/** One panel of the illustrated screen; the panel for the current feature is lit in red. */
function Panel({ on, className, children }: { on: boolean; className?: string; children: ReactNode }) {
  return (
    <div
      data-on={on || undefined}
      className={cn(
        'rounded-2xl border p-4 transition-[background-color,border-color,box-shadow] duration-500',
        on
          ? 'border-brand/70 bg-white/[0.09] shadow-[0_0_0_4px_rgb(229_35_45/0.18)]'
          : 'border-white/10 bg-white/[0.03]',
        className,
      )}
    >
      {children}
    </div>
  );
}

const LESSONS = [
  { label: 'Lesson 7', done: true },
  { label: 'Lesson 8', done: true },
  { label: 'Lesson 9', done: false },
];

/** An illustration of the learning platform (not a screenshot): live class, recordings, progress, AI helper, updates. */
function PlatformScreen({ active, play, reduce }: { active: LmsFeatureKey; play: boolean; reduce: boolean }) {
  // Count how often each panel has been lit, so its little animation replays every time it comes round.
  const [runs, setRuns] = useState<Record<LmsFeatureKey, number>>({
    live: 0,
    recorded: 0,
    progress: 0,
    ai: 0,
    updates: 0,
  });
  const [typing, setTyping] = useState(false);
  useEffect(() => {
    setRuns((current) => ({ ...current, [active]: current[active] + 1 }));
    if (active !== 'ai' || reduce) return;
    setTyping(true);
    const timer = window.setTimeout(() => setTyping(false), 1300);
    return () => window.clearTimeout(timer);
  }, [active, reduce]);

  const enter = (run: number) => (reduce || run <= 1 ? false : undefined);

  return (
    <figure className="relative">
      <div aria-hidden className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-brand/10 blur-3xl" />
      <div
        role="img"
        aria-label="Illustration of the ARA learning platform: a live class, class recordings, course progress, the AI study helper and trainer updates."
        className="rounded-3xl bg-ink p-4 text-white shadow-lift sm:p-5"
      >
        <div aria-hidden>
          <div className="flex items-center justify-between px-1 pb-4">
            <span className="flex items-center gap-2 text-[13px] font-medium text-white/80">
              <span className="flex size-6 items-center justify-center rounded-md bg-brand text-[11px] font-bold">
                A
              </span>
              ARA learning platform
            </span>
            <span className="text-[12px] text-white/40">My course</span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {/* Live class */}
            <Panel on={active === 'live'} className="sm:col-span-2">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-brand/20 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-300">
                    <span className="relative flex size-2">
                      <span className="absolute inset-0 rounded-full bg-brand motion-safe:animate-ping" />
                      <span className="relative size-2 rounded-full bg-brand" />
                    </span>
                    Live now
                  </span>
                  <p className="mt-3 font-semibold tracking-tight">Batch class with your trainer</p>
                  <p className="mt-0.5 text-[13px] text-white/50">On Zoom</p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-ink">
                  <Video className="size-4" />
                  Join class
                </span>
              </div>
            </Panel>

            {/* Recordings: the newest one slides in */}
            <Panel on={active === 'recorded'}>
              <p className="text-[13px] font-medium text-white/60">Class recordings</p>
              <ul className="mt-3 space-y-2 text-[13px]">
                <motion.li
                  key={runs.recorded}
                  initial={enter(runs.recorded) ?? { opacity: 0, x: 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: EASE }}
                  className="flex items-center gap-2.5 rounded-xl bg-white/[0.06] px-3 py-2"
                >
                  <CirclePlay className="size-4 shrink-0 text-brand-300" />
                  Class 12
                  <span className="ml-auto rounded-full bg-emerald-400/15 px-2 py-0.5 text-[11px] font-medium text-emerald-300">
                    Added
                  </span>
                </motion.li>
                {['Class 11', 'Class 10'].map((label) => (
                  <li key={label} className="flex items-center gap-2.5 rounded-xl bg-white/[0.03] px-3 py-2 text-white/60">
                    <CirclePlay className="size-4 shrink-0 text-white/40" />
                    {label}
                  </li>
                ))}
              </ul>
            </Panel>

            {/* Progress: the bar fills, lessons tick off */}
            <Panel on={active === 'progress'}>
              <div className="flex items-baseline justify-between">
                <p className="text-[13px] font-medium text-white/60">Course progress</p>
                <span className="text-lg font-semibold tracking-tight">68%</span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                <motion.span
                  key={runs.progress}
                  className="block h-full origin-left rounded-full bg-brand"
                  initial={reduce ? false : { scaleX: 0 }}
                  animate={{ scaleX: play || reduce ? 0.68 : 0 }}
                  transition={{ duration: 1.2, ease: EASE }}
                />
              </div>
              <ul className="mt-3 space-y-1.5 text-[13px] text-white/70">
                {LESSONS.map((lesson, index) => (
                  <li key={lesson.label} className="flex items-center gap-2">
                    <motion.span
                      key={`${lesson.label}-${runs.progress}`}
                      initial={enter(runs.progress) ?? { scale: 0.4, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.25, type: 'spring', stiffness: 500, damping: 22 }}
                      className={cn(
                        'flex size-4 items-center justify-center rounded-full',
                        lesson.done ? 'bg-emerald-400/20 text-emerald-300' : 'bg-white/10 text-white/30',
                      )}
                    >
                      <Check className="size-3" strokeWidth={3} />
                    </motion.span>
                    {lesson.label}
                    <span className="ml-auto text-[12px] text-white/40">{lesson.done ? 'Watched' : 'In progress'}</span>
                  </li>
                ))}
              </ul>
            </Panel>

            {/* AI study helper: a question, then a reply after a moment of typing */}
            <Panel on={active === 'ai'}>
              <p className="flex items-center gap-2 text-[13px] font-medium text-white/60">
                <Sparkles className="size-4 text-brand-300" />
                AI study helper
              </p>
              <div className="mt-3 space-y-2 text-[13px]">
                <p className="ml-auto w-fit max-w-[90%] rounded-2xl rounded-br-md bg-white/10 px-3 py-2">
                  Can you explain this topic simply?
                </p>
                <div className="flex h-9 w-fit max-w-[90%] items-center rounded-2xl rounded-bl-md bg-brand/20 px-3">
                  {typing ? (
                    <span className="flex gap-1" aria-hidden>
                      {[0, 1, 2].map((dot) => (
                        <motion.span
                          key={dot}
                          className="size-1.5 rounded-full bg-white/70"
                          animate={{ y: [0, -3, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: dot * 0.15 }}
                        />
                      ))}
                    </span>
                  ) : (
                    <motion.span
                      key={runs.ai}
                      initial={enter(runs.ai) ?? { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      Sure. Here is a short summary…
                    </motion.span>
                  )}
                </div>
              </div>
            </Panel>

            {/* Trainer updates: the megaphone gives a nudge */}
            <Panel on={active === 'updates'}>
              <p className="flex items-center gap-2 text-[13px] font-medium text-white/60">
                <motion.span
                  key={runs.updates}
                  className="inline-flex"
                  initial={false}
                  animate={reduce || runs.updates <= 1 ? undefined : { rotate: [0, -16, 12, -8, 0] }}
                  transition={{ duration: 0.7 }}
                >
                  <Megaphone className="size-4 text-brand-300" />
                </motion.span>
                From your trainer
              </p>
              <p className="mt-3 text-[14px] leading-snug">Tomorrow&apos;s class starts 30 minutes early.</p>
              <p className="mt-2 text-[12px] text-white/40">Batch announcement</p>
            </Panel>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-[12px] text-faint">
        An illustration of the learning platform.
      </figcaption>
    </figure>
  );
}
