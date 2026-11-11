import { Check } from 'lucide-react';
import SceneFrame from './SceneFrame';

// Training and validation loss per epoch (both falling, as in a healthy training run).
const TRAIN = [2.3, 1.62, 1.18, 0.9, 0.71, 0.58, 0.49, 0.42, 0.37, 0.33, 0.3, 0.28];
const VALID = [2.35, 1.75, 1.3, 1.02, 0.83, 0.7, 0.62, 0.56, 0.52, 0.49, 0.47, 0.46];
const PIPELINE = ['Data', 'Train', 'Evaluate', 'Deploy'];

function toPath(values, width, height, max) {
  return values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * width;
      const y = height - Math.sqrt(value / max) * height;
      return `${index === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');
}

/** A machine-learning workspace: loss curves, model metrics and the train → deploy pipeline. */
export default function ModelTrainingScene() {
  const width = 300;
  const height = 100;
  const max = 2.5;
  return (
    <SceneFrame title="ML Workspace · Customer Churn Model" badge="Training">
      <div className="flex h-full flex-col gap-3">
        <div className="grid grid-cols-3 gap-2">
          {[
            ['Accuracy', '94.2%'],
            ['F1 score', '0.91'],
            ['Epoch', '12 / 15'],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg bg-white/[0.05] px-2.5 py-2">
              <p className="truncate text-[10px] text-slate-400">{label}</p>
              <p className="font-display text-base font-bold text-white sm:text-lg">{value}</p>
            </div>
          ))}
        </div>

        <div className="flex min-h-0 flex-1 flex-col rounded-lg bg-white/[0.03] px-3 py-2">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Loss</p>
            <p className="flex items-center gap-3 text-[10px] text-slate-400">
              <span className="flex items-center gap-1">
                <span className="h-0.5 w-3 rounded bg-brand" /> train
              </span>
              <span className="flex items-center gap-1">
                <span className="h-0.5 w-3 rounded bg-sky-300" /> validation
              </span>
            </p>
          </div>
          <svg
            viewBox={`0 -4 ${width} ${height + 8}`}
            preserveAspectRatio="none"
            className="mt-1 min-h-0 w-full flex-1"
          >
            {[0.25, 0.5, 0.75].map((line) => (
              <line
                key={line}
                x1="0"
                x2={width}
                y1={height * line}
                y2={height * line}
                stroke="white"
                strokeOpacity="0.07"
              />
            ))}
            <path
              d={toPath(VALID, width, height, max)}
              fill="none"
              stroke="#7dd3fc"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d={toPath(TRAIN, width, height, max)}
              fill="none"
              stroke="#e71e28"
              strokeWidth="2.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

        <ol className="flex items-center rounded-lg bg-white/[0.05] px-3 py-2.5">
          {PIPELINE.map((step, index) => {
            const done = index < 1;
            const current = index === 1;
            return (
              <li key={step} className="flex flex-1 items-center last:flex-none">
                <span
                  className={`flex items-center gap-1.5 rounded-full px-2 py-1 text-[10px] font-semibold ${done ? 'bg-emerald-400/15 text-emerald-300' : current ? 'bg-brand text-white' : 'bg-white/10 text-slate-400'}`}
                >
                  {done && <Check aria-hidden="true" className="size-3" strokeWidth={3} />}
                  {step}
                </span>
                {index < PIPELINE.length - 1 && <span className="mx-1.5 h-px flex-1 bg-white/15" />}
              </li>
            );
          })}
        </ol>
      </div>
    </SceneFrame>
  );
}
