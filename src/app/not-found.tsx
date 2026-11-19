import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/content/services';
import { Container } from '@/components/ui/Section';
import { DarkHeroBackdrop } from '@/components/motion/DarkHeroBackdrop';

/** A missing page must never be indexed (overrides the site-wide "index, follow"). */
export const metadata: Metadata = { robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <section className="aurora relative isolate flex min-h-[80vh] items-center overflow-hidden pb-20 pt-32 text-white">
      <DarkHeroBackdrop />
      <Container className="text-center">
        <p className="font-mono text-sm text-brand-300">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
          This page doesn&apos;t exist.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg text-white/65">
          It may have moved. Here are some places to start instead.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex h-11 items-center rounded-full bg-white px-5 font-medium text-ink"
          >
            Go home
          </Link>
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}/`}
              className="inline-flex h-11 items-center rounded-full border border-white/20 px-5 text-white/85 hover:border-white/40"
            >
              {service.shortName}
            </Link>
          ))}
          <Link
            href="/training-placement/"
            className="inline-flex h-11 items-center rounded-full border border-white/20 px-5 text-white/85 hover:border-white/40"
          >
            Training & Placement
          </Link>
        </div>
      </Container>
    </section>
  );
}
