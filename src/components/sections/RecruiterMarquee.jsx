import { TOP_RECRUITERS } from '../../data/recruiters';

const initials = (name) =>
  name
    .split(/\s+/)
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

function Row({ names, reverse = false, duration }) {
  // Rendered twice so the -50% scroll loops without a gap. The copy is hidden from screen readers.
  return (
    <div className="flex overflow-hidden">
      <div
        className={`marquee flex shrink-0 gap-3 pr-3 ${reverse ? 'marquee-reverse' : ''}`}
        style={{ '--marquee-duration': `${duration}s` }}
      >
        {[...names, ...names].map((name, index) => (
          <div
            key={`${name}-${index}`}
            aria-hidden={index >= names.length}
            className="flex h-14 shrink-0 items-center gap-3 rounded-xl border border-line bg-white px-4 shadow-[0_1px_2px_rgb(15_23_51/0.04)]"
          >
            <span className="flex size-8 items-center justify-center rounded-lg bg-mist font-display text-[11px] font-bold text-navy">
              {initials(name)}
            </span>
            <span className="whitespace-nowrap font-display text-[15px] font-semibold text-ink">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Two rows of company names scrolling in opposite directions. */
export default function RecruiterMarquee({
  title = 'Top companies hiring for ServiceNow, Cybersecurity & AI skills',
  className = '',
}) {
  const half = Math.ceil(TOP_RECRUITERS.length / 2);
  return (
    <section aria-labelledby="recruiters-title" className={className}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="recruiters-title" className="font-display text-lg font-semibold text-ink sm:text-xl">
          {title}
        </h2>
      </div>
      <div className="marquee-group relative mt-6 space-y-3 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <Row names={TOP_RECRUITERS.slice(0, half)} duration={50} />
        <Row names={TOP_RECRUITERS.slice(half)} duration={55} reverse />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mt-4 text-xs text-muted">
          Shown to illustrate industry demand for these skills. Company names are trademarks of their
          respective owners and do not imply affiliation with ARA Solutions.
        </p>
      </div>
    </section>
  );
}
