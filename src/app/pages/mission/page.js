"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Target, Compass, Building, User } from "lucide-react";
import Footer from "../../components/Footer";

const MissionVisionPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const tabs = [
    { id: "about", label: "About", path: "/pages/about", icon: BookOpen },
    { id: "mission", label: "Mission & Vision", path: "/pages/mission", icon: Target },
    { id: "objectives", label: "Objectives", path: "/pages/objectives", icon: Compass },
    { id: "infrastructure", label: "Infrastructure", path: "/pages/infrastructure", icon: Building },
    { id: "chairman", label: "Chairman's Message", path: "/pages/chairmansmessage", icon: User },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">

      {/* ── HEADER: compact fixed-height banner, image fills naturally ── */}
      <div className="relative text-white overflow-hidden" style={{ height: "220px" }}>

        {/* Background image — natural object-cover, no scaling */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/about_albirr1.png"
            alt="Albirr Header Background"
            fill
            className="object-cover object-[center_40%]"
            priority
          />
          {/* subtle dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/25" />
        </div>



        {/* Page title — pinned to bottom-left of header banner */}
        <div className="absolute bottom-4 left-6 sm:left-8 md:left-10 xl:left-12 z-10">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]">
            About AlBirr
          </h1>
        </div>

      </div>
      {/* ── END HEADER ── */}

      {/* ── CONTENT: pure white, no image ── */}
      <main className="flex-grow w-full bg-white">
        <div className="min-h-[520px] p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Sidebar */}
            <div className="lg:col-span-3 flex flex-col justify-start">
              {/* Mobile/Tablet Dropdown Select (Light Theme) */}
              <div className="relative lg:hidden mb-6 w-full z-30">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center justify-between w-full px-5 py-3.5 rounded-xl bg-black/[0.04] border border-black/5 text-gray-900 text-sm md:text-base font-semibold active:scale-98 transition-all duration-300 select-none cursor-pointer"
                >
                  <span>{tabs.find(t => t.id === "mission").label}</span>
                  <svg
                    className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isOpen && (
                  <>
                    {/* Overlay to close the dropdown */}
                    <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 right-0 mt-2 z-50 rounded-2xl bg-white border border-black/5 shadow-xl p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      {tabs.map((tab) => {
                        const isActive = tab.id === "mission";
                        return (
                          <Link
                            key={tab.id}
                            href={tab.path}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center px-4 py-3 rounded-xl text-left text-sm md:text-base font-medium transition-all duration-200 ${isActive
                                ? "text-gray-950 font-bold"
                                : "text-gray-600 hover:text-gray-950"
                              }`}
                          >
                            <span>{tab.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>

              {/* Desktop Navigation Sidebar */}
              <nav className="hidden lg:flex flex-col gap-2">
                {tabs.map((tab) => {
                  const isActive = tab.id === "mission";
                  return (
                    <Link
                      key={tab.id}
                      href={tab.path}
                      className={`flex items-center px-6 py-3 rounded-full text-left text-sm md:text-base font-bold transition-all duration-300 select-none ${isActive
                        ? "text-gray-950 font-extrabold"
                        : "text-gray-500 font-medium hover:text-gray-950"
                        }`}
                    >
                      <span>{tab.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Mission & Vision Content */}
            <div className="lg:col-span-9 flex flex-col justify-center">
              <div className="space-y-10 text-left text-xs sm:text-sm lg:text-[0.95rem] xl:text-base">

                {/* OUR VISION */}
                <div className="space-y-3">
                  <h2 className="text-xl sm:text-3xl font-bold text-gray-950 tracking-tight">
                    OUR VISION
                  </h2>
                  <p className="text-gray-600 font-normal leading-relaxed">
                    To mould and transform individuals into a cultured Global citizen.
                  </p>
                </div>

                {/* OUR MISSION */}
                <div className="space-y-5">
                  <h2 className="text-xl sm:text-3xl font-bold text-gray-950 tracking-tight">
                    OUR MISSION
                  </h2>
                  <ul className="space-y-4 list-none pl-0">
                    {[
                      "To instill the teachings of the Holy Quran and values of Sunnah.",
                      "Bring up a child as per 'fitrah' or his intrinsic purity.",
                      "Nurture Islamic character through Education to benefit the chid in this world and the hereafter.",
                      "To guide and teach in a way that educates socially, spiritually, physically, intellectually, and emotionally.",
                      "Focus on a value-based education that instills honesty, integrity, compassion and mutual respect and national demographic values which will enable them to become responsible global citizens of tomorrow.",
                      "To foster exceptional language, communication skills and life skill in the early years of the child."
                    ].map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                        <span className="text-gray-600 font-normal leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>
      </main>
      {/* ── END CONTENT ── */}

      <Footer className="bg-transparent" />
    </div>
  );
};

export default MissionVisionPage;
