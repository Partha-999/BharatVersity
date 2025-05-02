
import React from "react";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { fadeIn, staggerContainer } from "@/lib/animations";

const winners = [
  {
    name: "Team Innovators",
    competition: "National Hackathon 2024",
    image: "Team of young Indian professionals celebrating with trophy",
    description: "Developed an AI-powered solution for sustainable agriculture that impressed the judges with its innovation and impact potential."
  },
  {
    name: "EcoSolutions",
    competition: "Business Plan Competition 2024",
    image: "Team of entrepreneurs with business plan presentation",
    description: "Their eco-friendly packaging business idea won first place for its market viability and environmental impact."
  },
  {
    name: "DesignMasters",
    competition: "National Design Challenge 2024",
    image: "Design team with creative project display",
    description: "Created an inclusive design solution for public spaces that addresses accessibility challenges for differently-abled individuals."
  }
];

const PastWinnersSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Past Winners</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the talented individuals and teams who excelled in our previous competitions.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {winners.map((winner, index) => (
            <motion.div key={index} variants={fadeIn} className="card-hover">
              <Card className="h-full border-none shadow-md">
                <div className="h-48 overflow-hidden">
                  <img  className="w-full h-full object-cover" alt={winner.name} src="https://images.unsplash.com/photo-1658504140972-7af3e80d35f1" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{winner.name}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center mt-1">
                      <Trophy className="h-4 w-4 mr-2 text-primary" />
                      <span>Winner of {winner.competition}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{winner.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PastWinnersSection;
