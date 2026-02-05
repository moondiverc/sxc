import HeroSection from "@/components/modules/LandingPageModules/sections/HeroSection";
import ImageCarousel from "@/components/modules/LandingPageModules/sections/ImageCarouselSection";
import AboutSection from "@/components/modules/LandingPageModules/sections/AboutSection";
import ProgramsSection from "@/components/modules/LandingPageModules/sections/ProgramsSection";
import ImpactSection from "@/components/modules/LandingPageModules/sections/ImpactSection";
import PartnershipSection from "@/components/modules/LandingPageModules/sections/PartnershipSection";
import ContactModule from "@/components/modules/ContactModule";
import ChatbotFAB from "@/components/modules/ChatbotModule";
import BackToTopButton from "./sections/BackToTopButton";


export default function LandingPageModule() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <ImageCarousel />
      <AboutSection />
      <ProgramsSection />
      <ImpactSection />
      <PartnershipSection />
      <ContactModule />
      <ChatbotFAB />
      <BackToTopButton/>
    </div>
  );
}
