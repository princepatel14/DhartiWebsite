import { useState } from "react";
import Layout from "../components/layout/Layout";
import SectionHeading from "../components/ui/SectionHeading";
import ScrollReveal from "../components/animations/ScrollReveal";
import { motion } from "framer-motion";
import React from "react";

// Product categories and data
const categories = ["All", "Cutting", "Finishing", "Shaping", "Utility"];

const machines = [
  {
    id: 1,
    name: "CNC Wood Router",
    category: "Cutting",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "High-precision cutting for complex designs.",
    slug: "cnc-wood-router",
  },
  {
    id: 2,
    name: "Edge Banding Machine",
    category: "Finishing",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Seamless edge finishing for panels.",
    slug: "edge-banding-machine",
  },
  {
    id: 3,
    name: "Panel Saw",
    category: "Cutting",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Precise panel cutting with minimal waste.",
    slug: "panel-saw",
  },
  {
    id: 4,
    name: "Dust Collector",
    category: "Utility",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Efficient dust management system.",
    slug: "dust-collector",
  },
  {
    id: 5,
    name: "Sanding Machine",
    category: "Finishing",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Smooth surface finishing for all materials.",
    slug: "sanding-machine",
  },
  {
    id: 6,
    name: "Woodworking Lathe",
    category: "Shaping",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Precision turning for decorative elements.",
    slug: "woodworking-lathe",
  },
];

const MachinesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredMachines =
    selectedCategory === "All"
      ? machines
      : machines.filter((machine) => machine.category === selectedCategory);

  return (
    <Layout>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Machinery Range"
            subtitle="Explore our comprehensive range of advanced furniture manufacturing machinery"
          />

          {/* Category Filters */}
          <div className="flex justify-center flex-wrap gap-2 mt-12 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md transition-all ${
                  selectedCategory === category
                    ? "bg-industrial-blue text-white"
                    : "bg-gray-100 text-industrial-charcoal hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Machines Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {filteredMachines.map((machine, index) => (
              <ScrollReveal key={machine.id} delay={index * 2}>
                <MachineCard machine={machine} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

const MachineCard = ({ machine }: { machine: typeof machines[0] }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 h-full"
    >
      <div className="aspect-video overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          src={machine.image}
          alt={machine.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <span className="text-sm text-industrial-blue bg-industrial-blue/10 px-3 py-1 rounded-full">
          {machine.category}
        </span>
        <h3 className="font-display text-xl font-semibold mt-3 mb-2 text-industrial-charcoal">
          {machine.name}
        </h3>
        <p className="text-industrial-gray mb-6">{machine.description}</p>
        <a
          href={`/machines/${machine.slug}`}
          className="inline-flex items-center text-industrial-blue font-medium hover:underline"
        >
          View Details
          <svg
            className="ml-1 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default MachinesPage;