
import React from "react";
import HeroSection from "@/components/host/HeroSection";
import HostingOptionsSection from "@/components/host/HostingOptionsSection";
import SuccessStoriesSection from "@/components/host/SuccessStoriesSection";
import PricingSection from "@/components/host/PricingSection";
import ContactCtaSection from "@/components/host/ContactCtaSection";

const Host = () => {
  return (
    <>
      <HeroSection />
      <HostingOptionsSection />
      <SuccessStoriesSection />
      <PricingSection />
      <ContactCtaSection />
    </>
  );
};

export default Host;
