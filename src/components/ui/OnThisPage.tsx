'use client';

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/cn';

type Item = { id: string; title: string };

/** Where a section counts as "being read": just below the menu bar. */
const READ_LINE = 140;

/**
 * "On this page" contents for long documents. On large screens it stays beside the text and highlights
 * the section being read; on phones and tablets it folds into a tap-to-open list above the text.
 */
export function OnThisPage({ items }: { items: Item[] }) {
  const [active, setActive] = useState<string | undefined>(items[0]?.id);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      let current: string | undefined = items[0]?.id;
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= READ_LINE) current = item.id;
      }
      // At the very bottom the last short sections can never reach the line: mark the last one.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4)
        current = items.at(-1)?.id;
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [items]);

  const list = (compact: boolean) => (
    <ol className={cn('border-l border-line', compact ? 'mt-3 space-y-0.5' : 'mt-4 space-y-0.5')}>
      {items.map((item, index) => {
        const current = item.id === active;
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={current ? 'location' : undefined}
              // On phones, fold the list away once a section is picked.
              onClick={(event) => {
                const details = event.currentTarget.closest('details');
                if (details) details.open = false;
              }}
              className={cn(
                '-ml-px flex gap-3 border-l-2 py-1.5 pl-4 text-[14px] leading-snug transition-colors',
                current
                  ? 'border-brand font-medium text-text'
                  : 'border-transparent text-muted hover:border-line hover:text-text',
              )}
            >
              <span className="w-5 shrink-0 font-mono text-[12px] leading-[1.45rem] text-faint">
                {String(index + 1).padStart(2, '0')}
              </span>
              {item.title}
            </a>
          </li>
        );
      })}
    </ol>
  );

  return (
    <>
      <details className="group rounded-2xl border border-line bg-paper p-4 lg:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between text-[15px] font-medium [&::-webkit-details-marker]:hidden">
          On this page
          <ChevronDown aria-hidden className="size-4 text-muted transition-transform group-open:rotate-180" />
        </summary>
        {list(true)}
      </details>
      <nav
        aria-label="On this page"
        className="hidden lg:sticky lg:top-32 lg:block lg:transition-[top] lg:duration-500 [[data-header-hidden]_&]:lg:top-12"
      >
        <p className="text-[13px] font-medium text-faint">On this page</p>
        {list(false)}
      </nav>
    </>
  );
}
