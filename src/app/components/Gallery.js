"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Gallery = () => {
  const images = [
    { src: "/g1.jpg", year: "2015", alt: "School Interior" },
    { src: "/g2.jpg", year: "2023", alt: "School Building" },
    { src: "/g3.jpg", year: "2017", alt: "Photography Class" },
    { src: "/g4.jpg", year: "2018", alt: "Creative Arts" },
    { src: "/g5.jpg", year: "2019", alt: "Group Activity" },
    { src: "/g6.webp", year: "2020", alt: "Outdoor Learning" },
  ];

  const tabs = useMemo(
    () => [
      { key: "gallery", label: "Gallery" },
      { key: "news", label: "News & Media" },
      { key: "downloads", label: "Downloads" },
    ],
    [],
  );

  const [activeTab, setActiveTab] = useState("gallery");
  const activeIndex = tabs.findIndex((t) => t.key === activeTab);

  return (
    <section className="bg-[#1a0f3c] py-24 px-6 md:px-12 relative overflow-hidden z-20">
      <div className="mx-auto max-w-7xl relative">
        {/* Main Container */}
        <div className="relative z-30 mt-12">
          {/* BORDER STYLE LIKE IMAGE */}
          <div className="relative rounded-4xl md:rounded-5xl">
            {/* LEFT TOP CORNER */}
            <div className="absolute top-0 left-0 w-44 md:w-64 h-44 md:h-64 border-t border-l border-white/40 rounded-tl-[3rem] pointer-events-none"></div>

            {/* RIGHT BOTTOM CORNER */}
            <div className="absolute bottom-0 right-0 w-44 md:w-64 h-44 md:h-64 border-b border-r border-white/40 rounded-br-[3rem] pointer-events-none"></div>

            {/* MAIN BOX */}
            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-4xl md:rounded-5xl p-6 md:p-12 lg:p-16 shadow-[0_30px_100px_rgba(0,0,0,0.3)]">
              {/* Floating Toggle */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center px-4 z-50">
                <div className="relative w-full max-w-xl">
                  <div className="relative grid grid-cols-3 items-center bg-[#24325c] border border-white/20 rounded-full p-1 shadow-[0_15px_40px_rgba(0,0,0,0.35)] overflow-hidden">
                    {/* Sliding Active Pill */}
                    <div
                      className="absolute inset-y-1 left-1 w-[calc(33.333%-0.25rem)] rounded-full bg-[#7b849f] shadow-inner transition-transform duration-300 ease-out"
                      style={{ transform: `translateX(${activeIndex * 100}%)` }}
                      aria-hidden="true"
                    />

                    {tabs.map((tab) => {
                      const isActive = tab.key === activeTab;
                      return (
                        <button
                          key={tab.key}
                          type="button"
                          onClick={() => setActiveTab(tab.key)}
                          className={
                            "relative z-10 flex w-full items-center justify-center px-3 sm:px-4 md:px-5 py-2.5 md:py-3 rounded-full font-medium text-[11px] sm:text-sm md:text-[17px] transition-colors whitespace-nowrap " +
                            (isActive
                              ? "text-[#ff944d]"
                              : "text-white hover:text-[#ff944d]")
                          }
                          suppressHydrationWarning
                        >
                          {tab.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Image Grid */}
              <div className="relative mt-10">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {images.map((img, idx) => (
                    <div
                      key={idx}
                      className={
                        "relative aspect-4/3 rounded-3xl md:rounded-4xl overflow-hidden group shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl " +
                        (idx >= 3 ? "hidden md:block" : "")
                      }
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
                      <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  ))}
                </div>

                {/* Centered View More Button */}
                <div className="mt-12 flex justify-center">
                  <Link
                    href="/pages/media?tab=gallery"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#9C4A9C] px-8 py-3.5 text-base font-bold text-white shadow-xl shadow-[#9C4A9C]/30 ring-1 ring-white/10 transition-all hover:brightness-110 active:scale-95 cursor-pointer"
                  >
                    View More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
