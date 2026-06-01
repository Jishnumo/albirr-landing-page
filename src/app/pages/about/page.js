"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Target,
  Compass,
  Building,
  User,
} from "lucide-react";
import Footer from "../../components/Footer";
import PageTitle from "../../components/PageTitle";

const AboutPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const tabs = [
    { id: "about", label: "About", path: "/pages/about", icon: BookOpen },
    {
      id: "mission",
      label: "Mission & Vision",
      path: "/pages/mission",
      icon: Target,
    },
    {
      id: "objectives",
      label: "Objectives",
      path: "/pages/objectives",
      icon: Compass,
    },
    {
      id: "infrastructure",
      label: "Infrastructure",
      path: "/pages/infrastructure",
      icon: Building,
    },
    {
      id: "chairman",
      label: "Chairman's Message",
      path: "/pages/chairmansmessage",
      icon: User,
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0f1f42] text-white flex flex-col font-sans overflow-hidden">
      <PageTitle title="About Us" />

      {/* Background Photo */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/about_albirr1.png"
          alt="Albirr Background"
          fill
          className="object-cover object-center md:object-top-right"
          priority
        />
      </div>

      {/* Main Content Body */}
      <main className="relative z-10 grow w-full max-w-none px-0 pt-24 sm:pt-28 md:pt-36 lg:pt-40 pb-0 flex flex-col justify-center">
        {/* Page Title */}
        <div className="mb-10 md:mb-16 text-left animate-in fade-in slide-in-from-bottom duration-700 px-6 sm:px-8 md:px-10 xl:px-12">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            About AlBirr
          </h1>
        </div>

        {/* Outer Container — Glassmorphic rounded card on mobile/tablet, edge-to-edge custom shape on desktop */}
        <div className="relative overflow-hidden lg:overflow-visible min-h-105 lg:min-h-145 p-5 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center mx-4 lg:mx-0 rounded-2xl lg:rounded-none bg-white/[0.07] border border-white/10 backdrop-blur-md shadow-2xl lg:bg-transparent lg:border-none lg:backdrop-blur-none lg:shadow-none animate-in fade-in duration-700">
          {/* Original curved shape overlay background — rendered only on lg and up and meets edges sharply */}
          <div className="absolute inset-0 z-0 pointer-events-none w-full h-full hidden lg:block">
            <img
              src="/hero shape 6.png"
              alt="Decorative curved background shape"
              className="w-full h-full object-fill opacity-100 brightness-100 rounded-none"
            />
          </div>

          {/* Grid Layout inside the container */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
            {/* Sidebar Tab Selector */}
            <div className="lg:col-span-3 xl:col-span-3 flex flex-col justify-start">
              {/* Mobile/Tablet Dropdown Select */}
              <div className="relative lg:hidden mb-6 w-full z-30">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center justify-between w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/10 text-white text-xs lg:text-sm xl:text-base font-semibold active:scale-98 transition-all duration-300 select-none cursor-pointer"
                >
                  <span>{tabs.find((t) => t.id === "about").label}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
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
                    {/* Overlay to close the dropdown */}
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setIsOpen(false)}
                    />

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 right-0 mt-2 z-50 rounded-2xl bg-[#0f1f42]/95 border border-white/10 backdrop-blur-lg shadow-2xl p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      {tabs.map((tab) => {
                        const isActive = tab.id === "about";
                        return (
                          <Link
                            key={tab.id}
                            href={tab.path}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center px-4 py-3 rounded-xl text-left text-xs lg:text-sm xl:text-base font-medium transition-all duration-200 ${
                              isActive
                                ? "text-white font-bold"
                                : "text-white/70 hover:text-white"
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
                  const isActive = tab.id === "about";
                  return (
                    <Link
                      key={tab.id}
                      href={tab.path}
                      className={`flex items-center px-6 py-3 rounded-full text-left text-xs lg:text-sm xl:text-base font-bold transition-all duration-300 select-none ${
                        isActive
                          ? "text-white font-extrabold"
                          : "text-white/60 hover:text-white"
                      }`}
                    >
                      <span>{tab.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Content Display Window */}
            <div className="lg:col-span-9 xl:col-span-9 flex flex-col justify-center">
              <div className="transition-all duration-500 animate-in fade-in">
                <div className="space-y-4 sm:space-y-6 text-justify text-xs sm:text-sm lg:text-[0.95rem] xl:text-base text-white/95 font-normal leading-relaxed">
                  <p>
                    Albirr Schools is proudly delivering quality education in
                    more than 350+ branches not only in India but across the
                    world. We have branches in Kerala, Karnataka, Oman and Saudi
                    Arabia with pre-primary and primary sections. Albirr Islamic
                    Pre School was found with the main vision to mould and
                    transform lives according to Islamic values enhanced through
                    child friendly academic programs. At Albirr School, we offer
                    comprehensive educational experiences to children that
                    inculcates good moral and ethical values, combined with
                    academic excellence. Our unique approach to learning through
                    a compelling curriculum and engaging instruction provides
                    children with a holistic development and a positive school
                    culture. We believe that every child has the potential to
                    grow we just need to ensure that every child is given the
                    opportunity to reach his/her full potential.
                  </p>
                  <p>
                    We apply modern, state of the art technologies to enable
                    effective academic progress in classrooms. Instruction
                    methods are combined with technology integrating a child
                    friendly approach to make learning a fun process. We are
                    following a well-researched program that caters for the
                    development of a balanced and holistic Islamic personality.
                    Along with Academics and Islam studies we aim to imbibe core
                    values like piety, honesty, cooperation, compassion,
                    empathy, respect and service to mankind so that our children
                    become positive contributing members of the society.
                  </p>
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

export default AboutPage;
