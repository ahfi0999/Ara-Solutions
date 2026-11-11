'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react';
import Logo from './Logo';
import SocialIcons from './SocialIcons';
import { MENU } from '../../data/menu';
import { site } from '../../data/site';

const group = (label) => MENU.find((entry) => entry.label === label).items;

const COLUMNS = [
  {
    title: 'Company',
    links: [
      ...group('Company'),
      { label: 'Careers', href: '/careers' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  { title: 'Services', links: group('Services') },
  { title: 'Training & Placement', links: group('Training & Placement') },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className="bg-navy-deep text-slate-300">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-12 sm:px-6 lg:px-8 lg:pt-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" aria-label="ARA Solutions home" className="inline-block">
              <Logo variant="dark" size="footer" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              Connecting businesses with the right technology talent, and helping people build careers through
              hands-on training and placement.
            </p>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Phone aria-hidden="true" className="size-4 text-red-300" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Mail aria-hidden="true" className="size-4 text-red-300" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin aria-hidden="true" className="size-4 text-red-300" />
                {site.location}
              </li>
            </ul>
            <SocialIcons
              className="mt-6"
              itemClassName="border border-white/15 text-slate-300 hover:border-white/40 hover:text-white"
            />
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
            {COLUMNS.map((column) => (
              <div key={column.title}>
                <h2 className="font-display text-sm font-semibold text-white">{column.title}</h2>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-slate-400 transition-colors hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ARA Solutions. All rights reserved.</p>
        </div>
      </div>

      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 flex size-11 items-center justify-center rounded-full bg-navy text-white shadow-lift transition-colors hover:bg-brand"
        >
          <ArrowUp className="size-5" />
        </button>
      )}
    </footer>
  );
}
