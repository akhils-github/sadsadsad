import Image from "next/image";
import React from "react";

export const ProjectCard = ({ item }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden">
      <Image
        src={item?.image}
        alt={item?.title}
        width={500}
        height={300}
        layout="responsive"
        objectFit="cover"
        className="rounded-2xl h-auto w-full"
      />
      <div className="py-5">
        <div className="flex items-center gap-x-3">
          {item?.label?.split(",")?.map((label, index, arr) => (
            <React.Fragment key={index}>
              <p className="xs-heading py-1">{label?.trim()}</p>
              {index < arr?.length - 1 && (
                <div className="bg-[#ECB606] size-2 rotate-45" />
              )}
            </React.Fragment>
          ))}
        </div>
        <p className="font-semibold small-heading">{item?.title}</p>
        <div className="lg:hidden md:display display">
          <p className="secondary-paragraph mt-3 ">{item?.description}</p>
          <div className="rounded-full my-auto view-btn flex items-center h-10 w-fit mt-4 px-5 primary-paragraph font-semibold">
            View Projects
          </div>
        </div>
      </div>
    </div>
  );
};
