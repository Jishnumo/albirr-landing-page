"use client";
import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

const Footer = ({ className = "bg-[#1a0f3c]" }) => {
  return (
    <footer
      className={`${className} text-white pt-24 relative overflow-hidden`}
    >
      {/* Background Shape Overlay */}
      <div className="absolute inset-x-0 top-0 h-full w-full z-0 opacity-100">
        <Image
          src="/hero shape 7.png"
          alt="Footer background shape"
          fill
          className="object-cover"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 relative z-10 pt-8 sm:pt-12 md:pt-16 lg:pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 md:gap-16 mb-16 sm:mb-20">
          {/* Logo & Brand Column */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="mb-6 sm:mb-8 lg:mb-10">
              <Image
                src="/newlogo 1.png"
                alt="Albirr Logo"
                width={140}
                height={60}
                className="h-auto w-40 sm:w-48 lg:w-64 brightness-200 contrast-200"
              />
            </div>
            {/* <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xs">
              Empowering the next generation with balanced education and strong
              Islamic values.
            </p> */}
          </div>

          {/* Quick Links Column */}
          <div className="col-span-1 flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="text-sm sm:text-base md:text-lg font-bold mb-3 sm:mb-4 md:mb-8 tracking-tight text-white uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3 md:space-y-4 text-gray-400 text-xs sm:text-sm font-medium">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-white transition-colors">
                  Admission
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/pages/media?tab=gallery" className="hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/pages/media?tab=news" className="hover:text-white transition-colors">
                  News & Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links Column */}
          <div className="col-span-1 flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="text-sm sm:text-base md:text-lg font-bold mb-3 sm:mb-4 md:mb-8 tracking-tight text-white uppercase">
              Useful Links
            </h4>
            <ul className="space-y-2 sm:space-y-3 md:space-y-4 text-gray-400 text-xs sm:text-sm font-medium">
              <li>
                <Link href="/pages/academics" className="hover:text-white transition-colors">
                  Curriculum
                </Link>
              </li>
              <li>
                <Link href="/pages/academics" className="hover:text-white transition-colors">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/pages/infrastructure" className="hover:text-white transition-colors">
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/pages/ourschools" className="hover:text-white transition-colors">
                  Albirr Schools
                </Link>
              </li>
              <li>
                <Link href="/pages/administration" className="hover:text-white transition-colors">
                  Albirr Members
                </Link>
              </li>
              <li>
                <Link href="/pages/ourschools" className="hover:text-white transition-colors">
                  Our Schools
                </Link>
              </li>
            </ul>
          </div>

          {/* Get In Touch Column */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="text-sm sm:text-base md:text-lg font-bold mb-3 sm:mb-4 md:mb-8 tracking-tight text-white uppercase">
              Get In Touch
            </h4>
            <ul className="space-y-2 sm:space-y-3 md:space-y-5 flex flex-col items-center sm:items-start w-full">
              <li className="flex items-center gap-2 sm:gap-3 md:gap-4 group w-full sm:w-auto justify-center sm:justify-start">
                <div className="flex h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white transition-colors group-hover:bg-[#36E1FF]/20 shrink-0">
                  <Phone className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                  +91 9061 559 827
                </span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4 group w-full sm:w-auto justify-center sm:justify-start">
                <div className="flex h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white transition-colors group-hover:bg-[#36E1FF]/20 mt-0.5 shrink-0">
                  <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-400 group-hover:text-white transition-colors max-w-44 sm:max-w-40 md:max-w-50">
                  4517 Washington Ave. Manchester, Kentucky 39495
                </span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 md:gap-4 group w-full sm:w-auto justify-center sm:justify-start">
                <div className="flex h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white transition-colors group-hover:bg-[#36E1FF]/20 shrink-0">
                  <Mail className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                  schoolalbirr@gmail.com
                </span>
              </li>
            </ul>
          </div>

          {/* Follow Us Column */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 flex flex-col items-center sm:items-start">
            <h4 className="text-sm sm:text-base md:text-lg font-bold mb-3 sm:mb-4 md:mb-8 tracking-tight text-white uppercase">
              Follow Us
            </h4>
            <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
              <Link
                href="#"
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-[#3b5998] transition-all"
              >
                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5 fill-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-[#E1306C] transition-all"
              >
                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5 fill-none stroke-white"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
              <Link
                href="#"
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-[#1DA1F2] transition-all"
              >
                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5 fill-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Repeating Logo Bottom Bar - Full Screen Width */}
      <div className="relative h-20 sm:h-24 md:h-28 lg:h-32 mt-8 sm:mt-12 mb-2 sm:mb-4 overflow-hidden select-none pointer-events-none w-screen left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-8 sm:gap-16 md:gap-24 lg:gap-28 flex-nowrap min-w-max animate-scroll">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="shrink-0">
              <Image
                src="/logoFooter.png"
                alt=""
                width={120}
                height={120}
                className="h-16 sm:h-16 md:h-20 lg:h-24 w-auto"
                quality={100}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 relative z-10">
        <div className="py-6 sm:py-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 sm:gap-4">
            <p className="text-gray-500 text-xs sm:text-sm font-medium text-center sm:text-left order-2 sm:order-1">
              &copy; {new Date().getFullYear()} Albirr Schools. All Rights
              Reserved.
            </p>
            <p className="text-gray-500 text-xs sm:text-sm font-medium text-center order-1 sm:order-2">
              Made by Hult Team
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
