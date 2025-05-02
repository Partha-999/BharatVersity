
import React from "react";
import { motion } from "framer-motion";
import { Search, Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const FilterSection = () => {
  return (
    <section className="py-8 bg-white border-b">
      <div className="container-custom">
        <motion.div 
          className="flex flex-col md:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search competitions..." 
              className="pl-10"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" className="flex items-center">
              <Filter className="mr-2 h-4 w-4" /> Filter
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="flex items-center">
              Category
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="flex items-center">
              Location
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FilterSection;
