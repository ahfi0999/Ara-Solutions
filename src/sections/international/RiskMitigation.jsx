import { motion } from 'framer-motion';
import { Check, User } from 'lucide-react';

const AvatarHeading = ({ title, className = '', avatarVariant = 'slate' }) => (
  <motion.div
    whileHover={{
      scale: 1.06,
      y: -4,
    }}
    className={`glossy-card sheen-sweep rounded-xl p-3 sm:p-3.5 select-none cursor-default ${className}`}
  >
    <div className="flex items-center gap-2.5">
      <div className="relative">
        <div
          className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center ${avatarVariant === 'blue' ? 'bg-blue-500/25 text-blue-200 border border-blue-400/30' : 'bg-slate-400/20 text-slate-300 border border-white/10'}`}
        >
          <User className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
        </div>
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#3B82F6] text-white flex items-center justify-center shadow-xs">
          <Check className="w-2.5 h-2.5" strokeWidth={3} />
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-['Sora'] font-bold text-xs sm:text-[13px] text-white leading-tight truncate">
          {title}
        </div>
        <div className="mt-1.5 flex flex-col gap-1">
          <div className="w-14 sm:w-16 h-1 sm:h-1.5 rounded-full bg-white/20" />
          <div className="w-8 sm:w-10 h-1 sm:h-1.5 rounded-full bg-white/10" />
        </div>
      </div>
    </div>
  </motion.div>
);

export default AvatarHeading;

export const RiskMitigation = () => (
  <section className="py-16 sm:py-20 lg:py-24 bg-[#050C1F] relative overflow-hidden text-white">
    <div className="absolute inset-0 bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
    <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[460px] h-[460px] bg-[#1D4ED8]/20 rounded-full blur-[110px] pointer-events-none" />
    <div className="absolute bottom-10 right-[5%] w-80 h-80 bg-[#EF4444]/15 rounded-full blur-[90px] pointer-events-none" />
    <div
      className="absolute right-0 top-0 w-full sm:w-[500px] lg:w-[600px] h-[360px] pointer-events-none opacity-20 overflow-hidden"
      aria-hidden="true"
    >
      <svg className="w-full h-full text-blue-200" viewBox="0 0 600 360" fill="none">
        <ellipse
          cx="480"
          cy="120"
          rx="200"
          ry="200"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeDasharray="4 4"
          opacity="0.4"
        />
        <ellipse
          cx="480"
          cy="120"
          rx="140"
          ry="200"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeDasharray="4 4"
          opacity="0.3"
        />
        <ellipse
          cx="480"
          cy="120"
          rx="70"
          ry="200"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeDasharray="4 4"
          opacity="0.3"
        />
        <line
          x1="280"
          y1="120"
          x2="680"
          y2="120"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeDasharray="4 4"
          opacity="0.4"
        />
        <ellipse
          cx="480"
          cy="120"
          rx="200"
          ry="100"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeDasharray="4 4"
          opacity="0.3"
        />
        <g fill="currentColor">
          <circle cx="420" cy="80" r="2" />
          <circle cx="435" cy="75" r="2.5" />
          <circle cx="450" cy="85" r="2" />
          <circle cx="440" cy="100" r="2.5" />
          <circle cx="460" cy="95" r="2" />
          <circle cx="475" cy="105" r="2.5" />
          <circle cx="490" cy="90" r="2" />
          <circle cx="510" cy="85" r="2.5" />
          <circle cx="530" cy="95" r="2" />
          <circle cx="500" cy="115" r="2" />
          <circle cx="520" cy="110" r="2.5" />
          <circle cx="545" cy="120" r="2" />
          <circle cx="460" cy="130" r="2" />
          <circle cx="480" cy="140" r="2.5" />
          <circle cx="505" cy="145" r="2" />
          <circle cx="530" cy="150" r="2" />
          <circle cx="550" cy="135" r="2.5" />
        </g>
      </svg>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-6 xl:col-span-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-['Sora'] font-semibold text-slate-200">
              <span className="w-2 h-2 rounded-full bg-[#FF2D3B] shadow-[0_0_8px_#FF2D3B]" />
              <span>Risk Mitigation</span>
            </div>
            <div className="w-16 h-px bg-white/20" />
          </div>
          <h2 className="font-['Sora'] font-extrabold text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] text-white tracking-tight leading-[1.18] mb-6">
            {'Background Check — '}
            <br />
            <span className="text-[#FF2D3B]">verification you can trust</span>
            <br />
            before you extend an offer
          </h2>
          <div className="space-y-4 text-slate-300 font-normal text-sm sm:text-[15px] leading-relaxed max-w-xl">
            <p>
              An offer extended on incomplete or unverified information is an expensive organizational risk.
              ARA Solutions provides rigorous background verification support to give clients total confidence
              before an offer letter is finalized or a consultant begins work.
            </p>
            <p>
              Our verification process covers all critical dimensions of candidate credibility — thoroughly,
              discreetly, and fast enough not to lose great talent to competing offers in fast-moving hiring
              cycles.
            </p>
          </div>
          <div className="flex items-center gap-3.5 mt-12 sm:mt-16">
            <span className="w-10 sm:w-12 h-[2.5px] bg-[#FF2D3B] rounded-full inline-block" />
            <span className="font-['Sora'] text-xs font-semibold text-slate-400 tracking-[0.22em] uppercase">
              PEOPLE PROCESS PROTECTION
            </span>
          </div>
        </div>
        <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center min-h-[460px] sm:min-h-[520px]">
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none select-none"
            viewBox="0 0 540 500"
            fill="none"
          >
            <ellipse
              cx="270"
              cy="260"
              rx="230"
              ry="170"
              stroke="#3B82F6"
              strokeWidth="1.2"
              strokeDasharray="4 4"
              opacity="0.35"
            />
            <path
              d="M 60 210 C 110 130, 260 100, 390 140 C 470 170, 490 280, 420 370 C 350 440, 190 440, 100 370"
              stroke="#60A5FA"
              strokeWidth="1.2"
              opacity="0.3"
            />
            <path
              d="M 370 110 C 460 160, 500 240, 480 320"
              stroke="#EF4444"
              strokeWidth="1.5"
              opacity="0.45"
            />
            <circle cx="160" cy="138" r="3.5" fill="#FF2D3B" />
            <circle cx="160" cy="138" r="7" fill="#FF2D3B" opacity="0.3" />
            <circle cx="445" cy="165" r="3.5" fill="#3B82F6" />
            <circle cx="445" cy="165" r="7" fill="#3B82F6" opacity="0.3" />
          </svg>
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative w-44 sm:w-52 h-56 sm:h-64 flex items-center justify-center -mb-8 sm:-mb-10">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl -z-10" />
              <svg
                className="w-full h-full drop-shadow-[0_15px_35px_rgba(11,40,105,0.7)]"
                viewBox="0 0 200 240"
                fill="none"
              >
                <defs>
                  <linearGradient id="shieldCore" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#0B1C48" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#040C22" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="shieldRim" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#38BDF8" />
                    <stop offset="48%" stopColor="#2563EB" />
                    <stop offset="52%" stopColor="#DC2626" />
                    <stop offset="100%" stopColor="#FF2D3B" />
                  </linearGradient>
                  <linearGradient id="checkGlow" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="100%" stopColor="#E2E8F0" />
                  </linearGradient>
                </defs>
                <path
                  d="M 100 12 L 175 42 C 175 145, 138 198, 100 228 C 62 198, 25 145, 25 42 Z"
                  fill="url(#shieldCore)"
                  stroke="url(#shieldRim)"
                  strokeWidth="3.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M 100 24 L 163 50 C 163 138, 132 186, 100 212 C 68 186, 37 138, 37 50 Z"
                  fill="none"
                  stroke="#60A5FA"
                  strokeWidth="1.2"
                  opacity="0.4"
                />
                <path
                  d="M 68 118 L 88 138 L 132 94"
                  stroke="url(#checkGlow)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="drop-shadow(0px 4px 8px rgba(0,0,0,0.5))"
                />
              </svg>
            </div>
            <div className="relative w-56 sm:w-64 h-14 sm:h-16 flex items-center justify-center">
              <div className="absolute bottom-0 w-48 sm:w-56 h-7 sm:h-8 rounded-[50%] bg-[#06112C] border border-white/10 shadow-[0_10px_25px_rgba(0,0,0,0.8)]" />
              <div className="absolute top-1 sm:top-2 w-40 sm:w-48 h-6 sm:h-7 rounded-[50%] bg-gradient-to-r from-[#0C2253] via-[#091838] to-[#1C0D1B] border-t-2 border-l-2 border-t-[#38BDF8] border-l-[#38BDF8] border-r-2 border-b-2 border-r-[#FF2D3B] border-b-[#FF2D3B] shadow-[0_0_20px_rgba(37,99,235,0.4),0_0_20px_rgba(239,68,68,0.3)]" />
            </div>
          </div>
          <div className="absolute top-2 sm:top-4 left-1/2 -translate-x-1/2 z-20">
            <AvatarHeading title="Identity Verified" />
          </div>
          <div className="absolute top-24 sm:top-28 left-2 sm:left-4 lg:-left-4 xl:left-0 z-20">
            <AvatarHeading title="Employment History" />
          </div>
          <div className="absolute bottom-12 sm:bottom-14 left-2 sm:left-6 lg:-left-2 xl:left-2 z-20">
            <AvatarHeading title="Education Verified" />
          </div>
          <div className="absolute top-28 sm:top-32 right-2 sm:right-4 lg:-right-4 xl:right-0 z-20">
            <AvatarHeading title="Criminal Check" />
          </div>
          <div className="absolute bottom-10 sm:bottom-12 right-2 sm:right-6 lg:-right-2 xl:right-2 z-20">
            <AvatarHeading title="Reference Check" />
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-12 sm:mt-16">
        <div className="flex items-center gap-3 text-left">
          <span className="w-[2.5px] h-11 bg-[#FF2D3B] rounded-full shrink-0" />
          <div className="font-['Sora'] text-[11px] font-semibold text-slate-400 tracking-[0.2em] leading-[1.35] uppercase">
            <div>TRUSTED</div>
            <div>TALENT</div>
            <div>STRONGER TEAMS</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
