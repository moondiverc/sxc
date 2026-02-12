"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ProgramCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  month: string;
  targetAudience: string;
  index: number;
}

export const ProgramCard = ({
  id,
  title,
  description,
  image,
  icon: Icon,
  month,
  targetAudience,
  index,
}: ProgramCardProps) => {
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group flex flex-col md:flex-row bg-white border border-gray-200 overflow-hidden rounded-md shadow-2xl hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
      {/* Image Section */}
      <div className="relative w-full md:w-1/3 h-62.5 md:h-auto md:min-h-100 overflow-hidden bg-black/30 md:shrink-0">
        <div className="absolute top-4 left-4 z-20 bg-primary px-4 py-1.5 text-white text-[10px] font-black uppercase tracking-[0.15em] rounded-md">
          {month}
        </div>

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-6 md:p-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 leading-tight">
          {title}
        </h3>

        <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-5 flex-1 font-light">
          {description}
        </p>

        <div className="pt-4 border-t border-gray-200">
          <p className="text-[9px] uppercase tracking-[0.2em] text-primary font-black mb-2">
            Target Audience
          </p>
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-5">
            {targetAudience}
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfezJ4fESoXGCyr1UXkG1gqIif6f2ZylEfuNm2IPkNctmD_lQ/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-foreground hover:text-primary transition-colors group/btn">
            Join Program
            <div className="relative flex h-8 w-8 items-center justify-center bg-primary transition-all duration-300 group-hover/btn:w-10 rounded-sm">
              <ArrowRight className="h-3 w-3 text-white" />
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  );
};
