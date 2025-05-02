
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { fadeIn, staggerContainer } from "@/lib/animations";

const plans = [
  {
    name: "Basic",
    price: "₹9,999",
    description: "Perfect for small organizations and startups",
    features: [
      "Host 1 event per month",
      "Post up to 5 job openings",
      "Basic analytics",
      "Email support"
    ],
    highlighted: false
  },
  {
    name: "Professional",
    price: "₹24,999",
    description: "Ideal for growing organizations",
    features: [
      "Host 3 events per month",
      "Post up to 15 job openings",
      "Host 1 competition per quarter",
      "Advanced analytics",
      "Priority email and phone support",
      "Featured listing"
    ],
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "₹49,999",
    description: "For large organizations with extensive needs",
    features: [
      "Unlimited events",
      "Unlimited job postings",
      "Host up to 4 competitions per year",
      "Comprehensive analytics and reporting",
      "Dedicated account manager",
      "Custom branding options",
      "API access"
    ],
    highlighted: false
  }
];

const PricingSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing Plans</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the plan that best suits your organization's needs and goals.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {plans.map((plan, index) => (
            <motion.div key={index} variants={fadeIn} className="card-hover">
              <Card className={`h-full border-none shadow-md flex flex-col ${plan.highlighted ? 'ring-2 ring-primary' : ''}`}>
                <CardHeader className={plan.highlighted ? 'bg-orange-50' : ''}>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-gray-500 ml-2">/ year</span>
                  </div>
                  <CardDescription className="text-base mt-2">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <h4 className="font-semibold mb-3 text-gray-800">What's included:</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className={`w-full ${!plan.highlighted ? 'bg-white text-primary border border-primary hover:bg-orange-50' : ''}`}>
                    Get Started
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

export default PricingSection;
