import ContactPage from '../../views/ContactPage';
import { pageMetadata } from '../../lib/seo';

export const metadata = pageMetadata('/contact');

export default function Page() {
  return <ContactPage />;
}
