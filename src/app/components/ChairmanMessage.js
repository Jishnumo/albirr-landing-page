import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ChairmanMessage = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-12 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="bg-linear-to-br from-[#e4e3e3] via-white to-[#e0dee4]  rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-10 lg:p-12 shadow-sm overflow-hidden relative">
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-5 lg:items-center">
            {/* Left Content */}
            <div className="lg:col-span-3 flex flex-col justify-center items-center lg:items-start">
              <div className="h-1.5 w-16 md:w-24 bg-red-500 mb-8 rounded-full shadow-[0_2px_10px_rgba(239,68,68,0.3)]"></div>
              <h2 className="text-3xl font-bold text-[#26335D] md:text-4xl lg:text-4xl mb-8 tracking-tight leading-tight whitespace-normal md:whitespace-nowrap text-center lg:text-left">
                Chairman&apos;s Message
              </h2>

              <div className="space-y-4 md:space-y-6 text-[#26335D] text-sm md:text-base leading-relaxed font-regular text-justify">
                <p>
                  At Albirr we provide a totally balanced environment focused
                  not only on academic progress of the child but also their
                  physical, social and emotional development. All our centres
                  boasts of state of the art infrastructure with libraries,
                  laboratories for computer and science, play area and well
                  equipped classrooms.
                </p>
                <p>
                  We provide a conducive environment for children to play as
                  well as explore and learn. The classrooms are very spacious
                  and well-lit and ventilated keeping in mind the comfort and
                  free movement of the children. Our smart and Hi-tech
                  classrooms are equipped with Projector, Television, White
                  board, Green board, Pin board etc. They are painted with
                  bright colours and adorned with various colourful teaching and
                  learning aids for better learning experiences.
                  <Link
                    href="/pages/chairmansmessage"
                    className="text-[#26335D] font-regular underline ml-2 hover:text-[#b35ab5] transition"
                  >
                    Know More
                  </Link>
                </p>
              </div>

              <div className="mt-12 flex justify-center lg:justify-start">
                <Link
                  href="/pages/chairmansmessage"
                  className="group inline-flex items-center gap-1 text-[#9C4A9C] font-regular text-base md:text-base transition-colors hover:text-[#b35ab5]"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            {/* Right Profile */}
            <div className="lg:col-span-2 flex flex-col items-center justify-center">
              <div className="w-full max-w-sm md:max-w-md lg:max-w-none">
                <div className="relative w-full aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src="/about_image.png"
                    alt="Sayed Muhammed Koya Jamalullaily"
                    fill
                    sizes="(max-width: 1024px) 90vw, 420px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="mt-8 text-center px-4">
                <h4 className="text-lg text-[#9C4A9C] tracking-tight">
                  Sayed Muhammed Koya Jamalullaily
                </h4>
                <p className="text-[#9C4A9C] text-sm mt-1">Chairman - Albirr</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChairmanMessage;
