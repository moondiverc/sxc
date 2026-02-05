"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { visionMission } from "../data/vision-mission";

export const VisionMissionSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-16">
          Vision & Mission
        </motion.h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative bg-card border border-border rounded-3xl p-10 h-full transition-all duration-300 hover:border-primary/50">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/30 to-primary/20 flex items-center justify-center mb-6">
                <visionMission.vision.icon className="w-7 h-7 text-primary" />
              </motion.div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {visionMission.vision.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {visionMission.vision.content}
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative bg-card border border-border rounded-3xl p-10 h-full transition-all duration-300 hover:border-accent/50">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-14 h-14 rounded-full bg-gradient-to-br from-accent/30 to-accent/20 flex items-center justify-center mb-6">
                <visionMission.mission.icon className="w-7 h-7 text-accent" />
              </motion.div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {visionMission.mission.title}
              </h3>
              <ul className="space-y-3">
                {visionMission.mission.points.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.4 + index * 0.1,
                    }}
                    className="flex gap-3 text-muted-foreground">
                    <span className="text-accent font-bold shrink-0">•</span>
                    <span className="text-sm">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
