import { useEffect } from "react";
import Layout from "../components/layout/Layout";
import Hero from "../components/home/Hero";
import CompanyIntro from "../components/home/CompanyIntro";
import CompanyValues from "../components/home/CompanyValues";
import ProductsSlider from "../components/home/ProductsSlider";
import ClientsCarousel from "../components/home/ClientsCarousel";
import ContactSection from "../components/home/ContactSection";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

const Index = () => {
  useEffect(() => {
    // Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Smooth scroll setup for the entire page
    ScrollTrigger.defaults({ markers: false });

    // Clean up ScrollTrigger instances on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <Layout>
      <Hero />
      <CompanyIntro />
      <ProductsSlider />
      <CompanyValues />
      <ClientsCarousel />
      <ContactSection />
    </Layout>
  );
};

export default Index;
