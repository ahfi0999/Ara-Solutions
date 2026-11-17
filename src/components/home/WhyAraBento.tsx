'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { AnimatePresence, motion, useInView } from 'motion/react';
import { Check, Globe2, Play, ShieldCheck, UserRound, Video, X } from 'lucide-react';
import { hiringBarriers as BARRIERS, pillars, sourcingChannels } from '@/content/home';
import { site } from '@/content/site';
import { afterJoining } from '@/content/company';
import { CountUp, Reveal, Spotlight, useReducedMotionSafe } from '@/components/motion/primitives';
import { type SceneProps, useScene, useSceneRun } from '@/components/motion/scene';
import { cn } from '@/lib/cn';

type Pillar = (typeof pillars)[number];
type Barrier = (typeof BARRIERS)[number];

/** Which pillars solve each hiring barrier (from each pillar's "Solves" list in the content). */
const SOLVED_BY: Record<Barrier, Pillar['title'][]> = Object.fromEntries(
  BARRIERS.map((barrier) => [
    barrier,
    pillars
      .filter((pillar) => (pillar.solves as readonly string[]).includes(barrier))
      .map((pillar) => pillar.title),
  ]),
) as Record<Barrier, Pillar['title'][]>;

/** How each pillar is shown next to a barrier it solves. */
const PILLAR_TAG: Record<Pillar['title'], ReactNode> = {
  '48-hour turnaround': '48H',
  '24×7 support': '24×7',
  'L1 interview + video': <Video aria-hidden className="size-3.5" />,
  'Background check': <ShieldCheck aria-hidden className="size-3.5" />,
};

const SOLVE_EVERY_MS = 650;

/* ------------------------------------------------------------------ the small scenes inside the cards */

/** 48H: the two sourcing channels race to a shortlist. */
function TurnaroundScene(props: SceneProps) {
  const { from, to } = useScene(props);
  const lanes = [
    { ...sourcingChannels.database, duration: 0.9, bar: 'bg-brand-300' },
    { ...sourcingChannels.openMarket, duration: 2.1, bar: 'bg-white/70' },
  ];
  return (
    <div className="space-y-2.5">
      {lanes.map((lane) => (
        <div key={lane.name}>
          <div className="flex justify-between text-[12.5px] text-white/60">
            <span>{lane.name}</span>
            <span className="font-mono text-white/80">{lane.time}</span>
          </div>
          <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/10">
            <motion.span
              className={cn('block h-full origin-left rounded-full', lane.bar)}
              initial={from({ scaleX: 0 })}
              animate={to({ scaleX: 1 })}
              transition={{ duration: lane.duration, delay: 0.2, ease: 'easeInOut' }}
            />
          </div>
        </div>
      ))}
      <motion.p
        className="flex items-center gap-1.5 text-[13px] font-medium text-emerald-300"
        initial={from({ opacity: 0, y: 4 })}
        animate={to({ opacity: 1, y: 0 })}
        transition={{ delay: 2.4, duration: 0.4 }}
      >
        <Check aria-hidden className="size-4" strokeWidth={3} /> Shortlist ready
      </motion.p>
    </div>
  );
}

/** Where ARA's clients are (India, the UK and the USA), with each one's local time right now. */
const ZONES = [
  { label: 'India', zone: 'Asia/Kolkata' },
  { label: 'UK', zone: 'Europe/London' },
  { label: 'USA (ET)', zone: 'America/New_York' },
];

/** 24×7: three local clocks, each covered. */
function SupportScene(props: SceneProps) {
  const { from, to } = useScene(props);
  // The real local times, filled in after the page loads (the server can't know the visitor's "now").
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const timer = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(timer);
  }, []);
  return (
    <div className="grid grid-cols-3 gap-2">
      {ZONES.map((z, index) => (
        <motion.div
          key={z.label}
          className="rounded-xl border border-white/10 bg-white/[0.05] px-2.5 py-2"
          initial={from({ opacity: 0, y: 8 })}
          animate={to({ opacity: 1, y: 0 })}
          transition={{ delay: 0.15 + index * 0.25, duration: 0.45 }}
        >
          <p className="text-[11.5px] text-white/55">{z.label}</p>
          <p className="mt-0.5 font-mono text-[17px] font-semibold tracking-tight">
            {now
              ? new Intl.DateTimeFormat('en-GB', {
                  hour: '2-digit',
                  minute: '2-digit',
                  timeZone: z.zone,
                }).format(now)
              : '--:--'}
          </p>
          <p className="mt-1 flex items-center gap-1.5 text-[11px] text-emerald-300">
            <span className="relative flex size-1.5">
              <span className="absolute inset-0 rounded-full bg-emerald-400 motion-safe:animate-ping" />
              <span className="relative size-1.5 rounded-full bg-emerald-400" />
            </span>
            Covered
          </p>
        </motion.div>
      ))}
    </div>
  );
}

