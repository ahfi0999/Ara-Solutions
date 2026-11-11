import CtaBand from '../../components/sections/CtaBand';
import PageHero from '../../components/sections/PageHero';
import ProcessSteps from '../../components/sections/ProcessSteps';
import { images } from '../../data/images';
import GlobalOpportunities from '../../sections/international/GlobalOpportunities';
import GlobalTalentAdvantage from '../../sections/international/GlobalTalentAdvantage';
import { RiskMitigation } from '../../sections/international/RiskMitigation';
import VerificationProcess from '../../sections/international/VerificationProcess';

const InternationalConsultingPage = () => (
  <div className="bg-[#FFFFFF]">
    <PageHero
      variant="page"
      badge="Cross-Border Global Mobility & Verification"
      headline="International Consulting"
      subhead="Connecting enterprise teams with elite global engineering talent across the US, UK, Europe, and India. Compliant cross-border hiring, rigorous credential verification, and zero offer-stage ambiguity."
      backgroundImage={images.internationalHero}
      techVariant="hud-radar"
      primaryCTA={{
        label: 'Request International Consultation',
        to: '/contact',
      }}
      secondaryCTA={{
        label: 'Learn About Verification',
        to: '/contact',
      }}
      highlightCards={[
        {
          title: 'Global Delivery Reach',
          metric: '4+',
          subtitle: 'Major International Geos',
          description:
            'Cross-market sourcing networks in US, UK, Middle East, and Indian GCC tech corridors.',
        },
        {
          title: 'Pre-Offer Credential Checks',
          metric: '100%',
          subtitle: 'Verified Backgrounds',
          description:
            'Employment verification, identity screening, academic credential audits, and statutory clearances.',
        },
        {
          title: 'Compliance & Mobility Advisory',
          metric: '24/7',
          subtitle: 'Cross-Time-Zone Coordination',
          description: 'Seamless onboarding logistics, time-zone alignment, and tax compliance coordination.',
        },
      ]}
    />
    <GlobalTalentAdvantage />
    <GlobalOpportunities />
    <ProcessSteps
      headline="The Cross-Border Sourcing Lifecycle"
      steps={[
        {
          label: 'Source',
          description:
            'Map and engage talent across target international markets and specialized professional networks.',
        },
        {
          label: 'Assess',
          description:
            'Screen for technical competence, communication fluency, and readiness for cross-border collaboration.',
        },
        {
          label: 'Coordinate',
          description:
            'Manage interview schedules across multiple time zones with responsive communication at every step.',
        },
        {
          label: 'Engage',
          description:
            'Support the offer, contract structure, and onboarding transition to set both sides up for lasting success.',
        },
      ]}
      tags={[
        'Time zone alignment',
        'Cross-border compliance',
        'Market compensation intelligence',
        'Transition management',
      ]}
    />
    <RiskMitigation />
    <VerificationProcess />
    <CtaBand
      headline="Protect your next hire before they start."
      body="Whether you need background check support on an active candidate or guidance on international sourcing, we're ready to help."
      cta={{
        label: 'Request Verification Services',
        to: '/contact',
      }}
    />
  </div>
);

export default InternationalConsultingPage;
