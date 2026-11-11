import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CircleCheck, Cloud, Cpu, ShieldCheck, X as XIcon } from 'lucide-react';
import { trainingTracks } from '../../data/trainingTracks';
import { useRouter } from '../../lib/router';

const TrainingTracks = ({ initialTrack }) => {
  const { navigate } = useRouter();
  const [activeTrack, setActiveTrack] = useState(null);
  useEffect(() => {
    if (initialTrack) {
      const initial = trainingTracks.find((item) => item.id === initialTrack);
      if (initial) {
        setActiveTrack(initial);
      }
    }
  }, [initialTrack]);
  const trackIcon = (name) => {
    switch (name) {
      case 'cloud':
        return <Cloud className="w-5 h-5" strokeWidth={2.2} />;
      case 'shield':
        return <ShieldCheck className="w-5 h-5" strokeWidth={2.2} />;
      case 'ai':
        return (
          <div className="relative flex items-center justify-center">
            <Cpu className="w-5 h-5" strokeWidth={2.2} />
            <span className="absolute text-[8px] font-extrabold uppercase font-['Sora'] tracking-tighter">
              AI
            </span>
          </div>
        );
    }
  };
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#0B0E1A] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#204282]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#E71E28]/10 rounded-full blur-3xl pointer-events-none" />
      <div
        className="hidden xl:block absolute -left-28 top-1/3 w-64 h-64 rounded-full border-[18px] border-white/5 pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="hidden lg:block absolute left-8 top-1/2 w-5 h-5 rounded-full bg-[#E71E28] shadow-[0_0_18px_rgba(231,30,40,0.6)] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-['Sora'] font-bold text-xs sm:text-[13px] text-[#E71E28] uppercase tracking-[0.16em]">
                CAREER-FOCUSED LEARNING
              </span>
              <span className="w-12 h-[3px] bg-[#E71E28] rounded-full inline-block" />
            </div>
            <h2 className="font-['Sora'] font-extrabold text-2xl sm:text-3xl lg:text-[40px] text-white tracking-tight leading-tight">
              {'Specialized Technology '}
              <span className="text-[#E71E28]">Training Tracks</span>
            </h2>
            <p className="mt-2.5 text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
              Industry-aligned programs designed to make you job-ready.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-4 shrink-0 pb-1">
            <div className="w-[3px] h-11 bg-[#E71E28] rounded-full shrink-0" />
            <div className="font-['Sora'] text-[11px] font-semibold text-slate-400 tracking-[0.22em] leading-[1.38] uppercase">
              <div>LEARN</div>
              <div>PRACTICE</div>
              <div>GET HIRED</div>
            </div>
          </div>
        </div>
        <div
          id="tracks-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative"
        >
          <div
            className="hidden lg:grid absolute -top-8 -right-6 grid-cols-6 gap-2.5 opacity-30 pointer-events-none -z-10"
            aria-hidden="true"
          >
            {Array.from({
              length: 24,
            }).map((item, index) => (
              <span key={index} className="w-1.5 h-1.5 rounded-full bg-red-400" />
            ))}
          </div>
          {trainingTracks.map((item, index) => {
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
                  delay: index * 0.08,
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
                      className={`w-12 h-12 rounded-full flex items-center justify-center shadow-2xs ${isRed ? 'bg-red-500/15 text-[#FF4D57] border border-red-500/30' : 'bg-blue-500/15 text-[#60A5FA] border border-blue-500/30'}`}
                    >
                      {trackIcon(item.icon)}
                    </div>
                    <span
                      className="font-['Sora'] font-extrabold text-5xl sm:text-6xl text-white/[0.08] select-none pointer-events-none tracking-tight group-hover:text-white/[0.12] transition-colors"
                      aria-hidden="true"
                    >
                      {item.number}
                    </span>
                  </div>
                  <h3 className="font-['Sora'] font-bold text-xl text-white tracking-tight mt-5 mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-300 font-normal leading-relaxed mb-6 min-h-[58px]">
                    {item.description}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    if (item.id === 'servicenow') {
                      navigate('/training-placement/servicenow');
                    } else {
                      if (item.id === 'cybersecurity') {
                        navigate('/training-placement/cybersecurity');
                      } else {
                        if (item.id === 'ai-ml') {
                          navigate('/training-placement/ai-ml');
                        } else {
                          setActiveTrack(item);
                        }
                      }
                    }
                  }}
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
      </div>
      {activeTrack && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-100 relative animate-in fade-in zoom-in-95 duration-200">
            <button
              type="button"
              onClick={() => setActiveTrack(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <XIcon className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-['Sora'] font-bold text-xs text-[#E71E28] uppercase tracking-wider">
                {'Track '}
                {activeTrack.number}
                {' Syllabus'}
              </span>
            </div>
            <h3 className="font-['Sora'] font-extrabold text-2xl text-[#0B1C44] tracking-tight mb-2">
              {activeTrack.title}
            </h3>
            <p className="text-sm text-slate-600 font-normal leading-relaxed mb-6">
              {activeTrack.description}
            </p>
            <div className="mb-6">
              <h4 className="font-['Sora'] font-bold text-xs uppercase tracking-wider text-slate-400 mb-3">
                Key Curriculum Modules
              </h4>
              <ul className="space-y-2.5">
                {activeTrack.curriculum.map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CircleCheck className="w-4 h-4 text-[#E71E28] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
              {activeTrack.id === 'servicenow' && (
                <button
                  type="button"
                  onClick={() => {
                    setActiveTrack(null);
                    navigate('/training-placement/servicenow');
                  }}
                  className="py-3 px-4 rounded-full bg-[#E71E28] hover:bg-[#c4151e] text-white font-['Sora'] font-bold text-xs sm:text-sm transition-colors text-center cursor-pointer shadow-sm flex items-center justify-center gap-1.5"
                >
                  <span>View Service Now Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
              <button
                type="button"
                onClick={() => {
                  setActiveTrack(null);
                  navigate('/contact');
                }}
                className="flex-1 py-3 px-5 rounded-full bg-[#0B2558] hover:bg-[#07193b] text-white font-['Sora'] font-bold text-xs sm:text-sm transition-colors text-center cursor-pointer shadow-sm"
              >
                Enroll in Track
              </button>
              <button
                type="button"
                onClick={() => setActiveTrack(null)}
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

export default TrainingTracks;
