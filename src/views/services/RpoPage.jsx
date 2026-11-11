'use client';

import CardGrid from '../../components/sections/CardGrid';
import CtaBand from '../../components/sections/CtaBand';
import PageHero from '../../components/sections/PageHero';
import ProcessSteps from '../../components/sections/ProcessSteps';
import { images } from '../../data/images';
import RpoOverview from '../../sections/rpo/RpoOverview';

const RpoPage = () => (
  <div className="bg-[#FFFFFF]">
    <PageHero
      variant="page"
      badge="Scalable Embedded Talent Engine"
      headline="Recruitment Process Outsourcing (RPO)"
      subhead="A dedicated recruitment engine embedded into your workflow. Custom SLAs, rigorous candidate verification, and elastic sourcing for high-growth enterprises."
      backgroundImage={images.rpoHero}
      techVariant="rings"
      primaryCTA={{
        label: 'Request an RPO Consultation',
        to: '/contact',
      }}
      secondaryCTA={{
        label: 'Explore RPO Process',
        to: '/company/approach',
      }}
      highlightCards={[
        {
          title: 'Cost-Per-Hire Reduction',
          metric: '35-45',
          metricSuffix: '%',
          subtitle: 'Average Cost Savings',
          description: 'Significant reduction in agency fees through unified dedicated recruitment pods.',
        },
        {
          title: 'Hiring Throughput Capacity',
          metric: '50-200',
          metricSuffix: '+',
          subtitle: 'Annualized Role Volume',
          description: 'Scalable sourcing infrastructure engineered to flex with product launch cycles.',
        },
        {
          title: 'Rigorous SLA Tracking',
          metric: '99.2%',
          subtitle: 'SLA Fulfillment Rate',
          description:
            'Strict metrics across time-to-fill, interview feedback turnarounds, and offer closures.',
        },
      ]}
    />
    <RpoOverview />
    <CardGrid
      kicker="Workforce Architecture"
      headline="Why Partner on RPO"
      isLight={false}
      columns={3}
      cards={[
        {
          icon: 'trending',
          badgeColor: 'navy',
          title: 'Scalable Capacity',
          description:
            'Ramp recruitment capacity up or down to match business seasonality and hiring surges without adding permanent internal payroll overhead.',
          kicker: 'Advantage 01',
        },
        {
          icon: 'shield',
          badgeColor: 'red',
          title: 'Consistent Candidate Experience',
          description:
            'A structured, responsive hiring process that protects and elevates your employer brand with every applicant.',
          kicker: 'Advantage 02',
        },
        {
          icon: 'users',
          badgeColor: 'navy',
          title: 'An Extension, Not a Replacement',
          description:
            'We work seamlessly alongside your internal talent leaders, hiring managers, and HR business partners — not in competition with them.',
          kicker: 'Advantage 03',
        },
      ]}
    />
    <ProcessSteps
      kicker="EXECUTION RIGOR"
      headline="The 5-Stage RPO Delivery Framework"
      subhead="A structured, outcome-driven approach to help you hire faster, smarter, and at scale."
      steps={[
        {
          label: 'Plan',
          description:
            'Define hiring volume, role competencies, SLAs, calibration metrics, and target timelines.',
        },
        {
          label: 'Source',
          description:
            'Deploy dedicated sourcing channels across active and passive talent pools in target markets.',
        },
        {
          label: 'Screen',
          description:
            'Conduct structured behavioral screens, technical pre-evaluations, and preliminary compensation checks.',
        },
        {
          label: 'Coordinate',
          description:
            'Facilitate panel schedules, candidate status communication, and tight post-interview feedback loops.',
        },
        {
          label: 'Support',
          description:
            'Offer extension facilitation, pre-joining touchpoints, credential verification, and joining day assurance.',
        },
      ]}
      tags={[
        'Dedicated recruiters',
        'SLA-driven timelines',
        'Candidate experience focus',
        'Transparent pipeline reporting',
      ]}
    />
    <CtaBand
      headline="Explore RPO for Your Team"
      body="Whether you need recruitment support for a specific business unit, a hiring surge, or your entire organization, let's talk about what the right model looks like."
      cta={{
        label: 'Discuss RPO Scope',
        to: '/contact',
      }}
    />
  </div>
);

export default RpoPage;
