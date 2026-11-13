import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getService, services } from '@/content/services';
import { site } from '@/content/site';
import {
  EngagementComparison,
  RoleCoverage,
  ServiceCards,
  ServiceHero,
  ServicePillars,
  ServiceProcess,
  ServiceStory,
} from '@/components/services/ServiceSections';
import { ClosingCta } from '@/components/home/ClosingCta';
import { Container, SectionHeading } from '@/components/ui/Section';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.name} in Hyderabad`,
    description: `${service.summary} ARA Solutions, Hyderabad.`,
    alternates: { canonical: `/services/${service.slug}/` },
    openGraph: { title: service.name, description: service.summary, url: `/services/${service.slug}/` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.summary,
    provider: { '@type': 'Organization', name: site.name, url: site.url },
    areaServed: ['India', 'United States', 'United Kingdom'],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ServiceHero service={service} />
      <ServiceStory service={service} />
      <ServicePillars service={service} />
      {service.slug === 'fulltime-staffing' && <RoleCoverage />}
      <ServiceProcess service={service} />
      {(service.slug === 'fulltime-staffing' || service.slug === 'corp-to-corp') && (
        <EngagementComparison highlight={service.slug} />
      )}
      <ClosingCta defaultInterest={service.slug} title={service.closing.title} intro={service.closing.text} />
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="More services" title="Other ways we can help" />
          <div className="mt-10">
            <ServiceCards exclude={service.slug} />
          </div>
        </Container>
      </section>
    </>
  );
}
