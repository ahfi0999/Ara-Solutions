import Link from 'next/link';
import { ArrowUpRight, Check, ChevronRight } from 'lucide-react';
import { engagementComparison, roleCoverage, services, type Service } from '@/content/services';
import { cn } from '@/lib/cn';
import { Container, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Spotlight } from '@/components/motion/primitives';
import { EnquiryButton } from '@/components/enquiry/EnquiryProvider';
import { ButtonLink } from '@/components/ui/Button';

export function ServiceHero({ service }: { service: Service }) {
  return (
    <section className="aurora relative isolate overflow-hidden pb-20 pt-28 text-white sm:pb-24 sm:pt-36">
      <div aria-hidden className="grid-lines absolute inset-0 -z-10" />
      <Container>
        <nav aria-label="Breadcrumb" className="fade-up">
          <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-white/50">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <ChevronRight aria-hidden className="size-3.5" />
            <li>Services</li>
            <ChevronRight aria-hidden className="size-3.5" />
            <li aria-current="page" className="text-white/80">
              {service.shortName}
            </li>
          </ol>
        </nav>

        <div className="mt-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] [&>*]:min-w-0">
          <div>
            <p className="fade-up inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider text-white/75 [animation-delay:60ms]">
              <span className="size-1.5 rounded-full bg-brand" />
              {service.badge}
            </p>
            <h1 className="fade-up mt-6 text-balance text-4xl font-semibold leading-[1.04] tracking-[-0.04em] [animation-delay:120ms] sm:text-6xl">
              {service.headline}
            </h1>
            <p className="fade-up mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/65 [animation-delay:180ms]">
              {service.summary}
            </p>
            <div className="fade-up mt-9 flex flex-wrap gap-3 [animation-delay:240ms]">
              <EnquiryButton
                size="lg"
                arrow
                interest={service.slug}
                title={`${service.cta[0].toUpperCase()}${service.cta.slice(1)}`}
              >
                {`${service.cta[0].toUpperCase()}${service.cta.slice(1)}`}
              </EnquiryButton>
              <ButtonLink href="/contact/" variant="ghost-light" size="lg">
                Talk to our team
              </ButtonLink>
            </div>
          </div>

          <ul className="space-y-3">
            {service.promises.map((promise, index) => (
              <li
                key={promise.title}
                style={{ animationDelay: `${250 + index * 120}ms` }}
                className="fade-up flex gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.07]"
              >
                <span className="font-mono text-sm text-brand-300">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <p className="text-[17px] font-medium tracking-tight">{promise.title}</p>
                  <p className="mt-1 text-[14.5px] leading-relaxed text-white/60">{promise.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export function ServiceStory({ service }: { service: Service }) {
  const { story } = service;
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <SectionHeading eyebrow={story.eyebrow} title={story.title} />
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
            {story.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>
        <ul className="grid content-center gap-3">
          {story.points.map((point, index) => (
            <Reveal key={point.title} delay={index * 0.06}>
              <li className="flex items-center gap-4 rounded-2xl border border-line bg-paper p-5 shadow-soft">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand/[0.08] text-brand">
                  <Check aria-hidden className="size-5" />
                </span>
                <span>
                  <span className="block font-semibold tracking-tight">{point.title}</span>
                  <span className="block text-[15px] text-muted">{point.text}</span>
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function ServicePillars({ service }: { service: Service }) {
  const { pillars } = service;
  const count = pillars.items.length;
  return (
    <section className="border-y border-line bg-paper/70 py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={pillars.eyebrow} title={pillars.title} />
        <div
          className={cn(
            'mt-12 grid gap-4',
            count === 4
              ? 'sm:grid-cols-2 lg:grid-cols-4'
              : count === 6
                ? 'sm:grid-cols-2 lg:grid-cols-3'
                : 'md:grid-cols-3',
          )}
        >
          {pillars.items.map((item, index) => (
            <Reveal key={item.title} delay={(index % 3) * 0.06} className="h-full">
              <div className="h-full rounded-2xl border border-line bg-canvas p-6">
                <span className="font-mono text-[12px] text-faint">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ServiceProcess({ service }: { service: Service }) {
  const { process } = service;
  if (!process) return null;
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
      <div aria-hidden className="grid-lines absolute inset-0" />
      <Container className="relative">
        <SectionHeading tone="dark" eyebrow={process.eyebrow} title={process.title} intro={process.intro} />
        <ol
          className={cn('mt-12 grid gap-4', process.steps.length === 5 ? 'md:grid-cols-5' : 'md:grid-cols-4')}
        >
          {process.steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.06} className="h-full">
              <li className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <span className="font-mono text-sm text-brand-300">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/60">{step.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
        {process.tags && (
          <ul className="mt-8 flex flex-wrap gap-2">
            {process.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-white/10 px-3.5 py-1.5 text-[13px] text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}

/** IT and non-IT roles covered (Fulltime Staffing). */
export function RoleCoverage() {
  const columns = [
    { title: 'IT roles', text: 'Powering innovation with technical excellence.', roles: roleCoverage.it },
    {
      title: 'Non-IT roles',
      text: 'Driving growth through people and operations.',
      roles: roleCoverage.nonIt,
    },
  ];
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Talent coverage"
          title="Domain coverage across roles"
          intro="End-to-end hiring support across technical and business functions."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {columns.map((column) => (
            <div
              key={column.title}
              className="rounded-3xl border border-line bg-paper p-7 shadow-soft sm:p-8"
            >
              <h3 className="text-2xl font-semibold tracking-tight">{column.title}</h3>
              <p className="mt-1 text-muted">{column.text}</p>
              <ul className="mt-6 divide-y divide-line">
                {column.roles.map((role) => (
                  <li key={role} className="flex items-center gap-3 py-3.5 text-[15px]">
                    <Check aria-hidden className="size-4 shrink-0 text-brand" />
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/** Contract vs permanent hiring comparison. */
export function EngagementComparison({ highlight }: { highlight: string }) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Engagement comparison"
          title="Contract or permanent?"
          intro="Choose the talent structure that fits your roadmap and budget."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {engagementComparison.map((model) => {
            const active = model.href.includes(highlight);
            return (
              <div
                key={model.name}
                className={cn(
                  'flex flex-col rounded-3xl p-7 sm:p-8',
                  active ? 'bg-ink text-white shadow-lift' : 'border border-line bg-paper',
                )}
              >
                <h3 className="text-2xl font-semibold tracking-tight">{model.name}</h3>
                <p className={cn('mt-1', active ? 'text-white/60' : 'text-muted')}>{model.tagline}</p>
                <ul className="mt-6 space-y-3">
                  {model.points.map((point) => (
                    <li key={point} className="flex gap-3 text-[15px]">
                      <Check
                        aria-hidden
                        className={cn('mt-0.5 size-4 shrink-0', active ? 'text-brand-300' : 'text-brand')}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
                <p
                  className={cn(
                    'mt-auto border-t pt-5 text-sm',
                    active ? 'border-white/10 text-white/60' : 'border-line text-muted',
                  )}
                >
                  Best for: <span className={active ? 'text-white' : 'text-text'}>{model.bestFor}</span>
                </p>
                {!active && (
                  <Link
                    href={model.href}
                    className="mt-4 text-sm font-medium text-navy underline-offset-4 hover:underline"
                  >
                    Learn about {model.name} →
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/** Cards linking to every service except the current one (or all, on the homepage). */
export function ServiceCards({ exclude, dark = false }: { exclude?: string; dark?: boolean }) {
  const list = services.filter((service) => service.slug !== exclude);
  return (
    <div className={cn('grid gap-4', list.length === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3')}>
      {list.map((service, index) => (
        <Reveal key={service.slug} delay={(index % 4) * 0.06} className="h-full">
          <Spotlight className="h-full rounded-2xl" color={dark ? 'rgb(255 255 255 / 0.10)' : 'rgb(229 35 45 / 0.07)'}>
          <Link
            href={`/services/${service.slug}/`}
            className={cn(
              'group flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1',
              dark
                ? 'border border-white/10 bg-white/[0.04] text-white hover:border-white/25'
                : 'border border-line bg-paper shadow-soft hover:shadow-lift',
            )}
          >
            <span className="flex items-start justify-between gap-4">
              <span className="text-lg font-semibold leading-snug tracking-tight">{service.shortName}</span>
              <ArrowUpRight
                aria-hidden
                className={cn(
                  'size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5',
                  dark ? 'text-white/50' : 'text-faint',
                )}
              />
            </span>
            <span className={cn('mt-3 text-[15px] leading-relaxed', dark ? 'text-white/60' : 'text-muted')}>
              {service.summary}
            </span>
          </Link>
          </Spotlight>
        </Reveal>
      ))}
    </div>
  );
}
