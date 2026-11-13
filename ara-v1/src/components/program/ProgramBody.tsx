import {
  Award,
  BriefcaseBusiness,
  Check,
  Clock3,
  GraduationCap,
  Layers,
  MessageCircle,
  Plus,
  Wallet,
} from 'lucide-react';
import type { Program } from '@/content/programs';
import { whatsappLink } from '@/content/site';
import { accent } from '@/lib/accent';
import { cn } from '@/lib/cn';
import { Reveal } from '@/components/ui/Reveal';
import { EnquiryButton } from '@/components/enquiry/EnquiryProvider';

function Block({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-36 border-t border-line pt-12 first:border-t-0 first:pt-0"
    >
      <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-brand">{eyebrow}</p>
      <h2 id={`${id}-title`} className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
        {title}
      </h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}

/** "Program at a glance": facts plus the main calls to action. Sticky on desktop. */
function GlanceCard({ program }: { program: Program }) {
  const ask = 'Ask an advisor';
  const facts = [
    { icon: GraduationCap, label: 'Level', value: program.level },
    { icon: Layers, label: 'Format', value: program.details?.mode ?? 'Instructor-led with hands-on labs' },
    { icon: Clock3, label: 'Duration & batches', value: program.details?.duration ?? ask },
    { icon: Wallet, label: 'Fees', value: program.details?.fees ?? ask },
    { icon: BriefcaseBusiness, label: 'Career support', value: 'Interview prep + placement assistance' },
  ];
  return (
    <div className="rounded-3xl border border-line bg-paper p-6 shadow-soft sm:p-7">
      <p className="text-lg font-semibold tracking-tight">Program at a glance</p>
      <dl className="mt-5 space-y-4">
        {facts.map((fact) => (
          <div key={fact.label} className="flex gap-3">
            <fact.icon aria-hidden className="mt-0.5 size-5 shrink-0 text-faint" />
            <div>
              <dt className="text-[13px] text-muted">{fact.label}</dt>
              <dd className={cn('text-[15px] font-medium', fact.value === ask && 'text-brand')}>
                {fact.value}
              </dd>
            </div>
          </div>
        ))}
      </dl>
      <div className="mt-5 rounded-2xl bg-canvas p-4 text-[13px] leading-relaxed text-muted">
        <span className="font-medium text-text">Prerequisites: </span>
        {program.prerequisites}
      </div>
      <div className="mt-6 grid gap-2.5">
        <EnquiryButton
          interest={program.slug}
          title={`Talk to an advisor about ${program.shortName}`}
          className="w-full"
        >
          Talk to an advisor
        </EnquiryButton>
        <a
          href={whatsappLink(
            `Hi ARA Solutions, I'm interested in the ${program.name} program. Please share fees and batch details.`,
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-line text-[15px] font-medium text-[#178f45] transition-colors hover:border-[#1faa53]"
        >
          <MessageCircle aria-hidden className="size-4" /> Ask on WhatsApp
        </a>
      </div>
    </div>
  );
}

export function ProgramBody({ program }: { program: Program }) {
  const a = accent[program.accent];
  return (
    <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_340px] lg:gap-16">
      <div className="min-w-0 space-y-12">
        <Block id="overview" eyebrow="Overview" title="Who this program is for">
          <div className="grid gap-4 sm:grid-cols-3">
            {program.audience.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06} className="h-full">
                <div className="h-full rounded-2xl border border-line bg-paper p-5">
                  <span className={cn('block size-2 rounded-full', a.dot)} />
                  <h3 className="mt-4 font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <h3 className="mt-12 text-xl font-semibold tracking-tight">What you&apos;ll be able to do</h3>
          <ul className="mt-5 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
            {program.outcomes.map((outcome) => (
              <li key={outcome} className="flex gap-3 text-[15px] leading-relaxed">
                <span
                  className={cn(
                    'mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full',
                    a.soft,
                  )}
                >
                  <Check aria-hidden className="size-3" strokeWidth={3} />
                </span>
                {outcome}
              </li>
            ))}
          </ul>
        </Block>

        <Block
          id="curriculum"
          eyebrow="Curriculum"
          title={`${program.modules.length} modules, from fundamentals to career-ready`}
        >
          <ol className="space-y-3">
            {program.modules.map((module, index) => (
              <li key={module.title}>
                <details
                  className="group rounded-2xl border border-line bg-paper transition-shadow open:shadow-soft"
                  open={index === 0}
                >
                  <summary className="flex cursor-pointer list-none items-center gap-5 p-5 sm:p-6 [&::-webkit-details-marker]:hidden">
                    <span className="font-mono text-sm text-faint">{String(index + 1).padStart(2, '0')}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[17px] font-semibold tracking-tight">{module.title}</span>
                      <span className="mt-0.5 block text-sm text-muted">{module.summary}</span>
                    </span>
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-line transition-all duration-300 group-open:rotate-45 group-open:border-text group-open:bg-text group-open:text-white">
                      <Plus aria-hidden className="size-4" />
                    </span>
                  </summary>
                  <ul className="flex flex-wrap gap-2 px-5 pb-6 sm:pl-[4.25rem] sm:pr-6">
                    {module.topics.map((topic) => (
                      <li key={topic} className="rounded-full bg-canvas px-3 py-1.5 text-[13px] text-text/80">
                        {topic}
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ))}
          </ol>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-ink p-5 text-white sm:p-6">
            <p className="text-[15px] text-white/80">Want the full module-by-module syllabus?</p>
            <EnquiryButton
              variant="light"
              interest={program.slug}
              title={`Get the detailed ${program.shortName} syllabus`}
            >
              Request the syllabus
            </EnquiryButton>
          </div>
        </Block>

        <Block id="tools" eyebrow="Tools & technologies" title="What you'll work with">
          <ul className="flex flex-wrap gap-2.5">
            {program.tools.map((tool) => (
              <li
                key={tool}
                className="rounded-xl border border-line bg-paper px-4 py-2.5 text-[15px] font-medium"
              >
                {tool}
              </li>
            ))}
          </ul>
        </Block>

        <Block id="projects" eyebrow="Projects" title="Build things you can show employers">
          <div className="grid gap-4 md:grid-cols-3">
            {program.projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.06} className="h-full">
                <article className="flex h-full flex-col rounded-2xl bg-ink p-6 text-white">
                  <span className="font-mono text-[12px] text-white/40">
                    Project {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight">{project.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-white/60">{project.text}</p>
                  <ul className="mt-auto flex flex-wrap gap-1.5 pt-6">
                    {project.stack.map((item) => (
                      <li
                        key={item}
                        className={cn(
                          'rounded-md bg-white/[0.07] px-2 py-1 font-mono text-[11px]',
                          a.textOnDark,
                        )}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </Block>

        {program.certifications && (
          <Block id="certifications" eyebrow="Certifications" title="Prepare for official certifications">
            <ul className="grid gap-3 sm:grid-cols-2">
              {program.certifications.map((cert) => (
                <li key={cert.name} className="flex gap-4 rounded-2xl border border-line bg-paper p-5">
                  <Award aria-hidden className={cn('size-6 shrink-0', a.text)} />
                  <div>
                    <p className="font-semibold tracking-tight">{cert.name}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{cert.note}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-faint">
              Certification exams are booked directly with the certifying organisation. Exam fees are not
              included unless an advisor confirms otherwise.
            </p>
          </Block>
        )}

        <Block id="careers" eyebrow="Career outcomes" title="Roles this program prepares you for">
          <ul className="grid gap-3 sm:grid-cols-2">
            {program.roles.map((role) => (
              <li key={role.title} className="rounded-2xl border border-line bg-paper p-5">
                <p className="text-[17px] font-semibold tracking-tight">{role.title}</p>
                <p className="mt-1 text-[15px] text-muted">{role.text}</p>
              </li>
            ))}
          </ul>
        </Block>
      </div>

      <aside
        className="order-first lg:order-none lg:sticky lg:top-36 lg:self-start lg:transition-[top] lg:duration-500 [[data-header-hidden]_&]:lg:top-20"
        aria-label="Program summary"
      >
        <GlanceCard program={program} />
      </aside>
    </div>
  );
}
