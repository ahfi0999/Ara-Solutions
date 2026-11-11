import { ROUTES, SITE_URL } from '../lib/seo';

export const dynamic = 'force-static';

// /services/training-placement duplicates /training-placement, so only the main URL is listed.
export default function sitemap() {
  return ROUTES.filter((path) => path !== '/services/training-placement').map((path) => ({
    url: `${SITE_URL}${path === '/' ? '' : path}/`,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }));
}
