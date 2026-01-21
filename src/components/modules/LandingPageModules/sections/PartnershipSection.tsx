"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Building2,
  Users,
  TrendingUp,
  Award,
  Handshake,
  Target,
} from "lucide-react";

const partnerLogos = [
  "Unilever",
  "Bank BCA",
  "Telkom",
  "Pertamina",
  "Tokopedia",
  "Gojek",
  "Shopee",
  "McKinsey",
  "BCG",
  "Deloitte",
  "Google",
  "Microsoft",
];

const partnershipTypes = [
  {
    icon: Handshake,
    title: "Strategic Partner",
    description:
      "Long-term collaboration with exclusive access to our talent pool and customized programs.",
  },
  {
    icon: Target,
    title: "Program Sponsor",
    description:
      "Sponsor specific programs and get direct exposure to participants.",
  },
  {
    icon: Users,
    title: "Mentorship Partner",
    description:
      "Provide mentors from your organization to guide our future leaders.",
  },
  {
    icon: TrendingUp,
    title: "Case Study Partner",
    description:
      "Collaborate on real business challenges with fresh perspectives from top students.",
  },
];

const benefits = [
  { icon: Users, value: "1,000+", label: "Top Talents Access" },
  { icon: Building2, value: "30+", label: "Partner Universities" },
  { icon: Award, value: "100+", label: "Corporate Partners" },
  { icon: TrendingUp, value: "85%", label: "Placement Rate" },
];

const PartnershipSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="partnership" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Partnership
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Build the Future <span className="text-primary">Together</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Join 100+ leading companies in shaping Indonesias next generation of
            business leaders through our partnership programs.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 border border-border text-center">
              <benefit.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground">
                {benefit.value}
              </div>
              <div className="text-muted-foreground text-sm">
                {benefit.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Partnership Types */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {partnershipTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <type.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {type.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {type.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center">
          <p className="text-muted-foreground mb-8">
            Trusted by leading companies across Indonesia
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {partnerLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                className="bg-card/50 backdrop-blur-sm px-6 py-3 rounded-xl border border-border hover:border-primary/30 transition-all">
                <span className="text-muted-foreground font-medium">
                  {logo}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnershipSection;
