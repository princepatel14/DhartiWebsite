import { ReactNode, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import React from "react";

interface InfiniteSliderProps {
  children: ReactNode;
  duration?: number;
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteSlider = ({
  children,
  duration = 25,
  reverse = false,
  pauseOnHover = true,
  className = "",
}: InfiniteSliderProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!sliderRef.current || !contentRef.current) return;
    
    const contentWidth = contentRef.current.offsetWidth;
    // Ensure content is wide enough to need animation
    if (contentWidth <= sliderRef.current.offsetWidth) {
      // Duplicate content to make it wide enough for animation
      if (contentRef.current.children.length > 0) {
        const duplicates = Array.from(contentRef.current.children).map(
          (child) => child.cloneNode(true)
        );
        duplicates.forEach((duplicate) => {
          contentRef.current?.appendChild(duplicate);
        });
      }
    }
  }, []);
  
  return (
    <div 
      ref={sliderRef} 
      className={`overflow-hidden relative w-full ${className}`}
    >
      <motion.div
        ref={contentRef}
        className="flex"
        animate={{
          x: reverse ? [0, -1000] : [-1000, 0],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration,
          ease: "linear",
        }}
        {...(pauseOnHover && {
          whileHover: { animationPlayState: "paused" },
        })}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default InfiniteSlider;
