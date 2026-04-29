"use client";
import React from 'react';
import Image from 'next/image';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ContactForm = () => {
  const formRef    = useScrollReveal({ threshold: 0.08 });
  const contentRef = useScrollReveal({ threshold: 0.08 });

  return (
    <section className="relative min-h-[700px] flex items-center py-20 px-6 md:px-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background_form.png"
          alt="Contact Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1] bg-[#0c0c1a]/70" />

      <div className="mx-auto max-w-7xl w-full relative z-10">
        <div className="grid gap-12 lg:gap-20 lg:grid-cols-2 lg:items-center">

          {/* ── LEFT: Glassmorphism form card with floating orbs ── */}
          <div
            ref={formRef}
            data-reveal="fade-left"
            className="relative order-2 lg:order-1 flex justify-center"
          >
            {/* Floating orb — pink/red top-right */}
            <div className="absolute -top-12 -right-8 w-44 h-44 rounded-full bg-gradient-to-br from-[#ff3cac] to-[#f05b28] opacity-75 blur-[2px] pointer-events-none z-0" />

            {/* Floating orb — purple bottom-left */}
            <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-gradient-to-br from-[#7b2fff] to-[#9C4A9C] opacity-70 blur-[2px] pointer-events-none z-0" />

            {/* Small accent orb — top-left */}
            <div className="absolute top-4 -left-4 w-20 h-20 rounded-full bg-gradient-to-br from-[#ff3cac]/60 to-[#9C4A9C]/40 blur-sm pointer-events-none z-0" />

            {/* Glass card */}
            <div className="relative z-10 w-full max-w-md bg-[#1a1a2e]/80 backdrop-blur-2xl border border-white/10 rounded-[1.5rem] shadow-[0_25px_80px_rgba(0,0,0,0.6)] p-8 md:p-10">

              {/* Card heading */}
              <h3 className="text-2xl font-bold text-white mb-8 tracking-tight">Get in Touch</h3>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>

                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-white/50 font-medium">Name</label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="w-full bg-[#0f0f1f]/70 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#ff3cac]/60 focus:bg-[#0f0f1f] transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-white/50 font-medium">Email</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full bg-[#0f0f1f]/70 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#ff3cac]/60 focus:bg-[#0f0f1f] transition-all"
                    />
                  </div>
                </div>

                {/* Phone + Place */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-white/50 font-medium">Phone</label>
                    <input
                      type="tel"
                      placeholder="+91 00000 00000"
                      className="w-full bg-[#0f0f1f]/70 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#ff3cac]/60 focus:bg-[#0f0f1f] transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-white/50 font-medium">Place</label>
                    <input
                      type="text"
                      placeholder="Your city / town"
                      className="w-full bg-[#0f0f1f]/70 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#ff3cac]/60 focus:bg-[#0f0f1f] transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-white/50 font-medium">Message</label>
                  <textarea
                    placeholder="How can we help you?"
                    rows={4}
                    className="w-full bg-[#0f0f1f]/70 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#ff3cac]/60 focus:bg-[#0f0f1f] transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#ff3cac] to-[#f05b28] text-white font-bold text-sm tracking-wide shadow-[0_8px_30px_rgba(255,60,172,0.4)] hover:shadow-[0_8px_40px_rgba(255,60,172,0.6)] hover:opacity-90 transition-all active:scale-[0.98]"
                >
                  Send Message
                </button>

              </form>
            </div>
          </div>

          {/* ── RIGHT: Copy ── */}
          <div
            ref={contentRef}
            data-reveal="fade-right"
            data-reveal-delay="200"
            className="text-white lg:pl-8 order-1 lg:order-2 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <h2 className="text-4xl md:text-7xl font-bold leading-[1.1] mb-8">
              We would love<br />
              to <span className="text-[#FE9860]">hear from</span><br />
              <span className="text-[#FE9860]">you.</span>
            </h2>
            <p className="text-white/90 text-lg md:text-xl font-medium mb-12">
              For any queries, get in touch
            </p>

            <div className="flex flex-col gap-4">
              {/* Email */}
              <a
                href="mailto:schoolalbirr@gmail.com"
                className="group flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm w-full hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#ff3cac]/40 to-[#9C4A9C]/40 text-white flex-shrink-0 group-hover:from-[#ff3cac]/60 group-hover:to-[#9C4A9C]/60 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] text-white/40 font-medium uppercase tracking-wider mb-0.5">Email us</p>
                  <span className="text-sm font-semibold text-white group-hover:text-[#ff3cac] transition-colors truncate block">schoolalbirr@gmail.com</span>
                </div>
                <svg className="h-4 w-4 text-white/20 group-hover:text-white/60 group-hover:translate-x-1 transition-all flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>

              {/* Phone */}
              <a
                href="tel:+919061559827"
                className="group flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm w-full hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#7b2fff]/40 to-[#36E1FF]/30 text-white flex-shrink-0 group-hover:from-[#7b2fff]/60 group-hover:to-[#36E1FF]/50 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <p className="text-[10px] text-white/40 font-medium uppercase tracking-wider mb-0.5">Call us</p>
                  <span className="text-sm font-semibold text-white group-hover:text-[#7b2fff] transition-colors">+91 9061 559 827</span>
                </div>
                <svg className="h-4 w-4 text-white/20 group-hover:text-white/60 group-hover:translate-x-1 transition-all ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
