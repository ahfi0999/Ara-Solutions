/**
 * Extra content for a training track's page (/training-placement/<track>-courses/), written from the
 * client's page documents and our keyword research. A track without an entry here keeps the short
 * track page (hero, course cards, enquiry form).
 *
 * Workday: from "00-Hub-Workday-Courses.docx" (client, Nov 2026), rewritten for the keywords chosen on
 * 24 Nov 2026 (primary "workday course"; secondary "workday course in hyderabad", "workday training
 * institute in hyderabad", "workday certification course"). Hyderabad is the only location named (client,
 * 24 Nov 2026). The course-specific keywords (Workday HCM, Finance, Integration) belong to the course
 * pages, so this page links to them rather than targeting them.
 */

export type HubCompareRow = {
  slug: string;
  bestFor: string;
  coding: string;
  certifications: string[];
  roles: string[];
};

export type TrackHub = {
  seo: { title: string; description: string };
  /** The H1, with one phrase of it (`accent`) set in the italic accent. */
  hero: { title: string; accent: string; intro: string };
  /** A short paragraph under the course cards: why this skill is worth learning. */
  why: { title: string; text: string };
  compare: HubCompareRow[];
  /** "If you have … start with …" rows: the course slug to start with for each background. */
  chooser: { title: string; intro: string; rows: { background: string; slug: string }[]; note: string };
  careers: {
    title: string;
    intro: string;
    salaries: { role: string; experience: string; pay: string }[];
    salaryNote: string;
    path: { stage: string; roles: string }[];
  };
  certifications: { title: string; intro: string; rows: { name: string; slug: string }[]; note: string };
  benefits: { title: string; items: { title: string; text: string }[] };
  faqs: { q: string; a: string }[];
  closing: { title: string; intro: string };
};

