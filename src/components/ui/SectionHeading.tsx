import { ScrollReveal } from "../animations/ScrollReveal";
import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  alignment = "center",
  className = "",
}: SectionHeadingProps) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={`mb-12 ${alignmentClasses[alignment]} ${className}`}>
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-industrial-charcoal mb-3">
          {title}
        </h2>
      </ScrollReveal>
      
      {subtitle && (
        <ScrollReveal delay={1}>
          <p className="text-industrial-gray text-lg max-w-3xl mx-auto">
            {subtitle}
          </p>
        </ScrollReveal>
      )}
      
      <ScrollReveal delay={2}>
        <div className={`h-1 w-20 bg-industrial-blue mt-4 ${
          alignment === "center" ? "mx-auto" : 
          alignment === "right" ? "ml-auto" : ""
        }`}></div>
      </ScrollReveal>
    </div>
  );
};

export default SectionHeading;
