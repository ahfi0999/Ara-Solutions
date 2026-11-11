'use client';

import CardGrid from '../components/sections/CardGrid';
import PageHero from '../components/sections/PageHero';
import { images } from '../data/images';
import ContactSection from '../sections/contact/ContactSection';

const ContactPage = () => (
  <div className="bg-[#FFFFFF] text-slate-800">
    <PageHero
      variant="page"
      hasWaveBottom={true}
      badge="Direct Enterprise Advisory Lines"
      headline={<span className="lg:whitespace-nowrap">Start a Strategic Talent Conversation</span>}
      headlineClassName="lg:whitespace-nowrap lg:text-[40px] xl:text-[46px] 2xl:text-5xl"
      subhead="Connect directly with our Hyderabad leadership team. No chatbots or endless intake queues — speak with senior staffing directors who understand technical delivery requirements."
      backgroundImage={images.contactHero}
      techVariant="circuit"
      highlightCards={[
        {
          title: 'Average Response Time',
          metric: '< 2',
          metricSuffix: ' hrs',
          subtitle: 'Direct Human SLA',
          description: 'Immediate callback from a senior partner aligned to your industry domain.',
        },
        {
          title: 'Hyderabad Global Delivery Hub',
          metric: 'HQ',
          subtitle: 'Madhapur Tech Corridor',
          description: 'Centrally located in Hyderabad’s premier IT and GCC business district.',
        },
        {
          title: 'Direct Phone Access',
          metric: '100%',
          subtitle: 'Always Reachable',
          description: 'Direct recruiter phone lines with real human follow-through on every engagement.',
        },
      ]}
    />
    <CardGrid
      headline="Direct Contact Information"
      kicker="Workforce Architecture"
      columns={3}
      isLight={true}
      noBorderBottom={true}
      cards={[
        {
          icon: 'building',
          badgeColor: 'navy',
          title: 'Hyderabad Office',
          description: 'Madhapur, Hitech City IT Corridor, Hyderabad, Telangana 500081, India.',
          kicker: 'Location',
        },
        {
          icon: 'file-check',
          badgeColor: 'red',
          title: 'info@arasolutions.in',
          description: 'Inquiries reviewed within one business day by dedicated recruitment practice leads.',
          kicker: 'Email',
        },
        {
          icon: 'clock',
          badgeColor: 'navy',
          title: '+91 80196 03000',
          description:
            'Available Monday through Saturday, 9:30 AM to 6:30 PM IST for immediate consultation.',
          kicker: 'Direct Line',
        },
      ]}
    />
    <ContactSection initialService="Corp-to-Corp Staffing" />
  </div>
);

export default ContactPage;
