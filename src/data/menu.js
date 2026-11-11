import {
  Briefcase,
  Building2,
  Compass,
  Code2,
  Cpu,
  Globe2,
  GraduationCap,
  Handshake,
  ScanSearch,
  ShieldCheck,
  Trophy,
  Workflow,
} from 'lucide-react';

/** Main navigation. Groups with `items` open a dropdown. */
export const MENU = [
  { label: 'Home', href: '/' },
  {
    label: 'Company',
    match: '/company',
    items: [
      {
        label: 'About Us',
        href: '/company/about',
        description: 'Who we are and how we work',
        icon: Building2,
      },
      {
        label: 'Our Approach',
        href: '/company/approach',
        description: 'Our three-stage hiring method',
        icon: Compass,
      },
      {
        label: 'Case Studies',
        href: '/company/case-studies',
        description: 'Results we have delivered',
        icon: Trophy,
      },
    ],
  },
  {
    label: 'Services',
    match: '/services',
    items: [
      {
        label: 'Corp to Corp Staffing',
        href: '/services/corp-to-corp',
        description: 'Contract engineers, ready to deploy',
        icon: Handshake,
      },
      {
        label: 'Full-Time Staffing',
        href: '/services/fulltime-staffing',
        description: 'Permanent IT and non-IT hires',
        icon: Briefcase,
      },
      {
        label: 'Recruitment Process Outsourcing',
        href: '/services/rpo',
        description: 'A dedicated recruiting team for you',
        icon: ScanSearch,
      },
      {
        label: 'International Consulting',
        href: '/services/international-consulting',
        description: 'Verified global talent',
        icon: Globe2,
      },
    ],
  },
  {
    label: 'Training & Placement',
    match: '/training-placement',
    items: [
      {
        label: 'ServiceNow',
        href: '/training-placement/servicenow',
        description: 'Admin, developer and ITSM tracks',
        icon: Workflow,
      },
      {
        label: 'Cybersecurity',
        href: '/training-placement/cybersecurity',
        description: 'SOC, cloud security, IAM and GRC',
        icon: ShieldCheck,
      },
      {
        label: 'AI & Machine Learning',
        href: '/training-placement/ai-ml',
        description: 'ML engineering and GenAI',
        icon: Cpu,
      },
      {
        label: 'Full Stack with AI',
        href: '/training-placement/full-stack-ai',
        description: 'React, Node.js and AI-powered apps',
        icon: Code2,
      },
      {
        label: 'All Programs',
        href: '/training-placement',
        description: 'Compare every track',
        icon: GraduationCap,
      },
    ],
  },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact Us', href: '/contact' },
];

/** Is this menu entry the section the visitor is currently in? */
export function isActive(entry, path) {
  if (entry.href) return entry.href === '/' ? path === '/' : path.startsWith(entry.href);
  if (entry.match === '/training-placement' && path === '/services/training-placement') return true;
  if (entry.match === '/services' && path === '/services/training-placement') return false;
  return path.startsWith(entry.match);
}
