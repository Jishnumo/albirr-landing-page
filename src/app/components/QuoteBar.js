
import React from 'react';
import Image from 'next/image';

const QuoteBar = () => {
  return (
    <section className="relative px-6 py-4 md:px-12 md:py-4 bg-transparent">
      <div className="mx-auto max-w-5xl relative z-20 flex justify-center">
        {/* Aspect ratio container to hold the image properly behind the text */}
        <div className="relative w-full max-w-[900px] min-h-[100px] md:min-h-[130px] flex items-center justify-center p-6">
          <Image
            src="/Rectangle.png"
            alt="Quote Background"
            fill
            className="object-contain md:object-fill"
            sizes="(max-width: 768px) 100vw, 900px"
            priority
          />
          
          <div className="relative z-10 flex flex-col items-center justify-center text-center">
            <h2 className="text-base font-medium tracking-tight text-[#4c3957] leading-relaxed md:text-lg lg:text-xl">
              My Lord, &quot;Increase me in Knowledge&quot; 
              <span className="block mt-2 text-base font-bold md:inline md:mt-0 md:ml-3 lg:text-lg text-[#7c4f82]" dir="rtl">
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
