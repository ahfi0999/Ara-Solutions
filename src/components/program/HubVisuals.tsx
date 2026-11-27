'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Code2,
  Crown,
  Sprout,
  Terminal,
  TrendingUp,
} from 'lucide-react';
import { AnimatePresence, motion, useInView } from 'motion/react';
import { EASE, useReducedMotionSafe } from '@/components/motion/primitives';
import { ButtonLink } from '@/components/ui/Button';
import { LinkedText } from '@/components/ui/LinkedText';
import { cn } from '@/lib/cn';

/*
 * Animated pieces of the track overview pages (e.g. /training-placement/servicenow-courses/). Each one plays once
 * as it scrolls into view and shows its finished state straight away when the visitor prefers reduced motion.
 */

export type MapCourse = {
  slug: string;
  label: string;
  isNew?: boolean;
  /** Exams the course prepares for (from the comparison table). */
  certifications: string[];
  /** The comparison table's coding note, e.g. "No coding needed". */
  coding: string;
};

const ORBIT = 'motion-safe:animate-[spin_90s_linear_infinite] group-hover/map:[animation-play-state:paused]';
const COUNTER_ORBIT =
  'motion-safe:animate-[spin_90s_linear_infinite_reverse] group-hover/map:[animation-play-state:paused]';
const SPOTLIGHT_EVERY_MS = 2800;

/** A short coding label and its colours for the centre card. */
function codingTag(coding: string) {
  if (/^no coding/i.test(coding))
    return { text: 'No coding needed', className: 'bg-emerald-50 text-emerald-700' };
  if (/required/i.test(coding)) return { text: 'Coding required', className: 'bg-amber-50 text-amber-800' };
  return { text: 'Coding taught', className: 'bg-sky-50 text-sky-700' };
}

/**
 * Hero visual: the track's logo in the middle and every course on a ring around it that slowly orbits (the names
 * stay upright). One course at a time is spotlit: its name lights up, its line glows with a light running out to
 * it, and the centre shows its exams and coding. Pointing at the map pauses the orbit; pointing at a course
 * spotlights it. Each course is a link to its page.
 */
