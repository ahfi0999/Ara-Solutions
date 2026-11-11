import { TOP_RECRUITERS } from '../../data/recruiters';

const LOGO_HEIGHT = { sm: 'h-7', md: 'h-8', lg: 'h-11' };

function Row({ names, reverse = false, duration }) {
  // Rendered twice so the -50% scroll loops without a gap. The copy is hidden from screen readers.
  return (
    <div className="flex overflow-hidden">
      <div
        className={`marquee flex shrink-0 gap-3 pr-3 ${reverse ? 'marquee-reverse' : ''}`}
        style={{ '--marquee-duration': `${duration}s` }}
      >
        {[...names, ...names].map((company, index) => (
          <div
            key={`${company.logo}-${index}`}
            aria-hidden={index >= names.length}
            className="flex h-16 w-44 shrink-0 items-center justify-center rounded-xl border border-line bg-white px-5 shadow-[0_1px_2px_rgb(15_23_51/0.04)] sm:w-48"
          >
            <img
              src={`/logos/companies/${company.logo}.svg`}
              alt={company.name}
              loading="lazy"
              className={`${LOGO_HEIGHT[company.size] || LOGO_HEIGHT.md} w-auto max-w-full object-contain`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/** Two rows of company logos scrolling in opposite directions. */
export default function RecruiterMarquee({
  title = 'Where our alumni work',
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
    </section>
  );
}
