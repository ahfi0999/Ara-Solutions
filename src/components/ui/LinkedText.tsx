'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { INLINE_LINK, linkPieces } from '@/lib/internal-links';

/** A text where the names of our other pages are links (see lib/internal-links). Inherits the text colour. */
export function LinkedText({ children }: { children: string }) {
  const pathname = usePathname() ?? '';
  const current = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return (
    <>
      {linkPieces(children, current).map((piece, index) =>
        typeof piece === 'string' ? (
          piece
        ) : (
          <Link key={`${piece.href}-${index}`} href={piece.href} className={INLINE_LINK}>
            {piece.text}
          </Link>
        ),
      )}
    </>
  );
}
