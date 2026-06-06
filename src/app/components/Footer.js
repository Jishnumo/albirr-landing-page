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
                <Link href="/pages/academics?tab=curriculum" className="hover:text-white transition-colors">
                  Curriculum
                </Link>
              </li>
              <li>
                <Link href="/pages/academics?tab=academics" className="hover:text-white transition-colors">
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
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white transition-all duration-300 group-hover:bg-white/15 group-hover:border-white/30 group-hover:scale-110 shrink-0">
                  <Phone className="w-5 h-5 text-white shrink-0" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                  +91 9061 559 827
                </span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4 group w-full sm:w-auto justify-center sm:justify-start">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white transition-all duration-300 group-hover:bg-white/15 group-hover:border-white/30 group-hover:scale-110 mt-0.5 shrink-0">
                  <MapPin className="w-5 h-5 text-white shrink-0" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-400 group-hover:text-white transition-colors max-w-44 sm:max-w-40 md:max-w-50">
                  Varakkal Complex, Koya Road, Puthiyangadi, Calicut-21, Kerala, India
                </span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 md:gap-4 group w-full sm:w-auto justify-center sm:justify-start">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white transition-all duration-300 group-hover:bg-white/15 group-hover:border-white/30 group-hover:scale-110 shrink-0">
                  <Mail className="w-5 h-5 text-white shrink-0" />
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
            <div className="flex gap-2.5 sm:gap-3 justify-center sm:justify-start flex-wrap">
              {[
                { name: "Facebook", url: "https://facebook.com", domain: "facebook.com" },
                { name: "Instagram", url: "https://instagram.com", domain: "instagram.com" },
                { name: "X", url: "https://x.com", domain: "x.com" }
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/15 hover:border-white/30 hover:scale-110 active:scale-95 transition-all duration-300"
                  title={`Follow us on ${social.name}`}
                >
                  <img
                    src={`https://www.google.com/s2/favicons?sz=64&domain=${social.domain}`}
                    alt={social.name}
                    className="w-5.5 h-5.5 object-contain rounded-sm"
                  />
                </Link>
              ))}
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
