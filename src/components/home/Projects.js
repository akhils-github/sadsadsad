"use client";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/constants/dummy-data/home/data";

const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-4 gap-5 my-5">
      {/* First Project */}
      <div className="lg:col-span-2 flex flex-col justify-end gap-y-4">
        <p className="sub-heading lg:max-w-2xl md:max-w-xl max-w-md  align-super  leading-[1.4]">
          {projectsData?.heading}
        </p>
        <div className="relative overflow-hidden group bg-white rounded-2xl">
          {/* Image + Title Wrapper (Moves Up Together) */}
          <div className="transition-transform duration-500 group-hover:-translate-y-40">
            <Image
              src={projectsData?.cards[0].imageSrc}
              className="rounded-2xl w-full h-auto hidden lg:block"
              width={725}
              height={356}
              alt={projectsData?.cards[0].imageAlt}
            />
            <Image
              src={projectsData?.cards[0].imageSrc}
              className="rounded-2xl w-full h-[300px] block lg:hidden object-cover md:w-full md:h-full"
              width={725}
              height={356}
              alt={projectsData?.cards[0].imageAlt}
            />
            {/* Titles (Move Up with Image) */}
            <div className="bg-white p-3">
              <p className="xs-heading leading-[1.2]">
                {projectsData?.cards[0].titleType}
              </p>
              <p className="small-heading font-semibold leading-[1.2]">
                {projectsData?.cards[0].title}
              </p>
            </div>
          </div>

          {/* Hidden Content (Appears Under the Titles) */}
          <div className="absolute bottom-0 left-0 w-full bg-white transition-transform duration-500 translate-y-full group-hover:translate-y-0 p-3">
            <p className="secondary-paragraph">
              {projectsData?.cards[0].description}
            </p>
            <Link
              href={projectsData?.cards[0].link}
              className="rounded-full  primary-paragraph font-semibold flex items-center h-10 w-fit mt-4 px-5 view-btn"
            >
              View Project
            </Link>
          </div>
          <div className=" w-full bg-white  px-3  lg:hidden">
            <p className="secondary-paragraph">
              {projectsData?.cards[0].description}
            </p>
            <Link
              href={projectsData?.cards[0].link}
              className="rounded-full  primary-paragraph font-semibold flex items-center h-10 w-fit mt-4 px-5 view-btn py-2 md:py-5"
            >
              View Project
            </Link>
          </div>
        </div>
      </div>

      {/* Second Project */}
      <div className="flex flex-col justify-end gap-y-4">
        <div className="relative overflow-hidden group bg-white rounded-2xl">
          <div className="transition-transform duration-500 group-hover:-translate-y-40">
            <Image
              src={projectsData?.cards[1].imageSrc}
              className="rounded-2xl w-full h-auto hidden lg:block"
              width={725}
              height={356}
              alt={projectsData?.cards[1].imageAlt}
            />
            <Image
              src={"/assets/project-1.png"} // using project 1 for mobile view. change this if needed.
              className="rounded-2xl w-full h-[300px] block lg:hidden object-cover md:w-full md:h-full"
              width={725}
              height={356}
              alt={projectsData?.cards[1].imageAlt}
            />
            <div className="bg-white p-3">
              <p className=" xs-heading">{projectsData?.cards[1].titleType}</p>
              <p className="small-heading font-semibold leading-[1.2]">
                {projectsData?.cards[1].title}
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-white p-3 transition-transform duration-500 translate-y-full group-hover:translate-y-0">
            <p className="secondary-paragraph">
              {projectsData?.cards[1].description}
            </p>
            <Link
              href={projectsData?.cards[1].link}
              className="rounded-full view-btn flex items-center h-10 w-fit mt-4 px-5 primary-paragraph font-semibold "
            >
              View Project
            </Link>
          </div>
          <div className=" w-full bg-white px-3 lg:hidden">
            <p className="secondary-paragraph">
              {projectsData?.cards[1].description}
            </p>
            <Link
              href={projectsData?.cards[1].link}
              className="rounded-full view-btn flex items-center h-10 w-fit mt-4 px-5 primary-paragraph font-semibold  mb-2 md:mb-5 "
            >
              View Project
            </Link>
          </div>
        </div>
      </div>

      {/* Third Project */}
      <div className="flex flex-col justify-end gap-y-4">
        <div className="relative overflow-hidden group bg-white rounded-2xl">
          <div className="transition-transform duration-500 group-hover:-translate-y-40">
            <Image
              src={projectsData?.cards[2].imageSrc}
              className="rounded-2xl w-full h-auto hidden lg:block  "
              width={1100}
              height={615}
              alt={projectsData?.cards[2].imageAlt}
            />
            <Image
              src={"/assets/project-2.png"} // using project 2 for mobile view. change this if needed.
              className="rounded-2xl  h-[300px] block lg:hidden object-cover md:w-full md:h-full w-full"
              width={1100}
              height={615}
              alt={projectsData?.cards[2].imageAlt}
            />
            <div className="bg-white p-3">
              <p className="xs-heading leading-[1.2]">
                {projectsData?.cards[2].titleType}
              </p>
              <p className="small-heading font-semibold leading-[1.2]">
                {projectsData?.cards[2].title}
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-white p-3 transition-transform duration-500 translate-y-full group-hover:translate-y-0">
            <p className="secondary-paragraph">
              {projectsData?.cards[2].description}
            </p>
            <Link
              href={projectsData?.cards[2].link}
              className="rounded-full view-btn flex items-center h-10 w-fit mt-4 px-5 primary-paragraph font-semibold "
            >
              View Project
            </Link>
          </div>
          <div className="w-full bg-white px-3 lg:hidden">
            <p className="secondary-paragraph">
              {projectsData?.cards[2].description}
            </p>
            <Link
              href={projectsData?.cards[2].link}
              className="rounded-full view-btn flex items-center h-10 w-fit mt-4 px-5 primary-paragraph font-semibold  mb-2 md:mb-5 "
            >
              View Project
            </Link>
          </div>
        </div>
      </div>

      {/* All Projects Button */}
      <div className="border lg:col-span-4 my-10 mx-auto view-btn rounded-full px-5 w-fit h-10 flex items-center primary-paragraph font-semibold">
        <Link href={projectsData?.link}>View All Projects</Link>
      </div>
    </div>
  );
};

export default Projects;
