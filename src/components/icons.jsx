/* Small hand-drawn icons used by the navigation and buttons. */

export function ArrowRightIcon({ className = 'w-4 h-4', size = 16, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path
        d="M3.33334 8H12.6667M12.6667 8L8.00001 3.33334M12.6667 8L8.00001 12.6667"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MenuIcon({ className = 'w-6 h-6', size = 24, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 6H20M4 12H20M4 18H20" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className = 'w-6 h-6', size = 24, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 6L18 18M6 18L18 6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ROTATION = {
  down: 'rotate-0',
  up: 'rotate-180',
  right: '-rotate-90',
  left: 'rotate-90',
};

export function ChevronIcon({
  className = 'w-4 h-4',
  size = 16,
  color = 'currentColor',
  direction = 'down',
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className={`${className} ${ROTATION[direction]} transition-transform duration-200`}
      aria-hidden="true"
    >
      <path
        d="M4 6L8 10L12 6"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
