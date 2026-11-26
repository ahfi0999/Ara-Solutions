'use client';

import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';
import {
  AlertTriangle,
  Bot,
  Check,
  Clock3,
  Code2,
  Database,
  FileText,
  GitBranch,
  Search,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Workflow,
  Zap,
} from 'lucide-react';
import type { Program, ProgramSlug } from '@/content/programs';
import { cn } from '@/lib/cn';
import { useReducedMotionSafe } from '@/components/motion/primitives';

/*
 * The illustrations "play": their steps light up one after another, hold on the result, then start again.
 * Each step is numbered; `useSteps()` gives the classes for a step, and Connector lines fill as they are reached.
 * It only runs while the illustration is on screen; visitors who prefer reduced motion see every step lit.
 */
const STEP_MS = 850;
const HOLD_MS = 2600;
const PlayContext = createContext(Number.POSITIVE_INFINITY);

type StepClass = (step: number) => string;

function stepClasses(active: number): StepClass {
  return (step) =>
    cn(
      'transition-[opacity,translate,box-shadow] duration-500',
      active >= step ? 'opacity-100 translate-y-0' : 'opacity-25 translate-y-1',
      active === step && 'shadow-[0_0_0_1px_rgb(255_255_255/0.22),0_0_28px_-6px_rgb(125_211_252/0.55)]',
    );
}

/** For parts rendered inside the player (nodes, code lines): their step classes from the current step. */
function useSteps(): StepClass {
  return stepClasses(useContext(PlayContext));
}

function Frame({
  title,
  steps,
  children,
}: {
  title: string;
  steps: number;
  /** Plain content, or a function given the step classes (for parts styled by the story itself). */
  children: React.ReactNode | ((s: StepClass) => React.ReactNode);
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const reduce = useReducedMotionSafe();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce) {
      setActive(steps);
      return;
    }
    if (!inView) return;
    const wait = active >= steps ? HOLD_MS : STEP_MS;
    const timer = window.setTimeout(() => setActive((step) => (step >= steps ? 0 : step + 1)), wait);
    return () => window.clearTimeout(timer);
  }, [active, inView, reduce, steps]);

  return (
    <PlayContext.Provider value={active}>
      <div
        ref={ref}
        className="ring-gradient relative rounded-[26px] bg-ink-2/80 p-2 shadow-glow backdrop-blur-xl"
      >
        <div className="rounded-[20px] border border-white/5 bg-[#0b0f45]/90">
          <div className="relative flex items-center gap-3 border-b border-white/[0.07] px-5 py-3">
            <div className="flex gap-1.5" aria-hidden>
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
            </div>
            <p className="truncate font-mono text-[11px] text-white/50">{title}</p>
            {/* How far through the run it is */}
            <span aria-hidden className="absolute inset-x-0 -bottom-px h-px bg-white/[0.04]">
              <span
                className="block h-full origin-left bg-sky-300/60 transition-[scale] duration-700"
                style={{ scale: `${Math.min(active, steps) / steps} 1` }}
              />
            </span>
          </div>
          <div className="p-5">
            {typeof children === 'function' ? children(stepClasses(active)) : children}
          </div>
        </div>
      </div>
    </PlayContext.Provider>
  );
}

function Node({
  icon: Icon,
  label,
  sub,
  tone,
  step,
  className,
}: {
  icon: typeof Bot;
  label: string;
  sub?: string;
  tone: string;
  step: number;
  className?: string;
}) {
  const s = useSteps();
  return (
    <div
      className={cn(
        'flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.04] px-3 py-2.5',
        s(step),
        className,
      )}
    >
      <span className={cn('flex size-8 shrink-0 items-center justify-center rounded-lg', tone)}>
        <Icon aria-hidden className="size-4" />
      </span>
      <span className="min-w-0">
        <span className="block truncate text-[13px] font-medium text-white">{label}</span>
        {sub && <span className="block truncate text-[11.5px] text-white/45">{sub}</span>}
      </span>
    </div>
  );
}

function Connector({ step }: { step: number }) {
  const active = useContext(PlayContext);
  return (
    <span aria-hidden className="relative mx-auto block h-4 w-px bg-white/10">
      <span
        className={cn(
          'absolute inset-0 origin-top bg-sky-300/70 transition-[scale] duration-500',
          active >= step ? 'scale-y-100' : 'scale-y-0',
        )}
      />
    </span>
  );
}

