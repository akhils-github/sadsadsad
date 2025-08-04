// "use client";
// import { useState } from "react";
// import { FreeMode } from "swiper/modules";

import { servicesData } from "@/data/pages/services";

// import { ProjectCard } from "@/components/card/ProjectCard";

// import { ArrowUp10, KeyRound } from "lucide-react";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/mousewheel";
// import SignatureCard from "@/components/card/SignatureCard";

// import { useParams } from "next/navigation";
// import Image from "next/image";
// import {
//   serviceProjectDetails,
//   turnkeyData,
// } from "@/constants/dummy-data/services/data";
// import { serviceprojectData } from "@/constants/dummy-data/projects/data";
// import { servicesTabs } from "@/data/layouts/tab";
// import { includesSlug } from "@/utils/convertion";
// import Link from "next/link";
// import { servicesData } from "@/data/pages/services";

export default function Page() {
  // const { slug } = useParams();
  // const serviceDetails = servicesData?.find((item) =>
  //   includesSlug(item?.slug, slug)
  // );
  return (
    <div>

    </div>
    // <div className="px-10 flex flex-col gap-y-3 mt-28 mb-5">
    //   <div
    //     className="flex overflow-x-auto cursor-grab whitespace-nowrap items-center gap-x-5 border-b border-[#E8E8E8]"
    //     style={{
    //       scrollbarWidth: "none",
    //       msOverflowStyle: "none",
    //       WebkitOverflowScrolling: "touch",
    //     }}
    //   >
    //     {servicesTabs?.map(({ name, icon, activeIcon, id, link }, i) => (
    //       <Link
    //         href={link}
    //         key={`${name}-${i}`}
    //         className={`flex items-center gap-x-2 font-medium px-3 py-4 ${
    //           includesSlug(id, slug) ? " active-tab" : ""
    //         }`}
    //         style={{ cursor: "pointer" }}
    //       >
    //         {includesSlug(id, slug) ? (
    //           <Image
    //             width="20"
    //             height="20"
    //             src={activeIcon}
    //             alt={name}
    //             className="size-5"
    //           />
    //         ) : (
    //           <Image
    //             width="20"
    //             height="20"
    //             src={icon}
    //             alt={name}
    //             className="size-5"
    //           />
    //         )}

    //         <p>{name}</p>
    //       </Link>
    //     ))}
    //   </div>
    //   <p className="service-heading mt-8 ">{serviceDetails?.heading}</p>
    //   <p className="py-5 primary-paragraph font-normal">
    //     {serviceDetails?.description}
    //   </p>
    //   <div className="w-full h-full">
    //     <Image
    //       className="w-full object-cover lg:h-full md:rounded-xl h-[400px] rounded-lg"
    //       src={serviceDetails?.bannerImg}
    //       alt="Features Image"
    //       width={1488}
    //       height={600}
    //     />
    //   </div>

    //   <p className="subpage-subheading py-3 mt-10 font-bold">
    //     {serviceDetails?.offers?.heading}
    //   </p>
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
    //     {serviceDetails?.offers?.items?.map((item, i) => (
    //       <SignatureCard key={`${item?.title}-${i}`} item={item} />
    //     ))}
    //   </div>
    //   <div className="flex flex-col gap-y-5 justify-center">
    //     <p className="subpage-subheading py-3 mt-10 font-bold">
    //       {serviceDetails?.projects?.heading}
    //     </p>
    //     <div className="relative w-full">
    //       <Swiper
    //         modules={[FreeMode]}
    //         freeMode={true}
    //         spaceBetween={30}
    //         slidesPerView={4.2}
    //         breakpoints={{
    //           1024: { slidesPerView: 4 },
    //           768: { slidesPerView: 2 },
    //           0: { slidesPerView: 1 },
    //         }}
    //         className="w-full"
    //       >
    //         {serviceDetails?.projects?.items?.map((item, index) => (
    //           <SwiperSlide key={`${item?.title}-${index}`}>
    //             <ProjectCard item={item} />
    //           </SwiperSlide>
    //         ))}
    //       </Swiper>
    //     </div>
    //   </div>
    // </div>
  );
}
