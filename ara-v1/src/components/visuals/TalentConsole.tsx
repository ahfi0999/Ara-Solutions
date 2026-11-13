'use client';

import { useEffect, useState } from 'react';
import { useReducedMotion } from 'motion/react';
import { BadgeCheck, GraduationCap, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/cn';

const STAGES = [
  { label: 'Sourced', value: 48 },
  { label: 'Screened', value: 12 },
  { label: 'Interviews', value: 5 },
  { label: 'Offer', value: 1 },
];

const CANDIDATES = [
  {
    initials: 'SK',
    name: 'Senior ServiceNow Developer',
    meta: '6 yrs · ITSM, Flow Designer',
    status: 'Interview',
    trained: false,
  },
  {
    initials: 'PR',
    name: 'ServiceNow Developer',
    meta: '2 yrs · CSA certified',
    status: 'Offer',
    trained: true,
  },
  {
    initials: 'AM',
    name: 'Platform Engineer',
    meta: '4 yrs · Scripting, IntegrationHub',
    status: 'Screened',
    trained: false,
  },
];

const STATUS_TONE: Record<string, string> = {
  Offer: 'bg-emerald-400/15 text-emerald-300',
  Interview: 'bg-sky-400/15 text-sky-300',
  Screened: 'bg-white/10 text-white/70',
};

/**
 * Homepage hero visual: a hiring pipeline for an open role, with one candidate who trained with ARA.
 * Shows both sides of the business in one picture. Illustrative only.
 */
export function TalentConsole() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(reduce ? STAGES.length - 1 : 0);

  useEffect(() => {
    if (reduce) return;
    const timer = setInterval(() => setActive((current) => (current + 1) % STAGES.length), 1800);
    return () => clearInterval(timer);
  }, [reduce]);

  return (
    <div className="ring-gradient relative rounded-[28px] bg-ink-2/80 p-2 shadow-glow backdrop-blur-xl">
      <div className="rounded-[22px] border border-white/5 bg-[#0b0f45]/90">
        <div className="flex items-center gap-3 border-b border-white/[0.07] px-5 py-3.5">
          <div className="flex gap-1.5" aria-hidden>
            <span className="size-2.5 rounded-full bg-white/15" />
            <span className="size-2.5 rounded-full bg-white/15" />
            <span className="size-2.5 rounded-full bg-white/15" />
          </div>
          <p className="font-mono text-[11px] text-white/50">requisition · REQ-2041</p>
          <span className="ml-auto rounded-full bg-white/[0.06] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-white/60">
            Contract · C2C
          </span>
        </div>

        <div className="space-y-5 p-5">
          <div>
            <p className="text-[15px] font-medium text-white">ServiceNow Developer · 3 positions</p>
            <p className="mt-0.5 text-[12.5px] text-white/45">Hyderabad · Hybrid · Start within 2 weeks</p>
          </div>

          <ol className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {STAGES.map((stage, index) => (
              <li
                key={stage.label}
                className={cn(
                  'rounded-xl border px-3 py-2.5 transition-all duration-500',
                  index === active
                    ? 'border-white/25 bg-white/[0.08]'
                    : 'border-white/[0.06] bg-white/[0.02]',
                )}
              >
                <p
                  className={cn(
                    'text-xl font-semibold tracking-tight',
                    index === active ? 'text-white' : 'text-white/60',
                  )}
                >
                  {stage.value}
                </p>
                <p className="text-[11px] text-white/45">{stage.label}</p>
                <span aria-hidden className="mt-2 block h-0.5 overflow-hidden rounded bg-white/10">
                  <span
                    className={cn(
                      'block h-full bg-brand transition-all duration-700',
                      index <= active ? 'w-full' : 'w-0',
                    )}
                  />
                </span>
              </li>
            ))}
          </ol>

          <ul className="space-y-2">
            {CANDIDATES.map((candidate) => (
              <li
                key={candidate.initials}
                className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2.5"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-[12px] font-medium text-white">
                  {candidate.initials}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2 truncate text-[13px] font-medium text-white">
                    {candidate.name}
                    {candidate.trained && (
                      <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-brand/20 px-2 py-0.5 text-[10px] font-medium text-brand-300">
                        <GraduationCap aria-hidden className="size-3" /> ARA trained
                      </span>
                    )}
                  </span>
                  <span className="block truncate text-[11.5px] text-white/45">{candidate.meta}</span>
                </span>
                <span
                  className={cn(
                    'shrink-0 rounded-full px-2 py-0.5 text-[10.5px] font-medium',
                    STATUS_TONE[candidate.status],
                  )}
                >
                  {candidate.status}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 text-[11.5px] text-white/60">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1">
              <ShieldCheck aria-hidden className="size-3.5 text-emerald-300" /> Background verified
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1">
              <BadgeCheck aria-hidden className="size-3.5 text-sky-300" /> Technically screened
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
