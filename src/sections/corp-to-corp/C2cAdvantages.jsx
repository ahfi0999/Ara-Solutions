import { motion } from 'framer-motion';
import { ChartColumn, ShieldCheck, Users } from 'lucide-react';
import { images } from '../../data/images';

const C2cAdvantages = () => (
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
      className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#E71E28]/10 rounded-full blur-3xl pointer-events-none"
      aria-hidden="true"
    />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        <div className="lg:col-span-6 xl:col-span-6">
          <div className="inline-flex items-center gap-2.5 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#E71E28] shrink-0 shadow-[0_0_8px_rgba(231,30,40,0.9)]" />
            <span className="text-xs font-['Sora'] font-bold text-slate-300 uppercase tracking-widest">
              ON-DEMAND EXPERTISE
            </span>
          </div>
          <h2 className="font-['Sora'] font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-white tracking-tight leading-[1.18] mb-6">
            Projects don't wait{' '}
            <span className="text-[#E71E28] block sm:inline">for a full hiring cycle</span>
          </h2>
          <div className="space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-xl">
            <p>
              When a critical project demands specialized expertise — an enterprise migration, a security
              audit, a sudden surge in engineering workload — you need professionals who can contribute from
              day one, under an engagement structure that matches the project's scope and duration.
            </p>
            <p>
              Our Corp-to-Corp model connects you with vetted consultants through compliant, structured
              vendor-to-vendor arrangements, keeping overhead low, deployment fast, and accountability clear.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-8">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
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
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="glossy-card sheen-sweep rounded-2xl p-4 flex flex-col justify-between group"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#122756] border border-blue-400/30 flex items-center justify-center text-[#E71E28] shrink-0 mb-3">
                  <Users className="w-5 h-5" strokeWidth={2.2} />
                </div>
                <div className="text-xs sm:text-[13px] font-['Sora'] font-bold text-white leading-tight">
                  Skilled Experts
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-300 font-normal mt-1 leading-snug">
                  Ready to contribute from day one
                </div>
              </div>
              <div className="w-5 h-0.5 bg-[#E71E28] rounded-full mt-3" />
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
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
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="glossy-card sheen-sweep rounded-2xl p-4 flex flex-col justify-between group"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#122756] border border-blue-400/30 flex items-center justify-center text-[#E71E28] shrink-0 mb-3">
                  <ShieldCheck className="w-5 h-5" strokeWidth={2.2} />
                </div>
                <div className="text-xs sm:text-[13px] font-['Sora'] font-bold text-white leading-tight">
                  Compliant & Structured
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-300 font-normal mt-1 leading-snug">
                  Vendor-to-vendor made simple
                </div>
              </div>
              <div className="w-5 h-0.5 bg-[#E71E28] rounded-full mt-3" />
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
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
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="glossy-card sheen-sweep rounded-2xl p-4 flex flex-col justify-between group"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#122756] border border-blue-400/30 flex items-center justify-center text-[#E71E28] shrink-0 mb-3">
                  <ChartColumn className="w-5 h-5" strokeWidth={2.2} />
                </div>
                <div className="text-xs sm:text-[13px] font-['Sora'] font-bold text-white leading-tight">
                  Faster Project Delivery
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-300 font-normal mt-1 leading-snug">
                  Keep your momentum
                </div>
              </div>
              <div className="w-5 h-0.5 bg-[#E71E28] rounded-full mt-3" />
            </motion.div>
          </div>
        </div>
        <div className="lg:col-span-6 xl:col-span-6 relative mt-10 lg:mt-0">
          <div className="relative mx-auto max-w-[500px]">
            <div
              className="hidden sm:grid grid-cols-4 gap-2.5 absolute top-1/2 -left-12 -translate-y-1/2 opacity-50 pointer-events-none z-0"
              aria-hidden="true"
            >
              {Array.from({
                length: 16,
              }).map((item, index) => (
                <span key={index} className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              ))}
            </div>
            <div
              className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 w-48 sm:w-60 h-48 sm:h-60 rounded-tr-[2.5rem] border-t-3 border-r-3 border-[#E71E28] pointer-events-none z-10 shadow-[0_0_24px_rgba(231,30,40,0.45)]"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-3 -left-3 sm:-bottom-5 sm:-left-5 w-28 sm:w-36 h-28 sm:h-36 rounded-bl-[2.5rem] border-b-2 border-l-2 border-[#E71E28]/60 pointer-events-none z-10"
              aria-hidden="true"
            />
            <div className="relative rounded-[2rem] overflow-hidden shadow-[0_24px_60px_rgba(4,12,32,0.8)] border border-blue-400/20 bg-[#0B1C44] z-10">
              <img
                src={images.c2cEnterprisePod}
                alt="Engineering consultants collaborating on enterprise deliverables"
                className="w-full h-[360px] sm:h-[430px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061536]/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default C2cAdvantages;
