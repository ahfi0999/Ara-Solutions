import { Check, Sparkles } from 'lucide-react';
import SceneFrame from './SceneFrame';

// A small React + API example, colour-coded like a code editor.
const CODE = [
  [
    ['k', 'export default '],
    ['k', 'async function '],
    ['f', 'JobSearch'],
    ['p', '() {'],
  ],
  [
    ['p', '  '],
    ['k', 'const '],
    ['v', 'jobs '],
    ['p', '= '],
    ['k', 'await '],
    ['f', 'fetch'],
    ['s', "('/api/jobs')"],
  ],
  [
    ['p', '    .'],
    ['f', 'then'],
    ['p', '(('],
    ['v', 'r'],
    ['p', ') => '],
    ['v', 'r'],
    ['p', '.'],
    ['f', 'json'],
    ['p', '());'],
  ],
  [
    ['p', '  '],
    ['k', 'return '],
    ['p', '<'],
    ['t', 'JobList '],
    ['a', 'items'],
    ['p', '={'],
    ['v', 'jobs'],
    ['p', '} />;'],
  ],
  [['p', '}']],
];
const COLORS = {
  k: 'text-pink-300',
  f: 'text-sky-300',
  v: 'text-slate-100',
  s: 'text-emerald-300',
  t: 'text-amber-200',
  a: 'text-sky-200',
  p: 'text-slate-400',
};
const STACK = ['React', 'Node.js', 'MongoDB', 'AI APIs'];

/** A full-stack developer's editor: React + API code, an AI coding assistant suggestion and a passing deploy. */
export default function CodeEditorScene() {
  return (
    <SceneFrame title="JobSearch.jsx · Full Stack App" badge="Deployed">
      <div className="flex h-full flex-col gap-3">
        <div className="flex flex-wrap gap-1.5">
          {STACK.map((item) => (
            <span
              key={item}
              className="rounded-md bg-white/[0.06] px-2 py-1 text-[10px] font-semibold text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>

        <pre className="min-h-0 flex-1 overflow-hidden rounded-lg bg-black/25 px-3 py-2.5 font-mono text-[10px] leading-[1.7] sm:text-[11px]">
          {CODE.map((line, index) => (
            <div key={index} className="flex gap-3 whitespace-pre">
              <span className="w-3 shrink-0 text-right text-slate-600">{index + 1}</span>
              <span>
                {line.map(([kind, text], part) => (
                  <span key={part} className={COLORS[kind]}>
                    {text}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </pre>

        <div className="rounded-lg border border-brand/30 bg-brand/10 px-3 py-2.5">
          <p className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-red-200">
            <Sparkles aria-hidden="true" className="size-3" /> AI assistant suggestion
          </p>
          <p className="mt-1 text-[11px] text-slate-200 sm:text-xs">
            Add a loading state and cache the jobs API for 60 seconds?
          </p>
        </div>

        <div className="flex items-center justify-between rounded-lg bg-white/[0.05] px-3 py-2">
          <span className="flex items-center gap-2 text-[11px] text-slate-200">
            <span className="flex size-4 items-center justify-center rounded-full bg-emerald-400 text-navy-deep">
              <Check aria-hidden="true" className="size-2.5" strokeWidth={3.5} />
            </span>
            Tests passed · build deployed
          </span>
          <span className="text-[10px] text-slate-400">42s</span>
        </div>
      </div>
    </SceneFrame>
  );
}
