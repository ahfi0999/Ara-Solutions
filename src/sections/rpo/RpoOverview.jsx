import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CircleCheck, Play, Target, TrendingUp, Users, X as XIcon } from 'lucide-react';
import { images } from '../../data/images';
import { useRouter } from '../../lib/router';

const RpoOverview = () => {
  const { navigate } = useRouter();
  const [videoOpen, setVideoOpen] = useState(false);
  return (
    <section id="rpo-trends-showcase" className="relative bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block w-8 sm:w-10 h-[3px] bg-[#E71E28] rounded-full" />
              <span className="font-['Sora'] font-bold text-xs sm:text-[13px] text-[#E71E28] tracking-[0.14em] uppercase">
                RECRUITMENT TRENDS
              </span>
            </div>
            <h2 className="font-['Sora'] font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-[#0B1C44] leading-[1.18] tracking-tight mb-6">
              More companies are outsourcing recruitment than ever —{' '}
              <span className="text-[#E71E28]">for a reason</span>
            </h2>
            <div className="space-y-4 text-slate-600 text-sm sm:text-[15.5px] leading-relaxed font-normal mb-8 sm:mb-10 max-w-xl">
              <p>
                Managing recruitment internally during periods of growth or high-volume hiring pulls hiring
                managers away from their core work, stretches internal HR thin, and often leads to compromised
                hiring decisions under timeline pressure.
              </p>
              <p>
                ARA Solutions RPO gives you a dedicated recruitment engine — embedded within your workflow,
                aligned with your culture, and operating under clear SLAs. We manage the process end to end so
                your team can focus on making the final decision.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="/contact"
                id="rpo-explore-btn"
                onClick={(event) => {
                  event.preventDefault();
                  navigate('/contact');
                }}
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl bg-[#E71E28] hover:bg-[#D01923] text-white font-['Sora'] font-semibold text-sm sm:text-base shadow-[0_8px_20px_rgba(231,30,40,0.28)] hover:shadow-[0_12px_28px_rgba(231,30,40,0.38)] transition-all duration-200 group cursor-pointer"
              >
                <span>Explore Our RPO Solution</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <div className="hidden sm:block w-px h-8 bg-slate-200" aria-hidden="true" />
              <button
                type="button"
                id="rpo-watch-video-btn"
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center gap-3 text-[#0B1C44] hover:text-[#E71E28] font-['Sora'] font-bold text-sm sm:text-[15px] transition-colors duration-200 group cursor-pointer"
              >
                <span className="w-8 h-8 rounded-full border-2 border-[#0B1C44] group-hover:border-[#E71E28] flex items-center justify-center text-[#0B1C44] group-hover:text-[#E71E28] transition-colors duration-200">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </span>
                <span>Watch How It Works</span>
              </button>
            </div>
          </div>
          <div className="lg:col-span-6 relative pt-4 pb-4 px-2 sm:px-4 flex flex-col items-center">
            <div className="relative w-full max-w-[500px]">
              <div
                className="absolute -top-4 -left-4 sm:-left-6 grid grid-cols-6 gap-2 z-0 pointer-events-none opacity-80"
                aria-hidden="true"
              >
                {Array.from({
                  length: 24,
                }).map((item, index) => (
                  <span key={index} className="w-1.5 h-1.5 rounded-full bg-red-400/40" />
                ))}
              </div>
              <div
                className="absolute -top-8 -right-6 sm:-right-8 w-60 h-60 rounded-full border border-red-200/50 pointer-events-none z-0"
                aria-hidden="true"
              />
              <div
                className="absolute top-2 -right-2 sm:right-0 w-80 h-80 rounded-full border border-red-300/40 pointer-events-none z-0"
                aria-hidden="true"
              />
              <div
                className="absolute top-12 -right-1 sm:right-1 w-5 h-5 rounded-full bg-[#E71E28] shadow-[0_0_14px_rgba(231,30,40,0.5)] z-10 pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative z-10 w-full aspect-4/3 rounded-3xl sm:rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(15,42,96,0.12)] border border-slate-100 bg-slate-100">
                <img
                  src={images.rpoEnterpriseRecruiting}
                  alt="Enterprise talent acquisition team managing active recruiting pipelines"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/15 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
            <div className="w-full max-w-[500px] grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-6 z-10">
              <motion.div
                id="rpo-metric-card-1"
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.45,
                }}
                whileHover={{
                  y: -4,
                  scale: 1.02,
                }}
                className="glossy-card-light sheen-sweep rounded-2xl p-3.5 sm:p-4 flex flex-col justify-between border border-slate-100 shadow-sm cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E71E28] flex items-center justify-center shrink-0 border border-red-100/60 mb-2.5">
                  <Users className="w-5 h-5" strokeWidth={2.2} />
                </div>
                <div>
                  <div className="font-['Sora'] font-extrabold text-xl sm:text-2xl text-[#0B1C44] leading-tight tracking-tight">
                    60%+
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-normal leading-snug mt-1">
                    of companies now outsource recruitment
                  </div>
                </div>
                <div className="w-5 h-0.5 bg-[#E71E28] rounded-full mt-3" />
              </motion.div>
              <motion.div
                id="rpo-metric-card-2"
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.45,
                  delay: 0.1,
                }}
                whileHover={{
                  y: -4,
                  scale: 1.02,
                }}
                className="glossy-card-light sheen-sweep rounded-2xl p-3.5 sm:p-4 flex flex-col justify-between border border-slate-100 shadow-sm cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E71E28] flex items-center justify-center shrink-0 border border-red-100/60 mb-2.5">
                  <TrendingUp className="w-5 h-5" strokeWidth={2.2} />
                </div>
                <div>
                  <div className="font-['Sora'] font-bold text-sm sm:text-[15px] text-[#0B1C44] leading-tight">
                    Faster Hiring
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-normal leading-snug mt-1">
                    Scale without compromising quality
                  </div>
                </div>
                <div className="w-5 h-0.5 bg-[#E71E28] rounded-full mt-3" />
              </motion.div>
              <motion.div
                id="rpo-metric-card-3"
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.45,
                  delay: 0.2,
                }}
                whileHover={{
                  y: -4,
                  scale: 1.02,
                }}
                className="glossy-card-light sheen-sweep rounded-2xl p-3.5 sm:p-4 flex flex-col justify-between border border-slate-100 shadow-sm cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E71E28] flex items-center justify-center shrink-0 border border-red-100/60 mb-2.5">
                  <Target className="w-5 h-5" strokeWidth={2.2} />
                </div>
                <div>
                  <div className="font-['Sora'] font-bold text-sm sm:text-[15px] text-[#0B1C44] leading-tight">
                    Focus on What Matters
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-normal leading-snug mt-1">
                    We handle hiring, you drive growth
                  </div>
                </div>
                <div className="w-5 h-0.5 bg-[#E71E28] rounded-full mt-3" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {videoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 overflow-hidden">
            <button
              type="button"
              onClick={() => setVideoOpen(false)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
              aria-label="Close modal"
            >
              <XIcon className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#E71E28]" />
              <span className="font-['Sora'] font-bold text-xs text-[#E71E28] uppercase tracking-wider">
                HOW ARA SOLUTIONS RPO OPERATES
              </span>
            </div>
            <h3 className="font-['Sora'] font-bold text-xl sm:text-2xl text-[#0B1C44] mb-4">
              Your Embedded Recruitment Pod
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              Watch how our team integrates directly into your ATS, aligns with hiring managers, and maintains
              complete transparency across the sourcing pipeline:
            </p>
            <div className="space-y-3 mb-6">
              {[
                'Dedicated Senior Talent Partner & Technical Sourcers',
                'Custom SLAs with Weekly Calibrations & Velocity Reporting',
                'Seamless integration into your Slack, Teams, and ATS environment',
                'Zero long-term lock-in: Scale recruitment pods up or down on demand',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 text-sm text-slate-700">
                  <CircleCheck className="w-5 h-5 text-[#E71E28] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setVideoOpen(false)}
                className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-['Sora'] font-medium text-sm hover:bg-slate-50 transition-colors"
              >
                Close
              </button>
              <a
                href="/contact"
                onClick={(event) => {
                  event.preventDefault();
                  setVideoOpen(false);
                  navigate('/contact');
                }}
                className="px-5 py-2.5 rounded-xl bg-[#E71E28] hover:bg-[#D01923] text-white font-['Sora'] font-semibold text-sm shadow-md transition-colors cursor-pointer"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default RpoOverview;
