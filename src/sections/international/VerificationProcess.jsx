import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, ShieldCheck, User, Users } from 'lucide-react';
import { verificationChecks } from '../../data/international';

const VerificationProcess = () => {
  const checkIcon = (type, accent) => {
    switch (type) {
      case 'employment':
        return <Briefcase className="w-6 h-6 text-[#E71E28]" strokeWidth={2} />;
      case 'education':
        return <GraduationCap className="w-6 h-6 text-[#0B2558]" strokeWidth={2} />;
      case 'identity':
        return <User className="w-6 h-6 text-[#E71E28]" strokeWidth={2} />;
      case 'criminal':
        return <ShieldCheck className="w-6 h-6 text-[#0B2558]" strokeWidth={2} />;
      case 'reference':
        return <Users className="w-6 h-6 text-[#E71E28]" strokeWidth={2} />;
      case 'certification':
        return <Award className="w-6 h-6 text-[#0B2558]" strokeWidth={2} />;
    }
  };
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FAFAFC] relative overflow-hidden">
      <div
        className="hidden xl:block absolute -left-28 top-1/4 w-80 h-80 rounded-full border-[28px] border-red-100/40 pointer-events-none -z-0"
        aria-hidden="true"
      />
      <div
        className="hidden lg:grid grid-cols-5 gap-3 absolute right-6 top-1/4 opacity-40 pointer-events-none -z-0"
        aria-hidden="true"
      >
        {Array.from({
          length: 25,
        }).map((item, index) => (
          <span key={index} className="w-1.5 h-1.5 rounded-full bg-slate-400" />
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative mb-12 sm:mb-14">
          <div className="hidden lg:flex items-center gap-3 absolute right-0 top-1 text-left">
            <span className="w-[3px] h-10 bg-[#E71E28] rounded-full shrink-0" />
            <div className="font-['Sora'] text-[11px] font-semibold text-slate-400 tracking-[0.2em] leading-[1.35] uppercase">
              <div>PEOPLE</div>
              <div>PROCESS</div>
              <div>PROTECTION</div>
            </div>
          </div>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-['Sora'] font-bold text-xs sm:text-[13px] text-[#E71E28] uppercase tracking-[0.18em]">
                TRUSTED & COMPLIANT HIRING
              </span>
              <span className="w-12 h-[2.5px] bg-[#E71E28] rounded-full inline-block" />
            </div>
            <h2 className="font-['Sora'] font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-[#0B1C44] tracking-tight leading-[1.15]">
              {'Verification '}
              <span className="text-[#E71E28]">Dimensions We Cover</span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
              Comprehensive background verification to help you hire with confidence.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {verificationChecks.map((item, index) => {
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
                className="glossy-card-light sheen-sweep rounded-2xl p-7 sm:p-8 relative flex flex-col justify-start group min-h-[220px]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-start">
                    <div
                      className={`w-13 h-13 rounded-full flex items-center justify-center shadow-2xs ${isRed ? 'bg-red-50 text-[#E71E28] border border-red-100/80' : 'bg-blue-50 text-[#0B2558] border border-blue-100/80'}`}
                    >
                      {checkIcon(item.iconType, item.accent)}
                    </div>
                    <span
                      className={`w-5 h-[2.5px] rounded-full mt-3 inline-block ${isRed ? 'bg-[#E71E28]' : 'bg-[#0B2558]'}`}
                    />
                  </div>
                  <span
                    className="font-['Sora'] font-extrabold text-5xl sm:text-6xl text-slate-100 select-none pointer-events-none tracking-tight group-hover:text-slate-200/80 transition-colors"
                    aria-hidden="true"
                  >
                    {item.number}
                  </span>
                </div>
                <h3 className="font-['Sora'] font-bold text-lg sm:text-[19px] text-[#0B1C44] tracking-tight mt-5 mb-2.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-500 font-normal leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
        <div className="flex items-center gap-3.5 mt-16 sm:mt-20">
          <div className="w-12 sm:w-16 h-[2.5px] bg-[#E71E28] rounded-full shrink-0" />
          <span className="font-['Sora'] text-xs sm:text-[13px] font-semibold text-slate-400 tracking-[0.22em] uppercase">
            BUILDING TRUST IN EVERY HIRE
          </span>
        </div>
      </div>
    </section>
  );
};

export default VerificationProcess;
