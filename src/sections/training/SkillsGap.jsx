import { motion } from 'framer-motion';
import { GraduationCap, TrendingUp, Users } from 'lucide-react';
import { images } from '../../data/images';

const SkillsGap = () => (
  <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-[3px] bg-[#E71E28] rounded-full" />
            <span className="font-['Sora'] font-bold text-xs sm:text-[13px] text-[#E71E28] uppercase tracking-[0.16em]">
              TALENT REALITY
            </span>
          </div>
          <h2 className="font-['Sora'] font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-[#0B1C44] tracking-tight leading-[1.18] mb-6">
            {'The skills gap is the story of this '}
            <span className="text-[#E71E28]">job market</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-[1.7] mb-5">
            Graduates and career-switchers struggle to land their first serious technology role without
            demonstrable project experience. At the same time, technology employers struggle to find junior
            and mid-level talent that can contribute without months of unproductive hand-holding.
          </p>
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-[1.7] mb-8 sm:mb-10">
            ARA Solutions tech training tracks solve both problems at once. We train candidates directly in
            the platforms and technologies our client network actively hires for — combining structured,
            project-based curriculum with hands-on interview preparation and direct placement coordination.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-4 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3.5 flex-1">
              <div className="w-11 h-11 rounded-full bg-red-50 text-[#E71E28] flex items-center justify-center shrink-0 border border-red-100/80 shadow-2xs">
                <GraduationCap className="w-5 h-5" strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-['Sora'] font-bold text-xs sm:text-sm text-[#0B1C44]">
                  Job-Ready Talent
                </h3>
                <p className="text-xs text-slate-500 font-normal mt-0.5">Practical, hands-on training</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-9 bg-slate-200 shrink-0" aria-hidden="true" />
            <div className="flex items-center gap-3.5 flex-1">
              <div className="w-11 h-11 rounded-full bg-red-50 text-[#E71E28] flex items-center justify-center shrink-0 border border-red-100/80 shadow-2xs">
                <Users className="w-5 h-5" strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-['Sora'] font-bold text-xs sm:text-sm text-[#0B1C44]">
                  Employer Aligned
                </h3>
                <p className="text-xs text-slate-500 font-normal mt-0.5">Skills that match real demand</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-9 bg-slate-200 shrink-0" aria-hidden="true" />
            <div className="flex items-center gap-3.5 flex-1">
              <div className="w-11 h-11 rounded-full bg-red-50 text-[#E71E28] flex items-center justify-center shrink-0 border border-red-100/80 shadow-2xs">
                <TrendingUp className="w-5 h-5" strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-['Sora'] font-bold text-xs sm:text-sm text-[#0B1C44]">
                  Faster Placements
                </h3>
                <p className="text-xs text-slate-500 font-normal mt-0.5">From learning to earning</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto w-full max-w-[460px] lg:max-w-none pt-8 pb-8 pr-4">
            <div
              className="absolute top-0 -left-5 sm:-left-7 w-48 h-52 rounded-[32px] bg-[#EEF2F6] -z-10 pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-2 -right-4 sm:-right-6 w-48 h-40 rounded-[32px] bg-[#FDE8E9]/80 -z-10 pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-6 -left-6 grid grid-cols-5 gap-2.5 opacity-30 pointer-events-none -z-10"
              aria-hidden="true"
            >
              {Array.from({
                length: 30,
              }).map((item, index) => (
                <span key={index} className="w-1.5 h-1.5 rounded-full bg-red-400" />
              ))}
            </div>
            <div className="absolute -top-3 right-0 sm:right-2 text-right pointer-events-none z-20">
              <span className="font-serif italic text-slate-500 text-xs sm:text-[13px] tracking-wide block leading-tight">
                Bridging
                <br />
                talent and
                <br />
                opportunity
              </span>
              <svg
                className="w-9 h-9 text-slate-500 ml-auto mt-0.5 -rotate-12"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M30 4 C32 18, 18 20, 10 28"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M17 27 L10 28 L11 21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
            <div className="relative z-10 w-full aspect-[4/3] rounded-[28px] sm:rounded-[34px] overflow-hidden shadow-[0_16px_40px_rgba(11,37,88,0.12)] border border-slate-100 bg-slate-100">
              <img
                src={images.trainingImmersiveLab}
                alt="Tech professional working on enterprise software track in immersive lab"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="flex flex-col sm:flex-row items-stretch justify-between gap-4 mt-5 sm:mt-6 relative z-20">
              <motion.div
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
                  y: -6,
                  scale: 1.04,
                }}
                className="glossy-card-light sheen-sweep rounded-2xl p-5 sm:p-6 flex-1 max-w-none sm:max-w-[215px] cursor-default flex flex-col justify-between"
              >
                <div>
                  <div className="font-['Sora'] font-extrabold text-3xl sm:text-4xl text-[#E71E28] tracking-tight leading-none mb-2">
                    68%
                  </div>
                  <p className="text-xs font-['Sora'] font-medium text-slate-600 leading-snug">
                    of tech employers report a shortage of skilled talent
                  </p>
                </div>
                <div className="w-8 h-1 bg-[#E71E28] rounded-full mt-3" />
              </motion.div>
              <motion.div
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
                  y: -6,
                  scale: 1.04,
                }}
                className="glossy-card-light sheen-sweep rounded-2xl p-5 sm:p-6 flex-1 max-w-none sm:max-w-[215px] cursor-default flex flex-col justify-between"
              >
                <div>
                  <div className="font-['Sora'] font-extrabold text-xl sm:text-2xl text-[#0B1C44] tracking-tight leading-[1.15]">
                    <div>Skills</div>
                    <div>Build</div>
                    <div className="text-[#E71E28]">Careers</div>
                  </div>
                  <p className="text-xs font-['Sora'] font-medium text-slate-600 leading-snug mt-2">
                    Hands-on tracks engineered for day-one enterprise impact
                  </p>
                </div>
                <div className="w-8 h-1 bg-[#E71E28] rounded-full mt-3" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SkillsGap;
