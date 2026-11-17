'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useInView } from 'motion/react';
import { ArrowUpRight, Check } from 'lucide-react';
import { programs, type Program } from '@/content/programs';
import { accent } from '@/lib/accent';
import { cn } from '@/lib/cn';
import { Container, SectionHeading } from '@/components/ui/Section';
import { Spotlight, Tilt, useReducedMotionSafe } from '@/components/motion/primitives';
import { ProgramExplorer } from './ProgramExplorer';
import { ProgramBanner } from '@/components/visuals/ProgramBanner';

/** Program card: coloured glow per program, cursor spotlight and a gentle 3D tilt. */
export function ProgramCard({ program }: { program: Program }) {
  const a = accent[program.accent];
  const ref = useRef<HTMLAnchorElement>(null);
  // Phones have no hover, so the photo's light sweep plays once as the card comes into view.
  const seen = useInView(ref, { once: true, amount: 0.6 });
  const [touch, setTouch] = useState(false);
  useEffect(() => setTouch(window.matchMedia('(hover: none)').matches), []);
  // Opening the course: the card presses in and the photo zooms, as if diving into the course page.
  const [pressed, setPressed] = useState(false);
  const reduce = useReducedMotionSafe();
  return (
    <Tilt className="h-full">
      <Spotlight className="h-full rounded-3xl" color="rgb(255 255 255 / 0.12)">
        <Link
          ref={ref}
          href={`/training-placement/${program.slug}/`}
          onPointerDown={() => setPressed(true)}
          onPointerLeave={() => setPressed(false)}
          onPointerCancel={() => setPressed(false)}
          onClick={() => window.setTimeout(() => setPressed(false), 800)}
          data-pressed={pressed || undefined}
          className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-ink p-6 text-white shadow-lift transition-[scale] duration-200 motion-safe:data-[pressed]:scale-[0.975]"
        >
          <div aria-hidden className={cn('absolute inset-0 bg-gradient-to-br opacity-90', a.gradient)} />
          <div
            aria-hidden
            className={cn(
              'absolute -right-16 -top-16 size-56 rounded-full opacity-60 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:opacity-100',
              a.glow,
            )}
          />
          <div aria-hidden className="grid-lines absolute inset-0 opacity-50" />

          <ProgramBanner
            program={program}
            className="-mx-6 -mt-6 mb-5"
            shine={touch && seen}
            pressed={pressed && !reduce}
          />

          <div className="absolute inset-x-6 top-5 flex items-center justify-between">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-white/75">
              <span className={cn('size-1.5 rounded-full', a.dot)} />
              {program.family}
            </span>
            <span className="flex size-9 items-center justify-center rounded-full border border-white/15 transition-all duration-500 group-hover:rotate-45 group-hover:border-white group-hover:bg-white group-hover:text-ink">
              <ArrowUpRight aria-hidden className="size-4.5" />
            </span>
          </div>

          <h3 className="relative text-xl font-semibold leading-snug tracking-tight sm:text-[1.35rem]">
            {program.name}
          </h3>
          <p className="relative mt-2 line-clamp-2 text-[15px] leading-relaxed text-white/65">
            {program.tagline}
          </p>

          <ul className="relative mt-auto space-y-1.5 pt-5">
            {program.highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-[14px] text-white/85">
                <Check aria-hidden className={cn('size-4', a.textOnDark)} />
                {item}
              </li>
            ))}
          </ul>
        </Link>
      </Spotlight>
    </Tilt>
  );
}

function Heading() {
  return (
    <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
      <SectionHeading
        eyebrow="Training & placement"
        title={
          <>
            Build your <em>technology career</em>
          </>
        }
        intro={`${programs.length} career-focused programs with hands-on projects, interview preparation and placement assistance.`}
      />
      <Link
        href="/training-placement/"
        className="shrink-0 text-[15px] font-medium text-text underline-offset-4 hover:underline"
      >
        Compare all programs →
      </Link>
    </div>
  );
}

/** Homepage training section: category tabs + grid, first 6 programs, "View all" when there are more. */
export function ProgramShowcase() {
  return (
    <section id="programs" className="py-20 sm:py-28">
      <Container>
        <Heading />
        <div className="mt-12">
          <ProgramExplorer limit={6} />
        </div>
      </Container>
    </section>
  );
}
