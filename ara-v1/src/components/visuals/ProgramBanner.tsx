import { Bot, BrainCircuit, Code2, Layers, ShieldCheck, type LucideIcon } from 'lucide-react';
import type { Program } from '@/content/programs';
import { cn } from '@/lib/cn';

/** Icon per program family, used when a program has no official product logo. */
const FAMILY_ICON: Record<Program['family'], LucideIcon> = {
  'Enterprise platforms': Layers,
  AI: BrainCircuit,
  Security: ShieldCheck,
  Development: Code2,
};

/** Specific icons for programs that share a family but deserve their own picture. */
const PROGRAM_ICON: Partial<Record<Program['slug'], LucideIcon>> = {
  'agentic-ai': Bot,
};

/** Banner backgrounds per accent (written out in full so Tailwind can detect them). */
const BANNER_BG: Record<Program['accent'], string> = {
  sky: 'from-sky-500/45 via-sky-700/25 to-ink',
  emerald: 'from-emerald-500/40 via-emerald-700/25 to-ink',
  violet: 'from-violet-500/45 via-violet-700/25 to-ink',
  rose: 'from-rose-500/45 via-rose-700/25 to-ink',
  amber: 'from-amber-500/40 via-amber-700/25 to-ink',
  indigo: 'from-indigo-500/45 via-indigo-700/25 to-ink',
};

const ICON_COLOR: Record<Program['accent'], string> = {
  sky: 'text-sky-600',
  emerald: 'text-emerald-600',
  violet: 'text-violet-600',
  rose: 'text-rose-600',
  amber: 'text-amber-600',
  indigo: 'text-indigo-600',
};

/**
 * Picture strip at the top of a program card. With a photo (`program.image`) the photo fills the
 * strip, fading into the card; programs with an official product logo (`program.logo`) show it on
 * a white plate over the photo. Programs without a photo fall back to a coloured strip with an icon,
 * so a newly added course always gets a banner.
 */
export function ProgramBanner({ program, className }: { program: Program; className?: string }) {
  const Icon = PROGRAM_ICON[program.slug] ?? FAMILY_ICON[program.family] ?? Layers;

  if (program.image) {
    return (
      <div aria-hidden className={cn('relative h-52 overflow-hidden bg-ink', className)}>
        {/* eslint-disable-next-line @next/next/no-img-element -- static card photo */}
        <img
          src={program.image}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Darken the top for the label and fade the bottom into the card */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/10 to-ink" />
        {program.logo && (
          <div className="absolute inset-x-0 bottom-6 flex justify-center">
            <div className="flex h-16 items-center justify-center rounded-2xl bg-white px-6 shadow-[0_18px_40px_-16px_rgb(0_0_0/0.7)] transition-transform duration-500 ease-out group-hover:-translate-y-1">
              {/* eslint-disable-next-line @next/next/no-img-element -- small SVG logo */}
              <img src={program.logo} alt="" className="h-11 w-auto max-w-44 object-contain" />
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className={cn('relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br pt-12', BANNER_BG[program.accent], className)}
    >
      <div className="absolute size-72 rounded-full border border-white/[0.07] transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute size-48 rounded-full border border-white/[0.09] transition-transform duration-700 group-hover:scale-125" />
      <div className="grid-lines absolute inset-0 opacity-40" />
      <div className="relative flex h-[4.5rem] min-w-44 items-center justify-center gap-3 rounded-2xl bg-white px-6 shadow-[0_18px_40px_-16px_rgb(0_0_0/0.65)] transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-105">
        <Icon className={cn('size-8 shrink-0', ICON_COLOR[program.accent])} strokeWidth={1.75} />
        <span className="whitespace-nowrap text-lg font-semibold tracking-tight text-ink">{program.shortName}</span>
      </div>
    </div>
  );
}
