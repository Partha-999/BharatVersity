
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
            <span className="gradient-text">Get in Touch</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Have questions or need assistance? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
