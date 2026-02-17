import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Users, Medal, CheckCircle } from '@phosphor-icons/react';

const steps = [
  {
    id: '01',
    title: 'Post a Project',
    description: 'Businesses post structured micro-projects. Our AI refines briefs to ensure quality and market fairness.',
    icon: <FileText size={24} weight="duotone" />,
    details: ['Define scope', 'AI brief optimization', 'Set budget']
  },
  {
    id: '02',
    title: 'Get Matched',
    description: 'Our algorithm matches candidates based on university-verified skills and academic interests.',
    icon: <Users size={24} weight="duotone" />,
    details: ['Smart skill matching', 'Identity verification', 'University filtering']
  },
  {
    id: '03',
    title: 'Complete & Earn',
    description: 'Upon approval, payment is released via escrow and a micro-credential is added to the student profile.',
    icon: <Medal size={24} weight="duotone" />,
    details: ['Escrow protection', 'Verified work delivery', 'Earn credentials']
  }
];

const TimelineSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <span className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase mb-4 block">
            Infrastructure
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
            How it works
          </h2>
          <p className="text-slate-500 max-w-md text-base md:text-lg leading-relaxed">
            A frictionless bridge between academic talent and industry needs.
          </p>
        </div>

        {/* Semantic Ordered List for the Timeline */}
        <ol className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;

            return (
              <motion.li
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative z-10 group"
              >
                {/* Desktop Connecting Line 
                  (Hidden on mobile, hidden on the very last item) 
                */}
                {!isLast && (
                  <div className="hidden md:block absolute top-6 left-12 w-[calc(100%-1rem)] h-[2px] bg-slate-200 z-[-1] overflow-hidden rounded-full">
                    <motion.div
                      initial={{ x: '-100%' }}
                      whileInView={{ x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.3, ease: 'easeInOut' }}
                      className="w-full h-full bg-blue-500/30"
                    />
                  </div>
                )}

                {/* Mobile Connecting Line 
                  (Hidden on desktop, hidden on the very last item) 
                */}
                {!isLast && (
                  <div className="md:hidden absolute top-12 left-6 bottom-[-3rem] w-[2px] bg-slate-200 z-[-1] overflow-hidden rounded-full">
                    <motion.div
                      initial={{ y: '-100%' }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.3, ease: 'easeInOut' }}
                      className="w-full h-full bg-blue-500/30"
                    />
                  </div>
                )}

                {/* Step Indicator */}
                <div className="flex items-center mb-6 md:mb-8">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shadow-sm group-hover:border-blue-400 group-hover:shadow-md transition-all duration-300">
                    <span className="text-sm font-mono font-bold text-slate-400 group-hover:text-blue-600 transition-colors duration-300">
                      {step.id}
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="space-y-4 pr-4 md:pr-0">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-slate-200 text-blue-600 shadow-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-900 tracking-tight">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-500 leading-relaxed text-[15px]">
                    {step.description}
                  </p>

                  {/* Micro-details */}
                  <ul className="space-y-2 pt-3">
                    {step.details.map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-slate-600 font-medium">
                        <CheckCircle size={16} weight="fill" className="text-blue-500/80 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default TimelineSection;