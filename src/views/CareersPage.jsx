'use client';

import PageHero from '../components/sections/PageHero';
import { images } from '../data/images';
import OpenPositions from '../sections/careers/OpenPositions';
import WhyJoinUs from '../sections/careers/WhyJoinUs';

const CareersPage = () => (
  <div className="bg-[#FFFFFF]">
    <PageHero
      variant="page"
      badge="Join Our High-Performance Culture"
      headline="Build Ambition With Us"
      subhead="We're a people-first workforce and recruitment partner. The same radical accountability, transparency, and growth we deliver to global clients, we invest in our own recruiters, technical advisors, and delivery leaders."
      backgroundImage={images.careersHero}
      techVariant="wave-lines"
      highlightCards={[
        {
          title: 'People-First Culture',
          metric: '4.8',
          metricSuffix: ' / 5',
          subtitle: 'Team Satisfaction Index',
          description: 'Transparent compensation, generous performance bonuses, and continuous mentorship.',
          avatars: [
            images.avatars.careers.emp1,
            images.avatars.careers.emp2,
            images.avatars.careers.emp3,
            images.avatars.careers.emp4,
          ],
        },
        {
          title: 'Career Progression Pathways',
          metric: '100%',
          subtitle: 'Internal Promotion Track',
          description:
            'Fast-track career advancement paths into senior recruitment lead and account partner roles.',
        },
        {
          title: 'Global Delivery Exposure',
          metric: '3+',
          subtitle: 'Continents Served',
          description:
            'Daily collaboration with enterprise technology managers across US, UK, and APAC regions.',
        },
      ]}
    />
    <WhyJoinUs />
    <OpenPositions />
  </div>
);

export default CareersPage;
