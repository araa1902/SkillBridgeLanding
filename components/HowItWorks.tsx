import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Users, Award } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: "01",
      title: "Post a Project",
      description: "Businesses post structured micro-projects with clear deliverables. Our AI helps refine briefs to ensure they are suitable for students.",
      icon: <FileText className="h-6 w-6 text-white" />
    },
    {
      id: "02",
      title: "Get Matched",
      description: "Verified students apply. Our algorithm matches candidates based on their university course, skills, and academic interests.",
      icon: <Users className="h-6 w-6 text-white" />
    },
    {
      id: "03",
      title: "Complete & Certify",
      description: "Students complete the work. Upon approval, payment is released via escrow, and a co-branded micro-credential is issued.",
      icon: <Award className="h-6 w-6 text-white" />
    }
  ];

  return (
    <section id="how-it-works" className="bg-white py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            A Structured Path to Success
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We remove the friction from short-term hiring, ensuring security and quality for all parties.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-slate-100 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-white border-4 border-blue-50 flex items-center justify-center mb-6 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 max-w-xs">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;