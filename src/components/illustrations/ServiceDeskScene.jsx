import { Check, Clock3 } from 'lucide-react';
import SceneFrame, { Pill } from './SceneFrame';

const TICKETS = [
  { id: 'INC0012', text: 'VPN not connecting for sales team', tone: 'red', status: 'P1 · Open' },
  { id: 'REQ0045', text: 'New joiner laptop & access setup', tone: 'blue', status: 'Approved' },
  { id: 'CHG0031', text: 'Email server security patch', tone: 'amber', status: 'Scheduled' },
  { id: 'INC0009', text: 'Payroll portal login error', tone: 'green', status: 'Resolved' },
];

const FLOW = ['Request', 'Approval', 'Fulfilment', 'Closed'];

/** An IT service desk: incident/request queue, an approval workflow and SLA tracking (what ServiceNow admins build). */
export default function ServiceDeskScene() {
  return (
    <SceneFrame title="IT Service Desk · Incident & Request Management" badge="Live">
      <div className="flex h-full flex-col gap-3">
        <div className="grid grid-cols-3 gap-2">
          {[
            ['Open incidents', '12'],
            ['Requests today', '38'],
            ['SLA met', '96%'],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg bg-white/[0.05] px-2.5 py-2">
              <p className="truncate text-[10px] text-slate-400">{label}</p>
              <p className="font-display text-base font-bold text-white sm:text-lg">{value}</p>
            </div>
          ))}
        </div>

        <ul className="min-h-0 flex-1 divide-y divide-white/5 overflow-hidden rounded-lg bg-white/[0.03]">
          {TICKETS.map((ticket) => (
            <li key={ticket.id} className="flex items-center gap-2.5 px-2.5 py-2">
              <span className="font-mono text-[10px] text-slate-400">{ticket.id}</span>
              <span className="min-w-0 flex-1 truncate text-[11px] text-slate-200 sm:text-xs">
                {ticket.text}
              </span>
              <Pill tone={ticket.tone}>{ticket.status}</Pill>
            </li>
          ))}
        </ul>

        <div className="rounded-lg bg-white/[0.05] px-3 py-2.5">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              REQ0045 workflow
            </p>
            <p className="flex items-center gap-1 text-[10px] text-slate-400">
              <Clock3 aria-hidden="true" className="size-3" /> 4h left on SLA
            </p>
          </div>
          <ol className="mt-2.5 flex items-center">
            {FLOW.map((step, index) => {
              const done = index < 2;
              const current = index === 2;
              return (
                <li key={step} className="flex flex-1 items-center last:flex-none">
                  <span className="flex flex-col items-center gap-1">
                    <span
                      className={`flex size-5 items-center justify-center rounded-full text-[9px] font-bold ${done ? 'bg-emerald-400 text-navy-deep' : current ? 'bg-brand text-white ring-4 ring-brand/25' : 'bg-white/10 text-slate-400'}`}
                    >
                      {done ? <Check aria-hidden="true" className="size-3" strokeWidth={3} /> : index + 1}
                    </span>
                    <span
                      className={`text-[9px] sm:text-[10px] ${current ? 'text-white' : 'text-slate-400'}`}
                    >
                      {step}
                    </span>
                  </span>
                  {index < FLOW.length - 1 && (
                    <span
                      className={`mx-1 mb-4 h-0.5 flex-1 rounded ${done ? 'bg-emerald-400/70' : 'bg-white/10'}`}
                    />
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </SceneFrame>
  );
}
