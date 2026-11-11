import { CodeXml, Globe, GraduationCap, UserSearch, Users, UsersRound } from 'lucide-react';

export const expertiseAreas = [
  {
    title: 'Corp-to-Corp',
    description: 'Strategic talent partnerships for long-term growth.',
    icon: Users,
    accent: 'red',
    to: '/services/corp-to-corp',
  },
  {
    title: 'Fulltime Staffing',
    description: 'Hire the right talent for your core teams.',
    icon: UserSearch,
    accent: 'blue',
    to: '/services/fulltime-staffing',
  },
  {
    title: 'IT & Non-IT Staffing',
    description: 'Skilled professionals across technologies and functions.',
    icon: CodeXml,
    accent: 'red',
    to: '/services/fulltime-staffing',
  },
  {
    title: 'Recruitment Process Outsourcing',
    description: 'Streamlined hiring with scalable RPO solutions.',
    icon: UsersRound,
    accent: 'blue',
    to: '/services/rpo',
  },
  {
    title: 'Training & Placement',
    description: 'Build job-ready talent with industry-aligned training.',
    icon: GraduationCap,
    accent: 'red',
    to: '/training-placement',
  },
  {
    title: 'International Consulting',
    description: 'Global talent solutions to support your expansion.',
    icon: Globe,
    accent: 'blue',
    to: '/services/international-consulting',
  },
];
