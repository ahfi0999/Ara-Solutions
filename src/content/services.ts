/**
 * ARA Solutions IT staffing and workforce services.
 * Content follows ARA's original website pages for each service.
 */

export type ServiceSlug = 'corp-to-corp' | 'fulltime-staffing' | 'rpo' | 'international-consulting';

export type Service = {
  slug: ServiceSlug;
  name: string;
  shortName: string;
  menuText: string;
  badge: string;
  headline: string;
  summary: string;
  cta: string;
  /** Card photo (path under /public): CC0 photos from StockSnap, sources listed in SERVICE_PHOTO_SOURCES. */
  image?: string;
  /** Alt text and title of `image`: what the photo shows, and the service. */
  imageAlt?: string;
  /** Three key promises shown beside the hero. */
  promises: { title: string; text: string }[];
  /** "Why it matters" story. */
  story: { eyebrow: string; title: string; paragraphs: string[]; points: { title: string; text: string }[] };
  /** Main cards: model dimensions, advantages or methods. */
  pillars: { eyebrow: string; title: string; items: { title: string; text: string }[] };
  /** Optional step-by-step process. */
  process?: {
    eyebrow: string;
    title: string;
    intro?: string;
    steps: { title: string; text: string }[];
    tags?: string[];
  };
  closing: { title: string; text: string };
};

