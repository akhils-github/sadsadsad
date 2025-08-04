"use client";
import { turnkeyData } from "@/constants/data/data";
import Image from "next/image";
import SignatureCard from "../card/SignatureCard";
import { turnkeyProcess } from "@/constants/dummy-data/home/data";

const TurnkeyProcess = () => {
  return (
    <div className="w-full max-w-7xl mx-auto my-5">
      {/* Heading and Subheading Section */}
      <div className="flex items-center justify-between max-w-5xl flex-col lg:flex-row md:flex-row">
        <div className="lg:max-w-3xl md:max-w-3xl max-w-lg w-full">
          <h2 className="sub-heading leading-[1.4]">
            {turnkeyProcess.title}
          </h2>
          <p className="primary-paragraph font-normal mt-3 leading-[1.4] mb-14 lg:mb-0 md:mb-8">
            {turnkeyProcess.description}
          </p>
        </div>
        <div className="size-48 hidden lg:block md:block md:size-3/4 lg:size-48">
          <Image
            src={turnkeyProcess.keyImage}
            alt="Turnkey Process"
            className="h-full w-full object-cover"
            height={234}
            width={238}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {turnkeyProcess.cards.map((item) => (
          <SignatureCard key={item?.id} item={item} />
        ))}
      </div>
      <div className="size-48 lg:hidden md:hidden flex items-center justify-center mt-5">
          <Image
            src={turnkeyProcess.keyImage} 
            alt="Turnkey Process"
            className="h-full w-full object-cover"
            height={234}
            width={238}
          />
        </div>
    </div>
  );
};

export default TurnkeyProcess;
