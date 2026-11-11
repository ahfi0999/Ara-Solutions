'use client';

import CardGrid from '../../components/sections/CardGrid';
import CareerPaths from '../../components/sections/CareerPaths';
import CtaBand from '../../components/sections/CtaBand';
import MarketContext from '../../components/sections/MarketContext';
import PageHero from '../../components/sections/PageHero';
import { images } from '../../data/images';

const CyberSecurityPage = () => (
  <div className="bg-[#FFFFFF]">
    <PageHero
      variant="page"
      badge="Critical Infrastructure Defense"
      headline="Cyber Security"
      subhead="Security fundamentals and role readiness for one of the hardest categories to hire in India right now."
      backgroundImage={images.cybersecurityHero}
      techVariant="hud-radar"
      primaryCTA={{
        label: 'Contact Us',
        to: '/contact',
      }}
      secondaryCTA={{
        label: 'Explore All Tracks',
        to: '/training-placement',
      }}
      highlightCards={[
        {
          title: 'Hiring Demand',
          metric: '1M',
          metricSuffix: ' Roles',
          subtitle: 'India Market Deficit',
          description:
            'Demand is approaching a million roles while qualified talent sits at a small fraction.',
        },
        {
          title: 'Hiring Cycle',
          metric: '90+',
          metricSuffix: ' Days',
          subtitle: 'Average Time to Fill',
          description: 'Companies actively expanding budgets for role-ready security specialists.',
        },
        {
          title: 'High-Paying Niches',
          metric: '5',
          metricSuffix: '',
          subtitle: 'Core Focus Areas',
          description: 'Cloud security, identity and access management, and threat intelligence baselines.',
        },
      ]}
    />
    <MarketContext
      kicker="Market Context"
      headlinePrefix="Why It "
      headlineHighlight="Matters Now"
      paragraphs={[
        'India’s demand for cybersecurity professionals is approaching a million roles, while the qualified talent pool available to fill them sits at a fraction of that — and the gap is widest in exactly the specialized areas (cloud security, identity and access management, threat intelligence) that pay the most.',
        'Security roles already carry some of the longest hiring cycles in the tech sector, often stretching past 90 days, and the large majority of Indian companies are actively increasing security budgets rather than cutting them.',
      ]}
      metrics={[
        {
          icon: 'chart',
          color: 'red',
          title: 'Rising Demand',
          subtitle: '~1 million cybersecurity roles in India',
        },
        {
          icon: 'users',
          color: 'blue',
          title: 'Talent Shortage',
          subtitle: 'Qualified professionals are only a fraction of the demand.',
        },
        {
          icon: 'shield',
          color: 'red',
          title: 'Higher Investment',
          subtitle: 'Most Indian companies are increasing security budgets.',
        },
      ]}
      footerAnnotation="PEOPLE . PLATFORMS . PROGRESS"
      image={images.cyberDatacenter}
      imageAlt="Cybersecurity engineer inspecting server operations in high-tech datacenter"
    />
    <CardGrid
      kicker="Curriculum Breakdown"
      headline="What You'll Cover"
      isLight={false}
      columns={3}
      cards={[
        {
          icon: 'shield',
          badgeColor: 'navy',
          title: 'Security Fundamentals',
          description: 'Core concepts, threat landscape, and attacker methodology.',
          kicker: 'Module 01',
        },
        {
          icon: 'globe',
          badgeColor: 'red',
          title: 'Network & Cloud Security',
          description: 'Securing modern infrastructure across on-prem and cloud environments.',
          kicker: 'Module 02',
        },
        {
          icon: 'file-check',
          badgeColor: 'navy',
          title: 'Identity & Access Management',
          description: 'One of the most consistently hard-to-fill specializations employers report.',
          kicker: 'Module 03',
        },
        {
          icon: 'clock',
          badgeColor: 'red',
          title: 'Incident Response & Monitoring',
          description: 'Detection, response workflows, and monitoring tools.',
          kicker: 'Module 04',
        },
        {
          icon: 'check-circle',
          badgeColor: 'navy',
          title: 'Interview & Certification Readiness',
          description: 'Structured prep for entry-level security certifications and technical interviews.',
          kicker: 'Module 05',
        },
      ]}
    />
    <CareerPaths
      kicker="KEY ROLES"
      headlinePrefix="Where "
      headlineHighlight="This Leads"
      subhead="Explore some of the key roles that open up through this track and become part of a stronger, future-ready security ecosystem."
      roles={[
        {
          title: 'SOC Analyst',
          description: 'Monitor, detect and respond to security threats.',
          image: images.cyberRoles.socAnalyst,
          icon: 'shield',
          badgeColor: 'red',
          cornerAccent: 'pink',
        },
        {
          title: 'Security Engineer',
          description: 'Build and strengthen secure infrastructure.',
          image: images.cyberRoles.securityEngineer,
          icon: 'gear',
          badgeColor: 'blue',
          cornerAccent: 'blue',
        },
        {
          title: 'Identity & Access Management Specialist',
          description: 'Manage and secure digital identities.',
          image: images.cyberRoles.iamSpecialist,
          icon: 'users',
          badgeColor: 'red',
          cornerAccent: 'pink',
        },
        {
          title: 'GRC Analyst',
          description: 'Ensure compliance, risk management and governance.',
          image: images.cyberRoles.grcAnalyst,
          icon: 'file-search',
          badgeColor: 'blue',
          cornerAccent: 'blue',
        },
        {
          title: 'Cloud Security Analyst',
          description: 'Protect cloud environments and enable secure innovation.',
          image: images.cyberRoles.cloudSecurity,
          icon: 'cloud',
          badgeColor: 'red',
          cornerAccent: 'pink',
        },
      ]}
    />
    <CtaBand
      headline="Ready to start cybersecurity training?"
      body="Connect with our recruitment and training mentors to explore curriculum details and immediate placement pathways."
      cta={{
        label: 'Contact Us',
        to: '/contact',
      }}
    />
  </div>
);

export default CyberSecurityPage;
