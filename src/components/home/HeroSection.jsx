
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 hero-gradient">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Skills, Growth, Connection, Success</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              We cultivate success by fostering skills, facilitating growth, and nurturing meaningful connections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-md">
                Explore Opportunities <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-md">
                Join Community
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 mt-10 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <img  className="rounded-lg shadow-2xl mx-auto" alt="Students collaborating at BharatVersity" src="https://images.unsplash.com/photo-1674665210376-072ea7469499" />
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="flex items-center">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">Join over</p>
                    <p className="text-xl font-bold">10,000+ Students</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
