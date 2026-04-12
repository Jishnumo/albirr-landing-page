import React from 'react';
import Image from 'next/image';

const CardsSection = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-20 gap-4">
          <h2 className="text-4xl md:text-5xl font-black text-[#0f1f42] tracking-tight">
            Our Facilities
          </h2>
          <div className="text-gray-300 font-medium text-sm md:text-base tracking-wide italic">
            / Where Learning and Comfort Meet
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          
          {/* Card 1 */}
          <div className="bg-[#fcfcfc] rounded-[2rem] overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col h-full transform transition-transform hover:-translate-y-2">
            <div className="relative w-full aspect-[1.1] bg-gray-100">
              <Image
                src="/card1.webp"
                alt="IT Enabled Smart Class Rooms"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-lg md:text-xl font-bold text-[#0f1f42] mb-4">IT Enabled Smart Classrooms</h3>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-medium">
                Step into the future of education with our state of the art smart classrooms, equipped with interactive technology that enhances learning experiences and fosters digital literacy.
              </p>
            </div>
          </div>

          {/* Card 2 - Highlighted Dark Card */}
          <div className="bg-[#1c243c] rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] flex flex-col h-full transform transition-transform hover:-translate-y-2 relative z-10">
            <div className="relative w-full aspect-[1.1] bg-gray-800">
              <Image
                src="/card2.webp"
                alt="IT Enabled Smart Class Rooms"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-lg md:text-xl font-bold text-white mb-4">IT Enabled Smart Classrooms</h3>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-medium">
                Step into the future of education with our state of the art smart classrooms, equipped with interactive technology that enhances learning experiences and fosters digital literacy.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#fcfcfc] rounded-[2rem] overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col h-full transform transition-transform hover:-translate-y-2">
            <div className="relative w-full aspect-[1.1] bg-gray-100">
              <Image
                src="/card3.webp"
                alt="IT Enabled Smart Class Rooms"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-lg md:text-xl font-bold text-[#0f1f42] mb-4">IT Enabled Smart Classrooms</h3>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-medium">
                Step into the future of education with our state of the art smart classrooms, equipped with interactive technology that enhances learning experiences and fosters digital literacy.
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
