
import React from "react";
import HeroSection from "@/components/competitions/HeroSection";
import FilterSection from "@/components/competitions/FilterSection";
import CompetitionList from "@/components/competitions/CompetitionList";
import PastWinnersSection from "@/components/competitions/PastWinnersSection";
import HostCtaSection from "@/components/competitions/HostCtaSection";

const Competitions = () => {
  return (
    <>
      <HeroSection />
      <FilterSection />
      <CompetitionList />
      <PastWinnersSection />
      <HostCtaSection />
    </>
  );
};

export default Competitions;
