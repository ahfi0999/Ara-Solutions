import AboutPage from '../../../views/company/AboutPage';
import { pageMetadata } from '../../../lib/seo';

export const metadata = pageMetadata('/company/about');

export default function Page() {
  return <AboutPage />;
}
