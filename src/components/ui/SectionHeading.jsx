/** Eyebrow + title + intro used at the top of every section, so headings look the same everywhere. */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'center',
  tone = 'light',
  className = '',
}) {
  const centered = align === 'center';
  const dark = tone === 'dark';
  return (
    <div className={`${centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}>
      {eyebrow && (
        <p
          className={`font-display text-xs font-semibold uppercase tracking-[0.16em] ${dark ? 'text-red-300' : 'text-brand'}`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-3 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl ${dark ? 'text-white' : 'text-ink'}`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${dark ? 'text-slate-300' : 'text-body'}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
