import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, Minus } from 'lucide-react';
import { programs, type ProgramSlug } from '@/content/programs';
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
  title: 'Training & Placement: Salesforce, ServiceNow, AI, Cybersecurity & Full Stack',
  description:
    'Compare ARA Solutions programs: Salesforce with Agentforce, ServiceNow, AI & Machine Learning, Agentic AI, Cybersecurity and Full Stack Development with AI.',
  alternates: { canonical: '/training-placement/' },
};

/** Hand-written comparison rows. Programs without one get a row generated from their own data. */
const COMPARE: Partial<Record<ProgramSlug, { bestFor: string; coding: string; certification: boolean; ai: string }>> =
  {
    salesforce: {
      bestFor: 'CRM and enterprise application careers',
      coding: 'No',
      certification: true,
      ai: 'Agentforce',
    },
    servicenow: {
      bestFor: 'IT service management careers',
      coding: 'No',
      certification: true,
      ai: 'Now Assist',
    },
    'ai-ml': {
      bestFor: 'Building ML and Generative AI applications',
      coding: 'No, Python is taught',
      certification: false,
      ai: 'Core of the program',
    },
    'agentic-ai': {
      bestFor: 'Building autonomous AI agents',
      coding: 'Basic Python',
      certification: false,
      ai: 'Core of the program',
    },
    cybersecurity: {
      bestFor: 'Security operations and cloud security careers',
      coding: 'No',
      certification: true,
      ai: 'Not a focus',
    },
    'full-stack-ai': {
      bestFor: 'Software and web development careers',
      coding: 'No',
      certification: false,
      ai: 'AI features & AI-assisted coding',
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
        intro="Enterprise platforms, AI, security and development. Every program includes hands-on projects, interview preparation and placement assistance."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <ProgramExplorer search />
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <Container>
          <SectionHeading
            eyebrow="Compare"
            title={
              <>
                Programs <em>side by side</em>
              </>
            }
          />
          <div className="mt-10 overflow-x-auto rounded-3xl border border-line bg-paper shadow-soft">
            <table className="w-full min-w-[760px] text-left">
              <caption className="sr-only">Comparison of ARA Solutions programs</caption>
              <thead>
                <tr className="border-b border-line text-[13px] text-muted">
                  <th scope="col" className="p-5 font-medium">
                    Program
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
                {programs.map((program) => {
                  const row = COMPARE[program.slug] ?? {
                    bestFor: program.tagline,
                    coding: 'Ask an advisor',
                    certification: Boolean(program.certifications?.length),
                    ai: program.family === 'AI' ? 'Core of the program' : '—',
                  };
                  return (
                    <tr key={program.slug} className="border-b border-line last:border-0">
                      <th scope="row" className="p-5">
                        <Link
                          href={`/training-placement/${program.slug}/`}
                          className="group flex items-center gap-3"
                        >
                          <span className={cn('size-2 shrink-0 rounded-full', accent[program.accent].dot)} />
                          <span className="text-[15px] font-semibold tracking-tight group-hover:underline">
                            {program.shortName}
                          </span>
                        </Link>
                      </th>
                      <td className="p-5 text-[15px] text-muted">{row.bestFor}</td>
                      <td className="p-5 text-[15px]">{row.coding}</td>
                      <td className="p-5">{row.certification ? <Yes /> : <No />}</td>
                      <td className="p-5 text-[15px]">{row.ai}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-faint">
            All programs include hands-on projects, interview preparation and placement assistance.
          </p>
        </Container>
      </section>

      <LmsPlatform />
      <ProgramFinder />
      <Journey />
      <AlumniMarquee className="border-t border-line" />
      <ClosingCta />
    </>
  );
}
