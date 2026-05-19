"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Target, Compass, Building, User } from "lucide-react";
import Footer from "../../components/Footer";

const coreValues = [
  {
    title: "Piety",
    desc: "Cultivation of one's strength of character by following the principles laid down by Allah in the Qur'an.",
  },
  {
    title: "Respect",
    desc: "To treat others the way we want to be treated and take chance to serve them.",
  },
  {
    title: "Honesty",
    desc: "To be truthful in what we say or do.",
  },
  {
    title: "Cooperation",
    desc: "Working together in peace and harmony to achieve excellence.",
  },
  {
    title: "Compassion",
    desc: "A deep awareness of self and sympathy for others.",
  },
];

const ObjectivesPage = () => {
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

      {/* ── HEADER: about_objectives.png photo background ── */}
      <div
        className="relative text-white overflow-hidden"
        style={{ height: "300px" }}
      >
        {/* Background — about_objectives.png already has the navy bg + mascot */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/about_objectives.png"
            alt="Objectives Header"
            fill
            className="object-cover object-center"
            priority
          />
        </div>


        {/* "About AlBirr" title — centered, matching screenshot */}
        <div className="absolute inset-x-0 bottom-0 top-16 z-10 flex items-center justify-center">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
            About AlBirr
          </h1>
        </div>

      </div>
      {/* ── END HEADER ── */}

      {/* ── CONTENT: pure white ── */}
      <main className="flex-grow w-full bg-white">
        <div className="p-6 sm:p-10 md:p-12 lg:p-16">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Sidebar */}
            <div className="lg:col-span-3 flex flex-col justify-start">
              {/* Mobile/Tablet Dropdown Select (Light Theme) */}
              <div className="relative lg:hidden mb-6 w-full z-30">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center justify-between w-full px-5 py-3.5 rounded-xl bg-black/[0.04] border border-black/5 text-gray-900 text-sm md:text-base font-semibold active:scale-98 transition-all duration-300 select-none cursor-pointer"
                >
                  <span>{tabs.find(t => t.id === "objectives").label}</span>
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
                        const isActive = tab.id === "objectives";
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
                  const isActive = tab.id === "objectives";
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

            {/* Main Content */}
            <div className="lg:col-span-9 flex flex-col gap-12">

              {/* OBJECTIVES Section */}
              <div className="space-y-5">
                <h2 className="text-xl sm:text-3xl font-bold text-gray-950 tracking-tight">
                  OBJECTIVES
                </h2>
                <ul className="space-y-4 list-none pl-0 text-xs sm:text-sm lg:text-[0.95rem] xl:text-base">
                  {[
                    "To provide a safe, secure and conducive environment with maternal care that supports children's academic, physical, social, emotional and moral development.",
                    "To inculcate in children the values of piety, honesty, cooperation, compassion, empathy, service to mankind and respect towards others and the environment.",
                    "To train the children in material and spiritual sciences through child friendly approach.",
                    "To provide latest facilities, technologies and infrastructure to optimize teaching and learning outcomes.",
                    "To instill in children the attributes of integrity, citizenship, service, and diversity so that they become positive contributing members of the society.",
                    "To develop the right conduct in children, so that they become contributing individual members of the society, nation and world.",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                      <span className="text-gray-700 font-normal leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CORE VALUES Section */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <h2 className="text-xl sm:text-3xl font-bold text-gray-950 tracking-tight">
                    CORE VALUES
                  </h2>
                  <p className="text-gray-600 text-xs sm:text-sm lg:text-[0.95rem] xl:text-base font-normal leading-relaxed">
                    Our values and morals, which are aligned with our vision, are integral to creating a school culture and climate to realise our educational goals.
                  </p>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {coreValues.map((value, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-500 text-xs sm:text-sm font-normal leading-relaxed">
                        {value.desc}
                      </p>
                    </div>
                  ))}
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

export default ObjectivesPage;
