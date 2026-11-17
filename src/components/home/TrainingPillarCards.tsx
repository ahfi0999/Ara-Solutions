'use client';

import { useEffect, useState, type ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Check,
  FlaskConical,
  FolderKanban,
  MessagesSquare,
  MonitorPlay,
  Play,
  type LucideIcon,
} from 'lucide-react';
import { trainingPillars } from '@/content/home';
import { Reveal } from '@/components/motion/primitives';
import { type SceneProps, typing, useScene, useSceneRun } from '@/components/motion/scene';

const PILLAR_ICONS: LucideIcon[] = [
  FlaskConical,
  FolderKanban,
  BadgeCheck,
  MessagesSquare,
  Briefcase,
  MonitorPlay,
];

/** 01 Hands-on labs: a command types out in a terminal, the checks run, the lab completes. */
function LabScene(props: SceneProps) {
  const { from, to } = useScene(props);
  const command = 'run lab --module 3';
  return (
    <div className="font-mono text-[11.5px] leading-6">
      <p className="flex items-center gap-2">
        <span className="text-emerald-300">$</span>
        <motion.span
          className="inline-block whitespace-pre text-white/85"
          initial={from({ clipPath: 'inset(0 100% 0 0)' })}
          animate={to({ clipPath: 'inset(0 0% 0 0)' })}
          transition={{ duration: 1.1, ease: typing(command.length) }}
        >
          {command}
        </motion.span>
      </p>
      <motion.p
        className="text-white/45"
        initial={from({ opacity: 0 })}
        animate={to({ opacity: 1 })}
        transition={{ delay: 1.3, duration: 0.3 }}
      >
        Running 12 checks…
      </motion.p>
      <motion.p
        className="flex items-center gap-1.5 text-emerald-300"
        initial={from({ opacity: 0, y: 4 })}
        animate={to({ opacity: 1, y: 0 })}
        transition={{ delay: 2.1, duration: 0.4 }}
      >
        <Check aria-hidden className="size-3.5" strokeWidth={3} /> Lab complete
      </motion.p>
    </div>
  );
}

/** 02 Real projects: a small task board whose tasks tick off one by one. */
function ProjectScene(props: SceneProps) {
  const { from, to } = useScene(props);
  const tasks = ['Design the data model', 'Build the features', 'Demo the capstone'];
  return (
    <ul className="space-y-1.5 text-[12px] leading-4">
      {tasks.map((task, index) => (
        <li key={task} className="flex items-center gap-2 rounded-md bg-white/[0.05] px-2.5 py-0.5">
          <span className="flex size-4 shrink-0 items-center justify-center rounded border border-white/25">
            <motion.span
              className="flex size-4 items-center justify-center rounded bg-emerald-400 text-ink"
              initial={from({ scale: 0, opacity: 0 })}
              animate={to({ scale: 1, opacity: 1 })}
              transition={{ delay: 0.4 + index * 0.55, type: 'spring', stiffness: 500, damping: 20 }}
            >
              <Check aria-hidden className="size-3" strokeWidth={3.5} />
            </motion.span>
          </span>
          <span className="truncate text-white/75">{task}</span>
        </li>
      ))}
    </ul>
  );
}

/** 03 Certification preparation: a badge whose ring and tick draw themselves in. */
function CertificationScene(props: SceneProps) {
  const { from, to } = useScene(props);
  return (
    <div className="flex h-full items-center gap-4">
      <svg viewBox="0 0 64 64" className="size-16 shrink-0" aria-hidden>
        <circle cx="32" cy="32" r="26" fill="none" stroke="rgb(255 255 255 / 0.12)" strokeWidth="4" />
        <motion.circle
          cx="32"
          cy="32"
          r="26"
          fill="none"
          stroke="rgb(52 211 153)"
          strokeWidth="4"
          strokeLinecap="round"
          transform="rotate(-90 32 32)"
          initial={from({ pathLength: 0 })}
          animate={to({ pathLength: 1 })}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
        <motion.path
          d="M21 33 l7 7 l15 -16"
          fill="none"
          stroke="white"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={from({ pathLength: 0 })}
          animate={to({ pathLength: 1 })}
          transition={{ delay: 1.1, duration: 0.5, ease: 'easeOut' }}
        />
      </svg>
      <motion.div
        initial={from({ opacity: 0, x: -6 })}
        animate={to({ opacity: 1, x: 0 })}
        transition={{ delay: 1.5, duration: 0.4 }}
      >
        <p className="text-[13px] font-semibold">Exam-ready</p>
        <p className="text-[11.5px] text-white/50">Mock tests completed</p>
      </motion.div>
    </div>
  );
}

/** 04 Interview preparation: an interviewer's question, a moment of thought, then the answer. */
function InterviewScene(props: SceneProps) {
  const { from, to } = useScene(props);
  const [answered, setAnswered] = useState(props.reduce);
  useEffect(() => {
    if (props.reduce) return setAnswered(true);
    if (props.run === 0) return;
    setAnswered(false);
    const timer = window.setTimeout(() => setAnswered(true), 1700);
    return () => window.clearTimeout(timer);
  }, [props.run, props.reduce]);
  return (
    <div className="space-y-1.5 text-[12px]">
      <motion.p
        className="w-fit max-w-[88%] rounded-2xl rounded-bl-md bg-white/10 px-3 py-1.5 text-white/85"
        initial={from({ opacity: 0, y: 6 })}
        animate={to({ opacity: 1, y: 0 })}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        Tell me about a project you built.
      </motion.p>
      <motion.div
        className="ml-auto flex h-8 w-fit max-w-[88%] items-center rounded-2xl rounded-br-md bg-brand px-3 text-white"
        initial={from({ opacity: 0, y: 6 })}
        animate={to({ opacity: 1, y: 0 })}
        transition={{ delay: 0.8, duration: 0.4 }}
      >
        {answered ? (
          <motion.span initial={from({ opacity: 0 })} animate={{ opacity: 1 }}>
            I built a working capstone app.
          </motion.span>
        ) : (
          <span className="flex gap-1">
            {[0, 1, 2].map((dot) => (
              <motion.span
                key={dot}
                className="size-1.5 rounded-full bg-white/80"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: dot * 0.15 }}
              />
            ))}
          </span>
        )}
      </motion.div>
    </div>
  );
}

