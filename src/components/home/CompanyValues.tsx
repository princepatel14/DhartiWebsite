import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "../ui/SectionHeading";
import { Award, Clock, Settings, ShieldCheck } from "lucide-react";
import ScrollReveal from "../animations/ScrollReveal";
import React from "react";

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ValueCard = ({ icon, title, description, delay }: ValueCardProps) => {
  return (
    <ScrollReveal delay={delay} className="flex flex-col items-center">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white rounded-lg p-6 shadow-md border border-gray-100 text-center h-full"
      >
        <div className="bg-industrial-blue/10 rounded-full p-4 inline-flex mb-4">
          <div className="text-industrial-blue">{icon}</div>
        </div>
        <h3 className="font-display text-xl font-semibold mb-3 text-industrial-charcoal">
          {title}
        </h3>
        <p className="text-industrial-gray">{description}</p>
      </motion.div>
    </ScrollReveal>
  );
};

const CompanyValues = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const values = [
    {
      icon: <ShieldCheck size={32} />,
      title: "Trust",
      description:
        "We build lasting relationships through transparency and reliability in every interaction.",
    },
    {
      icon: <Settings size={32} />,
      title: "Innovation",
      description:
        "We continuously push the boundaries of what's possible in furniture machinery.",
    },
    {
      icon: <Award size={32} />,
      title: "Excellence",
      description:
        "We maintain the highest standards in design, manufacturing, and customer service.",
    },
    {
      icon: <Clock size={32} />,
      title: "Efficiency",
      description:
        "Our solutions are designed to optimize production and maximize your operational capacity.",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-24 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Why Choose Dharati Industries"
          subtitle="Beyond manufacturing machines, we build partnerships that drive your business forward."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {values.map((value, index) => (
            <ValueCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              description={value.description}
              delay={index * 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;
