"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X, BookOpen, Target, Compass, Building, User } from "lucide-react";
import Footer from "../../components/Footer";

const InfrastructurePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = [
    { id: "about", label: "About", path: "/pages/about", icon: BookOpen },
    { id: "mission", label: "Mission & Vision", path: "/pages/mission", icon: Target },
    { id: "objectives", label: "Objectives", path: "/pages/objectives", icon: Compass },
    { id: "infrastructure", label: "Infrastructure", path: "/pages/infrastructure", icon: Building },
    { id: "chairman", label: "Chairman's Message", path: "/pages/chairmansmessage", icon: User },
  ];

  return (
    <div className="relative min-h-screen bg-[#0f1f42] text-white flex flex-col font-sans overflow-hidden">

      {/* Full-page background photo — about_albirr1.png */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/about_albirr1.png"
          alt="Albirr Background"
          fill
          className="object-cover object-center md:object-right-top"
          priority
        />
      </div>

      {/* Navbar */}
      <header className="relative z-50 mx-auto w-full max-w-none px-4 sm:px-6 md:px-8 xl:px-12 pt-4 pb-6 md:pt-6 lg:pt-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 relative z-[101]">
            <div className="relative h-16 w-48 sm:h-20 sm:w-56 md:h-24 md:w-64 lg:h-28 lg:w-72">
              <Image
                src="/newlogo 1.png"
                alt="AL-BIRR Schools Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-8">
            <Link href="/" className="text-sm font-semibold text-white/90 hover:text-white transition">Home</Link>
            <Link href="/pages/about" className="text-sm font-bold text-white border-b-2 border-white pb-1 transition">About</Link>
            <Link href="#" className="text-sm font-medium text-white/80 hover:text-white transition">Academics</Link>
            <Link href="#" className="text-sm font-medium text-white/80 hover:text-white transition">Administration</Link>
            <Link href="#" className="text-sm font-medium text-white/80 hover:text-white transition">Media</Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden xl:flex items-center gap-6">
            <Link href="/#contact" className="text-sm font-semibold text-white/90 hover:text-white transition">Contact</Link>
            <Link
              href="#"
              className="group flex items-center gap-2 rounded-lg bg-[#9C4A9C] px-5 py-2.5 text-sm font-bold text-white transition-all hover:brightness-110 active:scale-95 shadow-md shadow-[#9C4A9C]/20"
            >
              Student Portal
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-[101] flex xl:hidden p-2 text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0f1f42] xl:hidden animate-in fade-in duration-300">
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 p-2 text-white/85 hover:text-white focus:outline-none">
              <X className="h-8 w-8" />
            </button>
            <div className="flex flex-col items-center gap-8 text-center px-6 w-full max-w-sm">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-2xl font-normal text-white hover:text-[#36E1FF] transition">Home</Link>
              <Link href="/pages/about" onClick={() => setIsMenuOpen(false)} className="text-2xl font-semibold text-[#36E1FF] transition">About</Link>
              <Link href="#" onClick={() => setIsMenuOpen(false)} className="text-2xl font-normal text-white hover:text-[#36E1FF] transition">Academics</Link>
              <Link href="#" onClick={() => setIsMenuOpen(false)} className="text-2xl font-normal text-white hover:text-[#36E1FF] transition">Administration</Link>
              <Link href="#" onClick={() => setIsMenuOpen(false)} className="text-2xl font-normal text-white hover:text-[#36E1FF] transition">Media</Link>
              <div className="h-px w-24 bg-white/20 my-4" />
              <Link href="/#contact" onClick={() => setIsMenuOpen(false)} className="text-xl font-normal text-white/80 hover:text-white transition">Contact</Link>
              <Link href="#" onClick={() => setIsMenuOpen(false)} className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#9C4A9C] px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all active:scale-95">
                Student Portal <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-grow w-full max-w-none px-0 pt-4 md:pt-8 pb-0 flex flex-col justify-center">

        {/* Page Title */}
        <div className="mb-8 md:mb-12 text-left px-6 sm:px-8 md:px-10 xl:px-12 animate-in fade-in slide-in-from-bottom duration-700">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            About AlBirr
          </h1>
        </div>

        {/* Container — about_rectangle.png as the card background */}
        <div className="relative overflow-visible min-h-[520px] p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center mx-4 sm:mx-6 md:mx-8 xl:mx-12 rounded-2xl">

          {/* about_rectangle.png as the white card container background */}
          <div className="absolute inset-0 z-0 pointer-events-none w-full h-full">
            <img
              src="/about_rectangle.png"
              alt="Card background"
              className="w-full h-full object-fill opacity-100 brightness-100 rounded-2xl"
            />
          </div>

          {/* Grid: sidebar + content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Sidebar */}
            <div className="lg:col-span-3 flex flex-col justify-start">
              <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-none">
                {tabs.map((tab) => {
                  const isActive = tab.id === "infrastructure";
                  return (
                    <Link
                      key={tab.id}
                      href={tab.path}
                      className={`flex items-center px-6 py-3 rounded-xl lg:rounded-full text-left text-sm md:text-base font-bold whitespace-nowrap lg:whitespace-normal transition-all duration-300 select-none ${isActive
                          ? "bg-black/[0.08] border border-black/5 text-gray-900 shadow-sm font-extrabold"
                          : "text-gray-600 hover:text-gray-950 hover:bg-black/[0.03] border border-transparent"
                        }`}
                    >
                      <span>{tab.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Infrastructure Content */}
            <div className="lg:col-span-9 flex flex-col justify-center">
              <div className="space-y-6 text-left text-[0.72rem] sm:text-[0.78rem] lg:text-[0.82rem]">

                <div className="space-y-1.5">
                  <h2 className="text-base sm:text-lg font-extrabold text-gray-950 tracking-tight">INFRASTRUCTURE</h2>
                  <p className="text-gray-700 font-normal leading-snug">At Albirr we provide a totally balanced environment focused not only on academic progress of the child but also their physical, social and emotional development. All our centres boasts of state of the art infrastructure with libraries, laboratories for computer and science, play area and well equipped classrooms. We provide a conducive environment for children to play as well as explore and learn. The classrooms are very spacious and well-lit and ventilated keeping in mind the comfort and free movement of the children. Our smart and Hi-tech classrooms are equipped with Projector, Television, White board, Green board, Pin board etc. They are painted with bright colours and adorned with various colourful teaching and learning aids for better learning experiences.</p>
                  <p className="text-gray-700 font-normal leading-snug">All the required equipment are available in the school premises to encourage play and the spirit of sports in children. All our centres have a dedicated and spacious area for children to play. This area is equipped with state-of-the-art play equipment and learning collaterals ensuring their safety and security.</p>
                </div>

                <div className="space-y-1.5">
                  <h2 className="text-base sm:text-lg font-extrabold text-gray-950 tracking-tight">OUR STRUCTURE</h2>
                  <p className="text-gray-700 font-normal leading-snug">Albirr provides a holistic education to children from pre-primary to primary grades based on the teachings of Islam as well as an Activity-based curriculum.</p>
                  <p className="text-gray-700 font-normal leading-snug">Pre-Primary education lays the foundation of a child's academic and social life. Hence to build a strong foundation in the early years of a child we use the right mix of instruction based and learner centric methods along with hands on activities for their academic success. Our program aims to develop the cognitive skills, fine and gross motor skills, emotional and social development, spiritual development and communication skills, other life skills and creativity in children.</p>
                  <p className="text-gray-700 font-normal leading-snug">The Primary School follows a curriculum which is designed, according to international standards which equally emphasizes on the mastery of languages, inculcation of good moral and ethical values, development of good physical health and on academics. The curriculum lays emphasis on the development of a balanced and holistic Islamic personality. The school's curriculum strives to an integrated programme where Islamic teachings and values are imbedded across all subject areas. The school is committed to transforming children to become strong and highly educated Muslims for whom Islam is a complete way of life. Meanwhile we ensure inculcating national and democratic values that engage him/her to live in a plural society.</p>
                </div>

                <div className="space-y-1.5">
                  <h2 className="text-base sm:text-lg font-extrabold text-gray-950 tracking-tight">OUR BRAND</h2>
                  <p className="text-gray-700 font-normal leading-snug">Albirr schools is one of the fastest growing preschool chains in the state of Kerala, Karnataka and Oman. Owing to our scientifically researched and result-oriented approach of teaching, committed and strong value upbringing Albirr schools has been able to reach this stage of success. The success of Albirr is also due to its trained, qualified and committed team.</p>
                </div>

                <div className="space-y-1.5">
                  <h2 className="text-base sm:text-lg font-extrabold text-gray-950 tracking-tight">GOVERNANCE AND AFFILIATION</h2>
                  <p className="text-gray-700 font-normal leading-snug">The Albirr Team constitutes a governing body in order to maintain the required standards in all their centres. This governing body coordinates with the Administration and the Academic faculty to provide the services required for the smooth running of the centres of Albirr Schools. Albirr also provides other facilities like teacher's training, monitoring, distribution of study materials, uniforms and other equipment.</p>
                  <p className="text-gray-700 font-normal leading-snug">An inspection team appointed by the governing body inspects the infrastructure and academic progress of the centres. The affiliation is granted or upgraded only on the basis of the report provided by this team. An award is also offered to those who achieve benchmark setup by Albirr team which keeps the quality and functionality. If any laxity in adhering to any instruction is found on further inspections, the body takes action against the school which could also lead to the cancellation of their affiliation.</p>
                </div>

              </div>

            </div>

          </div>
        </div>

      </main>

      <Footer className="bg-transparent" />
    </div>
  );
};

export default InfrastructurePage;
