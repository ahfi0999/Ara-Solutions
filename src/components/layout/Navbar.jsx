'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Mail, MapPin, Menu, Phone, X } from 'lucide-react';
import Logo from './Logo';
import SocialIcons from './SocialIcons';
import Button from '../ui/Button';
import { MENU, isActive } from '../../data/menu';
import { site } from '../../data/site';
import { useRouter } from '../../lib/router';

function TopBar() {
  return (
    <div className="hidden bg-navy-deep text-[13px] text-slate-300 md:block">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <a href={site.phoneHref} className="flex items-center gap-2 transition-colors hover:text-white">
            <Phone aria-hidden="true" className="size-3.5 text-red-300" />
            {site.phone}
          </a>
          <a href={site.emailHref} className="flex items-center gap-2 transition-colors hover:text-white">
            <Mail aria-hidden="true" className="size-3.5 text-red-300" />
            {site.email}
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2">
            <MapPin aria-hidden="true" className="size-3.5 text-red-300" />
            {site.location}
          </span>
          <SocialIcons itemClassName="text-slate-300 hover:bg-white/10 hover:text-white" />
        </div>
      </div>
    </div>
  );
}

function Dropdown({ entry, open, onOpen, onClose, active, currentPath }) {
  const closeTimer = useRef(null);
  const enter = () => {
    clearTimeout(closeTimer.current);
    onOpen();
  };
  const leave = () => {
    closeTimer.current = setTimeout(onClose, 120);
  };
  return (
    <li className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => (open ? onClose() : onOpen())}
        className={`relative flex h-20 items-center gap-1 px-3 font-display text-[15px] font-medium transition-colors ${active || open ? 'text-navy' : 'text-slate-600 hover:text-navy'}`}
      >
        {entry.label}
        <ChevronDown
          aria-hidden="true"
          className={`size-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
        {active && <span className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-brand" />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="absolute left-1/2 top-full z-50 w-[340px] -translate-x-1/2 pt-2"
          >
            <ul className="rounded-xl border border-line bg-white p-2 shadow-lift">
              {entry.items.map((item) => {
                const Icon = item.icon;
                const current = currentPath === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`group flex items-start gap-3.5 rounded-lg p-3 transition-colors ${current ? 'bg-mist' : 'hover:bg-mist'}`}
                    >
                      <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-tint text-brand">
                        <Icon aria-hidden="true" className="size-[18px]" />
                      </span>
                      <span>
                        <span className="block font-display text-sm font-semibold text-ink group-hover:text-navy">
                          {item.label}
                        </span>
                        <span className="mt-0.5 block text-[13px] leading-snug text-muted">
                          {item.description}
                        </span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export default function Navbar() {
  const { currentPath } = useRouter();
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // Close menus after navigating to another page.
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [currentPath]);

  return (
    <>
      <TopBar />
      <header
        className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur transition-shadow duration-200 ${scrolled ? 'border-line shadow-[0_6px_20px_-12px_rgb(15_23_51/0.25)]' : 'border-transparent'}`}
      >
        <nav
          aria-label="Main"
          className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        >
          <Link href="/" aria-label="ARA Solutions home" className="shrink-0">
            <Logo variant="light" size="header" />
          </Link>

          <ul className="hidden items-center lg:flex">
            {MENU.map((entry) =>
              entry.items ? (
                <Dropdown
                  key={entry.label}
                  entry={entry}
                  open={openMenu === entry.label}
                  onOpen={() => setOpenMenu(entry.label)}
                  onClose={() => setOpenMenu((current) => (current === entry.label ? null : current))}
                  active={isActive(entry, currentPath)}
                  currentPath={currentPath}
                />
              ) : (
                <li key={entry.href}>
                  <Link
                    href={entry.href}
                    className={`relative flex h-20 items-center px-3 font-display text-[15px] font-medium transition-colors ${isActive(entry, currentPath) ? 'text-navy' : 'text-slate-600 hover:text-navy'}`}
                  >
                    {entry.label}
                    {isActive(entry, currentPath) && (
                      <span className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-brand" />
                    )}
                  </Link>
                </li>
              ),
            )}
          </ul>

          <div className="hidden xl:block">
            <Button href="/contact" arrow>
              Hire Talent
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="flex size-10 items-center justify-center rounded-lg text-ink hover:bg-mist lg:hidden"
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-line bg-white lg:hidden"
            >
              <div className="max-h-[calc(100vh-5rem)] space-y-6 overflow-y-auto px-4 py-6 sm:px-6">
                {MENU.filter((entry) => entry.items).map((entry) => (
                  <div key={entry.label}>
                    <p className="px-3 font-display text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                      {entry.label}
                    </p>
                    <ul className="mt-2">
                      {entry.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={`block rounded-lg px-3 py-2.5 font-display text-[15px] font-medium ${currentPath === item.href ? 'bg-mist text-navy' : 'text-ink hover:bg-mist'}`}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <ul className="border-t border-line pt-4">
                  {MENU.filter((entry) => entry.href && entry.href !== '/').map((entry) => (
                    <li key={entry.href}>
                      <Link
                        href={entry.href}
                        className={`block rounded-lg px-3 py-2.5 font-display text-[15px] font-medium ${currentPath === entry.href ? 'bg-mist text-navy' : 'text-ink hover:bg-mist'}`}
                      >
                        {entry.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="space-y-2 border-t border-line pt-5 text-sm text-body">
                  <a href={site.phoneHref} className="flex items-center gap-2.5 px-3">
                    <Phone aria-hidden="true" className="size-4 text-brand" />
                    {site.phone}
                  </a>
                  <a href={site.emailHref} className="flex items-center gap-2.5 px-3">
                    <Mail aria-hidden="true" className="size-4 text-brand" />
                    {site.email}
                  </a>
                </div>
                <Button href="/contact" arrow className="w-full">
                  Hire Talent
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
