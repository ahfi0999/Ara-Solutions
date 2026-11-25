'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { EASE, useReducedMotionSafe } from '@/components/motion/primitives';
import { cn } from '@/lib/cn';

/*
 * Animated pieces of the track overview pages (e.g. /training-placement/servicenow-courses/). Each one plays once
 * as it scrolls into view and shows its finished state straight away when the visitor prefers reduced motion.
 */

export type MapCourse = { slug: string; label: string; isNew?: boolean };

/**
 * Hero visual: the track's logo in the middle and every course around it, joined by lines that draw in, with a
 * light pulse running out to each course. Each course is a link to its page.
 */
export function CourseMap({ name, logo, courses }: { name: string; logo?: string; courses: MapCourse[] }) {
  const reduce = useReducedMotionSafe();
  const radius = 36;
  const nodes = courses.map((course, index) => {
    const angle = ((-90 + (index * 360) / courses.length) * Math.PI) / 180;
    return { ...course, x: 50 + radius * Math.cos(angle), y: 50 + radius * Math.sin(angle) };
  });
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]">
      <svg aria-hidden viewBox="0 0 100 100" className="absolute inset-0 size-full overflow-visible">
        <circle cx="50" cy="50" r="47" fill="none" stroke="rgb(255 255 255 / 0.07)" strokeWidth="0.3" />
        <g className="origin-center motion-safe:animate-[spin_80s_linear_infinite]">
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="rgb(255 255 255 / 0.14)"
            strokeWidth="0.3"
            strokeDasharray="1 2"
          />
        </g>
        <circle cx="50" cy="50" r="22" fill="none" stroke="rgb(255 255 255 / 0.06)" strokeWidth="0.3" />
        {nodes.map((node, index) => (
          <motion.path
            key={node.slug}
            d={`M50 50 L${node.x} ${node.y}`}
            stroke="rgb(255 255 255 / 0.22)"
            strokeWidth="0.25"
            fill="none"
            initial={reduce ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.3 + index * 0.08 }}
          />
        ))}
        {!reduce &&
          nodes.map((node, index) => (
            <motion.circle
              key={`pulse-${node.slug}`}
              r="0.9"
              fill="#ff7a80"
              initial={{ cx: 50, cy: 50, opacity: 0 }}
              animate={{ cx: [50, node.x], cy: [50, node.y], opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 1.6,
                ease: 'easeInOut',
                delay: 1.4 + index * 0.45,
                repeat: Infinity,
                repeatDelay: courses.length * 0.45 - 1.6 + 1.2,
              }}
            />
          ))}
      </svg>

      {/* The track's logo in the middle, with a slow pulse ring. */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span aria-hidden className="absolute inset-0 rounded-full bg-white/20 motion-safe:animate-[ping_3s_ease-out_infinite]" />
        <motion.div
          className="relative flex size-32 items-center justify-center rounded-full bg-white shadow-lift"
          initial={reduce ? false : { scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
        >
          {logo ? (
            // eslint-disable-next-line @next/next/no-img-element -- small SVG logo
            <img src={logo} alt={`${name} logo`} title={`${name} logo`} className="h-auto w-[74%]" />
          ) : (
            <span className="text-lg font-semibold tracking-tight text-ink">{name}</span>
          )}
        </motion.div>
      </div>

      {/* The courses around it. */}
      <ul>
        {nodes.map((node, index) => (
          <li
            key={node.slug}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <motion.span
              className="block"
              initial={reduce ? false : { scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.6 + index * 0.08 }}
            >
              <Link
                href={`/training-placement/${node.slug}/`}
                className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-white/15 bg-ink-2/80 px-3.5 py-1.5 text-[13px] font-medium text-white/85 shadow-soft backdrop-blur transition-colors hover:border-white hover:bg-white hover:text-ink"
              >
                {node.label}
                {node.isNew && <span className="rounded-full bg-brand px-1.5 text-[10px] font-semibold text-white">New</span>}
              </Link>
            </motion.span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** A salary range drawn on a shared scale (in lakh a year); the bar grows from its low end. */
export function SalaryBar({ min, max, scale, delay = 0 }: { min: number; max: number; scale: number; delay?: number }) {
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
export function PathSteps({ steps }: { steps: { stage: string; roles: string }[] }) {
  const reduce = useReducedMotionSafe();
  const inView = { once: true, margin: '0px 0px -12% 0px' } as const;
  return (
    <ol className="relative mt-8 grid gap-5 md:grid-cols-3">
      {/* The line between the step numbers (wide screens, where the steps sit side by side). */}
      <span aria-hidden className="absolute left-[16%] right-[16%] top-7 hidden h-0.5 rounded-full bg-line md:block">
        <motion.span
          className="block h-full origin-left rounded-full bg-gradient-to-r from-brand via-brand-300 to-brand"
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={inView}
          transition={{ duration: 1.6, ease: EASE, delay: 0.2 }}
        />
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
          <span className="relative z-10 flex size-14 items-center justify-center rounded-full bg-ink font-mono text-lg font-semibold text-white shadow-lift ring-8 ring-canvas">
            {index + 1}
          </span>
          <div className="mt-5 w-full flex-1 rounded-3xl border border-line bg-paper p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1 sm:p-7">
            <p className="text-lg font-semibold tracking-tight">{step.stage}</p>
            <p className="mt-2 leading-relaxed text-muted">{step.roles}</p>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
