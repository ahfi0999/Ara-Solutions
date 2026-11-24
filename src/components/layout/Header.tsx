'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowRight,
  Bot,
  Briefcase,
  Brain,
  Building2,
  ChevronDown,
  ChevronRight,
  Cloud,
  Code2,
  Globe2,
  GraduationCap,
  Handshake,
  Menu,
  Phone,
  Route,
  ShieldCheck,
  Trophy,
  UserCheck,
  Users,
  Workflow,
  X,
  type LucideIcon,
} from 'lucide-react';
import { navigation, isGroup, type NavGroup, type NavIcon, type NavItem } from '@/content/navigation';
import { lineFor, site } from '@/content/site';
import { cn } from '@/lib/cn';
import { useEnquiry } from '@/components/enquiry/EnquiryProvider';

const normalise = (path: string) => (path.length > 1 ? path.replace(/\/+$/, '') : path);

const NAV_ICONS: Record<NavIcon, LucideIcon> = {
  about: Building2,
  approach: Route,
  cases: Trophy,
  'corp-to-corp': Handshake,
  'fulltime-staffing': UserCheck,
  rpo: Users,
  'international-consulting': Globe2,
  salesforce: Cloud,
  servicenow: Workflow,
  'ai-ml': Brain,
  'agentic-ai': Bot,
  cybersecurity: ShieldCheck,
  'full-stack-ai': Code2,
  workday: Briefcase,
  program: GraduationCap,
};

/** The small icon square beside a menu link; turns brand red while its link is highlighted. */
function NavItemIcon({ item, dark = false }: { item: NavItem; dark?: boolean }) {
  if (!item.icon) return null;
  const Icon = NAV_ICONS[item.icon];
  return (
    <span
      aria-hidden
      className={cn(
        'flex size-9 shrink-0 items-center justify-center rounded-lg border transition-colors duration-200',
        dark
          ? 'border-white/10 bg-white/[0.06] text-white'
          : cn(
              'border-line bg-white group-hover/item:border-brand group-hover/item:bg-brand group-hover/item:text-white group-focus-visible/item:border-brand group-focus-visible/item:bg-brand group-focus-visible/item:text-white',
              item.tone ?? 'text-ink',
            ),
      )}
    >
      <Icon className="size-[18px]" />
    </span>
  );
}

/** The red line under the menu names; it slides to whichever menu is open, hovered or current. */
function NavUnderline() {
  return (
    <motion.span
      layoutId="nav-underline"
      data-nav-underline
      aria-hidden
      className="pointer-events-none absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-brand"
      transition={{ type: 'spring', stiffness: 520, damping: 42 }}
    />
  );
}

/** One link in a dropdown: icon, name and a short line; courses marked new get a "New" badge. */
function MenuLink({ item, compact = false }: { item: NavItem; compact?: boolean }) {
  return (
    <Link
      href={item.href}
      className={cn(
        'group/item flex items-center gap-3 rounded-xl px-3 transition-colors hover:bg-canvas focus-visible:bg-canvas',
        compact ? 'py-2' : 'py-2.5',
      )}
    >
      {item.plain ? (
        <span
          aria-hidden
          className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-line bg-white text-muted transition-colors duration-200 group-hover/item:border-brand group-hover/item:bg-brand group-hover/item:text-white"
        >
          <GraduationCap className="size-[18px]" />
        </span>
      ) : (
        <NavItemIcon item={item} />
      )}
      <span className="min-w-0">
        <span className="flex items-center gap-2">
          <span
            className={cn(
              'font-semibold leading-tight text-ink transition-colors group-hover/item:text-brand',
              compact ? 'text-[14px]' : 'text-[15px]',
            )}
          >
            {item.label}
          </span>
          {item.isNew && (
            <span className="shrink-0 rounded-full bg-brand px-1.5 py-px text-[10px] font-semibold uppercase tracking-wide text-white">
              New
            </span>
          )}
        </span>
        {item.description && (
          <span
            className={cn(
              'mt-0.5 block text-muted',
              compact ? 'line-clamp-2 text-[12px]' : 'truncate text-[13px]',
            )}
          >
            {item.description}
          </span>
        )}
      </span>
    </Link>
  );
}

/**
 * Two-panel dropdown (Training): categories down the left; pointing at one (or focusing it with the
 * keyboard) shows all its courses on the right. Opens on the category of the page you are on.
 */
