const HeroGlow = ({ className = '', color = 'blue', isLight = false }) => (
  <div
    className={`absolute left-1/2 -top-16 -translate-x-1/2 w-[600px] sm:w-[860px] h-64 ${isLight ? (color === 'red' ? 'bg-gradient-to-r from-[#E71E28]/15 via-[#E71E28]/10 to-transparent' : 'bg-gradient-to-r from-[#204282]/15 via-[#282870]/10 to-transparent') : color === 'red' ? 'bg-gradient-to-r from-[#DC2626]/65 via-[#E71E28]/50 to-[#FB7185]/25' : color === 'navy' ? 'bg-gradient-to-r from-[#1D4ED8]/70 via-[#2563EB]/55 to-[#38BDF8]/30' : 'bg-gradient-to-r from-[#2563EB]/75 via-[#38BDF8]/55 to-[#60A5FA]/30'} blur-[90px] pointer-events-none rounded-full -z-10 animate-pulse ${className}`}
    style={{
      animationDuration: '4.5s',
    }}
    aria-hidden="true"
  >
    {!isLight && (
      <div className="absolute top-1/3 left-1/4 w-[360px] h-24 rounded-full bg-gradient-to-r from-transparent via-[#38BDF8]/40 to-transparent blur-[45px]" />
    )}
  </div>
);

export default HeroGlow;
