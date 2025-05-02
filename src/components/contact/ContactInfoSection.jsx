
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const contactItems = [
  {
    icon: <Mail className="h-8 w-8 text-primary" />,
    title: "Email Us",
    details: "support@bharatversity.com",
    description: "For general inquiries and information"
  },
  {
    icon: <Phone className="h-8 w-8 text-primary" />,
    title: "Call Us",
    details: "+91 93467 70993",
    description: "Monday to Friday, 9am to 6pm"
  },
  {
    icon: <MapPin className="h-8 w-8 text-primary" />,
    title: "Visit Us",
    details: "Dlf Cyber City-321,3rd floor,Idco Info Park, Technology Corridor, Chandaka Industrial Estate, Patia, Bhubaneswar, Odisha 751024, India",
    description: "Our headquarters location"
  }
];

const ContactInfoSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-none shadow-md h-full">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-orange-100 p-4 rounded-full mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-primary font-medium mb-2">{item.details}</p>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
