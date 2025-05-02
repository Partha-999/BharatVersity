
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsletterSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-red-600 text-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg opacity-90 max-w-xl mx-auto md:mx-0">
              Subscribe to our newsletter to receive updates about upcoming events, job opportunities, and competitions.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2 max-w-md w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form className="flex flex-col sm:flex-row gap-3">
              <Input 
                type="email"
                placeholder="Your email address" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 flex-grow"
                required
              />
              <Button type="submit" className="bg-white text-primary hover:bg-gray-100 flex-shrink-0">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
