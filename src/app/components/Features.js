import React from 'react';
import Image from 'next/image';

const FeatureCard = ({ id, alt }) => (
  <div className="relative group overflow-hidden rounded-[2.5rem] shadow-xl transition-all hover:scale-105 hover:shadow-2xl">
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

  return (
    <section className="bg-white py-12 px-6 md:px-12 lg:py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-black text-[#0f1f42] md:text-5xl lg:text-6xl tracking-tight">
              Why Choose Us?
            </h2>
          </div>
          <div className="text-gray-400 font-medium tracking-wider text-sm md:text-base uppercase flex items-center gap-2 pb-2">
            / Our Features
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
