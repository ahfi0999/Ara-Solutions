const WaveDivider = ({ position, className = '' }) =>
  position === 'bottom' ? (
    <div
      className={`absolute -bottom-1 inset-x-0 w-full pointer-events-none z-20 leading-none overflow-visible ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-12 sm:h-16 md:h-20 lg:h-24 block translate-y-1"
      >
        <defs>
          <linearGradient id="waveBlendHeroToWhite" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#204282" stopOpacity="0.35" />
            <stop offset="35%" stopColor="#3B82F6" stopOpacity="0.22" />
            <stop offset="70%" stopColor="#94A3B8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#204282" stopOpacity="0.3" />
          </linearGradient>
          <filter id="heroWaveSoftShadow" x="-5%" y="-40%" width="110%" height="150%">
            <feDropShadow dx="0" dy="-4" stdDeviation="4" floodColor="#090D1A" floodOpacity="0.3" />
          </filter>
        </defs>
        <path
          d="M0,120 L0,18 C300,56 500,10 760,34 C1020,58 1220,14 1440,24 L1440,120 Z"
          fill="url(#waveBlendHeroToWhite)"
        />
        <path
          d="M0,120 L0,30 C310,66 520,20 780,44 C1040,68 1240,24 1440,34 L1440,120 Z"
          fill="#CBD5E1"
          opacity="0.85"
          filter="url(#heroWaveSoftShadow)"
        />
        <path
          d="M0,120 L0,42 C330,76 540,32 800,54 C1050,76 1250,34 1440,44 L1440,120 Z"
          fill="#E2E8F0"
          opacity="0.9"
        />
        <path d="M0,120 L0,54 C350,84 560,40 830,64 C1060,84 1260,44 1440,54 L1440,120 Z" fill="#FFFFFF" />
      </svg>
    </div>
  ) : (
    <div
      className={`absolute -top-1 inset-x-0 w-full pointer-events-none z-20 leading-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-14 sm:h-18 md:h-22 lg:h-26 block -translate-y-0.5 drop-shadow-[0_8px_20px_rgba(11,14,26,0.22)]"
      >
        <defs>
          <linearGradient id="waveBlendTopToTheme" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#CBD5E1" stopOpacity="0.6" />
            <stop offset="35%" stopColor="#3B82F6" stopOpacity="0.25" />
            <stop offset="70%" stopColor="#204282" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#CBD5E1" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <path
          d="M0,0 L0,118 C300,72 500,128 760,98 C1020,68 1220,122 1440,110 L1440,0 Z"
          fill="url(#waveBlendTopToTheme)"
        />
        <path
          d="M0,0 L0,104 C310,62 520,116 780,86 C1040,58 1240,112 1440,98 L1440,0 Z"
          fill="#CBD5E1"
          opacity="0.9"
        />
        <path
          d="M0,0 L0,90 C330,50 540,102 800,74 C1050,48 1250,100 1440,86 L1440,0 Z"
          fill="#E2E8F0"
          opacity="0.95"
        />
        <path d="M0,0 L0,76 C350,42 560,92 830,64 C1060,42 1260,88 1440,74 L1440,0 Z" fill="#FFFFFF" />
      </svg>
    </div>
  );

export default WaveDivider;
