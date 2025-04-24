import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../animations/ScrollReveal";
import { Link } from "react-router-dom";
import React from "react";

// Placeholder data for machinery products
const products = [
  {
    id: 1,
    name: "CNC Wood Router",
    category: "Cutting",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    slug: "cnc-wood-router",
  },
  {
    id: 2,
    name: "Edge Banding Machine",
    category: "Finishing",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    slug: "edge-banding-machine",
  },
  {
    id: 3,
    name: "Panel Saw",
    category: "Cutting",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    slug: "panel-saw",
  },
  {
    id: 4,
    name: "Dust Collector",
    category: "Utility",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    slug: "dust-collector",
  },
  {
    id: 5,
    name: "Sanding Machine",
    category: "Finishing",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    slug: "sanding-machine",
  },
  {
    id: 6,
    name: "Woodworking Lathe",
    category: "Shaping",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    slug: "woodworking-lathe",
  },
];

const ProductsSlider = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    
    autoPlayRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % products.length);
      setDirection(1);
    }, 5000);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    }
    
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActive((prev) => (prev + 1) % products.length);
    setDirection(1);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActive((prev) => (prev - 1 + products.length) % products.length);
    setDirection(-1);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Advanced Machinery"
          subtitle="Designed for precision, efficiency, and reliability"
        />

        <div className="mt-12 relative">
          <div className="relative h-[500px] overflow-hidden rounded-lg">
            <motion.div
              key={active}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-6 md:p-12"
            >
              <div className="order-2 md:order-1">
                <ScrollReveal>
                  <h3 className="text-industrial-charcoal font-display text-3xl font-bold mb-3">
                    {products[active].name}
                  </h3>
                </ScrollReveal>
                
                <ScrollReveal delay={1}>
                  <div className="mb-4">
                    <span className="bg-industrial-blue/10 text-industrial-blue px-3 py-1 rounded-full text-sm">
                      {products[active].category}
                    </span>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal delay={2}>
                  <p className="text-industrial-gray mb-8">
                    Discover our high-performance {products[active].name} designed 
                    for optimal efficiency and precision in furniture manufacturing.
                  </p>
                </ScrollReveal>
                
                <ScrollReveal delay={3}>
                  <Link
                    to={`/machines/${products[active].slug}`}
                    className="bg-industrial-charcoal text-white px-6 py-2.5 rounded inline-flex items-center hover:bg-opacity-90 transition-all"
                  >
                    View Details
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </ScrollReveal>
              </div>
              
              <div className="order-1 md:order-2 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img
                    src={products[active].image}
                    alt={products[active].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={handlePrev}
              className="rounded-full p-2 text-industrial-charcoal hover:bg-industrial-blue hover:text-white transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <div className="flex space-x-2 items-center">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setDirection(index > active ? 1 : -1);
                    setActive(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    active === index 
                      ? "w-8 bg-industrial-blue" 
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={handleNext}
              className="rounded-full p-2 text-industrial-charcoal hover:bg-industrial-blue hover:text-white transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSlider;
