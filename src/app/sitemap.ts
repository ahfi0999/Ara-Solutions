import type { MetadataRoute } from 'next';
import { allPrograms } from '@/content/programs';
import { services } from '@/content/services';
import { site } from '@/content/site';
import { siteUpdated } from '@/content/seo';
import { trackPages, trackPrograms } from '@/content/tracks';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    '/',
    '/services/',
    ...services.map((s) => `/services/${s.slug}/`),
    '/training-placement/',
    // Program and course pages, each with its full syllabus.
    ...allPrograms.map((p) => `/training-placement/${p.slug}/`),
    // Track pages with at least one full program page (others stay out until they have one).
    ...trackPages()
      .filter((t) => trackPrograms(t).length > 0)
      .map((t) => `/training-placement/${t.slug}/`),
    '/company/about/',
    '/company/approach/',
    '/company/case-studies/',
    '/careers/',
    '/contact/',
    '/privacy/',
  ];
  return pages.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: siteUpdated,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : /^\/(services|training-placement)\//.test(path) ? 0.9 : 0.6,
  }));
}
