"use client";
import React from "react";
import { whatWeDoData } from "@/constants/dummy-data/cards/data";
import Link from "next/link";

export const WhatWeDo = () => {
  return (
    <div className=" w-full px-10 py-12">
      <h2 className="sub-heading mb-12">What we do</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {whatWeDoData.map((item, index) => {
          const IconComponent = item.icon;

          return (
            <div key={index} className="flex items-start gap-4">
              {/* Icon */}
              <div className="text-yellow-600 text-3xl mt-1 shrink-0">
                <IconComponent />
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700 mb-2">{item.description}</p>
                <Link
                  href={item.link || "#"}
                  className="text-sm font-medium underline hover:text-yellow-700"
                >
                  View Projects
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
