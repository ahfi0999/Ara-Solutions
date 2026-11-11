import { site } from '../../data/site';

/* Simple brand glyphs (lucide no longer ships brand logos). */
const ICONS = {
  linkedin: (
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.8v1.5h.06c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.77 2.5 4.77 5.75v5.7h-4v-5.05c0-1.2-.02-2.75-1.7-2.75-1.7 0-1.95 1.3-1.95 2.66v5.14h-4v-11Z" />
  ),
  youtube: (
    <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.27 5 12 5 12 5s-6.27 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.73 19 12 19 12 19s6.27 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3L10 15Z" />
  ),
  instagram: (
    <path d="M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4Zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm6-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM12 4.2c2.5 0 2.8 0 3.8.06 2.55.12 3.74 1.33 3.86 3.86.05 1 .06 1.3.06 3.88s0 2.8-.06 3.8c-.12 2.53-1.3 3.74-3.86 3.86-1 .05-1.3.06-3.8.06s-2.8 0-3.8-.06c-2.56-.12-3.74-1.33-3.86-3.86-.05-1-.06-1.3-.06-3.8s0-2.8.06-3.88C4.46 5.6 5.65 4.38 8.2 4.26c1-.05 1.3-.06 3.8-.06ZM12 2.5c-2.58 0-2.9 0-3.92.06-3.45.16-5.37 2.07-5.53 5.53C2.5 9.1 2.5 9.42 2.5 12s0 2.9.06 3.92c.16 3.45 2.07 5.37 5.53 5.53 1 .05 1.34.06 3.92.06s2.9 0 3.92-.06c3.45-.16 5.37-2.07 5.53-5.53.05-1.02.06-1.34.06-3.92s0-2.9-.06-3.92c-.16-3.45-2.07-5.37-5.53-5.53C14.9 2.5 14.58 2.5 12 2.5Z" />
  ),
  facebook: (
    <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.86.25-1.45 1.48-1.45h1.57V4.47A21 21 0 0 0 14.27 4.3c-2.27 0-3.82 1.39-3.82 3.93v2.27H7.9v3h2.55V21h3.05Z" />
  ),
};

const LABELS = { linkedin: 'LinkedIn', youtube: 'YouTube', instagram: 'Instagram', facebook: 'Facebook' };

/** Social links. Renders nothing until real profile URLs are added in src/data/site.js. */
export default function SocialIcons({ className = '', itemClassName = '' }) {
  const entries = Object.entries(site.social).filter(([, url]) => url);
  if (entries.length === 0) return null;
  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {entries.map(([key, url]) => (
        <li key={key}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={LABELS[key]}
            className={`flex size-8 items-center justify-center rounded-full transition-colors ${itemClassName}`}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
              {ICONS[key]}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
