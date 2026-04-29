"use client";
import React from 'react';
import Image from 'next/image';
import { useScrollReveal } from '../hooks/useScrollReveal';

const QuoteBar = () => {
  const ref = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="relative px-6 py-4 md:px-12 md:py-0 bg-transparent -mt-12 md:-mt-20 lg:-mt-24 z-20">
      <div className="mx-auto max-w-7xl relative flex justify-center">
        {/* Slender, long rectangle container */}
        <div
          ref={ref}
          data-reveal="zoom"
          className="relative w-full max-w-[1100px] min-h-[60px] md:min-h-[85px] lg:min-h-[90px] flex items-center justify-center px-8 py-4"
        >
          <Image
            src="/Rectangle.png"
            alt="Quote Background"
            fill
            className="object-fill rounded-xl"
            sizes="(max-width: 768px) 100vw, 1100px"
            priority
          />
          
          <div className="relative z-10 flex flex-col items-center justify-center text-center">
            <h2 className="text-sm font-medium tracking-tight text-[#4c3957] leading-relaxed md:text-base lg:text-lg">
              My Lord, &quot;Increase me in Knowledge&quot; 
              <span className="block mt-1 text-sm font-bold md:inline md:mt-0 md:ml-3 lg:text-base text-[#7c4f82]" dir="rtl">
                (وَقُلْ رَّبِّ زِدْنِي عِلْمًا)
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteBar;
