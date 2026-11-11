import CaseStudiesPage from '../../../views/company/CaseStudiesPage';
import { pageMetadata } from '../../../lib/seo';

export const metadata = pageMetadata('/company/case-studies');

export default function Page() {
  return <CaseStudiesPage />;
}
