import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export const AboutUs = ({ data }) => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: true, // Animation happens only once when scrolling down
      mirror: false, // Disable reverse animation when scrolling up
      offset: 100, // Trigger animation 100px before element enters viewport
      anchorPlacement: "top-bottom", // When top of element hits bottom of viewport
    });

    // Refresh AOS when component mounts
    AOS.refresh();
  }, []);

  return (
    <section
      key="about"
      className="relative bg-green text-white px-4 min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Top Curve */}
      <div className="absolute top-0 -left-4 w-screen">
        <Image
          src="/assets/about-curve.png"
          alt="Top Curve"
          className="object-contain bg-amber- w-full"
          data-aos="fade-down"
          width={1920}
          height={200}
          data-aos-delay="100"
        />
      </div>

      {/* Main Content */}
      <div className="z-10 max-w-4xl mx-auto text-center space-y-4">
        <h2 className="sub-heading" data-aos="fade-up" data-aos-delay="200">
          {data?.heading}
        </h2>
        <p
          className="paragraph-default"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {data?.paragraph}
        </p>
        <Link
          href={data?.link?.path}
          className="button-default mt-6"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <p className="text-black">{data?.link?.label}</p>
        </Link>
      </div>

      {/* Jhoom Character - Left Bottom */}
      {data?.left_character_image?.url &&
      <Image
        src={data?.left_character_image?.url}
        alt={data?.left_character_image?.name}
         unoptimized={data?.left_character_image?.ext === ".gif"}
        width={1920}
        height={1080}
        data-aos="fade-right"
        data-aos-delay="500"
        data-aos-mirror="true"
        data-aos-anchor-placement="bottom-left"
        className="absolute bottom-0 md:w-xl sm:w-sm z-10 h-auto left-0 w-52"
      />
      }
      {/* Louie Character - Right Bottom */}
      {data?.right_character_image?.url &&
      <Image
        src={data?.right_character_image?.url}
        alt={data?.right_character_image?.name}
        unoptimized={data?.right_character_image?.ext === ".gif"}
        width={776}
        height={781}
        className="absolute -bottom-10 sm:w-52  md:w-sm z-10 h-auto aos-rotate-fix right-0 w-52"
        data-aos="fade-left"
        data-aos-delay="600"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="bottom-right"
        data-aos-mirror="true"
      />
}

      {/* Bottom Curve */}
      <div
        className="absolute bottom-0 left-0 w-full h-[200px] z-5"
        data-aos="fade-up"
        data-aos-delay="700"
        data-aos-anchor-placement="top-bottom"
        data-aos-mirror="true"
      >
        <Image
          src="/assets/about-curv.png"
          alt="Bottom Shape"
          width={1920}
          height={200}
          className="absolute bottom-0 left-0 w-full h-auto object-cover z-5"
        />
      </div>
    </section>
  );
};
