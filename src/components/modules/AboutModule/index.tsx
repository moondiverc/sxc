"use client";

import ChatbotFAB from "../ChatbotModule";
import { HeroSection } from "./section/HeroSection";
import { VisionMissionSection } from "./section/VisionMissionSection";
import { OrgStructureSection } from "./section/OrgStructureSection";
import { ValuesSection } from "./section/ValuesSection";
import BackToTopButton from "../LandingPageModules/sections/BackToTopButton";

export const AboutModule = () => {
  return (
    <section id="about" className="bg-background overflow-x-hidden">
      <HeroSection />
      <VisionMissionSection />
      <OrgStructureSection />
      <ValuesSection />
      <ChatbotFAB />
      <BackToTopButton/>
    </section>
  );
};
