"use client";
import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

const Footer = ({ className = "bg-[#0f1f42]" }) => {
  return (
    <footer className={`${className} text-white pt-24 relative overflow-hidden`}>
      {/* Background Shape Overlay */}
      <div className="absolute inset-x-0 top-0 h-full w-full z-0 opacity-100">
        <Image
          src="/hero shape 7.png"
          alt="Footer background shape"
          fill
          className="object-cover"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        <div className="grid gap-16 lg:grid-cols-12 mb-20">
          {/* Logo & Brand Column */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="mb-6">
              <Image
                src="/newlogo 1.png"
                alt="Albirr Logo"
                width={120}
                height={40}
                className="brightness-200 contrast-200"
              />
            </div>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-xs">
              Empowering the next generation with balanced education and strong
              Islamic values.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <h4 className="text-base md:text-lg font-bold mb-4 md:mb-8 tracking-tight text-white">
              Quick Links
            </h4>
            <ul className="space-y-3 md:space-y-4 text-gray-400 text-xs md:text-sm font-medium">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Admission
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Downloads
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  News & Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links Column */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <h4 className="text-base md:text-lg font-bold mb-4 md:mb-8 tracking-tight text-white">
              Useful Links
            </h4>
            <ul className="space-y-3 md:space-y-4 text-gray-400 text-xs md:text-sm font-medium">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Curriculum
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Albirr Schools
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Albirr Members
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Our Schools
                </Link>
              </li>
            </ul>
          </div>

          {/* Get In Touch Column */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <h4 className="text-base md:text-lg font-bold mb-4 md:mb-8 tracking-tight text-white">
              Get In Touch
            </h4>
            <ul className="space-y-4 md:space-y-5 flex flex-col items-center lg:items-start">
              <li className="flex items-center gap-3 md:gap-4 group">
                <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white transition-colors group-hover:bg-[#36E1FF]/20">
                  <Phone className="h-3 w-3 md:h-4 md:w-4" />
                </div>
                <span className="text-xs md:text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                  +91 9061 559 827
                </span>
              </li>
              <li className="flex items-start gap-3 md:gap-4 group">
                <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white transition-colors group-hover:bg-[#36E1FF]/20 mt-1">
                  <MapPin className="h-3 w-3 md:h-4 md:w-4" />
                </div>
                <span className="text-xs md:text-sm font-medium text-gray-400 group-hover:text-white transition-colors max-w-[200px]">
                  4517 Washington Ave. Manchester, Kentucky 39495
                </span>
              </li>
              <li className="flex items-center gap-3 md:gap-4 group">
                <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white transition-colors group-hover:bg-[#36E1FF]/20">
                  <Mail className="h-3 w-3 md:h-4 md:w-4" />
                </div>
                <span className="text-xs md:text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                  schoolalbirr@gmail.com
                </span>
              </li>
            </ul>
          </div>

          {/* Follow Us Column */}
          <div className="lg:col-span-2 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h4 className="text-base md:text-lg font-bold mb-4 md:mb-8 tracking-tight text-white">
              Follow Us
            </h4>
            <div className="flex gap-4 justify-center lg:justify-start">
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-[#3b5998] transition-all"
              >
                <svg className="h-5 w-5 fill-white" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-[#E1306C] transition-all"
              >
                <svg
                  className="h-5 w-5 fill-none stroke-white"
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
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-[#1DA1F2] transition-all"
              >
                <svg className="h-4 w-4 fill-white" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Repeating Logo Bottom Bar */}
        <div className="relative h-24 mt-12 mb-0 overflow-hidden opacity-20 select-none pointer-events-none">
          <div className="absolute inset-0 flex items-center gap-12 flex-nowrap min-w-max animate-scroll">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-4 shrink-0">
                <Image
                  src="/newlogo 1.png"
                  alt=""
                  width={30}
                  height={30}
                  className="grayscale brightness-200"
                />
                <span className="text-lg md:text-2xl font-black whitespace-nowrap tracking-widest text-white">
                  ALBIRR SCHOOLS
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Final Copyright */}
        <div className="py-8 border-t border-white/5 text-center text-gray-500 text-xs font-medium">
          &copy; {new Date().getFullYear()} Albirr Schools. All Rights Reserved.
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
