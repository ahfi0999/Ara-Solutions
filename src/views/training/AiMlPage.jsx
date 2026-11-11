'use client';

import CardGrid from '../../components/sections/CardGrid';
import CareerPaths from '../../components/sections/CareerPaths';
import CtaBand from '../../components/sections/CtaBand';
import MarketContext from '../../components/sections/MarketContext';
import PageHero from '../../components/sections/PageHero';
import { images } from '../../data/images';

const AiMlPage = () => (
  <div className="bg-[#FFFFFF]">
    <PageHero
      variant="page"
      badge="Applied Intelligence & Generative AI"
      headline="AI/ML Training & Placement"
      subhead="Applied AI and machine learning skills, built around what employers are actually hiring for."
      backgroundImage={images.aimlHero}
      techVariant="wave-lines"
      primaryCTA={{
        label: 'Contact Us',
        to: '/contact',
      }}
      secondaryCTA={{
        label: 'Explore All Tracks',
        to: '/training-placement',
      }}
      highlightCards={[
        {
          title: 'Role Demand',
          metric: '1M+',
          metricSuffix: ' Roles',
          subtitle: 'AI Market Projection',
          description:
            'Demand for AI-related roles is on track to cross a million positions across key sectors.',
        },
        {
          title: 'Workforce Gap',
          metric: '50%',
          metricSuffix: '',
          subtitle: 'Skills Deficit',
          description:
            'Industry research puts the AI skills gap at roughly half of the workforce requiring it.',
        },
        {
          title: 'Applied Workflow',
          metric: '5',
          metricSuffix: '',
          subtitle: 'Practical Pillars',
          description: 'From Python and GenAI to production model deployment and interview readiness.',
        },
      ]}
    />
    <MarketContext
      kicker="Market Context"
      headlinePrefix="Why It "
      headlineHighlight="Matters Now"
      paragraphs={[
        "Demand for AI-related roles is on track to cross a million positions, while only a small fraction of today's IT professionals are considered AI-skilled — industry research puts the AI skills gap at roughly half of the workforce that would need it.",
        "That gap doesn't close with a generic online course; it closes with training built around the tools and workflows companies are hiring for this year, and a direct path from training into a placement conversation.",
      ]}
      metrics={[
        {
          icon: 'chart',
          color: 'red',
          title: 'Exponential Demand',
          subtitle: '1M+ projected AI roles across industries',
        },
        {
          icon: 'users',
          color: 'blue',
          title: 'Workforce Gap',
          subtitle: 'Only a fraction of talent has production skills.',
        },
        {
          icon: 'trending',
          color: 'red',
          title: 'Rapid ROI',
          subtitle: 'High-leverage engineering compensation tiers.',
        },
      ]}
      footerAnnotation="PEOPLE . PLATFORMS . PROGRESS"
      image={images.aimlWorkspace}
      imageAlt="AI and Machine Learning engineer developing neural networks and LLM pipelines"
    />
    <CardGrid
      kicker="Curriculum Breakdown"
      headline="What You'll Cover"
      isLight={false}
      columns={3}
      cards={[
        {
          icon: 'trending',
          badgeColor: 'navy',
          title: 'ML Fundamentals & Python',
          description: 'The applied math and programming foundation every AI role sits on.',
          kicker: 'Module 01',
        },
        {
          icon: 'award',
          badgeColor: 'red',
          title: 'Applied AI & GenAI Tooling',
          description:
            'Hands-on with the generative AI tools employers are actually deploying, not just theory.',
          kicker: 'Module 02',
        },
        {
          icon: 'briefcase',
          badgeColor: 'navy',
          title: 'Data Pipelines & Model Deployment',
          description: 'Getting a model from notebook to something a business can actually run.',
          kicker: 'Module 03',
        },
        {
          icon: 'shield',
          badgeColor: 'red',
          title: 'Responsible AI & Security Awareness',
          description: 'Understanding the risk and governance side employers increasingly screen for.',
          kicker: 'Module 04',
        },
        {
          icon: 'check-circle',
          badgeColor: 'navy',
          title: 'Interview & Role Readiness',
          description: 'Portfolio and interview prep specific to AI/ML hiring panels.',
          kicker: 'Module 05',
        },
      ]}
    />
    <CareerPaths
      kicker="CAREER PATHS"
      headlinePrefix="Where "
      headlineHighlight="This Leads"
      subhead="Explore some of the key roles that open up through this track and be part of a future-ready AI ecosystem."
      roles={[
        {
          title: 'ML Engineer',
          description: 'Design, build and deploy machine learning models at scale.',
          image: '/images/aiml-role-ml-engineer.jpg',
          icon: 'chip',
          badgeColor: 'red',
          cornerAccent: 'pink',
        },
        {
          title: 'AI Engineer',
          description: 'Build intelligent systems using the latest AI technologies.',
          image: '/images/aiml-role-ai-engineer.jpg',
          icon: 'brain',
          badgeColor: 'blue',
          cornerAccent: 'blue',
        },
        {
          title: 'Data Scientist',
          description: 'Turn data into meaningful insights and drive better decisions.',
          image: '/images/aiml-role-data-scientist.jpg',
          icon: 'trend-chart',
          badgeColor: 'red',
          cornerAccent: 'pink',
        },
        {
          title: 'GenAI Application Developer',
          description: 'Create innovative applications using generative AI.',
          image: '/images/aiml-role-genai-developer.jpg',
          icon: 'code',
          badgeColor: 'blue',
          cornerAccent: 'blue',
        },
        {
          title: 'AI Security Analyst',
          description: 'Ensure responsible and secure use of AI technologies.',
          image: '/images/aiml-role-ai-security.jpg',
          icon: 'shield',
          badgeColor: 'red',
          cornerAccent: 'pink',
        },
      ]}
    />
    <CtaBand
      headline="Ready to start AI/ML training?"
      body="Discuss syllabus prerequisites, hands-on project architectures, and upcoming enterprise placement drives."
      cta={{
        label: 'Contact Us',
        to: '/contact',
      }}
    />
  </div>
);

export default AiMlPage;