function SalesforceVisual() {
  return (
    <Frame title="Flow Builder · Case escalation" steps={4}>
      {(s) => (
        <>
          <Node
            step={0}
            icon={Zap}
            label="Trigger: Case created"
            sub="Record-triggered flow"
            tone="bg-sky-400/15 text-sky-300"
          />
          <Connector step={1} />
          <Node
            step={1}
            icon={GitBranch}
            label="Decision: Priority = High?"
            sub="Outcome: Yes"
            tone="bg-amber-400/15 text-amber-300"
          />
          <Connector step={2} />
          <div className="grid grid-cols-2 gap-2">
            <Node
              step={2}
              icon={UserCheck}
              label="Assign to Tier 2"
              sub="Queue update"
              tone="bg-sky-400/15 text-sky-300"
            />
            <Node
              step={3}
              icon={Bot}
              label="Agentforce"
              sub="Draft first reply"
              tone="bg-violet-400/15 text-violet-300"
            />
          </div>
          <Connector step={4} />
          <div
            className={cn(
              'flex items-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.07] px-3 py-2.5 text-[12.5px] text-emerald-200',
              s(4),
            )}
          >
            <Check aria-hidden className="size-4" /> SLA met · customer notified
          </div>
        </>
      )}
    </Frame>
  );
}

function GenAiVisual() {
  const chunks = [
    { doc: 'leave-policy.pdf', score: '0.92' },
    { doc: 'hr-handbook.pdf', score: '0.87' },
    { doc: 'faq.md', score: '0.81' },
  ];
  return (
    <Frame title="RAG assistant · Company documents" steps={6}>
      {(s) => (
        <>
          <div className={cn('rounded-xl bg-white/[0.06] px-4 py-2.5 text-[13px] text-white/85', s(0))}>
            How many leave days do new joiners get?
          </div>
          <Connector step={1} />
          <div className="grid grid-cols-2 gap-2">
            <Node
              step={1}
              icon={Sparkles}
              label="Embed question"
              sub="Vector · 1,536 dims"
              tone="bg-violet-400/15 text-violet-300"
            />
            <Node
              step={2}
              icon={Search}
              label="Vector search"
              sub="Top 3 chunks"
              tone="bg-violet-400/15 text-violet-300"
            />
          </div>
          <ul className="mt-2 space-y-1.5">
            {chunks.map((chunk, index) => (
              <li
                key={chunk.doc}
                className={cn(
                  'flex items-center justify-between rounded-lg bg-white/[0.03] px-3 py-1.5 font-mono text-[11px] text-white/55',
                  s(3 + index),
                )}
              >
                <span className="flex items-center gap-2">
                  <FileText aria-hidden className="size-3.5" /> {chunk.doc}
                </span>
                <span className="text-violet-300">{chunk.score}</span>
              </li>
            ))}
          </ul>
          <Connector step={6} />
          <div
            className={cn(
              'rounded-xl border border-violet-400/20 bg-violet-400/[0.07] px-4 py-3 text-[13px] leading-relaxed text-white/85',
              s(6),
            )}
          >
            New joiners receive the annual leave set out in the HR policy, prorated from their joining date.
            <span className="ml-1 rounded bg-white/10 px-1.5 py-0.5 font-mono text-[10px] text-violet-200">
              [1]
            </span>
            <span className="ml-1 rounded bg-white/10 px-1.5 py-0.5 font-mono text-[10px] text-violet-200">
              [2]
            </span>
          </div>
        </>
      )}
    </Frame>
  );
}

