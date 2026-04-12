import React from 'react';
import { Baby, Home, Laptop, Shapes } from 'lucide-react';

const FeatureCard = ({ title, icon: Icon, gradient }) => (
  <div className={`relative group p-8 rounded-[2.5rem] ${gradient} shadow-2xl transition-all hover:scale-105 hover:shadow-3xl flex flex-col items-center text-center justify-between min-h-[320px]`}>
    <div className="flex-1 flex items-center justify-center">
      <div className="bg-white/20 p-6 rounded-full backdrop-blur-sm border border-white/30 group-hover:scale-110 transition-transform">
        <Icon className="h-12 w-12 text-white" strokeWidth={1.5} />
      </div>
    </div>
    <h3 className="text-2xl font-black text-white leading-tight mt-6">
      {title}
    </h3>
  </div>
);

const Features = () => {
  const features = [
    {
      title: "Child Friendly Schooling",
      icon: Baby,
      gradient: "bg-gradient-to-br from-[#4facfe] to-[#00f2fe]"
    },
    {
      title: "Nurturing Environment",
      icon: Home,
      gradient: "bg-gradient-to-br from-[#f093fb] to-[#f5576c]"
    },
    {
      title: "IT Enabled Learning",
      icon: Laptop,
      gradient: "bg-gradient-to-br from-[#89f7fe] to-[#66a6ff]"
    },
    {
      title: "Activity Based Learning",
      icon: Shapes,
      gradient: "bg-gradient-to-br from-[#ff9a9e] to-[#fecfef]"
    }
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
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
