'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { AnimatePresence, motion, useInView } from 'motion/react';
import { Check, Database, Search, Timer } from 'lucide-react';
import { hiringProcess, sourcingChannels } from '@/content/home';
import { cn } from '@/lib/cn';
import { Container, SectionHeading } from '@/components/ui/Section';
import { ButtonLink } from '@/components/ui/Button';
import { EASE, useReducedMotionSafe } from '@/components/motion/primitives';

/*
 * Desktop diagram geometry, after slide 6 of ARA's pitch deck. Positions are percentages of the
 * diagram box; the SVG lines use the same box (1000 x 470 units), so cards and lines stay aligned at any width.
 */
const W = 1000;
const H = 470;
const COL = [6.25, 18.75, 31.25, 43.75, 56.25, 68.75, 81.25, 93.75];
const ROW = { top: 13, main: 45, bottom: 77, label: 95 };
/** Where each of the eight steps sits: column index and row. Steps 3 to 5 form the open-market lane. */
const PLACE: [number, 'main' | 'bottom'][] = [
  [0, 'main'],
  [1, 'main'],
  [2, 'bottom'],
  [3, 'bottom'],
  [4, 'bottom'],
  [5, 'main'],
  [6, 'main'],
  [7, 'main'],
];
const px = (x: number) => (x / 100) * W;
const py = (y: number) => (y / 100) * H;
const R = 16;
const SPLIT = px(COL[1]);
const MERGE = px(COL[5]);
const MAIN = py(ROW.main);
/** A lane leaves "Candidate sourcing", runs along row `y` and rejoins at "Profile submission". */
const lane = (y: number) => {
  const d = y < MAIN ? -1 : 1;
  return `M ${SPLIT} ${MAIN} V ${y - d * R} Q ${SPLIT} ${y} ${SPLIT + R} ${y} H ${MERGE - R} Q ${MERGE} ${y} ${MERGE} ${y - d * R} V ${MAIN}`;
};
const PATHS = {
  head: `M ${px(COL[0])} ${MAIN} H ${SPLIT}`,
  fast: lane(py(ROW.top)),
  slow: lane(py(ROW.bottom)),
  tail: `M ${MERGE} ${MAIN} H ${px(COL[7])}`,
};

/*
 * Drawing order once the diagram scrolls into view: the first two steps, then both lanes draw at once.
 * The database lane arrives first (the 2-4 hour path), the open-market lane follows, then the last steps.
 */
const LINE = {
  head: { delay: 0.15, duration: 0.45 },
  fast: { delay: 0.65, duration: 0.6 },
  slow: { delay: 0.65, duration: 1.5 },
  tail: { delay: 2.2, duration: 0.7 },
};
const CARD_DELAY = [0, 0.2, 0.9, 1.25, 1.6, 1.25, 2.45, 2.75];

/*
 * The candidate story, which starts once the lines are drawn and then repeats. Two candidates walk the whole
 * process at the same time: the database candidate (red) goes straight from sourcing to submission; the
 * open-market candidate (navy) stops at each check while a spinner runs. Every step a candidate passes lights
 * up and gets a tick; arrival at "Profile submission" shows the time badge; arrival at "Offer & joining" pulses.
 * Speeds are in diagram units per second (the diagram is 1000 units wide).
 */
type Lane = 'fast' | 'slow';
const LANES: Lane[] = ['fast', 'slow'];
const JOURNEY: Record<Lane, { d: string; steps: number[]; speed: number; color: string; time: string }> = {
  fast: {
    d: `${PATHS.head} ${PATHS.fast} ${PATHS.tail}`,
    steps: [0, 1, 5, 6, 7],
    speed: 190,
    color: 'var(--color-brand)',
    time: sourcingChannels.database.time,
  },
  slow: {
    d: `${PATHS.head} ${PATHS.slow} ${PATHS.tail}`,
    steps: [0, 1, 2, 3, 4, 5, 6, 7],
    speed: 150,
    color: 'var(--color-navy)',
    time: sourcingChannels.openMarket.time,
  },
};
const JOURNEY_AFTER_MS = 3100;
/** Open-market checks where the navy candidate pauses before getting its tick. */
const CHECK_STEPS = [2, 3, 4];
const CHECK_MS = 1400;
const GLOW_MS = 900;
const HIRED_MS = 1800;
/** Pause after both candidates are hired, before the story starts again. */
const RESTART_MS = 2600;

type Story = {
  /** Steps that have been passed, with the candidate who passed first. */
  ticks: Partial<Record<number, Lane>>;
  /** Steps a candidate is passing through right now. */
  glow: Partial<Record<number, Lane>>;
  /** The open-market check currently running. */
  checking: number | null;
  /** Candidates who have reached "Profile submission". */
  arrived: Lane[];
  /** Hires so far in this round (drives the pulse on the last step). */
  hires: number;
  hiredFlash: boolean;
};
const EMPTY: Story = { ticks: {}, glow: {}, checking: null, arrived: [], hires: 0, hiredFlash: false };

function pad(n: number) {
  return String(n).padStart(2, '0');
}

/** Centre of a step card, in diagram units. */
function stepCentre(index: number) {
  const [col, row] = PLACE[index];
  return { x: px(COL[col]), y: py(ROW[row]) };
}

/** Distance along `path` at which it passes the centre of each step, searching forwards. */
function stepDistances(path: SVGPathElement, steps: number[]) {
  const total = path.getTotalLength();
  const out: number[] = [];
  let from = 0;
  for (const step of steps) {
    const c = stepCentre(step);
    let best = from;
    let bestGap = Infinity;
    for (let l = from; l <= total; l += 2) {
      const p = path.getPointAtLength(l);
      const gap = Math.hypot(p.x - c.x, p.y - c.y);
      if (gap < bestGap) {
        bestGap = gap;
        best = l;
      } else if (bestGap < 4 && gap > bestGap + 20) break;
    }
    out.push(best);
    from = best;
  }
  return out;
}

