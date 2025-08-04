import Image from "next/image";
import React from "react";

export const HeroSection = ({ data }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={
          data?.background_video?.thumbnail?.url || "/static/hero-banner.webp"
        }
        className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-w-xl"
      >
        <source src={data?.background_video?.url} type="video/mp4" />
      </video>

      {/* Curved Overlay Section */}

      <div className="absolute bottom-0 left-0 w-full lg:py-5 bg-pink/90  z-10 rounded-t-[48px] md:rounded-t-[140px] text-center flex justify-center items-center sm:py-10 py-20 fade-in-up  ">
        <h1 className="main-heading lg:max-w-6xl   md:px-0   -mt-10 sm:-mt-0 md:max-w-3xl sm:max-w-lg max-w-sm">
          {data?.heading}
          <span className="relative inline-block z-10">
            <span className="relative z-10 md:ps-5">
              {" "}
              {data?.heading_high_light_word}
            </span>
            <Image
              src="/images/highlight.png"
              alt="Highlight"
              width={488}
              height={104}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 zoom-in"
            />
          </span>{" "}
          {data?.trailing}
        </h1>
      </div>
    </section>
  );
};
