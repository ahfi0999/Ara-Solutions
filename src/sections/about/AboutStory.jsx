import { motion } from 'framer-motion';
import { ChartColumn, Users } from 'lucide-react';
import { images } from '../../data/images';

const AboutStory = () => (
  <section className="relative py-16 sm:py-24 bg-[#F0F5FD] overflow-hidden border-t border-[#DCE8F6]">
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 relative">
          <div className="relative mx-auto max-w-[500px]">
            <div className="absolute -top-6 -right-6 w-36 h-36 sm:w-44 sm:h-44 bg-[#E1EDFA] rounded-3xl pointer-events-none -z-0" />
            <svg
              className="absolute -top-10 -left-10 w-[360px] h-[260px] pointer-events-none z-10 overflow-visible"
              viewBox="0 0 360 260"
              fill="none"
            >
              <path
                d="M 20 220 C 10 100, 140 20, 280 40"
                stroke="#CBD5E1"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            </svg>
            <div className="absolute -top-2 left-1/3 w-2.5 h-2.5 rounded-full bg-[#E71E28] shadow-[0_0_8px_rgba(231,30,40,0.6)] z-20 pointer-events-none" />
            <div className="absolute top-1/4 -left-7 w-2.5 h-2.5 rounded-full bg-[#E71E28] shadow-[0_0_8px_rgba(231,30,40,0.6)] z-20 pointer-events-none" />
            <div className="absolute top-1/2 -left-3 w-2.5 h-2.5 rounded-full bg-[#2563EB] z-20 pointer-events-none" />
            <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 w-28 h-16 bg-[radial-gradient(#60A5FA_2px,transparent_2px)] [background-size:12px_12px] opacity-75 pointer-events-none z-0" />
            <div className="absolute -bottom-10 -left-4 sm:-bottom-12 sm:-left-8 z-20 pointer-events-none">
              <span className="font-serif italic text-base sm:text-lg text-slate-500 font-medium leading-tight block">
                People
                <br />
                Technology
                <br />
                Growth
              </span>
              <div className="w-10 h-0.5 bg-[#E71E28] rounded-full mt-1.5" />
            </div>
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.1)] border border-slate-100 bg-slate-50 z-10 group">
              <img
                src={images.aboutWhoWeAre}
                alt="ARA Solutions workforce leadership and professional recruitment advisory team collaborating in modern office"
                className="w-full h-[320px] sm:h-[390px] object-cover object-center transition-transform duration-700 group-hover:scale-103"
              />
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 lg:pl-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-xs mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E71E28]" />
            <span>About Us</span>
          </div>
          <h2 className="font-['Sora'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0B1528] tracking-tight leading-[1.15] mb-4">
            {'Who We '}
            <span className="text-[#E71E28]">Are</span>
          </h2>
          <div className="w-12 h-1 bg-[#E71E28] rounded-full mb-6" />
          <div className="space-y-5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-8">
            <p>
              ARA Solutions is a professional recruitment, staffing, and workforce solutions company based in
              Hyderabad, India, serving clients across domestic and international markets.
            </p>
            <p>
              We bridge the gap between organizational ambition and the people who make it real — with
              workforce models designed around the reality of each hire.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <motion.div
              initial={{
                opacity: 0,
                y: 16,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.4,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -3,
                scale: 1.015,
              }}
              className="glossy-card-light sheen-sweep rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 border border-slate-200/80 shadow-sm cursor-default"
            >
              <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-100 text-[#E71E28] flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-['Sora'] font-bold text-slate-900 leading-snug">
                  Connecting Talent to Opportunity
                </div>
                <div className="w-8 h-0.5 bg-[#E71E28] rounded-full mt-2" />
              </div>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                y: 16,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.4,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -3,
                scale: 1.015,
              }}
              className="glossy-card-light sheen-sweep rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 border border-slate-200/80 shadow-sm cursor-default"
            >
              <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-100 text-[#E71E28] flex items-center justify-center shrink-0">
                <ChartColumn className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-['Sora'] font-bold text-slate-900 leading-snug">
                  Building Stronger Workforces
                </div>
                <div className="w-8 h-0.5 bg-[#E71E28] rounded-full mt-2" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutStory;
