import { getProgram, type Program, type ProgramSlug } from './programs';

/**
 * Training tracks and their courses, from the client's course list (Nov 2026), in the client's order.
 * A course is either a full program with its own page (`program`), or a course listed without a page
 * yet (`course`): it leads to its track page, where visitors can ask an advisor about it. Courses the
 * client marked "(New)" get a New badge.
 *
 * PREVIEW: which existing program page stands for which course is our mapping (to confirm), e.g.
 * the ServiceNow program page is shown as "ServiceNow Masters & AI". Turn a `course` into a `program`
 * once its full content exists in programs.ts.
 */

export type TrackCourse =
  | { kind: 'program'; slug: ProgramSlug; label?: string; text?: string }
  | { kind: 'course'; id: string; name: string; isNew?: boolean };

export type Track = {
  slug: string;
  name: string;
  /** Intro on the track page. */
  intro: string;
  courses: TrackCourse[];
  /** Tracks with several courses get their own page at /training-placement/<slug>/. */
  page: boolean;
};

export const tracks: Track[] = [
  {
    slug: 'servicenow-courses',
    name: 'ServiceNow',
    intro:
      'ServiceNow courses for administrators, developers, consultants and analysts: from the core platform and ITSM to HR Service Delivery, CRM, GRC and AI.',
    courses: [
      { kind: 'course', id: 'servicenow-admin-platform', name: 'ServiceNow Admin Platform' },
      { kind: 'course', id: 'servicenow-itsm-development', name: 'ServiceNow ITSM Development' },
      { kind: 'program', slug: 'servicenow', label: 'ServiceNow Masters & AI' },
      { kind: 'course', id: 'servicenow-hrsd', name: 'ServiceNow HRSD' },
      { kind: 'course', id: 'servicenow-crm', name: 'ServiceNow CRM', isNew: true },
      { kind: 'course', id: 'servicenow-grc', name: 'ServiceNow GRC' },
      { kind: 'course', id: 'servicenow-fdse', name: 'ServiceNow FDSE' },
      { kind: 'course', id: 'servicenow-ba', name: 'ServiceNow BA' },
    ],
    page: true,
  },
  {
    slug: 'salesforce-courses',
    name: 'Salesforce',
    intro:
      'Salesforce courses for administrators, developers and business analysts, including Agentforce, the platform’s AI agents.',
    courses: [
      { kind: 'course', id: 'salesforce-admin', name: 'Salesforce Admin' },
      { kind: 'program', slug: 'salesforce', label: 'Salesforce Masters & Agentforce' },
      { kind: 'course', id: 'salesforce-fde', name: 'Salesforce FDE', isNew: true },
      { kind: 'course', id: 'salesforce-ba', name: 'Salesforce BA' },
    ],
    page: true,
  },
  {
    slug: 'workday-courses',
    name: 'Workday',
    intro: 'Workday courses for HCM, Finance and Integration roles.',
    courses: [
      { kind: 'course', id: 'workday-hcm', name: 'Workday Techno-functional (HCM)' },
      { kind: 'course', id: 'workday-finance', name: 'Workday Finance', isNew: true },
      { kind: 'course', id: 'workday-integration', name: 'Workday Integration', isNew: true },
    ],
    page: true,
  },
  {
    slug: 'security',
    name: 'Security',
    intro: '',
    courses: [{ kind: 'program', slug: 'cybersecurity', label: 'Cybersecurity & AI Agents' }],
    page: false,
  },
  {
    slug: 'ai-and-data-courses',
    name: 'AI & Data',
    intro:
      'Courses for the roles companies are hiring for in AI and data: machine learning, data science, data engineering, data analytics, AI engineering and AI product ownership.',
    courses: [
      { kind: 'program', slug: 'ai-ml', label: 'AI/ML' },
      { kind: 'course', id: 'data-science', name: 'Data Science' },
      { kind: 'course', id: 'data-engineering', name: 'Data Engineering' },
      { kind: 'course', id: 'data-analytics', name: 'Data Analytics' },
      { kind: 'program', slug: 'agentic-ai', label: 'AI Engineering' },
      { kind: 'course', id: 'ai-product-owner', name: 'AI Product Owner' },
    ],
    page: true,
  },
  {
    slug: 'full-stack-courses',
    name: 'Full Stack with AI',
    intro:
      'Full stack development with AI built in, in the stack you want to work in: Python, Java or MERN (React and Node.js), plus business analysis with generative AI.',
    courses: [
      { kind: 'course', id: 'python-full-stack', name: 'Python Full Stack with AI' },
      { kind: 'course', id: 'java-full-stack', name: 'Java Full Stack with AI' },
      {
        kind: 'program',
        slug: 'full-stack-ai',
        label: 'MERN Stack with AI',
        text: 'React + Node.js + databases',
      },
      { kind: 'course', id: 'business-analyst-genai', name: 'Business Analyst with GenAI' },
    ],
    page: true,
  },
];

export const getTrack = (slug: string) => tracks.find((track) => track.slug === slug);
export const trackPages = () => tracks.filter((track) => track.page);
export const trackHref = (track: Track) => `/training-placement/${track.slug}/`;

/** A track's full programs (with their own pages), with their full content. */
export const trackPrograms = (track: Track) =>
  track.courses.flatMap((course) => {
    if (course.kind !== 'program') return [];
    const program = getProgram(course.slug);
    return program ? [{ entry: course, program }] : [];
  }) as { entry: Extract<TrackCourse, { kind: 'program' }>; program: Program }[];

/** A track's courses listed without their own page yet. */
export const trackListedCourses = (track: Track) =>
  track.courses.filter(
    (course): course is Extract<TrackCourse, { kind: 'course' }> => course.kind === 'course',
  );
