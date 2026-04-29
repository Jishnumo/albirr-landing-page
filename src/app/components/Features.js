"use client";
import React from 'react';
import Image from 'next/image';
import { useScrollReveal } from '../hooks/useScrollReveal';

const FeatureCard = ({ id, alt, revealRef, delay }) => (
  <div
    ref={revealRef}
    data-reveal="fade-up"
    data-reveal-delay={delay}
    className="relative group transition-all duration-500 hover:scale-105"
  >
    <Image
      src={`/row${id}.png`}
      alt={alt}
      width={400}
      height={400}
      className="w-full h-auto object-contain"
    />
  </div>
);

const Features = () => {
  const features = [
    { id: 1, alt: "Child Friendly Schooling" },
    { id: 2, alt: "Nurturing Environment" },
    { id: 3, alt: "IT Enabled Learning" },
    { id: 4, alt: "Activity Based Learning" }
  ];

  const headerRef = useScrollReveal({ threshold: 0.1 });
  const ref1 = useScrollReveal({ threshold: 0.1 });
  const ref2 = useScrollReveal({ threshold: 0.1 });
  const ref3 = useScrollReveal({ threshold: 0.1 });
  const ref4 = useScrollReveal({ threshold: 0.1 });
  const refs = [ref1, ref2, ref3, ref4];
  const delays = ["0", "150", "300", "450"];

  return (
    <section className="bg-white py-12 px-6 md:px-12 lg:py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div
          ref={headerRef}
          data-reveal="fade-up"
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="text-3xl font-extrabold text-[#0f1f42] md:text-5xl lg:text-6xl tracking-tight">
              Why Choose Us?
            </h2>
          </div>
          <div className="text-gray-400 font-medium tracking-wider text-sm md:text-base uppercase flex items-center gap-2 pb-2">
            / Our Features
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <FeatureCard
              key={feature.id}
              {...feature}
              revealRef={refs[idx]}
              delay={delays[idx]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
