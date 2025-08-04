"use client";
import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function ProjectModal({ isOpen, setIsOpen, project }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
  if (!project) return null;

  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={() => setIsOpen(false)}
    >
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel className="w-full max-w-6xl rounded-xl bg-white p-4 sm:p-6 shadow-xl relative">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              onClick={() => setIsOpen(false)}
            >
              <X strokeWidth={3} size={28} />
            </button>

            <div className="flex flex-col md:flex-row gap-6">
              {/* Left Side: Swiper */}
              <div className="w-full md:w-1/2">
                <Swiper
                  spaceBetween={10}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  // thumbs={{ swiper: thumbsSwiper}}
                  modules={[Navigation, Thumbs]}
                  className="rounded-xl overflow-hidden w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px]"
                >
                  {(project?.images || [])?.map((src, index) => (
                    <SwiperSlide key={index} className="relative">
                      <Image
                        width={600}
                        height={400}
                        src={src}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover rounded-xl"
                      />
                      {/* Navigation Buttons */}
                      <div className="swiper-button-prev absolute top-1/2 left-20 -translate-y-1/2 z-10 bg-[#14191ACC] !font-normal text-white  !size-12 flex items-center justify-center rounded-full hover:bg-gray-700">
                        <ChevronLeft className="text-white !size-10" />
                      </div>
                      <div className="swiper-button-next absolute top-1/2 left-20 -translate-y-1/2 z-10 bg-[#14191ACC] !font-normal text-white  !size-12 flex items-center justify-center rounded-full hover:bg-gray-700">
                        <ChevronRight className="text-white !size-10" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* <div className="swiper-button-next absolute top-1/2 right-2 -translate-y-1/2 z-10 bg-gray-800 text-white w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full hover:bg-gray-700" /> */}

                {/* Thumbnails */}
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={8}
                  slidesPerView={4}
                  watchSlidesProgress
                  modules={[Thumbs]}
                  className="mt-4"
                  breakpoints={{
                    640: { slidesPerView: 5 },
                    1024: { slidesPerView: 6 },
                  }}
                >
                  {(project?.images || [])?.map((src, index) => (
                    <SwiperSlide key={index} className="cursor-pointer">
                      <Image
                        src={src}
                        width={80}
                        height={60}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-20 h-16 object-cover rounded-lg border-2 border-transparent hover:border-yellow-400 transition"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Right Side */}
              <div className="w-full md:w-1/2">
                <DialogTitle
                  as="h3"
                  className="text-xl font-semibold text-gray-900"
                >
                  <div className="flex flex-wrap items-center gap-2 text-gray-600 text-xs mt-3 mb-3">
                    {project?.label?.split(",")?.map((label, index, arr) => (
                      <span key={index}>
                        {label.trim()}
                        {index < arr?.length - 1 && (
                          <span className="text-yellow-500 mx-1">◆</span>
                        )}
                      </span>
                    ))}
                  </div>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold">
                    {project?.title}
                  </p>
                </DialogTitle>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-6 mb-6 text-sm text-gray-700">
                  <div>
                    <p className="font-medium">Clients:</p>
                    <p>{project?.client || "N/A"}</p>
                  </div>
                  <div>
                    <p className="font-medium">Location:</p>
                    <p>{project?.location || "N/A"}</p>
                  </div>
                  <div>
                    <p className="font-medium">Area:</p>
                    <p>{project?.area || "N/A"}</p>
                  </div>
                  <div>
                    <p className="font-medium">Year:</p>
                    <p>{project?.year || "N/A"}</p>
                  </div>
                </div>

                <div className="project-description mt-4 text-sm text-gray-700 leading-relaxed">
                  <p className="font-semibold mb-1">About the project:</p>
                  <p>{project?.description}</p>
                </div>

                <hr className="border-gray-300 mt-6 mb-6" />

                {/* Client Image */}
                <div className="overflow-hidden rounded-lg w-32 sm:w-48">
                  <Image
                    src={project?.clientImage || "/assets/client1.png"}
                    alt="Client"
                    width={200}
                    height={140}
                    className="object-cover"
                  />
                </div>

                {/* Testimonial */}
                <div className="mt-3">
                  <p className="text-yellow-600 font-bold text-sm sm:text-base">
                    {project?.testimonialTitle ||
                      "Lael Designers made our dream home into reality"}
                  </p>
                  <p className="text-sm mt-2 text-gray-600">
                    {project?.testimonial ||
                      `"From start to finish, the team was professional, creative, and detail-oriented. They understood our vision and delivered a stunning home with flawless execution. Highly recommend!"`}
                  </p>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
