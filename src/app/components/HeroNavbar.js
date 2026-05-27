"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function HeroNavbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Robust path-matching to detect light-themed vs dark-themed pages
  const isLightPage = [
    "ourschools",
    "mission",
    "objectives",
    "administration"
  ].some(route => pathname?.includes(route));

  const isScrolledAndLight = isScrolled && isLightPage;

  useEffect(() => {
    let active = true;
    const checkScroll = () => {
      const scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (scrollPos > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      if (active) {
        requestAnimationFrame(checkScroll);
      }
    };
    
    requestAnimationFrame(checkScroll);
    window.addEventListener("scroll", checkScroll, { passive: true });
    
    return () => {
      active = false;
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  // Handle click on "Contact" link
  const handleContactClick = (e) => {
    setIsMenuOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      const element = document.getElementById("contact");
      if (element) {
        if (window.lenis) {
          window.lenis.scrollTo(element, { duration: 1.2 });
        } else {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  // Scroll to #contact on subpage redirect once home page is loaded
  useEffect(() => {
    if (pathname === "/") {
      let attempts = 0;
      const interval = setInterval(() => {
        const hash = window.location.hash;
        if (hash === "#contact") {
          const element = document.getElementById("contact");
          if (element) {
            clearInterval(interval);
            setTimeout(() => {
              if (window.lenis) {
                window.lenis.scrollTo(element, { duration: 1.2 });
              } else {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }, 100);
          }
        }
        attempts++;
        if (attempts > 30) { // Max 3 seconds
          clearInterval(interval);
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [pathname]);

  // Section detector so that parent menu items "pop" correctly based on active subroutes
  const isLinkActive = (path) => {
    if (!pathname) return false;
    
    if (path === "/") {
      return pathname === "/";
    }
    
    if (path === "/pages/about") {
      const aboutRoutes = [
        "/pages/about",
        "/pages/mission",
        "/pages/objectives",
        "/pages/infrastructure",
        "/pages/chairmansmessage"
      ];
      return aboutRoutes.some(route => pathname === route || pathname.startsWith(route + "/"));
    }
    
    return pathname === path || pathname.startsWith(path + "/");
  };

  // Fine-tuned typography and active colors to exactly replicate the provided cropped screenshot
  const getLinkClass = (path) => {
    const isActive = isLinkActive(path);
    
    if (isScrolledAndLight) {
      return `text-[0.90rem] tracking-wide transition-all duration-300 relative py-2 ${
        isActive 
          ? "text-[#0f1f42] font-bold after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#0f1f42] after:rounded-full" 
          : "text-slate-700/90 hover:text-[#0f1f42] font-semibold"
      }`;
    }
    return `text-[0.90rem] tracking-wide transition-all duration-300 relative py-2 ${
      isActive 
        ? "text-white font-bold after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-white after:rounded-full" 
        : "text-white/90 hover:text-white font-semibold"
    }`;
  };

  const toggleBtnClass = isScrolledAndLight ? "text-slate-800" : "text-white";

  // Dynamic styling of the navbar container
  const getNavbarClasses = () => {
    if (isScrolled) {
      if (isLightPage) {
        return "bg-white/80 backdrop-blur-md shadow-md border-slate-200/80 py-2.5 sm:py-3 px-4 sm:px-6 md:px-8 xl:px-12";
      }
      if (pathname?.includes("chairmansmessage")) {
        return "bg-[#0b0830]/80 backdrop-blur-md shadow-lg border-white/5 py-2.5 sm:py-3 px-4 sm:px-6 md:px-8 xl:px-12";
      }
      return "bg-[#0f1f42]/80 backdrop-blur-md shadow-lg border-white/10 py-2.5 sm:py-3 px-4 sm:px-6 md:px-8 xl:px-12";
    } else {
      if (isLightPage) {
        return "bg-white/0 backdrop-blur-none border-transparent py-4 sm:py-5 px-4 sm:px-6 md:px-8 xl:px-12";
      }
      if (pathname?.includes("chairmansmessage")) {
        return "bg-[#0b0830]/0 backdrop-blur-none border-transparent py-4 sm:py-5 px-4 sm:px-6 md:px-8 xl:px-12";
      }
      return "bg-[#0f1f42]/0 backdrop-blur-none border-transparent py-4 sm:py-5 px-4 sm:px-6 md:px-8 xl:px-12";
    }
  };

  // Dynamic styling of the mobile drawer background
  const drawerBgClass = pathname?.includes("chairmansmessage")
    ? "bg-[#0b0830]"
    : isLightPage
      ? "bg-white text-slate-800"
      : "bg-[#0f1f42] text-white";

  const drawerLinkClass = isLightPage
    ? "text-2xl font-normal text-slate-700 hover:text-[#0f1f42] transition"
    : "text-2xl font-normal text-white hover:text-[#36E1FF] transition";

  const drawerCloseBtnClass = isLightPage ? "text-slate-500 hover:text-slate-800" : "text-white/80 hover:text-white";

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-500 ease-in-out border-b ${getNavbarClasses()}`}>
        <div className="mx-auto flex max-w-[1380px] w-full items-center justify-between gap-6 sm:gap-8 lg:gap-12">
          {/* Logo */}
          <Link href="/" className="min-w-0 shrink relative z-[101]">
            <div
              className={`relative rounded-lg transition-all duration-500 ${
                isScrolled
                  ? "h-12 w-32 sm:h-15 sm:w-44 md:h-18 md:w-52 lg:h-20 lg:w-60"
                  : "h-14 w-38 sm:h-18 sm:w-52 md:h-22 md:w-64 lg:h-24 lg:w-72"
              }`}
            >
              <Image
                src="/newlogo 1.png"
                alt="AL-BIRR Schools Logo"
                fill
                className={`object-contain object-left transition-all duration-500 ${
                  isScrolledAndLight ? "brightness-50 contrast-150" : ""
                }`}
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu Items - Exactly replicated gap spacing (gap-6 xl:gap-7 2xl:gap-8) */}
          <div className="hidden xl:flex items-center gap-6 xl:gap-7 2xl:gap-8">
            <Link href="/" className={getLinkClass("/")}>
              Home
            </Link>
            <Link href="/pages/about" className={getLinkClass("/pages/about")}>
              About
            </Link>
            <Link href="/pages/academics" className={getLinkClass("/pages/academics")}>
              Academics
            </Link>
            <Link href="/pages/administration" className={getLinkClass("/pages/administration")}>
              Administration
            </Link>
            <Link href="/pages/media?tab=gallery" className={getLinkClass("/pages/media")}>
              Media
            </Link>
            <Link href="/pages/ourschools" className={getLinkClass("/pages/ourschools")}>
              Our Schools
            </Link>
          </div>

          {/* Desktop Right CTA - Replicated exact same space, font, and size for Contact */}
          <div className="hidden xl:flex items-center gap-6 xl:gap-7 2xl:gap-8">
            <a href="/#contact" onClick={handleContactClick} className={getLinkClass("/#contact")}>
              Contact
            </a>
            <Link
              href="#"
              className="group flex items-center gap-2 rounded-lg bg-[#9C4A9C] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-95 shadow-lg shadow-[#9C4A9C]/20"
            >
              Student Portal
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`relative z-[101] flex shrink-0 xl:hidden p-2 items-center justify-center transition-colors duration-300 ${toggleBtnClass}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            type="button"
            suppressHydrationWarning
          >
            {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      <div
        className={`fixed inset-0 z-[110] xl:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMenuOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#0b0830]/70 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Drawer content */}
        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm shadow-2xl transition-transform duration-300 ease-out flex flex-col items-start justify-center gap-8 px-8 ${drawerBgClass} ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className={`absolute top-6 right-6 p-2 ${drawerCloseBtnClass}`}
            onClick={() => setIsMenuOpen(false)}
            type="button"
            aria-label="Close menu"
          >
            <X className="h-8 w-8" />
          </button>
          
          <Link href="/" onClick={() => setIsMenuOpen(false)} className={drawerLinkClass}>Home</Link>
          <Link href="/pages/about" onClick={() => setIsMenuOpen(false)} className={drawerLinkClass}>About</Link>
          <Link href="/pages/academics" onClick={() => setIsMenuOpen(false)} className={drawerLinkClass}>Academics</Link>
          <Link href="/pages/administration" onClick={() => setIsMenuOpen(false)} className={drawerLinkClass}>Administration</Link>
          <Link href="/pages/media?tab=gallery" onClick={() => setIsMenuOpen(false)} className={drawerLinkClass}>Media</Link>
          <Link href="/pages/ourschools" onClick={() => setIsMenuOpen(false)} className={drawerLinkClass}>Our Schools</Link>
          
          <div className="h-px w-24 bg-white/20" />
          
          <a href="/#contact" onClick={handleContactClick} className={isLightPage ? "text-xl font-normal text-slate-600 hover:text-[#0f1f42] transition" : "text-xl font-normal text-white/80 hover:text-white transition"}>Contact</a>
          <Link
            href="#"
            onClick={() => setIsMenuOpen(false)}
            className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#9C4A9C] px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-[#9C4A9C]/30 ring-1 ring-white/10 transition-all hover:brightness-110 active:scale-95"
          >
            Student Portal
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}
