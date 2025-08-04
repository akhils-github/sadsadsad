"use client";
import { experienceData } from "@/constants/dummy-data/home/data";
import Image from "next/image";
import React, { useState } from "react";

import { HomeModal } from "../popups/HomeModal";

export const Experience = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const openModal = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideo("");
  };

  return (
    <>
      <div className="my-30">
        {experienceData.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-1 lg:grid-cols-2 lg:pr-10"
          >
            {/* Image Section */}
            <div className="w-full lg:h-[500px] md:h-[416px] h-[313px] relative">
              <Image
                src={item.imageSrc}
                width={500}
                height={500}
                alt="model"
                className="w-full object-cover h-full"
              />
              <button
                onClick={() => openModal(item.videoUrl)}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-full"
                aria-label="Play video"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="86"
                  height="86"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-play-icon lucide-circle-play drop-shadow-lg"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" fill="#ffffff" />
                </svg>
              </button>
            </div>

            {/* Content Section */}
            <div className="w-full lg:h-[500px] bg-[#FEFCE8] flex flex-col justify-center items-center md:h-[437px] h-[418px]">
              <h1 className="text-[#14191A] md:text-[48px] font-(family-name:--font-secondary) font-normal leading-[120%] tracking-[0.01em] text-[28px]">
                {item.title}
              </h1>
              <h1 className="stroke-text md:text-7xl font-extrabold text-5xl">
                {item.subtitle}
              </h1>
              <div className="w-full h-auto mt-10 bg-[#fffce8]">
                <p className="text-[16px] text-[#14191A] text-center leading-[140%] lg:leading-[1.6] px-5 font-(family-name:--font-primary) md:leading-[1.8] font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      <HomeModal
        isOpen={isModalOpen}
        videoUrl={currentVideo}
        onClose={closeModal}
      />
    </>
  );
};