import { getProgram, type PageSlug, type Program } from './programs';

/**
 * Training tracks and their courses, from the client's course list (Nov 2026), in the client's order.
 * A course is either a page with its full syllabus (`program`: a flagship program in programs.ts or a
 * course in courses/), or a course listed without a page yet (`course`): it leads to its card on the
 * track page, where visitors can ask an advisor about it. `label` is the client's name for the course
 * in the menu. Courses the client marked "(New)" get a New badge.
 *
 * Labels match the courses' own short names, so a course has the same name in the menu, on the cards and on its
 * page (Nov 2026: the old menu names "Salesforce Masters", another institute's brand, and "ServiceNow Masters & AI"
 * were dropped).
 */

export type TrackCourse =
  | { kind: 'program'; slug: PageSlug; label?: string; text?: string; isNew?: boolean }
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
      { kind: 'program', slug: 'servicenow-admin-platform', label: 'ServiceNow Admin' },
      { kind: 'program', slug: 'servicenow-itsm-development', label: 'ServiceNow ITSM Development' },
      { kind: 'program', slug: 'servicenow', label: 'ServiceNow Masters' },
      { kind: 'program', slug: 'servicenow-hrsd', label: 'ServiceNow HRSD' },
      { kind: 'program', slug: 'servicenow-crm', label: 'ServiceNow CRM', isNew: true },
      { kind: 'program', slug: 'servicenow-grc', label: 'ServiceNow GRC' },
      { kind: 'program', slug: 'servicenow-fdse', label: 'ServiceNow FDSE' },
      { kind: 'program', slug: 'servicenow-ba', label: 'ServiceNow BA' },
    ],
    page: true,
  },
  {
    slug: 'salesforce-courses',
    name: 'Salesforce',
    intro:
      'Salesforce courses for administrators, developers and business analysts, including Agentforce, the platform’s AI agents.',
    courses: [
      { kind: 'program', slug: 'salesforce-admin', label: 'Salesforce Admin' },
      { kind: 'program', slug: 'salesforce', label: 'Salesforce Admin & Developer' },
      { kind: 'program', slug: 'salesforce-fde', label: 'Salesforce FDE', isNew: true },
      { kind: 'program', slug: 'salesforce-ba', label: 'Salesforce BA' },
    ],
    page: true,
  },
  {
    slug: 'workday-courses',
    name: 'Workday',
    intro: 'Workday courses for HCM, Finance and Integration roles.',
    courses: [
      { kind: 'program', slug: 'workday-hcm', label: 'Workday HCM' },
      { kind: 'program', slug: 'workday-finance', label: 'Workday Finance', isNew: true },
      { kind: 'program', slug: 'workday-integration', label: 'Workday Integration', isNew: true },
    ],
    page: true,
  },
  {
    slug: 'security',
    name: 'Cybersecurity',
    intro: '',
    courses: [{ kind: 'program', slug: 'cybersecurity', label: 'Cybersecurity' }],
    page: false,
  },
  {
    slug: 'ai-and-data-courses',
    name: 'AI & Data',
    intro:
      'Courses for the roles companies are hiring for in AI and data: machine learning, data science, data engineering, data analytics, AI engineering and AI product ownership.',
    courses: [
      { kind: 'program', slug: 'ai-ml', label: 'AI & Machine Learning' },
      { kind: 'program', slug: 'data-science', label: 'Data Science' },
      { kind: 'program', slug: 'data-engineering', label: 'Data Engineering' },
      { kind: 'program', slug: 'data-analytics', label: 'Data Analytics' },
      { kind: 'program', slug: 'agentic-ai', label: 'Agentic AI Engineering' },
      { kind: 'program', slug: 'ai-product-owner', label: 'AI Product Owner' },
    ],
    page: true,
  },
  {
    slug: 'full-stack-courses',
    name: 'Full Stack with AI',
    intro:
      'Full stack development with AI built in, in the stack you want to work in: Python, Java or MERN (React and Node.js), plus business analysis with generative AI.',
    courses: [
      { kind: 'program', slug: 'python-full-stack', label: 'Python Full Stack with AI' },
      { kind: 'program', slug: 'java-full-stack', label: 'Java Full Stack with AI' },
      {
        kind: 'program',
        slug: 'full-stack-ai',
        label: 'MERN Full Stack with AI',
        text: 'React + Node.js + databases',
      },
      { kind: 'program', slug: 'business-analyst-genai', label: 'Business Analyst with GenAI' },
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

/** The track that lists a course or program (the first one, if several do). */
export const trackOf = (slug: string) =>
  tracks.find((track) => track.courses.some((course) => course.kind === 'program' && course.slug === slug));

/** A track's courses listed without their own page yet. */
export const trackListedCourses = (track: Track) =>
  track.courses.filter(
    (course): course is Extract<TrackCourse, { kind: 'course' }> => course.kind === 'course',
  );
