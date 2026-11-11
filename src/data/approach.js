import { Handshake, Search, Users } from 'lucide-react';

export const approachSteps = [
  {
    stepNumber: 'STEP 01',
    title: 'Discover',
    description:
      'We begin by understanding the business need, role context, technical and cultural requirements, and timeline. No search starts without clarity.',
    tag: 'CLARITY FIRST',
    icon: Search,
    accent: 'red',
  },
  {
    stepNumber: 'STEP 02',
    title: 'Deliver',
    description:
      'We apply the agreed staffing, recruitment model — running a targeted search, qualifying candidates, and managing the interview process.',
    tag: 'RIGHT TALENT, RIGHT FIT',
    icon: Users,
    accent: 'blue',
  },
  {
    stepNumber: 'STEP 03',
    title: 'Support',
    description:
      "Our role doesn't end at offer acceptance. We coordinate onboarding, follow up post-placement, and maintain an ongoing partnership.",
    tag: 'LONG-TERM PARTNERSHIP',
    icon: Handshake,
    accent: 'red',
  },
];
