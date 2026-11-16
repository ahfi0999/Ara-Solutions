import Link from 'next/link';
import { Briefcase, CloudCog, Code2, Database, HeartPulse, Truck, Users } from 'lucide-react';
import { roleGroups } from '@/content/home';
import { caseStudies } from '@/content/records';
import { Container, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Figure } from '@/components/motion/primitives';
import { ServiceCards } from '@/components/services/ServiceSections';
import { cn } from '@/lib/cn';

/** Staffing services overview. */
export function ServicesOverview() {
  return (
    <section id="services" className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
      <div aria-hidden className="grid-lines absolute inset-0" />
      <Container className="relative">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            tone="dark"
            eyebrow="Staffing services"
            title={
              <>
                Hiring models that fit <em>how you work</em>
              </>
            }
            intro="From a single contract specialist to a full recruiting team, choose the engagement that matches your roadmap."
          />
          <Link
            href="#how-we-hire"
            className="shrink-0 text-[15px] font-medium text-white/80 underline-offset-4 hover:text-white hover:underline"
          >
            How we hire →
          </Link>
        </div>
        <div className="mt-12">
          <ServiceCards dark />
        </div>
        <RoleGroups dark className="mt-16 border-t border-white/10 pt-12" />
      </Container>
    </section>
  );
}

/**
 * "From core roles to niche skills": the IT and non-IT roles ARA recruits for, from the pitch deck.
 * Used on the home page (dark) and on the Staffing services page.
 */
export function RoleGroups({ dark = false, className }: { dark?: boolean; className?: string }) {
  return (
    <div className={className}>
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">From core roles to niche skills</h3>
        <p className={dark ? 'text-white/60' : 'text-muted'}>
          Specialised IT, non-IT and industry recruitment.
        </p>
      </div>
      <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
        {roleGroups.map((side, sideIndex) => (
          <div key={side.title}>
            <p
              className={cn(
                'font-mono text-[12px] uppercase tracking-[0.18em]',
                dark ? 'text-brand-300' : 'text-brand',
              )}
            >
              {side.title}
            </p>
            <ul className={cn('mt-5 divide-y', dark ? 'divide-white/10' : 'divide-line')}>
              {side.groups.map((group, index) => {
                const Icon = ROLE_ICONS[group.name] ?? Briefcase;
                return (
                  <Reveal as="li" key={group.name} delay={sideIndex * 0.08 + index * 0.06} y={16}>
                    <div className="flex gap-4 py-4">
                      <span
                        className={cn(
                          'flex size-10 shrink-0 items-center justify-center rounded-xl',
                          dark ? 'bg-white/[0.07] text-brand-300' : 'bg-brand/[0.08] text-brand',
                        )}
                      >
                        <Icon aria-hidden className="size-5" />
                      </span>
                      <div>
                        <p className="font-semibold">{group.name}</p>
                        <p
                          className={cn(
                            'mt-0.5 text-[15px] leading-relaxed',
                            dark ? 'text-white/60' : 'text-muted',
                          )}
                        >
                          {group.roles}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      <p className={cn('mt-10', dark ? 'text-white/70' : 'text-text/80')}>
        From specialist hires to large-scale teams.
      </p>
    </div>
  );
}

const ROLE_ICONS: Record<string, typeof Briefcase> = {
  'AI & Data': Database,
  'Cloud & Security': CloudCog,
  'Enterprise & Software': Code2,
  'Corporate functions': Users,
  'Healthcare & engineering': HeartPulse,
  'Commerce & operations': Truck,
};

/** Three case studies with headline metrics. */
export function CaseStudyPreview() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
      <div aria-hidden className="grid-lines absolute inset-0" />
      <Container className="relative">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            tone="dark"
            eyebrow="Case studies"
            title={
              <>
                Proven delivery <em>outcomes</em>
              </>
            }
          />
          <Link
            href="/company/case-studies/"
            className="shrink-0 text-[15px] font-medium text-white/80 underline-offset-4 hover:text-white hover:underline"
          >
            All case studies →
          </Link>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {caseStudies.slice(0, 3).map((study, index) => (
            <Reveal key={study.id} delay={index * 0.06} className="h-full">
              <Link
                href="/company/case-studies/"
                className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition-colors hover:border-white/25 hover:bg-white/[0.07]"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-300">
                  {study.tag}
                </p>
                <h3 className="mt-4 text-xl font-semibold leading-snug tracking-tight">{study.title}</h3>
                <dl className="mt-auto grid grid-cols-3 gap-2 pt-8">
                  {study.metrics.map((metric) => (
                    <div key={metric.label}>
                      <dd className="text-2xl font-semibold tracking-tight">
                        <Figure value={metric.value} />
                      </dd>
                      <dt className="mt-0.5 text-[12px] leading-snug text-white/55">{metric.label}</dt>
                    </div>
                  ))}
                </dl>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
