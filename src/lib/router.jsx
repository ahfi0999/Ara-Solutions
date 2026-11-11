'use client';

import { useEffect } from 'react';
import { usePathname, useRouter as useNextRouter } from 'next/navigation';
import { ROUTES } from './seo';

/** "/contact/" -> "/contact" (the static export uses trailing slashes). */
const normalize = (path) => (path && path.length > 1 ? path.replace(/\/+$/, '') : '/');

/**
 * Same API the components used with the old hash router:
 * `currentPath` is the active route, `navigate(path)` goes to another page.
 */
export function useRouter() {
  const router = useNextRouter();
  const currentPath = normalize(usePathname());
  const navigate = (path) => router.push(path);
  return { currentPath, navigate };
}

/** Sends visitors with old hash links (/#/contact) to the real page (/contact). */
export function LegacyHashRedirect() {
  const router = useNextRouter();
  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, '');
    // Only real old-style links ("#/contact"); plain anchors like "#faq" are left alone.
    if (!hash.startsWith('/')) return;
    const path = normalize(hash);
    router.replace(ROUTES.includes(path) ? path : '/');
  }, [router]);
  return null;
}
