'use client';

import { useEffect, useRef } from 'react';
import { HeroNetwork } from '@/components/visuals/HeroNetwork';

/**
 * Moving background for the dark navy banners at the top of inner pages (put it first inside an
 * `.aurora` section). It matches the home page: the fine grid, a third drifting colour glow, the
 * "talent network" (wandering dots, links and red sparks travelling between them) and a soft light
 * that follows the mouse. The network pauses off-screen and in background tabs, and everything holds
 * still for visitors who prefer reduced motion.
 */
export function DarkHeroBackdrop() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = ref.current;
    const section = layer?.parentElement;
    if (!layer || !section) return;
    let frame = 0;
    let x = 0;
    let y = 0;
    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;
      const rect = section.getBoundingClientRect();
      x = event.clientX - rect.left;
      y = event.clientY - rect.top;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        layer.style.setProperty('--hx', `${x}px`);
        layer.style.setProperty('--hy', `${y}px`);
        layer.style.setProperty('--hl', '1');
      });
    };
    const onLeave = () => layer.style.setProperty('--hl', '0');
    section.addEventListener('pointermove', onMove);
    section.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(frame);
      section.removeEventListener('pointermove', onMove);
      section.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="hero-glow absolute left-[30%] top-[10%] aspect-square w-[min(60vw,760px)] rounded-full" />
      <div className="grid-lines absolute inset-0" />
      {/* Fainter behind the headline on the left, full strength on the right. */}
      <HeroNetwork className="absolute inset-0 h-full w-full [mask-image:linear-gradient(to_right,rgb(0_0_0/0.4),black_60%)]" />
      <div className="hero-light absolute inset-0" />
    </div>
  );
}
