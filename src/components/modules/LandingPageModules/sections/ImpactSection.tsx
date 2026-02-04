"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { GraduationCap, Building2, Globe, Trophy } from "lucide-react";
import { testimonials } from "../data/testimonials";

const stats = [
  {
    icon: GraduationCap,
    number: "1,000+",
    label: "High-Potential Students",
    description: "Connected across Indonesia",
  },
  {
    icon: Building2,
    number: "100+",
    label: "Corporate Partners",
    description: "Leading companies & startups",
  },
  {
    icon: Globe,
    number: "30+",
    label: "Top Universities",
    description: "Nationwide network",
  },
  {
    icon: Trophy,
    number: "150+",
    label: "Core Members",
    description: "Driving impact daily",
  },
];

const ImpactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="impact"
      className="py-20 md:py-32 bg-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mt-3 mb-6">
            Measurable <span className="text-primary">Results</span>
          </h2>
          <p className="text-white/80 text-lg">
            Real numbers that demonstrate our commitment to developing future
            leaders.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-secondary-foreground/5 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-colors">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-secondary-foreground font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-white/50">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Success Stories
          </span>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary-foreground mt-2">
            Hear from Our <span className="text-primary">Community</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 rounded-full overflow-hidden">
                <Image
                  src={testimonial.imageSrc}
                  alt={testimonial.author}
                  width={64}
                  height={64}
                  style={{ objectFit: "cover" }} // pastikan menutupi area bulat
                  className="w-full h-full"
                />
              </div>

              <p className="text-foreground mb-4 italic">{testimonial.quote}</p>

              <div>
                <div className="text-sm font-semibold text-foreground">
                  {testimonial.author}
                </div>
                <div className="text-sm text-primary">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
