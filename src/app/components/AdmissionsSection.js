import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AdmissionsSection = () => {
  return (
    <section className="bg-[#1c243c] px-6 py-16 md:px-12 md:py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Left: Image */}
          <div className="relative flex justify-center items-center">
             {/* Decorative blobs behind image based on figma, simulated with glows */}
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
          <div className="flex flex-col justify-center text-white lg:pl-12">
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold leading-[1.1] mb-12 tracking-tight">
              Ready to shape<br />
              your child&apos;s <span className="text-[#FE9860]">bright</span><br />
              <span className="text-[#FE9860]">future?</span>
            </h2>

            {/* Timeline / Stats line */}
            <div className="w-full max-w-lg border-t border-white/20 pt-8 mb-12">
              <div className="flex justify-between items-start text-center">
                <div className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-medium text-white mb-2">8+</span>
                  <span className="text-[10px] md:text-xs font-medium tracking-widest text-[#a8b2d1] uppercase">YEARS</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-medium text-white mb-2">400+</span>
                  <span className="text-[10px] md:text-xs font-medium tracking-widest text-[#a8b2d1] uppercase">SCHOOLS</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-medium text-white mb-2">1600+</span>
                  <span className="text-[10px] md:text-xs font-medium tracking-widest text-[#a8b2d1] uppercase">TEACHERS</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-medium text-white mb-2">16000+</span>
                  <span className="text-[10px] md:text-xs font-medium tracking-widest text-[#a8b2d1] uppercase">STUDENTS</span>
                </div>
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
