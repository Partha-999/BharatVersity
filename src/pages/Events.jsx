
import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Search, Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Events = () => {
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

  const events = [
    {
      id: 1,
      title: "Tech Innovation Summit",
      date: "June 15, 2025",
      location: "New Delhi",
      image: "Tech innovation summit with speakers on stage and audience",
      category: "Technology",
      description: "Join industry leaders and innovators to explore the latest technological advancements and future trends."
    },
    {
      id: 2,
      title: "Career Fair 2025",
      date: "July 10, 2025",
      location: "Mumbai",
      image: "Career fair with company booths and students networking",
      category: "Career",
      description: "Connect with top employers from various industries and explore exciting career opportunities."
    },
    {
      id: 3,
      title: "Leadership Workshop",
      date: "August 5, 2025",
      location: "Bangalore",
      image: "Leadership workshop with interactive group activities",
      category: "Skill Development",
      description: "Develop essential leadership skills through interactive sessions and expert guidance."
    },
    {
      id: 4,
      title: "Entrepreneurship Bootcamp",
      date: "August 20, 2025",
      location: "Hyderabad",
      image: "Entrepreneurship bootcamp with mentors and participants brainstorming",
      category: "Entrepreneurship",
      description: "A week-long intensive program to help aspiring entrepreneurs turn their ideas into viable businesses."
    },
    {
      id: 5,
      title: "AI & Machine Learning Conference",
      date: "September 12, 2025",
      location: "Pune",
      image: "AI conference with demonstrations and presentations",
      category: "Technology",
      description: "Explore the latest advancements in AI and machine learning through keynotes, workshops, and networking."
    },
    {
      id: 6,
      title: "Digital Marketing Masterclass",
      date: "October 5, 2025",
      location: "Chennai",
      image: "Digital marketing workshop with interactive presentations",
      category: "Marketing",
      description: "Learn cutting-edge digital marketing strategies from industry experts and practitioners."
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
              <span className="gradient-text">Upcoming Events</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Discover workshops, conferences, and networking opportunities to enhance your skills and expand your professional network.
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
                placeholder="Search events..." 
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
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

      {/* Events List */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {events.map((event, index) => (
              <motion.div key={event.id} variants={fadeIn} className="card-hover">
                <Card className="overflow-hidden border-none shadow-md">
                  <div className="relative h-48">
                    <img  className="w-full h-full object-cover" alt={event.title} src="https://images.unsplash.com/photo-1470781125250-124de17ebdea" />
                    <div className="absolute top-4 right-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {event.category}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <CardDescription>
                      <div className="flex items-center mt-2">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center mt-1">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        <span>{event.location}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{event.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Register Now</Button>
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
              Load More Events
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Host Event CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <motion.div 
              className="lg:w-2/3 mb-8 lg:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to Host Your Own Event?</h2>
              <p className="text-lg opacity-90 max-w-2xl">
                BharatVersity provides a platform for organizations and individuals to host events and reach a wider audience. Share your knowledge and expertise with our community.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-md">
                Host an Event
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
