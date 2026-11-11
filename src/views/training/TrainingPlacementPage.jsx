'use client';

import CtaBand from '../../components/sections/CtaBand';
import PageHero from '../../components/sections/PageHero';
import ProcessSteps from '../../components/sections/ProcessSteps';
import RecruiterMarquee from '../../components/sections/RecruiterMarquee';
import { images } from '../../data/images';
import SkillsGap from '../../sections/training/SkillsGap';
import TrainingTracks from '../../sections/training/TrainingTracks';

const TrainingPlacementPage = ({ initialTrack }) => (
  <div className="bg-[#FFFFFF]">
    <PageHero
      variant="page"
      badge="Enterprise Skill Readiness Tracks"
      headline="Training & Placement"
      subhead="Industry-certified technical training tracks in ServiceNow, Cyber Security, AI/ML engineering, and Full Stack Development with AI — engineered directly for enterprise day-one productivity."
      backgroundImage={images.trainingHero}
      techVariant="circuit"
      primaryCTA={{
        label: 'Inquire About Tech Tracks',
        to: '/contact',
      }}
      secondaryCTA={{
        label: 'View Course Curriculums',
        to: '/contact',
      }}
      highlightCards={[
        {
          title: 'Direct Placement Rate',
          metric: 92,
          metricSuffix: '%',
          subtitle: 'Graduate Placement Success',
          description: 'Placed across top tier MNCs and high-growth engineering firms within 90 days.',
        },
        {
          title: 'Practical Project Immersion',
          metric: '100+',
          metricSuffix: ' hrs',
          subtitle: 'Real Enterprise Lab Work',
          description: 'Live sandbox environments, code reviews, and scenario-based technical workflows.',
        },
        {
          title: 'Dedicated Corporate Hiring Network',
          metric: '80+',
          subtitle: 'Enterprise Hiring Partners',
          description:
            'Exclusive placement drives with pre-negotiated salary packages and career growth paths.',
        },
      ]}
    />
    <SkillsGap />
    <RecruiterMarquee className="bg-white py-16 sm:py-20" />
    <TrainingTracks initialTrack={initialTrack} />
    <ProcessSteps
      headline="The Training-to-Placement Pathway"
      steps={[
        {
          label: 'Train',
          description:
            'Intensive, hands-on curriculum structured around real-world enterprise architectures and business scenarios.',
        },
        {
          label: 'Prepare',
          description:
            'Resume optimization, GitHub project portfolios, technical problem solving, and rigorous mock interviews.',
        },
        {
          label: 'Support',
          description:
            '1-on-1 mentorship from senior practitioners with active commercial experience in tier-1 enterprise environments.',
        },
        {
          label: 'Connect',
          description:
            'Direct interview introductions to hiring managers across our domestic and multinational client network.',
        },
      ]}
      tags={[
        'Industry-aligned curriculum',
        'Mock interview panels',
        'Portfolio development',
        'Placement coordination',
      ]}
    />
    <CtaBand
      headline={
        <>
          {'For aspiring tech professionals and '}
          <br />
          hiring companies alike.
        </>
      }
      body="Whether you are an ambitious engineer ready to level up your career, or a hiring manager needing custom-trained talent pipelines, let's talk."
      cta={{
        label: 'Contact Training Team',
        to: '/contact',
      }}
    />
  </div>
);

export default TrainingPlacementPage;
