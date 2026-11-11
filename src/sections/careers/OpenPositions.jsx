import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Briefcase,
  ChartColumn,
  CircleCheck,
  Clock,
  CodeXml,
  GraduationCap,
  MapPin,
  Send,
  UsersRound,
  X as XIcon,
} from 'lucide-react';
import { jobOpenings } from '../../data/jobOpenings';

const OpenPositions = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [resumeLink, setResumeLink] = useState('');
  const handleApply = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };
  const closeModal = () => {
    setSelectedJob(null);
    setSubmitted(false);
    setApplicantName('');
    setApplicantEmail('');
    setApplicantPhone('');
    setResumeLink('');
  };
  return (
    <section
      id="open-positions-section"
      className="relative py-16 sm:py-24 bg-[#F0F5FD] overflow-hidden border-t border-[#DCE8F6]"
    >
      <div className="absolute top-10 left-8 sm:left-14 w-28 h-28 bg-[radial-gradient(#94A3B8_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full border border-red-200/50 -mr-20 -mt-20 pointer-events-none opacity-40" />
      <div className="absolute top-16 right-16 w-3 h-3 rounded-full bg-[#E71E28] pointer-events-none opacity-80" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full border border-red-200/40 -ml-28 -mb-28 pointer-events-none opacity-40" />
      <div className="absolute bottom-20 left-20 w-3 h-3 rounded-full bg-[#E71E28] pointer-events-none opacity-80" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-xs mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E71E28]" />
            <span>Open Positions</span>
          </div>
          <h2 className="font-['Sora'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0B1528] tracking-tight mb-4">
            {'Explore '}
            <span className="text-[#E71E28]">Career Opportunities</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Join our growing team and be part of a company that's shaping the future of workforce solutions.
            Find a role that matches your skills and ambitions.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobOpenings.map((item, index) => {
            const isRed = item.iconColor === 'red';
            return (
              <motion.div
                key={item.id}
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
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -8,
                  scale: 1.015,
                }}
                className="group relative glossy-card-light sheen-sweep p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${isRed ? 'bg-red-50 text-[#E71E28] border border-red-100/70' : 'bg-blue-50 text-[#2563EB] border border-blue-100/70'}`}
                    >
                      {item.icon === 'code' && <CodeXml className="w-5 h-5" />}
                      {item.icon === 'users' && <UsersRound className="w-5 h-5" />}
                      {item.icon === 'chart' && <ChartColumn className="w-5 h-5" />}
                      {item.icon === 'grad' && <GraduationCap className="w-5 h-5" />}
                    </div>
                    {item.featured && (
                      <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-red-50 text-[#E71E28] border border-red-100/80">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="font-['Sora'] font-bold text-lg text-slate-900 mb-4 min-h-[3.25rem] flex items-center">
                    {item.title}
                  </h3>
                  <div className="space-y-2 mb-4 text-xs sm:text-[13px] text-slate-500 font-medium">
                    <div className="flex items-center gap-2.5">
                      <Briefcase className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{item.department}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{item.type}</span>
                    </div>
                  </div>
                  <div className="h-px bg-slate-100 w-full my-4" />
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mb-5 line-clamp-3">
                    {item.description}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedJob(item)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-['Sora'] font-bold text-[#E71E28] hover:text-[#B8141D] transition-colors cursor-pointer group/link pt-2"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                </button>
              </motion.div>
            );
          })}
        </div>
        <div className="mt-12 sm:mt-14 text-center">
          <button
            type="button"
            onClick={() => setSelectedJob(jobOpenings[0])}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-[#E71E28] to-[#B8141D] hover:from-[#B8141D] hover:to-[#E71E28] text-white font-['Sora'] font-bold text-sm rounded-full shadow-[0_10px_30px_rgba(231,30,40,0.38)] hover:shadow-[0_14px_40px_rgba(231,30,40,0.55)] transition-all duration-200 cursor-pointer group active:scale-[0.98]"
          >
            <span>View All Open Positions</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 12,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 12,
              }}
              transition={{
                duration: 0.25,
              }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="flex items-start justify-between p-6 border-b border-slate-100 bg-slate-50/70">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-red-50 text-[#E71E28] text-xs font-semibold mb-2">
                    <span>{selectedJob.department}</span>
                  </div>
                  <h3 className="font-['Sora'] font-bold text-xl sm:text-2xl text-slate-900">
                    {selectedJob.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {selectedJob.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {selectedJob.type}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={closeModal}
                  className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
                >
                  <XIcon className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-600">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-14 h-14 rounded-full bg-green-50 text-green-600 flex items-center justify-center mx-auto mb-4 border border-green-100">
                      <CircleCheck className="w-7 h-7" />
                    </div>
                    <h4 className="font-['Sora'] font-bold text-xl text-slate-900 mb-2">
                      Application Submitted Successfully!
                    </h4>
                    <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                      {'Thank you for applying for the '}
                      <span className="font-semibold text-slate-800">{selectedJob.title}</span>
                      {
                        ' role. Our talent acquisition director will review your profile and reach out within 2 business days.'
                      }
                    </p>
                    <button
                      type="button"
                      onClick={closeModal}
                      className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-['Sora'] font-bold rounded-lg cursor-pointer"
                    >
                      Done
                    </button>
                  </div>
                ) : (
                  <>
                    <div>
                      <h4 className="font-['Sora'] font-bold text-slate-900 mb-2">About the Role</h4>
                      <p className="leading-relaxed">{selectedJob.description}</p>
                    </div>
                    {selectedJob.responsibilities && (
                      <div>
                        <h4 className="font-['Sora'] font-bold text-slate-900 mb-2">Key Responsibilities</h4>
                        <ul className="space-y-2 list-disc list-inside text-slate-600 pl-1">
                          {selectedJob.responsibilities.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {selectedJob.requirements && (
                      <div>
                        <h4 className="font-['Sora'] font-bold text-slate-900 mb-2">
                          Candidate Qualifications
                        </h4>
                        <ul className="space-y-2 list-disc list-inside text-slate-600 pl-1">
                          {selectedJob.requirements.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="pt-4 border-t border-slate-100">
                      <h4 className="font-['Sora'] font-bold text-slate-900 mb-3">
                        Apply Directly for this Role
                      </h4>
                      <form onSubmit={handleApply} className="space-y-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              required={true}
                              value={applicantName}
                              onChange={(event) => setApplicantName(event.target.value)}
                              placeholder="Your full name"
                              className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:border-[#E71E28]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              required={true}
                              value={applicantEmail}
                              onChange={(event) => setApplicantEmail(event.target.value)}
                              placeholder="name@example.com"
                              className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:border-[#E71E28]"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={applicantPhone}
                            onChange={(event) => setApplicantPhone(event.target.value)}
                            placeholder="+91 98765 43210"
                            className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:border-[#E71E28]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Brief Note / Experience *
                          </label>
                          <textarea
                            rows={3}
                            required={true}
                            value={resumeLink}
                            onChange={(event) => setResumeLink(event.target.value)}
                            placeholder="Share a brief overview of your background or LinkedIn profile link..."
                            className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:border-[#E71E28] resize-none"
                          />
                        </div>
                        <div className="pt-2 flex justify-end gap-3">
                          <button
                            type="button"
                            onClick={closeModal}
                            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-['Sora'] font-bold text-white bg-[#E71E28] hover:bg-[#B8141D] rounded-lg shadow-sm cursor-pointer"
                          >
                            <Send className="w-3.5 h-3.5" />
                            Submit Application
                          </button>
                        </div>
                      </form>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default OpenPositions;
