
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ContactCtaSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-red-600 text-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left">
          <motion.div 
            className="lg:w-2/3 mb-8 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Have Questions?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto lg:mx-0">
              Our team is ready to help you find the right hosting solution for your organization. Contact us to learn more about how we can help you achieve your goals.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-md">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCtaSection;
