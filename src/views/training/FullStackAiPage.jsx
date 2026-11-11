'use client';

import CardGrid from '../../components/sections/CardGrid';
import CareerPaths from '../../components/sections/CareerPaths';
import CtaBand from '../../components/sections/CtaBand';
import MarketContext from '../../components/sections/MarketContext';
import RecruiterMarquee from '../../components/sections/RecruiterMarquee';
import PageHero from '../../components/sections/PageHero';
import CodeEditorScene from '../../components/illustrations/CodeEditorScene';

const FullStackAiPage = () => (
  <div className="bg-[#FFFFFF]">
    <PageHero
      variant="page"
      badge="Modern Web Development + AI"
      headline="Full Stack Development with AI"
      subhead="Build complete web applications end to end, from React front ends to APIs, databases and AI features, and learn to code faster with AI tools."
      backgroundImage="/images/blog-1.jpg"
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
          title: 'End-to-End Skills',
          metric: 'Front to back',
          subtitle: 'React, Node.js, databases',
          description: 'Learn every layer of a modern web application, not just one piece of it.',
        },
        {
          title: 'AI Built In',
          metric: 'AI-powered apps',
          subtitle: 'LLM APIs, chatbots, RAG',
          description: 'Add AI features such as chat assistants and smart search to the apps you build.',
        },
        {
          title: 'Portfolio Ready',
          metric: 'Live projects',
          subtitle: 'Deployed to the cloud',
          description: 'Finish with real, deployed projects you can show in interviews.',
        },
      ]}
    />
    <MarketContext
      kicker="Market Context"
      headlinePrefix="Why It "
      headlineHighlight="Matters Now"
      paragraphs={[
        'Companies want developers who can own a feature from the screen the user sees down to the API and database behind it. Full stack developers remain among the most in-demand roles across startups, product companies and IT services firms.',
        'AI is now part of that job. Employers increasingly expect developers to add AI features to their products and to use AI coding assistants to work faster, while still understanding the code they ship. This track teaches both.',
      ]}
      metrics={[
        {
          icon: 'chart',
          color: 'red',
          title: 'Consistent Demand',
          subtitle: 'Hired by startups, product and services companies',
        },
        {
          icon: 'users',
          color: 'blue',
          title: 'Versatile Role',
          subtitle: 'Front end, back end and AI features in one skill set',
        },
        {
          icon: 'trending',
          color: 'red',
          title: 'AI Advantage',
          subtitle: 'Developers who use AI well ship faster',
        },
      ]}
      visual={<CodeEditorScene />}
      imageAlt="Code editor showing a React and API component, an AI assistant suggestion and a successful deployment"
    />
    <RecruiterMarquee className="bg-white py-16 sm:py-20" />
    <CardGrid
      kicker="Curriculum Breakdown"
      headline="What You'll Cover"
      isLight={false}
      columns={3}
      cards={[
        {
          icon: 'file-check',
          badgeColor: 'navy',
          title: 'Front End with React',
          description: 'HTML, CSS, JavaScript, React and Next.js for fast, responsive user interfaces.',
          kicker: 'Module 01',
        },
        {
          icon: 'briefcase',
          badgeColor: 'red',
          title: 'Back End & APIs',
          description: 'Node.js and Express, REST APIs, authentication and secure server-side code.',
          kicker: 'Module 02',
        },
        {
          icon: 'building',
          badgeColor: 'navy',
          title: 'Databases',
          description: 'Data modelling with SQL and MongoDB, and connecting them to your APIs.',
          kicker: 'Module 03',
        },
        {
          icon: 'award',
          badgeColor: 'red',
          title: 'AI Features in Apps',
          description: 'Use LLM APIs to build chat assistants, smart search (RAG) and content features.',
          kicker: 'Module 04',
        },
        {
          icon: 'trending',
          badgeColor: 'navy',
          title: 'AI-Assisted Development',
          description: 'Code, debug and test faster with AI coding tools, and review what they produce.',
          kicker: 'Module 05',
        },
        {
          icon: 'users',
          badgeColor: 'red',
          title: 'Deployment & Interview Readiness',
          description: 'Git, Docker and cloud deployment, plus portfolio and interview preparation.',
          kicker: 'Module 06',
        },
      ]}
    />
    <CareerPaths
      kicker="CAREER PATHS"
      headlinePrefix="Where "
      headlineHighlight="This Leads"
      subhead="Explore some of the key roles that open up through this track."
      roles={[
        {
          title: 'Full Stack Developer',
          description: 'Build complete web applications, front end to database.',
          image: '/images/blog-1.jpg',
          icon: 'code',
          badgeColor: 'red',
          cornerAccent: 'pink',
        },
        {
          title: 'Front End (React) Developer',
          description: 'Create fast, polished user interfaces with React.',
          image: '/images/role-sysadmin.jpg',
          icon: 'chip',
          badgeColor: 'blue',
          cornerAccent: 'blue',
        },
        {
          title: 'Back End / API Developer',
          description: 'Design the APIs, data and services that power applications.',
          image: '/images/team-collaboration.jpg',
          icon: 'server',
          badgeColor: 'red',
          cornerAccent: 'pink',
        },
        {
          title: 'AI Application Developer',
          description: 'Add AI features such as assistants and smart search to products.',
          image: '/images/aiml-role-genai-developer.jpg',
          icon: 'brain',
          badgeColor: 'blue',
          cornerAccent: 'blue',
        },
        {
          title: 'Software Engineer',
          description: 'Join product and services teams building real-world software.',
          image: '/images/tech-team.jpg?v=2',
          icon: 'users',
          badgeColor: 'red',
          cornerAccent: 'pink',
        },
      ]}
    />
    <CtaBand
      headline="Ready to start Full Stack with AI training?"
      body="Talk to our team about the syllabus, prerequisites, project work and upcoming placement drives."
      cta={{
        label: 'Contact Us',
        to: '/contact',
      }}
    />
  </div>
);

export default FullStackAiPage;
