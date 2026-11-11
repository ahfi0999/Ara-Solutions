'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Button from '../ui/Button';
import FadeUp from '../ui/FadeUp';
import { MENU } from '../../data/menu';
import { useRouter } from '../../lib/router';

/** "Home / Services / Recruitment Process Outsourcing", built from the main menu. */
function Breadcrumb() {
  const { currentPath } = useRouter();
  const path = currentPath === '/services/training-placement' ? '/training-placement' : currentPath;
  const crumbs = [{ label: 'Home', href: '/' }];
  for (const entry of MENU) {
    if (entry.href && entry.href !== '/' && entry.href === path) crumbs.push({ label: entry.label });
    const item = entry.items?.find((child) => child.href === path);
    if (!item) continue;
    // "All Programs" is the Training & Placement overview itself, so it gets a single crumb.
    if (item.href === '/training-placement') crumbs.push({ label: entry.label });
    else crumbs.push({ label: entry.label }, { label: item.label });
  }
  if (crumbs.length === 1) return null;
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-slate-400">
        {crumbs.map((crumb, index) => (
          <li key={crumb.label} className="flex items-center gap-1.5">
            {index > 0 && <ChevronRight aria-hidden="true" className="size-3.5 text-slate-500" />}
            {crumb.href ? (
              <Link href={crumb.href} className="transition-colors hover:text-white">
                {crumb.label}
              </Link>
            ) : (
              <span className={index === crumbs.length - 1 ? 'text-slate-200' : ''}>{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function HighlightCard({ item }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm">
      {item.avatars?.length > 0 && (
        <div className="mb-4 flex -space-x-2">
          {item.avatars.map((src) => (
            <img
              key={src}
              src={src}
              alt=""
              className="size-9 rounded-full object-cover ring-2 ring-navy-deep"
            />
          ))}
        </div>
      )}
      {item.metric !== undefined && (
        <p className="font-display text-3xl font-bold tracking-tight text-white">
          {item.metric}
          {item.metricSuffix ?? (typeof item.metric === 'number' ? '+' : '')}
        </p>
      )}
      {item.subtitle && <p className="mt-1 text-sm text-slate-400">{item.subtitle}</p>}
      <div className="mt-auto pt-5">
        <div className="border-t border-white/10 pt-4">
          <p className="font-display text-sm font-semibold text-white">{item.title}</p>
          {item.description && (
            <p className="mt-1.5 text-[13px] leading-relaxed text-slate-400">{item.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}

/** Top section of every inner page: breadcrumb, headline, intro, actions and optional highlight cards. */
export default function PageHero({
  badge,
  headline,
  subhead,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  highlightCards,
}) {
  return (
    <header className="relative isolate overflow-hidden bg-navy-deep text-white">
      {backgroundImage && (
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <img
            src={backgroundImage}
            alt=""
            className="absolute inset-y-0 right-0 h-full w-full object-cover opacity-25 [mask-image:linear-gradient(to_right,transparent_0%,black_60%)] lg:w-[65%] lg:opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep from-35% via-navy-deep/70 to-navy-deep/20" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-navy-deep to-transparent" />
        </div>
      )}

      <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-12 lg:px-8">
        <Breadcrumb />
        <div className="mt-10 max-w-3xl sm:mt-14">
          {badge && (
            <FadeUp>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[13px] font-medium text-slate-200">
                <span className="size-1.5 rounded-full bg-brand" />
                {badge}
              </p>
            </FadeUp>
          )}
          <FadeUp delay={0.05}>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl">
              {headline}
            </h1>
          </FadeUp>
          {subhead && (
            <FadeUp delay={0.1}>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">{subhead}</p>
            </FadeUp>
          )}
          {primaryCTA && (
            <FadeUp delay={0.15} className="mt-9 flex flex-wrap gap-3">
              <Button href={primaryCTA.to} size="lg" arrow>
                {primaryCTA.label}
              </Button>
              {secondaryCTA && (
                <Button href={secondaryCTA.to} size="lg" variant="outline-light">
                  {secondaryCTA.label}
                </Button>
              )}
            </FadeUp>
          )}
        </div>

        {highlightCards?.length > 0 && (
          <FadeUp
            delay={0.2}
            className={`mt-14 grid gap-4 sm:gap-5 ${highlightCards.length >= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}
          >
            {highlightCards.map((item) => (
              <HighlightCard key={item.title} item={item} />
            ))}
          </FadeUp>
        )}
      </div>
    </header>
  );
}
