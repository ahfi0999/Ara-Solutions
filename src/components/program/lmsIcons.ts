import { CirclePlay, ListChecks, Megaphone, Sparkles, Video, type LucideIcon } from 'lucide-react';
import type { LmsFeatureKey } from '@/content/lms';

/** One icon per learning-platform feature, shared by the Training page section and the program pages. */
export const LMS_ICONS: Record<LmsFeatureKey, LucideIcon> = {
  live: Video,
  recorded: CirclePlay,
  progress: ListChecks,
  ai: Sparkles,
  updates: Megaphone,
};
