import type { Program } from '@/content/programs';

/** Tailwind classes per program accent (written out in full so Tailwind can detect them). */
export const accent: Record<
  Program['accent'],
  {
    text: string;
    textOnDark: string;
    bg: string;
    soft: string;
    ring: string;
    glow: string;
    dot: string;
    gradient: string;
  }
> = {
  sky: {
    text: 'text-sky-600',
    textOnDark: 'text-sky-300',
    bg: 'bg-sky-500',
    soft: 'bg-sky-50 text-sky-700',
    ring: 'ring-sky-400/40',
    glow: 'bg-sky-500/30',
    dot: 'bg-sky-400',
    gradient: 'from-sky-500/25 via-sky-500/5 to-transparent',
  },
  violet: {
    text: 'text-violet-600',
    textOnDark: 'text-violet-300',
    bg: 'bg-violet-500',
    soft: 'bg-violet-50 text-violet-700',
    ring: 'ring-violet-400/40',
    glow: 'bg-violet-500/30',
    dot: 'bg-violet-400',
    gradient: 'from-violet-500/25 via-violet-500/5 to-transparent',
  },
  emerald: {
    text: 'text-emerald-600',
    textOnDark: 'text-emerald-300',
    bg: 'bg-emerald-500',
    soft: 'bg-emerald-50 text-emerald-700',
    ring: 'ring-emerald-400/40',
    glow: 'bg-emerald-500/30',
    dot: 'bg-emerald-400',
    gradient: 'from-emerald-500/25 via-emerald-500/5 to-transparent',
  },
  amber: {
    text: 'text-amber-600',
    textOnDark: 'text-amber-300',
    bg: 'bg-amber-500',
    soft: 'bg-amber-50 text-amber-800',
    ring: 'ring-amber-400/40',
    glow: 'bg-amber-500/30',
    dot: 'bg-amber-400',
    gradient: 'from-amber-500/25 via-amber-500/5 to-transparent',
  },
  indigo: {
    text: 'text-indigo-600',
    textOnDark: 'text-indigo-300',
    bg: 'bg-indigo-500',
    soft: 'bg-indigo-50 text-indigo-700',
    ring: 'ring-indigo-400/40',
    glow: 'bg-indigo-500/30',
    dot: 'bg-indigo-400',
    gradient: 'from-indigo-500/25 via-indigo-500/5 to-transparent',
  },
  rose: {
    text: 'text-rose-600',
    textOnDark: 'text-rose-300',
    bg: 'bg-rose-500',
    soft: 'bg-rose-50 text-rose-700',
    ring: 'ring-rose-400/40',
    glow: 'bg-rose-500/30',
    dot: 'bg-rose-400',
    gradient: 'from-rose-500/25 via-rose-500/5 to-transparent',
  },
};
