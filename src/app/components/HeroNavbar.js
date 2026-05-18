"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function HeroNavbar({ onMobileMenuToggle, isMenuOpen }) {
  return (
    <div className="relative z-100 mx-auto flex items-center justify-between gap-3 pb-6 md:pt-0 md:pb-8 lg:pt-0 lg:pb-10">
      {/* Logo */}
      <Link href="/" className="min-w-0 shrink relative z-101">
        <div className="relative h-16 w-40 sm:h-24 sm:w-64 md:h-28 md:w-72 lg:h-32 lg:w-80 rounded-lg">
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
        <Link
          href="/"
          className="text-sm font-medium text-white/85 hover:text-white transition"
        >
          Home
        </Link>
        <Link
          href="/pages/about"
          className="text-sm font-medium text-white/85 hover:text-white transition"
        >
          About
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-white/85 hover:text-white transition"
        >
          Academics
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-white/85 hover:text-white transition"
        >
          Administration
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-white/85 hover:text-white transition"
        >
          Media
        </Link>
      </div>

      {/* Desktop Right CTA */}
      <div className="hidden xl:flex items-center gap-4 xl:gap-6">
        <Link
          href="/#contact"
          className="text-sm font-medium text-white/85 hover:text-white transition"
        >
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
        className="relative z-101 flex shrink-0 xl:hidden p-2 items-center justify-center text-white"
        onClick={onMobileMenuToggle}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        type="button"
      >
        {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
      </button>
    </div>
  );
}
