
import React from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const faqs = [
  {
    question: "How can I join BharatVersity?",
    answer: "You can join BharatVersity by creating an account on our website. Click on the 'Sign In' button at the top of the page and follow the registration process."
  },
  {
    question: "Are the events free to attend?",
    answer: "Many events are free to attend, while some premium events may have a registration fee. The event details page will provide information about any associated costs."
  },
  {
    question: "How can I post a job on BharatVersity?",
    answer: "Organizations can post jobs by visiting the 'Host' section and selecting 'Post a Job'. You'll need to create an employer account if you don't already have one."
  },
  {
    question: "Can I participate in competitions as an individual?",
    answer: "Yes, many competitions allow individual participation. Some competitions may require team participation, which will be specified in the competition details."
  }
];

const FaqSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about BharatVersity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-none shadow-md h-full">
                <CardContent className="pt-6">
                  <div className="flex items-start">
                    <MessageSquare className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{faq.question}</h4>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
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

export default FaqSection;
