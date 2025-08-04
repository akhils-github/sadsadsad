import Image from "next/image";
import React from "react";

export const ClientCard = ({ item }) => {
  return (
    <div className="group w-full overflow-hidden relative h-auto lg:h-auto transition-transform duration-300 hover:-translate-y-3">
      <Image
        className="w-full h-[272px] object-cover transition-transform duration-300"
        src={item.image}
        alt={item.title}
        width={383}
        height={264}
      />
      <div className="py-4">
        <p className="golden-heading bg-clip-text text-transparent mb-2">
          {item.title}
        </p>
        <p className="primary-paragraph font-normal">{item.description}</p>
        <p className="primary-paragraph font-semibold mt-3 text-black">
          {item.client}
        </p>
        <p className="cmpny-heading font-normal text-gray-700">
          {item.company}
        </p>
        <div className="group-hover:opacity-100 opacity-0 transition-all duration-300 bg-[#E8E8E8] w-full h-[4px] mt-6"></div>
      </div>
    </div>
  );
};