/** 05 Placement assistance: an offer letter slides in and gets a "Hired" stamp. */
function PlacementScene(props: SceneProps) {
  const { from, to } = useScene(props);
  return (
    <div className="relative flex h-full items-center">
      <motion.div
        className="w-full rounded-lg bg-white px-3 py-2.5 text-ink shadow-lift"
        initial={from({ opacity: 0, y: 18 })}
        animate={to({ opacity: 1, y: 0 })}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">Offer letter</p>
        <span className="mt-2 block h-1.5 w-4/5 rounded-full bg-ink/10" />
        <span className="mt-1.5 block h-1.5 w-3/5 rounded-full bg-ink/10" />
      </motion.div>
      <motion.span
        className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-1 rounded-md border-2 border-emerald-500 px-2 py-0.5 text-[12px] font-bold uppercase tracking-wider text-emerald-600"
        initial={from({ opacity: 0, scale: 2, rotate: -20 })}
        animate={to({ opacity: 1, scale: 1, rotate: -8 })}
        transition={{ delay: 1, type: 'spring', stiffness: 400, damping: 16 }}
      >
        Hired <Check aria-hidden className="size-3.5" strokeWidth={3.5} />
      </motion.span>
    </div>
  );
}

/** 06 Our own learning platform: a class player with a live dot and its progress filling. */
function PlatformScene(props: SceneProps) {
  const { from, to } = useScene(props);
  return (
    <div className="relative h-full overflow-hidden rounded-lg bg-black/35">
      <span className="absolute left-2 top-2 inline-flex items-center gap-1.5 rounded-full bg-brand/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider">
        <span className="relative flex size-1.5">
          <span className="absolute inset-0 rounded-full bg-white motion-safe:animate-ping" />
          <span className="relative size-1.5 rounded-full bg-white" />
        </span>
        Live
      </span>
      <motion.span
        className="absolute left-1/2 top-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink"
        initial={from({ scale: 0.6, opacity: 0 })}
        animate={to({ scale: 1, opacity: 1 })}
        transition={{ delay: 0.2, type: 'spring', stiffness: 400, damping: 18 }}
      >
        <Play aria-hidden className="ml-0.5 size-4" fill="currentColor" />
      </motion.span>
      <span className="absolute inset-x-2 bottom-2 h-1 overflow-hidden rounded-full bg-white/15">
        <motion.span
          className="block h-full origin-left rounded-full bg-brand"
          initial={from({ scaleX: 0 })}
          animate={to({ scaleX: 0.62 })}
          transition={{ delay: 0.4, duration: 1.6, ease: 'easeOut' }}
        />
      </span>
    </div>
  );
}

const SCENES = [LabScene, ProjectScene, CertificationScene, InterviewScene, PlacementScene, PlatformScene];

/** One "Why learn with ARA" box: icon, a small animation (on first view and on hover), title and text. */
function PillarCard({ index }: { index: number }) {
  const pillar = trainingPillars[index];
  const Icon = PILLAR_ICONS[index];
  const Scene = SCENES[index];
  const href = 'href' in pillar ? pillar.href : undefined;
  const { ref, run, reduce, replay } = useSceneRun();

  const body: ReactNode = (
    <>
      <span className="flex items-center justify-between">
        <span className="flex size-12 items-center justify-center rounded-xl bg-brand text-white shadow-[0_10px_30px_-10px_rgb(229_35_45/0.8)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:-rotate-6">
          <Icon aria-hidden className="size-6" />
        </span>
        <span className="font-mono text-sm text-white/30">{String(index + 1).padStart(2, '0')}</span>
      </span>
      <div
        ref={ref}
        aria-hidden
        className="mt-5 h-[98px] overflow-hidden rounded-xl border border-white/10 bg-ink/50 p-3 text-white"
      >
        <Scene key={run} run={run} reduce={reduce} />
      </div>
      <h3 className="mt-5 text-lg font-semibold tracking-tight">{pillar.title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-white/65">{pillar.text}</p>
      {href && (
        <span className="mt-auto inline-flex items-center gap-2 pt-5 text-[15px] font-medium text-brand-300 group-hover:text-white">
          See the platform <ArrowRight aria-hidden className="size-4" />
        </span>
      )}
    </>
  );
  // Frosted glass: the classroom video blurs behind each box, so the text stays crisp.
  const card =
    'group flex h-full flex-col rounded-2xl border p-6 backdrop-blur-md transition-[background-color,border-color,translate] duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.09]';
  return (
    <Reveal as="li" delay={index * 0.08} className="h-full">
      {href ? (
        <Link href={href} onMouseEnter={replay} className={`${card} border-brand/40 bg-brand/[0.1]`}>
          {body}
        </Link>
      ) : (
        <div onMouseEnter={replay} className={`${card} border-white/10 bg-white/[0.06]`}>
          {body}
        </div>
      )}
    </Reveal>
  );
}

/** The six "Why learn with ARA" boxes. */
export function TrainingPillarCards() {
  return (
    <ol className="relative mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {trainingPillars.map((pillar, index) => (
        <PillarCard key={pillar.title} index={index} />
      ))}
    </ol>
  );
}
