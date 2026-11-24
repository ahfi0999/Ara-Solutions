import { Clock, MessageCircle, Phone } from 'lucide-react';
import { staffingLine, trainingLine, whatsappLink } from '@/content/site';
import { Container } from '@/components/ui/Section';
import { EnquiryForm } from '@/components/enquiry/EnquiryForm';
import { MediaBackground } from '@/components/motion/MediaBackground';

/** Final call to action with the full enquiry form and direct contact options. */
export function ClosingCta({
  title = "Let's talk about what you need.",
  intro = 'Hiring for your team or starting your tech career? Share a few details and our team will call you back.',
  defaultInterest,
  line = 'staffing',
}: {
  title?: string;
  intro?: string;
  defaultInterest?: string;
  /** Which phone line to show: the training line on Training & Placement pages, the main line elsewhere. */
  line?: 'staffing' | 'training';
}) {
  const contact = line === 'training' ? trainingLine : staffingLine;
  const message =
    line === 'training'
      ? "Hi ARA Solutions, I'd like to know more about your programs."
      : "Hi ARA Solutions, I'd like to talk to your team.";
  return (
    <section id="enquire" className="aurora relative isolate overflow-hidden py-20 text-white sm:py-28">
      <MediaBackground
        video="/videos/cta-handshake.mp4"
        mobileVideo="/videos/cta-handshake-mobile.mp4"
        poster="/videos/cta-handshake.jpg"
        alt="Candidate and employer shaking hands"
        overlayClassName="bg-gradient-to-r from-ink/85 via-ink/80 to-ink/70"
      />
      <div aria-hidden className="grid-lines absolute inset-0 -z-10" />
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
        <div>
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-brand-300">Get in touch</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/65">{intro}</p>
          <ul className="mt-10 space-y-4">
            <li>
              <a href={contact.phoneHref} className="group flex items-center gap-4">
                <span className="flex size-11 items-center justify-center rounded-full bg-white/[0.07] text-white transition-colors group-hover:bg-white group-hover:text-ink">
                  <Phone aria-hidden className="size-5" />
                </span>
                <span>
                  <span className="block text-sm text-white/50">Call us</span>
                  <span className="text-lg font-medium">{contact.phone}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={whatsappLink(message, contact.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-[#1faa53]/20 text-[#5ee08c] transition-colors group-hover:bg-[#1faa53] group-hover:text-white">
                  <MessageCircle aria-hidden className="size-5" />
                </span>
                <span>
                  <span className="block text-sm text-white/50">WhatsApp</span>
                  <span className="text-lg font-medium">Chat with our team</span>
                </span>
              </a>
            </li>
            <li className="flex items-center gap-4 text-white/60">
              <span className="flex size-11 items-center justify-center rounded-full bg-white/[0.07]">
                <Clock aria-hidden className="size-5" />
              </span>
              Our team will get back to you on the number you share.
            </li>
          </ul>
        </div>

        <div className="rounded-3xl bg-paper p-6 text-text shadow-lift sm:p-9">
          <h3 className="text-xl font-semibold tracking-tight">Request a callback</h3>
          <p className="mt-1 text-sm text-muted">Takes less than a minute.</p>
          <div className="mt-6">
            <EnquiryForm defaultInterest={defaultInterest} />
          </div>
        </div>
      </Container>
    </section>
  );
}
