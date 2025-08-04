"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from "next/image";

const images = [
  "/assets/slider-1.png",
  "/assets/slider-2.png",
  "/assets/slider-1.png",
  "/assets/slider-1.png",
];

const HeroSlider = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {images.map((src, index) => (
        <div key={index} className="relative overflow-hidden group rounded-lg">
          {/* Image */}
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            width={300}
            height={200}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Gray Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

          {/* Show More Button */}
          <button className="absolute inset-x-0 bottom-4 mx-auto bg-white text-black font-semibold px-4 py-2 rounded-md opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            Show More
          </button>
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;
