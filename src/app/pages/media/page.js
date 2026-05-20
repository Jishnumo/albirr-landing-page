"use client";
import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import {
  ArrowUpRight,
  Image as ImageIcon,
  Newspaper,
  Download,
  Calendar,
  FileText,
  ChevronLeft,
  ChevronRight,
  Search,
  Eye,
  X
} from "lucide-react";
import Footer from "../../components/Footer";

// All 13 images from the public/gallery_images folder
const galleryImages = [
  { src: "/gallery_images/image1.png", title: "Classroom Activity", category: "Academic" },
  { src: "/gallery_images/image2.png", title: "Islamic Pre-School Learning", category: "Academic" },
  { src: "/gallery_images/image3.png", title: "Creative Playtime", category: "Activity" },
  { src: "/gallery_images/image4.png", title: "Outdoor Fun", category: "Activity" },
  { src: "/gallery_images/image5.png", title: "Group Session", category: "Academic" },
  { src: "/gallery_images/image6.png", title: "Interactive Workshop", category: "Events" },
  { src: "/gallery_images/image7.png", title: "Primary Education", category: "Academic" },
  { src: "/gallery_images/image8.png", title: "Arts & Crafts", category: "Activity" },
  { src: "/gallery_images/image9.png", title: "Student Gathering", category: "Events" },
  { src: "/gallery_images/image10.png", title: "Assembly Day", category: "Events" },
  { src: "/gallery_images/image11.png", title: "School Celebration", category: "Events" },
  { src: "/gallery_images/image12.png", title: "Learning with Fun", category: "Academic" },
  { src: "/gallery_images/image13.png", title: "Cooperative Learning", category: "Academic" }
];

// Mock News & Media Items
const newsArticles = [
  {
    id: 1,
    title: "Application for new Primary and Pre Primary School",
    excerpt: "Application invited from the competent Mahall Management, Trusts, Organizations for a new affiliation.",
    date: "09 August 2023",
    category: "Affiliation",
    image: "/news_images/image12.png"
  },
  {
    id: 2,
    title: "Mandatory documents related to Albirr Schools",
    excerpt: "Mandatory documents necessary for Albirr Schools' admission.",
    date: "14 July 2023",
    category: "Admission",
    image: "/news_images/image13.png"
  },
  {
    id: 3,
    title: "Application for new TTC institution-2024-25",
    excerpt: "Applicaiton invitesfor TTC Affilicaitnion.",
    date: "26 August 2023",
    category: "TTC",
    image: "/news_images/image14.png"
  },
  {
    id: 4,
    title: "Inviting online application for A-TET",
    excerpt: "Applications are invited for new Teacher Eligiblity Test for 2023-24 accademic year. Qualified Candidates as per the advertisment can apply up to 25-10-2023.",
    date: "02 October 2023",
    category: "A-TET",
    image: "/news_images/image16.png"
  }
];

// Mock Downloads list
const downloadItems = [
  {
    id: 1,
    title: "Academic Calendar 2026 - 2027",
    description: "Get the complete schedule of school terms, examinations, holidays, and extracurricular activity dates.",
    fileSize: "2.4 MB",
    type: "PDF",
    icon: Calendar
  },
  {
    id: 2,
    title: "Al-Birr School Brochure & Curriculum",
    description: "A comprehensive guide on our balanced learning approach, Islamic moral teachings, and academic programs.",
    fileSize: "5.8 MB",
    type: "PDF",
    icon: FileText
  },
  {
    id: 3,
    title: "Admission Application Form",
    description: "Download the primary admission form to begin your child's enrollment process at Al-Birr Schools.",
    fileSize: "1.2 MB",
    type: "PDF",
    icon: Download
  }
];

function MediaContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("gallery");

  // Lightbox State
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Gallery Filter State
  const [selectedCategory, setSelectedCategory] = useState("All");

  const tabs = [
    { id: "gallery", label: "Gallery" },
    { id: "news", label: "News & Media" },
    { id: "downloads", label: "Downloads" }
  ];

  const activeIndex = tabs.findIndex((t) => t.id === activeTab);

  // Set active tab based on query param 'tab'
  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam && ["gallery", "news", "downloads"].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  // Handle Tab Switch & Update Route Query
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    router.push(`/pages/media?tab=${tabId}`);
  };

  // Lightbox Navigation
  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxIndex(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prevIndex) => (prevIndex + 1) % filteredImages.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prevIndex) => (prevIndex - 1 + filteredImages.length) % filteredImages.length);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "ArrowRight") nextImage(e);
      if (e.key === "ArrowLeft") prevImage(e);
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, lightboxIndex]);

  // Filter gallery images
  const categories = ["All", "Academic", "Activity", "Events"];
  const filteredImages = selectedCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="relative min-h-screen bg-[#0f1f42] text-white flex flex-col font-sans overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#F05B28]/15 blur-[100px]" />
        <div className="absolute right-20 top-80 h-[400px] w-[400px] rounded-full bg-[#9C4A9C]/15 blur-[100px]" />
        <div className="absolute -left-40 top-40 h-[450px] w-[450px] rounded-full bg-[#36E1FF]/10 blur-[100px]" />
      </div>



      {/* Main Content Body */}
      <main className="relative z-10 flex-grow w-full max-w-none px-4 sm:px-6 md:px-10 xl:px-12 pt-40 sm:pt-44 md:pt-48 lg:pt-52 pb-20 flex flex-col justify-center">
        {/* Page Title */}
        <div className="mb-8 md:mb-12 text-left animate-in fade-in slide-in-from-bottom duration-700">
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            Media & Portal
          </h1>
        </div>

        {/* Layout Container */}
        <div className="relative overflow-visible min-h-[500px] lg:min-h-[600px] p-4 sm:p-8 md:p-10 lg:p-12 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-2xl flex flex-col justify-start animate-in fade-in duration-700">
          
          {/* Centered Pill Toggle Selector */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center px-4 z-50">
            <div className="relative w-full max-w-xl">
              <div className="relative grid grid-cols-3 items-center bg-[#24325c] border border-white/20 rounded-full p-1 shadow-[0_15px_40px_rgba(0,0,0,0.35)] overflow-hidden">
                {/* Sliding Active Pill */}
                <div
                  className="absolute inset-y-1 left-1 w-[calc(33.333%-0.25rem)] rounded-full bg-[#7b849f] shadow-inner transition-transform duration-300 ease-out"
                  style={{ transform: `translateX(${activeIndex * 100}%)` }}
                  aria-hidden="true"
                />

                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => handleTabChange(tab.id)}
                      className={
                        "relative z-10 flex w-full items-center justify-center px-3 sm:px-4 md:px-5 py-2.5 md:py-3 rounded-full font-medium text-[11px] sm:text-sm md:text-[17px] transition-colors whitespace-nowrap cursor-pointer " +
                        (isActive
                          ? "text-[#ff944d] font-bold"
                          : "text-white hover:text-[#ff944d]")
                      }
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Content Display Window */}
          <div className="relative z-10 w-full mt-6 sm:mt-10 md:mt-12 flex flex-col justify-center min-h-[350px]">

              {/* GALLERY TAB */}
              {activeTab === "gallery" && (
                <div className="space-y-8 animate-in fade-in duration-300">
                  {/* Category Filter Pills */}
                  <div className="flex flex-wrap items-center gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border cursor-pointer ${selectedCategory === cat
                          ? "bg-[#ff944d] border-[#ff944d] text-white"
                          : "bg-white/5 border-white/10 hover:border-white/30 text-white/80 hover:text-white"
                          }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  {/* Responsive Image Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {filteredImages.map((img, index) => (
                      <div
                        key={index}
                        onClick={() => openLightbox(index)}
                        className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-lg cursor-pointer hover:shadow-xl hover:scale-[1.03] transition-all duration-500"
                      >
                        <Image
                          src={img.src}
                          alt={img.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-[#0f1f42]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                          <div className="h-10 w-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-300">
                            <Eye className="h-5 w-5" />
                          </div>
                          <span className="text-white text-xs font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                            View Image
                          </span>
                        </div>

                        {/* Title Bar inside card bottom */}
                        <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10">
                          <span className="text-[10px] uppercase font-bold text-[#ff944d] tracking-widest">
                            {img.category}
                          </span>
                          <h4 className="text-xs sm:text-sm font-bold text-white truncate mt-0.5">
                            {img.title}
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* NEWS & MEDIA TAB */}
              {activeTab === "news" && (
                <div className="space-y-10 animate-in fade-in duration-300">
                  <div className="grid gap-6">
                    {newsArticles.map((article) => (
                      <div
                        key={article.id}
                        className="flex flex-col md:flex-row rounded-3xl overflow-hidden bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 transition-all duration-300 shadow-xl p-4 sm:p-5 md:p-6 gap-5 sm:gap-6 md:gap-8 items-center w-full max-w-sm sm:max-w-md md:max-w-none mx-auto"
                      >
                        {/* Flyer Image Container */}
                        <div className="relative w-44 sm:w-56 md:w-72 aspect-[4/3] sm:aspect-[16/11] shrink-0 rounded-2xl overflow-hidden bg-[#0c1b48]/60 border border-white/10 p-2 flex items-center justify-center">
                          <div className="relative w-full h-full">
                            <Image
                              src={article.image}
                              alt={article.title}
                              fill
                              className="object-contain"
                              sizes="(max-width: 768px) 224px, 288px"
                            />
                          </div>
                        </div>

                        {/* Article Text Content */}
                        <div className="flex-grow flex flex-col text-left space-y-3 w-full">
                          <div className="space-y-2">
                            <div className="flex items-center gap-3">
                              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#9C4A9C]/20 text-[#e68de6] border border-[#9C4A9C]/30 uppercase tracking-wider">
                                {article.category}
                              </span>
                              <span className="text-[11px] text-white/40 font-semibold">
                                {article.date}
                              </span>
                            </div>
                            <h3 className="text-base sm:text-lg md:text-xl font-bold text-white leading-snug tracking-tight hover:text-[#ff944d] transition-colors">
                              {article.title}
                            </h3>
                            <p className="text-white/70 text-xs sm:text-sm md:text-base leading-relaxed text-justify font-medium">
                              {article.excerpt}
                            </p>
                          </div>
                          <div className="pt-1">
                            <button className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#ff944d] hover:text-[#ff944d]/80 transition-colors cursor-pointer">
                              Read Details
                              <ArrowUpRight className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Newsletter Subscription Box */}
                  <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-[#9C4A9C]/20 via-[#24325c]/20 to-[#36E1FF]/10 border border-white/10 mt-8 relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="space-y-2 max-w-md text-center sm:text-left">
                      <h4 className="text-base sm:text-lg font-bold text-white">Subscribe to our newsletter</h4>
                      <p className="text-white/60 text-xs sm:text-sm">Get immediate notifications about Al-Birr schools announcements, events, and monthly releases.</p>
                    </div>
                    <div className="flex w-full sm:w-auto items-center gap-2 max-w-sm">
                      <input
                        type="email"
                        placeholder="Enter email address"
                        className="bg-white/5 border border-white/20 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#ff944d] flex-grow"
                      />
                      <button className="bg-[#9C4A9C] hover:bg-[#9C4A9C]/90 text-white rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer shadow-md">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* DOWNLOADS TAB */}
              {activeTab === "downloads" && (
                <div className="space-y-8 animate-in fade-in duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {downloadItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.id}
                          className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 hover:scale-[1.01] transition-all duration-300 shadow-xl"
                        >
                          <div className="space-y-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff944d]/10 border border-[#ff944d]/20 text-[#ff944d]">
                              <Icon className="h-6 w-6" />
                            </div>
                            <div className="space-y-1">
                              <h3 className="text-base sm:text-lg font-bold text-white">{item.title}</h3>
                              <span className="inline-block text-[10px] font-bold text-white/40 bg-white/5 px-2 py-0.5 rounded uppercase">
                                {item.type} &bull; {item.fileSize}
                              </span>
                            </div>
                            <p className="text-white/65 text-xs sm:text-sm leading-relaxed text-justify">
                              {item.description}
                            </p>
                          </div>
                          <div className="pt-6 border-t border-white/5 mt-6 flex items-center justify-between">
                            <span className="text-[11px] font-semibold text-white/40">Resource Doc</span>
                            <button className="flex items-center gap-2 rounded-xl bg-white/10 hover:bg-[#ff944d] border border-white/10 hover:border-[#ff944d] px-4 py-2 text-xs sm:text-sm font-bold text-white transition-all cursor-pointer">
                              <Download className="h-4 w-4" />
                              Download
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

            </div>
        </div>
      </main>

      {/* Full-screen Lightbox Modal */}
      {lightboxOpen && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          {/* Close Action */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white cursor-pointer z-50 transition-all focus:outline-none"
          >
            <X className="h-6 w-6 sm:h-8 sm:w-8" />
          </button>

          {/* Left Arrow Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 text-white cursor-pointer z-50 transition-all focus:outline-none select-none active:scale-90"
          >
            <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
          </button>

          {/* Image Container */}
          <div
            className="relative w-full max-w-2xl aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.7)] border border-white/10 animate-in zoom-in-95 duration-500 bg-[#0c1b48]/60 p-3 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>
            {/* Lightbox Overlay details */}
            <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end text-left z-20">
              <span className="text-[10px] uppercase font-extrabold text-[#ff944d] tracking-widest">
                {filteredImages[lightboxIndex].category}
              </span>
              <h2 className="text-sm sm:text-lg font-black text-white mt-0.5 drop-shadow-md">
                {filteredImages[lightboxIndex].title}
              </h2>
              <div className="flex items-center justify-between mt-2 text-white/50 text-[10px]">
                <span>Al-Birr Schools Gallery Asset</span>
                <span>{lightboxIndex + 1} of {filteredImages.length}</span>
              </div>
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 text-white cursor-pointer z-50 transition-all focus:outline-none select-none active:scale-90"
          >
            <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
          </button>
        </div>
      )}

      {/* Footer Component */}
      <Footer className="bg-transparent" />
    </div>
  );
}

export default function MediaPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0f1f42] text-white flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 border-4 border-[#ff944d] border-t-transparent rounded-full animate-spin"></div>
          <span className="text-sm font-semibold tracking-wider text-white/60">Loading Al-Birr Portal...</span>
        </div>
      </div>
    }>
      <MediaContent />
    </Suspense>
  );
}
