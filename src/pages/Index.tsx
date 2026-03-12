
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import VideoSection from "@/components/VideoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import DisclaimerSection from "@/components/DisclaimerSection";
import ConsentPopup from "@/components/ConsentPopup";

const Index = () => {
  useEffect(() => {
    document.title = "Fungus Whisperer GPT - Free AI Mushroom Identification Tool";
  }, []);

  return (
    <div className="min-h-screen bg-fungus-dark text-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <VideoSection />
        <TestimonialsSection />
        <FAQSection />
        <DisclaimerSection />
      </main>
      <Footer />
      <ConsentPopup />
    </div>
  );
};

export default Index;
