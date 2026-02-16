import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Target, Award, ArrowRight } from 'lucide-react';

const steps = [
  {
    step: "Step 1",
    title: "AI-Drafted Briefs",
    description: "Businesses outline their needs, and our AI instantly scopes it into a structured micro-project with clear, achievable deliverables.",
    icon: <Sparkles className="h-6 w-6 text-blue-600" />,
    color: "bg-blue-50",
    borderColor: "border-blue-100"
  },
  {
    step: "Step 2",
    title: "Algorithmic Matching",
    description: "Verified university students are matched based on their degree, skills, and career goals. No bidding wars, no endless scrolling.",
    icon: <Target className="h-6 w-6 text-emerald-600" />,
    color: "bg-emerald-50",
    borderColor: "border-emerald-100"
  },
  {
    step: "Step 3",
    title: "Escrow & Credentialing",
    description: "Work is submitted, payment is released securely via escrow, and the student earns a university-backed digital credential.",
    icon: <Award className="h-6 w-6 text-amber-600" />,
    color: "bg-amber-50",
    borderColor: "border-amber-100"
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-slate-50/50 py-20 lg:py-28 border-y border-slate-200/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold tracking-wider text-blue-600 uppercase mb-3">
              The Process
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              A Structured Path to Success
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              We remove the friction from short-term hiring. SkillBridge replaces chaotic freelance marketplaces with a secure, guided, and university-verified workflow.
            </p>
          </motion.div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          
          {/* Subtle connecting line behind cards (desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-slate-200 -translate-y-1/2 z-0" />

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative z-10 flex flex-col h-full"
            >
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col group">
                
                {/* Card Header: Step Badge & Icon */}
                <div className="flex justify-between items-start mb-8">
                  <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold uppercase tracking-wide">
                    {step.step}
                  </span>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110 ${step.color} ${step.borderColor}`}>
                    {step.icon}
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex-grow">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {step.description}
                  </p>
                </div>

                {/* Optional: Visual arrow indicating flow on mobile, hidden on desktop where they sit side-by-side */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 border border-slate-200 z-20">
                    <ArrowRight className="w-4 h-4 text-slate-400 rotate-90" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;