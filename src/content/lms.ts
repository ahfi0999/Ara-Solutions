/**
 * The ARA learning platform (LMS), as learners see it. Only features the platform actually has
 * (checked in the LMS code, ara-backend): live Zoom classes per batch, automatic class recordings,
 * per-lesson progress, an AI helper and trainer announcements.
 *
 * Not shown until ARA confirms them: how long course access lasts, completion certificates,
 * the AI helper's name, and the student login address.
 */
export const lmsFeatures = [
  {
    key: 'live',
    title: 'Live classes on Zoom',
    short: 'Live Zoom classes',
    text: 'Live classes are scheduled for your batch, with your trainer.',
  },
  {
    key: 'recorded',
    title: 'Every class recorded',
    short: 'Every class recorded',
    text: 'Missed a class? Each live class is recorded and added to your course to watch later.',
  },
  {
    key: 'progress',
    title: 'Track your progress',
    short: 'Progress tracking',
    text: 'See how far you are through each program, lesson by lesson.',
  },
  {
    key: 'ai',
    title: 'AI study helper',
    short: 'AI study helper',
    text: 'Ask questions while you study, right inside the platform.',
  },
  {
    key: 'updates',
    title: 'Trainer updates',
    short: 'Trainer updates',
    text: 'Announcements from your trainer for your batch, in one place.',
  },
] as const;

export type LmsFeatureKey = (typeof lmsFeatures)[number]['key'];

export const lmsIntro =
  'Every program runs on our own learning platform: join live classes, catch up on recordings and track your progress in one place.';
