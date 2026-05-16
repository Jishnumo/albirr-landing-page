"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const cardsData = [
  {
    id: 1,
    image: "/card1.webp",
    title: "IT Enabled Smart Classrooms",
    description: "Step into the future of education with our state of the art smart classrooms, equipped with interactive technology that enhances learning experiences and fosters digital literacy.",
    theme: "light",
  },
  {
    id: 2,
    image: "/card2.webp",
    title: "Secured And Well Structured Building",
    description: "Your child's safety is our top priority. Our meticulously designed and secure building ensures a protective environment, providing peace of mind for parents and a conducive space for learning and growth.",
    theme: "dark",
  },
  {
    id: 3,
    image: "/card3.webp",
    title: "Children's Park",
    description: "Delight in outdoor adventures, socializing, and joyful play in our vibrant park designed for all.",
    theme: "light",
  }
];

const CardContent = ({ card }) => {
  const isDark = card.theme === 'dark';
  return (
    <div className={`flex flex-col h-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden ${isDark ? 'bg-[#1c243c] shadow-[0_20px_60px_rgba(0,0,0,0.15)] relative z-10' : 'bg-[#fcfcfc] shadow-[0_15px_50px_rgba(0,0,0,0.08)] border border-gray-100'}`}>
      <div className={`relative w-full aspect-[1.1] ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <Image src={card.image} alt={card.title} fill className="object-cover" />
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <h3 className={`text-base md:text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-[#0f1f42]'}`}>{card.title}</h3>
        <p className={`text-[10px] md:text-sm leading-relaxed font-medium ${isDark ? 'text-gray-300' : 'text-gray-400'}`}>
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-24 px-6 md:px-12 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-12 md:mb-20 gap-4 text-center md:text-left items-center md:items-baseline">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0f1f42] tracking-tight">
            Our Facilities
          </h2>
          <div className="text-gray-300 font-medium text-xs md:text-base tracking-wide italic">
            / Where Learning and Comfort Meet
          </div>
        </div>

        {/* Mobile Swiper (Coverflow) */}
        <div className={`block md:hidden transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}>
          <style dangerouslySetInnerHTML={{__html: `
            .swiper-pagination-bullet {
              background-color: #cbd5e1;
              opacity: 1;
            }
            .swiper-pagination-bullet-active {
              background-color: #94a3b8;
            }
          `}} />
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            className="w-full pb-16 pt-4"
          >
            {cardsData.map((card) => (
              <SwiperSlide key={card.id} className="w-[85%] max-w-[350px]">
                <CardContent card={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid gap-8 grid-cols-3 max-w-6xl mx-auto">
          {cardsData.map((card, index) => (
            <div 
              key={card.id}
              className={`transform transition-all duration-1000 ease-out hover:-translate-y-2 ${
                isVisible ? 'translate-y-0 translate-x-0 opacity-100 rotate-0' : 'translate-y-24 -translate-x-12 opacity-0 rotate-[-8deg]'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent card={card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
