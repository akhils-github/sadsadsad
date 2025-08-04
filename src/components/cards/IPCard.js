// IPCard.jsx
"use client";
import Image from "next/image";
import Link from "next/link";

export default function IPCard({ item }) {
  return (
    <div className="relative group hover:border-[#323232] border-b-[10px]  border-transparent rounded-[40px] transition-all duration-300 ease-in-out h-full lg:pt-16">
      {" "}
      {/* Added lg:pt-16 for top padding */}
      <Link
        href={item?.link?.path}
        className="block md:hidden absolute inset-0 z-20"
      />
      <div
        style={{
          backgroundColor: item?.background_colour,
    
        }}
        className={`relative rounded-[40px]  px-2 py-2 flex flex-row lg:flex-col items-center justify-between overflow-visible h-full`}
      >
        {/* Image + Title (desktop) */}
        <div
          className="flex flex-col items-center w-1/2 lg:w-full
              transition-all duration-300 lg:group-hover:-translate-y-15 lg:group-hover:scale-65
              relative z-30 pb-5"
        >
          {/* 🎯 Fixed: Removed negative margin and positioned absolutely on desktop 🎯 */}
          <div className="relative w-[108px] h-[108px] md:w-[175px] md:h-[175px] lg:w-[320px] lg:h-[320px] mb-4 lg:absolute lg:-top-16 lg:mb-0">
            <Image
              src={item?.image?.url}
              alt={item?.name}
              fill
              sizes="(max-width: 768px) 108px, (max-width: 1024px) 175px, 320px"
              className="object-cover"
            />
          </div>
          {/* Added margin top on desktop to account for absolutely positioned image */}
          <p className="text-2xl font-extrabold hidden lg:block lg:mt-[256px]">
            {item.name}
          </p>
        </div>

        {/* Title + Desc (mobile) */}
        <div className="flex flex-col justify-center w-1/2 lg:hidden pl-4 text-center space-y-2">
          <p className="text-2xl font-bold">{item?.name}</p>
          <p className="text-base hidden md:block mt-1">{item?.decription}</p>
          <Link
            href={item?.link?.path}
            className="font-semibold hidden md:block lg:hidden opacity-75 transition-opacity"
          >
            View more
          </Link>
        </div>

        {/* Desc (desktop hover) */}
        <div
          className="hidden lg:block absolute bottom-6 left-6 right-6
              text-center text-base opacity-0 translate-y-6
              transition-all duration-300 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 z-0 space-y-3"
        >
          <p className="text-sm leading-5 font-normal">{item?.decription}</p>
          <Link
            href={item?.link?.path}
            className="font-semibold mix-blend-multiply opacity-75 transition-opacity inline-block"
          >
            View more
          </Link>
        </div>
      </div>
    </div>
  );
}