function CategoryMenu({ group }: { group: NavGroup & { categories: NonNullable<NavGroup['categories']> } }) {
  const pathname = usePathname();
  const start = Math.max(
    0,
    group.categories.findIndex(
      (category) =>
        pathname.startsWith(category.href) ||
        category.items.some((item) => pathname.startsWith(item.href.split('#')[0])),
    ),
  );
  const [active, setActive] = useState(start);
  const current = group.categories[active];
  return (
    <div className="flex min-w-0 flex-1">
      <ul className="w-60 shrink-0 space-y-0.5 border-r border-line p-2">
        {group.categories.map((category, index) => (
          <li key={category.label}>
            <Link
              href={category.href}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              className={cn(
                'flex items-center gap-2 rounded-xl px-3 py-2.5 transition-colors',
                index === active ? 'bg-brand text-white' : 'text-ink hover:bg-canvas',
              )}
            >
              <span className="min-w-0 flex-1">
                <span className="block text-[15px] font-semibold leading-tight">{category.label}</span>
                <span
                  className={cn(
                    'mt-0.5 block truncate text-[12px]',
                    index === active ? 'text-white/75' : 'text-muted',
                  )}
                >
                  {category.note}
                </span>
              </span>
              <ChevronRight aria-hidden className="size-4 shrink-0" />
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex min-w-0 flex-1 flex-col p-2">
        <p className="px-3 pb-1 pt-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-faint">
          {current.label}: all courses
        </p>
        <ul className="grid gap-0.5 sm:grid-cols-2">
          {current.items.map((item) => (
            <li key={item.label}>
              <MenuLink item={item} compact />
            </li>
          ))}
        </ul>
        {/* One link at the bottom: the track's own page ("See all 8 ServiceNow courses"), or, for a track
            with a single course, the Training page. */}
        {current.items.length > 1 ? (
          <Link
            href={current.href}
            className="mt-auto flex items-center justify-between rounded-xl bg-canvas px-4 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-white"
          >
            See all {current.items.length} {current.label} courses
            <ArrowRight aria-hidden className="size-4" />
          </Link>
        ) : (
          group.footer && (
            <Link
              href={group.footer.href}
              className="mt-auto flex items-center justify-between rounded-xl bg-canvas px-4 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-white"
            >
              {group.footer.label}
              <ArrowRight aria-hidden className="size-4" />
            </Link>
          )
        )}
      </div>
    </div>
  );
}

function Dropdown({
  group,
  open,
  active,
  underline,
  onOpen,
  onClose,
}: {
  group: NavGroup;
  open: boolean;
  active: boolean;
  underline: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const id = `menu-${group.match.replace(/\W/g, '')}`;
  return (
    <li
      className="relative"
      onMouseEnter={() => {
        clearTimeout(timer.current);
        onOpen();
      }}
      onMouseLeave={() => {
        timer.current = setTimeout(onClose, 150);
      }}
    >
      {group.href ? (
        // The label opens the overview page; the arrow opens the dropdown (touch screens, keyboard).
        <div className="relative flex items-center">
          {underline && <NavUnderline />}
          <Link
            href={group.href}
            className={cn(
              'rounded-full py-2 pl-3.5 pr-0.5 text-[15px] transition-colors',
              active || open ? 'text-white' : 'text-white/70 hover:text-white',
            )}
          >
            {group.label}
          </Link>
          <button
            type="button"
            aria-expanded={open}
            aria-controls={id}
            aria-label={`Show ${group.label} menu`}
            onClick={() => (open ? onClose() : onOpen())}
            className={cn(
              'mr-1 flex size-7 items-center justify-center rounded-full transition-colors',
              active || open ? 'text-white' : 'text-white/70 hover:text-white',
            )}
          >
            <ChevronDown aria-hidden className={cn('size-4 transition-transform', open && 'rotate-180')} />
          </button>
        </div>
      ) : (
        <div className="relative">
          {underline && <NavUnderline />}
          <button
            type="button"
            aria-expanded={open}
            aria-controls={id}
            onClick={() => (open ? onClose() : onOpen())}
            className={cn(
              'flex items-center gap-1 rounded-full px-3.5 py-2 text-[15px] transition-colors',
              active || open ? 'text-white' : 'text-white/70 hover:text-white',
            )}
          >
            {group.label}
            <ChevronDown aria-hidden className={cn('size-4 transition-transform', open && 'rotate-180')} />
          </button>
        </div>
      )}
      <AnimatePresence>
        {open && (
          <motion.div
            id={id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
            className={cn(
              'absolute left-1/2 top-full z-10 -translate-x-1/2 pt-3',
              group.categories ? 'w-[min(780px,calc(100vw-2rem))]' : 'w-[420px]',
            )}
          >
            <div className="flex overflow-hidden rounded-2xl border border-line bg-white text-text shadow-[0_24px_60px_-20px_rgb(0_0_0/0.55),0_0_0_1px_rgb(13_17_80/0.06)]">
              {/* The section name, written sideways down the left edge. */}
              <div aria-hidden className="flex w-12 shrink-0 items-center justify-center bg-brand">
                <span className="rotate-180 font-mono text-[11px] font-semibold uppercase tracking-[0.35em] text-white [writing-mode:vertical-rl]">
                  {group.strip}
                </span>
              </div>

              {group.categories ? (
                <CategoryMenu group={{ ...group, categories: group.categories }} />
              ) : (
                <div className="min-w-0 flex-1 p-2">
                  <ul className="grid gap-0.5">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <MenuLink item={item} />
                      </li>
                    ))}
                  </ul>
                  {group.footer && (
                    <Link
                      href={group.footer.href}
                      className="mt-1 flex items-center justify-between rounded-xl bg-canvas px-4 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-white"
                    >
                      {group.footer.label}
                      <ArrowRight aria-hidden className="size-4" />
                    </Link>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export function Header() {
  const pathname = normalise(usePathname());
  const line = lineFor(pathname);
  const { open } = useEnquiry();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  // Phone menu: which training track is open. Undefined = the track of the page you are on.
  const [openTrack, setOpenTrack] = useState<string | null | undefined>(undefined);
  const trainingCategories = navigation.filter(isGroup).find((group) => group.categories)?.categories ?? [];
  const currentTrack = trainingCategories.find(
    (category) =>
      pathname === normalise(category.href) ||
      category.items.some((item) => pathname === normalise(item.href.split('#')[0])),
  )?.label;
  const expandedTrack = openTrack === undefined ? currentTrack : openTrack;
  useEffect(() => {
    if (!menuOpen) setOpenTrack(undefined);
  }, [menuOpen]);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  // The red underline sits under the open menu, else the hovered link, else the section you are in.
  const currentEntry = navigation.find((entry) =>
    isGroup(entry) ? pathname.startsWith(entry.match) : pathname === normalise(entry.href),
  );
  const underlineAt = openGroup ?? hoveredLink ?? currentEntry?.label ?? null;
  const [hidden, setHidden] = useState(false);
  const headerHidden = hidden && !menuOpen && !openGroup;

  // Sticky elements below the header (e.g. the course section bar) read this to close the gap.
  useEffect(() => {
    document.documentElement.toggleAttribute('data-header-hidden', headerHidden);
  }, [headerHidden]);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      // Hide while scrolling down, show again as soon as the visitor scrolls up.
      if (Math.abs(y - lastY.current) > 6) {
        setHidden(y > lastY.current && y > 160);
        lastY.current = y;
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  // Close an open dropdown when the visitor taps or clicks anywhere outside the header (touch devices).
  const headerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!openGroup) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpenGroup(null);
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [openGroup]);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? 'hidden' : '';
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        setOpenGroup(null);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const links = navigation.filter((entry) => !isGroup(entry)) as { label: string; href: string }[];

  return (
    <header
      ref={headerRef}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
        headerHidden && '-translate-y-full',
        scrolled || menuOpen
          ? 'border-b border-white/10 bg-ink/85 backdrop-blur-xl'
          : 'border-b border-transparent',
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <nav
        aria-label="Main"
        className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8"
      >
        <Link href="/" aria-label="ARA Solutions home" className="shrink-0">
          <Image
            src="/logo-white.png"
            alt="ARA Solutions"
            title="ARA Solutions"
            width={1200}
            height={164}
            priority
            className="h-7 w-auto xl:h-8"
          />
        </Link>

        {/* `relative`: the dropdown panels are centred on this whole bar. */}
        <ul className="relative hidden items-center lg:flex" onMouseLeave={() => setHoveredLink(null)}>
          {navigation.map((entry) =>
            isGroup(entry) ? (
              <Dropdown
                key={entry.label}
                group={entry}
                open={openGroup === entry.label}
                active={pathname.startsWith(entry.match)}
                underline={underlineAt === entry.label}
                onOpen={() => setOpenGroup(entry.label)}
                onClose={() => setOpenGroup((current) => (current === entry.label ? null : current))}
              />
            ) : (
              <li
                key={entry.href}
                className="relative"
                onMouseEnter={() => setHoveredLink(entry.label)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {underlineAt === entry.label && <NavUnderline />}
                <Link
                  href={entry.href}
                  aria-current={pathname === normalise(entry.href) ? 'page' : undefined}
                  className={cn(
                    'rounded-full px-3.5 py-2 text-[15px] transition-colors',
                    pathname === normalise(entry.href) ? 'text-white' : 'text-white/70 hover:text-white',
                  )}
                >
                  {entry.label}
                </Link>
              </li>
            ),
          )}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={line.phoneHref}
            className="hidden items-center gap-2 text-sm text-white/70 hover:text-white 2xl:flex"
          >
            <Phone aria-hidden className="size-4" />
            {line.phone}
          </a>
          <button
            type="button"
            onClick={() => open()}
            className="h-10 rounded-full bg-white px-5 text-sm font-medium text-ink transition-colors hover:bg-white/90"
          >
            Talk to us
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="flex size-10 items-center justify-center rounded-full text-white hover:bg-white/10 lg:hidden"
        >
          {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'calc(100dvh - 4.5rem)' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-y-auto border-t border-white/10 bg-ink lg:hidden"
          >
            <div className="space-y-7 px-5 pb-10 pt-6">
              {navigation.filter(isGroup).map((group) => (
                <div key={group.label}>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
                    {group.label}
                  </p>
                  {group.categories ? (
                    // Training on phones: one card per track (opens on the current page's track); tap to show its courses.
                    <ul className="mt-3 space-y-2">
                      {group.categories.map((category) => {
                        const open = expandedTrack === category.label;
                        return (
                          <li
                            key={category.label}
                            className={cn(
                              'overflow-hidden rounded-2xl border transition-colors',
                              open ? 'border-brand bg-white/[0.04]' : 'border-white/10 bg-white/[0.03]',
                            )}
                          >
                            <button
                              type="button"
                              aria-expanded={open}
                              onClick={() => setOpenTrack(open ? null : category.label)}
                              className={cn(
                                'flex w-full items-center gap-3 px-3 py-3 text-left transition-colors',
                                open ? 'bg-brand text-white' : 'text-white active:bg-white/5',
                              )}
                            >
                              {category.icon && (
                                <NavItemIcon
                                  item={{ label: category.label, href: category.href, icon: category.icon }}
                                  dark
                                />
                              )}
                              <span className="min-w-0 flex-1">
                                <span className="block text-[17px]">{category.label}</span>
                                <span
                                  className={cn(
                                    'block text-[12px]',
                                    open ? 'text-white/75' : 'text-white/45',
                                  )}
                                >
                                  {category.note}
                                </span>
                              </span>
                              <ChevronDown
                                aria-hidden
                                className={cn('size-4 transition-transform', open && 'rotate-180')}
                              />
                            </button>
                            {open && (
                              <ul className="space-y-0.5 p-2">
                                {category.items.map((item) => (
                                  <li key={item.label}>
                                    <Link
                                      href={item.href}
                                      className="flex items-center gap-3 rounded-xl px-3 py-2 text-[16px] text-white hover:bg-white/5"
                                    >
                                      <NavItemIcon item={item} dark />
                                      <span className="min-w-0 flex-1">{item.label}</span>
                                      {item.isNew && (
                                        <span className="shrink-0 rounded-full bg-brand px-2 py-0.5 text-[11px] font-semibold uppercase text-white">
                                          New
                                        </span>
                                      )}
                                    </Link>
                                  </li>
                                ))}
                                {category.items.length > 1 && (
                                  <li>
                                    <Link
                                      href={category.href}
                                      className="mx-1 mt-2 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-[15px] font-semibold text-white transition-colors hover:border-white/40"
                                    >
                                      See all {category.items.length} {category.label} courses
                                      <ArrowRight aria-hidden className="size-4" />
                                    </Link>
                                  </li>
                                )}
                              </ul>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <ul className="mt-2">
                      {group.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="flex items-center gap-3 rounded-xl px-3 py-2 text-[17px] text-white hover:bg-white/5"
                          >
                            <NavItemIcon item={item} dark />
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                  {group.footer &&
                    (group.categories ? (
                      <Link
                        href={group.footer.href}
                        className="mt-3 flex items-center justify-between rounded-2xl border border-white/15 px-4 py-3 text-[16px] font-medium text-white hover:bg-white/5"
                      >
                        {group.footer.label}
                        <ArrowRight aria-hidden className="size-4" />
                      </Link>
                    ) : (
                      <Link
                        href={group.footer.href}
                        className="mt-1 block rounded-xl px-3 py-2.5 text-[17px] text-white/70 hover:bg-white/5"
                      >
                        {group.footer.label}
                      </Link>
                    ))}
                </div>
              ))}
              <ul className="border-t border-white/10 pt-5">
                {links.map((entry) => (
                  <li key={entry.href}>
                    <Link
                      href={entry.href}
                      className="block rounded-xl px-3 py-2.5 text-[17px] text-white hover:bg-white/5"
                    >
                      {entry.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="grid gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    open();
                  }}
                  className="h-12 rounded-full bg-brand font-medium text-white"
                >
                  Talk to us
                </button>
                <a
                  href={line.phoneHref}
                  className="flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 text-white"
                >
                  <Phone aria-hidden className="size-4" /> {line.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
