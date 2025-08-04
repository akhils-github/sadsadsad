import Image from "next/image";
import { aboutContent } from "@/constants/dummy-data/home/data";

export default function AboutSection() {
  return (
    <div className="max-w-7xl relative mx-auto bg-[#F3F4F4] rounded-md grid grid-cols-3 p-5 lg:p-0 lg:grid-cols-5 gap-5 align-middle">
      <div className="flex flex-col gap-y-6 text-start max-w-lg justify-center mx-auto col-span-3">
        <p className="sub-heading">{aboutContent.title}</p>
        <p className="about-paragraph">
          {aboutContent.description}
        </p>
        <p className="px-4 py-2 w-fit  rounded-full view-btn primary-paragraph font-semibold">
          {aboutContent.buttonText}
        </p>
        <div className="absolute bottom-0 left-0 hidden lg:block">
          <Image src={aboutContent.flowerImage} alt="flower" width={104} height={236} />
        </div>
      </div>
      <div className="grid lg:col-span-2 col-span-3 grid-rows-3 md:grid-rows-2 md:grid-cols-3 lg:grid-rows-5 grid-cols-2 h-96 gap-5 grid-flow-col relative overflow-hidden">
        {/* Add animations to the individual images */}
        <div className="overflow-hidden rounded-lg shadow-lg lg:-mt-20 lg:col-span-2 vertical-shaking">
          <Image
            src={aboutContent.images[0].src}
            alt={`House ${3}`}
            className="w-full h-full object-cover "
            width={aboutContent.images[0].width}
            height={aboutContent.images[0].height}

          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg md:row-span-1 lg:row-span-2 row-span-2 ml-auto lg:col-span-2 h-full vertical-shaking">
          <Image
            src={aboutContent.images[1].src}
            alt={`House ${3}`}
            className="w-full h-full object-cover"
             width={aboutContent.images[1].width}
            height={aboutContent.images[1].height}
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg md:row-span-2 lg:row-span-2 lg:-mb-10 lg:col-span-2 vertical-shaking">
          <Image
            src={aboutContent.images[2].src}
            alt={`House ${3}`}
            className="w-full h-full object-cover"
            width={aboutContent.images[2].width}
            height={aboutContent.images[2].height}
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg lg:row-span-3 h-full vertical-shaking">
          <Image
            src={aboutContent.images[3].src}
            alt={`House ${3}`}
            className="w-full h-full object-cover"
            width={aboutContent.images[3].width}
            height={aboutContent.images[3].height}
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg lg:row-span-2 h-full vertical-shaking">
          <Image
            src={aboutContent.images[4].src}
            alt={`House ${3}`}
            className="w-full h-full object-cover"
            width={aboutContent.images[4].width}
            height={aboutContent.images[4].height}
          />
        </div>
      </div>
    </div>
  );
}
