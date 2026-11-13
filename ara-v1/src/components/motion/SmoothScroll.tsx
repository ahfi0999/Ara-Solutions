'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

/**
 * Inertia ("smooth") scrolling for the whole site. Honours prefers-reduced-motion,
 * animates in-page anchor links, and resets to the top on route change.
 */
export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.09,
      anchors: { offset: -96 },
      stopInertiaOnNavigate: true,
      // Let nested scroll areas (dialogs, mobile menu) scroll natively.
      prevent: (node) => node.closest('dialog, #mobile-menu, [data-lenis-prevent]') !== null,
    });
    window.lenis = lenis as unknown as Window['lenis'];
    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (!window.location.hash) (window.lenis as unknown as Lenis | undefined)?.scrollTo(0, { immediate: true });
  }, [pathname]);

  return null;
}
