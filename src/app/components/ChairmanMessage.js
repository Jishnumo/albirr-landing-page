import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ChairmanMessage = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-12 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="bg-[#fcfcfc] border border-gray-100 rounded-[3rem] p-6 md:p-10 lg:p-12 shadow-sm overflow-hidden relative">
          <div className="grid gap-16 lg:grid-cols-5 lg:items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-3 flex flex-col justify-center">
              <div className="h-1.5 w-12 bg-red-500 mb-8 rounded-full shadow-[0_2px_10px_rgba(239,68,68,0.3)]"></div>
              <h2 className="text-4xl font-black text-[#0f1f42] md:text-5xl lg:text-5xl mb-8 tracking-tight leading-tight whitespace-nowrap">
                Chairman&apos;s Message
              </h2>
              
              <div className="space-y-6 text-gray-700 text-lg md:text-xl leading-relaxed font-medium">
                <p>
                  At Albirr we provide a totally balanced environment focused not only on academic progress of the child but also their physical, social and emotional development. All our centres boasts of state of the art infrastructure with libraries, laboratories for computer and science, play area and well equipped classrooms. 
                </p>
                <p>
                  We provide a conducive environment for children to play as well as explore and learn. The classrooms are very spacious and well-lit and ventilated keeping in mind the comfort and free movement of the children. Our smart and Hi-tech classrooms are equipped with Projector, Television, White board, Green board, Pin board etc. They are painted with bright colours and adorned with various colourful teaching and learning aids for better learning experiences. 
                  <Link href="#" className="text-[#9C4A9C] font-bold underline ml-2 hover:text-[#b35ab5] transition">Know More</Link>
                </p>
              </div>

              <div className="mt-12">
                <Link
                  href="#"
                  className="group inline-flex items-center gap-3 text-[#9C4A9C] font-black text-xl transition-all hover:gap-5"
                >
                  Learn More
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#9C4A9C] text-white shadow-lg group-hover:bg-[#b35ab5] transition active:scale-90">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </Link>
              </div>
            </div>

            {/* Right Profile */}
            <div className="lg:col-span-2 flex flex-col items-center justify-center">
              <div className="relative group p-2 rounded-full bg-gradient-to-tr from-[#9C4A9C] via-[#36E1FF] to-[#F05B28] shadow-2xl transition hover:scale-105 duration-500">
                <div className="relative h-64 w-64 md:h-80 md:w-80 overflow-hidden rounded-full border-4 border-white">
                  <Image
                    src="/about_image.png"
                    alt="Sayed Muhammed Koya Jamalullaily"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="mt-8 text-center">
                <h4 className="text-xl font-black text-[#9C4A9C] tracking-tight">
                  Sayed Muhammed Koya Jamalullaily
                </h4>
                <p className="text-gray-500 font-bold mt-1">
                  Chairman - Albirr
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ChairmanMessage;
