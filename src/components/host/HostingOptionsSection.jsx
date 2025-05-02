
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Calendar, Briefcase, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { fadeIn, staggerContainer } from "@/lib/animations";

const hostingOptions = [
  {
    title: "Host an Event",
    icon: <Calendar className="h-10 w-10 text-primary" />,
    description: "Organize workshops, seminars, or conferences to share knowledge and expertise.",
    benefits: [
      "Reach a wider audience of students and professionals",
      "Professional event management support",
      "Marketing and promotion through our platform",
      "Access to venue partners at discounted rates"
    ],
    cta: "Host an Event"
  },
  {
    title: "Post Job Openings",
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    description: "Connect with talented candidates for your organization's job openings.",
    benefits: [
      "Access to a pool of qualified candidates",
      "Targeted job posting to relevant candidates",
      "Applicant tracking and management tools",
      "Employer branding opportunities"
    ],
    cta: "Post a Job"
  },
  {
    title: "Host a Competition",
    icon: <Award className="h-10 w-10 text-primary" />,
    description: "Organize competitions to discover innovative solutions and talented individuals.",
    benefits: [
      "Engage with creative and talented participants",
      "Discover innovative solutions to challenges",
      "Enhance your organization's visibility",
      "Complete competition management support"
    ],
    cta: "Host a Competition"
  }
];

const HostingOptionsSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How You Can Partner With Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            BharatVersity offers multiple ways for organizations to engage with our community of students and professionals.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {hostingOptions.map((option, index) => (
            <motion.div key={index} variants={fadeIn} className="card-hover">
              <Card className="h-full border-none shadow-md">
                <CardHeader>
                  <div className="bg-orange-100 p-3 rounded-full w-fit mb-4">
                    {option.icon}
                  </div>
                  <CardTitle className="text-2xl">{option.title}</CardTitle>
                  <CardDescription className="text-base">
                    {option.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3 text-gray-800">Benefits:</h4>
                  <ul className="space-y-2">
                    {option.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    {option.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HostingOptionsSection;
