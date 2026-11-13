import type { Metadata } from 'next';
import { Briefcase, MapPin, Plus } from 'lucide-react';
import { careersCulture } from '@/content/company';
import { jobOpenings } from '@/content/records';
import { site } from '@/content/site';
import { PageHero } from '@/components/ui/PageHero';
import { Container, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { ButtonLink } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join ARA Solutions: open roles for recruiters, account managers, trainers and technology professionals in Hyderabad, Bangalore and remote.',
  alternates: { canonical: '/careers/' },
};

/** Applications go by email, with the role in the subject line, so they reach the team directly. */
const applyLink = (role: string) =>
  `${site.emailHref}?subject=${encodeURIComponent(`Application: ${role}`)}&body=${encodeURIComponent(
    `Hi ARA Solutions team,\n\nI'd like to apply for the ${role} role. My resume is attached.\n\nName:\nPhone:\nLinkedIn:\n`,
  )}`;

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Build ambition <em>with us.</em>
          </>
        }
        intro={careersCulture.intro}
      >
        <ButtonLink href="#openings" size="lg" arrow>
          See open positions
        </ButtonLink>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Why ARA" title="Why build your career with us" />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {careersCulture.values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.06} className="h-full">
                <div className="h-full rounded-2xl border border-line bg-paper p-7 shadow-soft">
                  <span className="font-mono text-[12px] text-faint">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight">{value.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="openings" className="border-t border-line bg-paper py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Open positions"
              title={
                <>
                  Current <em>openings</em>
                </>
              }
              intro={careersCulture.closing}
            />
            <p className="mt-6 text-[15px] text-muted">
              Don&apos;t see the right role? Email your resume to{' '}
              <a href={site.emailHref} className="font-medium text-text underline underline-offset-2">
                {site.email}
              </a>
              .
            </p>
          </div>
          <div className="divide-y divide-line border-y border-line">
            {jobOpenings.map((job) => (
              <details key={job.id} className="group">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                  <span>
                    <span className="block text-xl font-semibold tracking-tight">{job.title}</span>
                    <span className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted">
                      <span className="flex items-center gap-1.5">
                        <Briefcase aria-hidden className="size-4" /> {job.department} · {job.type}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin aria-hidden className="size-4" /> {job.location}
                      </span>
                    </span>
                  </span>
                  <span className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full border border-line transition-all duration-300 group-open:rotate-45 group-open:border-text group-open:bg-text group-open:text-white">
                    <Plus aria-hidden className="size-4" />
                  </span>
                </summary>
                <div className="pb-8">
                  <p className="text-[15px] leading-relaxed text-muted">{job.description}</p>
                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    {[
                      ['Responsibilities', job.responsibilities],
                      ['Requirements', job.requirements],
                    ].map(([label, items]) => (
                      <div key={label as string}>
                        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                          {label as string}
                        </p>
                        <ul className="mt-3 space-y-2 text-[14.5px] leading-relaxed">
                          {(items as string[]).map((item) => (
                            <li key={item} className="flex gap-2.5">
                              <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <ButtonLink href={applyLink(job.title)} variant="dark" className="mt-7" arrow>
                    Apply by email
                  </ButtonLink>
                </div>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
