"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { programs } from "./const";
import ChatbotFAB from "../ChatbotModule";

export const ProgramModule = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="programs" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Programs
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Structured Pathways to <span className="text-primary">Success</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive programs designed to connect academic potential with
            corporate excellence.
          </p>
        </motion.div>

        {/* Programs List - Horizontal Layout */}
        <div className="max-w-6xl mx-auto space-y-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-2xl">
                <div className="flex flex-col md:flex-row gap-0 md:gap-0 h-full">
                  {/* Left: Icon/Logo Placeholder */}
                  <div className="shrink-0 w-full md:w-60 h-64 md:h-auto">
                    <div
                      className={`w-full h-full rounded-3xl md:rounded-none bg-linear-to-br ${program.color} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                      <Icon className="w-20 h-20 md:w-24 md:h-24 text-white" />
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>

                    {/* Tags/Features */}
                    <div className="flex flex-wrap gap-3 mb-5">
                      {program.features &&
                        program.features.map((feature, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 text-sm md:text-base bg-primary/10 text-primary rounded-full font-medium hover:bg-primary/20 transition-colors">
                            {feature}
                          </span>
                        ))}
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <ChatbotFAB />
    </section>
  );
};
