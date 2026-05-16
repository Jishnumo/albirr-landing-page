import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <section id="about" className="bg-transparent px-6 py-12 md:px-12 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="border border-[#36E1FF]/30 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 bg-white/5 backdrop-blur-sm">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center text-left items-start">
              <div className="h-1.5 w-12 md:w-16 bg-[#F05B28] mb-6 rounded-full"></div>
              <h2 className="text-2xl font-bold md:font-black text-white md:text-5xl">
                About ALBİRR
              </h2>
              
              <div className="mt-6 space-y-4 text-sm text-white/75 md:text-lg md:space-y-5 text-justify">
                <p className="leading-relaxed">
                  Albirr Schools is proudly delivering quality education in more than 350+ branches not only in India but across the world. We have branches in Kerala, Karnataka, Oman and Saudi Arabia with pre-primary and primary sections. Albirr Islamic Pre School was established with the main vision to mould and transform lives according to Islamic values enhanced through child friendly academic programs.
                </p>
                <p className="leading-relaxed">
                  At Albirr School, we offer comprehensive educational experiences to children that instil good moral and ethical values, combined with academic excellence. Our unique approach to learning through a compelling curriculum and engaging instruction provides children with a holistic development and a positive school culture.
                </p>
              </div>

              <div className="mt-8 flex justify-start">
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

            <div className="relative mt-8 lg:mt-0">
              <div className="relative h-[280px] sm:h-[350px] md:h-[400px] w-full overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-white/5 border border-white/10 shadow-2xl">
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
