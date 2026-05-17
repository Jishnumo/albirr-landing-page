"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X, BookOpen, Target, Compass, Building, User } from "lucide-react";
import Footer from "../../components/Footer";

const MissionVisionPage = () => {
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

        {/* Navbar — sits on top of image */}
        <header className="relative z-50 w-full px-4 sm:px-6 md:px-8 xl:px-12 pt-4 pb-4 md:pt-6">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0 relative z-[101]">
              <div className="relative h-16 w-48 sm:h-20 sm:w-56 md:h-24 md:w-64 lg:h-28 lg:w-72">
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
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 right-6 p-2 text-white/85 hover:text-white focus:outline-none"
              >
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
                <Link
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#9C4A9C] px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all active:scale-95"
                >
                  Student Portal
                  <ArrowUpRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          )}
        </header>

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