const workday: TrackHub = {
  seo: {
    // The site adds " | ARA Solutions" (44 characters in all).
    title: 'Workday Courses in Hyderabad',
    description:
      'Workday courses in Hyderabad: HCM, Financials and Integrations. Live classes, hands-on projects, certification guidance and placement support.',
  },
  hero: {
    title: 'Workday courses in Hyderabad with placement support',
    accent: 'placement support',
    intro:
      'Learn Workday HCM, Financials or Integrations with ARA Solutions in Madhapur, Hyderabad. Every Workday course includes live instructor-led classes, hands-on projects, certification guidance and placement support.',
  },
  why: {
    title: 'Why learn Workday?',
    text: 'Workday runs HR and finance for many large global companies. IT services firms and capability centres in Hyderabad hire Workday consultants to configure how those companies hire, pay and manage people, keep their books and connect Workday to other systems.',
  },
  compare: [
    {
      slug: 'workday-hcm',
      bestFor: 'HR, payroll and HRIS professionals',
      coding: 'No coding needed',
      certifications: ['Workday Pro HCM Core', 'Workday Pro Security'],
      roles: ['Workday HCM Consultant', 'Workday HRIS Analyst', 'Workday Reporting Analyst'],
    },
    {
      slug: 'workday-finance',
      bestFor: 'Finance and accounting professionals; CA, CMA and commerce graduates',
      coding: 'No coding needed',
      certifications: ['Workday Pro Record to Report', 'Workday Pro Procure to Pay'],
      roles: ['Workday Financials Consultant', 'Workday Finance Analyst', 'Workday AP/AR Specialist'],
    },
    {
      slug: 'workday-integration',
      bestFor: 'Developers, integration engineers and Workday functional consultants',
      coding: 'Taught in the course (XML, XSLT, APIs)',
      certifications: ['Workday Pro Integrations', 'Workday Pro Workday Orchestrate Developer'],
      roles: ['Workday Integration Consultant', 'Workday Technical Consultant', 'Workday Studio Developer'],
    },
  ],
  chooser: {
    title: 'How to learn Workday: start from your background',
    intro:
      'Every ARA Workday course starts from the Workday foundations, so you do not need Workday experience. Pick the course that builds on what you already know.',
    rows: [
      { background: 'You have an HR, payroll or HRIS background', slug: 'workday-hcm' },
      { background: 'You have an accounting or finance background', slug: 'workday-finance' },
      { background: 'You have a development or integration background', slug: 'workday-integration' },
    ],
    note: 'Freshers with an HR, commerce or technical degree can join the matching course too.',
  },
  careers: {
    title: 'Workday careers and salaries in India',
    intro:
      'Is Workday a good career? Workday consultants are hired by IT services firms and capability centres in Hyderabad, and integration skills are especially scarce. Typical annual salaries in India:',
    salaries: [
      { role: 'Workday HCM Consultant', experience: '2 to 10 years', pay: '₹4 L to ₹15.6 L' },
      { role: 'Workday Integration Consultant (IT services)', experience: 'Varies', pay: '₹4.5 L to ₹20 L' },
    ],
    salaryNote:
      'Annual salary ranges from AmbitionBox (accessed November 2026). Actual pay depends on the company, city, skills and experience.',
    path: [
      { stage: 'Start (0 to 2 years)', roles: 'Workday HRIS Analyst, Reporting Analyst, Finance Analyst' },
      { stage: 'Grow (2 to 5 years)', roles: 'Workday HCM, Financials or Integration Consultant' },
      { stage: 'Lead (5+ years)', roles: 'Senior Workday Consultant, Workday Architect' },
    ],
  },
  certifications: {
    title: 'Workday certification: what each course prepares you for',
    intro:
      'Workday Pro certifications are open only to people working at Workday customers and partners, so no training institute can certify you directly. Our courses build the hands-on skills those employers test before hiring, and the certification paths listed here are the ones you can take once you join one.',
    rows: [
      { name: 'Workday Pro HCM Core Certification', slug: 'workday-hcm' },
      { name: 'Workday Pro Security Certification', slug: 'workday-hcm' },
      { name: 'Workday Pro HCM Reporting Certification', slug: 'workday-hcm' },
      { name: 'Workday Pro Record to Report Certification', slug: 'workday-finance' },
      { name: 'Workday Pro Procure to Pay Certification', slug: 'workday-finance' },
      { name: 'Workday Pro Contracts to Cash Certification', slug: 'workday-finance' },
      { name: 'Workday Pro Integrations Certification', slug: 'workday-integration' },
      { name: 'Workday Pro Workday Orchestrate Developer Certification', slug: 'workday-integration' },
      { name: 'Workday Pro Workday Extend Developer I Certification', slug: 'workday-integration' },
    ],
    note: 'Certification names from Workday’s Workday Pro programme (November 2026). Workday sets the eligibility and exam rules.',
  },
  benefits: {
    title: 'Why learn Workday online with ARA Solutions',
    items: [
      {
        title: 'Training shaped by real hiring',
        text: 'ARA also runs an IT staffing business, so our Workday courses follow what client companies hire for.',
      },
      {
        title: 'Live classes, every class recorded',
        text: 'Instructor-led classes on Zoom, with every class recorded so you can revise or catch up.',
      },
      {
        title: 'Projects and certification guidance',
        text: 'Hands-on projects you can show employers, plus guidance on the Workday Pro certification paths.',
      },
      {
        title: 'Placement support',
        text: 'Resume and LinkedIn help, mock interviews and job referrals. Offers depend on your interview performance.',
      },
    ],
  },
  faqs: [
    {
      q: 'Which Workday course should I choose?',
      a: 'Choose by background: Workday HCM if you come from HR, payroll or HRIS; Workday Financials if you come from accounting or finance; Workday Integrations if you come from development or other technical work. An advisor can help if you are unsure.',
    },
    {
      q: 'How do I learn Workday from scratch?',
      a: 'Start with the course that matches your background, learn the Workday foundations, then practise configuration, reports and data loads through hands-on projects. All three ARA Workday courses start from the basics, so no Workday experience is needed.',
    },
    {
      q: 'Can a Workday certification course get me certified?',
      a: 'Workday Pro certifications are open only to people working at Workday customers and partners, so no institute can certify you directly. Our courses build the skills those employers test, and you take the official exam once you join one of them.',
    },
    {
      q: 'Are the Workday classes live or recorded?',
      a: 'Both. Classes are live and instructor-led on Zoom, and every class is recorded for revision. Our advisors are based in Madhapur, Hyderabad.',
    },
    {
      q: 'What are the Workday course fees?',
      a: 'Fees depend on the course and the batch. Call or WhatsApp +91 90100 09226 for the current fees, EMI options and the next batch dates.',
    },
    {
      q: 'Do you offer a Workday course with placement support?',
      a: 'Yes. Every Workday course includes resume and LinkedIn help, mock interviews and job referrals through ARA’s IT staffing clients and partner companies. Offers depend on your interview performance.',
    },
    {
      q: 'Are there Workday jobs for freshers?',
      a: 'Yes. Freshers with an HR, commerce or technical degree can join our courses. Entry-level Workday roles include HRIS analyst, reporting analyst and finance analyst, mostly at IT services firms and capability centres.',
    },
    {
      q: 'Is Workday a good career?',
      a: 'Workday consultants are hired by IT services firms and capability centres in Hyderabad, and integration skills are especially scarce. A typical path runs from analyst to consultant to senior consultant or architect.',
    },
    {
      q: 'What is the salary of a Workday consultant in India?',
      a: 'AmbitionBox lists ₹4 L to ₹15.6 L a year for Workday HCM consultants with 2 to 10 years of experience, and ₹4.5 L to ₹20 L for Workday integration consultants at IT services firms (November 2026). Pay depends on the company, city, skills and experience.',
    },
    {
      q: 'Do I need coding for Workday?',
      a: 'Not for Workday HCM or Financials. Workday Integrations uses XML, XSLT and APIs, which are taught in the course.',
    },
    {
      q: 'Can I learn Workday HCM and Integrations together?',
      a: 'Yes. Many Workday consultants combine a functional area such as HCM with integrations, and integration roles often pay more because fewer people have the technical skills.',
    },
  ],
  closing: {
    title: 'Talk to a Workday course advisor',
    intro:
      'Get a course recommendation for your background, the current fees and the next batch dates. Call, WhatsApp or request a callback.',
  },
};

const hubs: Record<string, TrackHub> = { 'workday-courses': workday };

export const getHub = (trackSlug: string): TrackHub | undefined => hubs[trackSlug];
