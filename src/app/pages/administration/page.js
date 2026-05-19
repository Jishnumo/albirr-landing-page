"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Target, Compass, Building, User } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Footer from "../../components/Footer";

const samasthaLeaders = [
  {
    name: "Sayyid Jifri Muthukkoya Thangal",
    role: "President",
    image: "/administration_images/Screenshot 2026-05-19 145535.png",
  },
  {
    name: "Professor Alikutty Musliyar",
    role: "Secretary",
    image: "/administration_images/Screenshot 2026-05-19 145544.png",
  },
  {
    name: "P P Ummer Musliyar Koyyode",
    role: "Treasurer",
    image: "/administration_images/Screenshot 2026-05-19 145558.png",
  },
];

const boardLeaders = [
  {
    name: "Moulana Moosakkutty Hazrath",
    role: "President",
    image: "/administration_images/Screenshot 2026-05-19 145608.png",
  },
  {
    name: "M T Abdulla Musliyar",
    role: "Secretary",
    image: "/administration_images/Screenshot 2026-05-19 145614.png",
  },
  {
    name: "Sayyid Swadiqali Shihab Thangal",
    role: "Treasurer",
    image: "/administration_images/Screenshot 2026-05-19 145623.png",
  },
];

const albirrSchoolsAdmin = [
  {
    name: "Sayed Muhammed Koya Jamalullaily",
    role: "Chairman",
    image: "/administration_images/Screenshot 2026-05-19 145637.png",
  },
  {
    name: "Ummer Faizy Mukkam",
    role: "Convenor",
    image: "/administration_images/Screenshot 2026-05-19 145644.png",
  },
  {
    name: "Dr. NAM Abdul kader",
    role: "Director",
    image: "/administration_images/Screenshot 2026-05-19 145651.png",
  },
  {
    name: "K P Muhammed",
    role: "Administrative Director",
    image: "/administration_images/Screenshot 2026-05-19 145703.png",
  },
];

const districtCoordinators = [
  { name: "Jabir Hudawi Chanadukkam", district: "Kasaragod" },
  { name: "Musthafa Hudawi Thiruvattur", district: "Kannur – 1" },
  { name: "Hamza Mayyil", district: "Kannur – 2" },
  { name: "Abdul Salam Rahmani", district: "Kozhikode – 1" },
  { name: "Ashraf Andona", district: "Kozhikode – 3" },
  { name: "P C Umer Moulavi", district: "Wayanad" },
  { name: "Zainudheen Kodur", district: "Malappuram – 1" },
  { name: "Askarali Karimba", district: "Palakkad & Thrissur" },
  { name: "Abi Wafi Pezhakkapilly", district: "Ernakulum" },
  { name: "Nizam Ochira", district: "Pathanamthitta" },
  { name: "Shareef Darimi", district: "Alappuzha" },
  { name: "Noushad Baqavi", district: "Kollam & Trivandrum" },
];

const albirrMembers = [
  { name: "Sayyid Muhammad Koya Thangal Jamalullaili", role: "", image: "/administration_images/Screenshot 2026-05-19 145722.png" },
  { name: "K. Ummer Faizy Mukkam", role: "", image: "/administration_images/Screenshot 2026-05-19 145730.png" },
  { name: "M.T Abdulla Musliyar", role: "", image: "/administration_images/Screenshot 2026-05-19 145743.png" },
  { name: "Dr. Bahavudheen Muhammad Nadvi", role: "", image: "/administration_images/Screenshot 2026-05-19 145756.png" },
  { name: "A.V Adbul Rahman Musliyar", role: "", image: "/administration_images/Screenshot 2026-05-19 145824.png" },
  { name: "Dr. N A M Abdul Khader", role: "", image: "/administration_images/Screenshot 2026-05-19 145833.png" },
  { name: "Abdul Hameed Faizy Ambalakkadavu", role: "", image: "/administration_images/Screenshot 2026-05-19 145844.png" },
  { name: "M C Mayin Haji", role: "", image: "/administration_images/Screenshot 2026-05-19 145857.png" },
  { name: "Abdussamad Pookoottur", role: "", image: "/administration_images/Screenshot 2026-05-19 145905.png" },
  { name: "Musthafa Master Mundupara", role: "", image: "/administration_images/Screenshot 2026-05-19 145912.png" },
  { name: "P.K Shahul Hameed Master", role: "", image: "/administration_images/Screenshot 2026-05-19 145930.png" },
  { name: "Abdul Raheem Chuzhali", role: "", image: "/administration_images/Screenshot 2026-05-19 145945.png" },
  { name: "R.V Kutti Hassan Darimi", role: "", image: "/administration_images/Screenshot 2026-05-19 145957.png" },
  { name: "Naser Faizy Koodathai", role: "", image: "/administration_images/Screenshot 2026-05-19 150001.png" },
  { name: "C. Ahmed Koya Haji", role: "", image: "/administration_images/Screenshot 2026-05-19 150007.png" },
  { name: "Faisal TAK", role: "", image: "/administration_images/Screenshot 2026-05-19 150011.png" },
  { name: "Fasial Hudawi Parathakkad", role: "", image: "/administration_images/Screenshot 2026-05-19 150018.png" },
  { name: "K. Moyin Kutty Master (Ex officio)", role: "", image: "/administration_images/Screenshot 2026-05-19 150023.png" },
  { name: "K.P Muhammed (Ex officio)", role: "", image: "/administration_images/Screenshot 2026-05-19 150030.png" },
  { name: "Mihjah Narikkuni (Ex officio)", role: "", image: "/administration_images/Screenshot 2026-05-19 150044.png" },
];

