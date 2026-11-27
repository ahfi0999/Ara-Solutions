import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, GraduationCap } from 'lucide-react';
import { hiringFaqs, trainingFaqs } from '@/content/home';
import { Hero } from '@/components/home/Hero';
import { Divisions } from '@/components/home/Divisions';
import { Clientele } from '@/components/home/Clientele';
import { ServicesOverview } from '@/components/home/HomeSections';
import { HiringFlow } from '@/components/home/HiringFlow';
import { WhyAra } from '@/components/home/WhyAra';
import { ProgramShowcase } from '@/components/home/ProgramShowcase';
import { Journey } from '@/components/home/Journey';
import { ProgramFinder } from '@/components/home/ProgramFinder';
import { AudienceBand, ResultsSplit, TrainingPillars } from '@/components/home/AudienceSections';
import { FaqTabs } from '@/components/home/FaqTabs';
import { AudienceSwitch } from '@/components/home/AudienceSwitch';
import { ClosingCta } from '@/components/home/ClosingCta';
import { INLINE_LINK } from '@/lib/internal-links';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [...hiringFaqs, ...trainingFaqs].map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

/** The home page gives staffing and training equal weight: one half for businesses, one for professionals. */
export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Hero />
      <Divisions />
      {/* Proof for both audiences: clients we hire for, and where alumni work. */}
      <Clientele />

      {/* ── For businesses ── */}
      <AudienceBand
        id="for-businesses"
        label="For businesses"
        title="Hire the right people, faster"
        text={
          <>
            Staffing for IT and non-IT roles:{' '}
            <Link href="/services/corp-to-corp/" className={INLINE_LINK}>
              contract
            </Link>
            ,{' '}
            <Link href="/services/fulltime-staffing/" className={INLINE_LINK}>
              permanent
            </Link>
            ,{' '}
            <Link href="/services/rpo/" className={INLINE_LINK}>
              outsourced
            </Link>{' '}
            and{' '}
            <Link href="/services/international-consulting/" className={INLINE_LINK}>
              international
            </Link>
            .
          </>
        }
        href="/services/"
        cta="Explore staffing services"
        icon={Building2}
      />
      <ServicesOverview />
      <HiringFlow />
      <WhyAra />

      {/* ── For professionals ── */}
      <AudienceBand
        id="for-professionals"
        label="For professionals"
        title="Build the career companies hire for"
        text="Six career-focused programs with real projects, interview preparation and placement assistance."
        href="/training-placement/"
        cta="Explore all programs"
        icon={GraduationCap}
      />
      <ProgramShowcase />
      <TrainingPillars />
      <Journey eyebrow="Your journey" id="journey" />
      <ProgramFinder />

      {/* ── Results and questions, for both ── */}
      <ResultsSplit />
      <FaqTabs />
      <ClosingCta />

      <AudienceSwitch />
    </>
  );
}
