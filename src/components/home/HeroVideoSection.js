"use client";
import Image from "next/image";
import React from "react";

export default function HeroVideoSection() {
  const scrolldown = () => {
    window.scrollTo({top:scrollY + 1000,behavior:"smooth"})
  }
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="https://laelfe-video.s3.ap-south-1.amazonaws.com/banner-video_compressed+(1).mp4 " type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <p className=" leading-normal px-10 mt-48 max-w-5xl sub-heading-white z-5">
        Creating distinctive spaces through expert design and craftmanship
      </p>
      <div className="flex items-end justify-end mt-10 mr-5 sm:hidden z-50" onClick={scrolldown} >
        <Image src="/assets/scroll.png" alt="Counter" className="" width={20} height={20} />
      </div>
    </div>
    
  );
}
