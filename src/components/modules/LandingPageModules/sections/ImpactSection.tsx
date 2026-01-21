"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Building2, Globe, Trophy } from "lucide-react";

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

const testimonials = [
  {
    quote:
      "StudentsxCEOs gave me the real-world exposure I needed. The mentorship and networking opportunities were invaluable.",
    author: "Alumni - University of Indonesia",
    role: "Now at McKinsey & Company",
  },
  {
    quote:
      "The case-based learning approach prepared me for actual business challenges. It's more than just theory.",
    author: "Alumni - ITB",
    role: "Now at Google Indonesia",
  },
  {
    quote:
      "Being part of SxC opened doors I never knew existed. The community is incredibly supportive.",
    author: "Alumni - UGM",
    role: "Now Founder of Tech Startup",
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
          <p className="text-muted-foreground text-lg">
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
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}>
          <h3 className="text-2xl font-bold text-secondary-foreground text-center mb-10">
            What Our Alumni Say
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border">
                <div className="text-primary text-4xl mb-4">`&quot;`</div>
                <p className="text-foreground mb-6 italic">
                  {testimonial.quote}
                </p>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-primary">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
