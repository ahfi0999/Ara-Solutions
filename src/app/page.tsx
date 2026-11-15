import type { Metadata } from 'next';
import { generalFaqs } from '@/content/home';
import { Hero } from '@/components/home/Hero';
import { Divisions } from '@/components/home/Divisions';
import { CaseStudyPreview, ServicesOverview } from '@/components/home/HomeSections';
import { ApproachScroll } from '@/components/home/ApproachScroll';
import { ProgramShowcase } from '@/components/home/ProgramShowcase';
import { AlumniMarquee } from '@/components/home/AlumniMarquee';
import { WhyAra } from '@/components/home/WhyAra';
import { Faq } from '@/components/home/Faq';
import { ClosingCta } from '@/components/home/ClosingCta';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: generalFaqs.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Hero />
      <Divisions />
      <ServicesOverview />
      <ProgramShowcase />
      <AlumniMarquee className="border-t border-line" />
      <WhyAra />
      <ApproachScroll />
      <CaseStudyPreview />
      <Faq items={generalFaqs} />
      <ClosingCta />
    </>
  );
}
