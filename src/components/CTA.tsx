"use client";

import { useState } from "react";

export default function CTA() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    question: "",
    consentTransactional: false,
    consentMarketing: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#121212]" />
      
      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#e11d48]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#be123c]/10 rounded-full blur-[100px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div>
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest text-[#e11d48] uppercase surface rounded-full mb-6">
              Get In Touch
            </span>
            <h2 className="font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ letterSpacing: "-0.02em" }}>
              Ready for a
              <span className="block gradient-text">Free Quote?</span>
            </h2>
            <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
              Don&apos;t settle for dull or damaged concrete. Give your floors the strength, 
              shine, and style they deserve. Contact us today for a free estimate.
            </p>

            {/* Contact info */}
            <div className="space-y-6">
              <a href="tel:6123516498" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] border border-white/[0.08] flex items-center justify-center text-[#e11d48] group-hover:bg-[#e11d48]/10 group-hover:border-[#e11d48]/30 transition-all duration-300" style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-zinc-500">Call us at</div>
                  <div className="text-white font-semibold group-hover:text-[#e11d48] transition-colors duration-300" style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}>(612) 351-6498</div>
                </div>
              </a>

              <a href="mailto:john@kongcretemn.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] border border-white/[0.08] flex items-center justify-center text-[#e11d48] group-hover:bg-[#e11d48]/10 group-hover:border-[#e11d48]/30 transition-all duration-300" style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-zinc-500">Email us at</div>
                  <div className="text-white font-semibold group-hover:text-[#e11d48] transition-colors duration-300" style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}>john@kongcretemn.com</div>
                </div>
              </a>

              <a href="https://g.co/kgs/5Q53xxG" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] border border-white/[0.08] flex items-center justify-center text-[#e11d48] group-hover:bg-[#e11d48]/10 group-hover:border-[#e11d48]/30 transition-all duration-300" style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-zinc-500">Located at</div>
                  <div className="text-white font-semibold group-hover:text-[#e11d48] transition-colors duration-300" style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}>7117 Washington Ave S, Eden Prairie, MN 55344</div>
                </div>
              </a>

              {/* Business Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] border border-white/[0.08] flex items-center justify-center text-[#e11d48]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-zinc-500">Business Hours</div>
                  <div className="text-white font-semibold">Monday - Friday: 9:00AM - 5:00PM</div>
                  <div className="text-zinc-500 text-sm">Saturday - Sunday: Closed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="relative">
            {/* Card glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#e11d48]/20 to-[#be123c]/20 rounded-3xl blur-xl" />
            
            <form
              onSubmit={handleSubmit}
              className="relative p-8 sm:p-10 rounded-3xl bg-[#1a1a1a] border border-white/[0.08]"
            >
              <h3 className="font-[var(--font-display)] text-2xl font-bold text-white mb-6" style={{ letterSpacing: "-0.01em" }}>
                Question?
              </h3>

              <div className="space-y-5">
                {/* First Name & Last Name */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-zinc-400 mb-2">
                      First Name <span className="text-[#e11d48]">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3 bg-[#121212] border border-white/[0.08] rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-[#e11d48]/50 focus:ring-1 focus:ring-[#e11d48]/50 transition-all duration-300"
                      style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-zinc-400 mb-2">
                      Last Name <span className="text-[#e11d48]">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3 bg-[#121212] border border-white/[0.08] rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-[#e11d48]/50 focus:ring-1 focus:ring-[#e11d48]/50 transition-all duration-300"
                      style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                {/* Phone & Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-zinc-400 mb-2">
                      Phone <span className="text-[#e11d48]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#121212] border border-white/[0.08] rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-[#e11d48]/50 focus:ring-1 focus:ring-[#e11d48]/50 transition-all duration-300"
                      style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
                      placeholder="(555) 555-5555"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">
                      Email <span className="text-[#e11d48]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#121212] border border-white/[0.08] rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-[#e11d48]/50 focus:ring-1 focus:ring-[#e11d48]/50 transition-all duration-300"
                      style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
                      placeholder="john@email.com"
                      required
                    />
                  </div>
                </div>

                {/* Question */}
                <div>
                  <label htmlFor="question" className="block text-sm font-medium text-zinc-400 mb-2">
                    What is your question? <span className="text-[#e11d48]">*</span>
                  </label>
                  <textarea
                    id="question"
                    rows={4}
                    value={formData.question}
                    onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                    className="w-full px-4 py-3 bg-[#121212] border border-white/[0.08] rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-[#e11d48]/50 focus:ring-1 focus:ring-[#e11d48]/50 transition-all duration-300 resize-none"
                    style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
                    placeholder="Question"
                    required
                  />
                </div>

                {/* Consent Checkboxes */}
                <div className="space-y-4">
                  {/* Transactional consent */}
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={formData.consentTransactional}
                      onChange={(e) => setFormData({ ...formData, consentTransactional: e.target.checked })}
                      className="mt-1 w-4 h-4 rounded border-white/[0.08] bg-[#121212] text-[#e11d48] focus:ring-[#e11d48]/50 focus:ring-offset-0 cursor-pointer"
                    />
                    <span className="text-xs text-zinc-500 leading-relaxed">
                      By checking this box, I consent to receive transactional messages related to my account, orders, or services I have requested. These messages may include appointment reminders, order confirmations, and account notifications among others. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt-out.
                    </span>
                  </label>

                  {/* Marketing consent */}
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={formData.consentMarketing}
                      onChange={(e) => setFormData({ ...formData, consentMarketing: e.target.checked })}
                      className="mt-1 w-4 h-4 rounded border-white/[0.08] bg-[#121212] text-[#e11d48] focus:ring-[#e11d48]/50 focus:ring-offset-0 cursor-pointer"
                    />
                    <span className="text-xs text-zinc-500 leading-relaxed">
                      By checking this box, I consent to receive marketing and promotional messages, including special offers, discounts, new product updates among others. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt-out.
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 gradient-crimson text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#e11d48]/30 transform hover:scale-[1.02] transition-all duration-300"
                  style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
                >
                  Submit
                </button>

                {/* Privacy Policy & Terms */}
                <div className="text-center">
                  <p className="text-xs text-zinc-600">
                    <a href="/privacy-policy" className="hover:text-[#e11d48] transition-colors duration-300 underline" style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}>Privacy Policy</a>
                    {" | "}
                    <a href="/terms-of-service" className="hover:text-[#e11d48] transition-colors duration-300 underline" style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}>Terms of Service</a>
                  </p>
                </div>

                {/* reCAPTCHA badge */}
                <div className="flex items-center justify-center gap-2 pt-2">
                  <div className="flex items-center gap-2 px-4 py-2 bg-[#121212] rounded-lg border border-white/[0.08]">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#4285F4"/>
                      <path d="M12 2v10l8.5 5c1-1.7 1.5-3.7 1.5-5.7C22 6.48 17.52 2 12 2z" fill="#34A853"/>
                      <path d="M12 12L3.5 17c1.7 2.7 4.7 4.5 8.5 4.5V12z" fill="#FBBC05"/>
                      <path d="M3.5 7L12 12V2C7.7 2 4.2 4.3 3.5 7z" fill="#EA4335"/>
                    </svg>
                    <div className="text-left">
                      <span className="text-[10px] text-zinc-500 block">protected by</span>
                      <span className="text-xs text-zinc-400 font-semibold">reCAPTCHA</span>
                    </div>
                  </div>
                  <div className="text-[10px] text-zinc-600">
                    <a href="https://www.google.com/intl/en/policies/privacy/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400">Privacy</a>
                    {" - "}
                    <a href="https://www.google.com/intl/en/policies/terms/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400">Terms</a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
