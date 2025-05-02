
import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { fadeIn, staggerContainer } from "@/lib/animations";

const competitions = [
  {
    id: 1,
    title: "National Hackathon 2025",
    deadline: "May 30, 2025",
    location: "New Delhi",
    image: "Hackathon with participants coding and collaborating",
    category: "Technology",
    participants: "500+",
    prize: "₹5,00,000",
    description: "A 48-hour coding marathon to solve real-world problems using technology. Open to students and professionals."
  },
  {
    id: 2,
    title: "Business Plan Competition",
    deadline: "June 15, 2025",
    location: "Mumbai",
    image: "Business plan competition with presentations and judges",
    category: "Entrepreneurship",
    participants: "200+",
    prize: "₹3,00,000",
    description: "Present your innovative business ideas to a panel of investors and industry experts for a chance to win funding."
  },
  {
    id: 3,
    title: "National Design Challenge",
    deadline: "July 10, 2025",
    location: "Bangalore",
    image: "Design challenge with creative professionals working on projects",
    category: "Design",
    participants: "300+",
    prize: "₹2,50,000",
    description: "Showcase your design skills by creating innovative solutions for real-world design problems."
  },
  {
    id: 4,
    title: "AI Innovation Contest",
    deadline: "August 5, 2025",
    location: "Hyderabad",
    image: "AI innovation contest with technology demonstrations",
    category: "Artificial Intelligence",
    participants: "250+",
    prize: "₹4,00,000",
    description: "Develop AI-powered solutions that address significant challenges in healthcare, education, or sustainability."
  },
  {
    id: 5,
    title: "Marketing Case Competition",
    deadline: "September 20, 2025",
    location: "Chennai",
    image: "Marketing case competition with team presentations",
    category: "Marketing",
    participants: "150+",
    prize: "₹2,00,000",
    description: "Analyze real marketing challenges from top brands and develop innovative strategies to solve them."
  },
  {
    id: 6,
    title: "National Debate Championship",
    deadline: "October 15, 2025",
    location: "Kolkata",
    image: "Debate championship with speakers and audience",
    category: "Public Speaking",
    participants: "100+",
    prize: "₹1,50,000",
    description: "Showcase your oratory skills and critical thinking in this prestigious debate competition."
  }
];

const CompetitionList = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {competitions.map((competition) => (
            <motion.div key={competition.id} variants={fadeIn} className="card-hover">
              <Card className="overflow-hidden border-none shadow-md h-full">
                <div className="relative h-48">
                  <img  className="w-full h-full object-cover" alt={competition.title} src="https://images.unsplash.com/photo-1610074068174-ec6f54eb00bb" />
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {competition.category}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{competition.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center mt-2">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      <span>Deadline: {competition.deadline}</span>
                    </div>
                    <div className="flex items-center mt-1">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      <span>{competition.location}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-y-2 mb-4">
                    <div className="flex items-center mr-4">
                      <Users className="h-4 w-4 mr-1 text-gray-500" />
                      <span className="text-sm text-gray-600">{competition.participants} Participants</span>
                    </div>
                    <div className="flex items-center">
                      <Trophy className="h-4 w-4 mr-1 text-gray-500" />
                      <span className="text-sm text-gray-600">Prize: {competition.prize}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{competition.description}</p>
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
            Load More Competitions
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CompetitionList;
