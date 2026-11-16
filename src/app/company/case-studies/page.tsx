import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import { caseStudies } from '@/content/records';
import { alumniCompanies } from '@/content/home';
import { programs } from '@/content/programs';
import { stats } from '@/content/site';
import { PageHero } from '@/components/ui/PageHero';
import { Container, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { CountUp, Figure } from '@/components/motion/primitives';
import { ButtonLink } from '@/components/ui/Button';
import { EnquiryButton } from '@/components/enquiry/EnquiryProvider';
import { ClosingCta } from '@/components/home/ClosingCta';
import { LogoMarquee } from '@/components/home/LogoMarquee';
import { ALUMNI_HEIGHT } from '@/components/home/Clientele';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'How ARA Solutions has delivered IT staffing, RPO, international consulting and talent advisory engagements, and where the professionals it trains now work.',
  alternates: { canonical: '/company/case-studies/' },
};

// Logo heights shared with the home page's logo bands.

/** Training outcomes: real figures only (from ARA's original website and the program list). */
const TRAINING_FIGURES = [
  ...stats.filter((stat) => /placed|years/i.test(stat.label)),
  { value: programs.length, suffix: '', label: 'Career-focused training programs' },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title={
          <>
            Proven delivery outcomes. <em>Careers launched.</em>
          </>
        }
        intro="How we have staffed engineering teams, run end-to-end recruitment, supported market entry and built leadership pipelines, and where the professionals we train now work."
      >
        <div className="flex flex-wrap gap-3">
          <EnquiryButton size="lg" arrow interest="hiring">
            Discuss your project
          </EnquiryButton>
          <ButtonLink href="#training-outcomes" variant="ghost-light" size="lg">
            Training outcomes
          </ButtonLink>
        </div>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="For businesses: hiring case studies"
            title={
              <>
                Engagements we have <em>delivered</em>
              </>
            }
          />
        </Container>
        <Container className="mt-12 space-y-6">
          {caseStudies.map((study, index) => (
            <Reveal key={study.id}>
              <article className="overflow-hidden rounded-3xl border border-line bg-paper shadow-soft">
                <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
                  <div>
                    <p className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.18em] text-brand">
                      <span className="text-faint">{String(index + 1).padStart(2, '0')}</span>
                      {study.tag}
                    </p>
                    <h2 className="mt-4 text-balance text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                      {study.title}
                    </h2>
                    <p className="mt-3 text-lg leading-relaxed text-muted">{study.description}</p>
                    <dl className="mt-8 grid grid-cols-3 gap-3">
                      {study.metrics.map((metric) => (
                        <div key={metric.label} className="rounded-2xl bg-canvas p-4">
                          <dd className="text-2xl font-semibold tracking-tight sm:text-3xl">
                            <Figure value={metric.value} />
                          </dd>
                          <dt className="mt-1 text-[13px] leading-snug text-muted">{metric.label}</dt>
                        </div>
                      ))}
                    </dl>
                  </div>
                  <div className="space-y-5 text-[15px] leading-relaxed">
                    {[
                      ['Client', study.clientOverview],
                      ['Challenge', study.challenge],
                      ['Solution', study.solution],
                    ].map(([label, text]) => (
                      <div key={label}>
                        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                          {label}
                        </p>
                        <p className="mt-1.5 text-text/85">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t border-line bg-canvas/60 px-7 py-6 sm:px-10">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">Key outcomes</p>
                  <ul className="mt-3 grid gap-2.5 md:grid-cols-3">
                    {study.keyOutcomes.map((outcome) => (
                      <li key={outcome} className="flex gap-2.5 text-[15px]">
                        <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-brand" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* Training outcomes */}
      <section
        id="training-outcomes"
        className="overflow-hidden border-t border-line bg-paper/70 py-20 sm:py-28"
      >
        <Container>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="For professionals: training outcomes"
              title={
                <>
                  Careers built <em>with ARA</em>
                </>
              }
              intro="Our Training & Placement programs prepare professionals for the roles companies hire for, with real projects, interview preparation and placement assistance."
            />
            <ButtonLink href="/training-placement/" arrow className="shrink-0 self-start lg:self-auto">
              Explore training programs
            </ButtonLink>
          </div>
          <dl className="mt-12 grid gap-4 sm:grid-cols-3">
            {TRAINING_FIGURES.map((figure, index) => (
              <Reveal key={figure.label} delay={index * 0.06}>
                <div className="rounded-3xl bg-ink p-7 text-white">
                  <dd className="text-5xl font-semibold tracking-[-0.04em]">
                    <CountUp value={figure.value} suffix={figure.suffix} />
                  </dd>
                  <dt className="mt-6 text-white/60">{figure.label}</dt>
                </div>
              </Reveal>
            ))}
          </dl>
        </Container>
        <Container className="mt-14">
          <p className="flex items-center gap-4 font-mono text-[12px] uppercase tracking-[0.2em] text-muted">
            <span aria-hidden className="h-px flex-1 bg-text/15" />
            Where the professionals we trained now work
            <span aria-hidden className="h-px flex-1 bg-text/15" />
          </p>
          <div className="mt-8">
            <LogoMarquee
              label="Companies where professionals trained by ARA work"
              duration={60}
              items={alumniCompanies.map((company) => ({
                id: company.logo,
                name: company.name,
                src: `/logos/alumni/${company.logo}.svg`,
                height: ALUMNI_HEIGHT[company.size],
              }))}
            />
          </div>
        </Container>
      </section>

      <ClosingCta
        title="Hiring, or building your career?"
        intro="Tell us what you need. We'd be glad to share how we've handled similar requirements, or which program fits your goals."
      />
    </>
  );
}
