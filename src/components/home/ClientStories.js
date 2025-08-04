"use client";
import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { clientStories } from "@/constants/data/data";
import { ClientCard } from "../card/ClientCard";
import Image from "next/image";
import Link from "next/link";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const ClientStories = () => {
  const swiperRef = useRef(null);

  return (
    <div className="pl-10 w-full relative">
      <div className="lg:flex-row md:flex-row flex flex-col lg:items-center lg:justify-between max-w-6xl md:justify-between md:items-center ">
        <div className="lg:max-w-3xl md:max-w-lg max-w-lg w-full order-2 lg:order-1 md:order-2">
          <p className="sub-heading leading-[1.4]">
            Trusted by 50+ <br />
            homeowners & businesses
          </p>
        </div>
        {/* <div className="lg:size-48 md:size-48 size-38 order-1 lg:order-2 md:order-2">
          <Image
            src={clientStories?.icon}
            alt="Turnkey Process"
            className="h-full w-full object-contain"
            height={134}
            width={222}
          />
        </div> */}
      </div>

      {/* Swiper Container */}
      <div className="mt-10 relative">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
        
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet-custom',
            bulletActiveClass: 'swiper-pagination-bullet-active-custom',
          }}
        
       
          grabCursor={true}
          breakpoints={{
            320: {
              slidesPerView: 1.2, // Show part of the next slide
              spaceBetween: 20,
              centeredSlides: false, // or true for center alignment
            },
            768: {
              slidesPerView: 1.8, // Shows 2 full + 1 partial slide
              spaceBetween: 20,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
              centeredSlides: false,
            },
          }}
          
          className="client-stories-swiper"
        >
          {clientStories.cards.map((item, index) => (
            <SwiperSlide key={index}  >
              <div className="w-full">
                <ClientCard item={item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
    
 
      </div>

      {/* Custom Styles */}

    </div>
  );
};