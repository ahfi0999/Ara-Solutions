import { alumniCompanies } from '@/content/home';
import { cn } from '@/lib/cn';

const HEIGHT = { sm: 'h-6', md: 'h-7', lg: 'h-10' } as const;

function Row({
  items,
  reverse,
  duration,
}: {
  items: readonly (typeof alumniCompanies)[number][];
  reverse?: boolean;
  duration: number;
}) {
  return (
    <div className="flex overflow-hidden">
      <ul
        className={cn('flex shrink-0 animate-marquee gap-3 pr-3', reverse && '[animation-direction:reverse]')}
        style={{ '--marquee-duration': `${duration}s` } as React.CSSProperties}
      >
        {[...items, ...items].map((company, index) => (
          <li
            key={`${company.logo}-${index}`}
            aria-hidden={index >= items.length}
            className="flex h-18 w-44 shrink-0 items-center justify-center rounded-2xl border border-line bg-paper px-6 sm:w-48"
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- small SVG logos */}
            <img
              src={`/logos/alumni/${company.logo}.svg`}
              alt={index >= items.length ? '' : company.name}
              loading="lazy"
              className={cn(HEIGHT[company.size], 'w-auto max-w-full object-contain')}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

/** "Where our alumni work": two rows of logos moving in opposite directions. */
export function AlumniMarquee({
  title = 'Where our alumni work',
  className,
}: {
  title?: string;
  className?: string;
}) {
  const half = Math.ceil(alumniCompanies.length / 2);
  return (
    <section aria-labelledby="alumni-title" className={cn('py-16 sm:py-20', className)}>
      <h2
        id="alumni-title"
        className="text-center font-mono text-[12px] uppercase tracking-[0.2em] text-muted"
      >
        {title}
      </h2>
      <div className="mt-8 space-y-3 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <Row items={alumniCompanies.slice(0, half)} duration={55} />
        <Row items={alumniCompanies.slice(half)} duration={60} reverse />
      </div>
    </section>
  );
}
