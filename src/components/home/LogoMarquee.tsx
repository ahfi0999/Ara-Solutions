import { cn } from '@/lib/cn';

export type MarqueeLogo = {
  id: string;
  name: string;
  /** Logo file under /public. Without one, the name is shown as a wordmark. */
  src?: string;
  /** Logo height in px, so wide wordmarks and compact marks look equally weighted. */
  height?: number;
};

/** For a company without a logo file: its name set as a simple wordmark (first word large). */
function Wordmark({ name }: { name: string }) {
  const [first, ...rest] = name.split(' ');
  return (
    <span className="text-center leading-tight">
      <span className="block text-[18px] font-bold tracking-tight text-ink">{first}</span>
      {rest.length > 0 && (
        <span className="mt-0.5 block text-[9.5px] font-semibold uppercase tracking-[0.16em] text-muted">
          {rest.join(' ')}
        </span>
      )}
    </span>
  );
}

/**
 * One white band of logos rolling sideways forever (the list is drawn twice so the loop is seamless),
 * with thin dividers between logos. It pauses while the pointer is over it, so a visitor can read a logo.
 * Logos load straight away (they are small) so no tile is ever empty as it rolls in.
 */
export function LogoMarquee({
  items,
  duration,
  reverse = false,
  label,
}: {
  items: MarqueeLogo[];
  /** Seconds for one full loop. */
  duration: number;
  reverse?: boolean;
  label: string;
}) {
  return (
    <div className="group/marquee overflow-hidden rounded-2xl border border-line bg-paper shadow-soft">
      <div className="flex [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
        <ul
          aria-label={label}
          className={cn(
            'flex shrink-0 animate-marquee group-hover/marquee:[animation-play-state:paused]',
            reverse && '[animation-direction:reverse]',
          )}
          style={{ '--marquee-duration': `${duration}s` } as React.CSSProperties}
        >
          {[...items, ...items].map((item, index) => {
            const copy = index >= items.length;
            return (
              <li
                key={`${item.id}-${index}`}
                aria-hidden={copy || undefined}
                className="flex h-20 w-40 shrink-0 items-center justify-center border-r border-line px-6 sm:h-24 sm:w-52 sm:px-8"
              >
                {item.src ? (
                  /* eslint-disable-next-line @next/next/no-img-element -- small logo files */
                  <img
                    src={item.src}
                    alt={item.name}
                    title={item.name}
                    decoding="async"
                    style={{ height: item.height ?? 28 }}
                    className="max-h-11 w-auto max-w-full object-contain"
                  />
                ) : (
                  <Wordmark name={item.name} />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
