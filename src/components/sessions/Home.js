"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { PaginationDots } from "@/components/layout/PaginationDots";
import { AboutUs } from "@/components/sessions/AboutUs";
import { HeroSection } from "@/components/sessions/HeroSection";
import { IPShowcase } from "@/components/sessions/IPShowcase";
import { WhatWeDo } from "@/components/sessions/WhatWeDo";
import { Footer } from "@/components/layout/footer/Footer";

export const HomePage = ({ data }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const isScrollingRef = useRef(false);

  const scrollToTop = () => {
    if (!isScrollingRef.current) {
      isScrollingRef.current = true;
      setCurrentSection(0);
      setTimeout(() => (isScrollingRef.current = false), 100);
    }
  };

  const sections = [
    { id: "hero", component: () => <HeroSection data={data?.hero} /> },
    { id: "what-we-do", component: () => <WhatWeDo data={data?.what_we_do} /> },
    { id: "ip", component: () => <IPShowcase data={data?.ip} /> },
    { id: "about", component: () => <AboutUs data={data?.about} /> },
    {
      id: "footer",
      component: () => <Footer scrollToTop={scrollToTop} data={data?.footer} />,
    },
  ];

  const changeSection = useCallback(
    (newIndex) => {
      if (
        newIndex === currentSection ||
        isScrollingRef.current ||
        newIndex < 0 ||
        newIndex >= sections.length
      ) {
        return;
      }

      isScrollingRef.current = true;
      setCurrentSection(newIndex);
      setTimeout(() => (isScrollingRef.current = false), 1000);
    },
    [currentSection, sections.length]
  );

  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();
      if (isScrollingRef.current) return;

      const scrollThreshold = 20;

      if (event.deltaY > scrollThreshold) {
        changeSection(currentSection + 1);
      } else if (event.deltaY < -scrollThreshold) {
        changeSection(currentSection - 1);
      }
    };

    let touchStartY = 0;

    const handleTouchStart = (e) => {
      touchStartY = e.changedTouches[0].screenY;
    };

    const handleTouchEnd = (e) => {
      if (isScrollingRef.current) return;

      const touchEndY = e.changedTouches[0].screenY;
      const deltaY = touchStartY - touchEndY;
      const scrollThreshold = 50;

      if (Math.abs(deltaY) > scrollThreshold) {
        if (deltaY > 0) {
          changeSection(currentSection + 1);
        } else {
          changeSection(currentSection - 1);
        }
      }
    };

    const handleKeyDown = (e) => {
      if (isScrollingRef.current) return;

      switch (e.key) {
        case "ArrowDown":
        case "PageDown":
        case " ":
          e.preventDefault();
          changeSection(currentSection + 1);
          break;
        case "ArrowUp":
        case "PageUp":
          e.preventDefault();
          changeSection(currentSection - 1);
          break;
        case "Home":
          e.preventDefault();
          changeSection(0);
          break;
        case "End":
          e.preventDefault();
          changeSection(sections.length - 1);
          break;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSection, sections.length, changeSection]);

  const handleDotClick = (index) => {
    changeSection(index);
  };
  return (
    <>
      {sections.map((SectionItem, index) => {
        const SectionComponent = SectionItem.component;
        return (
          <div
            key={SectionItem.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out  ${
              index === currentSection
                ? "opacity-100 z-20 "
                : "opacity-0 pointer-events-none "
            }`}
            style={{
              pointerEvents: index === currentSection ? "auto" : "none",
            }}
          >
            <SectionComponent />
          </div>
        );
      })}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-30 flex flex-col space-y-2">
        {sections.map((_, index) => (
          <PaginationDots
            key={`dot-${index}`}
            currentSection={currentSection}
            handleDotClick={handleDotClick}
            index={index}
          />
        ))}
      </div>
    </>
  );
};
