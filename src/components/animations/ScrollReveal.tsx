import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import React from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export const ScrollReveal = ({ 
  children, 
  delay = 0, 
  direction = "up", 
  className = "" 
}: ScrollRevealProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const directionVariants = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: 50, opacity: 0 },
    right: { x: -50, opacity: 0 },
    none: { opacity: 0 },
  };

  useEffect(() => {
    if (inView) {
      controls.start({ 
        y: 0, 
        x: 0, 
        opacity: 1, 
        transition: { duration: 0.8, delay: delay * 0.1, ease: "easeOut" } 
      });
    }
  }, [controls, inView, delay]);

  return (
    <motion.div
      ref={ref}
      initial={directionVariants[direction]}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;