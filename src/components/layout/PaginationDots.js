import React from "react";

export const PaginationDots = ({ index, currentSection, handleDotClick }) => {
  return (
    <button
      className={`block w-3 h-3 rounded-full transition-colors duration-300
                ${
                  index === currentSection
                    ? "bg-white"
                    : "bg-gray-400 opacity-60 hover:bg-gray-200 cursor-pointer"
                }`}
      onClick={() => handleDotClick(index)}
      aria-label={`Go to section ${index + 1}`}
    />
  );
};
