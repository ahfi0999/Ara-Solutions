import CardGrid from '../../components/sections/CardGrid';
import CtaBand from '../../components/sections/CtaBand';
import PageHero from '../../components/sections/PageHero';
import { images } from '../../data/images';
import AboutStory from '../../sections/about/AboutStory';
import ExpertiseSection from '../../sections/about/ExpertiseSection';
import HiringChallenge from '../../sections/about/HiringChallenge';

const AboutPage = () => (
  <div className="bg-[#FFFFFF]">
    <PageHero
      variant="page"
      badge="Enterprise Leadership & Story"
      headline={
        <>
          {'Built for Ambition '}
          <br />
          {' Powered by People.'}
        </>
      }
      subhead="A professional recruitment, IT consulting, and workforce solutions company based in Hyderabad, India — bridging talent capability with sustainable enterprise growth across domestic and global markets."
      backgroundImage={images.aboutHero}
      techVariant="circuit"
      primaryCTA={{
        label: 'Contact Our Leadership',
        to: '/contact',
      }}
      secondaryCTA={{
        label: 'Explore Our Approach',
        to: '/company/approach',
      }}
      highlightCards={[
        {
          title: 'Client Retention Rate',
          metric: 98,
          metricSuffix: '%',
          subtitle: 'Trusted Partnership',
          description: 'Long-term enterprise relationships across GCC hubs in India, US & UK.',
          avatars: [
            images.avatars.team.member1,
            images.avatars.team.member2,
            images.avatars.team.member3,
            images.avatars.team.member4,
          ],
        },
        {
          title: 'Delivery Precision',
          metric: 25,
          metricSuffix: '+',
          subtitle: 'Years Industry Expertise',
          description: 'Senior recruitment practice leads guiding every strategic talent engagement.',
        },
        {
          title: 'Zero Payroll & Compliance Friction',
          metric: 1000,
          metricSuffix: '+',
          subtitle: 'Successful Placements',
          description: '100% rigorous pre-offer verification and transparent commercial agreements.',
        },
      ]}
    />
    <AboutStory />
    <HiringChallenge />
    <CardGrid
      headline="Our Operating Principles"
      cards={[
        {
          icon: 'users',
          badgeColor: 'navy',
          title: 'The Right Talent',
          description:
            'Candidates selected for capability, adaptability, and context — not just keyword matches on a CV.',
          kicker: 'Principle 01',
        },
        {
          icon: 'briefcase',
          badgeColor: 'red',
          title: 'The Right Model',
          description:
            'The engagement structure that matches your actual operational and financial reality — whether that is C2C, fulltime, RPO, or consulting.',
          kicker: 'Principle 02',
        },
        {
          icon: 'clock',
          badgeColor: 'navy',
          title: 'The Right Moment',
          description:
            'Speed when speed matters, thoroughness always. A process that respects timelines without cutting corners on qualification.',
          kicker: 'Principle 03',
        },
      ]}
    />
    <ExpertiseSection />
    <CtaBand
      headline="Start a Conversation"
      body="Tell us about your workforce requirements. We'll tell you how we'd approach them."
      cta={{
        label: 'Contact Us',
        to: '/contact',
      }}
    />
  </div>
);

export default AboutPage;
