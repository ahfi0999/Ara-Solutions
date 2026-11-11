/**
 * Shared "app window" frame for the training illustrations, so all three scenes look like one set.
 * Everything is drawn with HTML/SVG: crisp at any size and always on-brand.
 */
export default function SceneFrame({ title, badge, children }) {
  return (
    <div className="relative flex size-full flex-col overflow-hidden bg-navy-deep p-3 sm:p-5">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:18px_18px]"
      />
      <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-white/10 bg-[#121650] shadow-2xl">
        <div className="flex items-center gap-3 border-b border-white/10 px-3.5 py-2.5 sm:px-4">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-white/20" />
            <span className="size-2.5 rounded-full bg-white/20" />
            <span className="size-2.5 rounded-full bg-white/20" />
          </div>
          <p className="truncate font-display text-[11px] font-semibold text-slate-200 sm:text-xs">{title}</p>
          {badge && (
            <span className="ml-auto shrink-0 rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
              {badge}
            </span>
          )}
        </div>
        <div className="min-h-0 flex-1 p-3 sm:p-4">{children}</div>
      </div>
    </div>
  );
}

/** Small status pill used inside the scenes. */
export function Pill({ tone = 'slate', children }) {
  const tones = {
    red: 'bg-red-400/15 text-red-300',
    amber: 'bg-amber-400/15 text-amber-300',
    green: 'bg-emerald-400/15 text-emerald-300',
    blue: 'bg-sky-400/15 text-sky-300',
    slate: 'bg-white/10 text-slate-300',
  };
  return (
    <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold leading-4 ${tones[tone]}`}>
      {children}
    </span>
  );
}
