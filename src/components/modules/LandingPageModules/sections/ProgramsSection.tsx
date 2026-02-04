"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  ArrowRight,
} from "lucide-react";
import { programs } from "@/components/modules/ProgramModule/program_data";

const ProgramsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })],
  );

  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const toggleAutoplay = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;
    if (isPlaying) {
      autoplay.stop();
    } else {
      autoplay.play();
    }
    setIsPlaying(!isPlaying);
  }, [emblaApi, isPlaying]);

  return (
    <section
      id="programs"
      className="relative overflow-hidden py-20 md:py-28 bg-background">
      <div className="container relative mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
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

        {/* Carousel Viewport */}
        <div className="max-w-7xl mx-auto overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {programs.map((program) => (
              <div
                key={program.id}
                className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_95%] lg:flex-[0_0_90%]">
                {/* PERUBAHAN UTAMA:
                  1. h-full berganti menjadi min-h-[600px] di mobile agar kartu bisa memanjang jika teks banyak.
                  2. lg:min-h-[520px] untuk desktop agar tetap konsisten.
                  3. Flex-col di mobile dan flex-row di desktop.
                */}
                <div className="group flex flex-col lg:flex-row bg-[#0a0a0a] border border-white/5 overflow-hidden min-h-150 lg:min-h-130 h-full shadow-2xl items-stretch">
                  {/* Sisi Atas/Kiri: Gambar */}
                  <div className="relative w-full lg:w-1/2 h-62.5 lg:h-auto overflow-hidden shrink-0">
                    <div className="absolute top-6 left-6 z-20 bg-primary px-5 py-1.5 text-white text-[10px] font-black uppercase tracking-[0.2em]">
                      {program.month}
                    </div>

                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      priority
                      className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 lg:bg-black/10 transition-colors duration-500 group-hover:bg-transparent" />
                  </div>

                  {/* Sisi Bawah/Kanan: Konten */}
                  <div className="flex flex-col justify-between p-6 md:p-8 lg:p-14 w-full lg:w-1/2 text-white grow">
                    <div className="space-y-4 lg:space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                          <program.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="h-px flex-1 bg-white/5" />
                      </div>

                      <h3 className="text-2xl lg:text-4xl font-bold tracking-tighter leading-[1.1]">
                        {program.title}
                      </h3>

                      {/* Penyesuaian Mobile: 
                        Hapus line-clamp jika ingin semua teks muncul, atau atur jumlah baris yang lebih banyak di mobile.
                      */}
                      <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md font-light">
                        {program.description}
                      </p>
                    </div>

                    {/* Footer Kartu */}
                    <div className="space-y-6 mt-8 lg:mt-0">
                      <div className="pt-6 border-t border-white/5">
                        <p className="text-[9px] uppercase tracking-[0.3em] text-primary font-black mb-2">
                          Target Audience
                        </p>
                        <p className="text-xs font-medium text-gray-300 uppercase tracking-widest">
                          {program.targetAudience}
                        </p>
                      </div>

                      <div className="pt-2">
                        <a
                          href="/program"
                          className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] group/btn transition-colors hover:text-primary">
                          Read More
                          <div className="relative flex h-10 w-10 items-center justify-center bg-primary transition-all duration-300 group-hover/btn:w-14 shrink-0">
                            <ArrowRight className="h-4 w-4 text-white" />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="mt-4 md:mt-8 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-8 border-t border-white/5 pt-10 px-2">
          <button
            onClick={toggleAutoplay}
            className="flex h-12 w-12 items-center justify-center bg-white/5 border border-white/10 text-foreground hover:bg-primary hover:text-white transition-all shadow-sm group">
            {isPlaying ? (
              <Pause size={18} className="fill-current" />
            ) : (
              <Play size={18} className="fill-current translate-x-0.5" />
            )}
          </button>

          <div className="flex items-center gap-8 lg:gap-12">
            <div className="flex items-baseline font-mono">
              <span className="text-4xl md:text-5xl font-black text-foreground tracking-tighter">
                0{selectedIndex + 1}
              </span>
              <span className="mx-3 text-muted-foreground font-light text-xl">
                /
              </span>
              <span className="text-muted-foreground text-xs font-bold tracking-[0.2em] uppercase opacity-50">
                0{programs.length}
              </span>
            </div>

            <div className="flex gap-px">
              <button
                onClick={() => emblaApi?.scrollPrev()}
                className="flex h-12 w-12 items-center justify-center bg-card text-foreground hover:bg-primary hover:text-white transition-all border border-white/5 shadow-sm">
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => emblaApi?.scrollNext()}
                className="flex h-12 w-12 items-center justify-center bg-card text-foreground hover:bg-primary hover:text-white transition-all border border-white/5 shadow-sm">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
