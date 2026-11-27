import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { navigation, isGroup } from '@/content/navigation';
import { site } from '@/content/site';
import { Container } from '@/components/ui/Section';

const extraCompanyLinks = [
  { label: 'Careers', href: '/careers/' },
  { label: 'Contact', href: '/contact/' },
  { label: 'Privacy Notice', href: '/privacy/' },
];

export function Footer() {
  const year = new Date().getFullYear();
  // A menu with categories (Training) lists its categories here, not every course in them.
  const columns = navigation.filter(isGroup).map((group) => ({
    title: group.label,
    links: [
      ...(group.categories?.map(({ label, href }) => ({ label, href })) ?? group.items),
      ...(group.footer ? [group.footer] : []),
      ...(group.label === 'Company' ? extraCompanyLinks : []),
    ],
  }));

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Image
              src="/logo-white.png"
              alt="ARA Solutions"
              title="ARA Solutions"
              width={1200}
              height={164}
              className="h-8 w-auto"
            />
            <p className="mt-6 max-w-sm leading-relaxed text-white/60">
              IT staffing, recruitment and workforce solutions, and career-focused training and placement,
              from Hyderabad for clients in India and abroad.
            </p>
            <ul className="mt-8 space-y-3 text-[15px] text-white/75">
              <li>
                <a href={site.phoneHref} className="flex items-center gap-3 hover:text-white">
                  <Phone aria-hidden className="size-4 text-brand-300" /> {site.phone}
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="flex items-center gap-3 hover:text-white">
                  <Mail aria-hidden className="size-4 text-brand-300" /> {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white"
                >
                  <MapPin aria-hidden className="size-4 text-brand-300" /> {site.address.city},{' '}
                  {site.address.region}
                </a>
              </li>
            </ul>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
            {columns.map((column) => (
              <div key={column.title}>
                <h2 className="font-mono text-[12px] uppercase tracking-[0.18em] text-white/40">
                  {column.title}
                </h2>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-[15px] text-white/75 hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p>© {year} ARA Solutions. All rights reserved.</p>
            <p className="text-[12px] text-white/35">
              Salesforce, ServiceNow and Workday are trademarks of their respective owners. ARA Solutions is an independent
              training provider.
            </p>
          </div>
          <p className="font-mono text-[12px] uppercase tracking-[0.18em]">{site.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
