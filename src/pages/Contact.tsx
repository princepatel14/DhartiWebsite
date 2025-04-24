import Layout from "../components/layout/Layout";
import SectionHeading from "../components/ui/SectionHeading";
import ScrollReveal from "../components/animations/ScrollReveal";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const ContactPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-industrial-charcoal text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Get In Touch With Us
            </h1>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              We're here to answer any questions you have about our machines and
              services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white -mt-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollReveal>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg p-6 shadow-md border border-gray-100 text-center h-full"
              >
                <div className="bg-industrial-blue/10 rounded-full p-4 inline-flex mb-4">
                  <Phone className="text-industrial-blue h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2 text-industrial-charcoal">
                  Call Us
                </h3>
                <p className="text-industrial-gray mb-4">
                  Talk to our friendly team
                </p>
                <a
                  href="tel:+917434052955"
                  target="_blank"
                  className="text-industrial-blue font-medium hover:underline"
                >
                  +91 743 052 955
                </a>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg p-6 shadow-md border border-gray-100 text-center h-full"
              >
                <div className="bg-industrial-blue/10 rounded-full p-4 inline-flex mb-4">
                  <Mail className="text-industrial-blue h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2 text-industrial-charcoal">
                  Email Us
                </h3>
                <p className="text-industrial-gray mb-4">
                  Send us your inquiries
                </p>
                <a
                  href="mailto:info@dharatiindustries.com"
                  target="_blank"
                  className="text-industrial-blue font-medium hover:underline"
                  >
                  info@dharatiindustries.com
                </a>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={4}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg p-6 shadow-md border border-gray-100 text-center h-full"
                >
                <div className="bg-industrial-blue/10 rounded-full p-4 inline-flex mb-4">
                  <MapPin className="text-industrial-blue h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2 text-industrial-charcoal">
                  Visit Us
                </h3>
                <p className="text-industrial-gray mb-4">
                  Come see our facilities
                </p>
                <a
                  href="https://maps.app.goo.gl/WZiJSLmbqNWN4Rz3A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-industrial-blue font-medium hover:underline"
                >
                    123 Industry Avenue, <br />
                    Manufacturing District, 400001
                </a>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={6}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg p-6 shadow-md border border-gray-100 text-center h-full"
              >
                <div className="bg-industrial-blue/10 rounded-full p-4 inline-flex mb-4">
                  <MessageSquare className="text-industrial-blue h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2 text-industrial-charcoal">
                  WhatsApp
                </h3>
                <p className="text-industrial-gray mb-4">Message us directly</p>
                <a
                  href="https://wa.me/917434052955?text=Hello%20My%20name%20is%20prince%20patel%20."
                  target="_blank"
                  className="text-industrial-blue font-medium hover:underline"
                  rel="noopener noreferrer"
                >
                  <span>+91 743 405 2955</span>
                </a>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100">
                <h2 className="font-display text-2xl font-bold text-industrial-charcoal mb-6">
                  Send Us a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-industrial-charcoal mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-industrial-blue"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-industrial-charcoal mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-industrial-blue"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-industrial-charcoal mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-industrial-blue"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-industrial-charcoal mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-industrial-blue"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-industrial-charcoal mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-industrial-blue"
                    />
                  </div>

                  <div>
                    <label className="block text-industrial-charcoal mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-industrial-blue"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-industrial-orange text-white font-medium py-3 px-8 rounded-md hover:bg-opacity-90 transition-all w-full md:w-auto"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={4}>
              <div className="rounded-lg overflow-hidden shadow-md border border-gray-100 h-full">
                {/* <iframe
                  src="https://maps.app.goo.gl/udRhqprgsmc5nXWH8"
                  className="w-full h-full border-0 min-h-[400px] md:min-h-full"
                  allowFullScreen
                  loading="lazy"
                  title="Dharati Industries Location"
                  ></iframe> */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.7108159062345!2d72.51504667509333!3d23.071061279139847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84d70a7e5277%3A0xb81e4a9c1a19bb1!2sEmerging%20Five!5e0!3m2!1sen!2sin!4v1745486446119!5m2!1sen!2sin"
                  className="w-full h-full border-0 min-h-[400px] md:min-h-full"
                  allowFullScreen
                  loading="lazy"
                  title="Dharati Industries Location"
                ></iframe>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our machinery and services"
          />

          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            {[
              {
                question:
                  "What kind of warranty do you offer on your machines?",
                answer:
                  "We provide a comprehensive 1-year warranty on all our machines, covering both parts and labor. Extended warranty packages are also available for purchase.",
              },
              {
                question: "Do you provide installation services?",
                answer:
                  "Yes, our team of expert technicians provides complete installation services. We also offer training sessions for your staff to ensure optimal machine operation.",
              },
              {
                question: "How quickly can you deliver and install a machine?",
                answer:
                  "Delivery times vary depending on the machine and your location. Typically, our standard delivery time is 4-6 weeks from order confirmation, with installation scheduled within one week of delivery.",
              },
              {
                question:
                  "Do you offer customization for specific manufacturing needs?",
                answer:
                  "Yes, we specialize in tailoring our machines to meet specific requirements. Our engineering team can work with you to design custom solutions for your unique manufacturing needs.",
              },
            ].map((item, index) => (
              <ScrollReveal
                key={index}
                delay={index * 2}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <h3 className="font-display text-lg font-semibold text-industrial-charcoal mb-3">
                  {item.question}
                </h3>
                <p className="text-industrial-gray">{item.answer}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