export const services: Service[] = [
  {
    slug: 'fulltime-staffing',
    image: '/images/services/fulltime-staffing.jpg',
    imageAlt: 'Recruiter shaking hands with a new hire, full-time staffing by ARA Solutions',
    name: 'Fulltime Staffing (IT & Non-IT)',
    shortName: 'Fulltime Staffing',
    menuText: 'Permanent IT and non-IT hires',
    badge: 'Permanent talent acquisition',
    headline: 'Fulltime Staffing',
    summary:
      'Permanent engineering and leadership hires, measured by long-term team retention, technical capability and cultural performance, not just offer signing.',
    cta: 'Initiate a search',
    promises: [
      {
        title: 'Retention-focused',
        text: 'Candidates chosen for adaptability, values and context, beyond keyword matches.',
      },
      { title: 'Quality shortlists', text: 'Save valuable panel hours with meticulously vetted shortlists.' },
      {
        title: 'Placement support',
        text: 'A true recruitment partnership with follow-through and joining support.',
      },
    ],
    story: {
      eyebrow: 'Long-term impact',
      title: 'A permanent hire is an investment',
      paragraphs: [
        'A permanent hire is an investment in your company’s culture, institutional knowledge and long-term capability. The cost of getting it wrong, in lost productivity, team disruption and the expense of re-recruiting, is higher than ever.',
        'ARA Solutions manages the permanent search process from discovery through placement with the rigour a long-term commitment deserves. We qualify candidates thoroughly on capability, culture and readiness, and stay involved through the crucial early months.',
      ],
      points: [
        { title: 'Team disruption', text: 'A bad hire impacts performance and morale' },
        { title: 'Higher costs', text: 'Re-hiring, training and lost productivity' },
        { title: 'Time lost', text: 'Sets back critical goals' },
      ],
    },
    pillars: {
      eyebrow: 'Our methodology',
      title: 'Our permanent search methodology',
      items: [
        {
          title: 'Targeted permanent search',
          text: 'We build the candidate profile around your actual role context, team culture, leadership style and strategic business goals.',
        },
        {
          title: 'Qualification & interviews',
          text: 'Rigorous screening before any candidate reaches your desk, filtering for technical depth, communication and mutual commitment.',
        },
        {
          title: 'Sustainable fit',
          text: 'We measure success by retention and long-term performance, not just offer acceptance.',
        },
      ],
    },
    closing: {
      title: 'Start your search',
      text: 'Tell us about the role you need to fill. We’ll outline our candidate pipeline and timeline.',
    },
  },
  {
    slug: 'corp-to-corp',
    image: '/images/services/corp-to-corp.jpg',
    imageAlt: 'IT consultants with tablets in a data centre, corp-to-corp staffing by ARA Solutions',
    name: 'Contract Staffing',
    shortName: 'Contract Staffing',
    menuText: 'Contract experts for project needs',
    badge: 'Agile project staffing model',
    headline: 'Contract Staffing',
    summary:
      'Flexible consultant engagement. Niche technical skills deployed on demand. Built for enterprise project velocity without overhead.',
    cta: 'Request contract talent',
    promises: [
      {
        title: 'Deployment speed',
        text: 'Rapid contractor matching from pre-cleared, active contract engineers across niche tech stacks.',
      },
      {
        title: 'Statutory compliance',
        text: 'Clean vendor-to-vendor master service agreements (MSAs) and verified W9 / GST paperwork.',
      },
      {
        title: 'Flexible engagements',
        text: 'Scale engineering pods up or down smoothly as project milestones conclude.',
      },
    ],
    story: {
      eyebrow: 'On-demand expertise',
      title: 'Specialists who contribute from day one',
      paragraphs: [
        'When a critical project demands specialised expertise, such as an enterprise migration, a security audit or a sudden surge in engineering workload, you need professionals who can contribute from day one, under an engagement structure that matches the project’s scope.',
        'Our Corp-to-Corp model connects you with vetted consultants through compliant, structured vendor-to-vendor arrangements, keeping overhead low, deployment fast and accountability clear.',
      ],
      points: [
        { title: 'Skilled experts', text: 'Ready to contribute from day one' },
        { title: 'Compliant & structured', text: 'Vendor-to-vendor made simple' },
        { title: 'Faster project delivery', text: 'Keep your momentum' },
      ],
    },
    pillars: {
      eyebrow: 'Workforce architecture',
      title: 'The C2C model at a glance',
      items: [
        {
          title: 'Search approach',
          text: 'Fast, targeted sourcing for specific skill requirements, niche tech stacks and aggressive project timelines.',
        },
        {
          title: 'Core support',
          text: 'Vendor coordination, thorough rate negotiations, onboarding logistics and strict statutory compliance.',
        },
        {
          title: 'Best suited for',
          text: 'Projects with fixed scopes, specialised skill gaps, sudden workload surges or variable workforce needs.',
        },
        {
          title: 'Business value',
          text: 'Access high-calibre expertise immediately without the long-term overhead or commitments of a permanent hire.',
        },
      ],
    },
    closing: {
      title: 'Need specialists for your next project?',
      text: 'Tell us the skills and timeline. If your requirement is permanent, our Fulltime Staffing service offers end-to-end recruitment with retention support.',
    },
  },
  {
    slug: 'rpo',
    image: '/images/services/rpo.jpg',
    imageAlt: 'Recruitment team working together on laptops, recruitment process outsourcing by ARA Solutions',
    name: 'Recruitment Process Outsourcing (RPO)',
    shortName: 'Recruitment Process Outsourcing',
    menuText: 'A dedicated recruiting team for you',
    badge: 'Scalable embedded talent engine',
    headline: 'Recruitment Process Outsourcing (RPO)',
    summary:
      'A dedicated recruitment engine embedded into your workflow. Custom SLAs, rigorous candidate verification and elastic sourcing for high-growth enterprises.',
    cta: 'Request an RPO consultation',
    promises: [
      {
        title: 'Lower cost per hire',
        text: 'Reduce agency fees through unified, dedicated recruitment pods.',
      },
      {
        title: 'Hiring throughput',
        text: 'Scalable sourcing that flexes with product launch cycles and hiring surges.',
      },
      {
        title: 'SLA tracking',
        text: 'Clear metrics across time-to-fill, interview feedback turnaround and offer closures.',
      },
    ],
    story: {
      eyebrow: 'Recruitment trends',
      title: 'Why teams outsource recruitment',
      paragraphs: [
        'Managing recruitment internally during periods of growth or high-volume hiring pulls hiring managers away from their core work, stretches internal HR thin, and often leads to compromised hiring decisions under timeline pressure.',
        'ARA Solutions RPO gives you a dedicated recruitment engine, embedded within your workflow, aligned with your culture and operating under clear SLAs. We manage the process end to end so your team can focus on making the final decision.',
      ],
      points: [
        { title: 'Dedicated talent partner', text: 'Senior talent partner and technical sourcers' },
        { title: 'Weekly calibration', text: 'Custom SLAs with velocity reporting' },
        { title: 'Your tools', text: 'Works inside your Slack, Teams and ATS' },
        { title: 'No long-term lock-in', text: 'Scale recruitment pods up or down on demand' },
      ],
    },
    pillars: {
      eyebrow: 'Why partner on RPO',
      title: 'An extension of your team',
      items: [
        {
          title: 'Scalable capacity',
          text: 'Ramp recruitment capacity up or down to match seasonality and hiring surges without adding permanent internal payroll.',
        },
        {
          title: 'Consistent candidate experience',
          text: 'A structured, responsive hiring process that protects and elevates your employer brand with every applicant.',
        },
        {
          title: 'An extension, not a replacement',
          text: 'We work alongside your internal talent leaders, hiring managers and HR business partners, not in competition with them.',
        },
      ],
    },
    process: {
      eyebrow: 'Execution rigour',
      title: 'The 5-stage RPO delivery framework',
      intro: 'A structured, outcome-driven approach to help you hire faster, smarter and at scale.',
      steps: [
        {
          title: 'Plan',
          text: 'Define hiring volume, role competencies, SLAs, calibration metrics and target timelines.',
        },
        {
          title: 'Source',
          text: 'Deploy dedicated sourcing channels across active and passive talent pools in target markets.',
        },
        {
          title: 'Screen',
          text: 'Structured behavioural screens, technical pre-evaluations and preliminary compensation checks.',
        },
        {
          title: 'Coordinate',
          text: 'Panel schedules, candidate status communication and tight post-interview feedback loops.',
        },
        {
          title: 'Support',
          text: 'Offer facilitation, pre-joining touchpoints, credential verification and joining-day assurance.',
        },
      ],
      tags: [
        'Dedicated recruiters',
        'SLA-driven timelines',
        'Candidate experience focus',
        'Transparent pipeline reporting',
      ],
    },
    closing: {
      title: 'Explore RPO for your team',
      text: 'Whether you need recruitment support for a business unit, a hiring surge or your entire organisation, let’s talk about the right model.',
    },
  },
  {
    slug: 'international-consulting',
    image: '/images/services/international-consulting.jpg',
    imageAlt: 'Globe showing countries, international consulting by ARA Solutions',
    name: 'International Consulting',
    shortName: 'International Consulting',
    menuText: 'Verified global talent',
    badge: 'Cross-border global mobility & verification',
    headline: 'International Consulting',
    summary:
      'Connecting enterprise teams with global engineering talent across the US, UK, Europe and India. Compliant cross-border hiring, rigorous credential verification and zero offer-stage ambiguity.',
    cta: 'Request international consultation',
    promises: [
      {
        title: 'Global delivery reach',
        text: 'Cross-market sourcing networks across the US, UK, Middle East and Indian GCC tech corridors.',
      },
      {
        title: 'Pre-offer credential checks',
        text: 'Employment verification, identity screening, academic credential audits and statutory clearances.',
      },
      {
        title: 'Compliance & mobility advisory',
        text: 'Onboarding logistics, time-zone alignment and tax compliance coordination.',
      },
    ],
    story: {
      eyebrow: 'Global talent advantage',
      title: 'Capability beyond your immediate geography',
      paragraphs: [
        'We identify, engage and assess talent across international markets for clients who need capability beyond their immediate geography, and advise on engagement structures, local compensation benchmarks and cross-border compliance.',
        'Before an offer is made, we verify what matters: employment history, education, identity, background, references and professional certifications.',
      ],
      points: [
        { title: 'Cross-market sourcing', text: 'Talent mapping across the US, UK, EU and India' },
        { title: 'Consulting support', text: 'EOR, direct contract or local subsidiary advice' },
        { title: 'Candidate coordination', text: 'Across time zones and cultural contexts' },
      ],
    },
    pillars: {
      eyebrow: 'Verification',
      title: 'Protect your next hire before they start',
      items: [
        {
          title: 'Employment history & tenure',
          text: 'Verify previous employment records, job titles, tenure and key responsibilities.',
        },
        {
          title: 'Educational credentials',
          text: 'Validate qualifications, degrees, institutions and year of completion directly from source.',
        },
        {
          title: 'Identity & address',
          text: 'Confirm candidate identity and current and permanent address with reliable checks.',
        },
        {
          title: 'Criminal background check',
          text: 'Screen for criminal records as per local and international compliance standards.',
        },
        {
          title: 'Supervisory references',
          text: 'Reference checks with previous managers on performance, behaviour and reliability.',
        },
        {
          title: 'Professional certifications',
          text: 'Verify industry certifications, licences and memberships for authenticity.',
        },
      ],
    },
    process: {
      eyebrow: 'How it works',
      title: 'The cross-border sourcing lifecycle',
      steps: [
        {
          title: 'Source',
          text: 'Map and engage talent across target international markets and specialised professional networks.',
        },
        {
          title: 'Assess',
          text: 'Screen for technical competence, communication fluency and readiness for cross-border collaboration.',
        },
        {
          title: 'Coordinate',
          text: 'Manage interview schedules across multiple time zones with responsive communication at every step.',
        },
        {
          title: 'Engage',
          text: 'Support the offer, contract structure and onboarding transition for lasting success.',
        },
      ],
      tags: [
        'Time-zone alignment',
        'Cross-border compliance',
        'Market compensation intelligence',
        'Transition management',
      ],
    },
    closing: {
      title: 'Hiring across borders?',
      text: 'Whether you need background check support on an active candidate or guidance on international sourcing, we’re ready to help.',
    },
  },
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);

