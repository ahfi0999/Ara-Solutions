import type { Metadata } from 'next';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { site, whatsappLink } from '@/content/site';
import { PageHero } from '@/components/ui/PageHero';
import { Container } from '@/components/ui/Section';
import { EnquiryForm } from '@/components/enquiry/EnquiryForm';

export const metadata: Metadata = {
  title: 'Contact ARA Solutions',
  description: `Talk to an ARA Solutions advisor about Salesforce, ServiceNow, AI, Cybersecurity and Full Stack training. Call ${site.phone} or visit us in Madhapur, Hyderabad.`,
  alternates: { canonical: '/contact/' },
};

const CHANNELS = [
  { icon: Phone, label: 'Call us', value: site.phone, href: site.phoneHref },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with our team',
    href: whatsappLink("Hi ARA Solutions, I'd like to know more about your programs."),
  },
  { icon: Mail, label: 'Email', value: site.email, href: site.emailHref },
  {
    icon: MapPin,
    label: 'Visit',
    value: `${site.address.area}, ${site.address.city}, ${site.address.region}`,
    href: site.mapsUrl,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s find the <em>right program</em> for you.
          </>
        }
        intro="Send us a few details and an advisor will call you, or reach us directly by phone, WhatsApp or email."
      />
      <section className="py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <ul className="grid content-start gap-3">
            {CHANNELS.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  {...(channel.href.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="group flex items-center gap-4 rounded-2xl border border-line bg-paper p-5 transition-shadow hover:shadow-soft"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-canvas text-navy transition-colors group-hover:bg-ink group-hover:text-white">
                    <channel.icon aria-hidden className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-muted">{channel.label}</span>
                    <span className="block truncate text-[17px] font-medium">{channel.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="rounded-3xl border border-line bg-paper p-6 shadow-soft sm:p-9">
            <h2 className="text-2xl font-semibold tracking-tight">Request a callback</h2>
            <p className="mt-1 text-muted">We&apos;ll use these details only to respond to your enquiry.</p>
            <div className="mt-7">
              <EnquiryForm submitLabel="Send enquiry" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
