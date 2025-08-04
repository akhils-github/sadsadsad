// components/LandscapeWarning.jsx
"use client";
import React, { useEffect, useState } from "react";

const LandscapeWarning = () => {
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      const landscape = window.innerWidth > window.innerHeight;
      if (window.innerWidth < 780 && window.innerHeight < 720) {
        setIsLandscape(true);
      }
      setIsLandscape(false);
    };

    checkOrientation(); // Check initially
    window.addEventListener("resize", checkOrientation);

    return () => {
      window.removeEventListener("resize", checkOrientation);
    };
  }, []);

  if (!isLandscape) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black bg-opacity-90 flex items-center justify-center text-center px-6">
      <p className="text-white text-xl sm:text-2xl font-semibold">
        Please rotate your device to portrait mode for the best experience.
      </p>
    </div>
  );
};

export default LandscapeWarning;
