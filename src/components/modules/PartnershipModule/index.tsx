"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import PartnershipHeader from "./section/PartnershipHeader";
import StakeholderGrid from "./section/StakeholderGrid";
import PartnershipProgramList from "./section/PartnershipProgramList";
import PartnershipCTA from "./section/PartnershipCTA";

import { stakeholders } from "./data/stakeholders";
import { partnershipPrograms } from "./data/partnership-programs";
import PartnershipLogoCarousel from "./section/PartnershipLogoCarousel";
import { partnerLogos } from "./data/partner-logos";
import ChatbotFAB from "../ChatbotModule";

const PartnershipModule = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "100px" });

  return (
    <section id="partnership" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <PartnershipHeader
          eyebrow="Partnership Ecosystem"
          title="Built with Trusted Partnerships"
          highlight="Trusted"
          description="Kami membangun ekosistem kolaborasi lintas stakeholder untuk memperluas akses, kualitas, dan dampak program."
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-6xl mx-auto"
        >
          {/* Partner logo carousel */}
          <PartnershipLogoCarousel
            items={partnerLogos}
            title="Past Partnership"
            subtitle="Companies & communities that are already collaborating."
          />

          {/* Stakeholders */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4">Key Stakeholders</h3>
            <p className="text-muted-foreground mb-6">
              Our collaboration rests on strong relationships with key
              stakeholders in the talent development ecosystem.
            </p>
            <StakeholderGrid items={stakeholders} />
          </div>

          {/* Program Partnerships */}
          <div className="mt-14">
            <h3 className="text-2xl font-bold mb-4">Partnership Programs</h3>
            <p className="text-muted-foreground mb-6">
              Examples of collaborative programmes designed to produce tangible
              and measurable outcomes.
            </p>
            <PartnershipProgramList items={partnershipPrograms} />
          </div>

          <PartnershipCTA
            title="Let’s build impact together"
            description="Have a talent development programme, scholarship or initiative? We can design the curriculum, execute the programme, and measure the impact together."
            primaryLabel="Contact Partnership Team"
            primaryHref="/contact"
          />
        </motion.div>
      </div>
      <ChatbotFAB />
    </section>
  );
};

export default PartnershipModule;
