import { Fragment } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Briefcase,
  Check,
  Clock,
  FileText,
  Handshake,
  Layers,
  Maximize2,
  Rocket,
  Search,
  Settings,
  ShieldCheck,
  Target,
  UserCheck,
  Users,
  Zap,
} from 'lucide-react';
import { useRouter } from '../../lib/router';

const EngagementComparison = ({
  kicker = 'ENGAGEMENT COMPARISON',
  headline = 'Engagement Model Comparison',
  subhead = 'Select the talent structure aligned with your operational roadmap and financial priorities.',
  cards,
}) => {
  const { navigate } = useRouter();
  const modelIcon = (name) => {
    switch (name) {
      case 'handshake':
        return <Handshake className="w-7 h-7" strokeWidth={1.75} />;
      case 'users':
        return <Users className="w-7 h-7" strokeWidth={1.75} />;
      case 'clock':
        return <Clock className="w-7 h-7" strokeWidth={1.75} />;
      case 'briefcase':
        return <Briefcase className="w-7 h-7" strokeWidth={1.75} />;
      default:
        return <Briefcase className="w-7 h-7" strokeWidth={1.75} />;
    }
  };
  const featureIcon = (name) => {
    switch (name) {
      case 'zap':
        return <Zap className="w-4.5 h-4.5" strokeWidth={2} />;
      case 'rocket':
        return <Rocket className="w-4.5 h-4.5" strokeWidth={2} />;
      case 'target':
        return <Target className="w-4.5 h-4.5" strokeWidth={2} />;
      case 'fileText':
      case 'file':
        return <FileText className="w-4.5 h-4.5" strokeWidth={2} />;
      case 'maximize':
      case 'scale':
        return <Maximize2 className="w-4.5 h-4.5" strokeWidth={2} />;
      case 'userCheck':
      case 'direct':
        return <UserCheck className="w-4.5 h-4.5" strokeWidth={2} />;
      case 'search':
        return <Search className="w-4.5 h-4.5" strokeWidth={2} />;
      case 'layers':
        return <Layers className="w-4.5 h-4.5" strokeWidth={2} />;
      case 'settings':
        return <Settings className="w-4.5 h-4.5" strokeWidth={2} />;
      case 'shieldCheck':
      case 'shield':
        return <ShieldCheck className="w-4.5 h-4.5" strokeWidth={2} />;
      default:
        return <Check className="w-4.5 h-4.5" strokeWidth={2.5} />;
    }
  };
  return (
    <section className="relative py-16 sm:py-24 bg-[#FAFBFE] overflow-hidden border-t border-slate-200/80">
      <div
        className="absolute top-8 right-6 sm:right-16 pointer-events-none opacity-40 grid grid-cols-6 gap-2"
        aria-hidden="true"
      >
        {Array.from({
          length: 24,
        }).map((item, index) => (
          <div key={index} className="w-1.5 h-1.5 rounded-full bg-[#E71E28]" />
        ))}
      </div>
      <div
        className="absolute bottom-10 left-6 sm:left-14 pointer-events-none opacity-30 grid grid-cols-4 gap-2"
        aria-hidden="true"
      >
        {Array.from({
          length: 16,
        }).map((item, index) => (
          <div key={index} className="w-1.5 h-1.5 rounded-full bg-[#0F2A60]" />
        ))}
      </div>
      <div
        className="absolute -left-20 top-1/3 w-80 h-80 rounded-full border border-blue-100/60 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -right-24 top-1/2 w-96 h-96 rounded-full border border-red-100/60 pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {(kicker || headline || subhead) && (
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            {kicker && (
              <div className="text-xs sm:text-[13px] font-['Sora'] font-bold text-[#E71E28] uppercase tracking-wider mb-2">
                {kicker}
              </div>
            )}
            {headline && (
              <h2 className="font-['Sora'] font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#0B1C44] tracking-tight">
                {typeof headline === 'string' && headline.includes('Comparison') ? (
                  <>
                    <span className="text-[#0B1C44]">{headline.replace('Comparison', '').trim()}</span>{' '}
                    <span className="text-[#E71E28]">Comparison</span>
                  </>
                ) : (
                  headline
                )}
              </h2>
            )}
            {subhead && (
              <p className="mt-3 text-sm sm:text-base text-slate-500 font-normal leading-relaxed">
                {subhead}
              </p>
            )}
            <div className="w-14 h-1 bg-[#E71E28] rounded-full mx-auto mt-4" />
          </div>
        )}
        <div className="relative w-full max-w-7xl mx-auto">
          <div
            className="hidden lg:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 z-20 flex-col items-center justify-center pointer-events-none py-10"
            aria-hidden="true"
          >
            <div className="w-px flex-1 bg-slate-200" />
            <div className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-[0_4px_16px_rgba(15,42,96,0.08)] flex items-center justify-center font-['Sora'] font-extrabold text-xs text-[#0B1C44] my-4 pointer-events-auto">
              VS
            </div>
            <div className="w-px flex-1 bg-slate-200" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {cards.map((item, index) => {
              const isHighlighted = item.badgeColor === 'red' || !!item.highlighted;
              const watermark = item.numberWatermark || (index === 0 ? '01' : '02');
              return (
                <Fragment key={index}>
                  {index === 1 && (
                    <div className="flex lg:hidden items-center justify-center gap-3 my-2">
                      <div className="h-px bg-slate-200 flex-1" />
                      <div className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center font-['Sora'] font-bold text-xs text-[#0B1C44]">
                        VS
                      </div>
                      <div className="h-px bg-slate-200 flex-1" />
                    </div>
                  )}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 32,
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
                      scale: 1.012,
                    }}
                    className={`relative glossy-card-light sheen-sweep ${isHighlighted ? 'border-red-200/90' : 'border-blue-200/90'} p-6 sm:p-9 flex flex-col justify-between overflow-hidden cursor-default`}
                  >
                    <div
                      className={`absolute top-5 right-7 font-['Sora'] font-black text-5xl sm:text-6xl select-none pointer-events-none ${isHighlighted ? 'text-red-100/80' : 'text-blue-100/80'}`}
                      aria-hidden="true"
                    >
                      {watermark}
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${isHighlighted ? 'bg-red-50 border border-red-100 text-[#E71E28]' : 'bg-blue-50 border border-blue-100 text-blue-600'}`}
                        >
                          {modelIcon(item.icon)}
                        </div>
                        <div>
                          {item.kicker && (
                            <div
                              className={`text-[11px] sm:text-xs font-['Sora'] font-bold uppercase tracking-wider ${isHighlighted ? 'text-[#E71E28]' : 'text-blue-600'}`}
                            >
                              {item.kicker}
                            </div>
                          )}
                          <h3 className="font-['Sora'] font-bold text-xl sm:text-2xl text-[#0B1C44] leading-tight">
                            {item.title}
                          </h3>
                          {item.subTitle && (
                            <div className="text-xs sm:text-[13px] text-slate-500 mt-0.5">
                              {item.subTitle}
                            </div>
                          )}
                        </div>
                      </div>
                      <p className="text-sm sm:text-[14.5px] text-slate-600 font-normal leading-relaxed mt-4 mb-6">
                        {item.description}
                      </p>
                      <div className="w-full h-px bg-slate-100 mb-5" />
                      {item.features && item.features.length > 0 ? (
                        <div className="space-y-4">
                          {item.features.map((entry, entryIndex) => (
                            <div
                              key={entryIndex}
                              className="flex items-center gap-3.5 pb-3.5 border-b border-slate-100/70 last:border-b-0 last:pb-0"
                            >
                              <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${isHighlighted ? 'bg-red-50 text-[#E71E28]' : 'bg-blue-50 text-blue-600'}`}
                              >
                                {featureIcon(entry.icon)}
                              </div>
                              <div className="min-w-0">
                                <h4 className="font-['Sora'] font-bold text-sm text-[#0B1C44] leading-tight">
                                  {entry.title}
                                </h4>
                                <p className="text-xs sm:text-[13px] text-slate-500 mt-0.5 leading-snug">
                                  {entry.subtitle}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : item.bullets && item.bullets.length > 0 ? (
                        <ul className="space-y-3.5">
                          {item.bullets.map((entry, entryIndex) => (
                            <li key={entryIndex} className="flex items-start gap-3">
                              <div
                                className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${isHighlighted ? 'bg-[#E71E28] text-white' : 'bg-blue-600 text-white'}`}
                              >
                                <Check className="w-3 h-3 stroke-[3]" />
                              </div>
                              <span className="text-sm text-slate-700 font-medium leading-snug">{entry}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                    <div className="relative z-10 mt-8 pt-6 border-t border-slate-100/80">
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                        <button
                          type="button"
                          onClick={() => navigate('/contact')}
                          className={`w-full sm:w-auto py-3.5 px-6 sm:px-7 font-['Sora'] font-semibold text-sm rounded-xl transition-all flex items-center justify-center gap-2 group shrink-0 cursor-pointer ${isHighlighted ? 'bg-[#E71E28] hover:bg-[#D01923] text-white shadow-[0_8px_20px_rgba(231,30,40,0.25)]' : 'bg-[#0B2558] hover:bg-[#081C44] text-white shadow-[0_8px_20px_rgba(11,37,88,0.2)]'}`}
                        >
                          <span>Discuss This Model</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>
                        {item.footerNote && (
                          <div className="flex items-center gap-3">
                            <div
                              className={`hidden sm:block w-0.5 h-8 rounded-full shrink-0 ${isHighlighted ? 'bg-[#E71E28]' : 'bg-blue-600'}`}
                            />
                            <span className="text-xs sm:text-[13px] text-slate-600 font-normal leading-snug">
                              {item.footerNote}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementComparison;
