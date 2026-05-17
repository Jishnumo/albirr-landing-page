"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X, BookOpen, Target, Compass, Building, User } from "lucide-react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        {/* Navbar */}
        <header className="relative z-50 w-full px-4 sm:px-6 md:px-8 xl:px-12 pt-4 pb-4 md:pt-6">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0 relative z-[101]">
              <div className="relative h-14 w-44 sm:h-16 sm:w-48 md:h-20 md:w-56">
                <Image
                  src="/newlogo 1.png"
                  alt="AL-BIRR Schools Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden xl:flex items-center gap-8">
              <Link href="/" className="text-sm font-semibold text-white/90 hover:text-white transition">Home</Link>
              <Link href="/pages/about" className="text-sm font-bold text-white border-b-2 border-white pb-1 transition">About</Link>
              <Link href="#" className="text-sm font-medium text-white/80 hover:text-white transition">Academics</Link>
              <Link href="#" className="text-sm font-medium text-white/80 hover:text-white transition">Administration</Link>
              <Link href="#" className="text-sm font-medium text-white/80 hover:text-white transition">Media</Link>
            </div>

            {/* Desktop CTA */}
            <div className="hidden xl:flex items-center gap-6">
              <Link href="/#contact" className="text-sm font-semibold text-white/90 hover:text-white transition">Contact</Link>
              <Link
                href="#"
                className="group flex items-center gap-2 rounded-lg bg-[#9C4A9C] px-5 py-2.5 text-sm font-bold text-white transition-all hover:brightness-110 active:scale-95 shadow-md"
              >
                Student Portal
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-[101] flex xl:hidden p-2 text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>

          {/* Mobile Drawer */}
          {isMenuOpen && (
            <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0f1f42] xl:hidden animate-in fade-in duration-300">
              <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 p-2 text-white/85 hover:text-white focus:outline-none">
                <X className="h-8 w-8" />
              </button>
              <div className="flex flex-col items-center gap-8 text-center px-6 w-full max-w-sm">
                <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-2xl font-normal text-white hover:text-[#36E1FF] transition">Home</Link>
                <Link href="/pages/about" onClick={() => setIsMenuOpen(false)} className="text-2xl font-semibold text-[#36E1FF] transition">About</Link>
                <Link href="#" onClick={() => setIsMenuOpen(false)} className="text-2xl font-normal text-white hover:text-[#36E1FF] transition">Academics</Link>
                <Link href="#" onClick={() => setIsMenuOpen(false)} className="text-2xl font-normal text-white hover:text-[#36E1FF] transition">Administration</Link>
                <Link href="#" onClick={() => setIsMenuOpen(false)} className="text-2xl font-normal text-white hover:text-[#36E1FF] transition">Media</Link>
                <div className="h-px w-24 bg-white/20 my-4" />
                <Link href="/#contact" onClick={() => setIsMenuOpen(false)} className="text-xl font-normal text-white/80 hover:text-white transition">Contact</Link>
                <Link href="#" onClick={() => setIsMenuOpen(false)} className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#9C4A9C] px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all active:scale-95">
                  Student Portal <ArrowUpRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          )}
        </header>

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
              <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-none">
                {tabs.map((tab) => {
                  const isActive = tab.id === "objectives";
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

            {/* Main Content */}
            <div className="lg:col-span-9 flex flex-col gap-12">

              {/* OBJECTIVES Section */}
              <div className="space-y-5">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
                  OBJECTIVES
                </h2>
                <ul className="space-y-3 list-disc pl-5 text-xs sm:text-sm lg:text-[0.95rem] xl:text-base">
                  {[
                    "To provide a safe, secure and conducive environment with maternal care that supports children's academic, physical, social, emotional and moral development.",
                    "To inculcate in children the values of piety, honesty, cooperation, compassion, empathy, service to mankind and respect towards others and the environment.",
                    "To train the children in material and spiritual sciences through child friendly approach.",
                    "To provide latest facilities, technologies and infrastructure to optimize teaching and learning outcomes.",
                    "To instill in children the attributes of integrity, citizenship, service, and diversity so that they become positive contributing members of the society.",
                    "To develop the right conduct in children, so that they become contributing individual members of the society, nation and world.",
                  ].map((item, idx) => (
                    <li key={idx} className="text-gray-700 font-normal leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CORE VALUES Section */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
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
