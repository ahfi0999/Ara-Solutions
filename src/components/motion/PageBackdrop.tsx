'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Background for every light section of the site, fixed behind the page:
 * - a faint navy dot grid (echoes the dots of the hero's talent network),
 * - two large, very pale brand glows that drift slowly,
 * - a spotlight that brightens the dots in brand red around the mouse pointer.
 * Dark sections paint over it, so it only shows on the light ones. The spotlight is skipped on
 * touch screens, and the glows hold still when the visitor prefers reduced motion (global CSS rule).
 *
 * Reading pages (everything except the homepage) get a calm version: the dots fade out behind
 * the main text column and the red spotlight is off, so long text stays easy to read.
 */
export function PageBackdrop() {
  const ref = useRef<HTMLDivElement>(null);
  const calm = usePathname() !== '/';

  useEffect(() => {
    const element = ref.current;
    if (!element || calm || !window.matchMedia('(pointer: fine)').matches) return;
    let frame = 0;
    let x = 0;
    let y = 0;
    const apply = () => {
      frame = 0;
      element.style.setProperty('--mx', `${x}px`);
      element.style.setProperty('--my', `${y}px`);
    };
    const onMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      element.style.setProperty('--spot', '1');
      if (!frame) frame = requestAnimationFrame(apply);
    };
    const onLeave = () => element.style.setProperty('--spot', '0');
    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
      element.style.setProperty('--spot', '0');
    };
  }, [calm]);

  return (
    <div
      ref={ref}
      aria-hidden
      data-calm={calm ? '' : undefined}
      className="page-backdrop pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="backdrop-glow backdrop-glow-a" />
      <div className="backdrop-glow backdrop-glow-b" />
      <div className="backdrop-dots absolute inset-0" />
      <div className="backdrop-spot absolute inset-0" />
    </div>
  );
}
