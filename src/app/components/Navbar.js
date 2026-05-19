"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="relative z-50 border-b border-white/10 bg-gradient-to-br from-[#0c2557]/80 via-[#1d3a7a]/80 to-[#0f1f42]/80 px-6 py-3 backdrop-blur-md md:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
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

        {/* Right CTA */}
        <div className="flex items-center gap-6">
          <Link href="/pages/about" className="text-sm font-medium text-white/85 hover:text-white transition">
            About
          </Link>
          <Link href="/#contact" className="text-sm font-medium text-white/85 hover:text-white transition">
            Contact
          </Link>
          <Link
            href="#"
            className="group flex items-center gap-2 rounded-lg bg-[#9C4A9C] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-95"
          >
            Student Portal
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
