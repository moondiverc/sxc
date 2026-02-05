"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarouselImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

const images: CarouselImage[] = [
  {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&h=600&fit=crop",
    alt: "Business Meeting",
    title: "CEO Sharing Session",
    description: "Learn directly from Indonesian industry leaders",
  },
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=600&fit=crop",
    alt: "Students Collaboration",
    title: "Collaborative Learning",
    description: "Network with the best students from all over Indonesia",
  },
  {
    src: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=1200&h=600&fit=crop",
    alt: "Leadership Workshop",
    title: "Leadership Workshop",
    description: "Honing leadership skills through intensive workshops",
  },
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=600&fit=crop",
    alt: "Networking Event",
    title: "Networking Event",
    description: "Networking opportunities with 100+ corporate partners",
  },
  {
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&h=600&fit=crop",
    alt: "Public Speaking",
    title: "Public Speaking Training",
    description: "Practising presentation and public speaking skills",
  },
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="py-16 md:py-24 bg-secondary/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Precious{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
              Moment
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Documentation of StudentsxCEOs Jakarta activities and programmes
          </p>
        </motion.div>

        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 1024px"
                  className="object-cover"
                  priority={currentIndex === 0}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-secondary/90 via-secondary/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl md:text-3xl font-bold text-white mb-2"
                  >
                    {images[currentIndex].title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-white/80 text-sm md:text-base"
                  >
                    {images[currentIndex].description}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm"
              onClick={goToPrevious}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm"
              onClick={goToNext}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-muted hover:bg-primary/50"
                }`}
              />
            ))}
          </div>

          {/* Thumbnail Preview */}
          <div className="hidden md:flex justify-center gap-4 mt-8">
            {images.map((image, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative w-20 h-14 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentIndex
                    ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-110"
                    : "opacity-60 hover:opacity-100"
                }`}
                whileHover={{ scale: index === currentIndex ? 1.1 : 1.05 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={80}
                  height={56}
                  className="object-cover w-full h-full"
                />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
