/**
 * Google search titles and descriptions, from the SEO sheet ("Ara Seo Updates", November 2026).
 * Titles are written without the brand: the site adds " | ARA Solutions" to every title itself.
 * Keep descriptions to about 160 characters, or Google cuts them off.
 */
export type PageSeo = { title: string; description: string };

const pages: Record<string, PageSeo> = {
  '/': {
    // Title from the client (Nov 2026); the description is still the SEO sheet's.
    title: 'Staffing, Training & Placement in Hyderabad',
    description:
      'ARA Solutions offers IT & Non-IT recruitment, staffing, industry-focused training and placement assistance in Hyderabad. Explore our services today.',
  },
  '/services/': {
    title: 'IT & Non-IT Recruitment & Staffing Services',
    description:
      'ARA Solutions provides IT & Non-IT recruitment, fulltime staffing, Corp-to-Corp staffing and international hiring solutions for growing businesses.',
  },
  '/services/corp-to-corp/': {
    title: 'Corp-to-Corp (C2C) Staffing in Hyderabad',
    description:
      "Access skilled IT consultants through ARA Solutions' Corp-to-Corp (C2C) staffing in Hyderabad. Flexible vendor-to-vendor hiring for specialized project skills.",
  },
  '/services/fulltime-staffing/': {
    title: 'Fulltime Staffing (IT & Non-IT) in Hyderabad',
    description:
      'ARA Solutions provides IT and Non-IT fulltime staffing in Hyderabad. Hire qualified professionals across technology, sales, HR, finance and operations.',
  },
  '/services/rpo/': {
    title: 'Recruitment Process Outsourcing (RPO) in Hyderabad',
    description:
      "ARA Solutions' RPO services give growing businesses a dedicated recruitment team in Hyderabad, with custom SLAs, candidate screening and verification.",
  },
  '/services/international-consulting/': {
    title: 'International Recruitment Services in Hyderabad',
    description:
      'ARA Solutions supports international hiring with IT & Non-IT talent sourcing, candidate screening, background verification and cross-border recruitment coordination.',
  },
  '/training-placement/': {
    title: 'IT Training & Placement in Hyderabad',
    description:
      'Join IT training programs in Hyderabad at ARA Solutions. Learn ServiceNow, Salesforce, AI/ML, Cybersecurity & Full Stack with hands-on projects and placement support.',
  },
  '/training-placement/salesforce/': {
    title: 'Salesforce Training in Hyderabad',
    description:
      'Join Salesforce training in Hyderabad at ARA Solutions. Learn Salesforce Admin, Developer, Apex & Agentforce AI with hands-on projects and placement assistance.',
  },
  '/training-placement/servicenow/': {
    title: 'ServiceNow Training & Placement in Hyderabad',
    description:
      'Learn ServiceNow administration, ITSM, ITOM, scripting and Now Assist AI in Hyderabad, with hands-on projects, CSA exam preparation and placement assistance.',
  },
  '/training-placement/ai-ml/': {
    title: 'AI & Machine Learning Course in Hyderabad',
    description:
      'Learn AI & Machine Learning in Hyderabad with Python, ML, Generative AI, LLMs and RAG. Build practical projects with hands-on training and placement assistance.',
  },
  '/training-placement/agentic-ai/': {
    title: 'Agentic AI Training in Hyderabad',
    description:
      'Learn Agentic AI in Hyderabad with Python, LLMs, MCP, RAG, LangGraph and CrewAI. Build practical AI agents through hands-on projects and placement assistance.',
  },
  '/training-placement/cybersecurity/': {
    title: 'Cybersecurity Training in Hyderabad',
    description:
      'Learn cybersecurity in Hyderabad with SOC, SIEM, cloud security, IAM and vulnerability assessment through hands-on labs and placement assistance.',
  },
  '/training-placement/full-stack-ai/': {
    title: 'Full Stack Development Course in Hyderabad',
    description:
      'Learn full stack development with React, Node.js, SQL, MongoDB and AI integration. Build and deploy practical projects with placement assistance in Hyderabad.',
  },
};

/** The search title and description for a page path (with trailing slash), if the sheet has one. */
export const seoFor = (path: string): PageSeo | undefined => pages[path];

/** Home page: also the site-wide fallback in the root layout. */
export const homeSeo = pages['/'];

/**
 * When the site's content last changed in a real way (new copy, titles, pages), as YYYY-MM-DD.
 * It goes into the sitemap as each page's "last modified" date, which Google uses to decide what to
 * re-read first. Change it after a significant content update, not for small fixes or every deploy,
 * or Google learns to ignore it.
 */
export const siteUpdated = '2026-11-23';
