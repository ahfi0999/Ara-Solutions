'use client';

import Link from 'next/link';
import { useMemo, useRef, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Briefcase,
  Cloud,
  Code2,
  Layers,
  LayoutGrid,
  Search,
  ShieldCheck,
  Workflow,
  X,
  type LucideIcon,
} from 'lucide-react';
import { allPrograms, programs, type Program } from '@/content/programs';
import { trackHref, trackPrograms, tracks, type Track } from '@/content/tracks';
import { accent } from '@/lib/accent';
import { cn } from '@/lib/cn';
import { BANNER_BG } from '@/components/visuals/ProgramBanner';
import { EASE } from '@/components/motion/primitives';
import { ProgramCard } from './ProgramShowcase';

const ALL = 'all';

/** Each track's tab icon and colour (matching its courses' cards). New tracks fall back to a neutral icon. */
const TRACK_STYLE: Record<string, { icon: LucideIcon; tone: string }> = {
  [ALL]: { icon: LayoutGrid, tone: 'text-navy' },
  'servicenow-courses': { icon: Workflow, tone: 'text-emerald-500' },
  'salesforce-courses': { icon: Cloud, tone: 'text-sky-500' },
  'workday-courses': { icon: Briefcase, tone: 'text-amber-500' },
  security: { icon: ShieldCheck, tone: 'text-amber-500' },
  'ai-and-data-courses': { icon: BrainCircuit, tone: 'text-violet-500' },
  'full-stack-courses': { icon: Code2, tone: 'text-indigo-500' },
};
const styleFor = (key: string) => TRACK_STYLE[key] ?? { icon: Layers, tone: 'text-navy' };

type Course = { program: Program; track?: Track; isNew?: boolean; label?: string };

/** Every course, track by track in the client's order (as in the menu), then anything not in a track. */
const COURSES: Course[] = (() => {
  const list: Course[] = [];
  for (const track of tracks)
    for (const { entry, program } of trackPrograms(track))
      if (!list.some((course) => course.program.slug === program.slug))
        list.push({ program, track, isNew: entry.isNew, label: entry.label });
  for (const program of allPrograms)
    if (!list.some((course) => course.program.slug === program.slug)) list.push({ program });
  return list;
})();

/** Short lists (the home page) lead with the six flagship programs, then the other courses. */
const FEATURED: Course[] = [
  ...programs.flatMap((program) => COURSES.filter((course) => course.program.slug === program.slug)),
  ...COURSES.filter((course) => !programs.some((program) => program.slug === course.program.slug)),
];

/**
 * The white part of each track box, in the track's colour: a soft tint that deepens towards the bottom
 * corner, and a dot pattern there (written out in full so Tailwind can detect the classes).
 */
const BODY_TINT: Record<Program['accent'], { bg: string; dots: string; icon: string }> = {
  sky: { bg: 'from-sky-100/80 via-sky-50/50', dots: 'text-sky-500/25', icon: 'text-sky-500/[0.13]' },
  emerald: {
    bg: 'from-emerald-100/80 via-emerald-50/50',
    dots: 'text-emerald-500/25',
    icon: 'text-emerald-500/[0.13]',
  },
  violet: { bg: 'from-violet-100/80 via-violet-50/50', dots: 'text-violet-500/25', icon: 'text-violet-500/[0.13]' },
  rose: { bg: 'from-rose-100/80 via-rose-50/50', dots: 'text-rose-500/25', icon: 'text-rose-500/[0.13]' },
  amber: { bg: 'from-amber-100/80 via-amber-50/50', dots: 'text-amber-500/25', icon: 'text-amber-500/[0.15]' },
  indigo: { bg: 'from-indigo-100/80 via-indigo-50/50', dots: 'text-indigo-500/25', icon: 'text-indigo-500/[0.13]' },
};

/** Text a visitor might search for: names, track, tools, roles and module titles. */
const searchText = ({ program, track, label }: Course) =>
  [
    program.name,
    program.shortName,
    label,
    track?.name,
    program.family,
    program.tagline,
    ...program.tools,
    ...program.roles.map((role) => role.title),
    ...program.modules.map((module) => module.title),
  ]
    .join(' ')
    .toLowerCase();

/**
 * Scales to any number of courses: one tab per training track (with counts), optional search, and an
 * animated grid. With `limit` (home page), "All courses" leads with the flagship programs. With `overview`
 * (Training page), "All courses" shows one box per track listing its course names, instead of every course
 * as a big card; picking a track (or searching) shows the big cards. No scroll hijacking.
 */
