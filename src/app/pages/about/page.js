"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X, BookOpen, Target, Compass, Building, User } from "lucide-react";
import Footer from "../../components/Footer";

const AboutPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = [
    { id: "about", label: "About", path: "/pages/about", icon: BookOpen },
    { id: "mission", label: "Mission & Vision", path: "/pages/mission", icon: Target },
    { id: "objectives", label: "Objectives", path: "/pages/objectives", icon: Compass },
    { id: "infrastructure", label: "Infrastructure", path: "/pages/infrastructure", icon: Building },
    { id: "chairman", label: "Chairman's Message", path: "/pages/chairmansmessage", icon: User },
  ];

  return (
    <div className="relative min-h-screen bg-[#0f1f42] text-white flex flex-col font-sans overflow-hidden">

      {/* Background Photo */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/about_albirr1.png"
          alt="Albirr Background"
          fill
          className="object-cover object-center md:object-right-top"
          priority
        />
      </div>

      {/* Header/Navbar */}
      <header className="relative z-50 mx-auto w-full max-w-none px-4 sm:px-6 md:px-8 xl:px-12 pt-4 pb-6 md:pt-6 lg:pt-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 relative z-[101]">
            <div className="relative h-16 w-48 sm:h-20 sm:w-56 md:h-24 md:w-64 lg:h-28 lg:w-72 rounded-lg flex-shrink-0">
              <Image
                src="/newlogo 1.png"
                alt="AL-BIRR Schools Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
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
              className="group flex items-center gap-2 rounded-lg bg-[#9C4A9C] px-5 py-2.5 text-sm font-bold text-white transition-all hover:brightness-110 active:scale-95 shadow-md shadow-[#9C4A9C]/20"
            >
              Student Portal
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-[101] flex xl:hidden p-2 text-white hover:text-[#36E1FF] transition focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
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

      {/* Main Content Body */}
      <main className="relative z-10 flex-grow w-full max-w-none px-0 pt-8 md:pt-14 pb-0 flex flex-col justify-center">

        {/* Page Title */}
        <div className="mb-10 md:mb-16 text-left animate-in fade-in slide-in-from-bottom duration-700 px-6 sm:px-8 md:px-10 xl:px-12">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            About AlBirr
          </h1>
        </div>

        {/* Outer Container — Glassmorphic rounded card on mobile/tablet, edge-to-edge custom shape on desktop */}
        <div className="relative overflow-hidden lg:overflow-visible min-h-[420px] lg:min-h-[580px] p-5 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center mx-4 lg:mx-0 rounded-2xl lg:rounded-none bg-white/[0.07] border border-white/10 backdrop-blur-md shadow-2xl lg:bg-transparent lg:border-none lg:backdrop-blur-none lg:shadow-none animate-in fade-in duration-700">

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
              <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-3 lg:pb-0 scrollbar-none border-b border-white/5 lg:border-none">
                {tabs.map((tab) => {
                  const isActive = tab.id === "about";
                  return (
                    <Link
                      key={tab.id}
                      href={tab.path}
                      className={`flex items-center px-4 py-2 lg:px-6 lg:py-3 rounded-lg lg:rounded-full text-left text-xs lg:text-sm xl:text-base font-bold whitespace-nowrap lg:whitespace-normal transition-all duration-300 select-none ${isActive
                        ? "bg-white/15 border border-white/10 text-white shadow-lg backdrop-blur-md"
                        : "text-white/70 hover:text-white hover:bg-white/5 border border-transparent"
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
              <div className="transition-all duration-500 animate-in fade-in duration-300">
                <div className="space-y-4 sm:space-y-6 text-justify text-xs sm:text-sm lg:text-[0.95rem] xl:text-base text-white/95 font-normal leading-relaxed">
                  <p>
                    Albirr Schools is proudly delivering quality education in more than 350+ branches not only in India but across the world. We have branches in Kerala, Karnataka, Oman and Saudi Arabia with pre-primary and primary sections. Albirr Islamic Pre School was found with the main vision to mould and transform lives according to Islamic values enhanced through child friendly academic programs. At Albirr School, we offer comprehensive educational experiences to children that inculcates good moral and ethical values, combined with academic excellence. Our unique approach to learning through a compelling curriculum and engaging instruction provides children with a holistic development and a positive school culture. We believe that every child has the potential to grow we just need to ensure that every child is given the opportunity to reach his/her full potential.
                  </p>
                  <p>
                    We apply modern, state of the art technologies to enable effective academic progress in classrooms. Instruction methods are combined with technology integrating a child friendly approach to make learning a fun process. We are following a well-researched program that caters for the development of a balanced and holistic Islamic personality. Along with Academics and Islam studies we aim to imbibe core values like piety, honesty, cooperation, compassion, empathy, respect and service to mankind so that our children become positive contributing members of the society.
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
