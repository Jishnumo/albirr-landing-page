"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Target, Compass, Building, User } from "lucide-react";
import Footer from "../../components/Footer";

const ChairmansMessagePage = () => {

  const tabs = [
    { id: "about", label: "About", path: "/pages/about", icon: BookOpen },
    { id: "mission", label: "Mission & Vision", path: "/pages/mission", icon: Target },
    { id: "objectives", label: "Objectives", path: "/pages/objectives", icon: Compass },
    { id: "infrastructure", label: "Infrastructure", path: "/pages/infrastructure", icon: Building },
    { id: "chairman", label: "Chairman's Message", path: "/pages/chairmansmessage", icon: User },
  ];

  return (
    <div className="relative min-h-screen text-white flex flex-col font-sans overflow-hidden bg-[#0b0830]">
      {/* Background gradient + soft glows (no photo) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_20%_20%,rgba(156,74,156,0.55),transparent_60%),radial-gradient(900px_600px_at_85%_30%,rgba(54,225,255,0.22),transparent_55%),radial-gradient(900px_600px_at_65%_95%,rgba(240,91,40,0.18),transparent_60%),linear-gradient(180deg,#0b0830_0%,#130846_55%,#0b0830_100%)]" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#9C4A9C]/25 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#36E1FF]/15 blur-3xl" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex-grow w-full max-w-none px-0 pt-32 sm:pt-36 md:pt-44 lg:pt-48 xl:pt-52 pb-0 flex flex-col justify-center animate-in fade-in duration-500">

        {/* Page Title */}
        <div className="mb-8 md:mb-12 text-left px-6 sm:px-8 md:px-10 xl:px-12">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            About AlBirr
          </h1>
        </div>

        {/* Container — about_rectangle2.png as the card background */}
        <div className="relative overflow-visible min-h-[520px] p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center mx-4 sm:mx-6 md:mx-8 xl:mx-12 rounded-2xl">

          {/* about_rectangle2.png as the white card container background */}
          <div className="absolute inset-0 z-0 pointer-events-none w-full h-full">
            <img
              src="/about_rectangle2.png"
              alt="Card background"
              className="w-full h-full object-fill opacity-100 brightness-100 rounded-2xl"
            />
          </div>

          {/* Grid: sidebar + content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Sidebar */}
            <div className="lg:col-span-3 flex flex-col justify-start">
              <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-none">
                {tabs.map((tab) => {
                  const isActive = tab.id === "chairman";
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

            {/* Chairman's Message Content */}
            <div className="lg:col-span-9 flex flex-col justify-center">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">

                {/* Left side: Message text */}
                <div className="md:col-span-7 space-y-6 text-left">
                  <div className="space-y-4 text-xs sm:text-sm lg:text-[0.82rem] leading-relaxed text-gray-700 font-normal">
                    <div className="h-1.5 w-12 bg-red-500 mb-4 rounded-full shadow-[0_2px_10px_rgba(239,68,68,0.3)]"></div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#0f1f42] tracking-tight leading-tight mb-4">
                      Chairman's Message
                    </h2>
                    <p className="text-justify font-normal">
                      At Albirr we provide a totally balanced environment focused not only on academic progress of the child but also their physical, social and emotional development. All our centres boasts of state of the art infrastructure with libraries, laboratories for computer and science, play area and well equipped classrooms.
                    </p>
                    <p className="text-justify font-normal">
                      We provide a conducive environment for children to play as well as explore and learn. The classrooms are very spacious and well-lit and ventilated keeping in mind the comfort and free movement of the children. Our smart and Hi-tech classrooms are equipped with Projector, Television, White board, Green board, Pin board etc. They are painted with bright colours and adorned with various colourful teaching and learning aids for better learning experiences.
                    </p>
                  </div>
                </div>

                {/* Right side: Photo & details */}
                <div className="md:col-span-5 flex flex-col items-center justify-center">
                  <div className="relative group p-1.5 rounded-full bg-gradient-to-tr from-[#9C4A9C] via-[#36E1FF] to-[#F05B28] shadow-xl hover:scale-105 transition-all duration-500">
                    <div className="relative h-44 w-44 sm:h-52 sm:w-52 md:h-56 md:w-56 lg:h-64 lg:w-64 overflow-hidden rounded-full border-4 border-white">
                      <Image
                        src="/about_image.png"
                        alt="Sayed Muhammed Koya Jamalullaily"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                  <div className="mt-6 text-center px-4">
                    <h4 className="text-sm sm:text-base md:text-lg font-black text-[#9C4A9C] tracking-tight">
                      Sayed Muhammed Koya Jamalullaily
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 font-bold mt-1">
                      Chairman - Albirr
                    </p>
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
};

export default ChairmansMessagePage;
