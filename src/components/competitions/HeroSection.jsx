
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 hero-gradient">
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Competitions & Challenges</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Showcase your skills, compete with the best, and win exciting prizes. BharatVersity brings you opportunities to challenge yourself and grow.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
