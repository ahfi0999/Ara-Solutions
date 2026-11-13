'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'motion/react';
import { ArrowRight, Search, X } from 'lucide-react';
import { programs, type Program } from '@/content/programs';
import { cn } from '@/lib/cn';
import { EASE } from '@/components/motion/primitives';
import { ProgramCard } from './ProgramShowcase';

const ALL = 'All programs';

/** Text a visitor might search for: name, family, tools, roles and module titles. */
const searchText = (program: Program) =>
  [
    program.name,
    program.shortName,
    program.family,
    program.tagline,
    ...program.tools,
    ...program.roles.map((role) => role.title),
    ...program.modules.map((module) => module.title),
  ]
    .join(' ')
    .toLowerCase();

/**
 * Scales to any number of courses: category tabs (generated from each program's `family`,
 * with counts), optional search, and an animated grid. No scroll hijacking.
 */
export function ProgramExplorer({ limit, search = false }: { limit?: number; search?: boolean }) {
  const families = useMemo(() => {
    const counts = new Map<string, number>();
    programs.forEach((program) => counts.set(program.family, (counts.get(program.family) ?? 0) + 1));
    return [{ name: ALL, count: programs.length }, ...[...counts].map(([name, count]) => ({ name, count }))];
  }, []);

  const [family, setFamily] = useState(ALL);
  const [query, setQuery] = useState('');

  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  const filtered = programs.filter(
    (program) =>
      (family === ALL || program.family === family) &&
      terms.every((term) => searchText(program).includes(term)),
  );
  const visible = limit ? filtered.slice(0, limit) : filtered;
  const hidden = filtered.length - visible.length;

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <LayoutGroup id="program-tabs">
          <div
            role="tablist"
            aria-label="Program categories"
            className="-mx-5 flex gap-1 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:px-0"
          >
            {families.map((item) => {
              const active = item.name === family;
              return (
                <button
                  key={item.name}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFamily(item.name)}
                  className={cn(
                    'relative shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    active ? 'text-white' : 'text-muted hover:text-text',
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="program-tab-pill"
                      className="absolute inset-0 rounded-full bg-ink"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative flex items-center gap-2">
                    {item.name}
                    <span
                      className={cn(
                        'rounded-full px-1.5 py-px text-[11px] tabular-nums',
                        active ? 'bg-white/15 text-white' : 'bg-line text-muted',
                      )}
                    >
                      {item.count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </LayoutGroup>

        {search && (
          <label className="relative block w-full lg:w-80">
            <span className="sr-only">Search programs</span>
            <Search aria-hidden className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-faint" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by skill, tool or role"
              className="h-11 w-full appearance-none rounded-full border border-line bg-paper pl-11 pr-10 text-sm outline-none [&::-webkit-search-cancel-button]:hidden transition-colors placeholder:text-faint focus:border-navy"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-full text-faint hover:bg-canvas hover:text-text"
              >
                <X className="size-4" />
              </button>
            )}
          </label>
        )}
      </div>

      <p aria-live="polite" className="sr-only">
        {filtered.length} programs shown
      </p>

      <motion.ul layout className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((program) => (
            <motion.li
              key={program.slug}
              layout
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="h-full"
            >
              <ProgramCard program={program} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      {filtered.length === 0 && (
        <div className="mt-8 rounded-3xl border border-dashed border-line p-10 text-center">
          <p className="font-medium">No programs match &ldquo;{query}&rdquo;.</p>
          <p className="mt-1 text-sm text-muted">Try another skill, or talk to us about what you want to learn.</p>
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setFamily(ALL);
            }}
            className="mt-5 text-sm font-medium text-navy underline underline-offset-4"
          >
            Show all programs
          </button>
        </div>
      )}

      {hidden > 0 && (
        <div className="mt-10 flex justify-center">
          <Link
            href="/training-placement/"
            className="group inline-flex h-12 items-center gap-2 rounded-full border border-line bg-paper px-6 font-medium transition-colors hover:border-text/30"
          >
            View all {filtered.length} programs
            <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      )}
    </div>
  );
}
