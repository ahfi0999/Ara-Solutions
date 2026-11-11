'use client';

import CardGrid from '../../components/sections/CardGrid';
import CtaBand from '../../components/sections/CtaBand';
import PageHero from '../../components/sections/PageHero';
import { images } from '../../data/images';
import ThreeStepMethod from '../../sections/approach/ThreeStepMethod';
import WhyProcessMatters from '../../sections/approach/WhyProcessMatters';

const ApproachPage = () => (
  <div className="bg-[#FFFFFF]">
    <PageHero
      variant="page"
      badge="Disciplined Delivery Methodology"
      headline="A Disciplined Process. Flexible Engagement. Real Accountability."
      subhead="Eliminating hiring volatility with end-to-end transparency, active candidate consultation, and milestone-backed technical screening across high-velocity teams."
      backgroundImage={images.approachHero}
      techVariant="wave-lines"
      primaryCTA={{
        label: 'Discuss Your Requirement',
        to: '/contact',
      }}
      secondaryCTA={{
        label: 'View Case Studies',
        to: '/company/case-studies',
      }}
      highlightCards={[
        {
          title: 'Structured 3-Stage Lifecycle',
          metric: '100%',
          subtitle: 'Methodology Adherence',
          description: 'Discover, Deliver, and Support phases strictly calibrated to role SLAs.',
        },
        {
          title: 'Pre-Offer Qualification',
          metric: 14,
          metricSuffix: ' Days',
          subtitle: 'Average Time-to-Submit',
          description: 'Fast, pre-screened shortlists vetted by domain-specific senior recruiters.',
        },
        {
          title: 'Direct Recruiter Accountability',
          metric: '24/7',
          subtitle: 'Dedicated Point of Contact',
          description: 'Recruiters who pick up phone calls and maintain weekly calibration touchpoints.',
        },
      ]}
    />
    <WhyProcessMatters />
    <ThreeStepMethod />
    <CardGrid
      headline="Delivery Structures"
      cards={[
        {
          icon: 'building',
          badgeColor: 'navy',
          title: 'Onsite Delivery',
          description:
            'Recruitment and staffing support integrated directly with your team, local facilities, and operational location.',
          kicker: 'Structure 01',
        },
        {
          icon: 'globe',
          badgeColor: 'red',
          title: 'Hybrid / Nearshore',
          description:
            'A strategic combination of local coordination and remote talent sourcing for maximum cost and geographic reach efficiency.',
          kicker: 'Structure 02',
        },
        {
          icon: 'users',
          badgeColor: 'navy',
          title: 'Dedicated Development Team',
          description:
            'Curated technical teams assembled for specific project scopes, platforms, and critical technology milestones.',
          kicker: 'Structure 03',
        },
      ]}
    />
    <CtaBand
      headline="Put this process to work on your next hire."
      headlineClassName="lg:whitespace-nowrap"
      body="Whether you need a single specialist or a full recruitment pipeline, let's start with a discovery conversation."
      cta={{
        label: 'Start a Conversation',
        to: '/contact',
      }}
    />
  </div>
);

export default ApproachPage;
