"use client";
import React from "react";

export default function CurateBanner() {
  return (
    <div className="relative w-full h-[396px] md:h-[424px] lg:h-[309px] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/placeholder.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-center gap-10 px-6 lg:px-20 text-white text-center lg:text-left">
        <h2 className="text-2xl lg:text-5xl sub-heading-white font-bold">
          Curate your space with us
        </h2>

        <a
          href="#consultation"
          className="font-medium border-2 border-white px-6 py-4 text-sm lg:text-base hover:bg-white hover:text-black transition-all duration-300"
        >
          Book Free Consultation
        </a>
      </div>
    </div>
  );
}
