'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { alumniCompanies, clientele } from '@/content/home';
import { programs, LIST_LIMIT } from '@/content/programs';
import { accent } from '@/lib/accent';
import { cn } from '@/lib/cn';
import { useReducedMotionSafe } from '@/components/motion/primitives';

/** The inner ring has room for a limited number of skill chips. */
const SLOTS = Math.min(programs.length, LIST_LIMIT);
const ROTATE_EVERY_MS = 2800;

/** Position on a circle, as percentages of the container (0,0 = top-left). */
const onCircle = (index: number, total: number, radius: number, offsetDeg = 0) => {
  const angle = ((index / total) * 360 + offsetDeg - 90) * (Math.PI / 180);
  return { left: `${50 + radius * Math.cos(angle)}%`, top: `${50 + radius * Math.sin(angle)}%` };
};

/**
 * Companies on the outer ring: organisations ARA has recruited for (clients first), mixed with companies
 * where its alumni work. Only eight are on the ring at a time; the rest take turns (see `swapSlot`).
 */
const CLIENT_LOGOS = clientele
  .filter((client) => client.logo)
  .map((client) => ({
    name: client.name,
    src: `/logos/clients/${client.logo}`,
    // Square or stacked logos get more height so they read as well as wide wordmarks.
    tall: (client.height ?? 0) >= 40,
  }));
const ALUMNI_LOGOS = alumniCompanies
  .filter((company) =>
    ['accenture', 'deloitte', 'tcs', 'infosys', 'microsoft', 'amazon', 'ibm', 'wipro'].includes(company.logo),
  )
  .map((company) => ({
    name: company.name,
    src: `/logos/alumni/${company.logo}.svg`,
    tall: company.size === 'lg',
  }));
/** The first eight clients, then the remaining clients and alumni companies taking turns. */
const COMPANIES = [
  ...CLIENT_LOGOS.slice(0, 8),
  ...CLIENT_LOGOS.slice(8).flatMap((client, i) => [client, ALUMNI_LOGOS[i]].filter(Boolean)),
  ...ALUMNI_LOGOS.slice(CLIENT_LOGOS.length - 8),
];
const OUTER_SLOTS = 8;

/**
 * Hero visual: ARA at the centre, the skills it trains on the inner ring and companies (clients and
 * where alumni work) on the outer ring, both slowly orbiting. Pulses travel outwards, and a beam
 * shoots to one company at a time; every other beam swaps that logo for the next company.
 */
