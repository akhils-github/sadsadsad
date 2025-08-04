"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import { images, counters } from "@/constants/data/data";
import Contact from "../popups/ContactForm";
import { heroChangingWords } from "@/constants/dummy-data/home/data";

const HeroSection = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % heroChangingWords.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  const scrollToBottom = () => {
    window.scrollTo({ top: 900, behavior: "smooth" });
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);
  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };
  const [openContact, setOpenContact] = useState(false);
  return (
    <>
      <Contact isOpen={openContact} setIsOpen={setOpenContact} />
      <section className=" w-full mx-auto  flex flex-col gap-y-10 max-w-7xl ">
        <div className=" flex flex-col lg:flex-row lg:items-end lg:justify-between ">
          {/* Text Content */}
          <div className=" md:mb-0 ">
            <p className="  main-heading md:leading-[1.4]">
              From concept to reality, <br className="hidden lg:block md:block" />
              we handle every step{" "}
              <span className="relative inline-block h-[85px] w-[300px] overflow-hidden align-top">
                <span
                  key={heroChangingWords[index]}
                  className="absolute left-0 top- w-full bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text text-transparent animate-slide"
                >
                  {heroChangingWords[index]}
                </span>
              </span>
            </p>
          </div>

          {/* Button */}
          <div
            className="bg-gradient-to-t h-fit w-fit text-black px-8 py-3 rounded-4xl text-lg font-medium transition primary-btn outline-btn md:mt-5 md:w-[300px] text-center "
            onClick={() => setOpenContact(true)}
          >
            Book an Appointment
          </div>
        </div>
        <div className="grid  grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {counters.map((counter, index) => (
            <div key={index} className="flex flex-col gap-y-2.5 justify-between">
              <Image
                src={counter.image}
                width={140}
                height={58}
                alt={counter.label}
                objectFit="contain"
                className="w-16 h-full object-contain "
              />
              <p className="counter-label whitespace-nowrap">
                {counter.label}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="relative w-full group md:h-64  lg:h-[500px] rounded-3xl  flex items-center justify-center overflow-hidden h-[443px] ">
            {images.map((src, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity rounded-3xl duration-1000 ${
                  index === currentIndex
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-105"
                }`}
              >
                {/* Image */}
                <div className="relative  w-full h-full rounded-3xl ">
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110 rounded-3xl "
                  />

                  {/* Gray Overlay */}
                  <div className="absolute inset-0 bgs-gray-950 bg-opacity-40 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                  {/* Show More Button */}
                  <div className="absolute inset-0 bg-gray-950/40 flex flex-col text-white items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <button className="px-4 py-2 text-white font-semibold  flex flex-col justify-center items-center cursor-pointer">
                      <MoveUpRight size={35} strokeWidth={0.9} />{" "}
                      <p className="text-2xl">View Project</p>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-x-3 justify-end">
            {images.map((src, index) => (
              <div key={index} onClick={() => handleThumbnailClick(index)}>
                <Image
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  className={`${
                    index === currentIndex ? " border-4" : " "
                  } size-16 object-cover cursor-pointer rounded-xl border-[#00000099] `}
                  height={80}
                  width={265}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
