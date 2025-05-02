
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Search, Filter, ChevronDown, Building, Clock, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Jobs = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      company: "TechInnovate India",
      location: "Bangalore",
      type: "Full-time",
      salary: "₹12-18 LPA",
      logo: "TechInnovate company logo with modern design",
      description: "We're looking for a skilled Software Engineer to join our team and help build innovative solutions for our clients."
    },
    {
      id: 2,
      title: "Marketing Specialist",
      company: "Global Brands",
      location: "Mumbai",
      type: "Full-time",
      salary: "₹8-12 LPA",
      logo: "Global Brands company logo with professional design",
      description: "Join our marketing team to develop and implement effective marketing strategies for our growing portfolio of brands."
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "Analytics Pro",
      location: "Hyderabad",
      type: "Full-time",
      salary: "₹15-20 LPA",
      logo: "Analytics Pro company logo with data visualization elements",
      description: "We're seeking a Data Scientist to analyze complex datasets and provide actionable insights to drive business decisions."
    },
    {
      id: 4,
      title: "UX/UI Designer",
      company: "Creative Solutions",
      location: "Delhi",
      type: "Full-time",
      salary: "₹10-15 LPA",
      logo: "Creative Solutions company logo with artistic elements",
      description: "Design intuitive and engaging user experiences for web and mobile applications in a collaborative environment."
    },
    {
      id: 5,
      title: "Product Manager",
      company: "InnovateTech",
      location: "Pune",
      type: "Full-time",
      salary: "₹18-25 LPA",
      logo: "InnovateTech company logo with modern tech design",
      description: "Lead product development from conception to launch, working with cross-functional teams to deliver exceptional products."
    },
    {
      id: 6,
      title: "Content Writer Intern",
      company: "Digital Media House",
      location: "Remote",
      type: "Internship",
      salary: "₹15-25K per month",
      logo: "Digital Media House company logo with creative elements",
      description: "Create engaging content for various platforms while learning from experienced content strategists."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Find Your Dream Job</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Discover exciting career opportunities from top companies across India. Your next career move starts here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
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
                placeholder="Search jobs by title, company, or keyword..." 
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" className="flex items-center">
                <Filter className="mr-2 h-4 w-4" /> Filter
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="flex items-center">
                Job Type
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="flex items-center">
                Location
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="flex items-center">
                Experience
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Jobs List */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {jobs.map((job, index) => (
              <motion.div key={job.id} variants={fadeIn} className="card-hover">
                <Card className="overflow-hidden border-none shadow-md h-full">
                  <CardHeader className="pb-2">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-md overflow-hidden mr-4 bg-gray-100 flex items-center justify-center">
                        <img  className="w-full h-full object-cover" alt={`${job.company} logo`} src="https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{job.title}</CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <Building className="h-4 w-4 mr-1 text-primary" />
                          {job.company}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-y-2 mb-4">
                      <div className="flex items-center mr-4">
                        <MapPin className="h-4 w-4 mr-1 text-gray-500" />
                        <span className="text-sm text-gray-600">{job.location}</span>
                      </div>
                      <div className="flex items-center mr-4">
                        <Clock className="h-4 w-4 mr-1 text-gray-500" />
                        <span className="text-sm text-gray-600">{job.type}</span>
                      </div>
                      <div className="flex items-center">
                        <CreditCard className="h-4 w-4 mr-1 text-gray-500" />
                        <span className="text-sm text-gray-600">{job.salary}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{job.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Apply Now</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button variant="outline" size="lg">
              Load More Jobs
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Employer CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <motion.div 
              className="lg:w-2/3 mb-8 lg:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Are You an Employer?</h2>
              <p className="text-lg opacity-90 max-w-2xl">
                Post your job openings on BharatVersity and connect with talented candidates from across India. Our platform helps you find the right talent for your organization.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-md">
                Post a Job
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Jobs;
