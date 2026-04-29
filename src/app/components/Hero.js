"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="relative overflow-hidden px-4 md:px-12 pt-0 pb-16 md:pb-24 lg:pb-32">
      {/* Background Shape Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero shape 5.png"
          alt="Hero background shape"
          fill
          className="object-cover object-left-top"
          priority
        />
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="hero-orb-1 absolute -right-32 -top-32 h-[300px] w-[300px] md:h-[600px] md:w-[600px] rounded-full bg-[#F05B28]/30 blur-[60px] md:blur-[100px]" />
        <div className="hero-orb-2 absolute right-20 top-32 h-[250px] w-[250px] md:h-[500px] md:w-[500px] rounded-full bg-[#9C4A9C]/25 blur-[60px] md:blur-[100px]" />
        <div className="hero-orb-3 absolute -left-40 top-20 h-[225px] w-[225px] md:h-[450px] md:w-[450px] rounded-full bg-[#36E1FF]/15 blur-[60px] md:blur-[100px]" />
      </div>

      {/* Mobile-only decorative background layer (behind card) */}
      <div className="lg:hidden absolute inset-0 pointer-events-none overflow-hidden z-[1]">
        <div className="spin-ring absolute -top-10 -right-10 w-52 h-52 rounded-full border border-[#36E1FF]/15" />
        <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full border border-[#9C4A9C]/12" />
        <div className="absolute top-1/3 left-3 flex flex-col gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#36E1FF]/60" />
          <div className="w-1 h-1 rounded-full bg-[#9C4A9C]/50 ml-2" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#F05B28]/50" />
        </div>
      </div>

      {/* Navbar */}
      <div className="relative z-[100] mx-auto max-w-7xl flex items-center justify-between pt-4 pb-6 md:pt-4 md:pb-8 lg:pt-6 lg:pb-10">
        {/* Logo */}
        <Link href="#" className="flex-shrink-0 relative z-[101]">
          <div className="relative h-16 w-36 md:h-20 md:w-48 lg:h-24 lg:w-56 xl:h-32 xl:w-80 rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src="/newlogo 1.png"
              alt="AL-BIRR Schools Logo"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Menu Items */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-8">
          <Link href="#" className="text-sm font-medium text-white/85 hover:text-white transition">Home</Link>
          <Link href="#" className="text-sm font-medium text-white/85 hover:text-white transition">About</Link>
          <Link href="#" className="text-sm font-medium text-white/85 hover:text-white transition">Academics</Link>
          <Link href="#" className="text-sm font-medium text-white/85 hover:text-white transition">Administration</Link>
          <Link href="#" className="text-sm font-medium text-white/85 hover:text-white transition">Media</Link>
        </div>

        {/* Desktop Right CTA */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          <Link href="#" className="text-sm font-medium text-white/85 hover:text-white transition">
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
          className="relative z-[101] flex lg:hidden h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white backdrop-blur-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0f1f42]/95 backdrop-blur-xl lg:hidden animate-in fade-in duration-300">
          <div className="flex flex-col items-center gap-8 text-center px-6 w-full max-w-sm">
            <Link href="#" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-white hover:text-[#36E1FF] transition">Home</Link>
            <Link href="#" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-white hover:text-[#36E1FF] transition">About</Link>
            <Link href="#" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-white hover:text-[#36E1FF] transition">Academics</Link>
            <Link href="#" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-white hover:text-[#36E1FF] transition">Administration</Link>
            <Link href="#" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-white hover:text-[#36E1FF] transition">Media</Link>
            <div className="h-px w-24 bg-white/20 my-4" />
            <Link href="#" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-white/80 hover:text-white transition">Contact</Link>
            <Link
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#9C4A9C] px-8 py-4 text-lg font-bold text-white shadow-xl transition-all active:scale-95"
            >
              Student Portal
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          MOBILE HERO — Rounded-corner card, side-by-side layout
          DESKTOP HERO — Original full-width two-column layout
          ───────────────────────────────────────────────────────────── */}

      {/* ── MOBILE CARD (hidden on lg+) ── */}
      <div className="relative z-10 mx-auto max-w-7xl mt-4 lg:hidden">
        {/* Outer card with rounded corners, glass border, subtle glow */}
        <div className="relative rounded-[2rem] border border-white/15 bg-white/5 backdrop-blur-md overflow-visible shadow-[0_20px_80px_rgba(0,0,0,0.35)] p-5 sm:p-7">

          {/* Dot-grid texture inside card — top-right area */}
          <div className="dot-grid absolute top-0 right-0 w-1/2 h-full opacity-25 pointer-events-none" />

          {/* Inner accent gradient top-edge line */}
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#36E1FF]/40 to-transparent" />

          {/* ── Two-column: text LEFT / image RIGHT ── */}
          <div className="flex items-center gap-3">

            {/* LEFT — Text block */}
            <div className="flex-1 flex flex-col gap-3 min-w-0">
              <h1 className="hero-text-animate text-[2rem] sm:text-[2.4rem] font-black leading-[1.15] tracking-tight text-white">
                Shaping Future<br />
                Generations<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#36E1FF] to-[#9C4A9C]">
                  with Faith &amp;
                </span><br />
                Knowledge
              </h1>



              <p className="hero-text-animate text-[13px] sm:text-base leading-relaxed text-white/75 max-w-[220px]">
                Delivering quality Islamic education through 350+ branches worldwide.
              </p>

              {/* CTA Buttons — stacked on mobile card */}
              <div className="hero-text-animate flex flex-col gap-2 pt-1">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-xl bg-[#9C4A9C] px-5 py-3 text-sm sm:text-base font-bold text-white shadow-[0_8px_30px_rgba(156,74,156,0.35)] transition hover:brightness-125 active:scale-95"
                >
                  Join Us
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-xl border border-white/35 bg-transparent px-5 py-3 text-sm sm:text-base font-bold text-white transition hover:border-white hover:bg-white/5 active:scale-95"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* RIGHT — Floating hero image (overflows card intentionally) */}
            <div className="relative flex-shrink-0 w-[62%] sm:w-[58%] flex items-center justify-center -mr-6 sm:-mr-8">
              {/* Glow behind image */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-52 h-52 rounded-full bg-[#9C4A9C]/25 blur-3xl" />
              </div>
              <div className="hero-image-float relative w-full aspect-square scale-110">
                <Image
                  src="/first_image.png"
                  alt="Students learning with Al-Birr Schools"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>

          </div>

          {/* Inner accent gradient bottom-edge line */}
          <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#9C4A9C]/30 to-transparent" />
        </div>
      </div>

      {/* ── DESKTOP LAYOUT (hidden below lg) — original design unchanged ── */}
      <div className="hidden lg:block relative z-10 mx-auto max-w-7xl mt-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Left: Text */}
          <div className="flex flex-col justify-center space-y-8 lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[54px] font-black leading-[1.15] tracking-tight text-white max-w-[850px] mx-auto lg:mx-0">
              Shaping Future <br />
              Generations with Faith <br />
              and Knowledge
            </h1>
            <p className="max-w-md mx-auto lg:mx-0 text-base leading-relaxed text-white/85 sm:text-lg">
              Delivering quality Islamic education through 350+ branches worldwide.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 pt-4">
              <Link
                href="#"
                className="w-full sm:w-auto relative inline-flex items-center justify-center rounded-xl bg-[#9C4A9C] px-10 py-4 text-base font-bold text-white shadow-[0_10px_40px_rgba(156,74,156,0.3)] transition hover:brightness-125 active:scale-95 min-w-[200px]"
              >
                Join Us
              </Link>
              <Link
                href="#"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border-2 border-white/40 bg-transparent px-10 py-4 text-base font-bold text-white transition hover:border-white hover:bg-white/5 active:scale-95 min-w-[200px]"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right: Hero image */}
          <div className="relative flex items-center justify-end overflow-visible">
            <div className="hero-image-float relative w-full aspect-square max-w-[800px] -ml-24 scale-125 transform">
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
