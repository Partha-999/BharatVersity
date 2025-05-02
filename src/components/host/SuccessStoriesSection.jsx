
import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { fadeIn, staggerContainer } from "@/lib/animations";

const stories = [
  {
    company: "TechInnovate India",
    type: "Event Host",
    image: "Professional tech conference with audience and speakers",
    quote: "Hosting our annual tech conference through BharatVersity helped us reach a wider audience and connect with talented individuals. The platform's support in event management and promotion was exceptional.",
    person: "Rajesh Kumar, Director of Events"
  },
  {
    company: "Global Solutions",
    type: "Job Poster",
    image: "HR team reviewing applications in modern office",
    quote: "We've been able to find exceptional talent through BharatVersity's job posting platform. The quality of candidates and the efficiency of the hiring process have exceeded our expectations.",
    person: "Priya Sharma, HR Manager"
  }
];

const SuccessStoriesSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how organizations have successfully partnered with BharatVersity to achieve their goals.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {stories.map((story, index) => (
            <motion.div key={index} variants={fadeIn} className="card-hover">
              <Card className="border-none shadow-md overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="h-48 lg:h-full">
                    <img  className="w-full h-full object-cover" alt={`${story.company} success story`} src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold">{story.company}</h3>
                      <p className="text-primary font-medium">{story.type}</p>
                    </div>
                    <p className="text-gray-600 italic mb-4 text-sm">"{story.quote}"</p>
                    <p className="text-gray-800 font-medium text-sm">- {story.person}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
