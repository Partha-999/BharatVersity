
import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, Award, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fadeIn, staggerContainer } from "@/lib/animations";

const features = [
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "Skill Development",
    description: "Access to workshops, courses, and resources to enhance your skills."
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Networking",
    description: "Connect with peers, mentors, and industry professionals."
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "Competitions",
    description: "Participate in challenges to showcase your talents and win prizes."
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: "Job Opportunities",
    description: "Discover internships and job openings from top companies."
  }
];

const FeaturesSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            BharatVersity provides a comprehensive platform for students and professionals to grow, learn, and connect.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={fadeIn} className="card-hover">
              <Card className="h-full border-none shadow-md text-center sm:text-left">
                <CardHeader>
                  <div className="bg-orange-100 p-3 rounded-full w-fit mb-4 mx-auto sm:mx-0">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
