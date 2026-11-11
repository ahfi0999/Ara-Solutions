import ServiceNowPage from '../../../views/training/ServiceNowPage';
import { pageMetadata } from '../../../lib/seo';

export const metadata = pageMetadata('/training-placement/servicenow');

export default function Page() {
  return <ServiceNowPage />;
}
