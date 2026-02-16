import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const Differentiation: React.FC = () => {
  return (
    <section className="bg-slate-900 py-16 lg:py-20 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6 font-display">
              Not Another Freelance Marketplace
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed font-reading font-light">
              Open marketplaces are chaotic, unverified, and transactional. SkillBridge is an institutional-grade platform built for education and meaningful early-career development.
            </p>
            
            <div className="space-y-5">
              {[
                "University verified identities (no anonymous bots)",
                "Co-branded micro-credentials, not just 5-star reviews",
                "Structured briefs to prevent scope creep",
                "Escrow-protected payments tied to deliverables"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                    idx === 0 ? 'bg-student-600' : 
                    idx === 1 ? 'bg-business-600' :
                    idx === 2 ? 'bg-blue-600' :
                    'bg-blue-700'
                  }`}>
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-slate-200 text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
             {/* Card 1: The Other Guys */}
             <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 opacity-60">
                <div className="text-slate-400 font-semibold mb-6 text-sm uppercase tracking-wider">Freelance Apps</div>
                <ul className="space-y-4">
                   <li className="flex items-center gap-3 text-slate-400">
                      <X className="w-4 h-4" /> Unverified Users
                   </li>
                   <li className="flex items-center gap-3 text-slate-400">
                      <X className="w-4 h-4" /> Bidding Wars
                   </li>
                   <li className="flex items-center gap-3 text-slate-400">
                      <X className="w-4 h-4" /> Inconsistent Quality
                   </li>
                </ul>
             </div>

             {/* Card 2: SkillBridge */}
             <div className="bg-student-600 rounded-xl p-8 transform sm:scale-105 sm:-translate-y-4 border border-student-400">
                <div className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">SkillBridge</div>
                <ul className="space-y-4">
                   <li className="flex items-center gap-3 text-white font-medium">
                      <Check className="w-4 h-4" /> University Verified
                   </li>
                   <li className="flex items-center gap-3 text-white font-medium">
                      <Check className="w-4 h-4" /> Curated Projects
                   </li>
                   <li className="flex items-center gap-3 text-white font-medium">
                      <Check className="w-4 h-4" /> Career Outcomes
                   </li>
                </ul>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Differentiation;