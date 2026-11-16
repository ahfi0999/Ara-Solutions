'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Check, Database, Search } from 'lucide-react';
import { hiringProcess, sourcingChannels } from '@/content/home';
import { cn } from '@/lib/cn';
import { Container, SectionHeading } from '@/components/ui/Section';
import { ButtonLink } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
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
 * Animation order once the diagram scrolls into view: the first two steps, then both lanes draw at once.
 * The database lane arrives first (the 2-4 hour path), the open-market lane follows, then the last steps.
 * After that a dot keeps travelling each lane, the fast one about three times as often.
 */
const LINE = {
  head: { delay: 0.15, duration: 0.45 },
  fast: { delay: 0.65, duration: 0.6 },
  slow: { delay: 0.65, duration: 1.5 },
  tail: { delay: 2.2, duration: 0.7 },
};
const CARD_DELAY = [0, 0.2, 0.9, 1.25, 1.6, 1.25, 2.45, 2.75];
const DOTS_AFTER_MS = 3100;
/** Seconds for one trip along each lane: slow and calm, the database dot about three times as fast. */
const DOT_SECONDS = { fast: 4, slow: 12 };

function pad(n: number) {
  return String(n).padStart(2, '0');
}

/** Desktop: the full flow diagram with drawn lines and travelling dots. */
function FlowDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const fastRef = useRef<SVGElement>(null);
  const slowRef = useRef<SVGElement>(null);
  const reduce = useReducedMotionSafe();
  const started = useInView(ref, { once: true, amount: 0.35 });
  const onScreen = useInView(ref, { amount: 0 });
  const [dots, setDots] = useState(false);
  const show = started || reduce;

  // Start the travelling dots once the drawing has finished.
  useEffect(() => {
    if (!started || reduce) return;
    const timer = setTimeout(() => setDots(true), DOTS_AFTER_MS);
    return () => clearTimeout(timer);
  }, [started, reduce]);
  useEffect(() => {
    if (!dots) return;
    (fastRef.current as SVGAnimationElement | null)?.beginElement();
    (slowRef.current as SVGAnimationElement | null)?.beginElement();
  }, [dots]);
  // Pause the dots while the diagram is off screen.
  useEffect(() => {
    if (!dots) return;
    if (onScreen) svgRef.current?.unpauseAnimations();
    else svgRef.current?.pauseAnimations();
  }, [dots, onScreen]);

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

  return (
    <div ref={ref} className="relative mt-14 hidden aspect-[1000/470] w-full lg:block">
      <svg
        ref={svgRef}
        aria-hidden
        viewBox={`0 0 ${W} ${H}`}
        className="absolute inset-0 h-full w-full overflow-visible"
      >
        {/* Light track, always visible, then the drawn colour on top. */}
        {Object.values(PATHS).map((d) => (
          <path key={d} d={d} fill="none" stroke="var(--color-line)" strokeWidth={2.5} />
        ))}
        {draw('head', 'var(--color-ink)')}
        {draw('fast', 'var(--color-brand)')}
        {draw('slow', 'var(--color-navy)')}
        {draw('tail', 'var(--color-ink)')}
        {dots && (
          <>
            <g>
              <circle r={13} fill="var(--color-brand)" opacity={0.18} />
              <circle r={6} fill="var(--color-brand)" />
              <animateMotion
                ref={fastRef}
                path={PATHS.fast}
                dur={`${DOT_SECONDS.fast}s`}
                begin="indefinite"
                repeatCount="indefinite"
              />
            </g>
            <g>
              <circle r={13} fill="var(--color-navy)" opacity={0.16} />
              <circle r={6} fill="var(--color-navy)" />
              <animateMotion
                ref={slowRef}
                path={PATHS.slow}
                dur={`${DOT_SECONDS.slow}s`}
                begin="indefinite"
                repeatCount="indefinite"
              />
            </g>
          </>
        )}
      </svg>

      {/* Lane labels. */}
      <motion.p
        {...appear(0.85)}
        style={{ left: `${(COL[1] + COL[5]) / 2}%`, top: `${ROW.top}%` }}
        className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-brand/30 bg-paper px-4 py-2 text-[13px] shadow-soft xl:text-[14px]"
      >
        <Database aria-hidden className="size-4 text-brand" />
        <span className="font-semibold">{sourcingChannels.database.name}:</span>
        <span className="text-muted">{sourcingChannels.database.text}</span>
        <strong className="font-semibold text-brand">{sourcingChannels.database.time}</strong>
      </motion.p>
      <motion.p
        {...appear(0.7)}
        style={{ left: `${(COL[1] + COL[5]) / 2}%`, top: `${ROW.main}%` }}
        className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.18em] text-muted"
      >
        Both channels, in parallel
      </motion.p>
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

      {/* The eight steps. */}
      <ol>
        {hiringProcess.map((step, index) => {
          const [col, row] = PLACE[index];
          const final = index === hiringProcess.length - 1;
          return (
            <motion.li
              key={step.title}
              {...appear(CARD_DELAY[index])}
              style={{ left: `${COL[col]}%`, top: `${ROW[row]}%`, width: '11.4%' }}
              className={cn(
                'absolute -translate-x-1/2 -translate-y-1/2 rounded-2xl border p-3 text-center xl:p-3.5',
                final ? 'border-brand bg-brand text-white shadow-lift' : 'border-line bg-paper shadow-soft',
                index === 5 && 'ring-2 ring-brand/25',
              )}
            >
              <span
                className={cn(
                  'mx-auto flex size-7 items-center justify-center rounded-full font-mono text-[11px] font-semibold',
                  final ? 'bg-white text-brand' : 'bg-ink text-white',
                )}
              >
                {pad(index + 1)}
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
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}

function MobileStep({ index, final = false }: { index: number; final?: boolean }) {
  const step = hiringProcess[index];
  return (
    <Reveal as="li" y={16}>
      <div
        className={cn(
          'flex items-center gap-4 rounded-2xl border p-4',
          final ? 'border-brand bg-brand text-white shadow-lift' : 'border-line bg-paper shadow-soft',
        )}
      >
        <span
          className={cn(
            'flex size-9 shrink-0 items-center justify-center rounded-full font-mono text-[12px] font-semibold',
            final ? 'bg-white text-brand' : 'bg-ink text-white',
          )}
        >
          {pad(index + 1)}
        </span>
        <div>
          <p className="font-semibold leading-tight">{step.title}</p>
          <p className={cn('mt-0.5 text-[14px]', final ? 'text-white/85' : 'text-muted')}>
            {step.short}
            {final && `. ${sourcingChannels.outcome}.`}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

/** Phones and tablets: the same flow, top to bottom, with the two channels side by side. */
function FlowList() {
  const { database, openMarket } = sourcingChannels;
  return (
    <ol className="mt-12 space-y-3 lg:hidden">
      <MobileStep index={0} />
      <MobileStep index={1} />
      <Reveal as="li" y={16}>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col rounded-2xl border border-brand/30 bg-paper p-4 shadow-soft">
            <p className="flex items-center gap-2 font-semibold">
              <Database aria-hidden className="size-4 text-brand" /> {database.name}
            </p>
            <p className="mt-2 text-[14px] text-muted">{database.text}</p>
            <p className="mt-auto pt-3 text-3xl font-semibold tracking-tight text-brand">{database.time}</p>
          </div>
          <div className="flex flex-col rounded-2xl border border-line bg-paper p-4 shadow-soft">
            <p className="flex items-center gap-2 font-semibold">
              <Search aria-hidden className="size-4 text-navy" /> {openMarket.name}
            </p>
            <ul className="mt-2 space-y-1.5 text-[14px] text-muted">
              {[2, 3, 4].map((index) => (
                <li key={index} className="flex gap-2">
                  <span className="font-mono text-[12px] text-brand">{pad(index + 1)}</span>
                  {hiringProcess[index].title}
                </li>
              ))}
            </ul>
            <p className="mt-auto pt-3 text-3xl font-semibold tracking-tight text-navy">{openMarket.time}</p>
          </div>
        </div>
      </Reveal>
      <MobileStep index={5} />
      <MobileStep index={6} />
      <MobileStep index={7} final />
    </ol>
  );
}

/** ARA's hiring process, from requirement to joining, with its two sourcing channels. */
export function HiringFlow() {
  return (
    <section id="how-we-hire" className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="How we hire"
            title={
              <>
                From requirement <em>to recruitment</em>
              </>
            }
            intro="Two sourcing channels. One complete hiring journey. Profiles from our own database reach you in hours; open-market candidates are fully assessed first."
          />
          <ButtonLink
            href="/company/approach/"
            variant="ghost-dark"
            arrow
            className="shrink-0 self-start lg:self-auto"
          >
            See our approach
          </ButtonLink>
        </div>
        <FlowDiagram />
        <FlowList />
      </Container>
    </section>
  );
}
