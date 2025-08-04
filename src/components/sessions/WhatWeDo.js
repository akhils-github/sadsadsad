import Image from "next/image";
import React from "react";

export const WhatWeDo = ({ data }) => {
  return (
    <section
      key="what-we-do"
      className="relative bg-pink text-white px-4 min-h-screen flex  justify-center pt-44 overflow-hidden fade-in-up"
    >
      <div className="z-10 space-y-4  w-full lg:mt-20 md:mt-5 sm:mt-24 mt-32">
        <p className="max-w-4xl mx-auto flex items-center text-white font-bold text-xl 2xl:text-5xl 2xl:max-w-7xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug text-center">
          {data?.description}
        </p>
      </div>
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/assets/what-curv.png"
          alt="Curve shape"
          width={1920}
          height={200}
          className="absolute bottom-1/3 right-0 w-full h-auto"
        />
        <Image
          src="/assets/what-sec.png"
          alt="Bottom Shape"
          width={1920}
          height={200}
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-anchor-placement="top-bottom"
          className="absolute bottom-0 left-0 w-full h-auto object-cover"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 z-10">
        {/* <div className="absolute left-1/3 md:left-10 bottom-[30%]">
          <Image
            src={data?.left_top_character_image?.url}
            alt={data?.left_top_character_image?.name}
            width={99}
            height={99}
            className="w-[99px] h-auto"
            data-aos="fade-right"
          />
        </div> */}
        {(data?.left_character_image?.url ||
          data?.right_character_image?.url) && (
          <div className="flex justify-between items-end h-full ">
            {data?.left_character_image?.url && (
              <Image
                src={data?.left_character_image?.url}
                alt={data?.left_character_image?.name}
                width={350}
                height={345}
                 unoptimized={data?.left_character_image?.ext === ".gif"}
                data-aos="fade-right"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-anchor-placement="bottom-left"
                className="md:w-48 sm:w-24 w-20 pl-2 h-auto md:ml-20 md:mb-10"
              />
            )}
            {data?.right_character_image?.url && (
              <Image
                src={data?.right_character_image?.url}
                alt={data?.right_character_image?.name}
                width={1920}
                unoptimized={data?.right_character_image?.ext === ".gif"}
                height={1080}
                className="lg:w-[600px] h-auto md:w-[500px] w-[250px]"
                data-aos="fade-up-right"
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
};
