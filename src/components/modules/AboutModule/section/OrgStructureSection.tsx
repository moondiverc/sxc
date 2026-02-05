"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { orgStructure } from "../data/org-structure";
import cdtoBg from "@/assets/cdto-bg.png";

export const OrgStructureSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-16">
          Our Leadership
        </motion.h2>

        <div className="max-w-6xl mx-auto relative">
          {/* CEO Box */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-br from-primary/30 to-accent/30 rounded-2xl blur-xl" />
              <div className="relative bg-card border-2 border-primary rounded-2xl p-8 text-center min-w-60">
                <div
                  style={{ backgroundImage: `url(${cdtoBg.src})` }}
                  className="
                    w-24 h-24 rounded-full
                    bg-cover bg-center bg-no-repeat
                    flex items-center justify-center
                    mx-auto mb-4
                    ring-4 ring-primary/20
                    shadow-xl
                    
                "></div>

                <h4 className="font-bold text-lg text-foreground">
                  {orgStructure.cdto.role}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {orgStructure.cdto.name}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Tree Lines Container */}
          <div className="relative h-32 mb-8">
            {/* Main vertical line from CEO */}
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              animate={isInView ? { opacity: 1, scaleY: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="absolute top-0 left-1/2 -translate-x-1/2 origin-top">
              <div className="w-1.5 h-20 bg-primary" />
            </motion.div>

            {/* Horizontal line connecting managers */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="absolute top-20 left-1/4 right-1/4 origin-center">
              <div className="w-full h-1.5 bg-primary" />
            </motion.div>

            {/* Vertical lines from horizontal to each manager */}
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              animate={isInView ? { opacity: 1, scaleY: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="absolute top-20 left-1/4 -translate-x-1/2 origin-top">
              <div className="w-1.5 h-12 bg-primary" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              animate={isInView ? { opacity: 1, scaleY: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="absolute top-20 right-1/4 translate-x-1/2 origin-top">
              <div className="w-1.5 h-12 bg-primary" />
            </motion.div>
          </div>

          {/* Managers Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {orgStructure.managers.map((manager, deptIndex) => (
              <motion.div
                key={deptIndex}
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.45 + deptIndex * 0.1,
                }}
                className="relative">
                {/* Manager Card */}
                <div className="bg-card border-2 border-primary/50 rounded-xl p-6 text-center mb-0 transition-all duration-300 hover:border-primary/80">
                  <div
                    style={{ backgroundImage: `url(${manager.imageSrc.src})` }}
                    className="
                    w-24 h-24 rounded-full
                    bg-cover bg-center bg-no-repeat
                    flex items-center justify-center
                    mx-auto mb-4
                    ring-4 ring-primary/20
                    shadow-xl"></div>
                  <h5 className="font-bold text-lg text-foreground">
                    {manager.role}
                  </h5>
                  <p className="text-sm text-muted-foreground mt-1">
                    {manager.name}
                  </p>
                </div>

                {/* Line from manager to team members */}
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={isInView ? { opacity: 1, scaleY: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.55 + deptIndex * 0.1 }}
                  className="flex justify-center origin-top">
                  <div className="w-1.5 h-6 bg-primary" />
                </motion.div>

                {/* Horizontal line connecting team members */}
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + deptIndex * 0.1 }}
                  className="flex justify-center origin-center">
                  <div
                    className={`${manager.team.length === 4 ? "w-[342px]" : "w-57.5"} h-1.5 bg-primary`}
                  />
                </motion.div>

                {/* Team Members Container with lines */}
                <div className="relative px-4">
                  <div className={`flex ${manager.team.length === 4 ? "justify-center" : "justify-center"} gap-12 relative`}>
                    {manager.team.map((member, memberIndex) => (
                      <motion.div
                        key={memberIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: 0.65 + deptIndex * 0.1 + memberIndex * 0.1,
                        }}
                        className="flex flex-col items-center relative">
                        {/* Vertical connector line from horizontal line */}
                        <motion.div
                          initial={{ opacity: 0, scaleY: 0 }}
                          animate={isInView ? { opacity: 1, scaleY: 1 } : {}}
                          transition={{
                            duration: 0.3,
                            delay: 0.7 + deptIndex * 0.1 + memberIndex * 0.1,
                          }}
                          className="absolute top-0 origin-top">
                          <div className="w-1.5  h-12 bg-primary" />
                        </motion.div>

                        {/* Avatar */}
                        <div
                          style={{
                            backgroundImage: `url(${member.imageSrc.src})`,
                          }}
                          className="w-14 h-14 rounded-full bg-cover bg-center bg-no-repeat from-primary/40 to-accent/40 flex items-center justify-center ring-2 ring-primary/30 shadow-md text-foreground font-bold mt-15"></div>
                        <p className="text-xs  text-muted-foreground text-center max-w-16 mt-2">
                          {member.name}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
