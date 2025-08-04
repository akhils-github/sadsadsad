"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/card/ProjectCard";
import { projectFilter } from "@/constants/dummy-data/projects/data";
import { projectsData } from "@/data/pages/projects";
import ProjectModal from "@/components/popups/ProjectModal";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  function openModal(item) {
    console.log(item)
    setSelectedItem(item);
    setIsOpen(true);
  }

  return (
    <>

      <ProjectModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        project={selectedItem}
      />
      <div className="px-10 flex flex-col w-full gap-y-3 mt-28 mb-8">
        <div className="flex justify-between items-start flex-col lg:flex-row md:flex-row md:items-center">
          <p className="subpage-heading py-4">{projectsData?.heading}</p>

          <div className="lg:w-64 lg:h-10 h-10 md:h-15 md:w-100 flex items-center gap-x-3 px-3 rounded-md border border-gray-400 w-full">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#232424"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-filter"
              >
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
              </svg>
            </div>
            <select
              name="projects"
              className="w-full h-full project-drop"
              defaultValue=""
            >
              {projectFilter?.options.map((option, index) => (
                <option
                  key={index}
                  value={option?.value}
                  disabled={option?.disabled}
                >
                  {option?.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 lg:gap-10 mt-10 md:grid-cols-2 md:gap-10 gap-10">
          {projectsData?.projects?.map((item, index) => (
            <div
              key={`${item?.title}-${index}`}
              onClick={() => openModal(item)}
            >
              <ProjectCard item={item} />
            </div>
          ))}
        </div>
      </div>
    
    </>
  );
}
