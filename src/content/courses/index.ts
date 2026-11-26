/**
 * Course pages for the training tracks (see tracks.ts), alongside the six flagship programs in
 * programs.ts. Each course has the same full page as a program: curriculum, tools, projects,
 * certifications, careers and FAQs.
 *
 * DRAFT (Nov 2026): drafted from the standard syllabus for each technology, for the client to review
 * before going live. Fees, durations and batch dates are not listed, as on the program pages.
 */
import { servicenowCourses, type ServiceNowCourseSlug } from './servicenow';
import { salesforceCourses, type SalesforceCourseSlug } from './salesforce';
import { workdayCourses, type WorkdayCourseSlug } from './workday';
import { aiDataCourses, type AiDataCourseSlug } from './ai-data';
import { fullStackCourses, type FullStackCourseSlug } from './full-stack';

export type CourseSlug =
  ServiceNowCourseSlug | SalesforceCourseSlug | WorkdayCourseSlug | AiDataCourseSlug | FullStackCourseSlug;

export const courses = [
  ...servicenowCourses,
  ...salesforceCourses,
  ...workdayCourses,
  ...aiDataCourses,
  ...fullStackCourses,
];
