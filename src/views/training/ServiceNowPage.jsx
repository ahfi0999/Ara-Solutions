'use client';

import CardGrid from '../../components/sections/CardGrid';
import CareerPaths from '../../components/sections/CareerPaths';
import CtaBand from '../../components/sections/CtaBand';
import MarketContext from '../../components/sections/MarketContext';
import PageHero from '../../components/sections/PageHero';
import { images } from '../../data/images';

const ServiceNowPage = () => (
  <div className="bg-[#FFFFFF]">
    <PageHero
      variant="page"
      badge="Enterprise Platform Readiness"
      headline="ServiceNow Training & Placement"
      subhead="From platform fundamentals to certified and job-ready — training built around the roles companies are actually hiring for."
      backgroundImage={images.servicenowHero}
      techVariant="circuit"
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
          title: 'Market Demand',
          metric: '100+',
          metricSuffix: ' Roles',
          subtitle: 'Hyderabad Tech Hub',
          description:
            'Regularly active openings across enterprise IT divisions and global consulting partners.',
        },
        {
          title: 'Certification Value',
          metric: 'CSA',
          subtitle: 'Employer Filter',
          description:
            'Certified professionals consistently out-earn uncertified peers by a meaningful margin.',
        },
        {
          title: 'Full Stack Now',
          metric: '5',
          subtitle: 'Core Focus Areas',
          description: 'From platform navigation and ITSM to modern Now Assist generative AI integration.',
        },
      ]}
    />
    <MarketContext
      kicker="Market Context"
      headlinePrefix="Why It "
      headlineHighlight="Matters Now"
      paragraphs={[
        "ServiceNow has grown well past a ticketing tool into the operating layer for IT, HR, security, and customer service at thousands of enterprises, and India has become one of the platform's largest global hiring markets.",
        "Hyderabad alone regularly has well over a hundred open ServiceNow roles at any given time, spanning administrators, developers, and implementation specialisists. Certified professionals consistently out-earn uncertified peers by a meaningful margin — the certification isn't a formality here, it's the actual filter employers use.",
      ]}
      metrics={[
        {
          icon: 'chart',
          color: 'red',
          title: 'High Demand',
          subtitle: 'Hundreds of open roles in India',
        },
        {
          icon: 'users',
          color: 'blue',
          title: 'Better Pay',
          subtitle: 'Certified pros earn significantly more',
        },
        {
          icon: 'globe',
          color: 'red',
          title: 'Global Opportunities',
          subtitle: 'India is a key market for ServiceNow talent',
        },
      ]}
      footerAnnotation="PEOPLE  ·  PLATFORMS  ·  PROGRESS"
      image={images.servicenowDatacenter}
      imageAlt="Enterprise datacenter servers and ServiceNow cloud operations"
    />
    <CardGrid
      kicker="Curriculum Breakdown"
      headline="What You'll Cover"
      isLight={false}
      columns={3}
      cards={[
        {
          icon: 'file-check',
          badgeColor: 'navy',
          title: 'Platform Fundamentals',
          description: 'Now Platform navigation, UI, and core admin concepts.',
          kicker: 'Module 01',
        },
        {
          icon: 'briefcase',
          badgeColor: 'red',
          title: 'ITSM Modules',
          description: 'Incident, Problem, Change, Request, and Knowledge management.',
          kicker: 'Module 02',
        },
        {
          icon: 'trending',
          badgeColor: 'navy',
          title: 'Workflow & Scripting',
          description: 'Business rules, client scripts, and workflow design fundamentals.',
          kicker: 'Module 03',
        },
        {
          icon: 'award',
          badgeColor: 'red',
          title: 'Now Assist & AI Layer',
          description:
            "Familiarity with ServiceNow's built-in AI tooling, now a standard expectation in job postings.",
          kicker: 'Module 04',
        },
        {
          icon: 'check-circle',
          badgeColor: 'navy',
          title: 'Certification Readiness',
          description: 'Structured prep toward System Administrator-level certification.',
          kicker: 'Module 05',
        },
      ]}
    />
    <CareerPaths
      kicker="KEY ROLES"
      headlinePrefix="Where "
      headlineHighlight="This Leads"
      subhead="Explore some of the key roles that open up through this track and become part of a stronger, future-ready enterprise ecosystem."
      roles={[
        {
          title: 'System Administrator',
          description: 'Keep systems running, secure and optimized.',
          image: images.servicenowRoles.sysadmin,
          icon: 'server',
          badgeColor: 'red',
        },
        {
          title: 'ServiceNow Developer',
          description: 'Build and customize solutions that power digital workflows.',
          image: images.servicenowRoles.developer,
          icon: 'code',
          badgeColor: 'blue',
        },
        {
          title: 'ITSM Business Analyst',
          description: 'Bridge business needs with ITSM solutions.',
          image: images.servicenowRoles.analyst,
          icon: 'chart',
          badgeColor: 'red',
        },
        {
          title: 'Implementation Consultant',
          description: 'Drive successful deployments and client outcomes.',
          image: images.servicenowRoles.consultant,
          icon: 'users',
          badgeColor: 'blue',
        },
        {
          title: 'ITOM Specialist',
          description: 'Manage and optimize IT operations for greater efficiency.',
          image: images.servicenowRoles.itom,
          icon: 'gear',
          badgeColor: 'red',
        },
      ]}
    />
    <CtaBand
      headline="Ready to start ServiceNow training?"
      body="Get in touch with our team to discuss cohort schedules, hands-on lab access, and placement opportunities."
      cta={{
        label: 'Contact Us',
        to: '/contact',
      }}
    />
  </div>
);

export default ServiceNowPage;
