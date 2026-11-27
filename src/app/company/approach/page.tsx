import type { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { afterJoining, deliveryStructures, processBenefits, trainingApproach } from '@/content/company';
import { PageHero } from '@/components/ui/PageHero';
import { Container, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { ButtonLink } from '@/components/ui/Button';
import { ClosingCta } from '@/components/home/ClosingCta';
import { HiringFlow } from '@/components/home/HiringFlow';
import { Journey } from '@/components/home/Journey';

export const metadata: Metadata = {
  title: 'Our Approach',
  description:
    'How ARA Solutions hires and how it trains: a two-channel recruitment process with support beyond joining, and a hands-on path from first class to placement.',
  alternates: { canonical: '/company/approach/' },
};

export default function ApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="Our approach"
        title={
          <>
            One standard for every hire <em>and every learner.</em>
          </>
        }
        intro="A disciplined, transparent process for companies hiring with us, and a hands-on path from first class to placement for individuals training with us."
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="#how-we-hire" size="lg" arrow>
            How we hire
          </ButtonLink>
          <ButtonLink href="#how-we-train" variant="ghost-light" size="lg">
            How we train
          </ButtonLink>
        </div>
      </PageHero>

      {/* For businesses */}
      <HiringFlow eyebrow="For businesses: how we hire" approachLink={false} />

      <section className="border-y border-line bg-paper/70 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Beyond placement"
            title={
              <>
                Our commitment doesn’t end <em>at joining</em>
              </>
            }
            intro="Beyond recruitment, beyond placement: building partnerships that last."
          />
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {afterJoining.map((step, index) => (
              <Reveal as="li" key={step.title} delay={index * 0.07} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-line bg-paper p-6 shadow-soft">
                  <span className="flex size-9 items-center justify-center rounded-full bg-ink font-mono text-[12px] font-semibold text-white">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold leading-tight tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{step.text}</p>
                </div>
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

      {/* For individuals */}
      <div className="border-t border-line">
        <Journey id="how-we-train" eyebrow="For individuals: how we train">
          <p className="mt-6 text-lg leading-relaxed text-muted">{trainingApproach.paragraphs[0]}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {trainingApproach.points.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 rounded-full border border-line bg-paper px-3.5 py-1.5 text-[14px]"
              >
                <Check aria-hidden className="size-4 text-brand" /> {point}
              </li>
            ))}
          </ul>
          <Link
            href="/training-placement/"
            className="mt-6 inline-block text-[15px] font-medium text-brand underline-offset-4 hover:underline"
          >
            Explore all training programs →
          </Link>
        </Journey>
      </div>

      <ClosingCta
        title="Hiring, or building your career?"
        intro="Tell us what you need. Our team will call you back with the right next step."
      />
    </>
  );
}
