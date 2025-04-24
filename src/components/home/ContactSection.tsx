import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../animations/ScrollReveal";
import React from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Thank you for your message. We will get back to you shortly!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have questions about our machines? Contact us for more information."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Contact Form */}
          <ScrollReveal className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-display text-2xl font-semibold text-industrial-charcoal mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-industrial-charcoal mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-industrial-blue"
                />
              </div>
              
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-industrial-charcoal mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-industrial-blue"
                />
              </div>
              
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-industrial-charcoal mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-industrial-blue"
                />
              </div>
              
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-industrial-charcoal mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-industrial-blue"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-industrial-orange text-white font-medium py-3 px-6 rounded-md hover:bg-opacity-90 transition-all w-full mt-2"
              >
                Send Message
              </button>
            </form>
          </ScrollReveal>

          {/* Map and Contact Info */}
          <div className="flex flex-col h-full">
            <ScrollReveal delay={2} className="flex-1">
              <div className="rounded-lg overflow-hidden h-64 mb-8 shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215061115376!2d-73.9836159!3d40.7484444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1680548640196!5m2!1sen!2sus"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  title="Dharati Industries Location"
                ></iframe>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={4} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-display text-2xl font-semibold text-industrial-charcoal mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="mr-4 h-6 w-6 text-industrial-blue flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-industrial-charcoal">Address</h4>
                    <p className="text-industrial-gray">
                      123 Industry Avenue, Manufacturing District, 400001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="mr-4 h-6 w-6 text-industrial-blue flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-industrial-charcoal">Phone</h4>
                    <a 
                      href="tel:+911234567890"
                      className="text-industrial-gray hover:text-industrial-blue transition-colors"
                    >
                      +91 123 456 7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="mr-4 h-6 w-6 text-industrial-blue flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-industrial-charcoal">Email</h4>
                    <a 
                      href="mailto:info@dharatiindustries.com"
                      className="text-industrial-gray hover:text-industrial-blue transition-colors"
                    >
                      info@dharatiindustries.com
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
