import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "../components/layout/Layout";
import SectionHeading from "../components/ui/SectionHeading";
import ScrollReveal from "../components/animations/ScrollReveal";
import { X } from "lucide-react";
import React from "react";

// Gallery categories and images
const categories = ["All", "Installation", "Machinery", "Factory", "Events"];

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Machinery",
    title: "CNC Router Installation"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Installation",
    title: "Client Facility Setup"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Factory",
    title: "Manufacturing Floor"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Events",
    title: "Trade Show Exhibition"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Installation",
    title: "Edge Bander Setup"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Machinery",
    title: "Sanding Machine"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Factory",
    title: "Quality Control"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Events",
    title: "Client Training Session"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Installation",
    title: "Machine Testing"
  }
];

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null);

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-industrial-charcoal text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Installation Gallery
            </h1>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Explore our installations and see our machinery in action across diverse manufacturing facilities
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="flex justify-center flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeCategory === category
                    ? "bg-industrial-blue text-white"
                    : "bg-gray-100 text-industrial-charcoal hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <ScrollReveal key={image.id} delay={index * 1.5}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="cursor-pointer overflow-hidden rounded-lg shadow-md"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-medium text-industrial-charcoal">{image.title}</h3>
                    <p className="text-sm text-industrial-gray">{image.category}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="max-w-4xl max-h-[90vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 text-white hover:text-gray-300"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] rounded-lg object-contain"
              />
              <div className="mt-4 bg-white/10 backdrop-blur-md p-4 rounded-lg">
                <h3 className="text-xl font-display font-semibold text-white">
                  {selectedImage.title}
                </h3>
                <p className="text-white/80">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default GalleryPage;
