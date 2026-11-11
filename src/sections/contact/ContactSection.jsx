import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Building2,
  CircleCheck,
  Copy,
  Headphones,
  Mail,
  Phone,
  ShieldCheck,
  User,
  UsersRound,
} from 'lucide-react';
import { useRouter } from '../../lib/router';

const ContactSection = ({ initialService = 'Corp-to-Corp Staffing' }) => {
  const { navigate } = useRouter();
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: initialService,
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedService, setSelectedService] = useState(initialService);
  const serviceLinks = [
    {
      label: 'Corp-to-Corp Staffing',
      path: '/services/corp-to-corp',
    },
    {
      label: 'Fulltime Staffing',
      path: '/services/fulltime-staffing',
    },
    {
      label: 'IT + Non-IT Staffing',
      path: '/services/fulltime-staffing',
    },
    {
      label: 'Recruitment Process Outsourcing (RPO)',
      path: '/services/rpo',
    },
    {
      label: 'Training & Placement',
      path: '/training-placement',
    },
    {
      label: 'International Consulting',
      path: '/services/international-consulting',
    },
  ];
  const serviceOptions = [
    'Corp-to-Corp Staffing',
    'Fulltime Staffing',
    'IT + Non-IT Staffing',
    'Recruitment Process Outsourcing (RPO)',
    'Training & Placement',
    'International Consulting',
    'General Workforce Inquiry',
  ];
  const selectService = (service) => {
    setSelectedService(service);
    setForm((current) => ({
      ...current,
      service: service,
    }));
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
    if (name === 'service') {
      setSelectedService(value);
    }
  };
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#204282]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          <div className="lg:col-span-5 flex flex-col justify-between relative">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E71E28]/10 border border-[#E71E28]/30 text-xs font-semibold text-[#E71E28] mb-4 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E71E28]" />
                <span>Get In Touch</span>
              </div>
              <h2 className="font-['Sora'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-[1.12]">
                {'Start a Discovery '}
                <br />
                <span className="text-[#E71E28]">Conversation</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                Tell us about your requirements, and our team will get back to you with the right solutions.
              </p>
              <div className="w-12 h-1 bg-[#E71E28] rounded-full my-6" />
              <h3 className="font-['Sora'] font-bold text-base sm:text-lg text-[#1B365D] mb-4">
                Select a Practice Area to Discuss
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {serviceLinks.map((item) => {
                  const isSelected = selectedService === item.label;
                  return (
                    <motion.button
                      key={item.label}
                      whileHover={{
                        scale: 1.02,
                        x: 2,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      type="button"
                      onClick={() => selectService(item.label)}
                      className={`flex items-center justify-between p-3.5 rounded-xl border transition-all text-left cursor-pointer group ${isSelected ? 'border-[#E71E28] bg-red-50/40 shadow-xs' : 'border-slate-200/90 bg-white hover:border-[#E71E28]/50 hover:bg-slate-50/60 hover:shadow-xs'}`}
                    >
                      <span
                        className={`text-xs sm:text-[13px] font-['Sora'] font-bold leading-snug pr-2 transition-colors ${isSelected ? 'text-[#E71E28]' : 'text-[#1B365D] group-hover:text-[#E71E28]'}`}
                      >
                        {item.label}
                      </span>
                      <ArrowRight
                        className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-[#E71E28] translate-x-0.5' : 'text-[#E71E28] group-hover:translate-x-1'}`}
                      />
                    </motion.button>
                  );
                })}
              </div>
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-200/80 relative z-10">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-[#E71E28] shrink-0">
                    <Headphones className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-['Sora'] font-semibold text-slate-700 leading-tight">
                    Quick Response
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-[#E71E28] shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-['Sora'] font-semibold text-slate-700 leading-tight">
                    Confidential & Secure
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-[#E71E28] shrink-0">
                    <UsersRound className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-['Sora'] font-semibold text-slate-700 leading-tight">
                    Expert Consultation
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <motion.div
              initial={{
                opacity: 0,
                y: 28,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="glossy-card-light sheen-sweep rounded-3xl p-6 sm:p-9 lg:p-10 relative"
            >
              <div className="mb-7">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-['Sora'] font-bold tracking-wider uppercase text-slate-700">
                    CONTACT US
                  </span>
                  <span className="w-10 h-0.5 bg-[#E71E28] rounded-full" />
                </div>
                <h3 className="font-['Sora'] font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                  {"Let's "}
                  <span className="text-[#E71E28]">Work Together</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Share your details and our team will get in touch with you shortly.
                </p>
              </div>
              {submitted && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3 text-sm text-emerald-900">
                  <CircleCheck className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                  <div className="flex-1">
                    <p className="font-['Sora'] font-bold text-emerald-900">
                      Your email client has been opened!
                    </p>
                    <p className="mt-1 text-xs text-emerald-700">
                      If your mail application did not launch automatically, you can email us directly at{' '}
                      <strong className="font-semibold text-emerald-950">info@arasolutions.in</strong>
                      {' or copy your details below.'}
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        const summary = `To: info@arasolutions.in\nSubject: Workforce Inquiry - ${form.service}\n\nName: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\nDetails: ${form.message}`;
                        navigator.clipboard.writeText(summary);
                        setCopied(true);
                        setTimeout(() => setCopied(false), 3000);
                      }}
                      className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-['Sora'] font-semibold text-[#E71E28] hover:underline cursor-pointer"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copied ? 'Copied to clipboard!' : 'Copy filled details to clipboard'}</span>
                    </button>
                  </div>
                </div>
              )}
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  const subject = encodeURIComponent(
                    `Inquiry via ARA Solutions: ${form.service || 'New Workforce Inquiry'}`,
                  );
                  const body = encodeURIComponent(
                    `Hello ARA Solutions Team,\n\nI would like to connect regarding workforce solutions:\n\nName: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone || 'N/A'}\nService: ${form.service}\n\nRequirement Details:\n${form.message}\n\nThank you,\n${form.name}`,
                  );
                  window.location.href = `mailto:info@arasolutions.in?subject=${subject}&body=${body}`;
                  setSubmitted(true);
                }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-[11px] font-['Sora'] font-bold uppercase tracking-wider text-slate-800 mb-2">
                      {'YOUR NAME '}
                      <span className="text-[#E71E28]">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        name="name"
                        required={true}
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Full name"
                        className="w-full pl-10 pr-3.5 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 placeholder:text-slate-400 font-['Inter'] focus:border-[#204282] focus:ring-1 focus:ring-[#204282] transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-['Sora'] font-bold uppercase tracking-wider text-slate-800 mb-2">
                      {'COMPANY / ORGANIZATION '}
                      <span className="text-[#E71E28]">*</span>
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        name="company"
                        required={true}
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Company name"
                        className="w-full pl-10 pr-3.5 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 placeholder:text-slate-400 font-['Inter'] focus:border-[#204282] focus:ring-1 focus:ring-[#204282] transition-colors"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-[11px] font-['Sora'] font-bold uppercase tracking-wider text-slate-800 mb-2">
                      {'WORK EMAIL ADDRESS '}
                      <span className="text-[#E71E28]">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="email"
                        name="email"
                        required={true}
                        value={form.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className="w-full pl-10 pr-3.5 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 placeholder:text-slate-400 font-['Inter'] focus:border-[#204282] focus:ring-1 focus:ring-[#204282] transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-['Sora'] font-bold uppercase tracking-wider text-slate-800 mb-2">
                      PHONE NUMBER
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full pl-10 pr-3.5 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 placeholder:text-slate-400 font-['Inter'] focus:border-[#204282] focus:ring-1 focus:ring-[#204282] transition-colors"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-['Sora'] font-bold uppercase tracking-wider text-slate-800 mb-2">
                    {'SERVICE OF INTEREST '}
                    <span className="text-[#E71E28]">*</span>
                  </label>
                  <select
                    name="service"
                    required={true}
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 font-['Inter'] focus:border-[#204282] focus:ring-1 focus:ring-[#204282] transition-colors cursor-pointer"
                  >
                    {serviceOptions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-['Sora'] font-bold uppercase tracking-wider text-slate-800 mb-2">
                    {'DESCRIBE YOUR WORKFORCE REQUIREMENT OR QUESTION '}
                    <span className="text-[#E71E28]">*</span>
                  </label>
                  <textarea
                    name="message"
                    required={true}
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about role requirements, volume, technology stacks, target timeline, or hiring locations..."
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 placeholder:text-slate-400 font-['Inter'] focus:border-[#204282] focus:ring-1 focus:ring-[#204282] transition-colors resize-y"
                  />
                </div>
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#E71E28] to-[#C4121B] hover:from-[#d11721] hover:to-[#a80e16] text-white font-['Sora'] font-bold text-sm shadow-[0_8px_25px_rgba(231,30,40,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-[#204282] shrink-0" />
                    <span>We respect your privacy. Your information is safe with us.</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100" />
                <p className="text-xs text-slate-500">
                  <strong className="text-slate-700 font-semibold">Note:</strong>
                  {' We respond to all inquiries within one business day. No automated runaround.'}
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
