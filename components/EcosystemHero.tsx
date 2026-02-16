import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  GraduationCap, 
  Briefcase, 
  Building2,
  ShieldCheck,
  CheckCircle,
  Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EcosystemHeroProps {
  onScrollToWaitlist: () => void;
}

const EcosystemHero: React.FC<EcosystemHeroProps> = ({ onScrollToWaitlist }) => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);


  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-16 lg:pt-28 lg:pb-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
      
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-blue-100/50 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Header Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center rounded-full bg-slate-50 px-4 py-1.5 text-sm font-medium text-slate-700 mb-8 border border-slate-200 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
              Bridging the Education-Employment Gap
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1] font-display">
              The University-Backed <br className="hidden md:block" />
              <span className="text-blue-600 bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-display block mt-2">
              Micro-Internship Platform
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              We connect ambitious students with growing SMEs through paid, structured, and verified micro-projects. No bidding wars. No unverified freelancers. 
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={onScrollToWaitlist}
                size="lg"
                className="w-full sm:w-auto text-base px-8 h-14 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5"
              >
                Join the Waitlist
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-base px-8 h-14 border-slate-200 hover:bg-slate-50 text-slate-700"
                onClick={() => {
                  const element = document.getElementById('how-it-works');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                How it Works
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Trust Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 py-8 border-y border-slate-100 bg-slate-50/50 rounded-3xl">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-slate-700">University Verified</span>
            </div>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-300" />
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-slate-700">Escrow Protected</span>
            </div>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-300" />
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-slate-700">Micro-Credentials</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default EcosystemHero;