/** L1 interview + video: the recorded interview plays, then it is shared. */
function InterviewScene(props: SceneProps) {
  const { from, to } = useScene(props);
  return (
    <div>
      <div className="relative h-[72px] overflow-hidden rounded-xl border border-white/10 bg-black/30">
        <span className="absolute left-2.5 top-2.5 flex items-center gap-2 text-[11px] text-white/70">
          <span className="flex size-6 items-center justify-center rounded-full bg-white/15">
            <UserRound aria-hidden className="size-3.5" />
          </span>
          L1 interview · recorded
        </span>
        <motion.span
          className="absolute right-3 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink"
          initial={from({ scale: 0.6, opacity: 0 })}
          animate={to({ scale: 1, opacity: 1 })}
          transition={{ type: 'spring', stiffness: 420, damping: 18, delay: 0.15 }}
        >
          <Play aria-hidden className="ml-0.5 size-3.5" fill="currentColor" />
        </motion.span>
        <span className="absolute inset-x-2.5 bottom-2.5 h-1 overflow-hidden rounded-full bg-white/15">
          <motion.span
            className="block h-full origin-left rounded-full bg-brand-300"
            initial={from({ scaleX: 0 })}
            animate={to({ scaleX: 1 })}
            transition={{ delay: 0.4, duration: 1.6, ease: 'linear' }}
          />
        </span>
      </div>
      <motion.p
        className="mt-2 flex items-center gap-1.5 text-[12.5px] font-medium text-emerald-300"
        initial={from({ opacity: 0, y: 4 })}
        animate={to({ opacity: 1, y: 0 })}
        transition={{ delay: 2.1, duration: 0.4 }}
      >
        <Check aria-hidden className="size-4" strokeWidth={3} /> Video shared with you
      </motion.p>
    </div>
  );
}

/** Background check: employment, education and identity verified one by one. */
function VerificationScene(props: SceneProps) {
  const { from, to } = useScene(props);
  return (
    <ul className="space-y-1.5">
      {['Employment', 'Education', 'Identity'].map((item, index) => (
        <li
          key={item}
          className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[13px] text-white/80"
        >
          {item}
          <motion.span
            className="flex size-5 items-center justify-center rounded-full bg-emerald-400 text-ink"
            initial={from({ scale: 0, opacity: 0 })}
            animate={to({ scale: 1, opacity: 1 })}
            transition={{ delay: 0.35 + index * 0.5, type: 'spring', stiffness: 500, damping: 18 }}
          >
            <Check aria-hidden className="size-3" strokeWidth={3.5} />
          </motion.span>
        </li>
      ))}
    </ul>
  );
}

/** Global hubs: Hyderabad connected to clients in the UK & Europe and the USA. */
function HubsScene(props: SceneProps) {
  const { from, to } = useScene(props);
  const nodes = [
    { x: 46, y: 64, label: 'USA' },
    { x: 168, y: 30, label: 'UK & Europe' },
    { x: 292, y: 58, label: 'Hyderabad', home: true },
  ];
  const arcs = ['M 292 58 Q 230 2 168 30', 'M 292 58 Q 170 -24 46 64'];
  return (
    <svg viewBox="0 0 340 92" className="h-auto w-full" aria-hidden>
      {arcs.map((d, index) => (
        <g key={d}>
          <path d={d} fill="none" stroke="rgb(255 255 255 / 0.1)" strokeWidth={1.5} />
          <motion.path
            d={d}
            fill="none"
            stroke="rgb(255 122 128)"
            strokeWidth={1.8}
            strokeDasharray="4 5"
            initial={from({ pathLength: 0 })}
            animate={to({ pathLength: 1 })}
            transition={{ delay: 0.3 + index * 0.45, duration: 1.1, ease: 'easeInOut' }}
          />
        </g>
      ))}
      {nodes.map((node, index) => (
        <motion.g
          key={node.label}
          initial={from({ opacity: 0, scale: 0.4 })}
          animate={to({ opacity: 1, scale: 1 })}
          transition={{
            delay: node.home ? 0.1 : 1.1 + index * 0.4,
            type: 'spring',
            stiffness: 400,
            damping: 18,
          }}
          style={{ transformOrigin: `${node.x}px ${node.y}px` }}
        >
          {node.home && (
            <circle cx={node.x} cy={node.y} r={11} fill="rgb(229 35 45 / 0.25)">
              <animate attributeName="r" values="8;14;8" dur="2.2s" repeatCount="indefinite" />
            </circle>
          )}
          <circle cx={node.x} cy={node.y} r={node.home ? 6 : 4.5} fill={node.home ? '#e5232d' : '#fff'} />
          <text
            x={node.x}
            y={node.y + 19}
            textAnchor="middle"
            fill="rgb(255 255 255 / 0.75)"
            fontSize="11"
            fontWeight={node.home ? 600 : 400}
          >
            {node.label}
          </text>
        </motion.g>
      ))}
    </svg>
  );
}

