"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Target, Compass, Building, User } from "lucide-react";
import Footer from "../../components/Footer";
import PageTitle from "../../components/PageTitle";

export default function ChairmansMessageClient() {
  const [isOpen, setIsOpen] = useState(false);

  const tabs = [
    { id: "about", label: "About", path: "/pages/about", icon: BookOpen },
    { id: "mission", label: "Mission & Vision", path: "/pages/mission", icon: Target },
    { id: "objectives", label: "Objectives", path: "/pages/objectives", icon: Compass },
    { id: "infrastructure", label: "Infrastructure", path: "/pages/infrastructure", icon: Building },
    { id: "chairman", label: "Chairman's Message", path: "/pages/chairmansmessage", icon: User },
  ];

  return (
    <div className="relative min-h-screen text-white flex flex-col font-sans overflow-hidden bg-[#0b0830]">
      <PageTitle title="Chairman's Message" />
      {/* Background gradient + soft glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_20%_20%,rgba(156,74,156,0.55),transparent_60%),radial-gradient(900px_600px_at_85%_30%,rgba(54,225,255,0.22),transparent_55%),radial-gradient(900px_600px_at_65%_95%,rgba(240,91,40,0.18),transparent_60%),linear-gradient(180deg,#0b0830_0%,#130846_55%,#0b0830_100%)]" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#9C4A9C]/25 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#36E1FF]/15 blur-3xl" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 grow w-full max-w-none px-0 pt-32 sm:pt-36 md:pt-44 lg:pt-48 xl:pt-52 pb-0 flex flex-col justify-center animate-in fade-in duration-500">
        {/* Page Title */}
        <div className="mb-8 md:mb-12 text-left px-6 sm:px-8 md:px-10 xl:px-12">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            About AlBirr
          </h1>
        </div>

        {/* Solid White Card — guarantees all text is visible */}
        <div className="relative overflow-visible min-h-130 p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center mx-4 sm:mx-6 md:mx-8 xl:mx-12 rounded-2xl bg-white shadow-2xl">
          {/* Grid: sidebar + content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Sidebar */}
            <div className="lg:col-span-3 flex flex-col justify-start">
              {/* Mobile/Tablet Dropdown */}
              <div className="relative lg:hidden mb-6 w-full z-30">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center justify-between w-full px-5 py-3.5 rounded-xl bg-black/4 border border-black/10 text-gray-900 text-sm md:text-base font-semibold active:scale-98 transition-all duration-300 select-none cursor-pointer"
                >
                  <span>{tabs.find((t) => t.id === "chairman").label}</span>
                  <svg
                    className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
                    <div className="absolute top-full left-0 right-0 mt-2 z-50 rounded-2xl bg-white border border-black/5 shadow-xl p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      {tabs.map((tab) => {
                        const isActive = tab.id === "chairman";
                        return (
                          <Link
                            key={tab.id}
                            href={tab.path}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center px-4 py-3 rounded-xl text-left text-sm md:text-base font-medium transition-all duration-200 ${
                              isActive
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
                  const isActive = tab.id === "chairman";
                  return (
                    <Link
                      key={tab.id}
                      href={tab.path}
                      className={`flex items-center px-6 py-3 rounded-full text-left text-sm md:text-base font-bold transition-all duration-300 select-none ${
                        isActive
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

            {/* Chairman's Message Content */}
            <div className="lg:col-span-9 flex flex-col justify-center">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                {/* Left: Message text */}
                <div className="md:col-span-7 space-y-5 text-left">
                  <div className="h-1.5 w-12 bg-[#9C4A9C] rounded-full shadow-[0_2px_10px_rgba(156,74,156,0.35)]"></div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#0f1f42] tracking-tight leading-tight">
                    Chairman's Message
                  </h2>
                  <p className="text-sm sm:text-[0.85rem] leading-relaxed text-gray-800 text-justify font-normal">
                    At Albirr we provide a totally balanced environment focused not only on academic progress of the child but also their physical, social and emotional development. All our centres boasts of state of the art infrastructure with libraries, laboratories for computer and science, play area and well equipped classrooms.
                  </p>
                  <p className="text-sm sm:text-[0.85rem] leading-relaxed text-gray-800 text-justify font-normal">
                    We provide a conducive environment for children to play as well as explore and learn. The classrooms are very spacious and well-lit and ventilated keeping in mind the comfort and free movement of the children. Our smart and Hi-tech classrooms are equipped with Projector, Television, White board, Green board, Pin board etc. They are painted with bright colours and adorned with various colourful teaching and learning aids for better learning experiences.
                  </p>
                </div>

                {/* Right: Photo & name */}
                <div className="md:col-span-5 flex flex-col items-center justify-center">
                  <div className="relative p-0.75 rounded-full bg-linear-to-tr from-[#9C4A9C] via-[#36E1FF] to-[#F05B28] shadow-xl hover:scale-105 transition-all duration-500">
                    <div className="relative h-44 w-44 sm:h-52 sm:w-52 md:h-56 md:w-56 lg:h-64 lg:w-64 overflow-hidden rounded-full bg-white">
                      <Image
                        src="/about_image.png"
                        alt="Sayed Muhammed Koya Jamalullaily"
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 208px, (max-width: 1024px) 224px, 256px"
                        decoding="async"
                      />
                    </div>
                  </div>

                  <div className="mt-5 text-center px-2">
                    <h4 className="text-sm sm:text-base md:text-[1.05rem] font-black text-[#0f1f42] tracking-tight leading-snug">
                      Sayed Muhammed Koya Jamalullaily
                    </h4>
                    <span className="inline-block mt-2 px-4 py-1 rounded-full bg-[#9C4A9C] text-white text-[11px] sm:text-xs font-bold tracking-wide shadow-md">
                      Chairman — Albirr
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer className="bg-transparent" />
    </div>
  );
}
