import { useEffect, useState } from 'react';
import { ArrowUp, Check, Mail, MapPin, Phone, Send } from 'lucide-react';
import DarkBackdrop from '../decor/DarkBackdrop';
import TechPattern from '../decor/TechPattern';
import Logo from './Logo';
import { useRouter } from '../../lib/router';

const Footer = () => {
  const { navigate } = useRouter();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const handleSubscribe = (event) => {
    event.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3500);
    }
  };
  const goTo = (path) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <footer className="relative bg-[#070A14] text-slate-300 border-t border-[#224182]/30 overflow-hidden">
      <DarkBackdrop hasRedGlow={true} />
      <TechPattern variant="wave-lines" />
      <TechPattern variant="dot-mesh" />
      <div
        className="absolute top-0 left-1/4 w-[560px] h-[560px] rounded-full filter blur-[130px] pointer-events-none opacity-50"
        style={{
          background: 'radial-gradient(circle, #2563EB 0%, #1D4ED8 40%, transparent 75%)',
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[540px] h-[540px] rounded-full filter blur-[140px] pointer-events-none opacity-45"
        style={{
          background: 'radial-gradient(circle, #E71E28 0%, #DC2626 35%, transparent 75%)',
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#224182]/25">
          <div className="lg:col-span-4">
            <div className="cursor-pointer mb-4" onClick={() => goTo('/')}>
              <Logo variant="dark" size="md" showTagline={true} />
            </div>
            <p className="mt-4 text-sm text-slate-400 font-normal leading-relaxed max-w-sm">
              Empowering organizations with future-proof IT workforce, specialized engineering teams, and
              scalable staffing solutions tailored to modern enterprise demands.
            </p>
            <div className="mt-6 space-y-3 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#224182] shrink-0" />
                <span>Madhapur, Hyderabad, Telangana, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#224182] shrink-0" />
                <a href="mailto:info@arasolutions.in" className="hover:text-white transition-colors">
                  info@arasolutions.in
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#224182] shrink-0" />
                <a href="tel:+918019603000" className="hover:text-white transition-colors">
                  +91 80196 03000
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <h3 className="font-['Sora'] font-bold text-xs uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E71E28]" />
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => goTo('/services/corp-to-corp')}
                  className="text-slate-400 hover:text-white hover:translate-x-0.5 transition-all text-left"
                >
                  Corp to Corp Staffing
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => goTo('/services/fulltime-staffing')}
                  className="text-slate-400 hover:text-white hover:translate-x-0.5 transition-all text-left"
                >
                  Fulltime Staffing (IT & Non-IT)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => goTo('/services/rpo')}
                  className="text-slate-400 hover:text-white hover:translate-x-0.5 transition-all text-left"
                >
                  Recruitment Process Outsourcing (RPO)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => goTo('/training-placement')}
                  className="text-slate-400 hover:text-white hover:translate-x-0.5 transition-all text-left"
                >
                  Training & Placement
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => goTo('/services/international-consulting')}
                  className="text-slate-400 hover:text-white hover:translate-x-0.5 transition-all text-left"
                >
                  International Consulting & Verification
                </button>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h3 className="font-['Sora'] font-bold text-xs uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#224182]" />
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => goTo('/company/about')}
                  className="text-slate-400 hover:text-white hover:translate-x-0.5 transition-all text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => goTo('/company/approach')}
                  className="text-slate-400 hover:text-white hover:translate-x-0.5 transition-all text-left"
                >
                  Our Approach
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => goTo('/company/case-studies')}
                  className="text-slate-400 hover:text-white hover:translate-x-0.5 transition-all text-left"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => goTo('/careers')}
                  className="text-slate-400 hover:text-white hover:translate-x-0.5 transition-all text-left"
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => goTo('/contact')}
                  className="text-slate-400 hover:text-white hover:translate-x-0.5 transition-all text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h3 className="font-['Sora'] font-bold text-xs uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E71E28]" />
              Newsletter
            </h3>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Stay ahead with weekly IT workforce trends, tech salary benchmarks, and GCC talent insights.
            </p>
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your email address"
                required={true}
                className="w-full pl-4 pr-12 py-3 bg-[#0B0E1A] border border-[#224182]/40 rounded-full text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#224182] transition-colors"
              />
              <button
                type="submit"
                className="btn-glossy absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-all"
                aria-label="Subscribe to newsletter"
              >
                <span className="relative z-10 flex items-center justify-center">
                  {subscribed ? (
                    <Check className="w-4 h-4 text-white" />
                  ) : (
                    <Send className="w-4 h-4 text-white" />
                  )}
                </span>
              </button>
            </form>
            {subscribed && (
              <p className="mt-2 text-xs text-white font-medium animate-fade-in flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#E71E28]" />
                <span>Thank you for subscribing!</span>
              </p>
            )}
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            {'© '}
            {new Date().getFullYear()}
            {' ARA Solutions. All rights reserved. '}
            <span className="text-slate-400 font-medium">IT Always The Right Choice</span>
          </p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer transition-colors">
              Security & Compliance
            </span>
          </div>
        </div>
      </div>
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="btn-glossy fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        >
          <span className="relative z-10">
            <ArrowUp className="w-5 h-5 text-white font-bold" />
          </span>
        </button>
      )}
    </footer>
  );
};

export default Footer;