export function TalentOrbit() {
  const reduce = useReducedMotionSafe();
  const [pulse, setPulse] = useState(0);
  // A pulse shooting from the ARA mark to one company logo; `hit` lights that logo up on arrival.
  const [beam, setBeam] = useState<{ id: number; index: number } | null>(null);
  const [hit, setHit] = useState<number | null>(null);
  // slots[i] = index of the program shown in ring position i.
  const [slots, setSlots] = useState(() => Array.from({ length: SLOTS }, (_, i) => i));
  // Which slot changes next, and which program goes into it (a sliding window, so no duplicates).
  const cursor = useRef({ slot: 0, next: SLOTS });
  // outer[i] = index (into COMPANIES) of the company shown in outer ring position i.
  const [outer, setOuter] = useState(() => Array.from({ length: OUTER_SLOTS }, (_, i) => i));
  const outerRef = useRef(outer);
  const nextCompany = useRef(OUTER_SLOTS % COMPANIES.length);

  /** Puts the next company that is not already on the ring into `slot`. */
  const swapSlot = (slot: number) => {
    if (COMPANIES.length <= OUTER_SLOTS) return;
    const shown = new Set(outerRef.current);
    let n = nextCompany.current;
    for (let guard = 0; shown.has(n) && guard < COMPANIES.length; guard += 1) n = (n + 1) % COMPANIES.length;
    nextCompany.current = (n + 1) % COMPANIES.length;
    const updated = outerRef.current.map((value, i) => (i === slot ? n : value));
    outerRef.current = updated;
    setOuter(updated);
  };

  // Load every logo up front so a swapped-in logo appears without a gap.
  useEffect(() => {
    COMPANIES.forEach((company) => {
      const img = new window.Image();
      img.src = company.src;
    });
  }, []);

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

  useEffect(() => {
    if (reduce) return;
    let id = 0;
    let last = -1;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const fire = () => {
      let index = Math.floor(Math.random() * OUTER_SLOTS);
      if (index === last) index = (index + 1) % OUTER_SLOTS;
      last = index;
      id += 1;
      const swap = id % 2 === 0;
      setBeam({ id, index });
      timers.push(
        setTimeout(() => {
          setHit(index);
          if (swap) swapSlot(index);
        }, 650),
      );
      timers.push(setTimeout(() => setHit((current) => (current === index ? null : current)), 1500));
    };
    fire();
    const timer = setInterval(fire, 1700);
    return () => {
      clearInterval(timer);
      timers.forEach(clearTimeout);
    };
  }, [reduce]);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px] select-none" aria-hidden>
      {/* Rings */}
      <div className="absolute inset-[6%] rounded-full border border-white/[0.08]" />
      <div className="absolute inset-[6%] rounded-full border border-dashed border-white/[0.07] [animation:spin_70s_linear_infinite]" />
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
      <div className={cn('absolute inset-0', !reduce && '[animation:spin_50s_linear_infinite]')}>
        {beam && (
          <div
            key={beam.id}
            className="absolute left-1/2 top-1/2 h-0.5 w-[43%] origin-left"
            style={{ transform: `rotate(${(beam.index / OUTER_SLOTS) * 360 + 12 - 90}deg)` }}
          >
            <motion.div
              className="absolute inset-y-0 left-[24%] right-[12%] origin-left rounded-full bg-gradient-to-r from-brand/0 via-brand-300/70 to-brand-300"
              initial={{ scaleX: 0, opacity: 1 }}
              animate={{ scaleX: 1, opacity: [1, 1, 0] }}
              transition={{
                duration: 1.1,
                ease: [0.22, 1, 0.36, 1],
                opacity: { duration: 1.3, times: [0, 0.6, 1] },
              }}
            />
          </div>
        )}
        {outer.map((companyIndex, index) => (
          <div
            key={index}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={onCircle(index, OUTER_SLOTS, 43, 12)}
          >
            <div className={cn(!reduce && '[animation:spin_50s_linear_infinite_reverse]')}>
              <div
                className={cn(
                  'flex h-8 w-[64px] items-center justify-center rounded-xl border bg-white px-2 shadow-[0_10px_30px_-12px_rgb(0_0_0/0.6)] transition-[box-shadow,border-color,transform] duration-500 sm:h-12 sm:w-[104px] sm:rounded-2xl sm:px-3',
                  hit === index
                    ? 'scale-110 border-brand-300 shadow-[0_0_0_4px_rgb(255_122_128/0.35),0_10px_30px_-12px_rgb(0_0_0/0.6)]'
                    : 'border-white/10',
                )}
              >
                {/* Logos of any shape fit the same box; a swapped-in logo pops in. */}
                <AnimatePresence mode="wait" initial={false}>
                  <motion.img
                    key={COMPANIES[companyIndex].src}
                    src={COMPANIES[companyIndex].src}
                    alt={COMPANIES[companyIndex].name}
                    title={COMPANIES[companyIndex].name}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className={cn(
                      'w-full object-contain',
                      COMPANIES[companyIndex].tall ? 'h-[86%]' : 'h-[62%]',
                    )}
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Inner ring: skills */}
      <div className={cn('absolute inset-0', !reduce && '[animation:spin_35s_linear_infinite_reverse]')}>
        {slots.map((programIndex, index) => {
          const program = programs[programIndex];
          return (
            <div
              key={index}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={onCircle(index, SLOTS, 23)}
            >
              <div className={cn(!reduce && '[animation:spin_35s_linear_infinite]')}>
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
        <Image src="/logo-mark.png" alt="ARA Solutions" title="ARA Solutions" width={512} height={512} className="h-[58%] w-auto" priority />
      </div>
    </div>
  );
}
