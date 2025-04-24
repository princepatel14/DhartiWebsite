import React from "react";
import InfiniteSlider from "../animations/InfiniteSlider";
import SectionHeading from "../ui/SectionHeading";

// Placeholder client data
const clients = [
  { id: 1, name: "Woodcraft Industries", logo: "https://placehold.co/200x80?text=Client+1" },
  { id: 2, name: "Modern Furniture Co.", logo: "https://placehold.co/200x80?text=Client+2" },
  { id: 3, name: "Elite Interiors", logo: "https://placehold.co/200x80?text=Client+3" },
  { id: 4, name: "Global Woodworks", logo: "https://placehold.co/200x80?text=Client+4" },
  { id: 5, name: "Premium Designs", logo: "https://placehold.co/200x80?text=Client+5" },
  { id: 6, name: "Luxury Furnishings", logo: "https://placehold.co/200x80?text=Client+6" },
  { id: 7, name: "Quality Cabinets", logo: "https://placehold.co/200x80?text=Client+7" },
  { id: 8, name: "Creative Woodshop", logo: "https://placehold.co/200x80?text=Client+8" },
];

const ClientsCarousel = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 mb-8">
        <SectionHeading
          title="Trusted by Industry Leaders"
          subtitle="Join hundreds of furniture manufacturers who rely on our machinery"
        />
      </div>

      <div className="w-full overflow-hidden">
        <InfiniteSlider duration={30} className="py-8">
          {clients.map((client) => (
            <div
              key={client.id}
              className="min-w-[200px] h-24 mx-8 flex items-center justify-center"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-16 max-w-full grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
};

export default ClientsCarousel;