/** Roles covered by Fulltime Staffing (from ARA's original site). */
export const roleCoverage = {
  it: [
    'Software Engineering (Frontend, Backend, Full Stack)',
    'Cloud & DevOps Architecture',
    'Data Engineering, BI & Analytics',
    'AI / ML & Advanced Automation',
    'Cyber Security & InfoSec',
    'Enterprise Platforms (ServiceNow, Salesforce)',
  ],
  nonIt: [
    'Sales Leadership & Account Management',
    'Human Resources & Talent Acquisition',
    'Operations & Process Excellence',
    'Finance, Accounting & Controlling',
    'Executive & Administrative Support',
    'Customer Success & Technical Support',
  ],
};

/** Contract vs permanent comparison (from ARA's original site). */
export const engagementComparison = [
  {
    name: 'Fulltime Staffing',
    tagline: 'Permanent talent for lasting impact.',
    points: [
      'Direct hire on your company payroll',
      'Technical, behavioural and cultural assessment',
      'Background, reference and compliance checks',
      'End-to-end joining support and ramp-up',
      'Placement support and retention follow-through',
    ],
    bestFor: 'Core roles and long-term team growth',
    href: '/services/fulltime-staffing/',
  },
  {
    name: 'Contract Staffing (C2C)',
    tagline: 'On-demand expertise for your project needs.',
    points: [
      'Vetted third-party consultants and contractors',
      'Fast deployment, often within 3 to 5 business days',
      'Milestone-based, with clear deliverables and scope',
      'Vendor-to-vendor billing, no internal headcount increase',
      'Scale up or down as project phases evolve',
    ],
    bestFor: 'Short- to mid-term project engagements',
    href: '/services/corp-to-corp/',
  },
];

/** Where the service card photos come from (all CC0, free to use without attribution). */
export const SERVICE_PHOTO_SOURCES = {
  'corp-to-corp': 'https://stocksnap.io/photo/servers-woman-ZYGIOUX4QU',
  'fulltime-staffing': 'https://stocksnap.io/photo/shaking-hands-GEKK2UOHCY',
  rpo: 'https://stocksnap.io/photo/team-meeting-VQXYE2ZEHC',
  'international-consulting': 'https://stocksnap.io/photo/global-map-UN4MECXXU6',
} as const;
