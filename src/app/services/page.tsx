import type { Metadata } from 'next';
import { generalFaqs } from '@/content/home';
import { PageHero } from '@/components/ui/PageHero';
import { Container, SectionHeading } from '@/components/ui/Section';
import { ButtonLink } from '@/components/ui/Button';
import { EnquiryButton } from '@/components/enquiry/EnquiryProvider';
import { EngagementComparison, ServiceCards } from '@/components/services/ServiceSections';
import { RoleGroups } from '@/components/home/HomeSections';
import { Clientele } from '@/components/home/Clientele';
import { WhyAra } from '@/components/home/WhyAra';
import { HiringFlow } from '@/components/home/HiringFlow';
import { Faq } from '@/components/home/Faq';
import { ClosingCta } from '@/components/home/ClosingCta';

export const metadata: Metadata = {
  title: 'Staffing Services',
  description:
    'IT and non-IT staffing from ARA Solutions: contract (C2C), fulltime, recruitment process outsourcing and international consulting, with profiles in 2 to 4 hours from our database and shortlists within 48 hours from the open market.',
  alternates: { canonical: '/services/' },
};

/** Hiring questions only; the training questions live on the training pages. */
const HIRING_FAQS = generalFaqs.filter((item) => !/training/i.test(item.q));

/** Staffing overview: what ARA provides for businesses, why, how it hires and who it has hired for. */
export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Staffing services"
        title={
          <>
            The right people, <em>hired the right way.</em>
          </>
        }
        intro="IT and non-IT hiring for growing companies: contract, permanent, outsourced and international. Profiles from our own database in 2 to 4 hours, open-market candidates fully assessed within 48 hours."
      >
        <div className="flex flex-wrap gap-3">
          <EnquiryButton size="lg" arrow interest="hiring" title="Tell us about the talent you need">
            Hire talent
          </EnquiryButton>
          <ButtonLink href="#how-we-hire" variant="ghost-light" size="lg">
            How we hire
          </ButtonLink>
        </div>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What we provide"
            title={
              <>
                Hiring models that fit <em>how you work</em>
              </>
            }
            intro="From a single contract specialist to a full recruiting team, choose the engagement that matches your roadmap."
          />
          <div className="mt-12">
            <ServiceCards />
          </div>
          <RoleGroups className="mt-20 border-t border-line pt-14" />
        </Container>
      </section>

      <Clientele alumni={false} className="border-t border-line" />
      <WhyAra />
      <HiringFlow />
      <EngagementComparison highlight="none" />
      <Faq
        items={HIRING_FAQS}
        title={
          <>
            Hiring questions, <em>answered.</em>
          </>
        }
      />
      <ClosingCta
        defaultInterest="hiring"
        title="Tell us about the role you need to fill."
        intro="Share a few details and our team will call you back with a shortlist plan and timeline."
      />
    </>
  );
}
