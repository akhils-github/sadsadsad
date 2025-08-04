"use client";


import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { logoSectionData } from "@/constants/dummy-data/home/data";

const  LogoSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-amber-100 py-5 ">
      <div className="">
        <Slider {...settings}>
          {logoSectionData.map((logo, index) => (
            <div key={index} className="px-2">
              <Image width={144} height={144} src={logo} alt={`Client ${index + 1}`} className="mx-auto w-32 h-16 object-contain" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LogoSection;
