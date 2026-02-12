"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Target, Users, Lightbulb, TrendingUp } from "lucide-react";
import monas from "@/assets/monas-no-bg.png";

const features = [
  {
    icon: Target,
    title: "Strategic Vision",
    description:
      "Cultivating Indonesia's next generation of business leaders with boardroom-ready skills.",
  },
  {
    icon: Users,
    title: "Dynamic Network",
    description:
      "Connecting high-potential students across 30+ top universities with industry leaders.",
  },
  {
    icon: Lightbulb,
    title: "Actionable Insights",
    description:
      "Enabling corporations to tap into fresh perspectives and scalable solutions.",
  },
  {
    icon: TrendingUp,
    title: "Talent Pipeline",
    description:
      "Building robust ecosystem spanning 5 major chapters with 150+ core members.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 whitespace-normal lg:whitespace-nowrap">
            Think-Tank for{" "}
            <span className="inline bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              Future Leaders
            </span>
          </h2>
          <p className="text-xl text-primary font-bold italic mb-6">
            Learn, Share, Impact
          </p>
        </motion.div>

        {/* Main Content Row */}
        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Founded in 2010, StudentsxCEOs Jakarta is a strategic leadership
              accelerator designed to bridge the gap between academic potential
              and corporate excellence.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our robust ecosystem serves as a dynamic talent pipeline,
              equipping future leaders with essential skills while enabling
              corporations to access innovative insights and actionable
              solutions from Indonesia&apos;s brightest minds.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="group relative">
                  <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-accent/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-card border border-border rounded-xl p-6 h-full transition-all duration-300 hover:border-primary/30">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual - Monas Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Outer rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-primary/20"
              />

              {/* Inner rotating ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border-2 border-accent/20"
              />

              {/* Center glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 rounded-full bg-linear-to-br from-primary/30 via-accent/30 to-primary/20 blur-3xl" />
              </div>

              {/* Monas Image */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="text-center">
                  <Image
                    src={monas}
                    alt="Monas Monument Jakarta"
                    className="drop-shadow-2xl h-80 sm:h-100"
                    priority
                  />
                  <div className="relative -top-17 sm:-top-20 ">
                    <div className=" text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-linear-to-br from-primary via-accent to-primary ">
                      14 Years
                    </div>
                    <div className="text-md sm:text-lg font-semibold text-foreground mt-0 sm:mt-2">
                      of Impact Since 2010
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-10 right-0 bg-card shadow-lg rounded-xl p-2 sm:p-5 border border-border">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">150+</div>
                    <div className="text-xs text-muted-foreground">
                      Core Members
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-2 sm:-bottom-8 left-0 bg-card shadow-lg rounded-xl p-2 sm:p-5 border border-border">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">5 Chapters</div>
                    <div className="text-xs text-muted-foreground">
                      Across Indonesia
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
