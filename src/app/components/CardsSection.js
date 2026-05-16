"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const cardsData = [
  {
    id: 1,
    image: "/card1.webp",
    title: "IT Enabled Smart Classrooms",
    description:
      "Step into the future of education with our state of the art smart classrooms, equipped with interactive technology that enhances learning experiences and fosters digital literacy.",
    theme: "dark",
  },
  {
    id: 2,
    image: "/card2.webp",
    title: "Secured And Well Structured Building",
    description:
      "Your child's safety is our top priority. Our meticulously designed and secure building ensures a protective environment, providing peace of mind for parents and a conducive space for learning and growth.",
    theme: "light",
  },
  {
    id: 3,
    image: "/card3.webp",
    title: "Children's Park",
    description:
      "Delight in outdoor adventures, socializing, and joyful play in our vibrant park designed for all.",
    theme: "dark",
  },
  {
    id: 4,
    image: "/card1.webp",
    title: "Interactive Laboratories",
    description:
      "Our state-of-the-art labs provide hands-on experience, fostering a deep understanding of scientific concepts and innovation.",
    theme: "light",
  },
  {
    id: 5,
    image: "/card2.webp",
    title: "Expansive Library",
    description:
      "A vast collection of resources spanning various disciplines to support research, imagination, and continuous learning.",
    theme: "dark",
  },
  {
    id: 6,
    image: "/card3.webp",
    title: "Sports Complex",
    description:
      "Premium facilities for various sports, encouraging physical fitness, teamwork, and overall well-being among students.",
    theme: "light",
  },
];

const CardContent = ({ card }) => {
  const isDark = card.theme === "dark";
  return (
    <div
      className={`flex flex-col h-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden ${isDark ? "bg-[#26335D]" : "bg-white border border-[#26335D]"}`}
    >
      <div
        className={`relative w-full aspect-[1.1] ${isDark ? "bg-[#26335D]" : "bg-gray-100"}`}
      >
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <h3
          className={`text-base md:text-xl font-bold mb-4 ${isDark ? "text-white" : "text-[#0f1f42]"}`}
        >
          {card.title}
        </h3>
        <p
          className={`text-[10px] md:text-sm leading-relaxed font-medium ${isDark ? "text-gray-300" : "text-gray-400"}`}
        >
          {card.description}
        </p>
      </div>
    </div>
  );
};

const CardsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-24 px-6 md:px-12 overflow-hidden lg:min-h-screen lg:flex lg:flex-col lg:justify-center"
    >
      <div className="mx-auto max-w-7xl w-full">
        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-12 md:mb-16 gap-4 text-center md:text-left items-center">
          <h2 className="text-3xl md:text-[45px] font-bold text-[#26335D] tracking-tight">
            Our Facilities
          </h2>
          <div className="text-[#A0A4AB] font-medium text-xs md:text-sm tracking-wide italic">
            / Where Learning and Comfort Meet
          </div>
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: `
          .swiper-pagination-bullet {
            background-color: #e2e8f0;
            opacity: 1;
            width: 10px;
            height: 10px;
            margin: 0 6px !important;
          }
          .swiper-pagination-bullet-active {
            background-color: #94a3b8;
          }
          .swiper-slide {
            height: auto !important;
          }
          .swiper-pagination {
            position: relative !important;
            margin-top: 2.5rem !important;
            bottom: 0px !important;
          }
        `,
          }}
        />

        {/* Mobile Swiper (Coverflow) */}
        <div
          className={`block md:hidden transform transition-all duration-1000 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"}`}
        >
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="pb-12 pt-8 px-5 -mx-5"
          >
            {cardsData.map((card) => (
              <SwiperSlide key={card.id} className="w-[85%] max-w-[350px]">
                <div className="h-full p-2">
                  <CardContent card={card} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Slider */}
        <div
          className={`hidden md:block w-full max-w-7xl mx-auto transform transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"
          }`}
        >
          <Swiper
            slidesPerView={3}
            spaceBetween={40}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            modules={[Pagination, Autoplay]}
            className="pb-12 pt-8 px-8 -mx-8"
          >
            {cardsData.map((card) => (
              <SwiperSlide key={card.id}>
                <div className="h-full">
                  <CardContent card={card} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
