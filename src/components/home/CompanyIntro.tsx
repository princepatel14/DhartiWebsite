import { useRef } from "react";
import ParallaxSection from "../animations/ParallaxSection";
import ScrollReveal from "../animations/ScrollReveal";
import SectionHeading from "../ui/SectionHeading";
import React from "react";

const CompanyIntro = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="intro-section"
      ref={sectionRef}
      className="py-24 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Building the Future of Furniture Manufacturing"
          subtitle="With over 15 years of expertise, Dharati Industries has been at the forefront of advanced machinery solutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
          <ParallaxSection className="h-full">
            <div className="rounded-lg overflow-hidden h-full">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Dharati Industries Manufacturing"
                className="w-full h-full object-cover rounded-lg"
                style={{ maxHeight: "500px" }}
              />
            </div>
          </ParallaxSection>

          <div className="space-y-6">
            <ScrollReveal delay={2}>
              <h3 className="font-display text-2xl font-semibold text-industrial-charcoal mb-2">
                Our Story
              </h3>
              <p className="text-industrial-gray leading-relaxed">
                Founded in 2005, Dharati Industries began with a vision to
                revolutionize the furniture manufacturing process through
                innovative machinery design. What started as a small workshop has
                grown into a leading manufacturer of advanced furniture-making
                equipment.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={4}>
              <h3 className="font-display text-2xl font-semibold text-industrial-charcoal mb-2">
                Our Approach
              </h3>
              <p className="text-industrial-gray leading-relaxed">
                We combine industry expertise with technical innovation to create
                machinery that not only meets but exceeds the expectations of our
                clients. Each machine is designed with precision, durability, and
                ease of operation in mind.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={6}>
              <h3 className="font-display text-2xl font-semibold text-industrial-charcoal mb-2">
                Our Commitment
              </h3>
              <p className="text-industrial-gray leading-relaxed">
                We're committed to supporting our clients at every step of their
                journey. From installation to after-sales service, our dedicated
                team ensures your machinery performs at its best for years to
                come.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={8}>
              <a
                href="/company"
                className="inline-flex items-center mt-4 text-industrial-blue font-medium hover:underline"
              >
                Learn More About Us
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;