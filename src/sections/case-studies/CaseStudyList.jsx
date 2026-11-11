import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, CircleCheck, X as XIcon } from 'lucide-react';
import { caseStudies } from '../../data/caseStudies';
import { useRouter } from '../../lib/router';

const CaseStudyList = () => {
  const { navigate } = useRouter();
  const [activeStudy, setActiveStudy] = useState(null);
  return (
    <section className="relative py-16 sm:py-24 bg-[#F0F5FD] overflow-hidden border-t border-[#DCE7F5]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mb-14 sm:mb-16 text-center max-w-3xl mx-auto">
          <div
            className="hidden lg:grid grid-cols-5 gap-2.5 absolute -top-4 -left-28 w-28 opacity-75 pointer-events-none"
            aria-hidden="true"
          >
            {Array.from({
              length: 25,
            }).map((item, index) => (
              <span key={index} className="w-1.5 h-1.5 rounded-full bg-[#93C5FD]" />
            ))}
          </div>
          <div
            className="hidden lg:block absolute -top-10 -right-28 pointer-events-none select-none"
            aria-hidden="true"
          >
            <svg
              className="absolute -top-4 -right-10 w-44 h-36 pointer-events-none overflow-visible"
              viewBox="0 0 160 120"
              fill="none"
            >
              <path d="M 10 95 C 40 10, 130 5, 145 60" stroke="#E71E28" strokeWidth="1.5" />
              <circle cx="145" cy="60" r="5" fill="#E71E28" />
            </svg>
            <div className="font-['Caveat',cursive] -rotate-[10deg] text-2xl text-[#84A2C6] font-bold leading-tight pt-5 pr-4 text-left">
              Real
              <br />
              Partnerships.
              <br />
              Real Impact.
              <div className="w-20 h-0.5 bg-[#E71E28] rounded-full mt-1 rotate-[2deg]" />
            </div>
          </div>
          <div className="inline-flex flex-col items-center mb-3">
            <span className="text-xs font-['Sora'] font-bold text-[#E71E28] tracking-widest uppercase">
              CLIENT SUCCESS STORIES
            </span>
            <div className="w-10 h-0.5 bg-[#E71E28] rounded-full mt-1.5" />
          </div>
          <h2 className="font-['Sora'] font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-[#0B1528] tracking-tight leading-tight mb-4">
            {"We're publishing "}
            <span className="text-[#E71E28]">real case studies</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-normal mb-7 max-w-2xl mx-auto">
            We're documenting recent client engagements across IT staffing, RPO, and international consulting.
            Check back — or ask us directly about engagements relevant to your industry.
          </p>
          <button
            type="button"
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#0B1528] hover:bg-[#1E293B] text-white font-['Sora'] font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg group cursor-pointer"
          >
            <span>Ask About Relevant Engagements</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((item, index) => {
            const isRed = item.tagVariant === 'red';
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
                className="group glossy-card-light sheen-sweep rounded-3xl p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-col-reverse sm:flex-row items-start justify-between gap-5 sm:gap-6 mb-7">
                    <div className="flex-1">
                      <span
                        className={`inline-block text-[11px] font-['Sora'] font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-3.5 ${isRed ? 'bg-red-50 text-[#E71E28] border border-red-100/80' : 'bg-sky-50 text-blue-600 border border-blue-100/80'}`}
                      >
                        {item.tag}
                      </span>
                      <h3 className="font-['Sora'] font-bold text-lg sm:text-xl text-[#0B1528] leading-snug group-hover:text-blue-900 transition-colors duration-200">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal mt-2.5">
                        {item.description}
                      </p>
                    </div>
                    <div className="w-full sm:w-44 h-36 sm:h-32 rounded-2xl overflow-hidden shrink-0 border border-slate-100 shadow-xs bg-slate-50">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 py-4 sm:py-5 border-y border-slate-100 mb-5">
                    {item.metrics.map((entry, entryIndex) => (
                      <div
                        key={entry.label}
                        className={`text-left ${entryIndex < 2 ? 'pr-2 sm:pr-4 border-r border-slate-200/80' : ''}`}
                      >
                        <div className="font-['Sora'] font-extrabold text-lg sm:text-2xl text-[#0B1528] leading-tight">
                          {entry.value}
                        </div>
                        <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-1 leading-snug">
                          {entry.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => setActiveStudy(item)}
                    className="inline-flex items-center gap-2 font-['Sora'] font-bold text-xs sm:text-sm text-[#0B1528] group-hover:text-[#E71E28] transition-colors cursor-pointer"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4 text-[#E71E28] transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <AnimatePresence>
        {activeStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={() => setActiveStudy(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
            />
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 16,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 16,
              }}
              transition={{
                duration: 0.25,
              }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 my-8"
            >
              <div className="relative p-6 sm:p-8 bg-slate-50 border-b border-slate-100">
                <button
                  type="button"
                  onClick={() => setActiveStudy(null)}
                  className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-100 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <XIcon className="w-4 h-4" />
                </button>
                <span
                  className={`inline-block text-[11px] font-['Sora'] font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-3 ${activeStudy.tagVariant === 'red' ? 'bg-red-50 text-[#E71E28] border border-red-100' : 'bg-sky-50 text-blue-600 border border-blue-100'}`}
                >
                  {activeStudy.tag}
                </span>
                <h3 className="font-['Sora'] font-bold text-xl sm:text-2xl text-[#0B1528] leading-tight pr-10">
                  {activeStudy.title}
                </h3>
              </div>
              <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
                <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-blue-50/50 border border-blue-100/60">
                  {activeStudy.metrics.map((item) => (
                    <div key={item.label} className="text-center">
                      <div className="font-['Sora'] font-extrabold text-xl text-[#0B1528]">{item.value}</div>
                      <div className="text-[11px] text-slate-500 font-medium mt-0.5">{item.label}</div>
                    </div>
                  ))}
                </div>
                <div>
                  <h4 className="font-['Sora'] font-bold text-xs uppercase tracking-wider text-slate-400 mb-1.5">
                    Client Context
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">{activeStudy.clientOverview}</p>
                </div>
                <div>
                  <h4 className="font-['Sora'] font-bold text-xs uppercase tracking-wider text-slate-400 mb-1.5">
                    The Challenge
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">{activeStudy.challenge}</p>
                </div>
                <div>
                  <h4 className="font-['Sora'] font-bold text-xs uppercase tracking-wider text-slate-400 mb-1.5">
                    The Approach & Solution
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">{activeStudy.solution}</p>
                </div>
                <div>
                  <h4 className="font-['Sora'] font-bold text-xs uppercase tracking-wider text-slate-400 mb-2">
                    Key Outcomes Delivered
                  </h4>
                  <ul className="space-y-2">
                    {activeStudy.keyOutcomes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CircleCheck className="w-4 h-4 text-[#E71E28] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-500">Discuss a similar model for your organization.</span>
                <button
                  type="button"
                  onClick={() => {
                    setActiveStudy(null);
                    navigate('/contact');
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#E71E28] hover:bg-[#C9141D] text-white font-['Sora'] font-semibold text-xs tracking-wide shadow-md transition-colors cursor-pointer"
                >
                  Schedule Strategy Session
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CaseStudyList;
