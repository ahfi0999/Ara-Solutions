import { useEffect, useRef, useState } from 'react';
import { ChevronIcon, CloseIcon, MenuIcon } from '../icons';
import Logo from './Logo';
import MobileNavGroup from './MobileNavGroup';
import NavDropdown from './NavDropdown';
import { companyLinks, serviceLinks, trainingLinks } from '../../data/navigation';
import { useRouter } from '../../lib/router';

const Navbar = () => {
  const { currentPath, navigate } = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [trainingOpen, setTrainingOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const companyRef = useRef(null);
  const servicesRef = useRef(null);
  const trainingRef = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, {
      passive: true,
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    const onClickOutside = (event) => {
      if (companyRef.current && !companyRef.current.contains(event.target)) {
        setCompanyOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
      if (trainingRef.current && !trainingRef.current.contains(event.target)) {
        setTrainingOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);
  const goTo = (path) => {
    navigate(path);
    setMobileOpen(false);
    setCompanyOpen(false);
    setServicesOpen(false);
    setTrainingOpen(false);
  };
  const inCompany = currentPath.startsWith('/company');
  const inServices = currentPath.startsWith('/services') && currentPath !== '/services/training-placement';
  const inTraining =
    currentPath.startsWith('/training-placement') || currentPath === '/services/training-placement';
  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-none ${scrolled ? 'bg-[#0B0E1A]/95 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(32,66,130,0.4)]' : 'bg-gradient-to-b from-[#0B0E1A]/85 via-[#0B0E1A]/35 to-transparent'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="cursor-pointer" onClick={() => goTo('/')}>
              <Logo variant="dark" size="md" showTagline={true} />
            </div>
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <div
                className="relative"
                ref={companyRef}
                onMouseEnter={() => setCompanyOpen(true)}
                onMouseLeave={() => setCompanyOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => {
                    setCompanyOpen(!companyOpen);
                    setServicesOpen(false);
                    setTrainingOpen(false);
                  }}
                  className={`relative inline-flex items-center gap-1.5 px-3.5 py-2 font-['Sora'] text-sm font-semibold transition-colors duration-200 cursor-pointer ${inCompany || companyOpen ? 'text-white' : 'text-slate-300 hover:text-white'}`}
                  aria-expanded={companyOpen}
                  aria-haspopup="true"
                >
                  <span>Company</span>
                  <ChevronIcon direction={companyOpen ? 'up' : 'down'} size={14} color="currentColor" />
                  <span
                    className={`absolute bottom-0 left-3.5 right-3.5 h-[2.5px] rounded-full bg-gradient-to-r from-[#E71E28] via-[#FF3B47] to-[#B8141D] shadow-[0_0_8px_rgba(231,30,40,0.6)] transition-transform duration-200 origin-left ${inCompany || companyOpen ? 'scale-x-100' : 'scale-x-0'}`}
                  />
                </button>
                <NavDropdown
                  label="COMPANY"
                  items={companyLinks}
                  isOpen={companyOpen}
                  currentPath={currentPath}
                  onSelect={goTo}
                  widthClass="w-[520px]"
                  alignClass="-left-4 xl:-left-6"
                />
              </div>
              <div
                className="relative"
                ref={servicesRef}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => {
                    setServicesOpen(!servicesOpen);
                    setCompanyOpen(false);
                    setTrainingOpen(false);
                  }}
                  className={`relative inline-flex items-center gap-1.5 px-3.5 py-2 font-['Sora'] text-sm font-semibold transition-colors duration-200 cursor-pointer ${inServices || servicesOpen ? 'text-white' : 'text-slate-300 hover:text-white'}`}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  <span>Services</span>
                  <ChevronIcon direction={servicesOpen ? 'up' : 'down'} size={14} color="currentColor" />
                  <span
                    className={`absolute bottom-0 left-3.5 right-3.5 h-[2.5px] rounded-full bg-gradient-to-r from-[#E71E28] via-[#FF3B47] to-[#B8141D] shadow-[0_0_8px_rgba(231,30,40,0.6)] transition-transform duration-200 origin-left ${inServices || servicesOpen ? 'scale-x-100' : 'scale-x-0'}`}
                  />
                </button>
                <NavDropdown
                  label="SERVICES"
                  items={serviceLinks}
                  isOpen={servicesOpen}
                  currentPath={currentPath}
                  onSelect={goTo}
                  widthClass="w-[580px]"
                  alignClass="-left-20 xl:-left-24"
                />
              </div>
              <div
                className="relative"
                ref={trainingRef}
                onMouseEnter={() => setTrainingOpen(true)}
                onMouseLeave={() => setTrainingOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => {
                    setTrainingOpen(!trainingOpen);
                    setCompanyOpen(false);
                    setServicesOpen(false);
                  }}
                  className={`relative inline-flex items-center gap-1.5 px-3 py-2 font-['Sora'] text-sm font-semibold transition-colors duration-200 cursor-pointer ${inTraining || trainingOpen ? 'text-white' : 'text-slate-300 hover:text-white'}`}
                  aria-expanded={trainingOpen}
                  aria-haspopup="true"
                >
                  <span>Training & Placement</span>
                  <ChevronIcon direction={trainingOpen ? 'up' : 'down'} size={14} color="currentColor" />
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-[2.5px] rounded-full bg-gradient-to-r from-[#E71E28] via-[#FF3B47] to-[#B8141D] shadow-[0_0_8px_rgba(231,30,40,0.6)] transition-transform duration-200 origin-left ${inTraining || trainingOpen ? 'scale-x-100' : 'scale-x-0'}`}
                  />
                </button>
                <NavDropdown
                  label="TRAINING & PLACEMENT"
                  items={trainingLinks}
                  isOpen={trainingOpen}
                  currentPath={currentPath}
                  onSelect={goTo}
                  widthClass="w-[580px]"
                  alignClass="-left-32 xl:-left-40"
                />
              </div>
              <button
                type="button"
                onClick={() => goTo('/careers')}
                className={`relative px-3.5 py-2 font-['Sora'] text-sm font-semibold transition-colors duration-200 cursor-pointer ${currentPath === '/careers' ? 'text-white' : 'text-slate-300 hover:text-white'}`}
              >
                <span>Careers</span>
                <span
                  className={`absolute bottom-0 left-3.5 right-3.5 h-[2.5px] rounded-full bg-gradient-to-r from-[#E71E28] via-[#FF3B47] to-[#B8141D] shadow-[0_0_8px_rgba(231,30,40,0.6)] transition-transform duration-200 origin-left ${currentPath === '/careers' ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'}`}
                />
              </button>
              <button
                type="button"
                onClick={() => goTo('/contact')}
                className={`relative px-3.5 py-2 font-['Sora'] text-sm font-semibold transition-colors duration-200 cursor-pointer ${currentPath === '/contact' ? 'text-white' : 'text-slate-300 hover:text-white'}`}
              >
                <span>Contact Us</span>
                <span
                  className={`absolute bottom-0 left-3.5 right-3.5 h-[2.5px] rounded-full bg-gradient-to-r from-[#E71E28] via-[#FF3B47] to-[#B8141D] shadow-[0_0_8px_rgba(231,30,40,0.6)] transition-transform duration-200 origin-left ${currentPath === '/contact' ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'}`}
                />
              </button>
            </div>
            <div className="lg:hidden flex items-center">
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
              </button>
            </div>
          </div>
        </div>
        {mobileOpen && (
          <div className="lg:hidden bg-[#0B0E1A]/95 border-b border-[#224182]/40 px-4 pt-3 pb-6 space-y-3 backdrop-blur-xl max-h-[85vh] overflow-y-auto">
            <MobileNavGroup label="COMPANY" items={companyLinks} currentPath={currentPath} onSelect={goTo} />
            <MobileNavGroup label="SERVICES" items={serviceLinks} currentPath={currentPath} onSelect={goTo} />
            <MobileNavGroup
              label="TRAINING & PLACEMENT"
              items={trainingLinks}
              currentPath={currentPath}
              onSelect={goTo}
            />
            <div className="pt-2 space-y-1">
              <button
                type="button"
                onClick={() => goTo('/careers')}
                className={`w-full text-left py-2.5 px-3 font-['Sora'] font-semibold text-sm rounded-lg ${currentPath === '/careers' ? 'text-white bg-[#282870]/40' : 'text-slate-300 hover:text-white'}`}
              >
                Careers
              </button>
              <button
                type="button"
                onClick={() => goTo('/contact')}
                className={`w-full text-left py-2.5 px-3 font-['Sora'] font-semibold text-sm rounded-lg ${currentPath === '/contact' ? 'text-white bg-[#282870]/40' : 'text-slate-300 hover:text-white'}`}
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
