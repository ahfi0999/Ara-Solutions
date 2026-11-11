import { ShieldCheck } from 'lucide-react';
import SceneFrame, { Pill } from './SceneFrame';

const ALERTS = [
  { text: 'Unusual login attempt from new location', tone: 'red', level: 'High' },
  { text: 'Phishing email quarantined', tone: 'amber', level: 'Medium' },
  { text: 'Malware blocked on endpoint WS-14', tone: 'amber', level: 'Medium' },
  { text: 'Firewall rule updated by admin', tone: 'blue', level: 'Info' },
];

// Security events per hour over the last day (blocked vs. investigated).
const EVENTS = [14, 18, 11, 22, 30, 26, 19, 34, 41, 28, 24, 37, 45, 33, 27, 21];

/** A security operations (SOC) console: live alerts, event volume and protection status. */
export default function SecurityOpsScene() {
  const max = Math.max(...EVENTS);
  return (
    <SceneFrame title="Security Operations Centre · Threat Monitoring" badge="Protected">
      <div className="flex h-full flex-col gap-3">
        <div className="grid grid-cols-[auto_1fr] gap-3">
          <div className="flex flex-col items-center justify-center rounded-lg bg-white/[0.05] px-3 py-2">
            <ShieldCheck aria-hidden="true" className="size-7 text-emerald-300" />
            <p className="mt-1 font-display text-base font-bold text-white sm:text-lg">98.7%</p>
            <p className="text-[10px] text-slate-400">Threats blocked</p>
          </div>
          <div className="flex min-w-0 flex-col rounded-lg bg-white/[0.05] px-3 py-2">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Events · last 24h
            </p>
            <div className="mt-2 flex flex-1 items-end gap-[3px]">
              {EVENTS.map((value, index) => (
                <span
                  key={index}
                  className={`flex-1 rounded-sm ${value >= 40 ? 'bg-brand' : 'bg-sky-400/60'}`}
                  style={{ height: `${Math.round((value / max) * 100)}%` }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-hidden rounded-lg bg-white/[0.03]">
          <p className="px-2.5 pt-2 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            Live alerts
          </p>
          <ul className="divide-y divide-white/5">
            {ALERTS.map((alert) => (
              <li key={alert.text} className="flex items-center gap-2.5 px-2.5 py-2">
                <span
                  className={`size-1.5 shrink-0 rounded-full ${alert.tone === 'red' ? 'bg-red-400' : alert.tone === 'amber' ? 'bg-amber-300' : 'bg-sky-300'}`}
                />
                <span className="min-w-0 flex-1 truncate text-[11px] text-slate-200 sm:text-xs">
                  {alert.text}
                </span>
                <Pill tone={alert.tone}>{alert.level}</Pill>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SceneFrame>
  );
}
