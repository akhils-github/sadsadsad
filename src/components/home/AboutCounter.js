"use client";
import React from "react";
import { stats } from "@/constants/data/data";
import Image from "next/image";
import Link from "next/link";

export default function AboutCounter() {
  const scrollToDown = () => {
    window.scrollTo({ top: window.scrollY + 880, behavior: "smooth" });
  };

  return (
    <div className="relative overflow-hidden">
      {/* Scroll Icon and Label */}
      {/* <div
        className="hidden md:flex flex-col items-center justify-center absolute right-5    animate-move-up-down cursor-pointer text-xs text-gray-700 md:top-2/12 lg:top-0"
        onClick={scrollToDown}
      > */}

      <div
        onClick={scrollToDown}
        className="hidden md:flex flex-col items-center justify-center absolute right-5    animate-move-up-down cursor-pointer text-xs text-[#FFFFFF] md:top-2/12 lg:top-5 group "
      >
        {/* <p className="rotate-[-90deg] font-medium whitespace-nowrap transition-transform duration-300 group-hover:translate-y-1">
          Scroll down
        </p> */}
        <div className="">
          <Image
            height={29}
            width={12}
            src="/assets/icons/line-big.png"
            alt=""
            className="hidden group-hover:block transition-opacity duration-300"
          />
          <Image
            height={29}
            width={12}
            src="/assets/icons/line-small.png"
            alt=""
            className="block group-hover:hidden transition-opacity duration-300"
          />
        </div>
      </div>

      {/* <Image
          src="/assets/scroll.png"
          alt="Scroll Down"
          width={20}
          height={20}
        /> */}

      {/* Stats Grid */}
      <div className="flex items-center w-full justify-center md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 md:text-center w-full bg-white py-5 px-10">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col md:items-center px-4">
              <h2
                className="text-[48px] font-bold text-transparent bg-clip-text inline-block"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, #FDD012 0%, #A36305 100%)",
                }}
              >
                {stat?.count}
              </h2>
              <p className="text-base text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About Text */}
      <div className="w-full flex flex-col items-center justify-center text-center px-10 bg-white">
        <p className="max-w-3xl text-base md:text-lg leading-relaxed text-gray-800 md:pt-44 pt-20">
          By the inspiration of our creator,{" "}
          <span className="font-semibold">LAEL DESIGNERS</span> began
          functioning in this form from 2007 but had been in the construction,
          interior designing, and home remodeling field years before. Ever since
          our clients have been passing only good words about our excellent work
          and craftsmanship and dedication.
        </p>

        <Link
          href="#"
          className="mt-6 text-sm font-medium text-black underline hover:text-gray-600 transition-colors"
        >
          More About Us
        </Link>
      </div>
    </div>
  );
}
