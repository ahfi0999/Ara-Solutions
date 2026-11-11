import { motion } from 'framer-motion';
import { ChartColumn, Clock, Users } from 'lucide-react';

const CostOfBadHires = () => (
  <section className="relative py-16 sm:py-24 bg-gradient-to-br from-[#061536] via-[#091D4A] to-[#040C20] text-white overflow-hidden border-t border-blue-900/40">
    <div
      className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none"
      aria-hidden="true"
    />
    <div
      className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
      aria-hidden="true"
    />
    <div
      className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#E71E28]/15 rounded-full blur-3xl pointer-events-none"
      aria-hidden="true"
    />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        <div className="lg:col-span-6 xl:col-span-6">
          <div className="inline-flex items-center gap-2.5 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E71E28] shrink-0 shadow-[0_0_10px_rgba(231,30,40,0.9)]" />
            <span className="text-xs font-['Sora'] font-bold text-slate-300 uppercase tracking-widest">
              LONG-TERM IMPACT
            </span>
          </div>
          <h2 className="font-['Sora'] font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-white tracking-tight leading-[1.18] mb-6">
            The cost of a wrong{' '}
            <span className="text-[#E71E28] block sm:inline">long-term hire keeps climbing</span>
          </h2>
          <div className="space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-xl mb-8">
            <p>
              A permanent hire is an investment in your company's culture, institutional knowledge, and
              long-term capability. The cost of getting it wrong — in lost productivity, team disruption, and
              the expense of re-recruiting — is higher than ever.
            </p>
            <p>
              ARA Solutions manages the permanent search process from discovery through placement with the
              rigor a long-term commitment deserves. We qualify candidates thoroughly on capability, culture,
              and readiness — and stay involved through the crucial early months.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-6 border-t border-blue-500/20">
            {[
              {
                title: 'Team Disruption',
                desc: 'Impacts performance and morale',
                icon: Users,
              },
              {
                title: 'Higher Costs',
                desc: 'Re-hiring, training & lost productivity',
                icon: ChartColumn,
              },
              {
                title: 'Time Lost',
                desc: 'Sets back critical goals',
                icon: Clock,
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 16,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 * index,
                  }}
                  whileHover={{
                    y: -3,
                    scale: 1.02,
                  }}
                  className="glossy-card rounded-2xl p-3.5 sm:p-4 border border-blue-500/20 flex flex-col justify-between cursor-default group transition-all"
                >
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-[#1A1A40] border border-red-500/30 flex items-center justify-center text-[#E71E28] mb-2.5 group-hover:scale-105 transition-transform shrink-0">
                      <Icon className="w-4 h-4" strokeWidth={2.2} />
                    </div>
                    <div className="font-['Sora'] font-bold text-xs sm:text-[13px] text-white leading-tight mb-1">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-slate-300 font-normal leading-snug">{item.desc}</div>
                  </div>
                  <div className="w-5 h-0.5 bg-[#E71E28] rounded-full mt-3" />
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className="lg:col-span-6 xl:col-span-6 relative mt-10 lg:mt-0">
          <div className="relative mx-auto max-w-[540px]">
            <div className="relative rounded-3xl glossy-card sheen-sweep p-5 sm:p-7 pt-12 sm:pt-14 pb-6 overflow-hidden min-h-[440px] flex flex-col justify-between">
              <div className="absolute inset-0 px-6 sm:px-8 py-8 flex flex-col justify-between pointer-events-none opacity-20">
                <div className="w-full border-b border-blue-400 border-dashed" />
                <div className="w-full border-b border-blue-400 border-dashed" />
                <div className="w-full border-b border-blue-400 border-dashed" />
                <div className="w-full border-b border-blue-400" />
              </div>
              <div className="relative w-full h-[280px] sm:h-[300px] flex items-end justify-between px-3 sm:px-6 pb-2 z-10">
                {[
                  {
                    height: '20%',
                    label: 'Discovery',
                  },
                  {
                    height: '32%',
                    label: 'Onboarding',
                  },
                  {
                    height: '46%',
                    label: 'Ramp-Up',
                  },
                  {
                    height: '62%',
                    label: 'Friction',
                  },
                  {
                    height: '78%',
                    label: 'Disruption',
                  },
                  {
                    height: '94%',
                    label: 'Replacement',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center h-full justify-end w-7 sm:w-11">
                    <div
                      style={{
                        height: item.height,
                      }}
                      className="w-full rounded-t-xl bg-gradient-to-t from-blue-900/60 via-blue-600/30 to-blue-400/25 border-t border-x border-blue-400/30 shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300 hover:brightness-125"
                    />
                  </div>
                ))}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                  viewBox="0 0 460 280"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="curveGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#E71E28" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#FF4D58" stopOpacity="1" />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#E71E28" floodOpacity="0.8" />
                    </filter>
                  </defs>
                  <path
                    d="M 28,225 C 110,215 180,185 270,125 C 330,85 390,45 432,22"
                    fill="none"
                    stroke="url(#curveGradient)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    filter="url(#glow)"
                  />
                  <circle cx="28" cy="225" r="3.5" fill="#FFFFFF" stroke="#E71E28" strokeWidth="2" />
                  <circle cx="108" cy="198" r="3.5" fill="#FFFFFF" stroke="#E71E28" strokeWidth="2" />
                  <circle cx="190" cy="165" r="3.5" fill="#FFFFFF" stroke="#E71E28" strokeWidth="2" />
                  <circle cx="270" cy="125" r="3.5" fill="#FFFFFF" stroke="#E71E28" strokeWidth="2" />
                  <circle cx="352" cy="74" r="3.5" fill="#FFFFFF" stroke="#E71E28" strokeWidth="2" />
                </svg>
                <div className="absolute top-[8px] sm:top-[10px] right-[10px] sm:right-[18px] pointer-events-none z-20 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#E71E28]/30 animate-ping absolute" />
                  <div className="w-8 h-8 rounded-full bg-[#E71E28]/40 flex items-center justify-center shadow-[0_0_24px_rgba(231,30,40,1)]">
                    <div className="w-4 h-4 rounded-full bg-white shadow-[0_0_12px_#fff]" />
                  </div>
                </div>
              </div>
              <div className="relative z-10 mt-3 pt-3 border-t border-blue-500/20 flex justify-center">
                <div className="inline-flex items-center px-4 sm:px-6 py-2 rounded-xl bg-[#061536]/90 border border-blue-400/30 shadow-[0_4px_16px_rgba(0,0,0,0.4)]">
                  <span className="text-[10px] sm:text-xs font-['Sora'] font-semibold text-blue-200 tracking-[0.18em] uppercase">
                    INVEST RIGHT. BUILD STRONGER TOMORROW.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CostOfBadHires;
