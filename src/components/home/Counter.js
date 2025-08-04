import React from "react";
import { stats } from "@/constants/data/data";
import Image from "next/image";

export default function Counter() {
  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 -top-24 flex items-center py-5 px-4 bg-white"
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center px-4">
            <Image width={64} height={64}
              src={stat.image}
              alt={stat.label}
              className="w-16 h-16 object-contain mb-2"
            />
            <p className="text-sm text-gray-700">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