const academicBodyMembers = [
  { name: "Faisal Hudawi Parathakkad", role: "Training Convenor", image: "/administration_images/Screenshot 2026-05-19 150148.png" },
  { name: "Hassan K M", role: "Monitoring convenor", image: "/administration_images/Screenshot 2026-05-19 150148 - Copy.png" },
  { name: "Moidu Master K Vanimel", role: "Chairman, Board of Examinations", image: "/administration_images/Screenshot 2026-05-19 150148 - Copy (2).png" },
  { name: "Muhammed Rasheed Maniyoor", role: "Convenor, ICT", image: "/administration_images/Screenshot 2026-05-19 150148 - Copy (3).png" },
  { name: "Kunhimoideen Mavoor", role: "TTI", image: "/administration_images/Screenshot 2026-05-19 150148 - Copy (4).png" },
  { name: "Dr. Mohammed Basheer Panangagara", role: "Convenor, Albirr TTI", image: "/administration_images/Screenshot 2026-05-19 150148 - Copy (5).png" },
  { name: "Dr. Adbul Razak Wafi", role: "TTI", image: "/administration_images/Screenshot 2026-05-19 150148 - Copy (6).png" },
  { name: "Dr. Faisal Kolathur", role: "", image: "/administration_images/Screenshot 2026-05-19 150148 - Copy (7).png" },
  { name: "Dr. Faisal Hudavi Mariyad", role: "", image: "/administration_images/Screenshot 2026-05-19 150148 - Copy (8).png" },
  { name: "Dr. Shamsudheen Thirurkad", role: "", image: "/administration_images/Screenshot 2026-05-19 150148 - Copy (9).png" },
  { name: "Dr. Shafeeq", role: "", image: "/administration_images/Screenshot 2026-05-19 150148 - Copy (10).png" },
  { name: "Zainudheen Kodur", role: "Chairman, Primary Schools", image: "/administration_images/Screenshot 2026-05-19 150148 - Copy (11).png" },
  { name: "M.K. Muneer Edacheri", role: "", image: "/administration_images/Screenshot 2026-05-19 150148 - Copy (12).png" },
];

const AdministrationPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("administration");

  const tabs = [
    { id: "administration", label: "Administration" },
    { id: "albirr-schools", label: "Albirr Schools" },
    { id: "district-coordinators", label: "District Co-ordinators" },
    { id: "albirr-members", label: "Albirr Members" },
    { id: "academic-body", label: "Academic Body Members" },
  ];

  // Helper to render a leader grid+swiper section
  const renderLeaderSection = (title, leaders, cols = 3) => {
    return (
      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-950 tracking-tight border-b pb-2">
          {title}
        </h2>

        {/* Mobile: Swiper carousel */}
        <div className="block sm:hidden admin-swiper">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{ rotate: 20, stretch: 0, depth: 80, modifier: 1, slideShadows: false }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="pb-8"
          >
            {leaders.map((leader, index) => (
              <SwiperSlide key={index} className="w-[75%] max-w-[280px]">
                <div className="group flex flex-col items-center bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
                  <div className="relative aspect-[3/4] w-full max-w-[200px] rounded-xl overflow-hidden bg-gray-50 border border-gray-100 mb-4">
                    <Image src={leader.image} alt={leader.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 text-center leading-tight">{leader.name}</h3>
                  {leader.role && (
                    <p className="text-xs text-gray-500 font-medium mt-1">({leader.role})</p>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop: Grid */}
        <div className={`hidden sm:grid grid-cols-2 md:grid-cols-${cols} gap-6`}>
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="group flex flex-col items-center bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="relative aspect-[3/4] w-full max-w-[200px] rounded-xl overflow-hidden bg-gray-50 border border-gray-100 mb-4">
                <Image src={leader.image} alt={leader.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 text-center leading-tight">{leader.name}</h3>
              {leader.role && (
                <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">({leader.role})</p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">

      {/* Banner with HeroNavbar */}
      <div className="relative text-white overflow-hidden" style={{ height: "220px" }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/about_albirr1.png"
            alt="Albirr Header Background"
            fill
            className="object-cover object-[center_40%]"
            priority
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        <div className="absolute bottom-4 left-6 sm:left-8 md:left-10 xl:left-12 z-10">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]">
            Administration
          </h1>
        </div>
      </div>

      {/* Content */}
      <main className="flex-grow w-full bg-white">
        <div className="min-h-[520px] p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Sidebar */}
            <div className="lg:col-span-3 flex flex-col justify-start">
              {/* Mobile/Tablet Dropdown Select (Light Theme) */}
              <div className="relative lg:hidden mb-6 w-full z-30">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center justify-between w-full px-5 py-3.5 rounded-xl bg-black/[0.04] border border-black/5 text-gray-900 text-sm md:text-base font-semibold active:scale-98 transition-all duration-300 select-none cursor-pointer"
                >
                  <span>{tabs.find(t => t.id === activeTab).label}</span>
                  <svg
                    className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isOpen && (
                  <>
                    {/* Overlay to close the dropdown */}
                    <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 right-0 mt-2 z-50 rounded-2xl bg-white border border-black/5 shadow-xl p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      {tabs.map((tab) => {
                        const isActive = tab.id === activeTab;
                        return (
                          <button
                            key={tab.id}
                            onClick={() => {
                              setActiveTab(tab.id);
                              setIsOpen(false);
                            }}
                            className={`w-full flex items-center px-4 py-3 rounded-xl text-left text-sm md:text-base font-medium transition-all duration-200 ${isActive
                                ? "text-gray-950 font-bold"
                                : "text-gray-600 hover:text-gray-950"
                              }`}
                          >
                            <span>{tab.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>

              {/* Desktop Navigation Sidebar */}
              <nav className="hidden lg:flex flex-col gap-2">
                {tabs.map((tab) => {
                  const isActive = tab.id === activeTab;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center px-6 py-3 rounded-full text-left text-sm md:text-base font-bold transition-all duration-300 select-none ${isActive
                        ? "text-gray-950 font-extrabold"
                        : "text-gray-500 font-medium hover:text-gray-950"
                        }`}
                    >
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Main Content — switches based on active tab */}
            <div className="lg:col-span-9 flex flex-col gap-12 text-left">

              <style dangerouslySetInnerHTML={{
                __html: `
                .admin-swiper .swiper-pagination-bullet {
                  background-color: #e2e8f0;
                  opacity: 1;
                  width: 10px;
                  height: 10px;
                  margin: 0 6px !important;
                }
                .admin-swiper .swiper-pagination-bullet-active {
                  background-color: #94a3b8;
                }
                .admin-swiper .swiper-slide {
                  height: auto !important;
                }
                .admin-swiper .swiper-pagination {
                  position: relative !important;
                  margin-top: 1.5rem !important;
                  bottom: 0px !important;
                }
              `}} />

              {/* TAB: Administration */}
              {activeTab === "administration" && (
                <>
                  {renderLeaderSection("SAMASTHA KERALA JAMIYATHUL ULAMA", samasthaLeaders, 3)}
                  {renderLeaderSection("SAMASTHA KERALA ISLAM MATHA VIDHYABHYASA BOARD (SKIMVB)", boardLeaders, 3)}
                </>
              )}

              {/* TAB: Albirr Schools */}
              {activeTab === "albirr-schools" && (
                <>
                  {renderLeaderSection("ALBIRR SCHOOLS - ADMINISTRATION", albirrSchoolsAdmin, 4)}
                </>
              )}

              {/* TAB: District Co-ordinators */}
              {activeTab === "district-coordinators" && (
                <div className="space-y-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-950 tracking-tight border-b pb-2">
                    DISTRICT CO-ORDINATORS
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6">
                    {districtCoordinators.map((person, index) => (
                      <div key={index} className="flex flex-col">
                        <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-tight">{person.name}</h3>
                        <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">({person.district})</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB: Albirr Members */}
              {activeTab === "albirr-members" && (
                <>
                  {renderLeaderSection("ALBIRR MEMBERS", albirrMembers, 4)}
                </>
              )}

              {/* TAB: Academic Body Members */}
              {activeTab === "academic-body" && (
                <>
                  {renderLeaderSection("ACADEMIC BODY MEMBERS", academicBodyMembers, 4)}
                </>
              )}

            </div>
          </div>
        </div>
      </main>

      <Footer className="bg-white" />
    </div>
  );
};

export default AdministrationPage;
