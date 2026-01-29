"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { programs } from "@/components/modules/ProgramModule/const";

const ProgramsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="programs"
      className="relative overflow-hidden py-20 md:py-32 bg-background">
      <div className="container relative mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16">
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

        {/* Programs Grid */}
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-3xl border border-border/60 bg-card p-6 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_50px_-24px_rgba(99,102,241,0.35)]">
                <div className="flex flex-col gap-5">
                  {/* Left: Logo Placeholder */}
                  <div className="shrink-0">
                    <div className="relative">
                      <div
                        className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br ${program.color} ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-105 md:h-20 md:w-20`}>
                        <Icon className="h-8 w-8 text-white md:h-10 md:w-10" />
                      </div>
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {program.title}
                      </h3>
                      <span className="hidden rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary md:inline-block">
                        Program
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground md:text-base">
                      {program.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {program.features?.map((feature, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary/20 md:text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