/** After joining: the five commitment steps light up in turn, each turning into a tick. */
function CommitmentScene(props: SceneProps) {
  const { from, to } = useScene(props);
  return (
    <ol className="flex flex-wrap gap-2">
      {afterJoining.map((step, index) => (
        <li
          key={step.title}
          className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] py-1 pl-1 pr-3 text-[13px] text-white/80"
        >
          <span className="relative flex size-6 items-center justify-center rounded-full bg-white/15 text-[11px] font-semibold text-white">
            {index + 1}
            <motion.span
              className="absolute inset-0 flex items-center justify-center rounded-full bg-brand"
              initial={from({ scale: 0, opacity: 0 })}
              animate={to({ scale: 1, opacity: 1 })}
              transition={{ delay: 0.3 + index * 0.35, type: 'spring', stiffness: 460, damping: 20 }}
            >
              <Check aria-hidden className="size-3.5" strokeWidth={3} />
            </motion.span>
          </span>
          {step.title}
        </li>
      ))}
    </ol>
  );
}

/* ------------------------------------------------------------------ cards */

/** A "Why ARA" card: glass (or solid red), lit when it solves the barrier in focus, dimmed when it doesn't. */
function Card({
  className,
  accent = false,
  state = 'idle',
  onHover,
  children,
}: {
  className?: string;
  accent?: boolean;
  state?: 'idle' | 'lit' | 'dim';
  onHover?: (on: boolean) => void;
  children: ReactNode;
}) {
  return (
    <div className="h-full" onMouseEnter={() => onHover?.(true)} onMouseLeave={() => onHover?.(false)}>
      <Spotlight
        className={cn(
          'flex h-full flex-col overflow-hidden rounded-3xl border p-7 backdrop-blur transition-[border-color,opacity,box-shadow,background-color] duration-500 sm:p-8',
          accent
            ? 'border-white/15 bg-brand/90 hover:border-white/30'
            : 'border-white/[0.08] bg-white/[0.03] hover:border-white/20',
          state === 'lit' &&
            'border-brand-300/80 bg-white/[0.07] shadow-[0_0_0_1px_rgb(255_122_128/0.5),0_0_48px_-12px_rgb(255_122_128/0.7)]',
          state === 'dim' && 'opacity-40',
          className,
        )}
        color={accent ? 'rgb(255 255 255 / 0.14)' : 'rgb(255 122 128 / 0.10)'}
      >
        {children}
      </Spotlight>
    </div>
  );
}

/** The scene frame inside a card: plays on first view and replays when the card is hovered. */
function SceneFrame({
  scene: Scene,
  replayOn,
  className,
}: {
  scene: (props: SceneProps) => ReactNode;
  replayOn: number;
  className?: string;
}) {
  const { ref, run, reduce, replay } = useSceneRun(0.5);
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (run > 0) replay();
    // Replay whenever the card is hovered again.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [replayOn]);
  return (
    <div ref={ref} aria-hidden className={cn('mt-5', className)}>
      <Scene key={run} run={run} reduce={reduce} />
    </div>
  );
}

function Solves({ items, focus }: { items: readonly string[]; focus: Barrier | null }) {
  return (
    <div className="mt-auto pt-6">
      <p className="text-[13px] text-white/45">Solves</p>
      <ul className="mt-2 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className={cn(
              'rounded-full border px-3 py-1 text-[13px] font-medium transition-colors duration-300',
              focus === item
                ? 'border-brand bg-brand text-white'
                : 'border-white/10 bg-white/[0.06] text-white/80',
            )}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** A big figure such as "48H" or "24×7": the leading number counts up. */
