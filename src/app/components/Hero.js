"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="relative overflow-hidden px-4 md:px-12 pt-0 pb-16 md:pb-24 lg:pb-32">
      {/* Background Shape Image - Moved to leftmost upper corner */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero shape 5.png"
          alt="Hero background shape"
          fill
          className="object-cover object-left-top"
          priority
        />
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -right-32 -top-32 h-[300px] w-[300px] md:h-[600px] md:w-[600px] rounded-full bg-[#F05B28]/30 blur-[60px] md:blur-[100px]" />
        <div className="absolute right-20 top-32 h-[250px] w-[250px] md:h-[500px] md:w-[500px] rounded-full bg-[#9C4A9C]/25 blur-[60px] md:blur-[100px]" />
        <div className="absolute -left-40 top-20 h-[225px] w-[225px] md:h-[450px] md:w-[450px] rounded-full bg-[#36E1FF]/15 blur-[60px] md:blur-[100px]" />
      </div>

      {/* Navbar - Pulled tightly to top */}
      <div className="relative z-[100] mx-auto max-w-7xl flex items-center justify-between pt-4 pb-6 md:pt-4 md:pb-8 lg:pt-6 lg:pb-10">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 relative z-[101]">
          <div className="relative h-20 w-56 sm:h-24 sm:w-64 md:h-28 md:w-72 lg:h-32 lg:w-80 rounded-lg flex-shrink-0">
            <Image
              src="/newlogo 1.png"
              alt="AL-BIRR Schools Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Menu Items */}
        <div className="hidden xl:flex items-center gap-4 xl:gap-8">
          <Link href="/" className="text-sm font-medium text-white/85 hover:text-white transition">Home</Link>
          <Link href="/pages/about" className="text-sm font-medium text-white/85 hover:text-white transition">About</Link>
          <Link href="#" className="text-sm font-medium text-white/85 hover:text-white transition">Academics</Link>
          <Link href="#" className="text-sm font-medium text-white/85 hover:text-white transition">Administration</Link>
          <Link href="#" className="text-sm font-medium text-white/85 hover:text-white transition">Media</Link>
        </div>

        {/* Desktop Right CTA */}
        <div className="hidden xl:flex items-center gap-4 xl:gap-6">
          <Link href="/#contact" className="text-sm font-medium text-white/85 hover:text-white transition">
            Contact
          </Link>
          <Link
            href="#"
            className="group flex items-center gap-2 rounded-lg bg-[#9C4A9C] px-4 md:px-5 py-2 md:py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-95"
          >
            Student Portal
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="relative z-[101] flex xl:hidden p-2 items-center justify-center text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[110] flex flex-col items-center justify-center bg-[#0f1f42] xl:hidden animate-in fade-in duration-300">
          <button 
            className="absolute top-6 right-6 p-2 text-white/80 hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="h-8 w-8" />
          </button>
          
          <div className="flex flex-col items-center gap-8 text-center px-6 w-full max-w-sm">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-2xl font-normal text-white hover:text-[#36E1FF] transition">Home</Link>
            <Link href="/pages/about" onClick={() => setIsMenuOpen(false)} className="text-2xl font-normal text-white hover:text-[#36E1FF] transition">About</Link>
            <Link href="#" onClick={() => setIsMenuOpen(false)} className="text-2xl font-normal text-white hover:text-[#36E1FF] transition">Academics</Link>
            <Link href="#" onClick={() => setIsMenuOpen(false)} className="text-2xl font-normal text-white hover:text-[#36E1FF] transition">Administration</Link>
            <Link href="#" onClick={() => setIsMenuOpen(false)} className="text-2xl font-normal text-white hover:text-[#36E1FF] transition">Media</Link>
            <div className="h-px w-24 bg-white/20 my-4" />
            <Link href="/#contact" onClick={() => setIsMenuOpen(false)} className="text-xl font-normal text-white/80 hover:text-white transition">Contact</Link>
            <Link
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#9C4A9C] px-8 py-4 text-lg font-normal text-white shadow-xl transition-all active:scale-95"
            >
              Student Portal
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      )}

      {/* Hero Content - Pulled tightly upwards towards navbar */}
      <div className="relative z-10 mx-auto max-w-7xl mt-8 md:-mt-8 lg:-mt-20">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center space-y-4 sm:space-y-8 text-left z-20">
            <h1 className="text-[22px] sm:text-[36px] md:text-[46px] lg:text-[52px] font-bold leading-[1.2] text-white whitespace-nowrap">
              Shaping Future <br />
              Generations with Faith <br />
              and Knowledge
            </h1>
            <p className="max-w-md text-xs leading-relaxed text-white/85 sm:text-lg">
              Delivering quality Islamic education through 350+ branches worldwide.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-start gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Link
                href="#"
                className="w-full sm:w-auto relative inline-flex items-center justify-center rounded-xl bg-[#9C4A9C] px-6 py-2.5 sm:px-10 sm:py-4 text-xs sm:text-base font-bold text-white shadow-[0_10px_40px_rgba(156,74,156,0.3)] transition hover:brightness-125 active:scale-95 min-w-[140px] sm:min-w-[200px]"
              >
                Join Us
              </Link>
              <Link
                href="#"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border-2 border-white/40 bg-transparent px-6 py-2.5 sm:px-10 sm:py-4 text-xs sm:text-base font-bold text-white transition hover:border-white hover:bg-white/5 active:scale-95 min-w-[140px] sm:min-w-[200px]"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="relative lg:col-span-5 xl:col-span-6 flex items-center justify-center lg:justify-end overflow-visible mt-6 sm:mt-8 lg:mt-0 px-4 sm:px-0 z-10">
            <div className="relative w-full aspect-square max-w-[500px] md:max-w-[800px] mx-auto scale-[1.4] sm:scale-100 lg:mx-0 lg:scale-110 lg:translate-x-2 xl:translate-x-0 xl:-ml-24 xl:scale-125 transform transition-transform">
              <Image
                src="/first_image.png"
                alt="Students learning with Al-Birr Schools"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
