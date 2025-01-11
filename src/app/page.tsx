"use client";
import Image from "next/image";
import DestinationCarousel from "@/components/DestinationCarousel";
import Subscribe from "@/components/Subscribe";
export default function Home() {
  return (
    <div>
      <Image
        src="/images/objects/1.png"
        alt="objects"
        width={65}
        height={169.95}
        className="absolute hidden md:block"
        style={{ bottom: "-20%", left: "9%" }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen bg-white relative">
        {/* Hero Section */}
        <section className="pt-10 md:pt-20 px-4">
          <div className="mx-auto flex flex-col lg:flex-row items-center justify-center text-center lg:text-left">
            {/* Image Container */}
            <div className="w-full lg:w-2/3 pl-0 lg:pl-12 mb-8 lg:mb-0 order-first lg:order-last flex justify-center">
              <Image
                src="/images/cover/1.png"
                alt="Cover"
                width={772}
                height={713}
                className="rounded-lg w-full h-auto"
              />
            </div>

            {/* Content Container */}
            <div className="w-full lg:w-1/3 order-last lg:order-first flex flex-col items-center lg:items-start">
              <div className="flex items-center lg:justify-start  md:justify-center sm:justify-center p-4 mb-6 md:mb-10">
                <div className="md:w-50 px-4 md:px-8 py-3 md:py-5 drop-shadow-lg bg-white text-pink rounded-full flex items-center justify-center">
                  <span className="text-sm md:text-base font-bold mr-2 md:mr-5">
                    Explore the World!
                  </span>
                  <Image
                    src="/images/cake/1.png"
                    alt="Travel"
                    width={24}
                    height={24}
                    className="w-4 h-4 md:w-6 md:h-6"
                  />
                </div>
              </div>

              <h1 className="text-6xl font-bold mb-8 md:mb-16">
                Travel <span className="text-pink">top destination</span> of the
                world
              </h1>

              <p className="text-base lg:text-start lg:w-full md:w-1/2 sm:w-1/2  md:text-lg text-gray-600 mb-6 md:mb-8">
                We always make our customer happy by providing as many choices
                as possible
              </p>

              <div className="flex flex-col sm:flex-row lg:gap-3 md:gap-3 w-full sm:justify-center lg:justify-start">
                <button className="w-full  sm:w-auto px-6 md:px-8 py-2 md:py-3 drop-shadow-lg font-bold bg-violet text-white rounded-full">
                  Get Started
                </button>
                <button className="w-full sm:w-auto px-6 md:px-8 py-2 md:py-3 flex justify-center items-center border rounded-full hover:bg-gray-100">
                  <Image
                    src="/images/play/1.png"
                    alt="play"
                    width={24}
                    height={24}
                  />
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Sponsors Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
              <Image
                src="/images/logos/3.png"
                alt="Sponsor 1"
                width={120}
                height={32}
                className="w-24 md:w-32 lg:w-auto h-auto"
              />
              <Image
                src="/images/logos/2.png"
                alt="Sponsor 2"
                width={120}
                height={32}
                className="w-24 md:w-32 lg:w-auto h-auto"
              />
              <Image
                src="/images/logos/1.png"
                alt="Sponsor 3"
                width={120}
                height={32}
                className="w-24 md:w-32 lg:w-auto h-auto"
              />
              <Image
                src="/images/logos/4.png"
                alt="Sponsor 4"
                width={120}
                height={32}
                className="w-24 md:w-32 lg:w-auto h-auto"
              />
              <Image
                src="/images/logos/5.png"
                alt="Sponsor 5"
                width={120}
                height={32}
                className="w-24 md:w-32 lg:w-auto h-auto"
              />
            </div>
          </div>
        </section>

        {/* Services  */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Services
            </h2>
          </div>
        </section>

        {/* Destinations Carousel */}
        <section className="py-16 ">
          <DestinationCarousel />
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-orange mb-8 rounded-3xl ">
          <Subscribe />
        </section>
      </div>
    </div>
  );
}
