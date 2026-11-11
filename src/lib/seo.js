export const SITE_URL = 'https://arasolutions.in';
export const SITE_NAME = 'ARA Solutions';

/** Preview image shown when a page link is shared (WhatsApp, LinkedIn, ...). */
export const OG_IMAGE = { url: '/og-image.png', width: 1200, height: 630, alt: 'ARA Solutions' };

/** Every page on the site. Used by the sitemap and the old-link redirect. */
export const ROUTES = [
  '/',
  '/company/about',
  '/company/approach',
  '/company/case-studies',
  '/services/corp-to-corp',
  '/services/fulltime-staffing',
  '/services/rpo',
  '/services/training-placement',
  '/training-placement',
  '/training-placement/servicenow',
  '/training-placement/cybersecurity',
  '/training-placement/ai-ml',
  '/services/international-consulting',
  '/careers',
  '/contact',
];

/** Title and description for every page, used for search results and link previews. */
export const PAGE_META = {
  '/': {
    title: 'ARA Solutions | IT Always The Right Choice',
    description:
      'ARA Solutions provides IT staffing, recruitment process outsourcing and job-ready tech training from Hyderabad for clients in India, the US and the UK.',
  },
  '/company/about': {
    title: 'About Us',
    description:
      'Who we are: a Hyderabad-based IT workforce partner building long-term technical teams for enterprises across India, the US and the UK.',
  },
  '/company/approach': {
    title: 'Our Approach',
    description:
      'Our three-stage Discover, Deliver and Support method for vetting technical talent and matching it to role requirements.',
  },
  '/company/case-studies': {
    title: 'Case Studies',
    description:
      'How ARA Solutions staffed niche technical roles for fintech, healthcare and SaaS clients, with measured results.',
  },
  '/services/corp-to-corp': {
    title: 'Corp to Corp Staffing',
    description:
      'Fast access to pre-cleared contract engineers across niche tech stacks, with statutory compliance handled for you.',
  },
  '/services/fulltime-staffing': {
    title: 'Full-Time Staffing',
    description:
      'Permanent engineering and leadership hires measured by long-term retention, technical capability and cultural fit.',
  },
  '/services/rpo': {
    title: 'Recruitment Process Outsourcing (RPO)',
    description: 'Dedicated recruitment pods that lower cost-per-hire and scale your hiring throughput.',
  },
  '/services/international-consulting': {
    title: 'International Consulting',
    description:
      'Global technical talent with pre-offer credential checks and risk mitigation for international engagements.',
  },
  '/training-placement': {
    title: 'Training & Placement',
    description:
      'Job-ready training in ServiceNow, cybersecurity and AI/ML with hands-on projects and direct placement support.',
  },
  '/training-placement/servicenow': {
    title: 'ServiceNow Training & Placement',
    description:
      'ServiceNow developer, administrator and ITOM training in Hyderabad with certification preparation and placement.',
  },
  '/training-placement/cybersecurity': {
    title: 'Cybersecurity Training & Placement',
    description:
      'Train for SOC analyst, cloud security, IAM and GRC roles with hands-on labs and placement support.',
  },
  '/training-placement/ai-ml': {
    title: 'AI & Machine Learning Training & Placement',
    description:
      'Become an ML engineer, data scientist or GenAI developer with project-based training and placement support.',
  },
  '/careers': {
    title: 'Careers',
    description:
      'Join a people-first recruitment partner. See open positions for recruiters, technical advisors and delivery leaders.',
  },
  '/contact': {
    title: 'Contact Us',
    description:
      'Talk directly with our Hyderabad leadership team about your staffing, RPO or training needs.',
  },
};

/**
 * Builds Next.js metadata for a route. `canonical` lets duplicate routes
 * point search engines at the main URL.
 */
export function pageMetadata(path, canonical = path) {
  const { title, description } = PAGE_META[canonical];
  return {
    title: path === '/' ? { absolute: title } : title,
    description,
    alternates: { canonical },
    // Page-level openGraph replaces the layout's, so repeat the shared fields here.
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type: 'website',
      images: [OG_IMAGE],
    },
  };
}
