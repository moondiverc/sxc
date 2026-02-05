"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProgramCarousel from "./ProgramCarousel";

const ProgramsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="programs"
      className="relative overflow-hidden py-20 md:py-28 bg-background">
      <div className="container relative mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent font-semibold text-sm uppercase tracking-wider">
            Our Programs
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Structured Pathways to{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
              Success
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive programs designed to connect academic potential with
            corporate excellence.
          </p>
        </motion.div>

        <ProgramCarousel />
      </div>
    </section>
  );
};

export default ProgramsSection;
