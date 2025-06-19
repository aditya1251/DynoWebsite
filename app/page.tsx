"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero";
import LogosSection from "@/components/sections/logos";
import JourneySection from "@/components/sections/journey";
import ServicesSection from "@/components/sections/services";
import ProjectsSection from "@/components/sections/projects";
import ProcessSection from "@/components/sections/process";
import PricingSection from "@/components/sections/pricing";
import CtaSection from "@/components/sections/cta";
import TestimonialsSection from "@/components/sections/testimonials";
import BlogSection from "@/components/sections/blog";
import FaqSection from "@/components/sections/faq";
import ContactFormSection from "@/components/sections/contact-form";

export default function CompleteLandingPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section with Header */}
      <div className="relative ">
        <div className="fixed top-0 left-0 right-0 z-10">
          <Header />
        </div>
        <HeroSection />
      </div>

      {/* Other Sections */}
      <LogosSection />
      <JourneySection />
      <ServicesSection />
      <ProjectsSection />
            <CtaSection />

      <ProcessSection />
      {/* <PricingSection /> */}
      {/* <TestimonialsSection /> */}
      {/* <BlogSection /> */}
      {/* <CtaSection /> */}
      <FaqSection />
      <ContactFormSection />
      <Footer />
    </div>
  );
}
