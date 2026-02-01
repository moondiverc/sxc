"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { features } from "./data/features";
import { Users, TrendingUp } from "lucide-react";
import ChatbotFAB from "../ChatbotModule";

export const AboutModule = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              Think-Tank for{" "}
              <span className="text-primary">Future Leaders</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Founded in 2010, StudentsxCEOs Jakarta is a strategic leadership
              accelerator designed to bridge the gap between academic potential
              and corporate excellence.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our robust ecosystem serves as a dynamic talent pipeline,
              equipping future leaders with essential skills while enabling
              corporations to access innovative insights and actionable
              solutions from Indonesias brightest minds.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
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

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Background circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full rounded-full border-2 border-primary/10 animate-pulse" />
              </div>
              <div className="absolute inset-8 flex items-center justify-center">
                <div className="w-full h-full rounded-full border-2 border-primary/20" />
              </div>
              <div className="absolute inset-16 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-linear-to-br from-primary/20 to-accent/20" />
              </div>

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl md:text-7xl font-bold text-primary mb-2">
                    14
                  </div>
                  <div className="text-lg text-foreground font-semibold">
                    Years of Impact
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Since 2010
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-10 right-0 bg-card shadow-lg rounded-xl p-3 border border-border"
              >
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
                className="absolute bottom-10 left-0 bg-card shadow-lg rounded-xl p-3 border border-border"
              >
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
      <ChatbotFAB />
    </section>
  );
};
