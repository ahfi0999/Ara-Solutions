import type { Metadata } from 'next';
import { site } from '@/content/site';
import { PageHero } from '@/components/ui/PageHero';
import { Container } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Privacy Notice',
  description: 'How ARA Solutions handles the personal information you share through this website.',
  alternates: { canonical: '/privacy/' },
};

// Plain-language notice describing what this website actually does. Have it reviewed
// by your legal adviser before launch.
const SECTIONS = [
  {
    title: 'What we collect',
    body: 'When you submit an enquiry we collect the details you enter: your name, phone number, optional email address, the program you are interested in, your background and any message you write. We also record the page you submitted the form from.',
  },
  {
    title: 'Why we collect it',
    body: 'We use these details only to respond to your enquiry, for example to call you about a program, share course information, or discuss hiring needs.',
  },
  {
    title: 'Where it goes',
    body: 'Enquiries are delivered to the ARA Solutions team through the services we use to receive them, such as email, a spreadsheet or our CRM. We do not sell your information.',
  },
  {
    title: 'WhatsApp and phone',
    body: 'If you contact us on WhatsApp or by phone, those conversations are handled by those services under their own privacy terms.',
  },
  {
    title: 'Your choices',
    body: `You can ask us to update or delete your information, or stop contacting you, at any time by emailing ${site.email}.`,
  },
  {
    title: 'Cookies',
    body: 'This website does not use advertising or tracking cookies.',
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title={
          <>
            Privacy <em>notice</em>
          </>
        }
        intro="How we handle the information you share with us."
      />
      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <div className="space-y-10">
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-semibold tracking-tight">{section.title}</h2>
                <p className="mt-3 text-lg leading-relaxed text-muted">{section.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-14 border-t border-line pt-6 text-sm text-faint">
            Questions about this notice? Contact {site.email} or {site.phone}.
          </p>
        </Container>
      </section>
    </>
  );
}
