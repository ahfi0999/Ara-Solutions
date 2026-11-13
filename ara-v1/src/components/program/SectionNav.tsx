'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/cn';

/** Sticky in-page navigation that highlights the section currently in view. */
export function SectionNav({ sections }: { sections: { id: string; label: string }[] }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-30% 0px -60% 0px' },
    );
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav
      aria-label="On this page"
      className="sticky top-18 z-30 border-b border-line bg-canvas/85 backdrop-blur-xl transition-[top] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [[data-header-hidden]_&]:top-0"
    >
      <ul className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-5 py-2.5 [scrollbar-width:none] sm:px-8">
        {sections.map((section) => (
          <li key={section.id} className="shrink-0">
            <a
              href={`#${section.id}`}
              aria-current={active === section.id ? 'true' : undefined}
              className={cn(
                'block rounded-full px-4 py-1.5 text-sm transition-colors',
                active === section.id ? 'bg-ink text-white' : 'text-muted hover:bg-paper hover:text-text',
              )}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
