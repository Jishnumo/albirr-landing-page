import React from "react";
import Image from "next/image";

const Gallery = () => {
  const images = [
    { src: "/g1.jpg", year: "2015", alt: "School Interior" },
    { src: "/g2.jpg", year: "2023", alt: "School Building" },
    { src: "/g3.jpg", year: "2017", alt: "Photography Class" },
    { src: "/g4.jpg", year: "2018", alt: "Creative Arts" },
    { src: "/g5.jpg", year: "2019", alt: "Group Activity" },
    { src: "/g6.webp", year: "2020", alt: "Outdoor Learning" },
  ];

  return (
    <section className="bg-[#1a0f3c] py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="mx-auto max-w-7xl relative">
        {/* Main Container */}
        <div className="relative z-10 mt-12">
          {/* BORDER STYLE LIKE IMAGE */}
          <div className="relative rounded-[2rem] md:rounded-[3rem]">
            {/* LEFT TOP CORNER */}
            <div className="absolute top-0 left-0 w-44 md:w-64 h-44 md:h-64 border-t border-l border-white/40 rounded-tl-[3rem] pointer-events-none"></div>

            {/* RIGHT BOTTOM CORNER */}
            <div className="absolute bottom-0 right-0 w-44 md:w-64 h-44 md:h-64 border-b border-r border-white/40 rounded-br-[3rem] pointer-events-none"></div>

            {/* MAIN BOX */}
            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 lg:p-16 shadow-[0_30px_100px_rgba(0,0,0,0.3)]">
              {/* Floating Toggle */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center px-4 z-50">
                <div className="relative inline-flex items-center bg-[#24325c] border border-white/20 rounded-full p-1 shadow-[0_15px_40px_rgba(0,0,0,0.35)] overflow-hidden">
                  {/* Active Tab */}
                  <button className="px-5 sm:px-6 md:px-8 py-2.5 md:py-3 rounded-full bg-[#7b849f] text-[#ff944d] font-medium text-xs sm:text-sm md:text-[17px] shadow-inner transition-all whitespace-nowrap">
                    Gallery
                  </button>

                  {/* Inactive Tabs */}
                  <button className="px-5 sm:px-6 md:px-8 py-2.5 md:py-3 rounded-full text-white font-medium text-xs sm:text-sm md:text-[17px] hover:text-[#ff944d] transition-all whitespace-nowrap">
                    News & Media
                  </button>

                  <button className="px-5 sm:px-6 md:px-8 py-2.5 md:py-3 rounded-full text-white font-medium text-xs sm:text-sm md:text-[17px] hover:text-[#ff944d] transition-all whitespace-nowrap">
                    Downloads
                  </button>
                </div>
              </div>

              {/* Image Grid */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
                {images.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-[4/3] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden group shadow-xl transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Year */}
                    <div className="absolute top-6 left-6 z-20">
                      <span className="text-white font-black text-xl tracking-tighter drop-shadow-md">
                        {img.year}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