function BigFigure({ value, unit }: { value: string; unit: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  return (
    <p aria-hidden className="text-7xl font-semibold leading-none tracking-[-0.05em] sm:text-8xl">
      {match ? (
        <>
          <CountUp value={Number(match[1])} />
          {match[2]}
        </>
      ) : (
        value
      )}
      <span className="text-brand-300">{unit}</span>
    </p>
  );
}

/* ------------------------------------------------------------------ the grid */

const SCENES: Record<Pillar['title'], (props: SceneProps) => ReactNode> = {
  '48-hour turnaround': TurnaroundScene,
  '24×7 support': SupportScene,
  'L1 interview + video': InterviewScene,
  'Background check': VerificationScene,
};
const ICONS: Partial<Record<Pillar['title'], typeof Video>> = {
  'L1 interview + video': Video,
  'Background check': ShieldCheck,
};

/**
 * The "Why ARA" grid. The six hiring barriers start unsolved and are solved one by one, lighting up the pillar
 * that solves each. Pointing at a barrier lights its pillars and dims the rest; pointing at a pillar lights the
 * barriers it solves. Each card plays a small scene showing the pillar at work.
 */
export function WhyAraBento() {
  const boardRef = useRef<HTMLDivElement>(null);
  const boardSeen = useInView(boardRef, { once: true, amount: 0.5 });
  const [solved, setSolved] = useState(0);
  const [pulse, setPulse] = useState<Barrier | null>(null);
  const [focusBarrier, setFocusBarrier] = useState<Barrier | null>(null);
  const [focusPillar, setFocusPillar] = useState<Pillar['title'] | null>(null);
  const [hovers, setHovers] = useState<Record<string, number>>({});
  const reduce = useReducedMotionSafe();

  // Solve the barriers one by one once the board is on screen.
  useEffect(() => {
    // Reduced motion: everything shown solved at once (no need to wait for the board to be on screen).
    if (reduce) {
      setSolved(BARRIERS.length);
      return;
    }
    if (!boardSeen) return;
    if (solved >= BARRIERS.length) {
      setPulse(null);
      return;
    }
    const timer = window.setTimeout(
      () => {
        setPulse(BARRIERS[solved]);
        setSolved((count) => count + 1);
      },
      solved === 0 ? 500 : SOLVE_EVERY_MS,
    );
    return () => window.clearTimeout(timer);
  }, [boardSeen, solved, reduce]);
  useEffect(() => {
    if (!pulse) return;
    const timer = window.setTimeout(() => setPulse(null), SOLVE_EVERY_MS - 80);
    return () => window.clearTimeout(timer);
  }, [pulse]);

  const activeBarrier = focusBarrier ?? pulse;
  const pillarState = (title: Pillar['title']): 'idle' | 'lit' | 'dim' => {
    if (!activeBarrier) return 'idle';
    if (SOLVED_BY[activeBarrier].includes(title)) return 'lit';
    return focusBarrier ? 'dim' : 'idle';
  };
  const otherState = focusBarrier ? 'dim' : 'idle';
  const hoverPillar = (title: Pillar['title']) => (on: boolean) => {
    setFocusPillar(on ? title : null);
    if (on) setHovers((h) => ({ ...h, [title]: (h[title] ?? 0) + 1 }));
  };
  const hoverOther = (key: string) => (on: boolean) => {
    if (on) setHovers((h) => ({ ...h, [key]: (h[key] ?? 0) + 1 }));
  };

  const [turnaround, support, ...checks] = pillars;
  return (
    <div className="mt-14 grid gap-4 md:grid-cols-6">
      {/* The two headline pillars, with their big figures. */}
      {[turnaround, support].map((pillar, index) => (
        <Reveal key={pillar.title} className="md:col-span-3" delay={index * 0.06}>
          <Card state={pillarState(pillar.title)} onHover={hoverPillar(pillar.title)}>
            {'big' in pillar && <BigFigure value={pillar.big.value} unit={pillar.big.unit} />}
            <h3 className="mt-6 text-2xl font-semibold tracking-tight">{pillar.title}</h3>
            <p className="mt-2 max-w-md leading-relaxed text-white/65">{pillar.text}</p>
            <SceneFrame
              scene={SCENES[pillar.title]}
              replayOn={hovers[pillar.title] ?? 0}
              className="max-w-md"
            />
            <Solves items={pillar.solves} focus={activeBarrier} />
          </Card>
        </Reveal>
      ))}

      {/* Quality checks on every candidate. */}
      {checks.map((pillar, index) => {
        const Icon = ICONS[pillar.title] ?? ShieldCheck;
        return (
          <Reveal key={pillar.title} className="md:col-span-2" delay={0.06 + index * 0.06}>
            <Card state={pillarState(pillar.title)} onHover={hoverPillar(pillar.title)}>
              <span className="flex size-11 items-center justify-center rounded-xl bg-white/[0.08] text-brand-300">
                <Icon aria-hidden className="size-5" />
              </span>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">{pillar.title}</h3>
              <p className="mt-2 leading-relaxed text-white/65">{pillar.text}</p>
              <SceneFrame scene={SCENES[pillar.title]} replayOn={hovers[pillar.title] ?? 0} />
              <Solves items={pillar.solves} focus={activeBarrier} />
            </Card>
          </Reveal>
        );
      })}

      {/* The deck's question: one partner for all six barriers, solved one by one. */}
      <Reveal className="md:col-span-2" delay={0.18}>
        <Card accent>
          <div ref={boardRef}>
            <h3 className="text-xl font-semibold tracking-tight">One partner for all six hiring barriers</h3>
            <p className="mt-1 text-[13px] text-white/75">Point at a barrier to see what solves it.</p>
            <ul className="mt-4 space-y-1" onMouseLeave={() => setFocusBarrier(null)}>
              {BARRIERS.map((barrier, index) => {
                const done = index < solved;
                const lit =
                  activeBarrier === barrier ||
                  (focusPillar !== null && SOLVED_BY[barrier].includes(focusPillar));
                return (
                  <li key={barrier}>
                    <button
                      type="button"
                      onMouseEnter={() => setFocusBarrier(barrier)}
                      onFocus={() => setFocusBarrier(barrier)}
                      onBlur={() => setFocusBarrier(null)}
                      onClick={() => setFocusBarrier(barrier)}
                      aria-pressed={focusBarrier === barrier}
                      className={cn(
                        'flex w-full items-center gap-2.5 rounded-lg px-2 py-1.5 text-left text-[15px] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-white',
                        lit ? 'bg-white/20' : 'hover:bg-white/10',
                      )}
                    >
                      <span
                        className={cn(
                          'relative flex size-5 shrink-0 items-center justify-center rounded-full border transition-colors duration-300',
                          done ? 'border-white bg-white text-brand' : 'border-white/40 text-white/70',
                        )}
                      >
                        {done ? (
                          <motion.span
                            key="tick"
                            initial={{ scale: 0, rotate: -45 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: 'spring', stiffness: 520, damping: 18 }}
                          >
                            <Check aria-hidden className="size-3.5" strokeWidth={3.5} />
                          </motion.span>
                        ) : (
                          <X aria-hidden className="size-3" strokeWidth={3} />
                        )}
                      </span>
                      <span
                        className={cn(
                          'transition-colors duration-300',
                          done ? 'text-white' : 'text-white/65',
                        )}
                      >
                        {barrier}
                      </span>
                      <AnimatePresence>
                        {done && (
                          <motion.span
                            initial={{ opacity: 0, x: -6 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="ml-auto flex shrink-0 items-center gap-1"
                          >
                            <span className="sr-only">Solved by {SOLVED_BY[barrier].join(' and ')}</span>
                            {SOLVED_BY[barrier].map((title) => (
                              <span
                                key={title}
                                aria-hidden
                                className="flex h-5 min-w-5 items-center justify-center rounded-full bg-white/20 px-1.5 text-[11px] font-semibold"
                              >
                                {PILLAR_TAG[title]}
                              </span>
                            ))}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </Card>
      </Reveal>

      {/* Reach. */}
      <Reveal className="md:col-span-3" delay={0.06}>
        <Card state={otherState} onHover={hoverOther('hubs')}>
          <span className="flex size-11 items-center justify-center rounded-xl bg-white/[0.08] text-brand-300">
            <Globe2 aria-hidden className="size-5" />
          </span>
          <h3 className="mt-5 text-xl font-semibold tracking-tight">Global hubs: US, EU and Asia</h3>
          <p className="mt-2 leading-relaxed text-white/65">
            {`Based in ${site.address.area}, Hyderabad, with clients in India, the USA and the UK, and recruitment coverage across European markets.`}
          </p>
          <SceneFrame scene={HubsScene} replayOn={hovers.hubs ?? 0} className="mt-auto pt-4" />
        </Card>
      </Reveal>

      {/* After joining. */}
      <Reveal className="md:col-span-3" delay={0.12}>
        <Card state={otherState} onHover={hoverOther('commitment')}>
          <h3 className="text-xl font-semibold tracking-tight">Our commitment doesn’t end at joining</h3>
          <p className="mt-2 leading-relaxed text-white/65">
            Beyond recruitment, beyond placement: a partnership that lasts.
          </p>
          <SceneFrame scene={CommitmentScene} replayOn={hovers.commitment ?? 0} className="mt-6" />
        </Card>
      </Reveal>
    </div>
  );
}
