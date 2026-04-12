"use client";
import React from 'react';
import Image from 'next/image';

const ContactForm = () => {
  return (
    <section className="relative min-h-[700px] flex items-center py-20 px-6 md:px-12 overflow-hidden">
      {/* Background Image - No Overlay as requested */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background_form.png"
          alt="Contact Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="mx-auto max-w-7xl w-full relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Left Side: Form Card (Swapped) */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-[#ffffff]/15 backdrop-blur-xl border border-white/20 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                {/* Name */}
                <div className="flex items-center">
                  <span className="w-24 text-white font-semibold text-base">Name</span>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    className="flex-1 bg-white/10 border border-white/30 rounded-full px-6 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-all"
                  />
                </div>
                {/* Email */}
                <div className="flex items-center">
                  <span className="w-24 text-white font-semibold text-base">Email</span>
                  <input 
                    type="email" 
                    placeholder="Enter your mail id" 
                    className="flex-1 bg-white/10 border border-white/30 rounded-full px-6 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-all"
                  />
                </div>
                {/* Phone */}
                <div className="flex items-center">
                  <span className="w-24 text-white font-semibold text-base">Phone</span>
                  <input 
                    type="tel" 
                    placeholder="Enter your phone number" 
                    className="flex-1 bg-white/10 border border-white/30 rounded-full px-6 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-all"
                  />
                </div>
                {/* Place */}
                <div className="flex items-center">
                  <span className="w-24 text-white font-semibold text-base">Place</span>
                  <input 
                    type="text" 
                    placeholder="Enter your place" 
                    className="flex-1 bg-white/10 border border-white/30 rounded-full px-6 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-all"
                  />
                </div>
                {/* Message */}
                <div className="flex items-start">
                  <span className="w-24 text-white font-semibold text-base pt-3">Message</span>
                  <textarea 
                    placeholder="Enter your message" 
                    rows={4}
                    className="flex-1 bg-white/10 border border-white/30 rounded-[1.5rem] px-6 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-all resize-none"
                  ></textarea>
                </div>

                <div className="flex justify-end pt-4">
                  <button 
                    type="submit" 
                    className="bg-[#24355c] hover:bg-[#1a2744] text-white px-10 py-3 rounded-full text-sm font-semibold transition-all shadow-lg"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Side: Content (Swapped) */}
          <div className="text-white lg:pl-16 order-1 lg:order-2">
            <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8">
              We would love<br />
              to <span className="text-[#FE9860]">hear from</span><br />
              <span className="text-[#FE9860]">you.</span>
            </h2>
            <p className="text-white/90 text-lg md:text-xl font-medium mb-12">
              For any queries, get in touch
            </p>
            
            <div className="flex flex-col gap-6">
              {/* Email Pill */}
              <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#1c243c]/80 border border-white/20 w-max">
                <div className="text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <span className="text-sm font-bold tracking-tight">schoolalbirr@gmail.com</span>
              </div>

              {/* Phone Pill - Gradient */}
              <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#e9a6a8] via-[#a85ec5] to-[#7f45ff] w-max shadow-lg">
                <div className="text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <span className="text-sm font-bold tracking-tight">+91 9061 559 827</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
