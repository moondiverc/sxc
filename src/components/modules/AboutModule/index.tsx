"use client";

import ChatbotFAB from "../ChatbotModule";
import { HeroSection } from "./section/HeroSection";
import { VisionMissionSection } from "./section/VisionMissionSection";
import { OrgStructureSection } from "./section/OrgStructureSection";
import { ValuesSection } from "./section/ValuesSection";

export const AboutModule = () => {
  return (
    <section id="about" className="bg-background">
      <HeroSection />
      <VisionMissionSection />
      <OrgStructureSection />
      <ValuesSection />
      <ChatbotFAB />
    </section>
  );
};