function Tick({ className }: { className?: string }) {
  return (
    <motion.span
      initial={{ scale: 0, rotate: -40 }}
      animate={{ scale: 1, rotate: 0 }}
      exit={{ scale: 0, opacity: 0, transition: { duration: 0.2 } }}
      transition={{ type: 'spring', stiffness: 420, damping: 16 }}
      className={cn(
        'flex size-6 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_4px_12px_-2px_rgb(16_185_129/0.6)] ring-2 ring-paper',
        className,
      )}
    >
      <Check aria-hidden className="size-3.5" strokeWidth={3} />
    </motion.span>
  );
}

/*
 * The candidates. Each round, ARA sources one requirement through both channels at once: a candidate from our
 * database (red route) and one from the open market (navy route). Roles come from the site's own role list,
 * so rounds alternate between IT and non-IT hiring. The people are illustrations, not real candidates.
 */
const REQUIREMENTS = [
  'Salesforce Admin · 5 yrs',
  'HR Executive · 3 yrs',
  'Data Engineer · 4 yrs',
  'Finance Analyst · 2 yrs',
];
const AVATARS = [
  { bg: '#fde2e4', skin: '#c68863', hair: '#2b1d16', shirt: '#1f2680', hairStyle: 'short' },
  { bg: '#e0e7ff', skin: '#8d5a3b', hair: '#1a1210', shirt: '#e5232d', hairStyle: 'long' },
  { bg: '#dcfce7', skin: '#f1c7a5', hair: '#6b4226', shirt: '#0f766e', hairStyle: 'short' },
  { bg: '#fef3c7', skin: '#a86b48', hair: '#231815', shirt: '#4338ca', hairStyle: 'bun' },
  { bg: '#ede9fe', skin: '#e0ac85', hair: '#3b2416', shirt: '#be123c', hairStyle: 'long' },
  { bg: '#cffafe', skin: '#6f4430', hair: '#120c0a', shirt: '#334155', hairStyle: 'short' },
] as const;
/** The open-market checks the navy candidate collects, in order (steps 3 to 5). */
const SLOW_BADGES = [
  { step: 2, label: 'Screened' },
  { step: 3, label: 'L1 + video' },
  { step: 4, label: 'Verified' },
];
/** Where each candidate's clock starts ("Candidate sourcing") and stops ("Profile submission"), as journey stops. */
const CLOCK = { fast: [1, 2], slow: [1, 5] } as const;

/** A small illustrated person (not a real candidate). */
function Avatar({ variant, className }: { variant: number; className?: string }) {
  const a = AVATARS[variant % AVATARS.length];
  return (
    <span className={cn('block overflow-hidden rounded-full', className)}>
      <svg viewBox="0 0 40 40" className="size-full" aria-hidden>
        <rect width="40" height="40" fill={a.bg} />
        {a.hairStyle === 'long' && <path d="M11.5 21 Q11 8 20 8 Q29 8 28.5 21 L29 31 H11 Z" fill={a.hair} />}
        <path d="M7 40 Q7 28.5 20 28.5 Q33 28.5 33 40 Z" fill={a.shirt} />
        <rect x="17" y="23" width="6" height="7" rx="2.5" fill={a.skin} />
        <circle cx="20" cy="18" r="7.2" fill={a.skin} />
        <path
          d="M12.8 17.5 Q12.6 9.6 20 9.6 Q27.4 9.6 27.2 17.5 Q25 13.6 20 13.4 Q15 13.6 12.8 17.5 Z"
          fill={a.hair}
        />
        {a.hairStyle === 'bun' && <circle cx="20" cy="8.4" r="3.6" fill={a.hair} />}
      </svg>
    </span>
  );
}

/** Typewriter easing: jumps one character at a time. */
const typing =
  (characters: number) =>
  (t: number): number =>
    Math.round(t * characters) / characters;

/**
 * The middle of the diagram: one requirement being sourced through both channels at the same time.
 * It follows the candidates: the database finds a match and submits; the open market runs its three checks.
 */
