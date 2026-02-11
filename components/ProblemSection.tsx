import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Building2 } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
      title: "For Students",
      description: "Getting verified early-career experience is nearly impossible without existing connections. Traditional internships are scarce and highly competitive."
    },
    {
      icon: <Briefcase className="h-8 w-8 text-blue-600" />,
      title: "For SMEs",
      description: "Finding reliable, short-term talent is time-consuming. Freelance marketplaces are chaotic, and quality control is often a gamble."
    },
    {
      icon: <Building2 className="h-8 w-8 text-blue-600" />,
      title: "For Universities",
      description: "Demonstrating employability outcomes is critical, but scaling industry partnerships to support every student is logistically overwhelming."
    }
  ];

  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            The Early-Career Ecosystem is Broken
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Current solutions fail to address the specific needs of students, businesses, and educational institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;