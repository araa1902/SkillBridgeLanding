import React from 'react';
import { motion } from 'framer-motion';
import { ScrollIcon, UsersIcon, CertificateIcon, CheckCircle } from '@phosphor-icons/react';

const TimelineSection: React.FC = () => {
  const steps = [
    {
      id: '01',
      title: 'Post a Project',
      description: 'Businesses post structured micro-projects with clear deliverables. Our AI helps refine briefs to ensure quality and fairness.',
      icon: <ScrollIcon className="h-6 w-6" />,
      details: [
        'Define scope and requirements',
        'AI-powered brief optimization',
        'Set budget and timeline'
      ]
    },
    {
      id: '02',
      title: 'Get Matched',
      description: 'Verified students apply. Our algorithm matches candidates based on university, skills, and academic interests.',
      icon: <UsersIcon className="h-6 w-6" />,
      details: [
        'Browse available projects',
        'Smart skill-based matching',
        'University-verified students'
      ]
    },
    {
      id: '03',
      title: 'Complete & Earn',
      description: 'Students complete the work. Upon approval, payment is released via escrow, and a micro-credential is earned.',
      icon: <CertificateIcon className="h-6 w-6" />,
      details: [
        'Deliver verified work',
        'Escrow-protected payments',
        'Earn micro-credentials'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="how-it-works" className="relative py-16 lg:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-4 border border-blue-100">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-blue-700">The Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 font-display">
            Three Steps to Success
          </h2>
          <p className="text-lg text-slate-600 font-reading font-light">
            A streamlined process designed to get students working and businesses hiring in days, not months.
          </p>
        </motion.div>

        {/* Timeline visualization */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Desktop connector line */}
          <div 
            className="hidden lg:block absolute top-24 left-0 right-0 h-1 z-0"
            style={{
              background: 'linear-gradient(to right, #4ade80, #60a5fa, #fbbf24)'
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div key={step.id} variants={itemVariants}>
                <div className="relative">
                  {/* Step number circle */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center mb-8 shadow-md hover:shadow-lg transition-shadow z-20"
                  >
                    <div 
                      className="w-20 h-20 rounded-full text-white text-2xl font-bold flex items-center justify-center"
                      style={{
                        background: index === 0 ? 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)' : 
                                   index === 1 ? 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)' :
                                   'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
                      }}
                    >
                      {step.id}
                    </div>
                  </motion.div>

                  {/* Content card */}
                  <div 
                    className="pt-20 px-6 py-8 rounded-2xl border border-slate-200 hover:border-blue-300 transition-colors min-h-full flex flex-col"
                    style={{
                      background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)'
                    }}
                  >
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-600 mb-6">
                      {step.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed mb-8 grow">
                      {step.description}
                    </p>

                    {/* Details list */}
                    <div className="space-y-4 pt-6 border-t border-slate-200">
                      {step.details.map((detail, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + idx * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-student-600 shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-600">{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;
