"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { programs } from "./const";
import ChatbotFAB from "../ChatbotModule";

export const ProgramModule = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="programs" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header - TETAP SESUAI LETAK & STYLE ASLINYA */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-24">
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

        {/* Programs List - Asymmetric Alternating Layout ala McKinsey */}
        <div className="max-w-7xl mx-auto space-y-32 md:space-y-48">
          {programs.map((program, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12 lg:gap-24`}>
                {/* Image Section dengan Shape Melengkung ala McKinsey */}
                <div className="flex-1 w-full relative group">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-tr-[100px] rounded-bl-[100px] shadow-sm">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content Section ala McKinsey */}
                <div className="flex-1 text-left">
                  <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold mb-4 block">
                    For {program.targetAudience}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-medium text-[#121212] mb-6 leading-tight">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light">
                    {program.description}
                  </p>
                  <button className="text-primary font-semibold border-b-2 border-primary/20 pb-1 transition-all hover:border-primary hover:pr-4">
                    Learn more
                  </button>
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
