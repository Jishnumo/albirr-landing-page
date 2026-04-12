import React from 'react';
import Image from 'next/image';

const Gallery = () => {
  const images = [
    { src: '/g1.jpg', year: '2015', alt: 'School Interior' },
    { src: '/g2.jpg', year: '2023', alt: 'School Building' },
    { src: '/g3.jpg', year: '2017', alt: 'Photography Class' },
    { src: '/g4.jpg', year: '2018', alt: 'Creative Arts' },
    { src: '/g5.jpg', year: '2019', alt: 'Group Activity' },
    { src: '/g6.webp', year: '2020', alt: 'Outdoor Learning' },
  ];

  return (
    <section className="bg-[#0f1f42] py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        
        {/* Main Glassmorphism Container */}
        <div className="relative z-10 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[4rem] p-8 md:p-12 lg:p-16 shadow-[0_30px_100px_rgba(0,0,0,0.3)]">
          
          {/* Tab Header */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex bg-[#1c243c]/80 backdrop-blur-md p-1.5 rounded-full border border-white/10 shadow-inner">
              <button className="px-8 py-2.5 rounded-full bg-[#9C4A9C]/80 text-white font-bold text-sm tracking-wide shadow-lg transition-all">
                Gallery
              </button>
              <button className="px-8 py-2.5 rounded-full text-white/70 font-bold text-sm tracking-wide hover:text-white transition-all">
                News & Media
              </button>
              <button className="px-8 py-2.5 rounded-full text-white/70 font-bold text-sm tracking-wide hover:text-white transition-all">
                Downloads
              </button>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {images.map((img, idx) => (
              <div 
                key={idx} 
                className="relative aspect-[4/3] rounded-[2rem] overflow-hidden group shadow-xl transition-all hover:scale-[1.03] hover:shadow-2xl"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Year Overlay */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="text-white font-black text-xl tracking-tighter drop-shadow-md">
                    {img.year}
                  </span>
                </div>
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>

        </div>

        {/* Decorative background blur (optional but premium) */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#9C4A9C]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#36E1FF]/10 rounded-full blur-[120px] pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Gallery;
