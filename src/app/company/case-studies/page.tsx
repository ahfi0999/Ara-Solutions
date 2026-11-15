import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import { caseStudies } from '@/content/records';
import { PageHero } from '@/components/ui/PageHero';
import { Container } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Figure } from '@/components/motion/primitives';
import { EnquiryButton } from '@/components/enquiry/EnquiryProvider';
import { ClosingCta } from '@/components/home/ClosingCta';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'How ARA Solutions has delivered IT staffing, RPO, international consulting and talent advisory engagements for its clients.',
  alternates: { canonical: '/company/case-studies/' },
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title={
          <>
            Proven delivery outcomes. <em>Real business stakes.</em>
          </>
        }
        intro="How we have staffed engineering teams, run end-to-end recruitment, supported market entry and built leadership pipelines."
      >
        <EnquiryButton size="lg" arrow interest="hiring">
          Discuss your project
        </EnquiryButton>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container className="space-y-6">
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

      <ClosingCta
        defaultInterest="hiring"
        title="Have a specific hiring challenge to discuss?"
        intro="We'd be glad to share how we've handled similar requirements and walk you through what the right model looks like for you."
      />
    </>
  );
}
