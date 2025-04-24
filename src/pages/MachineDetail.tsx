import { useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import ScrollReveal from "../components/animations/ScrollReveal";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import React from "react";

// Placeholder machines data
const machines = [
  {
    id: 1,
    name: "CNC Wood Router",
    category: "Cutting",
    slug: "cnc-wood-router",
    description:
      "Our advanced CNC Wood Router provides high-precision cutting for complex designs. With computer-controlled accuracy, it can create intricate patterns, joints, and shapes that would be impossible with manual tools.",
    features: [
      "Multi-axis precision routing",
      "Automatic tool changing system",
      "Large working area for furniture components",
      "High-speed spindle for clean cuts",
      "Advanced dust collection system",
      "User-friendly control interface"
    ],
    specifications: {
      "Working Area": "1300mm x 2500mm",
      "Spindle Power": "5.5kW",
      "Maximum Speed": "24,000 RPM",
      "Tool Positions": "10",
      "Maximum Material Height": "200mm",
      "Control System": "DSP Controller",
      "Power Supply": "380V/50Hz",
      "Weight": "1200kg"
    },
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 2,
    name: "Edge Banding Machine",
    category: "Finishing",
    slug: "edge-banding-machine",
    description:
      "Our Edge Banding Machine provides seamless edge finishing for panels. With automated feeding and precise application, it ensures professional results for furniture manufacturing.",
    features: [
      "Automatic edge feeding system",
      "PLC control with touch screen interface",
      "Pre-milling function for perfect edge preparation",
      "Hot-melt glue system for strong bonding",
      "End cutting and trimming units",
      "Corner rounding capability"
    ],
    specifications: {
      "Working Speed": "10-20 m/min",
      "Panel Thickness": "10-45mm",
      "Edge Thickness": "0.4-3mm",
      "Minimum Panel Length": "120mm",
      "Minimum Panel Width": "90mm",
      "Heating Time": "≤10 minutes",
      "Power Supply": "380V/50Hz",
      "Total Power": "7.5kW"
    },
    images: [
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  }
];

const MachineDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const machine = machines.find(m => m.slug === slug);
  
  if (!machine) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="font-display text-3xl font-bold text-industrial-charcoal">
            Machine Not Found
          </h1>
          <p className="mt-4 text-industrial-gray">
            The machine you're looking for doesn't exist or has been removed.
          </p>
          <a href="/machines" className="mt-6 inline-block bg-industrial-blue text-white px-6 py-2 rounded-md">
            View All Machines
          </a>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-4 mb-6">
            <a href="/machines" className="text-industrial-blue hover:underline inline-flex items-center">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Back to Machines
            </a>
            <h1 className="font-display text-4xl font-bold text-industrial-charcoal">
              {machine.name}
            </h1>
            <div className="flex items-center">
              <span className="bg-industrial-blue/10 text-industrial-blue px-3 py-1 rounded-full text-sm">
                {machine.category}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
            <ScrollReveal>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative aspect-video">
                  <img
                    src={machine.images[0]}
                    alt={machine.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex space-x-2">
                  {machine.images.map((img, idx) => (
                    <div 
                      key={idx}
                      className="w-20 h-16 rounded overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                    >
                      <img
                        src={img}
                        alt={`${machine.name} view ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal delay={2}>
                <p className="text-industrial-gray mb-8 leading-relaxed">
                  {machine.description}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={4}>
                <Tabs defaultValue="features">
                  <TabsList className="mb-6">
                    <TabsTrigger value="features">Features</TabsTrigger>
                    <TabsTrigger value="specifications">Specifications</TabsTrigger>
                  </TabsList>
                  <TabsContent value="features" className="space-y-4">
                    <ul className="space-y-2">
                      {machine.features.map((feature, idx) => (
                        <motion.li 
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center"
                        >
                          <svg className="w-5 h-5 text-industrial-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </TabsContent>
                  <TabsContent value="specifications" className="space-y-4">
                    <div className="border rounded-md">
                      {Object.entries(machine.specifications).map(([key, value], idx) => (
                        <div 
                          key={key}
                          className={`flex justify-between p-3 ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                        >
                          <span className="font-medium text-industrial-charcoal">{key}</span>
                          <span className="text-industrial-gray">{value}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </ScrollReveal>

              <ScrollReveal delay={6} className="mt-8">
                <a
                  href="/contact"
                  className="bg-industrial-orange text-white font-medium py-3 px-8 rounded-md hover:bg-opacity-90 transition-all inline-block"
                >
                  Request a Quote
                </a>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MachineDetailPage;