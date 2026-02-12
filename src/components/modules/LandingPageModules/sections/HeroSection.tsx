"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import ShootingStars from "./ShootingStars";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-start justify-center pt-30 md:pt-30 overflow-hidden bg-secondary">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-secondary via-secondary/95 to-secondary" />

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <ShootingStars />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Sparkles className="w-4 h-4 text-white/50" />
            <span className="text-white/50 text-sm font-medium">
              Jakarta Batch 14 • Since 2010
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-secondary-foreground mb-6 leading-tight">
            Bridging{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
              Students
            </span>{" "}
            with{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-primary">
              CEOs
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/50 mb-10 max-w-2xl mx-auto">
            Strategic leadership accelerator cultivating Indonesias next
            generation of business leaders. Connecting 1,000+ high-potential
            students with 100+ corporate partners.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfezJ4fESoXGCyr1UXkG1gqIif6f2ZylEfuNm2IPkNctmD_lQ/viewform?usp=dialog">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg shadow-xl group cursor-pointer">
                Join as Student
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#contact">
              <Button
                size="lg"
                variant="outline"
                className=" border-white/60 text-white bg-transparent hover:bg-transparent hover:text-white hover:border-white/60 px-8 py-6 text-lg cursor-pointer">
                Contact Us
              </Button>
            </a>
          </motion.div>

          {/* Stats Preview */}
          {/* <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {[
              { number: "1,000+", label: "Students" },
              { number: "100+", label: "Corporate Partners" },
              { number: "30+", label: "Universities" },
              { number: "5", label: "Chapters" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div> */}
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="bg-red-500"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full">
          <path
            d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            fill="hsl(var(--secondary-hero))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
