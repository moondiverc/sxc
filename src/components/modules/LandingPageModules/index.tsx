import HeroSection from "@/components/modules/LandingPageModules/sections/HeroSection";
import ImageCarousel from "@/components/modules/LandingPageModules/sections/ImageCarouselSection";
import AboutSection from "@/components/modules/LandingPageModules/sections/AboutSection";
import ProgramsSection from "@/components/modules/LandingPageModules/sections/ProgramsSection";
import ImpactSection from "@/components/modules/LandingPageModules/sections/ImpactSection";
import PartnershipSection from "@/components/modules/LandingPageModules/sections/PartnershipSection";
import ContactSection from "@/components/modules/LandingPageModules/sections/ContactSection";

export default function LandingPageModule() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ImageCarousel />
      <AboutSection />
      <ProgramsSection />
      <ImpactSection />
      <PartnershipSection />
      <ContactSection />
    </div>
  );
}
