
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { fadeIn, staggerContainer } from "@/lib/animations";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer at Google",
    image: "Professional Indian woman in business attire smiling at camera",
    quote: "The networking opportunities and skill development workshops at BharatVersity helped me land my dream job at Google."
  },
  {
    name: "Rahul Patel",
    role: "Entrepreneur",
    image: "Young Indian entrepreneur man in casual business attire",
    quote: "The mentorship and resources I received through BharatVersity were instrumental in helping me launch my startup."
  },
  {
    name: "Ananya Singh",
    role: "Data Scientist",
    image: "Professional Indian woman working with data visualizations",
    quote: "Participating in BharatVersity's competitions gave me the confidence and skills to excel in my field."
  }
];

const TestimonialsSection = () => {
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
            Hear from students and professionals who have transformed their careers through BharatVersity.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={fadeIn} className="card-hover">
              <Card className="h-full border-none shadow-md">
                <CardHeader className="pb-0">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img  className="w-full h-full object-cover" alt={testimonial.name} src="https://images.unsplash.com/photo-1694388001616-1176f534d72f" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
