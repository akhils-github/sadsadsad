"use client";
import Image from "next/image";
import Link from "next/link";
import { React, useEffect, useState } from "react";

export const Footer = ({ scrollToTop, data }) => {
  const [hoveredId, setHoveredId] = useState(null);
  return (
    <div className="w-full bg-blue h-screen flex flex-col justify-between relative ">
      <div className=" flex justify-center items-center  lg:pt-[20vh] pt-[10vh] md:pt-[15vh]">
        <Image
          src={"/images/Subtract.png"}
          alt="Footer Curve"
          width={800}
          height={800}
          className="absolute bottom-0 right-0 z-0 opacity-50 lg:w-xl object-contain hidden md:block"
        />
        <div className="flex justify-start items-start"></div>

        <div className="flex items-center justify-center flex-col">
          <div className="md:gap-10 gap-5 grid lg:grid-cols-3 px-5 w-full">
            {data.contacts.map((item) => (
              <div
                onMouseEnter={() => setHoveredId(item?.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  backgroundColor:
                    hoveredId === item?.id ? item?.hover_colour : "#223B80",
                }}
                key={item?.id}
                className={`bg-[#223B80] rounded-[50px] md:flex-row lg:flex-col lg:justify-center
                   flex flex-col md:justify-between justify-center items-center lg:py-5 px-3 md:py-10
                   lg:gap-0 lg:px-10 md:px-20 transition-colors duration-300 py-1 md:gap-5 hover-${item?.hover_colour} w-full md:w-auto  h-full overflow-hidden`}
              >
                <h3 className="mb-2 footer-mainheading">{item?.heading}</h3>
                <p className="footer-subheading text-center ps-5 sm:ps-0 mb-5 md:mb-0 lg:max-w-sm md:max-w-md">
                  {item?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex  flex-col justify-between  h-full">
        {data?.character?.url && (
          <div
            className="flex justify-center mt-10 mb-0 "
            data-aos-easing="ease-in-out"
            data-aos="fade-up"
          >
            <Image
              src={data?.character?.url}
              alt={data?.character?.name}
              unoptimized={data?.character?.ext === ".gif"}
              width={745}
              height={355}
              className=" h-auto w-[230px] object-contain lg:w-[400px] sm:w-[300px] md:w-[300px] xl:w-[500px]"
            />
          </div>
        )}
        <div
          className="flex justify-end  md:pr-20 pb-4 pr-10 items-end text-end"
          onClick={scrollToTop}
        >
          <button className="go-top cursor-pointer">Go to top</button>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="flex justify-end items-end relative bg-[#12296A] py-3"
      >
        {data?.left_character_image?.url && (
          <div className="w-sm absolute left-0 bottom-10 h-sm hidden md:flex">
            <Image
              src={data?.left_character_image?.url}
              alt={data?.left_character_image?.name}
              unoptimized={data?.left_character_image?.ext === ".gif"}
              width={830}
              height={450}
              className=" w-full object-contain h-full"
              data-aos="fade-right"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-anchor-placement="bottom-left"
            />
          </div>
        )}
        <div className=" flex justify-between items-center w-full mx-auto  px-28  py-3  flex-col md:flex-row">
          <div className="flex order-2 md:order-1 mt-5 opacity-50">
            <p className="lg:text-[12px]  [font-family:var(--font-primary)] text-white font-medium   text-center md:text-left text-[9px]">
              {data?.copyright}
            </p>
          </div>
          {/* Social Media Links */}
          <div className="flex gap-5 md:gap-10 mb-3 md:mb-0 order-1 md:order-2 z-10">
            {data?.social_media?.map((item) => (
              <a
                href={item?.link}
                key={item?.id}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <Image
                  src={item?.icon?.url}
                  alt={item?.icon?.name}
                  width={28}
                  height={28}
                  className="w-[28px] h-[27px]"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
