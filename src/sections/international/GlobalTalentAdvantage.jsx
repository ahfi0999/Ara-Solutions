import { motion } from 'framer-motion';
import { Globe, Handshake, Users } from 'lucide-react';

const GlobalTalentAdvantage = () => (
  <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
    <div
      className="hidden xl:block absolute -left-36 top-1/4 w-72 h-72 rounded-full border-[22px] border-slate-50 pointer-events-none -z-10"
      aria-hidden="true"
    />
    <div
      className="hidden xl:block absolute -right-32 top-1/3 w-80 h-80 rounded-full border-[26px] border-slate-50 pointer-events-none -z-10"
      aria-hidden="true"
    />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-['Sora'] font-bold text-xs sm:text-[13px] text-[#E71E28] uppercase tracking-[0.16em]">
              GLOBAL TALENT ADVANTAGE
            </span>
            <span className="w-12 h-[3px] bg-[#E71E28] rounded-full inline-block" />
          </div>
          <h2 className="font-['Sora'] font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-[#0B1C44] tracking-tight leading-[1.18] mb-4">
            {'Cross-border hiring '}
            <br className="hidden sm:inline" />
            <span className="text-[#E71E28]">stopped being the exception</span>
          </h2>
          <div className="w-12 h-1 bg-[#E71E28] rounded-full mb-6" />
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-[1.7] mb-5">
            The best candidate for a high-impact technical or leadership role is often not sitting in your
            immediate metropolitan area. As distributed work and multinational engineering hubs mature,
            companies that know how to access international talent hold a distinct competitive advantage.
          </p>
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-[1.7] mb-8 sm:mb-10">
            ARA Solutions provides cross-border sourcing, market advisory, and candidate coordination — giving
            you the reach of an international search firm with the high-touch accountability of a boutique
            partner.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-4 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3.5 flex-1">
              <div className="w-11 h-11 rounded-full bg-red-50 text-[#E71E28] flex items-center justify-center shrink-0 border border-red-100/80 shadow-2xs">
                <Globe className="w-5 h-5" strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-['Sora'] font-bold text-xs sm:text-sm text-[#0B1C44]">Global Reach</h3>
                <p className="text-xs text-slate-500 font-normal mt-0.5">Access top talent across regions</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-9 bg-slate-200 shrink-0" aria-hidden="true" />
            <div className="flex items-center gap-3.5 flex-1">
              <div className="w-11 h-11 rounded-full bg-blue-50 text-[#0B2558] flex items-center justify-center shrink-0 border border-blue-100/80 shadow-2xs">
                <Users className="w-5 h-5" strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-['Sora'] font-bold text-xs sm:text-sm text-[#0B1C44]">Local Expertise</h3>
                <p className="text-xs text-slate-500 font-normal mt-0.5">On-ground market insights</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-9 bg-slate-200 shrink-0" aria-hidden="true" />
            <div className="flex items-center gap-3.5 flex-1">
              <div className="w-11 h-11 rounded-full bg-red-50 text-[#E71E28] flex items-center justify-center shrink-0 border border-red-100/80 shadow-2xs">
                <Handshake className="w-5 h-5" strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-['Sora'] font-bold text-xs sm:text-sm text-[#0B1C44]">
                  Trusted Partnership
                </h3>
                <p className="text-xs text-slate-500 font-normal mt-0.5">High-touch, end-to-end support</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="flex items-center gap-3 absolute -top-10 sm:-top-8 right-2 sm:right-6 text-left z-20">
            <span className="w-[3px] h-9 bg-[#E71E28] rounded-full shrink-0" />
            <div className="font-['Sora'] text-[11px] font-semibold text-slate-400 tracking-[0.2em] leading-[1.35] uppercase">
              <div>TALENT</div>
              <div>KNOWS</div>
              <div>NO BORDERS</div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[460px] lg:max-w-none pt-4 pb-6 flex items-center justify-center">
            <div className="absolute inset-0 bg-radial from-blue-500/5 via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />
            <svg
              className="w-full h-auto max-w-[480px] drop-shadow-sm select-none"
              viewBox="0 0 540 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient id="globeSphereGradient" cx="45%" cy="40%" r="55%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="70%" stopColor="#F8FAFC" />
                  <stop offset="100%" stopColor="#E2E8F0" stopOpacity="0.4" />
                </radialGradient>
                <linearGradient id="redArcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E71E28" stopOpacity="0.85" />
                  <stop offset="60%" stopColor="#E71E28" />
                  <stop offset="100%" stopColor="#E71E28" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="navyArcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0B2558" stopOpacity="0.8" />
                  <stop offset="70%" stopColor="#1E3A8A" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.2" />
                </linearGradient>
                <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#E71E28" stopOpacity="0.9" />
                  <stop offset="40%" stopColor="#E71E28" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#E71E28" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle
                cx="280"
                cy="250"
                r="180"
                fill="url(#globeSphereGradient)"
                stroke="#CBD5E1"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <ellipse
                cx="280"
                cy="250"
                rx="180"
                ry="80"
                stroke="#E2E8F0"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <ellipse
                cx="280"
                cy="250"
                rx="180"
                ry="140"
                stroke="#E2E8F0"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <ellipse
                cx="280"
                cy="250"
                rx="90"
                ry="180"
                stroke="#E2E8F0"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <ellipse
                cx="280"
                cy="250"
                rx="140"
                ry="180"
                stroke="#E2E8F0"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <g fill="#94A3B8" opacity="0.65">
                <circle cx="210" cy="140" r="2.2" />
                <circle cx="220" cy="135" r="2" />
                <circle cx="230" cy="145" r="2.2" />
                <circle cx="215" cy="155" r="2" />
                <circle cx="225" cy="160" r="2.5" />
                <circle cx="238" cy="150" r="2" />
                <circle cx="250" cy="175" r="2.5" />
                <circle cx="265" cy="180" r="2.2" />
                <circle cx="275" cy="190" r="2.5" />
                <circle cx="285" cy="185" r="2" />
                <circle cx="295" cy="195" r="2.5" />
                <circle cx="305" cy="205" r="2" />
                <circle cx="235" cy="200" r="2.5" />
                <circle cx="245" cy="220" r="2.2" />
                <circle cx="255" cy="245" r="2.5" />
                <circle cx="240" cy="265" r="2" />
                <circle cx="250" cy="290" r="2.5" />
                <circle cx="265" cy="320" r="2" />
                <circle cx="270" cy="235" r="2" />
                <circle cx="280" cy="260" r="2.5" />
                <circle cx="290" cy="285" r="2" />
                <circle cx="280" cy="130" r="2.2" />
                <circle cx="305" cy="125" r="2.5" />
                <circle cx="330" cy="135" r="2.2" />
                <circle cx="355" cy="140" r="2.5" />
                <circle cx="380" cy="150" r="2" />
                <circle cx="400" cy="160" r="2.2" />
                <circle cx="310" cy="155" r="2" />
                <circle cx="335" cy="165" r="2.5" />
                <circle cx="360" cy="175" r="2" />
                <circle cx="350" cy="210" r="2.8" />
                <circle cx="365" cy="225" r="3" />
                <circle cx="380" cy="230" r="3" />
                <circle cx="370" cy="245" r="3" />
                <circle cx="385" cy="255" r="2.8" />
                <circle cx="375" cy="275" r="2.5" />
                <circle cx="390" cy="285" r="2.2" />
                <circle cx="410" cy="190" r="2.5" />
                <circle cx="430" cy="205" r="2.8" />
                <circle cx="445" cy="220" r="2.5" />
                <circle cx="420" cy="235" r="2.2" />
                <circle cx="435" cy="260" r="2.5" />
                <circle cx="450" cy="280" r="2" />
              </g>
              <path
                d="M 120 280 C 140 160, 420 100, 480 230 C 510 300, 360 410, 220 370"
                stroke="#E2E8F0"
                strokeWidth="1.2"
                strokeDasharray="4 4"
                fill="none"
              />
              <path
                d="M 130 180 C 200 130, 310 160, 385 245"
                stroke="url(#navyArcGrad)"
                strokeWidth="1.8"
                fill="none"
              />
              <path
                d="M 225 155 C 275 145, 340 185, 385 245"
                stroke="url(#navyArcGrad)"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M 140 330 C 170 240, 290 230, 385 245"
                stroke="url(#redArcGrad)"
                strokeWidth="1.8"
                fill="none"
              />
              <path
                d="M 385 245 C 440 260, 490 220, 485 160 C 480 110, 380 90, 290 140"
                stroke="url(#redArcGrad)"
                strokeWidth="1.6"
                fill="none"
              />
              <path
                d="M 385 245 C 415 270, 435 300, 450 315"
                stroke="url(#redArcGrad)"
                strokeWidth="1.5"
                fill="none"
              />
              <circle cx="225" cy="155" r="4.5" fill="#0B2558" stroke="#FFFFFF" strokeWidth="2" />
              <circle cx="135" cy="275" r="4" fill="#0B2558" stroke="#FFFFFF" strokeWidth="1.5" />
              <circle cx="295" cy="195" r="4" fill="#E71E28" stroke="#FFFFFF" strokeWidth="1.5" />
              <circle cx="445" cy="205" r="4" fill="#0B2558" stroke="#FFFFFF" strokeWidth="1.5" />
              <circle cx="450" cy="315" r="4" fill="#E71E28" stroke="#FFFFFF" strokeWidth="1.5" />
              <circle cx="205" cy="355" r="4" fill="#E71E28" stroke="#FFFFFF" strokeWidth="1.5" />
              <circle cx="385" cy="245" r="22" fill="url(#hubGlow)" />
              <circle
                cx="385"
                cy="245"
                r="14"
                fill="#FDE8E9"
                stroke="#E71E28"
                strokeWidth="1"
                opacity="0.8"
              />
              <circle
                cx="385"
                cy="245"
                r="6"
                fill="#E71E28"
                stroke="#FFFFFF"
                strokeWidth="2"
                className="drop-shadow-sm"
              />
            </svg>
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
                scale: 1.03,
              }}
              className="absolute -bottom-4 right-2 sm:right-6 glossy-card-light sheen-sweep rounded-2xl p-5 sm:p-6 max-w-[210px] z-20 cursor-default"
            >
              <div className="font-['Sora'] text-xs sm:text-[13px] text-slate-500 font-medium leading-tight">
                People
              </div>
              <div className="font-['Sora'] text-xs sm:text-[13px] text-slate-500 font-medium leading-tight mt-0.5">
                Opportunities
              </div>
              <div className="font-['Sora'] font-extrabold text-sm sm:text-base text-[#E71E28] tracking-tight mt-2 leading-snug">
                Stronger Together
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default GlobalTalentAdvantage;