function SourcingDesk({
  story,
  round,
  still,
  appearProps,
}: {
  story: Story;
  round: number;
  /** Reduced motion: show the finished state. */
  still: boolean;
  appearProps: object;
}) {
  const requirement = REQUIREMENTS[round % REQUIREMENTS.length];
  const fastStatus =
    still || story.arrived.includes('fast') ? 'done' : story.ticks[1] ? 'matching' : 'searching';
  const slowDone = still || story.arrived.includes('slow');
  return (
    <motion.div
      {...appearProps}
      style={{ left: '44%', top: '40%', width: '35%' }}
      className="absolute -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-line bg-paper/95 p-3 shadow-soft backdrop-blur xl:p-4"
    >
      <div className="flex items-center gap-2 rounded-xl border border-line bg-canvas px-3 py-1.5 text-[12px] xl:py-2 xl:text-[13px]">
        <Search aria-hidden className="size-3.5 shrink-0 text-muted" />
        <motion.span
          key={round}
          className="inline-block truncate whitespace-pre font-medium"
          initial={still ? false : { clipPath: 'inset(0 100% 0 0)' }}
          animate={{ clipPath: 'inset(0 0% 0 0)' }}
          transition={{ duration: 1.2, ease: typing(requirement.length) }}
        >
          {requirement}
        </motion.span>
        <span aria-hidden className="h-3.5 w-px shrink-0 animate-pulse bg-ink/60" />
        <span className="ml-auto hidden shrink-0 rounded-full bg-ink px-2 py-0.5 text-[10px] font-medium text-white xl:inline">
          New requirement
        </span>
      </div>
      <p className="mt-2 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted xl:mt-2.5">
        Both channels, in parallel
      </p>
      <div className="mt-2 grid grid-cols-2 gap-2 xl:mt-2.5 xl:gap-2.5">
        {/* Our database */}
        <div className="rounded-xl border border-brand/25 bg-brand/[0.04] p-2.5">
          <p className="flex items-center justify-between gap-1 text-[12px] font-semibold">
            <span className="flex items-center gap-1.5">
              <Database aria-hidden className="size-3.5 text-brand" />
              {sourcingChannels.database.name}
            </span>
            <span className="hidden items-center gap-0.5 text-[10.5px] text-brand xl:flex">
              <Timer aria-hidden className="size-3" /> {sourcingChannels.database.time}
            </span>
          </p>
          <p className="mt-0.5 hidden text-[11px] leading-snug text-muted xl:block">
            10,000+ screened talent profiles
          </p>
          <div className="mt-1.5 flex h-5 items-center gap-1.5 text-[11px] xl:mt-2">
            {fastStatus === 'done' ? (
              <span className="flex items-center gap-1 font-medium text-emerald-700">
                <Check aria-hidden className="size-3.5" strokeWidth={3} /> Match submitted
              </span>
            ) : fastStatus === 'matching' ? (
              <>
                <span className="flex -space-x-1.5">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={`${round}-${i}`}
                      initial={{ opacity: 0, scale: 0.4 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.15, type: 'spring', stiffness: 500, damping: 22 }}
                    >
                      <Avatar variant={round * 2 + i + 2} className="size-5 ring-2 ring-paper" />
                    </motion.span>
                  ))}
                </span>
                <span className="text-muted">Matching profiles…</span>
              </>
            ) : (
              <span className="flex items-center gap-1.5 text-muted">
                <span
                  aria-hidden
                  className="size-3 animate-spin rounded-full border-2 border-brand/25 border-t-brand"
                />
                Searching…
              </span>
            )}
          </div>
        </div>
        {/* Open market */}
        <div className="rounded-xl border border-navy/20 bg-navy/[0.04] p-2.5">
          <p className="flex items-center justify-between gap-1 text-[12px] font-semibold">
            <span className="flex items-center gap-1.5">
              <Search aria-hidden className="size-3.5 text-navy" />
              {sourcingChannels.openMarket.name}
            </span>
            <span className="hidden items-center gap-0.5 text-[10.5px] text-navy xl:flex">
              <Timer aria-hidden className="size-3" /> {sourcingChannels.openMarket.time}
            </span>
          </p>
          <p className="mt-0.5 hidden text-[11px] leading-snug text-muted xl:block">
            Full assessment, step by step
          </p>
          <div className="mt-1.5 flex flex-wrap gap-1 xl:mt-2">
            {SLOW_BADGES.map((badge) => {
              const passed = still || slowDone || Boolean(story.ticks[badge.step]);
              const checking = !still && story.checking === badge.step;
              return (
                <span
                  key={badge.label}
                  className={cn(
                    'flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10.5px] font-medium transition-colors duration-300',
                    passed
                      ? 'bg-emerald-500/15 text-emerald-700'
                      : checking
                        ? 'bg-navy text-white'
                        : 'bg-ink/5 text-faint',
                  )}
                >
                  {passed ? (
                    <Check aria-hidden className="size-3" strokeWidth={3} />
                  ) : checking ? (
                    <span
                      aria-hidden
                      className="size-2.5 animate-spin rounded-full border-[1.5px] border-white/30 border-t-white"
                    />
                  ) : null}
                  {badge.label}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/** Desktop: the full flow diagram with drawn lines, two candidates travelling it and the sourcing desk. */
function FlowDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const journeyRefs = { fast: useRef<SVGPathElement>(null), slow: useRef<SVGPathElement>(null) };
  const trailRefs = { fast: useRef<SVGPathElement>(null), slow: useRef<SVGPathElement>(null) };
  const travellerRefs = { fast: useRef<HTMLDivElement>(null), slow: useRef<HTMLDivElement>(null) };
  const clockRefs = { fast: useRef<HTMLSpanElement>(null), slow: useRef<HTMLSpanElement>(null) };
  const reduce = useReducedMotionSafe();
  const started = useInView(ref, { once: true, amount: 0.35 });
  const onScreen = useInView(ref, { amount: 0 });
  const onScreenRef = useRef(false);
  const [running, setRunning] = useState(false);
  const [story, setStory] = useState<Story>(EMPTY);
  const [round, setRound] = useState(0);
  const show = started || reduce;

  useEffect(() => {
    onScreenRef.current = onScreen;
  }, [onScreen]);

  // Start the candidates once the drawing has finished.
  useEffect(() => {
    if (!started || reduce) return;
    const timer = setTimeout(() => setRunning(true), JOURNEY_AFTER_MS);
    return () => clearTimeout(timer);
  }, [started, reduce]);

  // The candidate loop: moves both travellers every frame and updates the story when they pass a step.
  useEffect(() => {
    if (!running) return;
    const box = ref.current;
    const paths = { fast: journeyRefs.fast.current, slow: journeyRefs.slow.current };
    if (!box || !paths.fast || !paths.slow) return;
    const total = { fast: paths.fast.getTotalLength(), slow: paths.slow.getTotalLength() };
    const stops = {
      fast: stepDistances(paths.fast, JOURNEY.fast.steps),
      slow: stepDistances(paths.slow, JOURNEY.slow.steps),
    };
    // Diagram units to pixels (the box keeps the 1000 x 470 shape).
    let scale = box.clientWidth / W;
    const resize = new ResizeObserver(() => (scale = box.clientWidth / W));
    resize.observe(box);
    for (const key of LANES) {
      const trail = trailRefs[key].current;
      if (trail) trail.style.strokeDasharray = `${total[key]} ${total[key]}`;
    }
    const timers: ReturnType<typeof setTimeout>[] = [];
    const fresh = () => ({ d: 0, next: 0, pauseUntil: 0, pausedAt: -1, done: false });
    const walk = { fast: fresh(), slow: fresh() };
    let restartAt = 0;
    let last = performance.now();
    let frame = 0;

    const clockText = (key: Lane, d: number) => {
      const [from, to] = CLOCK[key];
      const f = Math.min(1, Math.max(0, (d - stops[key][from]) / (stops[key][to] - stops[key][from])));
      if (f >= 1) return JOURNEY[key].time;
      return `${Math.round(f * (key === 'fast' ? 3 : 48))}h`;
    };
    const place = (key: Lane) => {
      const w = walk[key];
      const p = paths[key]!.getPointAtLength(w.d);
      const traveller = travellerRefs[key].current;
      if (traveller) {
        traveller.style.transform = `translate(${(p.x * scale).toFixed(1)}px, ${(p.y * scale).toFixed(1)}px) translate(-50%, -50%)`;
        traveller.style.opacity = w.done ? '0' : '1';
      }
      const trail = trailRefs[key].current;
      if (trail) trail.style.strokeDashoffset = `${total[key] - w.d}`;
      const clock = clockRefs[key].current;
      if (clock) clock.textContent = clockText(key, w.d);
    };
    const pass = (key: Lane, step: number) => {
      setStory((s) => ({
        ...s,
        ticks: s.ticks[step] ? s.ticks : { ...s.ticks, [step]: key },
        glow: { ...s.glow, [step]: key },
        checking: s.checking === step ? null : s.checking,
        arrived: step === 5 && !s.arrived.includes(key) ? [...s.arrived, key] : s.arrived,
        hires: step === 7 ? s.hires + 1 : s.hires,
        hiredFlash: step === 7 ? true : s.hiredFlash,
      }));
      timers.push(
        setTimeout(
          () =>
            setStory((s) => (s.glow[step] === key ? { ...s, glow: { ...s.glow, [step]: undefined } } : s)),
          GLOW_MS,
        ),
      );
      if (step === 7) timers.push(setTimeout(() => setStory((s) => ({ ...s, hiredFlash: false })), HIRED_MS));
    };

    const loop = (now: number) => {
      frame = requestAnimationFrame(loop);
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (!onScreenRef.current) return; // pause while the diagram is off screen
      if (restartAt && now >= restartAt) {
        restartAt = 0;
        walk.fast = fresh();
        walk.slow = fresh();
        setStory(EMPTY);
        setRound((r) => r + 1);
      }
      for (const key of LANES) {
        const w = walk[key];
        if (w.done) {
          place(key);
          continue;
        }
        if (w.pauseUntil) {
          if (now < w.pauseUntil) continue;
          w.pauseUntil = 0;
          pass(key, w.pausedAt);
          w.pausedAt = -1;
        }
        w.d = Math.min(total[key], w.d + JOURNEY[key].speed * dt);
        while (w.next < stops[key].length && w.d >= stops[key][w.next]) {
          const step = JOURNEY[key].steps[w.next];
          w.next += 1;
          if (key === 'slow' && CHECK_STEPS.includes(step)) {
            w.d = stops[key][w.next - 1];
            w.pauseUntil = now + CHECK_MS;
            w.pausedAt = step;
            setStory((s) => ({ ...s, checking: step, glow: { ...s.glow, [step]: key } }));
            break;
          }
          pass(key, step);
        }
        if (w.d >= total[key] && !w.pauseUntil) w.done = true;
        place(key);
      }
      if (!restartAt && walk.fast.done && walk.slow.done) restartAt = now + RESTART_MS;
    };

    place('fast');
    place('slow');
    frame = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      timers.forEach(clearTimeout);
    };
    // The refs are stable; the loop only needs to start once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);

  const appear = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 14 },
    animate: show ? { opacity: 1, y: 0 } : undefined,
    transition: { duration: 0.55, ease: EASE, delay },
  });
  const draw = (key: keyof typeof LINE, color: string) => (
    <motion.path
      d={PATHS[key]}
      fill="none"
      stroke={color}
      strokeWidth={2.5}
      strokeLinecap="butt"
      initial={reduce ? false : { pathLength: 0 }}
      animate={show ? { pathLength: 1 } : undefined}
      transition={{ duration: LINE[key].duration, delay: LINE[key].delay, ease: 'easeInOut' }}
    />
  );
  const timeBadge = (key: Lane, top: string) => (
    <motion.p
      key={key}
      initial={{ opacity: 0, y: 8, scale: 0.85 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
      transition={{ type: 'spring', stiffness: 380, damping: 20 }}
      style={{ left: `${COL[5] + 6.2}%`, top }}
      className={cn(
        'absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-1 text-[12px] font-semibold text-white shadow-soft',
        key === 'fast' ? 'bg-brand' : 'bg-navy',
      )}
    >
      <Check aria-hidden className="size-3.5" strokeWidth={3} />
      {JOURNEY[key].time}
    </motion.p>
  );
  const requirementRole = REQUIREMENTS[round % REQUIREMENTS.length].split(' · ')[0];

  return (
    <div ref={ref} className="relative mt-14 hidden aspect-[1000/470] w-full lg:block">
      <svg aria-hidden viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full overflow-visible">
        {/* Light track, always visible, then the drawn colour on top. */}
        {Object.values(PATHS).map((d) => (
          <path key={d} d={d} fill="none" stroke="var(--color-line)" strokeWidth={2.5} />
        ))}
        {draw('head', 'var(--color-ink)')}
        {draw('fast', 'var(--color-brand)')}
        {draw('slow', 'var(--color-navy)')}
        {draw('tail', 'var(--color-ink)')}
        {/* The lit trail each candidate leaves behind them. */}
        {running &&
          LANES.map((key) => (
            <path
              key={key}
              ref={trailRefs[key]}
              d={JOURNEY[key].d}
              fill="none"
              stroke={JOURNEY[key].color}
              strokeWidth={9}
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={0.16}
            />
          ))}
        {/* Invisible full journeys, used to move the candidates. */}
        <path ref={journeyRefs.fast} d={JOURNEY.fast.d} fill="none" stroke="none" />
        <path ref={journeyRefs.slow} d={JOURNEY.slow.d} fill="none" stroke="none" />
      </svg>

      {/* Lane labels: the database label sits just above its line, so candidates can pass beneath it. */}
      <motion.p
        {...appear(0.85)}
        style={{ left: `${(COL[1] + COL[5]) / 2}%`, top: '3.5%' }}
        className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-brand/30 bg-paper px-4 py-2 text-[13px] shadow-soft xl:text-[14px]"
      >
        <Database aria-hidden className="size-4 text-brand" />
        <span className="font-semibold">{sourcingChannels.database.name}:</span>
        <span className="text-muted">{sourcingChannels.database.text}</span>
        <strong className="font-semibold text-brand">{sourcingChannels.database.time}</strong>
      </motion.p>
      <SourcingDesk story={story} round={round} still={reduce} appearProps={appear(0.7)} />
      <motion.p
        {...appear(2.05)}
        style={{ left: `${COL[3]}%`, top: `${ROW.label}%` }}
        className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-line bg-paper px-4 py-2 text-[13px] shadow-soft xl:text-[14px]"
      >
        <Search aria-hidden className="size-4 text-navy" />
        <span className="font-semibold">{sourcingChannels.openMarket.name}:</span>
        <span className="text-muted">{sourcingChannels.openMarket.text}</span>
        <strong className="font-semibold text-navy">{sourcingChannels.openMarket.time}</strong>
      </motion.p>

      {/*
       * The travelling candidates: a card with an illustrated person, the role, their checks and a clock.
       * They pass behind the step cards, so each one goes "into" a step and comes out with a new badge.
       */}
      {running &&
        LANES.map((key) => (
          <div
            key={key}
            ref={travellerRefs[key]}
            className="pointer-events-none absolute left-0 top-0 opacity-0 transition-opacity duration-500 will-change-transform"
          >
            <div
              className={cn(
                'flex w-[160px] items-center gap-2 rounded-xl border bg-paper/95 p-1.5 pr-2 shadow-lift backdrop-blur xl:w-[200px]',
                key === 'fast' ? 'border-brand/40' : 'border-navy/30',
              )}
            >
              <Avatar
                variant={round * 2 + (key === 'fast' ? 0 : 1)}
                className={cn('size-8 shrink-0 ring-2', key === 'fast' ? 'ring-brand' : 'ring-navy')}
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] font-semibold leading-tight">{requirementRole}</p>
                <div className="mt-0.5 flex items-center justify-between gap-1">
                  {key === 'fast' ? (
                    <p className="flex items-center gap-1 text-[10px] text-muted">
                      <Check aria-hidden className="size-3 text-emerald-600" strokeWidth={3} />
                      <span className="hidden xl:inline">Pre-screened</span>
                      <span className="xl:hidden">Database</span>
                    </p>
                  ) : (
                    <p className="flex gap-0.5">
                      {SLOW_BADGES.map((badge) => {
                        const passed = Boolean(story.ticks[badge.step]);
                        return (
                          <span
                            key={badge.label}
                            title={badge.label}
                            className={cn(
                              'flex h-4 min-w-4 items-center justify-center rounded px-1 text-[9px] font-medium leading-4 transition-colors duration-300',
                              passed ? 'bg-emerald-500/15 text-emerald-700' : 'bg-ink/5 text-faint',
                            )}
                          >
                            {/* Full labels where there is room; small tick chips on smaller laptops. */}
                            <span className="hidden xl:inline">
                              {passed ? '✓ ' : ''}
                              {badge.label === 'L1 + video' ? 'L1' : badge.label}
                            </span>
                            <span className="xl:hidden">
                              {passed ? (
                                <Check aria-hidden className="size-2.5" strokeWidth={3.5} />
                              ) : (
                                <span aria-hidden className="block size-1.5 rounded-full bg-current" />
                              )}
                            </span>
                          </span>
                        );
                      })}
                    </p>
                  )}
                  {/* The clock: hours since sourcing started, until the profile is submitted. */}
                  <span
                    ref={clockRefs[key]}
                    className={cn(
                      'shrink-0 rounded px-1 font-mono text-[9.5px] leading-4 text-white',
                      key === 'fast' ? 'bg-brand' : 'bg-navy',
                    )}
                  >
                    0h
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}

      {/* Time badges when each candidate reaches "Profile submission". */}
      <AnimatePresence>
        {story.arrived.includes('fast') && timeBadge('fast', '27%')}
        {story.arrived.includes('slow') && timeBadge('slow', '64%')}
      </AnimatePresence>
      <AnimatePresence>
        {story.hiredFlash && (
          <motion.p
            key="hired"
            initial={{ opacity: 0, y: 10, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, transition: { duration: 0.3 } }}
            transition={{ type: 'spring', stiffness: 380, damping: 20 }}
            style={{ left: `${COL[7]}%`, top: '22%' }}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full bg-emerald-500 px-2.5 py-1 text-[12px] font-semibold text-white shadow-soft"
          >
            <Check aria-hidden className="size-3.5" strokeWidth={3} />
            Hired
          </motion.p>
        )}
      </AnimatePresence>

      {/* The eight steps. */}
      <ol>
        {hiringProcess.map((step, index) => {
          const [col, row] = PLACE[index];
          const final = index === hiringProcess.length - 1;
          const glow = story.glow[index];
          const checking = story.checking === index;
          return (
            <motion.li
              key={step.title}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={show ? { opacity: 1, y: 0, scale: glow ? 1.05 : 1 } : undefined}
              transition={{
                duration: 0.55,
                ease: EASE,
                delay: CARD_DELAY[index],
                scale: { duration: 0.35, ease: EASE, delay: 0 },
              }}
              style={{ left: `${COL[col]}%`, top: `${ROW[row]}%`, width: '11.4%' }}
              className={cn(
                'absolute -translate-x-1/2 -translate-y-1/2 rounded-2xl border p-3 text-center transition-shadow duration-300 xl:p-3.5',
                final ? 'border-brand bg-brand text-white shadow-lift' : 'border-line bg-paper shadow-soft',
                glow === 'fast' && 'ring-4 ring-brand/35',
                glow === 'slow' && 'ring-4 ring-navy/35',
                !glow && index === 5 && 'ring-2 ring-brand/25',
              )}
            >
              <span
                className={cn(
                  'mx-auto flex size-7 items-center justify-center rounded-full font-mono text-[11px] font-semibold',
                  final ? 'bg-white text-brand' : 'bg-ink text-white',
                )}
              >
                {checking ? (
                  <span
                    aria-hidden
                    className="size-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white"
                  />
                ) : (
                  pad(index + 1)
                )}
              </span>
              <p className="mt-2 text-[13px] font-semibold leading-tight tracking-tight xl:text-[15px]">
                {step.title}
              </p>
              {/* Short descriptions only where the cards are wide enough (1280px and up). */}
              <p
                className={cn(
                  'mt-1 hidden text-[12.5px] leading-snug xl:block',
                  final ? 'text-white/85' : 'text-muted',
                )}
              >
                {step.short}
              </p>
              {final && (
                <p className="mt-2 text-[11px] font-semibold leading-snug xl:text-[12px]">
                  <Check aria-hidden className="-mt-0.5 mr-1 inline size-3.5" />
                  {sourcingChannels.outcome}
                </p>
              )}
              <AnimatePresence>
                {story.ticks[index] && <Tick key="tick" className="absolute -right-2 -top-2" />}
              </AnimatePresence>
              {final && story.hires > 0 && (
                <motion.span
                  key={story.hires}
                  aria-hidden
                  initial={{ opacity: 0.8, scale: 1 }}
                  animate={{ opacity: 0, scale: 1.3 }}
                  transition={{ duration: 1.1, ease: 'easeOut' }}
                  className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-brand"
                />
              )}
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}

/*
 * Phones and tablets: the same journey as a scroll story. A reading line sits 60% of the way down the screen;
 * as the page scrolls, the open-market candidate (navy) follows it down the line and every step it reaches gets
 * a tick. At "Candidate sourcing" the database candidate (red) dives into the database, races down its own line
 * on the right and reaches "Profile submission" while the navy candidate is still on its first check; from there
 * they travel on together. Everything follows the scroll, so nothing runs while the page is still.
 */
const READ_LINE = 0.6;
/** Centre of the main line (px from the left edge) and of the database line (px from the right edge). */
const RAIL_LEFT = 24;
const RAIL_RIGHT = 20;
type RedPhase = 'with' | 'jumping' | 'arrived' | 'joined';
type PhoneStory = {
  /** Steps the navy candidate has passed. */
  passed: number;
  /** The step card the navy candidate is inside (-1 for none). */
  current: number;
  red: RedPhase;
};
const PHONE_START: PhoneStory = { passed: 0, current: -1, red: 'with' };
const PHONE_DONE: PhoneStory = { passed: hiringProcess.length, current: -1, red: 'joined' };
const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const redHere = (story: PhoneStory) => story.red === 'arrived' || story.red === 'joined';

function Pop({ children, className, still }: { children: ReactNode; className?: string; still: boolean }) {
  return (
    <motion.span
      initial={still ? false : { opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.6, transition: { duration: 0.2 } }}
      transition={{ type: 'spring', stiffness: 420, damping: 20 }}
      className={cn(
        'flex items-center gap-1 whitespace-nowrap rounded-full px-2 text-[12px] font-semibold leading-6 text-white',
        className,
      )}
    >
      <Check aria-hidden className="size-3.5" strokeWidth={3} />
      {children}
    </motion.span>
  );
}

function PhoneStep({
  index,
  story,
  still,
  cardRef,
  children,
}: {
  index: number;
  story: PhoneStory;
  still: boolean;
  cardRef: (el: HTMLDivElement | null) => void;
  children?: ReactNode;
}) {
  const step = hiringProcess[index];
  const final = index === hiringProcess.length - 1;
  const lane = CHECK_STEPS.includes(index);
  const done = index < story.passed || (index === 5 && redHere(story));
  const current = story.current === index;
  const checking = current && lane && index >= story.passed;
  return (
    <li className="relative">
      {/* The stop on the line. */}
      <span
        aria-hidden
        style={{ left: RAIL_LEFT }}
        className={cn(
          'absolute top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-colors duration-300',
          index < story.passed ? 'border-navy bg-navy' : 'border-line bg-paper',
        )}
      />
      <div
        ref={cardRef}
        className={cn(
          'relative z-20 ml-12 rounded-2xl border p-4 transition-shadow duration-300',
          lane && 'mr-10',
          final ? 'border-brand bg-brand text-white shadow-lift' : 'border-line bg-paper shadow-soft',
          current && (final ? 'ring-4 ring-brand/30' : 'ring-4 ring-navy/20'),
        )}
      >
        <div className="flex items-center gap-3.5">
          <span
            className={cn(
              'flex size-9 shrink-0 items-center justify-center rounded-full font-mono text-[12px] font-semibold',
              final ? 'bg-white text-brand' : 'bg-ink text-white',
            )}
          >
            {checking ? (
              <span
                aria-hidden
                className="size-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
              />
            ) : (
              pad(index + 1)
            )}
          </span>
          <div className="min-w-0 flex-1">
            <p className="font-semibold leading-tight">{step.title}</p>
            <p className={cn('mt-0.5 text-[14px]', final ? 'text-white/85' : 'text-muted')}>
              {step.short}
              {final && `. ${sourcingChannels.outcome}.`}
            </p>
          </div>
          {/* The tick has its own fixed slot, so a card never changes size when it appears. */}
          <span className="flex size-6 shrink-0 items-center justify-center">
            <AnimatePresence>{done && <Tick key="tick" />}</AnimatePresence>
          </span>
        </div>
        {/* Extras (the requirement, the arrival times) get a full-width row, lined up with the title. */}
        {children && <div className="mt-2.5 pl-[50px]">{children}</div>}
        {final && (
          <AnimatePresence>
            {story.passed >= hiringProcess.length && (
              <Pop key="hired" still={still} className="absolute -top-3 right-4 bg-emerald-500 shadow-soft">
                Hired
              </Pop>
            )}
          </AnimatePresence>
        )}
      </div>
    </li>
  );
}

/** Phones and tablets: the hiring journey as a scroll story, with both sourcing channels. */
function FlowStory() {
  const reduce = useReducedMotionSafe();
  const boxRef = useRef<HTMLDivElement>(null);
  const cards = useRef<(HTMLDivElement | null)[]>([]);
  const forkRef = useRef<HTMLLIElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const railFillRef = useRef<HTMLDivElement>(null);
  const redRailRef = useRef<HTMLDivElement>(null);
  const redFillRef = useRef<HTMLDivElement>(null);
  const navyRef = useRef<HTMLDivElement>(null);
  const redRef = useRef<HTMLDivElement>(null);
  const navyClockRef = useRef<HTMLSpanElement>(null);
  const redClockRef = useRef<HTMLSpanElement>(null);
  const chipRef = useRef<HTMLParagraphElement>(null);
  const typed = useInView(chipRef, { once: true, margin: '0px 0px -30% 0px' });
  const [live, setLive] = useState<PhoneStory>(PHONE_START);
  const story = reduce ? PHONE_DONE : live;
  const { database, openMarket } = sourcingChannels;
  const requirement = REQUIREMENTS[0];

  useEffect(() => {
    if (reduce) return;
    const box = boxRef.current;
    if (!box) return;
    let frame = 0;
    let railBox = '';
    const update = () => {
      frame = 0;
      const b = box.getBoundingClientRect();
      if (b.bottom < -innerHeight || b.top > innerHeight * 2) return;
      const els = cards.current;
      const fork = forkRef.current;
      const redRail = redRailRef.current;
      const navy = navyRef.current;
      const red = redRef.current;
      if (els.length < hiringProcess.length || els.some((el) => !el) || !fork || !redRail || !navy || !red)
        return;
      const rel = (el: Element) => {
        const r = el.getBoundingClientRect();
        return { top: r.top - b.top, bottom: r.bottom - b.top, mid: (r.top + r.bottom) / 2 - b.top };
      };
      const n = els.map((el) => rel(el!));
      const forkBox = rel(fork);
      const redRailBox = rel(redRail);
      const read = innerHeight * READ_LINE - b.top;
      const first = n[0].mid;
      const last = n[n.length - 1].mid;
      const navyY = Math.min(last, Math.max(first, read));
      const pairX = RAIL_LEFT + 12;
      const rightX = b.width - RAIL_RIGHT;

      // The database candidate: dashes while the navy candidate goes from "Candidate sourcing" to its first check.
      const from = n[1].mid;
      const to = n[2].mid;
      const waitY = n[5].top - 22;
      let phase: RedPhase = 'joined';
      let rx = pairX;
      let ry = navyY;
      let redClock = '';
      if (read <= from) phase = 'with';
      else if (read < to) {
        phase = 'jumping';
        const t = (read - from) / (to - from);
        if (t < 0.35) {
          const k = t / 0.35;
          rx = lerp(pairX, rightX, k);
          ry = lerp(from, forkBox.mid, k);
        } else {
          rx = rightX;
          ry = lerp(forkBox.mid, waitY, (t - 0.35) / 0.65);
        }
        redClock = `${Math.round(t * 3)}h`;
      } else if (read < n[5].mid) {
        phase = 'arrived';
        // Just before the navy candidate reaches "Profile submission", the red one crosses over to join it.
        const k = clamp01((read - (n[5].mid - 60)) / 60);
        rx = lerp(rightX, pairX, k);
        ry = lerp(waitY, navyY, k);
        redClock = database.time;
      }

      let passed = 0;
      while (passed < n.length && read >= n[passed].mid) passed++;
      const current = n.findIndex((r) => read >= r.top && read < r.bottom);
      setLive((s) =>
        s.passed === passed && s.current === current && s.red === phase ? s : { passed, current, red: phase },
      );

      const place = (el: HTMLElement, x: number, y: number) => {
        el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) translate(-50%, -50%)`;
        el.style.opacity = '1';
      };
      place(navy, RAIL_LEFT, navyY);
      place(red, rx, ry);

      const rail = railRef.current;
      const nextRailBox = `${first.toFixed(0)}:${(last - first).toFixed(0)}`;
      if (rail && nextRailBox !== railBox) {
        railBox = nextRailBox;
        rail.style.top = `${first}px`;
        rail.style.height = `${last - first}px`;
      }
      if (railFillRef.current)
        railFillRef.current.style.transform = `scaleY(${clamp01((navyY - first) / (last - first)).toFixed(4)})`;
      const redFill =
        phase === 'with'
          ? 0
          : phase === 'jumping'
            ? clamp01((ry - redRailBox.top) / (redRailBox.bottom - redRailBox.top))
            : 1;
      if (redFillRef.current) redFillRef.current.style.transform = `scaleY(${redFill.toFixed(4)})`;

      const navyClock = navyClockRef.current;
      if (navyClock) {
        navyClock.textContent =
          read >= n[5].mid
            ? openMarket.time
            : `${Math.round(48 * clamp01((read - from) / (n[5].mid - from)))}h`;
        navyClock.style.opacity = read > from ? '1' : '0';
      }
      const redClockEl = redClockRef.current;
      if (redClockEl) {
        if (redClock) redClockEl.textContent = redClock;
        redClockEl.style.opacity = redClock ? '1' : '0';
      }
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    const resize = new ResizeObserver(schedule);
    resize.observe(box);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      resize.disconnect();
    };
  }, [reduce, database.time, openMarket.time]);

  const cardRef = (index: number) => (el: HTMLDivElement | null) => {
    cards.current[index] = el;
  };
  const step = (index: number, children?: ReactNode) => (
    <PhoneStep key={index} index={index} story={story} still={reduce} cardRef={cardRef(index)}>
      {children}
    </PhoneStep>
  );
  const dbStatus = redHere(story) ? 'done' : story.red === 'jumping' ? 'matching' : 'searching';

  return (
    <div ref={boxRef} className="relative isolate mt-12 md:mx-auto md:max-w-xl lg:hidden">
      {/* The main line, filling in navy behind the candidate. */}
      <div
        aria-hidden
        ref={railRef}
        style={{ left: RAIL_LEFT, top: 40, bottom: 56 }}
        className="absolute w-[3px] -translate-x-1/2 overflow-hidden rounded-full bg-line"
      >
        <div ref={railFillRef} className="size-full origin-top rounded-full bg-navy" />
      </div>

      <ol className="space-y-3">
        {step(
          0,
          <p
            ref={chipRef}
            className="flex w-fit max-w-full items-center gap-1.5 rounded-lg border border-line bg-canvas px-2.5 py-1 text-[13px]"
          >
            <Search aria-hidden className="size-3.5 shrink-0 text-muted" />
            <motion.span
              className="inline-block truncate whitespace-pre font-medium"
              initial={reduce ? false : { clipPath: 'inset(0 100% 0 0)' }}
              animate={typed || reduce ? { clipPath: 'inset(0 0% 0 0)' } : undefined}
              transition={{ duration: 1.2, ease: typing(requirement.length) }}
            >
              {requirement}
            </motion.span>
            <span aria-hidden className="h-3.5 w-px shrink-0 animate-pulse bg-ink/60" />
          </p>,
        )}
        {step(1)}

        {/* The two channels, side by side: the line splits here. */}
        <li ref={forkRef} className="relative z-20 pt-1">
          <p className="mb-2 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            Both channels, in parallel
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col rounded-2xl border border-navy/20 bg-paper p-3.5 shadow-soft">
              <p className="flex items-center gap-1.5 text-[14px] font-semibold">
                <Search aria-hidden className="size-4 shrink-0 text-navy" /> {openMarket.name}
              </p>
              <p className="mt-1 text-2xl font-semibold tracking-tight text-navy">{openMarket.time}</p>
              <p className="text-[13px] leading-snug text-muted">Full assessment, step by step</p>
              <div className="mt-auto flex flex-wrap gap-1 pt-2.5">
                {SLOW_BADGES.map((badge) => {
                  const passed = story.passed > badge.step;
                  const checking = story.current === badge.step && !passed;
                  return (
                    <span
                      key={badge.label}
                      className={cn(
                        'flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[11px] font-medium transition-colors duration-300',
                        passed
                          ? 'bg-emerald-500/15 text-emerald-700'
                          : checking
                            ? 'bg-navy text-white'
                            : 'bg-ink/5 text-faint',
                      )}
                    >
                      {/* Same-width icon in every state, so the badges never re-wrap. */}
                      <span aria-hidden className="flex size-3 items-center justify-center">
                        {passed ? (
                          <Check className="size-3" strokeWidth={3} />
                        ) : checking ? (
                          <span className="size-2.5 animate-spin rounded-full border-[1.5px] border-white/30 border-t-white" />
                        ) : (
                          <span className="size-1.5 rounded-full bg-current" />
                        )}
                      </span>
                      {badge.label === 'L1 + video' ? (
                        <>
                          {/* Short label on phones, so the three badges fit on two lines. */}
                          <span className="sm:hidden">L1</span>
                          <span className="hidden sm:inline">{badge.label}</span>
                        </>
                      ) : (
                        badge.label
                      )}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col rounded-2xl border border-brand/30 bg-paper p-3.5 shadow-soft">
              <p className="flex items-center gap-1.5 text-[14px] font-semibold">
                <Database aria-hidden className="size-4 shrink-0 text-brand" /> {database.name}
              </p>
              <p className="mt-1 text-2xl font-semibold tracking-tight text-brand">{database.time}</p>
              <p className="text-[13px] leading-snug text-muted">10,000+ screened talent profiles</p>
              <div className="mt-auto flex min-h-7 items-center pt-2.5 text-[12px]">
                {dbStatus === 'done' ? (
                  <span className="flex items-center gap-1 font-medium text-emerald-700">
                    <Check aria-hidden className="size-3.5" strokeWidth={3} /> Match submitted
                  </span>
                ) : dbStatus === 'matching' ? (
                  <span className="flex items-center gap-1.5 text-muted">
                    <span className="flex -space-x-1.5">
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.4 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.12, type: 'spring', stiffness: 500, damping: 22 }}
                        >
                          <Avatar variant={i + 2} className="size-5 ring-2 ring-paper" />
                        </motion.span>
                      ))}
                    </span>
                    Matching…
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-muted">
                    <span
                      aria-hidden
                      className="size-3 animate-spin rounded-full border-2 border-brand/25 border-t-brand"
                    />
                    Searching…
                  </span>
                )}
              </div>
            </div>
          </div>
        </li>

        {/* The open-market checks, with the database's fast line running down the right. */}
        <li className="relative">
          <div
            aria-hidden
            ref={redRailRef}
            style={{ right: RAIL_RIGHT }}
            className="absolute -bottom-3 -top-3 w-[3px] translate-x-1/2 overflow-hidden rounded-full bg-brand/15"
          >
            <div ref={redFillRef} className="size-full origin-top rounded-full bg-brand" />
          </div>
          <ol className="space-y-3">{CHECK_STEPS.map((index) => step(index))}</ol>
        </li>

        {step(
          5,
          <span className="flex h-6 gap-1.5">
            <AnimatePresence>
              {redHere(story) && (
                <Pop key="fast" still={reduce} className="bg-brand">
                  {database.time}
                </Pop>
              )}
              {story.passed > 5 && (
                <Pop key="slow" still={reduce} className="bg-navy">
                  {openMarket.time}
                </Pop>
              )}
            </AnimatePresence>
          </span>,
        )}
        {step(6)}
        {step(7)}
      </ol>

      {/* The two candidates (illustrations, not real people), with the clock since sourcing started. */}
      {!reduce && (
        <>
          <div
            ref={redRef}
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 z-10 opacity-0 will-change-transform"
          >
            <Avatar variant={0} className="size-8 shadow-soft ring-2 ring-brand" />
            <span
              ref={redClockRef}
              className="absolute bottom-full left-1/2 mb-1 -translate-x-1/2 whitespace-nowrap rounded bg-brand px-1 font-mono text-[9.5px] leading-4 text-white opacity-0 transition-opacity duration-200"
            >
              0h
            </span>
          </div>
          <div
            ref={navyRef}
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 z-10 opacity-0 will-change-transform"
          >
            <Avatar variant={1} className="size-8 shadow-soft ring-2 ring-navy" />
            <span
              ref={navyClockRef}
              className="absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded bg-navy px-1 font-mono text-[9.5px] leading-4 text-white opacity-0 transition-opacity duration-200"
            >
              0h
            </span>
          </div>
        </>
      )}
    </div>
  );
}

/**
 * ARA's hiring process, from requirement to joining, with its two sourcing channels.
 * `eyebrow` and `approachLink` let the Approach page reuse it (without linking to itself).
 */
export function HiringFlow({
  eyebrow = 'How we hire',
  approachLink = true,
}: {
  eyebrow?: string;
  approachLink?: boolean;
}) {
  return (
    <section id="how-we-hire" className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow={eyebrow}
            title={
              <>
                From requirement <em>to recruitment</em>
              </>
            }
            intro="Two sourcing channels. One complete hiring journey. Profiles from our own database reach you in hours; open-market candidates are fully assessed first."
          />
          {approachLink && (
            <ButtonLink
              href="/company/approach/"
              variant="ghost-dark"
              arrow
              className="shrink-0 self-start lg:self-auto"
            >
              See our approach
            </ButtonLink>
          )}
        </div>
        <FlowDiagram />
        <FlowStory />
      </Container>
    </section>
  );
}
