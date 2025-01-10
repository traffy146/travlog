"use client";

import { useState } from "react";
import Image from "next/image";

const destinations = [
  {
    id: 1,
    name: "Paradise Beach, Bantayan Island",
    location: "Rome, Italy",
    price: "$550.16",
    image: "/images/carousel/1.png",
    ratings: "4.8",
  },
  {
    id: 2,
    name: "Ocean with full of Colors",
    location: "Maldives",
    price: "$20.99",
    image: "/images/carousel/2.png",
    ratings: "4.5",
  },
  {
    id: 3,
    name: "Mountain View, Above the cloud",
    location: "United Arab Emeries ",
    price: "$150.99",
    image: "/images/carousel/3.png",
    ratings: "5.0",
  },
  {
    id: 4,
    name: "Mount Fuji",
    location: "Japan",
    price: "$699",
    image: "/images/carousel/4.jpg",
    ratings: "4.9",
  },
  {
    id: 5,
    name: "Opera House",
    location: "Australia",
    price: "$899",
    image: "/images/carousel/5.jpg",
    ratings: "4.7",
  },

  {
    id: 6,
    name: "Machu Picchu",
    location: "Peru",
    price: "$799",
    image: "/images/carousel/6.jpg",
    ratings: "4.6",
  },
];

export default function DestinationCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === destinations.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? destinations.length - 3 : prevIndex - 1
    );
  };

  return (
    <section>
      <div className="relative">
        {/* Carousel Header */}
        <div className="flex flex-col md:items-center lg:flex-row lg:justify-between mb-8">
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <h2 className="text-xl tracking-[.25em] mb-3 font-bold text-pink">
              TOP DESTINATION
            </h2>
            <h1 className="text-5xl">Explore top destination</h1>
          </div>
          <div className="flex justify-center lg:justify-end gap-4">
            <button
              onClick={prevSlide}
              className="w-20 h-20 flex items-center justify-center rounded-full bg-white hover:bg-gray-50 border border-gray-200 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-20 h-20 flex items-center justify-center rounded-full bg-violet text-white border-gray-200 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
          >
            {destinations.map((destination) => (
              <div key={destination.id} className="min-w-[33.33%] px-4">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-[420px]">
                  <div className="relative h-64">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 flex items-center h-20">
                    <h3 className="text-xl w-1/2 font-semibold truncate">
                      {destination.name}
                    </h3>
                    <p className="text-violet text-end w-1/2 font-bold">
                      {destination.price}
                    </p>
                  </div>
                  <div className="p-4 pt-0 pb-0">
                    <p className="text-gray-600 line-clamp-2">
                      {destination.location}
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="text-orange flex items-center line-clamp-2">
                      <span>{destination.ratings}</span>
                      <svg
                        className="w-4 h-4 "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
