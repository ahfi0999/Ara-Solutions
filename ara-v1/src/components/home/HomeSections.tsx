import Link from 'next/link';
import { approachSteps } from '@/content/company';
import { caseStudies } from '@/content/records';
import { Container, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Figure } from '@/components/motion/primitives';
import { ButtonLink } from '@/components/ui/Button';
import { ServiceCards } from '@/components/services/ServiceSections';

/** Staffing services overview. */
export function ServicesOverview() {
  return (
    <section className="border-t border-line bg-paper py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Staffing services"
            title={
              <>
                Hiring models that fit <em>how you work</em>
              </>
            }
            intro="From a single contract specialist to a full recruiting team, choose the engagement that matches your roadmap."
          />
          <Link
            href="/company/approach/"
            className="shrink-0 text-[15px] font-medium underline-offset-4 hover:underline"
          >
            How we work →
          </Link>
        </div>
        <div className="mt-12">
          <ServiceCards />
        </div>
      </Container>
    </section>
  );
}

/** Discover · Deliver · Support. */
export function ApproachPreview() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Our approach"
            title={
              <>
                Three steps. <em>No shortcuts.</em>
              </>
            }
            intro="A structured process that respects your timelines without cutting corners on qualification."
          />
          <ButtonLink href="/company/approach/" variant="ghost-dark" className="mt-8" arrow>
            See our approach
          </ButtonLink>
        </div>
        <ol className="grid gap-4 sm:grid-cols-3">
          {approachSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.08} className="h-full">
              <li className="h-full border-t-2 border-text pt-6">
                <span className="font-mono text-sm text-brand">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{step.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/** Three case studies with headline metrics. */
export function CaseStudyPreview() {
  return (
    <section className="border-t border-line bg-paper py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Case studies"
            title={
              <>
                Proven delivery <em>outcomes</em>
              </>
            }
          />
          <Link
            href="/company/case-studies/"
            className="shrink-0 text-[15px] font-medium underline-offset-4 hover:underline"
          >
            All case studies →
          </Link>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {caseStudies.slice(0, 3).map((study, index) => (
            <Reveal key={study.id} delay={index * 0.06} className="h-full">
              <Link
                href="/company/case-studies/"
                className="flex h-full flex-col rounded-3xl border border-line bg-canvas p-7 transition-shadow hover:shadow-soft"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand">{study.tag}</p>
                <h3 className="mt-4 text-xl font-semibold leading-snug tracking-tight">{study.title}</h3>
                <dl className="mt-auto grid grid-cols-3 gap-2 pt-8">
                  {study.metrics.map((metric) => (
                    <div key={metric.label}>
                      <dd className="text-2xl font-semibold tracking-tight"><Figure value={metric.value} /></dd>
                      <dt className="mt-0.5 text-[12px] leading-snug text-muted">{metric.label}</dt>
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
