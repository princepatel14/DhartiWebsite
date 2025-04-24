import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import React from "react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !textRef.current) return;

    const tl = gsap.timeline();

    tl.from(textRef.current.querySelectorAll(".animate-item"), {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
    });

    // Parallax effect on scroll
    gsap.to(heroRef.current.querySelector(".bg-image"), {
      y: "30%",
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector("#intro-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden bg-industrial-charcoal"
    >
      {/* Background Image */}
      <div
        className="bg-image absolute inset-0 w-full h-full bg-top bg-cover bg-no-repeat opacity-50 -mt-[219px]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
        }}
      />

      {/* Content */}
      <div className="relative inset-0 flex flex-col items-center justify-center h-full w-full px-4 z-10">
        <div ref={textRef} className="text-center max-w-4xl">
          <h1 className="animate-item font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            Advanced Furniture
            <span className="text-industrial-blue"> Machinery Solutions</span>
          </h1>
          <p className="animate-item text-white/90 text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Engineering excellence to power your furniture manufacturing
            business
          </p>
          <div className="animate-item flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="#machines"
              className="bg-industrial-blue text-white font-medium py-3 px-8 rounded-md hover:bg-opacity-90 transition-all"
            >
              Explore Our Machines
            </a>
            <a
              href="/contact"
              className="bg-industrial-orange text-white font-medium py-3 px-8 rounded-md hover:bg-opacity-90 transition-all"
            >
              Get a Quote
            </a>
          </div>
        </div>

        {/* Scroll down indicator */}
        <motion.div
          className="absolute bottom-10 flex flex-col items-center cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          onClick={scrollToNextSection}
        >
          <span className="text-white/80 text-sm mb-1">Scroll Down</span>
          <ChevronDown className="text-industrial-blue h-6 w-6" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
