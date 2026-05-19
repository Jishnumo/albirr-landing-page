"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Target, Compass, Building, User } from "lucide-react";
import Footer from "../../components/Footer";

const MissionVisionPage = () => {

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
              <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-none">
                {tabs.map((tab) => {
                  const isActive = tab.id === "mission";
                  return (
                    <Link
                      key={tab.id}
                      href={tab.path}
                      className={`flex items-center px-6 py-3 rounded-xl lg:rounded-full text-left text-sm md:text-base font-bold whitespace-nowrap lg:whitespace-normal transition-all duration-300 select-none ${isActive
                        ? "bg-black/[0.08] border border-black/5 text-gray-900 shadow-sm font-extrabold"
                        : "text-gray-600 hover:text-gray-950 hover:bg-black/[0.03] border border-transparent"
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
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
                    OUR VISION
                  </h2>
                  <p className="text-gray-600 font-normal leading-relaxed">
                    To mould and transform individuals into a cultured Global citizen.
                  </p>
                </div>

                {/* OUR MISSION */}
                <div className="space-y-5">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
                    OUR MISSION
                  </h2>
                  <ul className="space-y-4 list-none pl-0">
                    {[
                      "To instil the teachings of the Holy Quran and values of Sunnah.",
                      "Bring up a child as per 'fitrah' or his intrinsic purity.",
                      "Nurture Islamic character through Education to benefit the chid in this world and the hereafter.",
                      "To guide and teach in a way that educates socially, spiritually, physically, intellectually, and emotionally.",
                      "Focus on a value-based education that instils honesty, integrity, compassion and mutual respect and national demographic values which will enable them to become responsible global citizens of tomorrow.",
                      "To foster exceptional language, communication skills and life skill in the early years of the child."
                    ].map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="mt-2.5 h-2 w-2 rounded-full bg-gray-800 flex-shrink-0" />
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
