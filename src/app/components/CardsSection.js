"use client";
import React from 'react';
import Image from 'next/image';
import { useScrollReveal } from '../hooks/useScrollReveal';

const CardsSection = () => {
  const headerRef = useScrollReveal({ threshold: 0.1 });
  const card1Ref  = useScrollReveal({ threshold: 0.1 });
  const card2Ref  = useScrollReveal({ threshold: 0.1 });
  const card3Ref  = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="bg-white py-24 px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div
          ref={headerRef}
          data-reveal="fade-up"
          className="flex flex-col md:flex-row md:items-baseline justify-between mb-16 md:mb-20 gap-4 text-center md:text-left items-center md:items-baseline"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0f1f42] tracking-tight">
            Our Facilities
          </h2>
          <div className="text-gray-300 font-medium text-xs md:text-base tracking-wide italic">
            / Where Learning and Comfort Meet
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          
          {/* Card 1 */}
          <div
            ref={card1Ref}
            data-reveal="fade-up"
            data-reveal-delay="100"
            className="bg-[#fcfcfc] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col h-full transform transition-transform hover:-translate-y-2"
          >
            <div className="relative w-full aspect-[1.1] bg-gray-100">
              <Image
                src="/card1.webp"
                alt="IT Enabled Smart Class Rooms"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <h3 className="text-base md:text-xl font-bold text-[#0f1f42] mb-4">IT Enabled Smart Classrooms</h3>
              <p className="text-gray-400 text-[10px] md:text-sm leading-relaxed font-medium">
                Step into the future of education with our state of the art smart classrooms, equipped with interactive technology that enhances learning experiences and fosters digital literacy.
              </p>
            </div>
          </div>

          {/* Card 2 - Highlighted Dark Card */}
          <div
            ref={card2Ref}
            data-reveal="zoom"
            data-reveal-delay="250"
            className="bg-[#1c243c] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] flex flex-col h-full transform transition-transform hover:-translate-y-2 relative z-10"
          >
            <div className="relative w-full aspect-[1.1] bg-gray-800">
              <Image
                src="/card2.webp"
                alt="IT Enabled Smart Class Rooms"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <h3 className="text-base md:text-xl font-bold text-white mb-4">Secured And Well Structured Building</h3>
              <p className="text-gray-300 text-[10px] md:text-sm leading-relaxed font-medium">
                Your child&apos;s safety is our top priority. Our meticulously designed and secure building ensures a protective environment, providing peace of mind for parents and a conducive space for learning and growth.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            ref={card3Ref}
            data-reveal="fade-up"
            data-reveal-delay="400"
            className="bg-[#fcfcfc] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col h-full transform transition-transform hover:-translate-y-2"
          >
            <div className="relative w-full aspect-[1.1] bg-gray-100">
              <Image
                src="/card3.webp"
                alt="IT Enabled Smart Class Rooms"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <h3 className="text-base md:text-xl font-bold text-[#0f1f42] mb-4">Children&apos;S Park</h3>
              <p className="text-gray-400 text-[10px] md:text-sm leading-relaxed font-medium">
                Delight in outdoor adventures, socializing, and joyful play in our vibrant park designed for all.
              </p>
            </div>
          </div>

        </div>

        {/* Pager Dots */}
        <div className="flex justify-center gap-2.5 mt-16">
          <div className="h-2 w-2 rounded-full bg-gray-200"></div>
          <div className="h-2 w-2 rounded-full bg-gray-300"></div>
          <div className="h-2 w-2 rounded-full bg-gray-200"></div>
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
