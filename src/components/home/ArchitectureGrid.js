import { projects } from "@/constants/dummy-data/home/data";
import Image from "next/image";
import React from "react";

const ArchitectureGrid = () => {
  function chunkProjects(projects) {
    const rows = [];
    let i = 0;
    let isFirst = true;

    while (i < projects.length) {
      const count = isFirst ? 3 : 2;
      rows.push(projects.slice(i, i + count));
      i += count;
      isFirst = !isFirst; // Alternate between 3 and 2
    }

    return rows;
  }

  const chunkedRows = chunkProjects(projects);

  return (
    <div className="flex flex-col gap-8 mb-20 px-10 relative -z-10">
      {chunkedRows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`grid gap-5 ${
            (rowIndex + 1) % 2 === 0 ? "md:grid-cols-2 lg:grid-cols-2 " : " lg:grid-cols-3"
          }`}
        >
          {row.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt="image"
                  width={800}
                  height={600}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="mt-3">
                <div className="flex gap-3 mb-2 items-center">
                  {project?.tags?.split(",").map((label, index, arr) => (
                    <React.Fragment key={index}>
                      <p className="xs-heading py-1">{label.trim()}</p>
                      {index < arr.length - 1 && (
                        <div className="bg-[#ECB606] size-2 rotate-45" />
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <h3 className="text-base font-medium text-gray-900">
                  {project.architect}
                </h3>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ArchitectureGrid;
