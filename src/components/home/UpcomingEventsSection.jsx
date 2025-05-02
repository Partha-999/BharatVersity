
import React from "react";
import { motion } from "framer-motion";
import { Calendar, ChevronRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { fadeIn, staggerContainer } from "@/lib/animations";

const events = [
  {
    title: "Tech Innovation Summit",
    date: "June 15, 2025",
    location: "New Delhi",
    image: "Tech innovation summit with speakers on stage and audience",
    category: "Technology"
  },
  {
    title: "Career Fair 2025",
    date: "July 10, 2025",
    location: "Mumbai",
    image: "Career fair with company booths and students networking",
    category: "Career"
  },
  {
    title: "Leadership Workshop",
    date: "August 5, 2025",
    location: "Bangalore",
    image: "Leadership workshop with interactive group activities",
    category: "Skill Development"
  }
];

const UpcomingEventsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Upcoming Events</h2>
            <p className="text-lg text-gray-600">Don't miss out on these exciting opportunities</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/events">
              <Button variant="outline" className="mt-4 md:mt-0">
                View All Events <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {events.map((event, index) => (
            <motion.div key={index} variants={fadeIn} className="card-hover">
              <Card className="overflow-hidden border-none shadow-md">
                <div className="relative h-48">
                  <img  className="w-full h-full object-cover" alt={event.title} src="https://images.unsplash.com/photo-1694388001616-1176f534d72f" />
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
                <CardFooter>
                  <Button variant="outline" className="w-full">Register Now</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;
