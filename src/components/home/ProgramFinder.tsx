'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowLeft, RotateCcw, Sparkles } from 'lucide-react';
import { getProgram, type ProgramSlug } from '@/content/programs';
import { accent } from '@/lib/accent';
import { cn } from '@/lib/cn';
import { Container, SectionHeading } from '@/components/ui/Section';
import { useEnquiry } from '@/components/enquiry/EnquiryProvider';

type Answers = { who?: string; goal?: string; code?: string };

const QUESTIONS = [
  {
    key: 'who',
    question: 'Which best describes you?',
    options: [
      { value: 'fresher', label: 'Student or fresher' },
      { value: 'it', label: 'Working in IT or software' },
      { value: 'nontech', label: 'Professional from a non-tech role' },
      { value: 'platform', label: 'Already working with Salesforce or ServiceNow' },
    ],
  },
  {
    key: 'goal',
    question: 'What sounds most exciting to you?',
    options: [
      { value: 'crm', label: 'Building business apps and automating sales or service on a CRM' },
      { value: 'itsm', label: 'Running IT services and workflows for large companies' },
      { value: 'ai', label: 'Building applications powered by AI and machine learning' },
      { value: 'agents', label: 'Creating AI agents that complete tasks on their own' },
      { value: 'security', label: 'Protecting systems and data from cyber threats' },
      { value: 'web', label: 'Building complete web applications' },
    ],
  },
  {
    key: 'code',
    question: 'How comfortable are you with coding?',
    options: [
      { value: 'new', label: 'New to coding' },
      { value: 'some', label: 'I know the basics' },
      { value: 'yes', label: 'I code regularly' },
    ],
  },
] as const;

function recommend({ who, goal, code }: Answers): { slug: ProgramSlug; reason: string } {
  switch (goal) {
    case 'crm':
      return {
        slug: 'salesforce',
        reason:
          who === 'platform'
            ? 'You already know enterprise platforms. This program adds Salesforce development and Agentforce AI, the skills teams are hiring for now.'
            : 'Salesforce starts with no-code administration and builds up to development and Agentforce AI.',
      };
    case 'itsm':
      return {
        slug: 'servicenow',
        reason:
          'ServiceNow runs IT and service workflows at large enterprises. You start with administration and ITSM and prepare for the CSA certification.',
      };
    case 'security':
      return {
        slug: 'cybersecurity',
        reason:
          'Security roles are among the hardest to fill. This program covers SOC monitoring, cloud and identity security, and incident response.',
      };
    case 'web':
      return {
        slug: 'full-stack-ai',
        reason:
          'You will build complete web apps with React, Node.js and databases, and learn to add AI features and code faster with AI tools.',
      };
    case 'agents':
      return code !== 'new'
        ? {
            slug: 'agentic-ai',
            reason:
              'You can already code, so you can go straight to engineering AI agents that plan, use tools and work together.',
          }
        : {
            slug: 'ai-ml',
            reason:
              'Agents need a solid AI foundation first. Start with Python, machine learning and LLMs, then move on to Agentic AI.',
          };
    default:
      return {
        slug: 'ai-ml',
        reason:
          'This program takes you from Python and machine learning to building and deploying real Generative AI applications.',
      };
  }
}

/** Three-question quiz that recommends a program and leads into an advisor call. */
export function ProgramFinder() {
  const { open } = useEnquiry();
  const [answers, setAnswers] = useState<Answers>({});
  const [step, setStep] = useState(0);
  const finished = step >= QUESTIONS.length;
  const result = finished ? recommend(answers) : null;
  const program = result ? getProgram(result.slug) : null;

  const choose = (key: keyof Answers, value: string) => {
    setAnswers((current) => ({ ...current, [key]: value }));
    setStep((current) => current + 1);
  };
  const reset = () => {
    setAnswers({});
    setStep(0);
  };

  return (
    <section id="finder" className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionHeading
            eyebrow="Program finder"
            title={
              <>
                Not sure where to start? <em>Answer three questions.</em>
              </>
            }
            intro="Get a quick recommendation in under a minute. Then talk it through with an advisor, who knows the batches, schedules and fees."
          />

          <div className="relative min-h-[420px] overflow-hidden rounded-3xl border border-line bg-paper p-6 shadow-soft sm:p-10">
            <div className="flex items-center gap-2" aria-hidden>
              {QUESTIONS.map((question, index) => (
                <span
                  key={question.key}
                  className={cn(
                    'h-1 flex-1 rounded-full transition-colors duration-500',
                    index < step ? 'bg-brand' : 'bg-line',
                  )}
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              {!finished ? (
                <motion.fieldset
                  key={step}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.25 }}
                  className="mt-8"
                >
                  <legend className="font-mono text-[12px] uppercase tracking-[0.18em] text-faint">
                    Question {step + 1} of {QUESTIONS.length}
                  </legend>
                  <p className="mt-3 text-2xl font-semibold tracking-tight">{QUESTIONS[step].question}</p>
                  <div className="mt-6 grid gap-2.5">
                    {QUESTIONS[step].options.map((option) => {
                      const selected = answers[QUESTIONS[step].key] === option.value;
                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => choose(QUESTIONS[step].key, option.value)}
                          aria-pressed={selected}
                          className={cn(
                            'flex items-center justify-between gap-4 rounded-2xl border px-5 py-4 text-left text-[15px] transition-all',
                            selected
                              ? 'border-brand bg-brand/[0.04]'
                              : 'border-line hover:border-text/25 hover:bg-canvas',
                          )}
                        >
                          {option.label}
                          <span aria-hidden className="text-faint">
                            →
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  {step > 0 && (
                    <button
                      type="button"
                      onClick={() => setStep((current) => current - 1)}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm text-muted hover:text-text"
                    >
                      <ArrowLeft aria-hidden className="size-4" /> Back
                    </button>
                  )}
                </motion.fieldset>
              ) : (
                program &&
                result && (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-8"
                    aria-live="polite"
                  >
                    <p className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em] text-brand">
                      <Sparkles aria-hidden className="size-4" /> Our suggestion for you
                    </p>
                    <div
                      className={cn(
                        'mt-4 rounded-2xl p-6 ring-1',
                        accent[program.accent].soft,
                        accent[program.accent].ring,
                      )}
                    >
                      <p className="text-2xl font-semibold tracking-tight text-text">{program.name}</p>
                      <p className="mt-2 leading-relaxed text-muted">{result.reason}</p>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          open({
                            interest: program.slug,
                            title: `Talk to an advisor about ${program.shortName}`,
                          })
                        }
                        className="inline-flex h-12 items-center rounded-full bg-brand px-6 font-medium text-white hover:bg-brand-600"
                      >
                        Talk to an advisor
                      </button>
                      <Link
                        href={`/training-placement/${program.slug}/`}
                        className="inline-flex h-12 items-center rounded-full border border-line px-6 font-medium hover:border-text/30"
                      >
                        View the program
                      </Link>
                    </div>
                    <button
                      type="button"
                      onClick={reset}
                      className="mt-6 inline-flex items-center gap-1.5 text-sm text-muted hover:text-text"
                    >
                      <RotateCcw aria-hidden className="size-4" /> Start again
                    </button>
                  </motion.div>
                )
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
