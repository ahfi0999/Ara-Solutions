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
/** A soft beam of light that sweeps across the photo: on hover (laptops), or once when `play` is set (phones). */
function Shine({ play }: { play?: boolean }) {
  return (
    <span
      aria-hidden
      style={{ transform: 'translateX(-120%) skewX(-16deg)' }}
      className={cn(
        'pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent',
        'motion-safe:group-hover:animate-shine',
        play && 'motion-safe:animate-shine',
      )}
    />
  );
}

export function ProgramBanner({
  program,
  className,
  shine,
  pressed,
}: {
  program: Program;
  className?: string;
  /** Play the light sweep once (used on touch screens when the card scrolls into view). */
  shine?: boolean;
  /** The card is being opened: the photo zooms in, as if diving into the course. */
  pressed?: boolean;
}) {
  const Icon = PROGRAM_ICON[program.slug] ?? FAMILY_ICON[program.family] ?? Layers;

  if (program.image) {
    return (
      <div aria-hidden className={cn('relative h-36 overflow-hidden bg-ink', className)}>
        {/* eslint-disable-next-line @next/next/no-img-element -- static card photo */}
        <img
          src={program.image}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          // While the card is being opened, the zoom wins over the hover zoom.
          style={pressed ? { scale: '1.2', transitionDuration: '300ms' } : undefined}
        />
        {/* Darken the top for the label and fade the bottom into the card */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/10 to-ink" />
        <Shine play={shine} />
        {program.logo && (
          <div className="absolute inset-x-0 bottom-4 flex justify-center">
            <div className="flex h-12 items-center justify-center rounded-xl bg-white px-5 shadow-[0_18px_40px_-16px_rgb(0_0_0/0.7)] transition-[translate,box-shadow] duration-500 ease-out group-hover:-translate-y-1.5 group-hover:shadow-[0_24px_48px_-14px_rgb(0_0_0/0.85)]">
              {/* eslint-disable-next-line @next/next/no-img-element -- small SVG logo */}
              <img src={program.logo} alt="" className="h-9 w-auto max-w-36 object-contain" />
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className={cn(
        'relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br pt-8',
        BANNER_BG[program.accent],
        className,
      )}
    >
      <div className="absolute size-72 rounded-full border border-white/[0.07] transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute size-48 rounded-full border border-white/[0.09] transition-transform duration-700 group-hover:scale-125" />
      <div className="grid-lines absolute inset-0 opacity-40" />
      <Shine play={shine} />
      <div className="relative flex h-14 min-w-40 items-center justify-center gap-3 rounded-xl bg-white px-5 shadow-[0_18px_40px_-16px_rgb(0_0_0/0.65)] transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-105">
        <Icon className={cn('size-7 shrink-0', ICON_COLOR[program.accent])} strokeWidth={1.75} />
        <span className="whitespace-nowrap text-base font-semibold tracking-tight text-ink">
          {program.shortName}
        </span>
      </div>
    </div>
  );
}