function AgenticVisual() {
  return (
    <Frame title="Multi-agent workflow · Support desk" steps={5}>
      {(s) => (
        <>
          <Node
            step={0}
            icon={Workflow}
            label="Supervisor agent"
            sub="Plans and delegates the task"
            tone="bg-rose-400/15 text-rose-300"
            className="mx-auto max-w-[260px]"
          />
          <div aria-hidden className="mx-auto mt-0 h-4 w-2/3 border-x border-b border-white/15" />
          <div className="mt-2 grid grid-cols-3 gap-2">
            <Node
              step={1}
              icon={Search}
              label="Triage"
              tone="bg-rose-400/15 text-rose-300"
              className="flex-col items-start"
            />
            <Node
              step={2}
              icon={Database}
              label="Resolver"
              tone="bg-rose-400/15 text-rose-300"
              className="flex-col items-start"
            />
            <Node
              step={3}
              icon={Bot}
              label="Writer"
              tone="bg-rose-400/15 text-rose-300"
              className="flex-col items-start"
            />
          </div>
          <div className={cn('mt-3 flex flex-wrap gap-1.5', s(4))}>
            {['MCP · CRM', 'MCP · Tickets', 'Knowledge base', 'Email API'].map((tool) => (
              <span
                key={tool}
                className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 font-mono text-[10.5px] text-white/60"
              >
                {tool}
              </span>
            ))}
          </div>
          <Connector step={5} />
          <div
            className={cn(
              'flex items-center gap-2 rounded-xl border border-amber-400/20 bg-amber-400/[0.07] px-3 py-2.5 text-[12.5px] text-amber-100',
              s(5),
            )}
          >
            <ShieldCheck aria-hidden className="size-4" /> Refund over limit · waiting for human approval
          </div>
        </>
      )}
    </Frame>
  );
}

function ServiceNowVisual() {
  const tickets = [
    {
      id: 'INC0012',
      text: 'VPN not connecting for sales team',
      tag: 'P1 · Open',
      tone: 'bg-red-400/15 text-red-300',
    },
    {
      id: 'REQ0045',
      text: 'New joiner laptop & access',
      tag: 'Approved',
      tone: 'bg-sky-400/15 text-sky-300',
    },
    {
      id: 'CHG0031',
      text: 'Email server security patch',
      tag: 'Scheduled',
      tone: 'bg-amber-400/15 text-amber-300',
    },
  ];
  const flow = ['Request', 'Approval', 'Fulfilment', 'Closed'];
  return (
    <Frame title="IT Service Desk · Incident & Request" steps={4}>
      {(s) => (
        <>
          <ul className="space-y-1.5">
            {tickets.map((ticket, index) => (
              <li
                key={ticket.id}
                className={cn('flex items-center gap-3 rounded-lg bg-white/[0.04] px-3 py-2', s(index))}
              >
                <span className="font-mono text-[10.5px] text-white/40">{ticket.id}</span>
                <span className="min-w-0 flex-1 truncate text-[12.5px] text-white/85">{ticket.text}</span>
                <span
                  className={cn('shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium', ticket.tone)}
                >
                  {ticket.tag}
                </span>
              </li>
            ))}
          </ul>
          <div className={cn('mt-4 rounded-xl border border-white/[0.08] bg-white/[0.03] p-3.5', s(3))}>
            <p className="flex items-center justify-between font-mono text-[10.5px] uppercase tracking-wider text-white/45">
              REQ0045 workflow
              <span className="flex items-center gap-1 normal-case tracking-normal">
                <Clock3 aria-hidden className="size-3" /> 4h left on SLA
              </span>
            </p>
            <ol className="mt-3 flex items-center">
              {flow.map((step, index) => (
                <li key={step} className="flex flex-1 items-center last:flex-none">
                  <span className="flex flex-col items-center gap-1">
                    <span
                      className={cn(
                        'flex size-6 items-center justify-center rounded-full text-[10px] font-semibold',
                        index < 2
                          ? 'bg-emerald-400 text-ink'
                          : index === 2
                            ? 'bg-brand text-white ring-4 ring-brand/25'
                            : 'bg-white/10 text-white/45',
                      )}
                    >
                      {index < 2 ? <Check aria-hidden className="size-3.5" strokeWidth={3} /> : index + 1}
                    </span>
                    <span className={cn('text-[10.5px]', index === 2 ? 'text-white' : 'text-white/45')}>
                      {step}
                    </span>
                  </span>
                  {index < flow.length - 1 && (
                    <span
                      aria-hidden
                      className={cn('mx-1 mb-5 h-px flex-1', index < 2 ? 'bg-emerald-400/60' : 'bg-white/10')}
                    />
                  )}
                </li>
              ))}
            </ol>
          </div>
          <div
            className={cn(
              'mt-3 flex items-center gap-2 rounded-xl border border-violet-400/20 bg-violet-400/[0.07] px-3 py-2.5 text-[12.5px] text-violet-100',
              s(4),
            )}
          >
            <Sparkles aria-hidden className="size-4" /> ServiceNow Otto summarised INC0012 for the resolver group
          </div>
        </>
      )}
    </Frame>
  );
}

