"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-visible px-6 pt-0 pb-16 md:px-12 md:pb-24 lg:pb-32">
      {/* Background Shape Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero shape 5.png"
          alt="Hero background shape"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -right-32 -top-32 h-[600px] w-[600px] rounded-full bg-[#F05B28]/30 blur-[100px]" />
        <div className="absolute right-20 top-32 h-[500px] w-[500px] rounded-full bg-[#9C4A9C]/25 blur-[100px]" />
        <div className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-[#36E1FF]/15 blur-[100px]" />
      </div>

      {/* Navbar */}
      <div className="relative z-50 mx-auto max-w-7xl flex items-center justify-between -mt-6 md:-mt-12 pb-0">
        {/* Logo */}
        <Link href="#" className="flex-shrink-0">
          <div className="relative h-48 w-48 md:h-80 md:w-80 rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src="/newlogo 1.png"
              alt="AL-BIRR Schools Logo"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        {/* Menu Items */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-sm font-medium text-white/85 hover:text-white transition">Home</Link>
          <Link href="#" className="text-sm font-medium text-white/85 hover:text-white transition">About</Link>
          <Link href="#" className="text-sm font-medium text-white/85 hover:text-white transition">Academics</Link>
          <Link href="#" className="text-sm font-medium text-white/85 hover:text-white transition">Administration</Link>
          <Link href="#" className="text-sm font-medium text-white/85 hover:text-white transition">Media</Link>
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-4 md:gap-6">
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
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl -mt-8 md:-mt-16 lg:-mt-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
            <h1 className="text-5xl font-black leading-[1.1] tracking-tight text-white sm:text-7xl lg:text-7xl">
              Shaping Future <br />
              Generations with <br />
              Faith and Knowledge
            </h1>
            <p className="max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
              Delivering quality Islamic education through 350+ branches worldwide.
            </p>

            <div className="flex flex-wrap justify-center gap-4 lg:justify-start pt-4">
              <Link
                href="#"
                className="relative inline-flex items-center rounded-full bg-[#9C4A9C] px-8 py-3 text-sm font-bold text-white shadow-[0_10px_40px_rgba(156,74,156,0.3)] transition hover:brightness-125 active:scale-95"
              >
                Join Us
              </Link>
              <Link
                href="#"
                className="inline-flex items-center rounded-full border-2 border-white/40 bg-transparent px-8 py-3 text-sm font-bold text-white transition hover:border-white hover:bg-white/5 active:scale-95"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full aspect-square max-w-[650px] lg:-mr-12">
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
