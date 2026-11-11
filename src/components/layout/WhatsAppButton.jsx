'use client';

import { site } from '../../data/site';
import { useRouter } from '../../lib/router';

/** Pre-filled first message, based on the page the visitor is on, so the team knows what they want. */
function messageFor(path) {
  if (path.includes('servicenow'))
    return "Hi ARA Solutions, I'm interested in ServiceNow training. Please share the details.";
  if (path.includes('cybersecurity'))
    return "Hi ARA Solutions, I'm interested in Cybersecurity training. Please share the details.";
  if (path.includes('ai-ml'))
    return "Hi ARA Solutions, I'm interested in AI & Machine Learning training. Please share the details.";
  if (path.includes('training-placement'))
    return "Hi ARA Solutions, I'd like to know about your training and placement programs.";
  if (path.startsWith('/services'))
    return "Hi ARA Solutions, I'm looking to hire and would like to discuss your staffing services.";
  if (path.startsWith('/careers'))
    return "Hi ARA Solutions, I'd like to know about job openings at ARA Solutions.";
  return "Hi ARA Solutions, I'd like to know more about your services.";
}

/** Floating WhatsApp chat button, shown on every page. */
export default function WhatsAppButton() {
  const { currentPath } = useRouter();
  const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(messageFor(currentPath))}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-3"
    >
      <span className="pointer-events-none hidden translate-x-2 rounded-full bg-white px-4 py-2 font-display text-sm font-semibold text-ink opacity-0 shadow-lift transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        Chat with us
      </span>
      <span className="relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_-6px_rgb(37_211_102/0.6)] transition-transform duration-200 group-hover:scale-105">
        <span
          aria-hidden="true"
          className="absolute inset-0 animate-ping rounded-full motion-reduce:hidden bg-[#25D366] opacity-20 [animation-duration:2.5s]"
        />
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="relative size-7">
          <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.47 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35ZM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.56.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.43-9.43a9.37 9.37 0 0 1 6.67 2.77 9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.23 9.43-9.43 9.43Zm8.03-17.46A11.27 11.27 0 0 0 12.05.7C5.8.7.7 5.79.7 12.05c0 2 .52 3.95 1.52 5.67L.6 23.6l6.02-1.58a11.32 11.32 0 0 0 5.42 1.38h.01c6.25 0 11.34-5.09 11.35-11.35 0-3.03-1.18-5.88-3.32-8.02Z" />
        </svg>
      </span>
    </a>
  );
}
