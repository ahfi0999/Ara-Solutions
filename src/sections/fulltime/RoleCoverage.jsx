import { motion } from 'framer-motion';
import {
  Brain,
  Briefcase,
  Calculator,
  ChartNoAxesColumn,
  Cloud,
  CodeXml,
  Cpu,
  Headphones,
  Layers,
  Settings,
  ShieldCheck,
  Target,
  TrendingUp,
  UserCheck,
  Users,
} from 'lucide-react';

const RoleCoverage = ({
  kicker = 'TALENT COVERAGE',
  headline = 'Domain Coverage Across Roles',
  subhead = 'End-to-end hiring support across technical and business functions to meet your evolving needs.',
  columnA,
  columnB,
}) => (
  <section className="relative py-16 sm:py-24 bg-[#FFFFFF] overflow-hidden">
    <div
      className="hidden sm:grid grid-cols-4 gap-2.5 absolute bottom-8 left-6 opacity-35 pointer-events-none"
      aria-hidden="true"
    >
      {Array.from({
        length: 20,
      }).map((item, index) => (
        <div key={index} className="w-1.5 h-1.5 rounded-full bg-slate-300" />
      ))}
    </div>
    <div
      className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-red-100/40 blur-3xl pointer-events-none"
      aria-hidden="true"
    />
    <div
      className="absolute -top-12 -right-12 w-80 h-80 pointer-events-none opacity-45 overflow-hidden"
      aria-hidden="true"
    >
      <svg viewBox="0 0 200 200" className="w-full h-full fill-none">
        <circle cx="170" cy="30" r="85" stroke="#E71E28" strokeWidth="1.2" strokeOpacity="0.25" />
        <circle cx="170" cy="30" r="125" stroke="#E71E28" strokeWidth="1" strokeOpacity="0.15" />
        <circle cx="115" cy="85" r="7.5" fill="#E71E28" />
      </svg>
    </div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12 sm:mb-14">
        <div className="max-w-2xl">
          {kicker && (
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-xs sm:text-[13px] font-['Sora'] font-bold text-[#E71E28] uppercase tracking-wider">
                {kicker}
              </span>
              <span className="w-8 h-0.5 bg-[#E71E28] rounded-full inline-block" />
            </div>
          )}
          {headline && (
            <h2 className="font-['Sora'] font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#0B1C44] tracking-tight">
              {typeof headline === 'string' && headline.includes('Across Roles') ? (
                <>
                  <span className="text-[#0B1C44]">{headline.replace('Across Roles', '').trim()}</span>{' '}
                  <span className="text-[#E71E28]">Across Roles</span>
                </>
              ) : (
                headline
              )}
            </h2>
          )}
          {subhead && (
            <p className="mt-2.5 text-sm sm:text-base text-slate-500 font-normal leading-relaxed">
              {subhead}
            </p>
          )}
        </div>
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-6 lg:gap-8 shrink-0">
          <div className="hidden lg:block h-10 w-px bg-slate-200" />
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 border border-blue-100/80 flex items-center justify-center shrink-0 shadow-xs">
              <Users className="w-5 h-5" strokeWidth={2} />
            </div>
            <div>
              <h4 className="font-['Sora'] font-bold text-sm text-[#0B1C44] leading-tight">
                Broader Coverage
              </h4>
              <p className="text-xs text-slate-500 mt-0.5 font-normal">One hiring partner, multiple roles</p>
            </div>
          </div>
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-full bg-red-50 text-[#E71E28] border border-red-100/80 flex items-center justify-center shrink-0 shadow-xs">
              <Target className="w-5 h-5" strokeWidth={2} />
            </div>
            <div>
              <h4 className="font-['Sora'] font-bold text-sm text-[#0B1C44] leading-tight">
                Business Aligned
              </h4>
              <p className="text-xs text-slate-500 mt-0.5 font-normal">Talent for every function</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        <motion.div
          initial={{
            opacity: 0,
            x: -30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1],
          }}
          whileHover={{
            y: -8,
            scale: 1.012,
          }}
          className="relative glossy-card-light sheen-sweep p-7 sm:p-9 flex flex-col justify-between overflow-hidden"
        >
          <div
            className="absolute top-0 right-0 w-16 h-36 bg-[#204282] pointer-events-none rounded-tr-3xl"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
            }}
            aria-hidden="true"
          />
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#282870] to-[#204282] text-white flex items-center justify-center shadow-md shrink-0">
                  <Cpu className="w-7 h-7" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-['Sora'] font-bold text-2xl text-[#0B1C44] leading-tight">
                    {columnA.title}
                  </h3>
                  <div className="text-[10px] sm:text-[11px] font-['Sora'] font-bold text-[#204282] tracking-[0.2em] uppercase mt-1">
                    {columnA.badge || 'TECHNICAL DEPTH'}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <div className="hidden sm:block w-px h-8 bg-slate-200 shrink-0" />
                <p className="hidden sm:block text-xs sm:text-[13px] text-slate-500 max-w-[170px] leading-snug font-normal">
                  {columnA.subtitle || 'Powering innovation with technical excellence.'}
                </p>
              </div>
            </div>
            <div className="w-full h-px bg-slate-100 my-4" />
            <ul className="divide-y divide-slate-100">
              {columnA.items.map((item, index) => (
                <li key={index} className="py-3 flex items-center gap-3.5 sm:gap-4 group cursor-default">
                  <div className="w-9 h-9 rounded-full bg-blue-50 text-[#204282] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#204282] group-hover:text-white transition-all duration-200">
                    {itRoleIcon(item, index)}
                  </div>
                  <span className="text-sm sm:text-[15px] font-medium text-slate-800 leading-snug group-hover:text-[#204282] transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: 30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1],
          }}
          whileHover={{
            y: -8,
            scale: 1.012,
          }}
          className="relative glossy-card-light sheen-sweep p-7 sm:p-9 flex flex-col justify-between overflow-hidden"
        >
          <div
            className="absolute top-0 right-0 w-16 h-36 bg-[#E71E28] pointer-events-none rounded-tr-3xl"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
            }}
            aria-hidden="true"
          />
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E71E28] to-[#B8141D] text-white flex items-center justify-center shadow-md shrink-0">
                  <Users className="w-7 h-7" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-['Sora'] font-bold text-2xl text-[#0B1C44] leading-tight">
                    {columnB.title}
                  </h3>
                  <div className="text-[10px] sm:text-[11px] font-['Sora'] font-bold text-[#E71E28] tracking-[0.2em] uppercase mt-1">
                    {columnB.badge || 'BUSINESS DOMAIN'}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <div className="hidden sm:block w-px h-8 bg-slate-200 shrink-0" />
                <p className="hidden sm:block text-xs sm:text-[13px] text-slate-500 max-w-[170px] leading-snug font-normal">
                  {columnB.subtitle || 'Driving growth through people and operations.'}
                </p>
              </div>
            </div>
            <div className="w-full h-px bg-slate-100 my-4" />
            <ul className="divide-y divide-slate-100">
              {columnB.items.map((item, index) => (
                <li key={index} className="py-3 flex items-center gap-3.5 sm:gap-4 group cursor-default">
                  <div className="w-9 h-9 rounded-full bg-red-50 text-[#E71E28] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#E71E28] group-hover:text-white transition-all duration-200">
                    {nonItRoleIcon(item, index)}
                  </div>
                  <span className="text-sm sm:text-[15px] font-medium text-slate-800 leading-snug group-hover:text-[#E71E28] transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
      <div className="mt-14 sm:mt-16 flex items-center justify-center gap-4 text-center">
        <div className="w-12 sm:w-20 h-px bg-slate-200" />
        <span className="text-[10px] sm:text-[11px] font-['Sora'] font-bold text-slate-400 tracking-[0.25em] uppercase">
          TALENT FOR A STRONGER TOMORROW
        </span>
        <div className="w-12 sm:w-20 h-px bg-slate-200" />
      </div>
    </div>
  </section>
);

export default RoleCoverage;

export const itRoleIcon = (role, index) => {
  const text = role.toLowerCase();
  return text.includes('software') || text.includes('frontend') || text.includes('backend') ? (
    <CodeXml className="w-4.5 h-4.5" strokeWidth={2} />
  ) : text.includes('cloud') || text.includes('devops') ? (
    <Cloud className="w-4.5 h-4.5" strokeWidth={2} />
  ) : text.includes('data') || text.includes('analytics') || text.includes('bi') ? (
    <ChartNoAxesColumn className="w-4.5 h-4.5" strokeWidth={2} />
  ) : text.includes('ai') || text.includes('ml') || text.includes('automation') ? (
    <Brain className="w-4.5 h-4.5" strokeWidth={2} />
  ) : text.includes('cyber') || text.includes('security') || text.includes('infosec') ? (
    <ShieldCheck className="w-4.5 h-4.5" strokeWidth={2} />
  ) : text.includes('platform') || text.includes('salesforce') || text.includes('servicenow') ? (
    <Layers className="w-4.5 h-4.5" strokeWidth={2} />
  ) : (
    <CodeXml className="w-4.5 h-4.5" strokeWidth={2} />
  );
};

export const nonItRoleIcon = (role, index) => {
  const text = role.toLowerCase();
  return text.includes('sales') || text.includes('account') ? (
    <TrendingUp className="w-4.5 h-4.5" strokeWidth={2} />
  ) : text.includes('human resources') || text.includes('talent') || text.includes('hr') ? (
    <UserCheck className="w-4.5 h-4.5" strokeWidth={2} />
  ) : text.includes('operations') || text.includes('process') ? (
    <Settings className="w-4.5 h-4.5" strokeWidth={2} />
  ) : text.includes('finance') || text.includes('accounting') || text.includes('controlling') ? (
    <Calculator className="w-4.5 h-4.5" strokeWidth={2} />
  ) : text.includes('executive') || text.includes('administrative') ? (
    <Briefcase className="w-4.5 h-4.5" strokeWidth={2} />
  ) : text.includes('customer') || text.includes('support') ? (
    <Headphones className="w-4.5 h-4.5" strokeWidth={2} />
  ) : (
    <Users className="w-4.5 h-4.5" strokeWidth={2} />
  );
};
