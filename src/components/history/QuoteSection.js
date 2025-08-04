import { quoteData } from "@/constants/dummy-data/history/data";
import Image from "next/image";

const QuoteSection = () => {
  return (
    <div className="bg-gradient-to-b from-[#FFF] to-[#FEFCE8] p-20  w-full mx-auto ">
      <div className="grd grid-cols-2 gap-5">
        {/* Quote Icon */}
        <Image 
          src={quoteData?.image}
          alt="Quote Symbol" 
          width={60} 
          height={60} 
          className="py-5"
        />
        {/* Quote Text */}
        <p className="history-box  pl-4 max-w-8xl mx-auto grid-start-2 grid-cols-2">
         {quoteData?.text}
        </p>
      </div>
    </div>
  );
};

export default QuoteSection;
