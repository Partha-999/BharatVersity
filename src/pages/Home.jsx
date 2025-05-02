
import React from "react";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import UpcomingEventsSection from "@/components/home/UpcomingEventsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <UpcomingEventsSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
};

export default Home;
