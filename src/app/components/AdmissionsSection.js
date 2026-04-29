"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useCountUp } from '../hooks/useCountUp';

/** A single stat with count-up animation */
const Stat = ({ target, suffix, label, delay = 1800 }) => {
  const { ref, display } = useCountUp(target, delay, suffix);
  return (
    <div ref={ref} className="flex flex-col">
      <span className="text-2xl md:text-3xl font-medium text-white mb-2 tabular-nums">
        {display}
      </span>
      <span className="text-[10px] md:text-xs font-medium tracking-widest text-[#a8b2d1] uppercase">
        {label}
      </span>
    </div>
  );
};

const AdmissionsSection = () => {
  const imgRef     = useScrollReveal({ threshold: 0.1 });
  const contentRef = useScrollReveal({ threshold: 0.1 });
  const statsRef   = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="bg-[#1c243c] px-6 py-16 md:px-12 md:py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Left: Image */}
          <div
            ref={imgRef}
            data-reveal="fade-left"
            className="relative flex justify-center items-center"
          >
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#FE9860]/20 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>
            
            <div className="relative z-10 w-full max-w-md lg:max-w-lg">
              <Image
                src="/third_image.png"
                alt="Student Waving"
                width={800}
                height={800}
                className="object-contain w-full h-auto drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Right: Content */}
          <div
            ref={contentRef}
            data-reveal="fade-right"
            data-reveal-delay="150"
            className="flex flex-col justify-center text-white lg:pl-12 text-center lg:text-left items-center lg:items-start"
          >
            <h2 className="text-3xl md:text-5xl lg:text-[54px] font-bold leading-[1.1] mb-12 tracking-tight">
              Ready to shape<br />
              your child&apos;s <span className="text-[#FE9860]">bright</span><br />
              <span className="text-[#FE9860]">future?</span>
            </h2>

            {/* Stats with count-up animation */}
            <div
              ref={statsRef}
              data-reveal="fade-up"
              data-reveal-delay="300"
              className="w-full max-w-lg border-t border-white/20 pt-8 mb-12"
            >
              <div className="grid grid-cols-2 md:flex md:justify-between gap-y-8 gap-x-4 items-start text-center">
                <Stat target={8}     suffix="+"  label="YEARS"    delay={1400} />
                <Stat target={400}   suffix="+"  label="SCHOOLS"  delay={1600} />
                <Stat target={1600}  suffix="+"  label="TEACHERS" delay={1800} />
                <Stat target={16000} suffix="+"  label="STUDENTS" delay={2000} />
              </div>
            </div>

            <div className="flex">
              <Link
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/40 px-8 text-sm font-medium text-white transition-colors hover:bg-white/10 hover:border-white"
              >
                Enroll Now
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;
