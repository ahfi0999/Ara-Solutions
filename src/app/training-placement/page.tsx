import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, Minus } from 'lucide-react';
import { allPrograms } from '@/content/programs';
import { trackHref, trackPrograms, tracks } from '@/content/tracks';
import { seoFor } from '@/content/seo';
import { accent } from '@/lib/accent';
import { cn } from '@/lib/cn';
import { Container, SectionHeading } from '@/components/ui/Section';
import { PageHero } from '@/components/ui/PageHero';
import { ProgramExplorer } from '@/components/home/ProgramExplorer';
import { ProgramFinder } from '@/components/home/ProgramFinder';
import { ClosingCta } from '@/components/home/ClosingCta';
import { AlumniMarquee } from '@/components/home/AlumniMarquee';
import { Journey } from '@/components/home/Journey';
import { LmsPlatform } from '@/components/program/LmsPlatform';

export const metadata: Metadata = {
  ...seoFor('/training-placement/'),
  alternates: { canonical: '/training-placement/' },
};

/**
 * The comparison, one row per training track (hand-written; checked against the courses' own pages).
 * A track without a row here gets one generated from its courses.
 */
const TRACK_COMPARE: Record<string, { bestFor: string; coding: string; ai: string }> = {
  'servicenow-courses': {
    bestFor: 'IT, HR, customer service and risk platform careers',
    coding: 'No, except the developer and FDSE courses',
    ai: 'Now Assist and AI agents',
  },
  'salesforce-courses': {
    bestFor: 'CRM and enterprise application careers',
    coding: 'No, except the FDE course',
    ai: 'Agentforce',
  },
  'workday-courses': {
    bestFor: 'HR, finance and integration roles on Workday',
    coding: 'No, except Integration',
    ai: 'Not a focus',
  },
  security: {
    bestFor: 'Security operations and cloud security careers',
    coding: 'No',
    ai: 'Not a focus',
  },
  'ai-and-data-courses': {
    bestFor: 'AI, machine learning, data and AI product careers',
    coding: 'No, Python is taught',
    ai: 'Core of the track',
  },
  'full-stack-courses': {
    bestFor: 'Software development and business analysis careers',
    coding: 'No',
    ai: 'AI features & AI-assisted work',
  },
};

const Yes = () => <Check aria-label="Yes" className="size-5 text-emerald-600" />;
const No = () => <Minus aria-label="No" className="size-5 text-faint" />;

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Training & placement"
        title={
          <>
            Programs built for <em>real job roles.</em>
          </>
        }
        intro={`${allPrograms.length} courses across ServiceNow, Salesforce, Workday, security, AI & data and full stack development. Every course includes hands-on projects, interview preparation and placement assistance.`}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <ProgramExplorer search overview />
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <Container>
          <SectionHeading
            eyebrow="Compare"
            title={
              <>
                Tracks <em>side by side</em>
              </>
            }
          />
          <div className="mt-10 overflow-x-auto rounded-3xl border border-line bg-paper shadow-soft">
            <table className="w-full min-w-[860px] text-left">
              <caption className="sr-only">Comparison of ARA Solutions training tracks</caption>
              <thead>
                <tr className="border-b border-line text-[13px] text-muted">
                  <th scope="col" className="p-5 font-medium">
                    Track
                  </th>
                  <th scope="col" className="p-5 font-medium">
                    Courses
                  </th>
                  <th scope="col" className="p-5 font-medium">
                    Best for
                  </th>
                  <th scope="col" className="p-5 font-medium">
                    Coding needed to start
                  </th>
                  <th scope="col" className="p-5 font-medium">
                    Certification prep
                  </th>
                  <th scope="col" className="p-5 font-medium">
                    AI in the curriculum
                  </th>
                </tr>
              </thead>
              <tbody>
                {tracks.map((track) => {
                  const courses = trackPrograms(track).map(({ program }) => program);
                  const row = TRACK_COMPARE[track.slug] ?? {
                    bestFor: track.intro,
                    coding: 'Ask an advisor',
                    ai: '—',
                  };
                  const href = track.page
                    ? trackHref(track)
                    : `/training-placement/${courses[0]?.slug ?? ''}/`;
                  return (
                    <tr key={track.slug} className="border-b border-line last:border-0">
                      <th scope="row" className="p-5">
                        <Link href={href} className="group flex items-center gap-3">
                          <span
                            className={cn(
                              'size-2 shrink-0 rounded-full',
                              accent[courses[0]?.accent ?? 'indigo'].dot,
                            )}
                          />
                          <span className="text-[15px] font-semibold tracking-tight group-hover:underline">
                            {track.name}
                          </span>
                        </Link>
                      </th>
                      <td className="p-5 text-[15px] tabular-nums">{courses.length}</td>
                      <td className="p-5 text-[15px] text-muted">{row.bestFor}</td>
                      <td className="p-5 text-[15px]">{row.coding}</td>
                      <td className="p-5">
                        {courses.some((course) => course.certifications?.length) ? <Yes /> : <No />}
                      </td>
                      <td className="p-5 text-[15px]">{row.ai}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-faint">
            All courses include hands-on projects, interview preparation and placement assistance.
          </p>
        </Container>
      </section>

      <LmsPlatform />
      <ProgramFinder />
      <Journey />
      <AlumniMarquee className="border-t border-line" />
      <ClosingCta line="training" />
    </>
  );
}
