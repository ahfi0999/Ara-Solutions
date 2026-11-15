import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import { approachSteps, deliveryStructures, processBenefits } from '@/content/company';
import { PageHero } from '@/components/ui/PageHero';
import { Container, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { ButtonLink } from '@/components/ui/Button';
import { EnquiryButton } from '@/components/enquiry/EnquiryProvider';
import { ClosingCta } from '@/components/home/ClosingCta';

export const metadata: Metadata = {
  title: 'Our Approach',
  description:
    'A disciplined process, flexible engagement and real accountability: how ARA Solutions discovers, delivers and supports every hire.',
  alternates: { canonical: '/company/approach/' },
};

export default function ApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="Our approach"
        title={
          <>
            A disciplined process. Flexible engagement. <em>Real accountability.</em>
          </>
        }
        intro="End-to-end transparency, active candidate consultation and milestone-backed technical screening, so hiring stops being a gamble."
      >
        <div className="flex flex-wrap gap-3">
          <EnquiryButton size="lg" arrow interest="hiring">
            Discuss your requirement
          </EnquiryButton>
          <ButtonLink href="/company/case-studies/" variant="ghost-light" size="lg">
            View case studies
          </ButtonLink>
        </div>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Execution rigour"
            title={
              <>
                Three steps. <em>No shortcuts.</em>
              </>
            }
            intro="A structured approach that ensures the right people, the right process and the right outcomes."
          />
          <ol className="mt-12 grid gap-4 md:grid-cols-3">
            {approachSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.08} className="h-full">
                <li className="relative h-full overflow-hidden rounded-3xl border border-line bg-paper p-8 shadow-soft">
                  <span className="font-mono text-sm text-brand">
                    Step {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-6 text-3xl font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{step.text}</p>
                  <p className="mt-6 inline-flex rounded-full bg-canvas px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted">
                    {step.tag}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
          <ul className="mt-8 flex flex-wrap gap-2">
            {processBenefits.standards.map((standard) => (
              <li
                key={standard}
                className="flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-2 text-sm"
              >
                <Check aria-hidden className="size-4 text-brand" /> {standard}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
        <div aria-hidden className="grid-lines absolute inset-0" />
        <Container className="relative">
          <SectionHeading
            tone="dark"
            eyebrow="Delivery structures"
            title="Built around how your team works"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {deliveryStructures.map((item, index) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                <span className="font-mono text-sm text-brand-300">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-white/60">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="Why it matters"
            title={
              <>
                A bad process costs more <em>than you think</em>
              </>
            }
            intro={processBenefits.intro}
          />
          <ul className="grid content-center gap-3">
            {processBenefits.items.map((item) => (
              <li key={item.title} className="rounded-2xl border border-line bg-paper p-6 shadow-soft">
                <p className="text-lg font-semibold tracking-tight">{item.title}</p>
                <p className="mt-1 text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ClosingCta
        defaultInterest="hiring"
        title="Put this process to work on your next hire."
        intro="Whether you need a single specialist or a full recruitment pipeline, let's start with a discovery conversation."
      />
    </>
  );
}
