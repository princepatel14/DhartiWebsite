import { useEffect, useState, useRef } from "react";
import Layout from "../components/layout/Layout";
import SectionHeading from "../components/ui/SectionHeading";
import ScrollReveal from "../components/animations/ScrollReveal";
import ParallaxSection from "../components/animations/ParallaxSection";
import React from "react";

// Counter animation hook
const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step);
      }
    };

    animationFrame = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, [end, duration, isInView]);

  return { count, countRef };
};

// Team member data
const teamMembers = [
  {
    name: "Rahul Patel",
    position: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    bio: "With over 20 years of experience in industrial machinery design, Rahul founded Dharati Industries with a vision to revolutionize furniture manufacturing."
  },
  {
    name: "Priya Sharma",
    position: "CTO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    bio: "An engineering expert with a background in mechanical design, Priya leads our R&D department and oversees all technical innovations."
  },
  {
    name: "Amit Kumar",
    position: "Head of Production",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    bio: "Amit ensures that every machine that leaves our factory meets our rigorous quality standards and client specifications."
  }
];

// Certifications data
const certifications = [
  {
    name: "ISO 9001:2015",
    description: "Quality Management System",
    icon: "https://placehold.co/100x100?text=ISO"
  },
  {
    name: "CE Certification",
    description: "European Conformity",
    icon: "https://placehold.co/100x100?text=CE"
  },
  {
    name: "ISI Mark",
    description: "Indian Standards Institute",
    icon: "https://placehold.co/100x100?text=ISI"
  }
];

const CompanyPage = () => {
  // Counter stats
  const { count: machinesCount, countRef: machinesRef } = useCountUp(500);
  const { count: clientsCount, countRef: clientsRef } = useCountUp(200);
  const { count: yearsCount, countRef: yearsRef } = useCountUp(15);
  const { count: countriesCount, countRef: countriesRef } = useCountUp(25);

  return (
    <Layout>
      {/* Company Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Company"
            subtitle="The story of Dharati Industries' journey to becoming a leading machinery manufacturer"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 items-center">
            <ScrollReveal>
              <h3 className="font-display text-3xl font-bold text-industrial-charcoal mb-6">
                Our Story
              </h3>
              <div className="space-y-4 text-industrial-gray">
                <p>
                  Founded in 2005 by Rahul Patel, Dharati Industries began with a simple mission: to create furniture manufacturing machinery that combines precision, durability, and ease of use.
                </p>
                <p>
                  What started as a small workshop with just five employees has grown into a company that today employs over 100 skilled professionals and serves clients across 25 countries.
                </p>
                <p>
                  Our journey has been marked by continuous innovation and an unwavering commitment to quality. Each machine is designed, manufactured, and tested in our state-of-the-art facility to ensure it meets the highest standards.
                </p>
              </div>
            </ScrollReveal>

            <ParallaxSection className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Dharati Industries Factory"
                className="w-full h-full object-cover"
                style={{ minHeight: "400px" }}
              />
            </ParallaxSection>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-20 bg-industrial-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-industrial-charcoal/50 p-6 rounded-lg">
              <div ref={machinesRef} className="text-5xl font-display font-bold mb-2 text-industrial-blue">
                {machinesCount}+
              </div>
              <p className="text-white/80">Machines Installed</p>
            </div>
            
            <div className="bg-industrial-charcoal/50 p-6 rounded-lg">
              <div ref={clientsRef} className="text-5xl font-display font-bold mb-2 text-industrial-blue">
                {clientsCount}+
              </div>
              <p className="text-white/80">Satisfied Clients</p>
            </div>
            
            <div className="bg-industrial-charcoal/50 p-6 rounded-lg">
              <div ref={yearsRef} className="text-5xl font-display font-bold mb-2 text-industrial-blue">
                {yearsCount}+
              </div>
              <p className="text-white/80">Years of Experience</p>
            </div>
            
            <div className="bg-industrial-charcoal/50 p-6 rounded-lg">
              <div ref={countriesRef} className="text-5xl font-display font-bold mb-2 text-industrial-blue">
                {countriesCount}+
              </div>
              <p className="text-white/80">Countries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Meet Our Team"
            subtitle="The minds behind our innovative machinery solutions"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {teamMembers.map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 2}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 h-full">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-industrial-charcoal">
                      {member.name}
                    </h3>
                    <p className="text-industrial-blue font-medium mb-4">
                      {member.position}
                    </p>
                    <p className="text-industrial-gray">{member.bio}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Certifications"
            subtitle="Quality recognition that demonstrates our commitment to excellence"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {certifications.map((cert, index) => (
              <ScrollReveal key={cert.name} delay={index * 2}>
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={cert.icon}
                    alt={cert.name}
                    className="w-24 h-24 mb-6"
                  />
                  <h3 className="font-display text-xl font-semibold mb-2 text-industrial-charcoal">
                    {cert.name}
                  </h3>
                  <p className="text-industrial-gray">{cert.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CompanyPage;