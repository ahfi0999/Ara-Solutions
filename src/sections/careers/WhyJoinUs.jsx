import { motion } from 'framer-motion';
import { ArrowRight, Heart, ShieldCheck, TrendingUp, UsersRound } from 'lucide-react';
import { images } from '../../data/images';

const WhyJoinUs = () => (
  <div className="bg-white">
    <section className="py-16 sm:py-20 bg-[#F0F5FD] border-b border-[#DCE8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-xs mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E71E28]" />
            <span>Workforce Architecture</span>
          </div>
          <h2 className="font-['Sora'] font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight">
            {'Why Build Your Career at '}
            <span className="text-[#E71E28]">ARA Solutions</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
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
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              y: -8,
              scale: 1.015,
            }}
            className="glossy-card-light sheen-sweep p-7 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full bg-red-100/40 blur-xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-[#E71E28] shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono font-semibold text-slate-400 tracking-wider uppercase">
                  CULTURE 01
                </span>
              </div>
              <h3 className="font-['Sora'] font-bold text-xl text-slate-900 mb-3">Work That Matters</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Every placement changes a career trajectory and solves a critical business bottleneck. We take
                that responsibility seriously.
              </p>
            </div>
          </motion.div>
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
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              y: -8,
              scale: 1.015,
            }}
            className="glossy-card-light sheen-sweep p-7 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full bg-blue-100/40 blur-xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB] shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono font-semibold text-slate-400 tracking-wider uppercase">
                  CULTURE 02
                </span>
              </div>
              <h3 className="font-['Sora'] font-bold text-xl text-slate-900 mb-3">Room to Grow</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                We're growing quickly across domestic GCC hubs and international markets. Your contribution
                will be noticed, valued, and rewarded.
              </p>
            </div>
          </motion.div>
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
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              y: -8,
              scale: 1.015,
            }}
            className="glossy-card-light sheen-sweep p-7 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full bg-red-100/40 blur-xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-[#E71E28] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono font-semibold text-slate-400 tracking-wider uppercase">
                  CULTURE 03
                </span>
              </div>
              <h3 className="font-['Sora'] font-bold text-xl text-slate-900 mb-3">Real Accountability</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                We operate with genuine transparency, clear expectations, and an open collaborative team
                culture that has each other's backs.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-xs mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E71E28]" />
              <span>Our Culture</span>
            </div>
            <h2 className="font-['Sora'] font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight leading-tight">
              {'How we work '}
              <span className="text-[#E71E28]">internally</span>
            </h2>
            <div className="w-12 h-1 bg-[#E71E28] rounded-full mt-3 mb-6" />
            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-8">
              <p>
                We value clear communicators, proactive problem solvers, and professionals who treat both
                clients and candidates with dignity and respect, regardless of the outcome.
              </p>
              <p>
                Whether you're an experienced recruiter, an account manager, a technology trainer, or someone
                looking to break into the workforce solutions industry — if you hold yourself to high
                standards, we want to talk to you.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                const target =
                  document.getElementById('open-positions-section') ||
                  document.getElementById('talent-inquiry-form');
                if (target) {
                  target.scrollIntoView({
                    behavior: 'smooth',
                  });
                }
              }}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-[#E71E28] to-[#B8141D] hover:from-[#B8141D] hover:to-[#E71E28] text-white font-['Sora'] font-bold text-sm rounded-full shadow-[0_8px_25px_rgba(231,30,40,0.35)] hover:shadow-[0_12px_32px_rgba(231,30,40,0.5)] transition-all duration-200 cursor-pointer group"
            >
              <span>Explore Opportunities</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="absolute -top-4 -right-4 w-28 h-28 bg-[radial-gradient(#CBD5E1_1.5px,transparent_1.5px)] [background-size:10px_10px] pointer-events-none opacity-60" />
            <div className="hidden sm:block absolute top-1/2 -right-3 -translate-y-1/2 w-3.5 h-16 bg-[#E71E28] rounded-l-md shadow-md z-10" />
            <div className="relative rounded-3xl overflow-hidden shadow-[0_16px_45px_rgba(15,23,42,0.08)] border border-slate-100 bg-slate-50 group">
              <img
                src={images.careersCultureWorkspace}
                alt="ARA Solutions team working internally"
                className="w-full h-[320px] sm:h-[380px] lg:h-[400px] object-cover object-center transition-transform duration-500 group-hover:scale-103"
              />
              <div className="absolute bottom-5 left-5 z-20 w-11 h-11 rounded-xl bg-[#0B1528] text-white flex items-center justify-center shadow-xl border border-white/15">
                <UsersRound className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default WhyJoinUs;
