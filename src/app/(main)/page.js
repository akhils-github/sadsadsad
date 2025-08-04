// import ProjectModal from "@/components/popups/ProjectModal";
// import Contact from "@/components/contact/page";
import { ClientStories } from "@/components/home/ClientStories";
import HeroSection from "@/components/home/HeroSection";
import LogoSection from "@/components/home/LogoSection";
import Projects from "@/components/home/Projects";
// import TurnkeyProcess from "@/components/home/TurnkeyProcess";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import CurateBanner from "@/components/home/CurateBanner";
import { Experience } from "@/components/home/Experience";
import ArchitectureGrid from "@/components/home/ArchitectureGrid";
import HeroVideoSection from "@/components/home/HeroVideoSection";
import AboutCounter from "@/components/home/AboutCounter";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-10 pb-10">
      {/* <ProjectModal /> */}
      {/* <HeroSection /> */}
      <StickyLayout>
        <HeroVideoSection />
        <AboutCounter />
      </StickyLayout>

      <Experience />
      <WhatWeDo />
      {/* <TurnkeyProcess />   */}
      <ArchitectureGrid />
      {/* <ClientStories /> */}
    </div>
  );
}

const StickyLayout = ({ children }) => {
  return (
    <div className="relative h-full min-h-fit bg-amber-50  md:-mt-32 lg:-mt-24">
      {React.Children.map(children, (child, index) => (
        <div
          className="sticky top-0 h-full"
          style={{
            zIndex: React.Children.count(children) + index,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};
