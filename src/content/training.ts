/**
 * The Training & Placement page (/training-placement/), from the client's "00-Training-and-Placement-Main-Page.docx"
 * (Nov 2026). Primary keyword "it training and placement in hyderabad". Hyderabad is the only location named; no
 * course level (client decisions). Course counts, the track list, the comparison and the certifications come from the
 * course data, so they stay in step with the course pages.
 */
import type { PageSlug } from '@/content/programs';

export const trainingPage = {
  hero: {
    title: 'IT Training & Placement Courses in Hyderabad',
    accent: 'Courses in Hyderabad',
    /** `{courses}` and `{tracks}` are filled in from the course data. */
    intro:
      'ARA Solutions offers job-focused IT training and placement support from Hyderabad. Choose from {courses} courses across {tracks} tracks: Salesforce, ServiceNow, Workday, AI and Data, Cybersecurity and Full Stack with AI.',
  },
  tracks: {
    title: 'Choose your training track',
    intro:
      'Every course is taught live by working professionals, recorded for revision and built around hands-on labs, real projects and official certifications. Because ARA Solutions also runs an IT staffing business, our courses follow the skills client companies are hiring for, and our placement team refers trained learners to those openings.',
  },
  chooser: {
    title: 'Which course is right for you?',
    intro: 'Start from your background. An advisor can then match you to a course and batch on a free call.',
    rows: [
      {
        background: 'You are new to IT and have never coded',
        courses: ['salesforce-admin', 'servicenow-admin-platform', 'data-analytics'],
      },
      { background: 'You want to code', courses: ['full-stack-ai', 'python-full-stack', 'java-full-stack'] },
      {
        background: 'You have an HR or finance background',
        courses: ['workday-hcm', 'workday-finance', 'servicenow-hrsd'],
      },
      { background: 'You want to work in AI', courses: ['ai-ml', 'agentic-ai'], note: 'AI & ML first, then Agentic AI' },
      {
        background: 'You are good with business and people',
        courses: ['business-analyst-genai', 'salesforce-ba', 'ai-product-owner'],
      },
      { background: 'You want security work', courses: ['cybersecurity'] },
    ] satisfies { background: string; courses: PageSlug[]; note?: string }[],
  },
  careers: {
    title: 'IT careers and salaries in India',
    intro:
      'Each track leads to different roles and salary ranges. These are typical annual ranges for common entry and mid-level roles across our tracks.',
    salaries: [
      { role: 'Salesforce Administrator', experience: '1 to 6 years', pay: '₹2.5 L to ₹12 L' },
      { role: 'ServiceNow Administrator', experience: '1 to 7 years', pay: '₹2.7 L to ₹10 L' },
      { role: 'Workday HCM Consultant', experience: '2 to 10 years', pay: '₹4 L to ₹15.6 L' },
      { role: 'Data Analyst', experience: '0 to 6 years', pay: '₹2 L to ₹13.9 L' },
      { role: 'Full Stack Developer', experience: '0 to 7 years', pay: '₹1.8 L to ₹15.4 L' },
      { role: 'SOC Analyst', experience: '1 to 5 years', pay: '₹3 L to ₹8.9 L' },
    ],
    salaryNote:
      'Annual salary ranges from AmbitionBox (accessed November 2026). Actual pay depends on the company, city, skills and experience.',
    pathTitle: 'Your IT career path',
    path: [
      { stage: 'Start (0 to 2 years)', roles: 'Administrator, Analyst, Junior Developer or Support roles in your track' },
      { stage: 'Grow (2 to 5 years)', roles: 'Developer, Consultant, Engineer or Specialist roles' },
      { stage: 'Lead (5+ years)', roles: 'Senior Consultant, Lead, Architect or Manager roles' },
    ],
  },
  certifications: {
    title: 'Certifications across our IT courses',
    intro:
      'Each course prepares you for official certifications from the platform or body that issues them. Open a course for its exams and what you need to do to sit them.',
    note: 'You book and pay for each exam with its issuer. Some exams have their own eligibility rules, which each course page explains.',
  },
  benefits: {
    title: 'Why learn with ARA Solutions',
    items: [
      {
        title: 'Training shaped by real hiring',
        text: 'ARA also runs an IT staffing business, so our courses follow what client companies hire for.',
      },
      { title: 'Live classes, all recorded', text: 'Live, instructor-led classes on Zoom, with every class recorded.' },
      {
        title: 'Projects and certification prep',
        text: 'Hands-on projects you can show employers, plus preparation for official certifications.',
      },
      {
        title: 'Placement support',
        text: 'Resume and LinkedIn help, mock interviews and job referrals. Offers depend on your interview performance.',
      },
    ],
  },
  faqs: [
    {
      q: 'Which IT course is right for freshers?',
      a: 'Salesforce Admin, ServiceNow Admin and Data Analytics are good first courses with clear entry roles. If you enjoy coding, choose a Full Stack course.',
    },
    {
      q: 'Where is ARA Solutions located?',
      a: 'Our office is in Hyderabad. Classes run live on Zoom, and every class is recorded.',
    },
    {
      q: 'Are the IT training classes online or in a classroom?',
      a: 'Classes are live and instructor-led on Zoom, and every class is recorded so you can revise or catch up. Ask an advisor about classroom options.',
    },
    {
      q: 'Do you provide placement support after the course?',
      a: 'Yes: resume and LinkedIn help, mock interviews and job referrals through ARA’s IT staffing clients and partner companies. Offers depend on your interview performance.',
    },
    {
      q: 'Do the courses include certification preparation?',
      a: 'Yes. Each course page lists the official certifications it prepares you for and what you need to do to take each exam.',
    },
    {
      q: 'How do I choose an IT course?',
      a: 'Use the guide on this page, or talk to an advisor, who will match a course to your background and goals.',
    },
    {
      q: 'Do I need a technical degree to join?',
      a: 'No. Many of our courses suit graduates from any field.',
    },
    {
      q: 'Can working professionals join an IT course?',
      a: 'Yes. Ask an advisor about batch timings that suit working professionals.',
    },
    {
      q: 'What projects will I build in an IT course?',
      a: 'Every course includes hands-on projects you can show employers. Each course page lists its projects.',
    },
    {
      q: 'How do I find course fees and batch dates?',
      a: 'Call or WhatsApp an advisor on +91 90100 09225 for current fees and the next batch dates.',
    },
    {
      q: 'Which IT track has the most jobs in Hyderabad?',
      a: 'Salesforce, ServiceNow and data roles are all widely hired for in Hyderabad. The right choice depends on your background, so talk to an advisor.',
    },
    {
      q: 'Can I switch to IT from a non-IT career?',
      a: 'Yes. Salesforce Admin, ServiceNow Admin, Data Analytics and Business Analyst courses suit career switchers.',
    },
  ],
  closing: {
    title: 'Start your IT career with ARA Solutions',
    intro:
      'Our advisors help you choose the right course, explain fees and batch timings, and answer any question before you join.',
  },
};
