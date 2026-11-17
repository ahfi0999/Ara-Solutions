import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Building2, GraduationCap } from 'lucide-react';
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

/*
 * TEMPORARY preview of the balanced home page (staffing and training given equal weight).
 * Shown on localhost and the password-protected dev and qa sites only: not linked, not in the
 * sitemap, hidden from search engines. Once approved, this layout replaces the home page and
 * this route is deleted.
 */
export const metadata: Metadata = {
  title: 'Home page preview',
  robots: { index: false, follow: false },
};

// The page is built ahead of time, so this is decided when Amplify builds each branch.
export const dynamic = 'force-static';

export default function PreviewHomePage() {
  // The live site (the main branch) never shows the preview.
  if (process.env.AWS_BRANCH === 'main') notFound();
  return (
    <>
      <Hero />
      <Divisions />
      {/* Proof for both audiences: clients we hire for, and where alumni work. */}
      <Clientele />

      {/* ── For businesses ── */}
      <AudienceBand
        id="for-businesses"
        label="For businesses"
        title="Hire the right people, faster"
        text="Staffing for IT and non-IT roles: contract, permanent, outsourced and international."
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