export function ProgramExplorer({
  limit,
  search = false,
  overview = false,
}: {
  limit?: number;
  search?: boolean;
  overview?: boolean;
}) {
  const tabs = useMemo(
    () => [
      { key: ALL, name: 'All courses', count: COURSES.length },
      ...tracks.map((track) => ({
        key: track.slug,
        name: track.name,
        count: COURSES.filter((course) => course.track?.slug === track.slug).length,
      })),
    ],
    [],
  );

  const [tab, setTab] = useState(ALL);
  const [query, setQuery] = useState('');
  const activeTrack = tracks.find((track) => track.slug === tab);

  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  const filtered = (limit && tab === ALL ? FEATURED : COURSES).filter(
    (course) =>
      (tab === ALL || course.track?.slug === tab) && terms.every((term) => searchText(course).includes(term)),
  );
  const visible = limit ? filtered.slice(0, limit) : filtered;
  const hidden = filtered.length - visible.length;
  const showOverview = overview && tab === ALL && terms.length === 0;

  // "See all ServiceNow courses" in the overview: switch to that track and bring the tabs back into view.
  const top = useRef<HTMLDivElement>(null);
  const openTrack = (slug: string) => {
    setTab(slug);
    const el = top.current;
    if (!el) return;
    const lenis = (window as unknown as { lenis?: { scrollTo: (el: HTMLElement, opts: object) => void } })
      .lenis;
    if (lenis)
      lenis.scrollTo(el, {}); // the page's scroll padding already leaves room for the menu bar
    else el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={top}>
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
        <p className="text-[13px] font-medium text-muted">Browse by track</p>
        {search && (
          <label className="relative block w-full sm:w-80">
            <span className="sr-only">Search courses</span>
            <Search
              aria-hidden
              className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-faint"
            />
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
      <LayoutGroup id="program-tabs">
        {/* One white bar, so it reads as a filter; where it doesn't fit, it scrolls sideways with faded edges. */}
        <div className="-mx-5 mt-3 px-5 sm:mx-0 sm:px-0">
          <div
            role="tablist"
            aria-label="Training tracks"
            className="flex max-w-full gap-1 overflow-x-auto rounded-full border border-line bg-paper p-1.5 shadow-soft [scrollbar-width:none] max-xl:[mask-image:linear-gradient(to_right,transparent,black_14px,black_calc(100%-14px),transparent)] sm:inline-flex"
          >
            {tabs.map((item) => {
              const active = item.key === tab;
              const { icon: Icon, tone } = styleFor(item.key);
              return (
                <button
                  key={item.key}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setTab(item.key)}
                  className={cn(
                    'relative shrink-0 rounded-full px-3.5 py-2.5 text-[14.5px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy',
                    active ? 'text-white' : 'text-text/80 hover:bg-canvas hover:text-text',
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="program-tab-pill"
                      className="absolute inset-0 rounded-full bg-ink shadow-[0_8px_20px_-8px_rgb(11_13_34/0.6)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative flex items-center gap-2">
                    <Icon
                      aria-hidden
                      className={cn('size-4 transition-colors', active ? 'text-white' : tone)}
                    />
                    {item.name}
                    <span
                      className={cn(
                        'rounded-full px-1.5 py-px text-[11px] font-semibold tabular-nums transition-colors',
                        active ? 'bg-brand text-white' : 'bg-ink/[0.06] text-muted',
                      )}
                    >
                      {item.count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </LayoutGroup>

      <p aria-live="polite" className="sr-only">
        {showOverview
          ? `${COURSES.length} courses in ${tracks.length} tracks`
          : `${filtered.length} courses shown`}
      </p>

      {showOverview ? (
        <motion.ul
          key="overview"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {tracks.map((track) => {
            const courses = COURSES.filter((course) => course.track?.slug === track.slug);
            if (courses.length === 0) return null;
            const { icon: Icon } = styleFor(track.slug);
            const tone = courses[0].program.accent;
            const fresh = courses.filter((course) => course.isNew).length;
            return (
              <li
                key={track.slug}
                className="group/track flex flex-col overflow-hidden rounded-3xl border border-line bg-paper shadow-soft transition-shadow duration-300 hover:shadow-lift"
              >
                {/* Coloured header in the track's colour, like the course cards' banners. */}
                <div className="relative isolate overflow-hidden bg-ink px-6 py-6 text-white sm:px-7">
                  <div
                    aria-hidden
                    className={cn('absolute inset-0 -z-10 bg-gradient-to-br', BANNER_BG[tone])}
                  />
                  <div aria-hidden className="grid-lines absolute inset-0 -z-10 opacity-40" />
                  <div
                    aria-hidden
                    className={cn(
                      'absolute -right-12 -top-12 -z-10 size-44 rounded-full opacity-70 blur-3xl transition-transform duration-700 group-hover/track:scale-125',
                      accent[tone].glow,
                    )}
                  />
                  <div className="flex items-center gap-3.5">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-[0_12px_28px_-12px_rgb(0_0_0/0.6)]">
                      <Icon aria-hidden className={cn('size-6', accent[tone].text)} />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight">{track.name}</h3>
                      <p className="text-[13px] text-white/65">
                        {courses.length} {courses.length === 1 ? 'course' : 'courses'}
                        {fresh > 0 && `, ${fresh} new`}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative isolate flex flex-1 flex-col overflow-hidden px-6 pb-6 pt-4 sm:px-7 sm:pb-7">
                  {/* Colour for the white part: a tint and dots towards the bottom corner, and the track's icon,
                      large and faint, floating there (it fills the space a shorter box has left). */}
                  <div
                    aria-hidden
                    className={cn('absolute inset-0 -z-10 bg-gradient-to-tl to-paper', BODY_TINT[tone].bg)}
                  />
                  <div
                    aria-hidden
                    className={cn(
                      'absolute inset-0 -z-10 bg-[radial-gradient(currentColor_1.2px,transparent_1.6px)] [background-size:18px_18px] [mask-image:radial-gradient(85%_75%_at_100%_100%,black,transparent)]',
                      BODY_TINT[tone].dots,
                    )}
                  />
                  <Icon
                    aria-hidden
                    strokeWidth={1.25}
                    className={cn(
                      'absolute -bottom-8 -right-8 -z-10 size-48 rotate-[-12deg] animate-float transition-[rotate,scale] duration-700 ease-out group-hover/track:rotate-0 group-hover/track:scale-110',
                      BODY_TINT[tone].icon,
                    )}
                  />
                  <ul className="-mx-3 space-y-0.5">
                    {courses.map(({ program, isNew, label }) => (
                      <li key={program.slug}>
                        <Link
                          href={`/training-placement/${program.slug}/`}
                          className="group/course flex items-center justify-between gap-3 rounded-xl px-3 py-2 text-[15px] transition-colors hover:bg-paper/90 focus-visible:bg-paper/90"
                        >
                          <span className="flex min-w-0 items-center gap-2">
                            <span className="font-medium text-text transition-colors group-hover/course:text-brand">
                              {label ?? program.shortName}
                            </span>
                            {isNew && (
                              <span className="shrink-0 rounded-full bg-brand px-1.5 py-px text-[10px] font-semibold uppercase tracking-wide text-white">
                                New
                              </span>
                            )}
                          </span>
                          <ArrowUpRight
                            aria-hidden
                            className="size-4 shrink-0 text-faint transition-colors group-hover/course:text-brand"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6">
                    <button
                      type="button"
                      onClick={() => openTrack(track.slug)}
                      className="group/more inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-[14px] font-semibold text-text transition-colors hover:border-text/30"
                    >
                      {courses.length === 1
                        ? `See the ${track.name} course`
                        : `See all ${courses.length} ${track.name} courses`}
                      <ArrowRight
                        aria-hidden
                        className="size-4 transition-transform group-hover/more:translate-x-0.5"
                      />
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </motion.ul>
      ) : (
        <motion.ul layout className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map(({ program, isNew }) => (
              <motion.li
                key={program.slug}
                layout
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="h-full"
              >
                <ProgramCard program={program} isNew={isNew} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      )}

      {filtered.length === 0 && (
        <div className="mt-8 rounded-3xl border border-dashed border-line p-10 text-center">
          <p className="font-medium">No courses match &ldquo;{query}&rdquo;.</p>
          <p className="mt-1 text-sm text-muted">
            Try another skill, or talk to us about what you want to learn.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setTab(ALL);
            }}
            className="mt-5 text-sm font-medium text-navy underline underline-offset-4"
          >
            Show all courses
          </button>
        </div>
      )}

      {hidden > 0 && (
        <div className="mt-10 flex justify-center">
          <Link
            href={activeTrack?.page ? trackHref(activeTrack) : '/training-placement/'}
            className="group inline-flex h-12 items-center gap-2 rounded-full border border-line bg-paper px-6 font-medium transition-colors hover:border-text/30"
          >
            View all {filtered.length} {activeTrack ? `${activeTrack.name} ` : ''}courses
            <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      )}
    </div>
  );
}
