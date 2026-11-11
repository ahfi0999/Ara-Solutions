import CardGrid from '../../components/sections/CardGrid';
import CtaBand from '../../components/sections/CtaBand';
import PageHero from '../../components/sections/PageHero';
import { images } from '../../data/images';
import CostOfBadHires from '../../sections/fulltime/CostOfBadHires';
import EngagementComparison from '../../sections/fulltime/EngagementComparison';
import RoleCoverage from '../../sections/fulltime/RoleCoverage';

const FulltimeStaffingPage = () => (
  <div className="bg-[#FFFFFF]">
    <PageHero
      variant="page"
      badge="Permanent Talent Acquisition"
      headline="Fulltime Staffing"
      subhead="Permanent engineering and leadership hires. Measured by long-term team retention, technical capability, and cultural performance — not just offer signing."
      backgroundImage={images.fulltimeHero}
      techVariant="circuit"
      primaryCTA={{
        label: 'Initiate a Search',
        to: '/contact',
      }}
      secondaryCTA={{
        label: 'View Hiring Process',
        to: '/company/approach',
      }}
      highlightCards={[
        {
          title: 'Early Retention Benchmark',
          metric: 95,
          metricSuffix: '%',
          subtitle: '1-Year Employee Retention',
          description:
            'Candidates chosen for adaptability, values, and contextual fit beyond just keyword matches.',
        },
        {
          title: 'Screening Funnel Quality',
          metric: '3:1',
          subtitle: 'Interview-to-Offer Ratio',
          description: 'Save valuable engineering panel hours with meticulously vetted shortlists.',
        },
        {
          title: 'Post-Placement Warranty',
          metric: 90,
          metricSuffix: ' Days',
          subtitle: 'Free Replacement Guarantee',
          description: 'True recruitment partnership with continuous follow-through and joining support.',
        },
      ]}
    />
    <CardGrid
      kicker="Workforce Architecture"
      headline="Our Permanent Search Methodology"
      isLight={true}
      columns={3}
      cards={[
        {
          icon: 'search',
          badgeColor: 'navy',
          title: 'Targeted Permanent Search',
          description:
            'We build the candidate profile around your actual role context, team culture, leadership style, and strategic business goals.',
          kicker: 'Method 01',
        },
        {
          icon: 'shield',
          badgeColor: 'red',
          title: 'Qualification & Interviews',
          description:
            'Rigorous screening before any candidate reaches your desk, filtering for technical depth, communication, and mutual commitment.',
          kicker: 'Method 02',
        },
        {
          icon: 'award',
          badgeColor: 'navy',
          title: 'Sustainable Fit',
          description:
            'We measure success by retention and long-term performance, not just offer acceptance and invoice signing.',
          kicker: 'Method 03',
        },
      ]}
    />
    <CostOfBadHires />
    <RoleCoverage
      kicker="TALENT COVERAGE"
      headline="Domain Coverage Across Roles"
      subhead="End-to-end hiring support across technical and business functions to meet your evolving needs."
      columnA={{
        title: 'IT Roles',
        subtitle: 'Powering innovation with technical excellence.',
        badge: 'TECHNICAL DEPTH',
        items: [
          'Software Engineering (Frontend, Backend, Fullstack)',
          'Cloud & DevOps Architecture',
          'Data Engineering, BI & Analytics',
          'AI / ML & Advanced Automation',
          'Cyber Security & InfoSec',
          'Enterprise Platforms (ServiceNow, Salesforce)',
        ],
      }}
      columnB={{
        title: 'Non-IT Roles',
        subtitle: 'Driving growth through people and operations.',
        badge: 'BUSINESS DOMAIN',
        items: [
          'Sales Leadership & Account Management',
          'Human Resources & Talent Acquisition',
          'Operations & Process Excellence',
          'Finance, Accounting & Controlling',
          'Executive & Administrative Support',
          'Customer Success & Technical Support',
        ],
      }}
      showDonut={false}
    />
    <EngagementComparison
      kicker="ENGAGEMENT COMPARISON"
      headline="Engagement Model Comparison"
      subhead="Select the talent structure aligned with your operational roadmap and financial priorities."
      cards={[
        {
          numberWatermark: '01',
          badgeColor: 'blue',
          icon: 'handshake',
          kicker: 'FLEXIBLE TALENT',
          title: 'Corp to Corp (C2C)',
          subTitle: 'On-demand expertise for your project needs.',
          description:
            'Flexible consultant engagement for project milestones, specialized tech stacks, and variable workforce demands.',
          features: [
            {
              icon: 'zap',
              title: 'Vetted Experts',
              subtitle: 'Third-party consultants & contractors',
            },
            {
              icon: 'rocket',
              title: 'Fast Deployment',
              subtitle: 'Often within 3 to 5 business days',
            },
            {
              icon: 'target',
              title: 'Milestone-Based',
              subtitle: 'Clear deliverables and defined scope',
            },
            {
              icon: 'fileText',
              title: 'Simple Invoicing',
              subtitle: 'Vendor-to-vendor billing; no internal headcount increase',
            },
            {
              icon: 'maximize',
              title: 'Easy Scalability',
              subtitle: 'Scale up or down as project phases evolve',
            },
          ],
          footerNote: 'Best for short- to mid-term project engagements',
        },
        {
          numberWatermark: '02',
          badgeColor: 'red',
          icon: 'users',
          kicker: 'BUILD LONG-TERM',
          title: 'Fulltime Staffing',
          subTitle: 'Permanent talent for lasting impact.',
          description:
            'Direct-hire permanent recruitment for foundational roles requiring cultural alignment and deep business continuity.',
          features: [
            {
              icon: 'userCheck',
              title: 'Direct Hire',
              subtitle: 'Salaried placement on your company payroll',
            },
            {
              icon: 'search',
              title: 'In-Depth Vetting',
              subtitle: 'Technical, behavioral, and cultural assessment',
            },
            {
              icon: 'layers',
              title: 'Multi-Tier Verification',
              subtitle: 'Background, reference, and compliance checks',
            },
            {
              icon: 'settings',
              title: 'Structured Onboarding',
              subtitle: 'End-to-end joining support and ramp-up',
            },
            {
              icon: 'shieldCheck',
              title: 'Placement Support',
              subtitle: 'Standard warranty and retention follow-through',
            },
          ],
          footerNote: 'Best for core roles and long-term team growth',
        },
      ]}
    />
    <CtaBand
      headline="Start Your Search"
      body="Tell us about the role you need to fill. We'll outline our candidate pipeline and timeline."
      bodyClassName="md:whitespace-nowrap"
      cta={{
        label: 'Contact Our Recruiters',
        to: '/contact',
      }}
    />
  </div>
);

export default FulltimeStaffingPage;
