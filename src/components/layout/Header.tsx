'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowRight,
  Bot,
  Brain,
  Building2,
  ChevronDown,
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
import { site } from '@/content/site';
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
            className="absolute left-1/2 top-full z-10 w-[420px] -translate-x-1/2 pt-3"
          >
            <div className="flex overflow-hidden rounded-2xl border border-line bg-white text-text shadow-[0_24px_60px_-20px_rgb(0_0_0/0.55),0_0_0_1px_rgb(13_17_80/0.06)]">
              {/* The section name, written sideways down the left edge. */}
              <div
                aria-hidden
                className="flex w-12 shrink-0 items-center justify-center border-r border-line bg-canvas"
              >
                <span className="rotate-180 font-mono text-[11px] font-semibold uppercase tracking-[0.35em] text-ink [writing-mode:vertical-rl]">
                  {group.strip}
                </span>
              </div>

              <div className="min-w-0 flex-1 p-2">
                <ul className="grid gap-0.5">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="group/item flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-canvas focus-visible:bg-canvas"
                      >
                        <NavItemIcon item={item} />
                        <span className="min-w-0">
                          <span className="block text-[15px] font-semibold leading-tight text-ink transition-colors group-hover/item:text-brand">
                            {item.label}
                          </span>
                          {item.description && (
                            <span className="mt-0.5 block truncate text-[13px] text-muted">
                              {item.description}
                            </span>
                          )}
                        </span>
                      </Link>
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export function Header() {
  const pathname = normalise(usePathname());
  const { open } = useEnquiry();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
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
            href={site.phoneHref}
            className="hidden items-center gap-2 text-sm text-white/70 hover:text-white 2xl:flex"
          >
            <Phone aria-hidden className="size-4" />
            {site.phone}
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
                  <ul className="mt-2">
                    {[...group.items, ...(group.footer ? [group.footer] : [])].map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={cn(
                            'flex items-center gap-3 rounded-xl px-3 text-[17px] text-white hover:bg-white/5',
                            item.icon ? 'py-2' : 'py-2.5 text-white/70',
                          )}
                        >
                          <NavItemIcon item={item} dark />
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
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
                  href={site.phoneHref}
                  className="flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 text-white"
                >
                  <Phone aria-hidden className="size-4" /> {site.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
