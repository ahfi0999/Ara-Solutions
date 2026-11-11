'use client';

import CardGrid from '../../components/sections/CardGrid';
import CtaBand from '../../components/sections/CtaBand';
import PageHero from '../../components/sections/PageHero';
import { images } from '../../data/images';
import C2cAdvantages from '../../sections/corp-to-corp/C2cAdvantages';

const CorpToCorpPage = () => (
  <div className="bg-[#FFFFFF]">
    <PageHero
      variant="page"
      badge="Agile Project Staffing Model"
      headline="Corp-to-Corp (C2C) Staffing"
      subhead="Flexible consultant engagement. Niche technical skills deployed on demand. Built for enterprise project velocity without overhead."
      backgroundImage={images.c2cHero}
      techVariant="hud-radar"
      primaryCTA={{
        label: 'Request C2C Talent',
        to: '/contact',
      }}
      secondaryCTA={{
        label: 'View Rate Cards',
        to: '/contact',
      }}
      highlightCards={[
        {
          title: 'Deployment Speed',
          metric: '48-72',
          metricSuffix: ' hrs',
          subtitle: 'Rapid Contractor Matching',
          description: 'Immediate access to pre-cleared, active contract engineers across niche tech stacks.',
        },
        {
          title: 'Statutory Compliance',
          metric: '100%',
          subtitle: 'Zero Legal Ambiguity',
          description: 'Clean vendor-to-vendor master service agreements (MSAs) and verified W9/GST papers.',
        },
        {
          title: 'Variable Term Scalability',
          metric: '3-18',
          metricSuffix: ' mos',
          subtitle: 'Flexible Engagements',
          description: 'Scale engineering pods up or down smoothly as project milestones conclude.',
        },
      ]}
    />
    <CardGrid
      kicker="Workforce Architecture"
      headline="The C2C Model at a Glance"
      isLight={true}
      columns={4}
      cards={[
        {
          icon: 'search',
          badgeColor: 'navy',
          title: 'Search Approach',
          description:
            'Fast, targeted sourcing for specific skill requirements, niche tech stacks, and aggressive project timelines.',
          kicker: 'Dimension 01',
        },
        {
          icon: 'file-check',
          badgeColor: 'red',
          title: 'Core Support',
          description:
            'Vendor coordination, thorough rate negotiations, onboarding logistics, and strict statutory compliance.',
          kicker: 'Dimension 02',
        },
        {
          icon: 'briefcase',
          badgeColor: 'navy',
          title: 'Best Suited For',
          description:
            'Projects with fixed scopes, specialized skill gaps, sudden workload surges, or variable workforce needs.',
          kicker: 'Dimension 03',
        },
        {
          icon: 'trending',
          badgeColor: 'red',
          title: 'Business Value',
          description:
            'Access high-caliber expertise immediately without the long-term overhead or commitments of a permanent hire.',
          kicker: 'Dimension 04',
        },
      ]}
    />
    <C2cAdvantages />
    <CtaBand
      headline={
        <>
          Need a longer-term hire instead?{' '}
          <span className="block mt-1 sm:mt-2 text-[#E71E28]">Compare with Fulltime Staffing.</span>
        </>
      }
      body="If your requirement is permanent, our Fulltime Staffing service offers end-to-end recruitment with retention support."
      cta={{
        label: 'Explore Fulltime Staffing',
        to: '/services/fulltime-staffing',
      }}
    />
  </div>
);

export default CorpToCorpPage;
