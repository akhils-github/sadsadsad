import { historyImage } from "@/constants/dummy-data/history/data";
import Image from "next/image";

const HistoryGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-2 lg:px-10 ">
      {/* Left Column */}
      <div className="grid grid-cols-2 gap-2">
        {/* Large Image */}
        <div className="relative w-full aspect-square ">
          <Image 
            src={historyImage?.leftColumn[0].src}  
            alt={historyImage?.leftColumn[0].alt} 
            fill 
            className="rounded-xl object-cover"
          />
        </div>
        {/* Stacked Images */}
        <div className="grid grid-rows-2 gap-2">
          <div className="relative w-full aspect-[2/1] ">
            <Image 
              src={historyImage?.leftColumn[1].src}  
              alt={historyImage?.leftColumn[1].alt}
              fill 
              className="rounded-xl object-cover"
            />
          </div>
          <div className="relative w-full aspect-[2/1] bottom-[-15px]">
            <Image 
              src={historyImage?.leftColumn[2].src} 
              alt={historyImage?.leftColumn[2].alt}
              fill 
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="grid grid-cols-2 gap-2">
        {/* Stacked Images */}
        <div className="grid grid-rows-2 gap-2">
          <div className="relative w-full aspect-[2/1] top-[-15px]">
            <Image 
              src={historyImage?.rightColumn[0].src}  
              alt={historyImage?.rightColumn[0].alt}
              fill 
              className="rounded-xl object-cover"
            />
          </div>
          <div className="relative w-full aspect-[2/1]">
            <Image 
              src={historyImage?.rightColumn[1].src} 
              alt={historyImage?.rightColumn[1].alt}
              fill 
              className="rounded-xl object-cover"
            />
          </div>
        </div>
        {/* Large Image */}
        <div className="relative w-full aspect-square">
          <Image 
            src={historyImage?.rightColumn[2].src} 
            alt={historyImage?.rightColumn[2].alt} 
            fill 
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HistoryGrid;
