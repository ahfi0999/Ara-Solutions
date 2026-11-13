'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { alumniCompanies } from '@/content/home';
import { programs, LIST_LIMIT } from '@/content/programs';
import { accent } from '@/lib/accent';

/** The inner ring has room for a limited number of skill chips. */
const SLOTS = Math.min(programs.length, LIST_LIMIT);
const ROTATE_EVERY_MS = 2800;
import { cn } from '@/lib/cn';

/** Position on a circle, as percentages of the container (0,0 = top-left). */
const onCircle = (index: number, total: number, radius: number, offsetDeg = 0) => {
  const angle = ((index / total) * 360 + offsetDeg - 90) * (Math.PI / 180);
  return { left: `${50 + radius * Math.cos(angle)}%`, top: `${50 + radius * Math.sin(angle)}%` };
};

const OUTER = alumniCompanies.filter((company) =>
  ['accenture', 'deloitte', 'tcs', 'infosys', 'microsoft', 'amazon', 'ibm', 'wipro'].includes(company.logo),
);

/**
 * Hero visual: ARA at the centre, the skills it trains on the inner ring and companies
 * where its alumni work on the outer ring, both slowly orbiting. Pulses travel outwards
 * to show talent moving from training to companies.
 */
export function TalentOrbit() {
  const reduce = useReducedMotion();
  const [pulse, setPulse] = useState(0);
  // slots[i] = index of the program shown in ring position i.
  const [slots, setSlots] = useState(() => Array.from({ length: SLOTS }, (_, i) => i));
  // Which slot changes next, and which program goes into it (a sliding window, so no duplicates).
  const cursor = useRef({ slot: 0, next: SLOTS });

  // More programs than slots: every few seconds one chip makes way for the next program,
  // so every course appears over time while the ring stays uncluttered.
  useEffect(() => {
    if (reduce || programs.length <= SLOTS) return;
    const timer = setInterval(() => {
      const { slot, next } = cursor.current;
      setSlots((current) => current.map((value, i) => (i === slot ? next : value)));
      cursor.current = { slot: (slot + 1) % SLOTS, next: (next + 1) % programs.length };
    }, ROTATE_EVERY_MS);
    return () => clearInterval(timer);
  }, [reduce]);

  useEffect(() => {
    if (reduce) return;
    const timer = setInterval(() => setPulse((value) => value + 1), 2600);
    return () => clearInterval(timer);
  }, [reduce]);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px] select-none" aria-hidden>
      {/* Rings */}
      <div className="absolute inset-[6%] rounded-full border border-white/[0.08]" />
      <div className="absolute inset-[6%] rounded-full border border-dashed border-white/[0.07] [animation:spin_120s_linear_infinite]" />
      <div className="absolute inset-[27%] rounded-full border border-white/[0.1]" />
      <div className="absolute inset-[40%] rounded-full bg-[radial-gradient(circle,rgb(229_35_45/0.35),transparent_70%)] blur-2xl" />

      {/* Pulses travelling outwards */}
      {!reduce &&
        [0, 1, 2].map((ring) => (
          <motion.div
            key={`${pulse}-${ring}`}
            className="absolute inset-[40%] rounded-full border border-brand-300/40"
            initial={{ scale: 1, opacity: 0.7 }}
            animate={{ scale: 4.6, opacity: 0 }}
            transition={{ duration: 3.6, ease: 'easeOut', delay: ring * 0.5 }}
          />
        ))}

      {/* Outer ring: companies */}
      <div className={cn('absolute inset-0', !reduce && '[animation:spin_90s_linear_infinite]')}>
        {OUTER.map((company, index) => (
          <div
            key={company.logo}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={onCircle(index, OUTER.length, 43, 12)}
          >
            <div className={cn(!reduce && '[animation:spin_90s_linear_infinite_reverse]')}>
              <div className="flex h-8 w-[64px] items-center justify-center rounded-xl border border-white/10 bg-white px-2 sm:h-11 sm:w-[92px] sm:rounded-2xl sm:px-3 shadow-[0_10px_30px_-12px_rgb(0_0_0/0.6)] sm:h-12 sm:w-[104px]">
                {/* eslint-disable-next-line @next/next/no-img-element -- small SVG logo */}
                <img
                  src={`/logos/alumni/${company.logo}.svg`}
                  alt=""
                  className={cn('w-auto max-w-full object-contain', company.size === 'lg' ? 'h-5 sm:h-7' : 'h-3 sm:h-[18px]')}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Inner ring: skills */}
      <div className={cn('absolute inset-0', !reduce && '[animation:spin_60s_linear_infinite_reverse]')}>
        {slots.map((programIndex, index) => {
          const program = programs[programIndex];
          return (
            <div
              key={index}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={onCircle(index, SLOTS, 23)}
            >
              <div className={cn(!reduce && '[animation:spin_60s_linear_infinite]')}>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={program.slug}
                    data-orbit-skill={program.slug}
                    initial={{ opacity: 0, scale: 0.6, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, scale: 0.6, filter: 'blur(4px)' }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-white/12 bg-ink-2/90 px-2.5 py-1 text-[10.5px] font-medium text-white/90 shadow-[0_8px_24px_-10px_rgb(0_0_0/0.7)] backdrop-blur sm:px-3 sm:py-1.5 sm:text-[12.5px]"
                  >
                    <span className={cn('size-1.5 rounded-full', accent[program.accent].dot)} />
                    {program.shortName}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>

      {/* Centre */}
      <div className="absolute left-1/2 top-1/2 flex size-[22%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white shadow-[0_0_80px_-10px_rgb(229_35_45/0.6)]">
        <Image src="/logo-mark.png" alt="" width={512} height={512} className="h-[58%] w-auto" priority />
      </div>
    </div>
  );
}
