'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ComponentProps,
  type ReactNode,
} from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { EnquiryForm } from './EnquiryForm';

type OpenOptions = { interest?: string; title?: string };
type EnquiryContextValue = { open: (options?: OpenOptions) => void };

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

/** Lets any button on the site open the enquiry dialog: `const { open } = useEnquiry()`. */
export function useEnquiry() {
  const context = useContext(EnquiryContext);
  if (!context) throw new Error('useEnquiry must be used inside <EnquiryProvider>');
  return context;
}

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [options, setOptions] = useState<OpenOptions>({});
  // Remount the form each time the dialog opens so it starts fresh.
  const [formKey, setFormKey] = useState(0);

  const open = useCallback((next: OpenOptions = {}) => {
    setOptions(next);
    setFormKey((key) => key + 1);
    dialogRef.current?.showModal();
  }, []);
  const close = useCallback(() => dialogRef.current?.close(), []);

  // Lock page scroll while the dialog is open.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const observer = new MutationObserver(() => {
      document.documentElement.style.overflow = dialog.open ? 'hidden' : '';
    });
    observer.observe(dialog, { attributes: true, attributeFilter: ['open'] });
    return () => observer.disconnect();
  }, []);

  return (
    <EnquiryContext.Provider value={{ open }}>
      {children}
      <dialog
        ref={dialogRef}
        aria-labelledby={options.title ? 'enquiry-title' : 'enquiry-label'}
        onClick={(event) => event.target === dialogRef.current && close()}
        className="m-auto w-[min(560px,calc(100%-1.5rem))] max-h-[calc(100dvh-1.5rem)] overflow-y-auto rounded-3xl bg-paper p-0 text-text shadow-lift backdrop:bg-ink/70 backdrop:backdrop-blur-sm open:animate-[dialog-in_0.25s_ease-out]"
      >
        <div className="relative p-6 sm:p-8">
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-canvas hover:text-text"
          >
            <X className="size-5" aria-hidden />
          </button>
          <p id="enquiry-label" className="font-mono text-[12px] uppercase tracking-[0.18em] text-brand">
            Talk to us
          </p>
          {/* A button may name what the visitor came about (e.g. a course); there is no generic heading. */}
          {options.title && (
            <h2 id="enquiry-title" className="mt-2 pr-10 text-2xl font-semibold tracking-tight">
              {options.title}
            </h2>
          )}
          <div className="mt-6">
            <EnquiryForm key={formKey} defaultInterest={options.interest} compact onDone={close} />
          </div>
        </div>
      </dialog>
    </EnquiryContext.Provider>
  );
}

/** Button that opens the enquiry dialog. Same look as <Button>, usable from server components. */
export function EnquiryButton({
  children,
  interest,
  title,
  ...buttonProps
}: Omit<ComponentProps<typeof Button>, 'onClick'> & { interest?: string; title?: string }) {
  const { open } = useEnquiry();
  return (
    <Button {...buttonProps} onClick={() => open({ interest, title })}>
      {children}
    </Button>
  );
}
