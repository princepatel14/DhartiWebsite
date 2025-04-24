import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  direction?: "up" | "down";
}

const ParallaxSection = ({
  children,
  speed = 0.1,
  className = "",
  direction = "up",
}: ParallaxSectionProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  // Adjust the y value based on direction
  const multiplier = direction === "up" ? -speed : speed;
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${multiplier * 100}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxSection;