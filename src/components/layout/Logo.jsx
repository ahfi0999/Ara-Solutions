const HEIGHTS = {
  sm: 'h-8 sm:h-9',
  md: 'h-10 sm:h-11',
  lg: 'h-12 sm:h-14',
  header: 'h-12',
  footer: 'h-8',
};

/** Company logo. `variant="dark"` is for dark backgrounds (white lettering). */
export default function Logo({ variant = 'dark', showTagline = true, size = 'md', className = '' }) {
  const onDark = variant === 'dark';
  const file = onDark
    ? showTagline
      ? 'logo.png'
      : 'logo-notagline.png'
    : showTagline
      ? 'logo-light.png'
      : 'logo-notagline-light.png';
  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src={`/${file}`}
        alt="ARA Solutions - IT Always The Right Choice"
        className={`${HEIGHTS[size]} w-auto object-contain transition-transform duration-200 hover:scale-[1.02]`}
        width={360}
        height={90}
        loading="eager"
        decoding="async"
      />
    </div>
  );
}
