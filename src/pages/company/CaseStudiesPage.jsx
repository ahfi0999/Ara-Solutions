import CardGrid from '../../components/sections/CardGrid';
import CtaBand from '../../components/sections/CtaBand';
import PageHero from '../../components/sections/PageHero';
import { images } from '../../data/images';
import CaseStudiesIntro from '../../sections/case-studies/CaseStudiesIntro';
import CaseStudyList from '../../sections/case-studies/CaseStudyList';

const CaseStudiesPage = () => (
  <div className="bg-[#FFFFFF]">
    <PageHero
      variant="page"
      badge="Enterprise Client Proof & Delivery Case Studies"
      headline="Proven Delivery Outcomes. Real Business Stakes."
      subhead="Exploring how ARA Solutions architects C2C pods, executes rapid technical placements, and powers offshore GCC delivery centers across high-stakes enterprise projects."
      backgroundImage={images.caseStudiesHero}
      techVariant="dot-mesh"
      primaryCTA={{
        label: 'Request Case References',
        to: '/contact',
      }}
      secondaryCTA={{
        label: 'Discuss Your Project',
        to: '/contact',
      }}
      highlightCards={[
        {
          title: 'Demonstrated Velocity',
          metric: 14,
          metricSuffix: ' Days',
          subtitle: 'Sprint Deployment Speed',
          description: 'Staffed 4 niche ServiceNow technical architects for a tier-1 fintech in London.',
        },
        {
          title: 'Verified Cost Optimization',
          metric: 42,
          metricSuffix: '%',
          subtitle: 'Direct Cost Savings',
          description: 'Offshore engineering pod ramp for FinFlow Labs in Hyderabad with zero turnover.',
        },
        {
          title: 'Total Placements Delivered',
          metric: 1000,
          metricSuffix: '+',
          subtitle: 'Verified Engineering Hires',
          description: 'Across cloud, cybersecurity, data systems, and enterprise business applications.',
        },
      ]}
    />
    <CaseStudiesIntro />
    <div id="case-studies-content">
      <CardGrid
        headline="Every Case Study Will Cover"
        columns={4}
        cards={[
          {
            icon: 'building',
            badgeColor: 'navy',
            title: 'Client & Industry',
            description: 'The organizational context, sector, scale, and specific hiring reality.',
            kicker: 'Dimension 01',
          },
          {
            icon: 'clock',
            badgeColor: 'red',
            title: 'The Challenge',
            description: 'The specific workforce gap, timeline urgency, or specialized skill scarcity.',
            kicker: 'Dimension 02',
          },
          {
            icon: 'briefcase',
            badgeColor: 'navy',
            title: 'Engagement Model Used',
            description: 'Why C2C, fulltime, RPO, or consulting was the exact right operational structure.',
            kicker: 'Dimension 03',
          },
          {
            icon: 'award',
            badgeColor: 'red',
            title: 'The Outcome',
            description:
              'What was delivered, placement velocity, retention metrics, and measurable business impact.',
            kicker: 'Dimension 04',
          },
        ]}
      />
    </div>
    <CaseStudyList />
    <CtaBand
      headline="Have a specific hiring challenge to discuss?"
      body="We'd be glad to share how we've handled similar requirements and walk you through what the right model looks like for you."
      cta={{
        label: 'Talk to Us',
        to: '/contact',
      }}
    />
  </div>
);

export default CaseStudiesPage;
