"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const AdmissionsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="bg-[#243054] px-6 py-16 md:px-12 md:py-24 max-h-aut relative overflow-hidden flex items-center">
      <div className="mx-auto max-w-7xl relative z-10 w-full">
        <div className="flex flex-col lg:flex-row gap-12 lg:items-center w-full">
          {/* Left: Image (50%) */}
          <div className="relative flex justify-center items-center w-full lg:w-1/2">
            {/* Decorative blobs behind image based on figma, simulated with glows */}
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#FE9860]/40 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-sm md:max-w-xl lg:max-w-none lg:scale-105">
              <Image
                src="/third_image.png"
                alt="Student Waving"
                width={900}
                height={1100}
                className="object-contain w-[90%] h-auto drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Right: Content (50%) */}
          <div className="flex flex-col justify-center text-white lg:pl-12 text-center lg:text-left items-center lg:items-start w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl lg:text-[56px] xl:text-[60px] font-bold leading-[1.15] mb-12 tracking-tight font-(family-name:--font-montserrat)">
              Ready to shape
              <br className="hidden md:block lg:hidden" /> your child&apos;s{" "}
              <span className="text-[#FE9860]">bright</span>
              <span className="text-[#FE9860]"> future?</span>
            </h2>

            {/* Timeline / Stats line */}
            <div className="w-full border-t border-white/20 pt-8 mb-12">
              <div
                ref={ref}
                className="grid grid-cols-2 lg:flex lg:flex-nowrap justify-between gap-y-8 gap-x-4 lg:gap-6 xl:gap-8 items-center text-center"
              >
                <div className="flex flex-col items-center">
                  <span className="text-3xl md:text-4xl lg:text-4xl xl:text-[38px] font-medium bg-linear-to-b from-[#ffffff] to-[#f3d3b8] bg-clip-text text-transparent mb-1 font-(family-name:--font-montserrat)">
                    {inView ? <CountUp end={8} duration={2.5} /> : "0"}+
                  </span>
                  <span className="text-[10px] md:text-xs lg:text-sm font-medium tracking-[0.15em] text-[#f3d3b8] uppercase mt-1 font-(family-name:--font-montserrat)">
                    YEARS
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl md:text-4xl lg:text-4xl xl:text-[38px] font-medium bg-linear-to-b from-[#ffffff] to-[#f3d3b8] bg-clip-text text-transparent mb-1 font-(family-name:--font-montserrat)">
                    {inView ? <CountUp end={400} duration={2.5} /> : "0"}+
                  </span>
                  <span className="text-[10px] md:text-xs lg:text-sm font-medium tracking-[0.15em] text-[#f3d3b8] uppercase mt-1 font-(family-name:--font-montserrat)">
                    SCHOOLS
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl md:text-4xl lg:text-4xl xl:text-[38px] font-medium bg-linear-to-b from-[#ffffff] to-[#f3d3b8] bg-clip-text text-transparent mb-1 font-(family-name:--font-montserrat)">
                    {inView ? <CountUp end={1600} duration={2.5} /> : "0"}+
                  </span>
                  <span className="text-[10px] md:text-xs lg:text-sm font-medium tracking-[0.15em] text-[#f3d3b8] uppercase mt-1 font-(family-name:--font-montserrat)">
                    TEACHERS
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl md:text-4xl lg:text-4xl xl:text-[38px] font-medium bg-linear-to-b from-[#ffffff] to-[#f3d3b8] bg-clip-text text-transparent mb-1 font-(family-name:--font-montserrat)">
                    {inView ? (
                      <CountUp end={16000} duration={2.5} separator="," />
                    ) : (
                      "0"
                    )}
                    +
                  </span>
                  <span className="text-[10px] md:text-xs lg:text-sm font-medium tracking-[0.15em] text-[#f3d3b8] uppercase mt-1 font-(family-name:--font-montserrat)">
                    STUDENTS
                  </span>
                </div>
              </div>
            </div>

            <div className="flex">
              <Link
                href="/#contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/40 px-6 text-sm font-medium text-white transition-colors hover:bg-white/10 hover:border-white"
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
