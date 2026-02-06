"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })],
  );

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

  const stopAutoplay = () => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    autoplay?.stop();
  };

  const startAutoplay = () => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    autoplay?.play();
  };

  return (
    <section className="py-16 md:py-24 bg-secondary/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12">
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

        <div className="relative max-w-5xl mx-auto">
          {/* Carousel Viewport */}
          <div
            ref={emblaRef}
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            onMouseEnter={stopAutoplay}
            onMouseLeave={startAutoplay}>
            <div className="flex -ml-4">
              {images.map((image, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 pl-4">
                  <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/10 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 1024px"
                      className="object-cover"
                      priority={index === 0}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-secondary/90 via-secondary/20 to-transparent" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                      <h3 className="text-xl md:text-3xl font-bold text-white mb-2">
                        {image.title}
                      </h3>
                      <p className="text-white/80 text-xs sm:text-sm md:text-base">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow Navigation */}
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-4 top-[42%] -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm w-11 h-11 rounded-md flex items-center justify-center transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            className="absolute right-4 top-[42%] -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm w-11 h-11 rounded-md flex items-center justify-center transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === selectedIndex
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
                onClick={() => emblaApi?.scrollTo(index)}
                className={`relative w-20 h-14 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === selectedIndex
                    ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-110"
                    : "opacity-60 hover:opacity-100"
                }`}
                whileHover={{ scale: index === selectedIndex ? 1.1 : 1.05 }}>
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
