"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, GraduationCap, School } from "lucide-react";
import Footer from "../../components/Footer";
import PageTitle from "../../components/PageTitle";

const AcademicsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("academics");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const tab = params.get("tab");
      if (tab && ["academics", "curriculum", "admission"].includes(tab)) {
        setActiveTab(tab);
      }
    }
  }, []);

  const tabs = [
    { id: "academics", label: "Academics", icon: BookOpen },
    { id: "curriculum", label: "Curriculam", icon: GraduationCap },
    { id: "admission", label: "Admission", icon: School },
  ];

  const getPageTitle = () => {
    switch (activeTab) {
      case "academics": return "Academics";
      case "curriculum": return "Curriculum";
      case "admission": return "Admission";
      default: return "Academics";
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0f1f42] text-white flex flex-col font-sans overflow-hidden">
      <PageTitle title={getPageTitle()} />

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



      {/* Main Content */}
      <main className="relative z-10 flex-grow w-full max-w-none px-0 pt-24 sm:pt-28 md:pt-36 lg:pt-40 pb-0 flex flex-col justify-center">

        {/* Page Title */}
        <div className="mb-8 md:mb-12 text-left px-6 sm:px-8 md:px-10 xl:px-12 animate-in fade-in slide-in-from-bottom duration-700">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            Academics
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

            {/* Content Area */}
            <div className="lg:col-span-9 flex flex-col justify-center">
              <div className="space-y-6 text-justify text-[0.72rem] sm:text-[0.78rem] lg:text-[0.82rem]">

                {activeTab === "academics" && (
                  <div className="space-y-4">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-950 tracking-tight">ACADEMICS</h2>
                    <p className="text-gray-700 font-normal leading-snug">
                      Albirr Schools offers grades from the Early Years to Primary School. Our curriculum is evolved mainly on key principles i.e., Child centered pedagogy, developing Language skills in Arabic, English and Malayalam. A special emphasis to learn Holy Qur'an, Reading and memorization and to acquire the knowledge through the stories of Holy Qur'an and prophet's and also by memorising Hadith, Dikr and Dua. The curriculum aims at providing children with a multisensory integrated approach in learning the different concepts. In order to make the learning process lively and successful, different types of learners - Auditory, Visual and Kinaesthetic are made a part of the class room activity through differentiated Instruction. Formulation of curriculum and method of instruction are learner-centered. Effective learning strategies are formulated to achieve the objectives of teaching. Teachers are the key role models who not only guide the children in academics but instil values and morals in children as a mentor. We strive towards excellence in all aspects of education by adopting a holistic and dynamic curriculum and providing an emotionally safe and secure environment to all types of learners.
                    </p>

                    <h2 className="text-lg sm:text-xl font-bold text-gray-950 tracking-tight pt-2">LEARNING AND ACADEMICS</h2>
                    <p className="text-gray-700 font-normal leading-snug">
                      The school's curriculum is designed with an integrated approach where Islamic teachings and values are imbedded across all subject areas. The curriculum is structured in such a manner that it enables students to become independent, responsible and caring members of the society. Our core teaching methodologies focus on a blend of activity based learning combined with extensive sports facilities, variety of extra-curricular activities, social and cultural events, which ensure a holistic approach to our students' overall growth and progress.
                    </p>
                  </div>
                )}

                {activeTab === "curriculum" && (
                  <div className="space-y-4">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-950 tracking-tight">ISLAMIC CURRICULUM</h2>
                    <p className="text-gray-700 font-normal leading-snug">
                      The school is committed to instilling Islamic values in students to become strong and highly educated Muslims for whom Islam is a complete way of life. It provides a rich, engaging and personalised learning program in Qur&apos;anic &amp; Islamic Studies and Arabic. The Islamic Curriculum includes Recitation of the Quran, traditions of Prophet, routine prayers and rituals and manners. The Hifz of the Qur&apos;an begins right from Pre-primary grades. Students are first taught Arabic alphabets, and how to pronounce the letters correctly (Makhraj) and with a correct accent (Lahjah). They are then taught to read with the correct rulings (Tajweed) and finally read the Qur&apos;an in the correct manner. Simultaneously they are also made to memorize from the smaller chapters (Soorah) in every grade. Through the Islamic curriculum students are not only able to attain both practical skills but theoretical knowledge of Islam as well.
                    </p>

                    <h2 className="text-lg sm:text-xl font-bold text-gray-950 tracking-tight pt-2">CO-CURRICULAR ACTIVITIES</h2>
                    <p className="text-gray-700 font-normal leading-snug">
                      A variety of activities and events are organised in Albirr School to provide each student an opportunity to develop a wholesome personality. Competitions are conducted at different levels, debates, dramatics, elocution, creative writing and team games are some of the activities children are encouraged to participate in.
                    </p>

                    <h2 className="text-lg sm:text-xl font-bold text-gray-950 tracking-tight pt-2">FESTS AND TESTS</h2>
                    <p className="text-gray-700 font-normal leading-snug">
                      To boost the extracurricular skills of the students a school level &apos;Albirr Kids Fest&apos; is conducted in the month of December every year. The selected students from each centre participate in the district level Albirr Kids Fest. We also organise an &quot;Albirr talent test&quot; in the month of January. A school level sports meet is also conducted in the month of December to encourage the competitive spirit in students.
                    </p>
                  </div>
                )}

                {activeTab === "admission" && (
                  <div className="space-y-4">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-950 tracking-tight">ADMISSIONS</h2>

                    <h3 className="text-base font-bold text-gray-950 tracking-tight pt-1">ADMISSION PROCESS</h3>
                    <p className="text-gray-700 font-normal leading-snug">
                      Admission to pre-primary classes is given to children who have completed three and half years of age. The course is conducted as IPS-I for the first year and IPS-II for the second year and each batch includes 20 students, the maximum seats are limited to 24.
                    </p>
                    <p className="text-gray-700 font-normal leading-snug">
                      Albirr primary is the continuation of Albirr pre-school in curriculum and approach. This would help the child to reach the zenith of the motto of Albirr. Admission to primary classes in a recognised school is to those who have completed the pre-primary school after a mild screening. The intake of the class will be maximum number of 30 students and the curriculum will be prepared in according to the state/centre norms in addition to Islamic subjects and Arabic languages specially envisaged by Albirr team.
                    </p>
                    <p className="text-gray-700 font-normal leading-snug">
                      Application for admission should be submitted in the prescribed form. The admission begin from 1st February every year and closes on or before May 31st of the same year.
                    </p>

                    <h3 className="text-base font-bold text-gray-950 tracking-tight pt-2">FEES REMITTENCE</h3>
                    <p className="text-gray-700 font-normal leading-snug">
                      The fee amount and structure is common in all branches. The management of every branch can only receive the fees decided by the governing body. Fees are collected in three instalments only. Any additional or extra fee will not be collected separately without the prior permission from Albirr governing body. The fee amount is revised and restructured when required.
                    </p>

                    <h3 className="text-base font-bold text-gray-950 tracking-tight pt-2">UNIFORM</h3>
                    <p className="text-gray-700 font-normal leading-snug">
                      Uniform is mandatory for both teachers and students. Teachers wear an exclusively designed purdah as uniform. Uniform is mandatory for all school functions and class room activities. There is a separate uniform for IPS-I and IPS-II students as per the rules. The logo of Albirr should be stitched on the right pocket of the shirt. Every student needs to wear an identity card with photo in the class room.
                    </p>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>

      </main>

      <Footer className="bg-transparent" />
    </div>
  );
};

export default AcademicsPage;
