import { cn } from '@/lib/cn';

export type MarqueeLogo = {
  id: string;
  name: string;
  /** Logo file under /public. Without one, the name is shown as text. */
  src?: string;
  /** Small line under the logo, such as the client's industry. */
  caption?: string;
  /** Logo height in px, so wide wordmarks and compact marks look equally weighted. */
  height?: number;
};

/**
 * A row of logo tiles rolling sideways forever (the list is drawn twice so the loop is seamless).
 * It pauses while the pointer is over it, so a visitor can read a logo.
 */
export function LogoMarquee({
  items,
  duration,
  reverse = false,
  captions = false,
  label,
}: {
  items: MarqueeLogo[];
  /** Seconds for one full loop. */
  duration: number;
  reverse?: boolean;
  captions?: boolean;
  label: string;
}) {
  return (
    <div className="group/marquee flex overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
      <ul
        aria-label={label}
        className={cn(
          'flex shrink-0 animate-marquee gap-3 pr-3 group-hover/marquee:[animation-play-state:paused]',
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
              className={cn(
                'flex shrink-0 flex-col items-center justify-center gap-2 rounded-2xl border border-line bg-paper px-6 shadow-soft',
                captions ? 'h-24 w-52 sm:w-56' : 'h-18 w-44 sm:w-48',
              )}
            >
              <div className="flex h-10 w-full items-center justify-center">
                {item.src ? (
                  /* eslint-disable-next-line @next/next/no-img-element -- small logo files */
                  <img
                    src={item.src}
                    alt={copy ? '' : item.name}
                    loading="lazy"
                    style={{ height: item.height ?? 28 }}
                    className="max-h-full w-auto max-w-full object-contain"
                  />
                ) : (
                  <span className="text-balance text-center text-[14px] font-semibold leading-tight tracking-tight text-ink">
                    {item.name}
                  </span>
                )}
              </div>
              {captions && item.caption && (
                <p className="text-[11.5px] leading-none text-muted">{item.caption}</p>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
