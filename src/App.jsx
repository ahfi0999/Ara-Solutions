import { AnimatePresence, motion } from 'framer-motion';
import { RouterProvider, useRouter } from './lib/router';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/company/AboutPage';
import ApproachPage from './pages/company/ApproachPage';
import CaseStudiesPage from './pages/company/CaseStudiesPage';
import CorpToCorpPage from './pages/services/CorpToCorpPage';
import FulltimeStaffingPage from './pages/services/FulltimeStaffingPage';
import RpoPage from './pages/services/RpoPage';
import InternationalConsultingPage from './pages/services/InternationalConsultingPage';
import TrainingPlacementPage from './pages/training/TrainingPlacementPage';
import ServiceNowPage from './pages/training/ServiceNowPage';
import CyberSecurityPage from './pages/training/CyberSecurityPage';
import AiMlPage from './pages/training/AiMlPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';

const PAGES = {
  '/': HomePage,
  '/company/about': AboutPage,
  '/company/approach': ApproachPage,
  '/company/case-studies': CaseStudiesPage,
  '/services/corp-to-corp': CorpToCorpPage,
  '/services/fulltime-staffing': FulltimeStaffingPage,
  '/services/rpo': RpoPage,
  '/services/training-placement': TrainingPlacementPage,
  '/services/international-consulting': InternationalConsultingPage,
  '/training-placement': TrainingPlacementPage,
  '/training-placement/servicenow': ServiceNowPage,
  '/training-placement/cybersecurity': CyberSecurityPage,
  '/training-placement/ai-ml': AiMlPage,
  '/careers': CareersPage,
  '/contact': ContactPage,
};

/** Cross-fades between pages whenever the route changes. */
function CurrentPage() {
  const { currentPath } = useRouter();
  const Page = PAGES[currentPath] ?? HomePage;
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentPath}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{
          duration: 0.2,
          ease: 'easeInOut',
        }}
        className="w-full flex-1"
      >
        <Page />
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <div className="min-h-screen flex flex-col bg-[#ffffff] text-slate-900 font-['Inter'] selection:bg-[#E71E28] selection:text-white">
        <Navbar />
        <main className="flex-1 flex flex-col" id="main-content">
          <CurrentPage />
        </main>
        <Footer />
      </div>
    </RouterProvider>
  );
}
