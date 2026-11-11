import { motion } from 'framer-motion';
import { ChevronRight, MessageSquare, Settings, ShieldCheck, Target } from 'lucide-react';
import { approachSteps } from '../../data/approach';

const ThreeStepMethod = () => (
  <section className="relative py-16 sm:py-24 bg-white overflow-hidden border-t border-slate-100">
    <div className="absolute top-0 right-0 w-2/3 h-full bg-[#F4F8FD]/60 rounded-bl-[140px] pointer-events-none -z-0" />
    <div className="hidden lg:block absolute top-12 right-12 w-28 h-14 bg-[radial-gradient(#93C5FD_2px,transparent_2px)] [background-size:12px_12px] opacity-75 pointer-events-none z-0" />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
      <div className="mb-12 sm:mb-16">
        <div className="text-xs font-['Sora'] font-bold text-[#E71E28] tracking-widest uppercase mb-2">
          EXECUTION RIGOR
        </div>
        <h2 className="font-['Sora'] font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-[#0B1528] tracking-tight leading-tight mt-1">
          {'Three Steps. '}
          <span className="text-[#E71E28]">No Shortcuts.</span>
        </h2>
        <div className="w-12 h-1 bg-[#E71E28] rounded-full mt-3 mb-4" />
        <p className="text-sm sm:text-base text-slate-500 max-w-2xl leading-relaxed font-normal">
          A structured approach that ensures the right people, the right process, and the right outcomes —
          every time.
        </p>
      </div>
      <div className="relative mb-12 sm:mb-14">
        <div
          className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] -translate-y-1/2 h-[1.5px] bg-blue-200/80 z-0"
          aria-hidden="true"
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative items-stretch z-10">
          {approachSteps.map((item, index) => {
            const Icon = item.icon;
            const isRed = item.accent === 'red';
            return (
              <div key={item.title} className="relative flex flex-col">
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 28,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.015,
                  }}
                  className="group glossy-card-light sheen-sweep rounded-3xl p-7 sm:p-8 flex flex-col justify-between flex-1 relative overflow-hidden"
                >
                  <div>
                    <div className="flex items-center gap-5 mb-6">
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 ${isRed ? 'bg-red-50 ring-8 ring-red-50/50 text-[#E71E28]' : 'bg-blue-50 ring-8 ring-blue-50/50 text-[#2563EB]'}`}
                      >
                        <Icon className="w-7 h-7" strokeWidth={1.9} />
                      </div>
                      <div>
                        <span className="text-[11px] font-['Sora'] font-semibold text-slate-400 tracking-wider uppercase block">
                          {item.stepNumber}
                        </span>
                        <h3 className="font-['Sora'] font-bold text-xl text-[#0B1528] leading-tight mt-0.5">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-auto">
                    <div className="w-6 h-0.5 bg-[#E71E28] rounded-full mb-3" />
                    <span className="text-[11px] font-['Sora'] font-bold text-slate-400 tracking-widest uppercase">
                      {item.tag}
                    </span>
                  </div>
                </motion.div>
                {index < approachSteps.length - 1 && (
                  <div
                    className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm items-center justify-center text-[#E71E28]"
                    aria-hidden="true"
                  >
                    <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="glossy-card-light sheen-sweep rounded-2xl sm:rounded-full p-4 sm:px-8 sm:py-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6">
        <div className="flex items-center gap-2 pr-6 lg:border-r lg:border-slate-200 shrink-0">
          <span className="w-2 h-2 rounded-full bg-[#E71E28]" />
          <span className="text-xs font-['Sora'] font-bold tracking-widest text-slate-700 uppercase">
            DELIVERY STANDARDS
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 flex-1 lg:pl-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-[#E71E28] shrink-0">
              <Target className="w-4 h-4" />
            </div>
            <span className="text-xs sm:text-sm font-['Sora'] font-bold text-[#0B1528]">Focused search</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB] shrink-0">
              <MessageSquare className="w-4 h-4" />
            </div>
            <span className="text-xs sm:text-sm font-['Sora'] font-bold text-[#0B1528]">
              Clear communication
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-[#E71E28] shrink-0">
              <Settings className="w-4 h-4" />
            </div>
            <span className="text-xs sm:text-sm font-['Sora'] font-bold text-[#0B1528]">
              Flexible engagement
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB] shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <span className="text-xs sm:text-sm font-['Sora'] font-bold text-[#0B1528]">
              Accountable delivery
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-8 pt-4 text-xs font-['Sora'] font-semibold tracking-wider uppercase text-slate-400">
        <div>PEOPLE  |  OPPORTUNITIES  |  GROWTH</div>
        <div className="flex items-center gap-2">
          <span className="w-6 h-0.5 bg-[#E71E28] rounded-full inline-block" />
          <span>A BRIGHTER TOMORROW, TOGETHER</span>
        </div>
      </div>
    </div>
  </section>
);

export default ThreeStepMethod;
