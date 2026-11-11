const HEIGHTS = {
  header: 'h-9 xl:h-11',
  footer: 'h-8',
};

/**
 * Official ARA Solutions logo.
 * `variant="light"` = colour logo for white backgrounds, `variant="dark"` = white logo for navy backgrounds.
 */
export default function Logo({ variant = 'dark', size = 'header', className = '' }) {
  const file = variant === 'light' ? 'logo-color.png' : 'logo-white.png';
  return (
    <img
      src={`/${file}`}
      alt="ARA Solutions - IT Always The Right Choice"
      width={1200}
      height={164}
      decoding="async"
      className={`${HEIGHTS[size]} w-auto select-none ${className}`}
    />
  );
}
