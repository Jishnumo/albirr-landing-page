"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import HeroNavbar from "./HeroNavbar";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="relative overflow-visible px-4 md:px-12 pt-0 pb-10 md:pb-14">
      {/* Background Shape Image - Moved to leftmost upper corner */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero shape 5.png"
          alt="Hero background shape"
          fill
          className="object-cover object-top-left"
          priority
        />
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -right-32 -top-32 h-[300px] w-[300px] md:h-[600px] md:w-[600px] rounded-full bg-[#F05B28]/30 blur-[60px] md:blur-[100px]" />
        <div className="absolute right-20 top-32 h-[250px] w-[250px] md:h-[500px] md:w-[500px] rounded-full bg-[#9C4A9C]/25 blur-[60px] md:blur-[100px]" />
        <div className="absolute -left-40 top-20 h-[225px] w-[225px] md:h-[450px] md:w-[450px] rounded-full bg-[#36E1FF]/15 blur-[60px] md:blur-[100px]" />
      </div>

      {/* Navbar - Pulled tightly to top */}
      <HeroNavbar
        onMobileMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
      />

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-110 xl:hidden transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMenuOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#0f1f42]/70"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-[#0f1f42] shadow-2xl transition-transform duration-300 ease-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close button (same top-right position as hamburger) */}
          <button
            className="absolute top-6 right-6 p-2 text-white/80 hover:text-white"
            onClick={() => setIsMenuOpen(false)}
            type="button"
            aria-label="Close menu"
          >
            <X className="h-8 w-8" />
          </button>

          <div className="flex h-full flex-col items-start justify-center gap-8 px-8">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-normal text-white hover:text-[#36E1FF] transition"
            >
              Home
            </Link>
            <Link
              href="/pages/about"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-normal text-white hover:text-[#36E1FF] transition"
            >
              About
            </Link>
            <Link
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-normal text-white hover:text-[#36E1FF] transition"
            >
              Academics
            </Link>
            <Link
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-normal text-white hover:text-[#36E1FF] transition"
            >
              Administration
            </Link>
            <Link
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-normal text-white hover:text-[#36E1FF] transition"
            >
              Media
            </Link>

            <div className="h-px w-24 bg-white/20" />

            <Link
              href="/#contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-xl font-normal text-white/80 hover:text-white transition"
            >
              Contact
            </Link>
            <Link
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#9C4A9C] px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-[#9C4A9C]/30 ring-1 ring-white/10 transition-all hover:brightness-110 active:scale-95"
            >
              Student Portal
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl flex flex-col gap-10">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center space-y-4 sm:space-y-8 text-left z-20">
            <h1 className="text-[28px] sm:text-[36px] md:text-[46px] lg:text-[50px] font-bold leading-[1.2] text-white animate-[heroIn_900ms_cubic-bezier(0.22,1,0.36,1)_both] motion-reduce:animate-none">
              Shaping Future <br />
              Generations with Faith <br />
              and Knowledge
            </h1>
            <p className="max-w-md text-xs leading-relaxed text-white/85 sm:text-lg animate-[heroIn_900ms_cubic-bezier(0.22,1,0.36,1)_both] [animation-delay:140ms] motion-reduce:animate-none">
              Delivering quality Islamic education through 350+ branches
              worldwide.
            </p>

            <div className="flex flex-row flex-wrap items-center justify-start gap-3 sm:gap-4 pt-2 sm:pt-4 animate-[heroIn_900ms_cubic-bezier(0.22,1,0.36,1)_both] [animation-delay:240ms] motion-reduce:animate-none">
              <Link
                href="#"
                className="w-auto relative inline-flex items-center justify-center rounded-xl bg-[#9C4A9C] box-border px-4 sm:px-5 py-2.5 sm:py-4 text-xs sm:text-base font-bold text-white shadow-[0_10px_40px_rgba(156,74,156,0.3)] transition hover:brightness-125 active:scale-95 min-w-28 border-2 border-transparent h-11 sm:h-14"
              >
                Join Us
              </Link>

              <Link
                href="#"
                className="w-auto inline-flex items-center justify-center rounded-xl border-2 border-white/40 bg-transparent box-border px-5 py-2.5 sm:px-8 sm:py-4 text-xs sm:text-base font-bold text-white transition hover:border-white hover:bg-white/5 active:scale-95 min-w-32 sm:min-w-44 h-11 sm:h-14"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="relative lg:col-span-5 xl:col-span-6 flex items-center justify-center lg:justify-end overflow-visible mt-6 sm:mt-8 lg:mt-0 px-4 sm:px-0 z-10 animate-[heroIn_950ms_cubic-bezier(0.22,1,0.36,1)_both] [animation-delay:160ms] motion-reduce:animate-none">
            <Image
              src="/first_image.png"
              alt="Students learning with Al-Birr Schools"
              width={1000}
              height={1000}
              className="w-full h-auto object-contain object-center"
              priority
            />
          </div>
        </div>

        {/* Quote Bar (merged into Hero so it is part of the initial viewport section) */}
        <div className="relative z-20 flex justify-center animate-[heroIn_900ms_cubic-bezier(0.22,1,0.36,1)_both] [animation-delay:320ms] motion-reduce:animate-none">
          <div className="relative w-full max-w-275 min-h-15 md:min-h-21 lg:min-h-22.5 flex items-center justify-center px-8 py-4">
            <Image
              src="/Rectangle.png"
              alt="Quote Background"
              fill
              className="object-fill rounded-xl"
              sizes="(max-width: 768px) 100vw, 1100px"
              priority
            />

            <div className="relative z-10 flex flex-col items-center justify-center text-center">
              <h2 className="text-sm font-medium tracking-tight text-[#4c3957] leading-relaxed md:text-base lg:text-lg">
                My Lord, &quot;Increase me in Knowledge&quot;
                <span
                  className="block mt-1 text-sm font-bold md:inline md:mt-0 md:ml-3 lg:text-base text-[#7c4f82]"
                  dir="rtl"
                >
                  (وَقُلْ رَّبِّ زِدْنِي عِلْمًا)
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
