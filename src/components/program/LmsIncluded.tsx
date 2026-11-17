import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { lmsFeatures } from '@/content/lms';
import { Container } from '@/components/ui/Section';
import { LMS_ICONS } from '@/components/program/lmsIcons';

/** A strip under each program's hero: what every program includes on the learning platform. */
export function LmsIncluded() {
  return (
    <section aria-labelledby="lms-included" className="border-b border-line bg-paper py-6">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
          <h2 id="lms-included" className="text-[15px] font-semibold tracking-tight">
            Included with every program
          </h2>
          <Link
            href="/training-placement/#learning-platform"
            className="inline-flex items-center gap-1.5 text-[14px] font-medium text-brand hover:text-ink"
          >
            How the platform works
            <ArrowRight aria-hidden className="size-4" />
          </Link>
        </div>
        <ul className="mt-4 flex flex-wrap gap-2">
          {lmsFeatures.map((feature) => {
            const Icon = LMS_ICONS[feature.key];
            return (
              <li
                key={feature.key}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-canvas px-3.5 py-1.5 text-[14px]"
              >
                <Icon aria-hidden className="size-4 text-brand" />
                {feature.short}
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
