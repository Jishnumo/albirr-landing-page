import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <section className="bg-transparent px-6 py-12 md:px-12 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="border-2 border-[#36E1FF]/40 rounded-[2.5rem] p-8 md:p-12 bg-white/3">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <div className="h-1.5 w-16 bg-[#F05B28] mb-6 rounded-full"></div>
              <h2 className="text-4xl font-black text-white md:text-5xl">
                About ALBİRR
              </h2>
              
              <div className="mt-8 space-y-5 text-base text-white/75 md:text-lg">
                <p className="leading-relaxed">
                  Albirr Schools is proudly delivering quality education in more than 350+ branches not only in India but across the world. We have branches in Kerala, Karnataka, Oman and Saudi Arabia with pre-primary and primary sections. Albirr Islamic Pre School was established with the main vision to mould and transform lives according to Islamic values enhanced through child friendly academic programs.
                </p>
                <p className="leading-relaxed">
                  At Albirr School, we offer comprehensive educational experiences to children that instil good moral and ethical values, combined with academic excellence. Our unique approach to learning through a compelling curriculum and engaging instruction provides children with a holistic development and a positive school culture.
                </p>
              </div>

              <div className="mt-10">
                <Link
                  href="#"
                  className="group inline-flex items-center gap-3 text-white font-semibold transition-all hover:gap-5"
                >
                  Learn More
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#9C4A9C] text-white group-hover:bg-[#b35ab5] transition">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              </div>
            </div>

            {/* Right Image Container */}
            <div className="relative">
              <div className="relative h-[400px] w-full overflow-hidden rounded-[2rem] bg-white/5 border border-white/10">
                <Image
                  src="/second_image.png"
                  alt="Al-Birr Schools - Students and Learning"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
