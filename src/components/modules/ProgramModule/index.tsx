"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  BookOpen,
  Briefcase,
  Handshake,
  Award,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    icon: BookOpen,
    title: "Case-Based Learning",
    description:
      "Engage with real business cases from top companies. Develop analytical thinking and problem-solving skills through hands-on experience.",
    color: "from-primary to-accent",
    features: ["Real Company Cases", "Expert Mentorship", "Team Collaboration"],
  },
  {
    icon: Briefcase,
    title: "Leadership Accelerator",
    description:
      "Fast-track your leadership journey with our intensive programs designed to build boardroom-ready skills.",
    color: "from-accent to-primary",
    features: [
      "Executive Workshops",
      "Soft Skills Training",
      "Career Guidance",
    ],
  },
  {
    icon: Handshake,
    title: "Corporate Connect",
    description:
      "Direct access to 100+ corporate partners. Network with industry leaders and explore internship opportunities.",
    color: "from-primary to-amber-400",
    features: ["Networking Events", "Internship Pipeline", "Industry Exposure"],
  },
  {
    icon: Award,
    title: "Apprenticeship Program",
    description:
      "Join our selective apprenticeship to gain practical experience while contributing to real organizational projects.",
    color: "from-amber-400 to-primary",
    features: ["Project Experience", "Skill Development", "Certificate"],
  },
];

export const ProgramModule = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="programs" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
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
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-linear-to-br ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <program.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                {program.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {program.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {program.features.map((feature, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
                    {feature}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Button
                variant="ghost"
                className="text-primary hover:text-primary hover:bg-primary/10 p-0 group/btn">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
