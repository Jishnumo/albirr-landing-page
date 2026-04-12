import React from 'react';
import Image from 'next/image';

const CardsSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading (Placeholder since screenshot didn't attach) */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#0f1f42] mb-4">
            Our Programs
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          
          {/* Card 1 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-transform hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col">
            <div className="relative w-full aspect-[4/3] bg-gray-100">
              {/* Uses the image uploaded by the user */}
              <Image
                src="/card1.webp"
                alt="Card 1 Area"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow text-center items-center">
              <h3 className="text-2xl font-bold text-[#0f1f42] mb-3">Pre School</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-6 flex-grow">
                Albirr Pre-Schools offer a nurturing environment where children begin their journey of learning with Islamic values and early childhood developmental activities.
              </p>
              <button className="text-[#FE9860] font-bold text-sm tracking-wide uppercase hover:text-[#e5804c] transition-colors flex items-center gap-2">
                Enroll Now <span className="text-lg">→</span>
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-transform hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col">
            <div className="relative w-full aspect-[4/3] bg-gray-100">
              <Image
                src="/card2.webp"
                alt="Card 2 Area"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow text-center items-center">
              <h3 className="text-2xl font-bold text-[#0f1f42] mb-3">Primary School</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-6 flex-grow">
                Our Primary School focuses on a balanced curriculum, integrating core academic subjects with Islamic studies to build a strong moral and intellectual foundation.
              </p>
              <button className="text-[#FE9860] font-bold text-sm tracking-wide uppercase hover:text-[#e5804c] transition-colors flex items-center gap-2">
                Enroll Now <span className="text-lg">→</span>
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-transform hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col">
            <div className="relative w-full aspect-[4/3] bg-gray-100">
              <Image
                src="/card3.webp"
                alt="Card 3 Area"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow text-center items-center">
              <h3 className="text-2xl font-bold text-[#0f1f42] mb-3">Secondary School</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-6 flex-grow">
                The Secondary School program prepares students for higher education by focusing on academic excellence, leadership skills, and spiritual maturity.
              </p>
              <button className="text-[#FE9860] font-bold text-sm tracking-wide uppercase hover:text-[#e5804c] transition-colors flex items-center gap-2">
                Enroll Now <span className="text-lg">→</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CardsSection;