const EVENTS = [14, 18, 11, 22, 30, 26, 19, 34, 41, 28, 24, 37, 45, 33, 27, 21];

function CyberVisual() {
  const alerts = [
    { text: 'Unusual login from a new location', level: 'High', tone: 'bg-red-400/15 text-red-300' },
    { text: 'Phishing email quarantined', level: 'Medium', tone: 'bg-amber-400/15 text-amber-300' },
    { text: 'Malware blocked on endpoint WS-14', level: 'Medium', tone: 'bg-amber-400/15 text-amber-300' },
    { text: 'Firewall rule updated by admin', level: 'Info', tone: 'bg-sky-400/15 text-sky-300' },
  ];
  const max = Math.max(...EVENTS);
  return (
    <Frame title="Security Operations Centre · Live alerts" steps={4}>
      {(s) => (
        <>
          <div className={cn('grid grid-cols-[auto_1fr] gap-3', s(0))}>
            <div className="flex flex-col items-center justify-center rounded-xl bg-white/[0.04] px-4 py-3">
              <ShieldCheck aria-hidden className="size-6 text-emerald-300" />
              <span className="mt-1 text-lg font-semibold text-white">98.7%</span>
              <span className="text-[10.5px] text-white/45">threats blocked</span>
            </div>
            <div className="flex flex-col rounded-xl bg-white/[0.04] px-3 py-2.5">
              <span className="font-mono text-[10.5px] uppercase tracking-wider text-white/45">
                Events · 24h
              </span>
              <div className="mt-2 flex h-14 items-end gap-[3px]" aria-hidden>
                {EVENTS.map((value, index) => (
                  <span
                    key={index}
                    className={cn('flex-1 rounded-sm', value >= 40 ? 'bg-brand' : 'bg-amber-300/60')}
                    style={{ height: `${(value / max) * 100}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
          <ul className="mt-3 space-y-1.5">
            {alerts.map((alert, index) => (
              <li
                key={alert.text}
                className={cn('flex items-center gap-3 rounded-lg bg-white/[0.04] px-3 py-2', s(index + 1))}
              >
                {alert.level === 'High' ? (
                  <ShieldAlert aria-hidden className="size-4 shrink-0 text-red-300" />
                ) : (
                  <AlertTriangle aria-hidden className="size-4 shrink-0 text-white/35" />
                )}
                <span className="min-w-0 flex-1 truncate text-[12.5px] text-white/85">{alert.text}</span>
                <span className={cn('shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium', alert.tone)}>
                  {alert.level}
                </span>
              </li>
            ))}
          </ul>
        </>
      )}
    </Frame>
  );
}

function CodeLine({ n, children }: { n: number; children: React.ReactNode }) {
  const s = useSteps();
  return (
    <div className={cn('flex gap-3 whitespace-pre', s(n))}>
      <span className="w-3 text-right text-white/25">{n}</span>
      <span>{children}</span>
    </div>
  );
}

function FullStackVisual() {
  return (
    <Frame title="JobSearch.tsx · Full stack app" steps={6}>
      {(s) => (
        <>
          <div className={cn('flex flex-wrap gap-1.5', s(0))}>
            {['React', 'Node.js', 'MongoDB', 'AI API'].map((item) => (
              <span
                key={item}
                className="rounded-md bg-white/[0.06] px-2 py-1 font-mono text-[10.5px] text-white/60"
              >
                {item}
              </span>
            ))}
          </div>
          <pre className="mt-3 overflow-hidden rounded-xl bg-black/30 px-4 py-3 font-mono text-[11.5px] leading-[1.75]">
            <CodeLine n={1}>
              <span className="text-pink-300">export async function</span>{' '}
              <span className="text-sky-300">JobSearch</span>
              <span className="text-white/50">() {'{'}</span>
            </CodeLine>
            <CodeLine n={2}>
              <span className="text-pink-300"> const</span> <span className="text-white">jobs</span>{' '}
              <span className="text-white/50">=</span> <span className="text-pink-300">await</span>{' '}
              <span className="text-sky-300">getJobs</span>
              <span className="text-emerald-300">(&apos;remote&apos;)</span>
              <span className="text-white/50">;</span>
            </CodeLine>
            <CodeLine n={3}>
              <span className="text-pink-300"> return</span> <span className="text-white/50">&lt;</span>
              <span className="text-amber-200">JobList</span> <span className="text-sky-200">items</span>
              <span className="text-white/50">={'{'}</span>
              <span className="text-white">jobs</span>
              <span className="text-white/50">{'}'} /&gt;;</span>
            </CodeLine>
            <CodeLine n={4}>
              <span className="text-white/50">{'}'}</span>
            </CodeLine>
          </pre>
          <div
            className={cn(
              'mt-3 rounded-xl border border-indigo-400/25 bg-indigo-400/[0.08] px-3.5 py-2.5',
              s(5),
            )}
          >
            <p className="flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-wider text-indigo-200">
              <Sparkles aria-hidden className="size-3.5" /> AI assistant
            </p>
            <p className="mt-1 text-[12.5px] text-white/85">
              Add a loading state and cache the jobs API for 60 seconds?
            </p>
          </div>
          <div
            className={cn(
              'mt-3 flex items-center justify-between rounded-xl bg-white/[0.04] px-3 py-2.5 text-[12.5px] text-white/80',
              s(6),
            )}
          >
            <span className="flex items-center gap-2">
              <Code2 aria-hidden className="size-4 text-emerald-300" /> Tests passed · deployed
            </span>
            <span className="font-mono text-[10.5px] text-white/40">42s</span>
          </div>
        </>
      )}
    </Frame>
  );
}

/** Generic visual for programs without a custom one: the learning path, built from the program's modules. */
function LearningPathVisual({ program }: { program: Program }) {
  const steps = program.modules.slice(0, 5);
  return (
    <Frame title={`Learning path · ${program.shortName}`} steps={steps.length}>
      {(s) => (
        <>
          <ol className="space-y-2">
            {steps.map((module, index) => (
              <li
                key={module.title}
                className={cn(
                  'flex items-center gap-3 rounded-xl border px-3 py-2.5',
                  index < 2 ? 'border-white/[0.08] bg-white/[0.04]' : 'border-white/[0.05]',
                  s(index),
                )}
              >
                <span
                  className={cn(
                    'flex size-7 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold',
                    index < 2
                      ? 'bg-emerald-400 text-ink'
                      : index === 2
                        ? 'bg-brand text-white'
                        : 'bg-white/10 text-white/50',
                  )}
                >
                  {index < 2 ? <Check aria-hidden className="size-3.5" strokeWidth={3} /> : index + 1}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-[13px] font-medium text-white">{module.title}</span>
                  <span className="block truncate text-[11.5px] text-white/45">{module.summary}</span>
                </span>
              </li>
            ))}
          </ol>
          <div className={cn('mt-3 flex flex-wrap gap-1.5', s(steps.length))}>
            {program.tools.slice(0, 5).map((tool) => (
              <span
                key={tool}
                className="rounded-md bg-white/[0.06] px-2 py-1 font-mono text-[10.5px] text-white/60"
              >
                {tool}
              </span>
            ))}
          </div>
        </>
      )}
    </Frame>
  );
}

/** Illustrative product visual for each program's hero (custom per program, generic fallback). */
export function ProgramVisual({ program }: { program: Program }) {
  switch (program.slug as ProgramSlug) {
    case 'salesforce':
      return <SalesforceVisual />;
    case 'servicenow':
      return <ServiceNowVisual />;
    case 'ai-ml':
      return <GenAiVisual />;
    case 'agentic-ai':
      return <AgenticVisual />;
    case 'cybersecurity':
      return <CyberVisual />;
    case 'full-stack-ai':
      return <FullStackVisual />;
    default:
      return <LearningPathVisual program={program} />;
  }
}