export function CourseMap({ name, logo, courses }: { name: string; logo?: string; courses: MapCourse[] }) {
  const reduce = useReducedMotionSafe();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (reduce || paused || courses.length < 2) return;
    const timer = window.setInterval(
      () => setActive((index) => (index + 1) % courses.length),
      SPOTLIGHT_EVERY_MS,
    );
    return () => window.clearInterval(timer);
  }, [reduce, paused, courses.length]);

  const radius = 34;
  const nodes = courses.map((course, index) => {
    const angle = ((-90 + (index * 360) / courses.length) * Math.PI) / 180;
    return { ...course, x: 50 + radius * Math.cos(angle), y: 50 + radius * Math.sin(angle) };
  });
  const current = nodes[active] ?? nodes[0];
  const exams = current?.certifications.filter((item) => item.length <= 10).slice(0, 3) ?? [];
  const tag = codingTag(current?.coding ?? '');

  return (
    <div
      className="group/map relative mx-auto aspect-square w-full max-w-[470px]"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
    >
      {/* Still rings. */}
      <svg aria-hidden viewBox="0 0 100 100" className="absolute inset-0 size-full overflow-visible">
        <circle cx="50" cy="50" r="48" fill="none" stroke="rgb(255 255 255 / 0.06)" strokeWidth="0.3" />
        <circle cx="50" cy="50" r="23" fill="none" stroke="rgb(255 255 255 / 0.07)" strokeWidth="0.3" />
      </svg>

      {/* The orbit: the ring, the lines and the courses turn together. */}
      <div className={cn('absolute inset-0', ORBIT)}>
        <svg aria-hidden viewBox="0 0 100 100" className="absolute inset-0 size-full overflow-visible">
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="rgb(255 255 255 / 0.16)"
            strokeWidth="0.3"
            strokeDasharray="1 2"
          />
          {nodes.map((node, index) => {
            const on = index === active;
            return (
              <motion.path
                key={node.slug}
                d={`M50 50 L${node.x} ${node.y}`}
                fill="none"
                strokeLinecap="round"
                initial={reduce ? false : { pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: 1,
                  stroke: on ? '#ff7a80' : 'rgba(255,255,255,0.18)',
                  strokeWidth: on ? 0.6 : 0.25,
                }}
                transition={{
                  pathLength: { duration: 0.8, ease: EASE, delay: 0.3 + index * 0.08 },
                  opacity: { duration: 0.8, delay: 0.3 + index * 0.08 },
                  stroke: { duration: 0.4 },
                  strokeWidth: { duration: 0.4 },
                }}
                style={on ? { filter: 'drop-shadow(0 0 1.2px #ff7a80)' } : undefined}
              />
            );
          })}
          {!reduce && current && (
            <motion.circle
              key={`pulse-${current.slug}`}
              r="1.1"
              fill="#ffffff"
              initial={{ cx: 50, cy: 50, opacity: 0 }}
              animate={{ cx: [50, current.x], cy: [50, current.y], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.1, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.25 }}
            />
          )}
        </svg>

        <ul>
          {nodes.map((node, index) => {
            const on = index === active;
            return (
              <li
                key={node.slug}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
              >
                <span className={cn('block', COUNTER_ORBIT)}>
                  <motion.span
                    className="block"
                    initial={reduce ? false : { scale: 0.6, opacity: 0 }}
                    animate={{ scale: on ? 1.08 : 1, opacity: 1 }}
                    transition={{
                      opacity: { duration: 0.4, delay: 0.6 + index * 0.08 },
                      scale: { type: 'spring', stiffness: 300, damping: 18 },
                    }}
                  >
                    <Link
                      href={`/training-placement/${node.slug}/`}
                      onPointerEnter={() => setActive(index)}
                      onFocus={() => setActive(index)}
                      className={cn(
                        'flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1.5 text-[11.5px] font-medium xl:px-3 xl:text-[12.5px] shadow-soft backdrop-blur transition-colors duration-300',
                        on
                          ? 'border-white bg-white text-ink shadow-[0_0_24px_rgb(255_122_128/0.55)]'
                          : 'border-white/15 bg-ink-2/80 text-white/85 hover:border-white hover:bg-white hover:text-ink',
                      )}
                    >
                      {node.label}
                      {node.isNew && (
                        <span className="rounded-full bg-brand px-1.5 text-[10px] font-semibold text-white">
                          New
                        </span>
                      )}
                    </Link>
                  </motion.span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* The centre: the logo and the spotlit course's details. */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span
          aria-hidden
          className="absolute inset-0 rounded-full bg-white/20 motion-safe:animate-[ping_3s_ease-out_infinite]"
        />
        <motion.div
          className="relative flex size-36 flex-col items-center justify-center rounded-full bg-white px-4 text-center shadow-lift xl:size-44 xl:px-5"
          initial={reduce ? false : { scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
        >
          {logo ? (
            // eslint-disable-next-line @next/next/no-img-element -- small SVG logo
            <img src={logo} alt={`${name} logo`} title={`${name} logo`} className="h-auto w-[58%]" />
          ) : (
            <span className="text-base font-semibold tracking-tight text-ink">{name}</span>
          )}
          {current && (
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current.slug}
                aria-live="polite"
                className="mt-2.5 flex flex-col items-center"
                initial={reduce ? false : { opacity: 0, y: 8, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                <span className="text-[13px] font-semibold leading-tight tracking-tight text-ink xl:text-[14px]">
                  {current.label}
                </span>
                {exams.length > 0 && (
                  <span className="mt-1 text-[10.5px] leading-snug text-muted xl:text-[11px]">
                    Exam prep: {exams.join(' · ')}
                  </span>
                )}
                <span
                  className={cn('mt-1.5 rounded-full px-2 py-0.5 text-[10.5px] font-medium', tag.className)}
                >
                  {tag.text}
                </span>
              </motion.div>
            </AnimatePresence>
          )}
        </motion.div>
      </div>
    </div>
  );
}

/** A salary range drawn on a shared scale (in lakh a year); the bar grows from its low end. */
export function SalaryBar({
  min,
  max,
  scale,
  delay = 0,
}: {
  min: number;
  max: number;
  scale: number;
  delay?: number;
}) {
  const reduce = useReducedMotionSafe();
  return (
    <div aria-hidden className="relative h-2.5 w-full rounded-full bg-line/70">
      <motion.span
        className="absolute inset-y-0 origin-left rounded-full bg-gradient-to-r from-brand-300 to-brand"
        style={{ left: `${(min / scale) * 100}%`, width: `${((max - min) / scale) * 100}%` }}
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        transition={{ duration: 1.1, ease: EASE, delay }}
      />
    </div>
  );
}

/** Career path: numbered steps joined by a line that draws across as the steps come into view. */
/** Career path colours, the brand red deepening step by step: start (white), grow (red tint), lead (solid red). */
const PATH_TONES = [
  {
    dot: 'bg-brand-300',
    card: 'border-line bg-paper',
    icon: 'bg-[#fff1f1] text-brand',
    text: 'text-muted',
  },
  {
    dot: 'bg-brand',
    card: 'border-brand/15 bg-[#fff4f3]',
    icon: 'bg-brand text-white',
    text: 'text-muted',
  },
  {
    dot: 'bg-brand-600',
    card: 'border-brand bg-brand text-white',
    icon: 'bg-white text-brand',
    text: 'text-white/85',
  },
] as const;
const PATH_ICONS = [Sprout, TrendingUp, Crown];

export function PathSteps({ steps }: { steps: { stage: string; roles: string }[] }) {
  const reduce = useReducedMotionSafe();
  const inView = { once: true, margin: '0px 0px -12% 0px' } as const;
  return (
    <ol className="relative mt-8 grid gap-5 md:grid-cols-3">
      {/* The line between the step numbers (wide screens, where the steps sit side by side). */}
      <span
        aria-hidden
        className="absolute left-[16%] right-[16%] top-7 hidden h-0.5 rounded-full bg-line md:block"
      >
        <motion.span
          className="block h-full origin-left rounded-full bg-gradient-to-r from-brand via-brand-300 to-brand"
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={inView}
          transition={{ duration: 1.6, ease: EASE, delay: 0.2 }}
        />
        {!reduce && (
          <motion.span
            className="absolute top-1/2 size-2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_10px_3px_rgb(229_35_45/0.65)]"
            initial={{ left: '0%', opacity: 0 }}
            animate={{ left: ['0%', '99%'], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2.4, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.8, delay: 2 }}
          />
        )}
      </span>
      {steps.map((step, index) => (
        <motion.li
          key={step.stage}
          className="relative flex flex-col items-center text-center"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inView}
          transition={{ duration: 0.7, ease: EASE, delay: 0.15 + index * 0.4 }}
        >
          <span
            className={cn(
              'relative z-10 flex size-14 items-center justify-center rounded-full font-mono text-lg font-semibold text-white shadow-lift ring-8 ring-canvas',
              PATH_TONES[index % 3].dot,
            )}
          >
            {index + 1}
          </span>
          <div
            className={cn(
              'group relative mt-5 w-full flex-1 overflow-hidden rounded-3xl border p-6 shadow-soft transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-7',
              PATH_TONES[index % 3].card,
            )}
          >
            <span
              aria-hidden
              className={cn(
                'relative mx-auto flex size-11 items-center justify-center rounded-2xl transition-[rotate,scale] duration-300 group-hover:rotate-[-6deg] group-hover:scale-110',
                PATH_TONES[index % 3].icon,
              )}
            >
              {(() => {
                const Icon = PATH_ICONS[index % 3];
                return <Icon className="size-5" />;
              })()}
            </span>
            <p className="relative mt-4 text-lg font-semibold tracking-tight">{step.stage}</p>
            <p className={cn('relative mt-2 leading-relaxed', PATH_TONES[index % 3].text)}>{step.roles}</p>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}

export type FlowRow = {
  /** Short background, e.g. "HR, payroll or HRIS". */
  label: string;
  /** The full sentence, e.g. "You have an HR, payroll or HRIS background". */
  background: string;
  slug: string;
  name: string;
  certifications: string[];
  role: string;
};

const FLOW_STEPS = ['Your background', 'Your course', 'Exam to aim for', 'Your first role'];
const FLOW_COLUMNS = 'lg:grid-cols-[1fr_3.5rem_1.15fr_3.5rem_1fr_3.5rem_1fr]';

/**
 * "Where to start" as career paths: one row per background, running background → course → exam → first role.
 * As each row scrolls into view its steps appear in turn and the lines between them draw across; a light keeps
 * running along the lines after that. Each course step links to its page.
 */
export function CareerFlow({ rows, note }: { rows: FlowRow[]; note: string }) {
  const reduce = useReducedMotionSafe();
  return (
    <div className="mt-12">
      <div
        aria-hidden
        className={cn('hidden px-3 pb-3 text-[12.5px] font-medium text-faint lg:grid', FLOW_COLUMNS)}
      >
        {FLOW_STEPS.map((step, index) => (
          <span key={step} style={{ gridColumn: index * 2 + 1 }} className="px-1">
            {step}
          </span>
        ))}
      </div>
      <ol className="grid gap-4">
        {rows.map((row) => (
          <motion.li
            key={row.label}
            className={cn(
              'group grid items-stretch rounded-3xl border border-line bg-paper p-3 lg:items-center shadow-soft transition-[box-shadow,border-color] duration-300 hover:border-ink/20 hover:shadow-lift',
              FLOW_COLUMNS,
            )}
            initial={reduce ? false : 'hidden'}
            whileInView="show"
            viewport={{ once: true, margin: '0px 0px -8% 0px' }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.16 } } }}
          >
            <FlowStep step={0}>
              <p className="text-[15px] font-semibold tracking-tight">{row.label}</p>
              <p className="mt-1 text-[13.5px] leading-snug text-muted">{row.background}</p>
            </FlowStep>
            <FlowLink reduce={reduce} />
            <FlowStep step={1} dark>
              <Link
                href={`/training-placement/${row.slug}/`}
                className="flex items-start justify-between gap-3 text-[15px] font-semibold leading-snug tracking-tight after:absolute after:inset-0"
              >
                {row.name}
                <ArrowUpRight
                  aria-hidden
                  className="mt-0.5 size-4 shrink-0 text-brand transition-[translate,color] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                />
              </Link>
            </FlowStep>
            <FlowLink reduce={reduce} />
            <FlowStep step={2}>
              <span className="flex flex-wrap gap-1.5">
                {row.certifications.slice(0, 2).map((name) => (
                  <span
                    key={name}
                    className="inline-flex items-center gap-1 rounded-lg border border-line bg-canvas px-2 py-0.5 text-[13px] font-medium"
                  >
                    <BadgeCheck aria-hidden className="size-3.5 text-emerald-600" />
                    {name}
                  </span>
                ))}
              </span>
            </FlowStep>
            <FlowLink reduce={reduce} />
            <FlowStep step={3}>
              <p className="flex items-start gap-2 text-[14.5px] font-medium leading-snug">
                <BriefcaseBusiness aria-hidden className="mt-0.5 size-4 shrink-0 text-brand" />
                {row.role}
              </p>
            </FlowStep>
          </motion.li>
        ))}
      </ol>
      <p className="mt-5 text-[15px] text-muted">
        <LinkedText>{note}</LinkedText>
      </p>
    </div>
  );
}

/** One step of a career path row. On phones each step carries its own small label (the header row is hidden). */
function FlowStep({ step, dark = false, children }: { step: number; dark?: boolean; children: ReactNode }) {
  return (
    <motion.div
      className={cn(
        'relative rounded-2xl p-4',
        dark
          ? 'bg-[#fff4f3] ring-1 ring-brand/10 transition-colors duration-300 group-hover:bg-brand group-hover:text-white'
          : 'bg-transparent',
      )}
      variants={{
        hidden: { opacity: 0, y: 12, scale: 0.97 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: EASE } },
      }}
    >
      <p
        className={cn(
          'mb-1.5 text-[11.5px] font-medium lg:hidden',
          dark ? 'text-brand transition-colors duration-300 group-hover:text-white/75' : 'text-faint',
        )}
      >
        {FLOW_STEPS[step]}
      </p>
      {children}
    </motion.div>
  );
}

/** The line between two steps: it draws across as the row appears, then a light keeps running along it. */
function FlowLink({ reduce }: { reduce: boolean }) {
  return (
    <div aria-hidden className="relative flex h-5 items-center pl-7 lg:h-auto lg:justify-center lg:pl-0">
      {/* Phones: a short vertical line between stacked steps. */}
      <motion.span
        className="block h-full w-0.5 origin-top rounded-full bg-gradient-to-b from-brand-300 to-brand lg:hidden"
        variants={{ hidden: { scaleY: 0 }, show: { scaleY: 1, transition: { duration: 0.35, ease: EASE } } }}
      />
      {/* Wide screens: a horizontal line with an arrow head and a running light. */}
      <span className="relative hidden h-0.5 w-full lg:block">
        <motion.span
          className="absolute inset-0 origin-left rounded-full bg-gradient-to-r from-brand-300 to-brand"
          variants={{
            hidden: { scaleX: 0 },
            show: { scaleX: 1, transition: { duration: 0.45, ease: EASE } },
          }}
        />
        <motion.span
          className="absolute -right-1 top-1/2 -translate-y-1/2 text-brand"
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { delay: 0.3 } } }}
        >
          <ChevronRight className="size-4" strokeWidth={2.5} />
        </motion.span>
        {!reduce && (
          <motion.span
            className="absolute top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-white shadow-[0_0_8px_2px_rgb(229_35_45/0.6)]"
            initial={{ left: '0%', opacity: 0 }}
            animate={{ left: ['0%', '90%'], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.4, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1.2, delay: 1.2 }}
          />
        )}
      </span>
    </div>
  );
}

/** "Coding" note as a coloured badge: no coding (green), coding taught in the course (blue) or required (amber). */
export function CodingBadge({ text }: { text: string }) {
  const kind = /^no coding/i.test(text) ? 'none' : /required/i.test(text) ? 'required' : 'taught';
  const Icon = kind === 'none' ? Check : kind === 'required' ? Terminal : Code2;
  return (
    <span
      className={cn(
        'inline-flex items-start gap-1.5 rounded-xl px-2.5 py-1 text-[13px] font-medium leading-snug',
        kind === 'none' && 'bg-emerald-50 text-emerald-700',
        kind === 'taught' && 'bg-sky-50 text-sky-700',
        kind === 'required' && 'bg-amber-50 text-amber-800',
      )}
    >
      <Icon aria-hidden className="mt-0.5 size-3.5 shrink-0" strokeWidth={2.5} />
      {text}
    </span>
  );
}

export type ExplorerCourse = {
  slug: string;
  /** Short name for the list, without the track name, e.g. "Masters". */
  label: string;
  name: string;
  isNew?: boolean;
  bestFor: string;
  coding: string;
  /** Exams the course prepares for: code (e.g. "CSA"), full name and the official badge image where there is one. */
  exams: { code: string; name: string; badge?: string }[];
  roles: string[];
};

/** How long each course stays on screen while the explorer plays through them on its own. */
const AUTOPLAY_MS = 5000;
const PANEL_ITEM = {
  hide: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
};
const PANEL_TITLE = {
  hide: { opacity: 0, y: 18, filter: 'blur(6px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.55, ease: EASE } },
};
const PANEL_NUMBER = {
  hide: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};
/** Badges turn in like cards being flipped over, one after another. */
const PANEL_BADGE = {
  hide: { opacity: 0, rotateY: 90, y: 12 },
  show: { opacity: 1, rotateY: 0, y: 0, transition: { duration: 0.6, ease: EASE } },
};
const PANEL_LIST = {
  hide: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const PANEL_CHIP = {
  hide: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { type: 'spring' as const, stiffness: 420, damping: 24 } },
};
const TAB_IN = {
  hidden: { opacity: 0, x: -18 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: EASE } },
};
const ARROW_STEPS: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };

/**
 * "Compare the courses" as an explorer: the courses as a list on the left (buttons in a grid on phones). Picking
 * one slides its panel in on the right: who it suits, how much coding, the official badges of the exams it prepares
 * you for and the roles it leads to. Every panel stays in the page, hidden until picked, so search engines still
 * read the whole comparison. The list works as tabs: arrow keys move between courses.
 *
 * Motion: the list slides in as it scrolls into view; while the explorer is on screen it plays through the courses
 * on its own (a bar fills on the current one), pausing while pointed at and stopping for good once the visitor
 * picks a course or touches it. In the panel the title comes in out of a soft blur, a large course number rises
 * behind it, the badges flip in one by one and then float, with a shine passing over them now and then, and the
 * role chips pop in. None of it plays for visitors who prefer reduced motion.
 */
export function CourseExplorer({ courses }: { courses: ExplorerCourse[] }) {
  const reduce = useReducedMotionSafe();
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const [paused, setPaused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.35 });
  const playing = auto && inView && !paused && !reduce && courses.length > 1;
  const id = useId();
  const tabId = (index: number) => `${id}-tab-${index}`;
  const panelId = (index: number) => `${id}-panel-${index}`;
  const pick = (index: number) => {
    setAuto(false);
    setActive(index);
  };
  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const step = ARROW_STEPS[event.key];
    if (!step) return;
    event.preventDefault();
    const next = (index + step + courses.length) % courses.length;
    pick(next);
    document.getElementById(tabId(next))?.focus();
  };
  return (
    <div
      ref={ref}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setAuto(false)}
      className="mt-10 grid overflow-hidden rounded-3xl border border-line bg-paper shadow-lift lg:grid-cols-[290px_minmax(0,1fr)]"
    >
      <motion.div
        role="tablist"
        aria-label="Courses"
        className="grid grid-cols-2 content-start gap-1.5 border-b border-line bg-canvas/70 p-3 sm:grid-cols-4 lg:grid-cols-1 lg:border-b-0 lg:border-r"
        initial={reduce ? false : 'hidden'}
        whileInView="show"
        viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
      >
        {courses.map((course, index) => {
          const selected = index === active;
          return (
            <motion.button
              key={course.slug}
              variants={TAB_IN}
              id={tabId(index)}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={panelId(index)}
              tabIndex={selected ? 0 : -1}
              onClick={() => pick(index)}
              onKeyDown={(event) => onKeyDown(event, index)}
              className={cn(
                'group/tab relative overflow-hidden rounded-2xl px-4 py-3 text-left transition-colors duration-300',
                selected ? 'text-white' : 'hover:bg-paper',
              )}
            >
              {/* The highlight slides from course to course. */}
              {selected && (
                <motion.span
                  layoutId={`${id}-active`}
                  aria-hidden
                  className="absolute inset-0 rounded-2xl bg-ink shadow-lift"
                  transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 400, damping: 34 }}
                />
              )}
              {/* While playing on its own: a bar fills along the current course, then the next one comes up. */}
              {selected && playing && (
                <motion.span
                  key={`${active}-progress`}
                  aria-hidden
                  className="absolute inset-x-4 bottom-1.5 h-0.5 origin-left rounded-full bg-brand-300"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: AUTOPLAY_MS / 1000, ease: 'linear' }}
                  onAnimationComplete={() => setActive((current) => (current + 1) % courses.length)}
                />
              )}
              <span className="relative flex items-center justify-between gap-2">
                <span className="text-[14.5px] font-semibold leading-snug tracking-tight">
                  {course.label}
                </span>
                {course.isNew ? (
                  <span className="shrink-0 rounded-full bg-brand px-1.5 py-px text-[10px] font-semibold uppercase tracking-wide text-white">
                    New
                  </span>
                ) : (
                  <ChevronRight
                    aria-hidden
                    className={cn(
                      'size-4 shrink-0 transition-[translate,opacity] duration-300 max-lg:hidden',
                      selected
                        ? 'text-brand-300'
                        : 'text-faint opacity-0 group-hover/tab:translate-x-0.5 group-hover/tab:opacity-100',
                    )}
                  />
                )}
              </span>
              <span
                className={cn('relative mt-0.5 block text-[12px]', selected ? 'text-white/60' : 'text-faint')}
              >
                {course.exams.length} {course.exams.length === 1 ? 'exam' : 'exams'}
              </span>
            </motion.button>
          );
        })}
      </motion.div>

      <div className="relative p-6 sm:p-8 lg:p-10">
        {courses.map((course, index) => {
          const current = index === active;
          return (
            <motion.div
              key={course.slug}
              id={panelId(index)}
              role="tabpanel"
              aria-labelledby={tabId(index)}
              hidden={!current}
              initial={false}
              animate={current ? 'show' : 'hide'}
              variants={{
                hide: { opacity: 0, x: reduce ? 0 : 28 },
                show: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.45, ease: EASE, staggerChildren: reduce ? 0 : 0.07 },
                },
              }}
              className="relative"
            >
              {/* A large, faint course number rises behind the title. */}
              <motion.span
                aria-hidden
                variants={PANEL_NUMBER}
                className="pointer-events-none absolute -top-4 right-0 select-none text-[120px] font-semibold leading-none tracking-tighter text-ink/[0.045] max-sm:hidden"
              >
                {String(index + 1).padStart(2, '0')}
              </motion.span>

              <div className="relative flex flex-wrap items-start justify-between gap-4">
                <div>
                  <motion.p variants={PANEL_ITEM} className="text-[13px] font-medium text-brand">
                    Course {index + 1} of {courses.length}
                  </motion.p>
                  <motion.h3
                    variants={PANEL_TITLE}
                    className="mt-1 text-2xl font-semibold tracking-tight sm:text-[28px] sm:leading-tight"
                  >
                    {course.name}
                  </motion.h3>
                </div>
              </div>
              <motion.div variants={PANEL_ITEM} className="relative mt-3">
                <CodingBadge text={course.coding} />
              </motion.div>

              <motion.p
                variants={PANEL_ITEM}
                className="relative mt-5 max-w-2xl text-[16px] leading-relaxed text-muted"
              >
                <span className="font-medium text-ink">Best for: </span>
                {course.bestFor}
              </motion.p>

              <motion.p variants={PANEL_ITEM} className="mt-8 text-[13px] font-medium text-faint">
                Exams it prepares you for
              </motion.p>
              <motion.ul
                variants={PANEL_LIST}
                style={{ perspective: 800 }}
                className="mt-3 flex flex-wrap items-end gap-x-2.5 gap-y-4 sm:gap-x-5"
              >
                {course.exams.map((exam, examIndex) =>
                  exam.badge ? (
                    <motion.li
                      key={exam.code}
                      variants={PANEL_BADGE}
                      className="group/badge flex w-[5.5rem] flex-col items-center gap-1.5 text-center sm:w-24"
                    >
                      {/* After flipping in, each badge floats gently, slightly out of step with the others. */}
                      <motion.span
                        className="relative block size-[5.5rem] sm:size-24"
                        animate={current && !reduce ? { y: [0, -5, 0] } : { y: 0 }}
                        transition={{
                          duration: 3.2,
                          ease: 'easeInOut',
                          repeat: Infinity,
                          delay: 0.8 + examIndex * 0.35,
                        }}
                      >
                        <Image
                          src={exam.badge}
                          alt={`${exam.name} badge`}
                          title={exam.name}
                          width={96}
                          height={96}
                          quality={90}
                          className="size-full drop-shadow-[0_6px_14px_rgb(13_17_80/0.2)] transition-transform duration-300 group-hover/badge:-translate-y-1.5 group-hover/badge:scale-105"
                        />
                        {/* A shine passes over the badge now and then (clipped to the badge's own shape). */}
                        {current && !reduce && (
                          <span
                            aria-hidden
                            className="pointer-events-none absolute inset-0 overflow-hidden transition-transform duration-300 group-hover/badge:-translate-y-1.5 group-hover/badge:scale-105"
                            style={{
                              WebkitMaskImage: `url(${exam.badge})`,
                              maskImage: `url(${exam.badge})`,
                              WebkitMaskSize: 'contain',
                              maskSize: 'contain',
                              WebkitMaskRepeat: 'no-repeat',
                              maskRepeat: 'no-repeat',
                            }}
                          >
                            <motion.span
                              className="absolute inset-y-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/55 to-transparent"
                              initial={{ x: '-150%' }}
                              animate={{ x: '400%' }}
                              transition={{
                                duration: 1.1,
                                ease: 'easeInOut',
                                repeat: Infinity,
                                repeatDelay: 3.4,
                                delay: 0.9 + examIndex * 0.25,
                              }}
                            />
                          </span>
                        )}
                      </motion.span>
                      <span className="text-[12.5px] font-semibold">{exam.code}</span>
                    </motion.li>
                  ) : (
                    <motion.li
                      key={exam.code}
                      variants={PANEL_CHIP}
                      className="flex max-w-xs items-start gap-2 self-center rounded-xl border border-line bg-canvas px-3 py-2 text-[13.5px] font-medium leading-snug"
                    >
                      <BadgeCheck aria-hidden className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                      {exam.name}
                    </motion.li>
                  ),
                )}
              </motion.ul>

              <motion.p variants={PANEL_ITEM} className="mt-8 text-[13px] font-medium text-faint">
                Top roles
              </motion.p>
              <motion.ul variants={PANEL_LIST} className="mt-3 flex flex-wrap gap-2">
                {course.roles.map((role) => (
                  <motion.li
                    key={role}
                    variants={PANEL_CHIP}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-[13.5px] transition-colors duration-300 hover:border-brand/30 hover:bg-brand/[0.04]"
                  >
                    <BriefcaseBusiness aria-hidden className="size-3.5 text-brand" />
                    {role}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div variants={PANEL_ITEM} className="mt-9">
                <ButtonLink href={`/training-placement/${course.slug}/`} arrow>
                  View the {course.label} course
                </ButtonLink>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
