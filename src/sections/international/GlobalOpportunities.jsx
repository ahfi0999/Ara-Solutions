import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarCheck, CircleCheck, Globe, Users, X as XIcon } from 'lucide-react';
import { globalServices } from '../../data/international';
import { useRouter } from '../../lib/router';

const GlobalOpportunities = () => {
  const { navigate } = useRouter();
  const [activeItem, setActiveItem] = useState(null);
  const itemIcon = (type, accent) => {
    switch (type) {
      case 'globe':
        return <Globe className="w-6 h-6 text-[#FF4D57]" strokeWidth={2} />;
      case 'consulting':
        return <Users className="w-6 h-6 text-[#60A5FA]" strokeWidth={2} />;
      case 'coordination':
        return <CalendarCheck className="w-6 h-6 text-[#FF4D57]" strokeWidth={2} />;
    }
  };
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#0B0E1A] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#204282]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#E71E28]/10 rounded-full blur-3xl pointer-events-none" />
      <div
        className="absolute inset-x-0 top-6 h-64 pointer-events-none opacity-20 -z-10 flex justify-center overflow-hidden"
        aria-hidden="true"
      >
        <svg className="w-full max-w-5xl h-full text-slate-400" viewBox="0 0 1000 350" fill="currentColor">
          <g opacity="0.75">
            <circle cx="160" cy="110" r="3" />
            <circle cx="175" cy="100" r="3" />
            <circle cx="190" cy="115" r="3" />
            <circle cx="210" cy="95" r="3.5" />
            <circle cx="230" cy="105" r="3" />
            <circle cx="200" cy="130" r="3" />
            <circle cx="225" cy="140" r="3" />
            <circle cx="240" cy="155" r="3.5" />
            <circle cx="260" cy="180" r="3" />
            <circle cx="280" cy="210" r="3" />
            <circle cx="295" cy="240" r="3.5" />
            <circle cx="280" cy="270" r="3" />
            <circle cx="490" cy="90" r="3" />
            <circle cx="510" cy="80" r="3.5" />
            <circle cx="530" cy="95" r="3" />
            <circle cx="550" cy="90" r="3" />
            <circle cx="500" cy="120" r="3.5" />
            <circle cx="525" cy="140" r="3" />
            <circle cx="540" cy="165" r="3" />
            <circle cx="550" cy="200" r="3.5" />
            <circle cx="565" cy="235" r="3" />
            <circle cx="560" cy="270" r="3" />
            <circle cx="680" cy="110" r="3.5" />
            <circle cx="710" cy="100" r="3" />
            <circle cx="735" cy="115" r="3" />
            <circle cx="765" cy="110" r="3.5" />
            <circle cx="700" cy="145" r="3.5" />
            <circle cx="730" cy="160" r="3" />
            <circle cx="760" cy="170" r="3" />
            <circle cx="780" cy="150" r="3.5" />
            <circle cx="810" cy="130" r="3" />
            <circle cx="840" cy="140" r="3.5" />
            <circle cx="820" cy="240" r="3" />
            <circle cx="850" cy="260" r="3.5" />
          </g>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative mb-14 sm:mb-16">
          <div className="hidden lg:flex items-center gap-3 absolute left-0 top-1">
            <span className="w-[3px] h-10 bg-[#E71E28] rounded-full shrink-0" />
            <div className="font-['Sora'] text-[11px] font-semibold text-slate-400 tracking-[0.2em] leading-[1.35] uppercase">
              <div>PEOPLE</div>
              <div>ACROSS</div>
              <div>BORDERS</div>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-3 absolute right-0 top-1 text-right">
            <div className="font-['Sora'] text-[11px] font-semibold text-slate-400 tracking-[0.2em] leading-[1.35] uppercase">
              <div>TALENT</div>
              <div>MARKETS</div>
              <div>OPPORTUNITIES</div>
            </div>
            <span className="w-[3px] h-10 bg-[#E71E28] rounded-full shrink-0" />
          </div>
          <div className="text-center max-w-3xl mx-auto pt-2">
            <div className="flex items-center justify-center gap-3.5 mb-3">
              <span className="w-10 h-[2.5px] bg-[#E71E28] rounded-full inline-block" />
              <span className="font-['Sora'] font-bold text-xs sm:text-[13px] text-[#E71E28] uppercase tracking-[0.2em]">
                GLOBAL TALENT SOLUTIONS
              </span>
              <span className="w-10 h-[2.5px] bg-[#E71E28] rounded-full inline-block" />
            </div>
            <h2 className="font-['Sora'] font-extrabold text-2xl sm:text-3xl lg:text-[40px] text-white tracking-tight leading-tight">
              {'International '}
              <span className="text-[#E71E28]">Consulting Services</span>
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base font-normal leading-relaxed max-w-2xl mx-auto">
              Helping you access global talent with local expertise and compliance.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {globalServices.map((item, index) => {
            const isRed = item.accent === 'red';
            return (
              <motion.div
                key={item.id}
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
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -8,
                  scale: 1.015,
                }}
                className={`glossy-card sheen-sweep rounded-2xl p-7 sm:p-8 relative flex flex-col justify-between group ${isRed ? 'border-b-[3.5px] border-b-[#E71E28]' : 'border-b-[3.5px] border-b-[#3B82F6]'}`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-13 h-13 rounded-full flex items-center justify-center shadow-2xs ${isRed ? 'bg-red-500/15 text-[#FF4D57] border border-red-500/30' : 'bg-blue-500/15 text-[#60A5FA] border border-blue-500/30'}`}
                    >
                      {itemIcon(item.iconType, item.accent)}
                    </div>
                    <span
                      className="font-['Sora'] font-extrabold text-5xl sm:text-6xl text-white/[0.08] select-none pointer-events-none tracking-tight group-hover:text-white/[0.14] transition-colors"
                      aria-hidden="true"
                    >
                      {item.number}
                    </span>
                  </div>
                  <h3 className="font-['Sora'] font-bold text-xl text-white tracking-tight mt-6 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-300 font-normal leading-relaxed mb-6 min-h-[66px]">
                    {item.description}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveItem(item)}
                  className="flex items-center gap-2 text-xs sm:text-sm font-['Sora'] font-bold text-slate-200 pt-2 w-fit group/btn cursor-pointer transition-colors"
                >
                  <span className="group-hover/btn:text-[#FF4D57] transition-colors">Learn More</span>
                  <span
                    className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all group-hover/btn:translate-x-1 ${isRed ? 'border-[#E71E28] text-[#FF4D57] group-hover/btn:bg-[#E71E28] group-hover/btn:text-white' : 'border-[#3B82F6] text-[#60A5FA] group-hover/btn:bg-[#3B82F6] group-hover/btn:text-white'}`}
                  >
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.2} />
                  </span>
                </button>
              </motion.div>
            );
          })}
        </div>
        <div className="flex items-center justify-center gap-4 mt-16 sm:mt-20">
          <div className="w-20 sm:w-32 h-px bg-white/15" />
          <span className="font-['Sora'] text-xs sm:text-[13px] font-semibold text-slate-400 tracking-[0.22em] uppercase text-center">
            CONNECTING TALENT. POWERING GROWTH.
          </span>
          <div className="w-20 sm:w-32 h-px bg-white/15" />
        </div>
      </div>
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-100 relative animate-in fade-in zoom-in-95 duration-200">
            <button
              type="button"
              onClick={() => setActiveItem(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <XIcon className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-['Sora'] font-bold text-xs text-[#E71E28] uppercase tracking-wider">
                {'Service '}
                {activeItem.number}
                {' Overview'}
              </span>
            </div>
            <h3 className="font-['Sora'] font-extrabold text-2xl text-[#0B1C44] tracking-tight mb-2">
              {activeItem.title}
            </h3>
            <p className="text-sm text-slate-600 font-normal leading-relaxed mb-6">
              {activeItem.description}
            </p>
            <div className="mb-6">
              <h4 className="font-['Sora'] font-bold text-xs uppercase tracking-wider text-slate-400 mb-3">
                Key Scope & Deliverables
              </h4>
              <ul className="space-y-2.5">
                {activeItem.details.map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CircleCheck className="w-4 h-4 text-[#E71E28] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => {
                  setActiveItem(null);
                  navigate('/contact');
                }}
                className="flex-1 py-3 px-5 rounded-full bg-[#0B2558] hover:bg-[#07193b] text-white font-['Sora'] font-bold text-xs sm:text-sm transition-colors text-center cursor-pointer shadow-sm"
              >
                Inquire About Service
              </button>
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="py-3 px-5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-['Sora'] font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GlobalOpportunities;
