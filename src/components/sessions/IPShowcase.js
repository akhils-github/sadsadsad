import React from "react";
import IPCard from "../cards/IPCard";

export const IPShowcase = ({ data }) => {
  return (
    <section
      key="ip"
      className="bg-purple h-screen w-full pt-10 lg:pt-20 px-4 text-white text-center flex flex-col items-center justify-center"
    >
      <h2 className="sub-heading mb-5 sm:mb-20">{data?.heading}</h2>
      <div className="max-w-7xl w-full grid gap-5 grid-cols-1 lg:grid-cols-3">
        {data?.items.map((item, index) => {
          const aosDirections = ["fade-up", "fade-up", "fade-up"];
          const aosEffect = aosDirections[index % aosDirections.length];

          // Each card has a different duration to complete animation
          const duration = 600 + index * 200;

          return (
            <div
              key={`${item?.id}-${index}`}
              data-aos={aosEffect}
              data-aos-easing="ease-in-out"
              data-aos-duration={duration}
            >
              <IPCard item={item} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
