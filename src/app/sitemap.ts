import type { MetadataRoute } from 'next';
import { programs } from '@/content/programs';
import { services } from '@/content/services';
import { site } from '@/content/site';
import { siteUpdated } from '@/content/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    '/',
    '/services/',
    ...services.map((s) => `/services/${s.slug}/`),
    '/training-placement/',
    ...programs.map((p) => `/training-placement/${p.slug}/`),
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
