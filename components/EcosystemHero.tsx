import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ShieldCheck,
  CheckCircle,
  Award,
  Cpu,
  Fingerprint
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EcosystemHeroProps {
  onScrollToWaitlist: () => void;
}

const EcosystemHero: React.FC<EcosystemHeroProps> = ({ onScrollToWaitlist }) => {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] pt-24 pb-20 lg:pt-32 lg:pb-28 border-b border-slate-200 font-sans selection:bg-blue-200">
      
      {/* 1. Architectural Grid Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #cbd5e1 1px, transparent 1px),
            linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* 2. Technical Corner Markers (Registration Marks) */}
      <div className="absolute top-8 left-8 w-4 h-4 border-t-2 border-l-2 border-slate-400 z-0 hidden md:block" />
      <div className="absolute top-8 right-8 w-4 h-4 border-t-2 border-r-2 border-slate-400 z-0 hidden md:block" />
      <div className="absolute bottom-8 left-8 w-4 h-4 border-b-2 border-l-2 border-slate-400 z-0 hidden md:block" />
      <div className="absolute bottom-8 right-8 w-4 h-4 border-b-2 border-r-2 border-slate-400 z-0 hidden md:block" />

      {/* Floating Blueprint Metadata */}
      <div className="absolute top-10 left-12 font-mono text-[10px] text-slate-400 tracking-widest hidden lg:block z-0">
        SYS.REQ // V.1.0.4
        <br />
        COORD: 45.12°N, -1.24°W
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Main Content Blueprint Box */}
        <div className="relative bg-white/90 backdrop-blur-sm border border-slate-300 p-8 md:p-12 lg:p-16 shadow-sm">
          
          {/* Internal Corner Crosshairs */}
          <div className="absolute top-4 left-4 text-slate-300 pointer-events-none">+</div>
          <div className="absolute top-4 right-4 text-slate-300 pointer-events-none">+</div>
          <div className="absolute bottom-4 left-4 text-slate-300 pointer-events-none">+</div>
          <div className="absolute bottom-4 right-4 text-slate-300 pointer-events-none">+</div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Technical Kicker */}
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] w-12 bg-blue-600" />
                <span className="font-mono text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase">
                  Project Code: SkillBridge
                </span>
              </div>

              {/* High-Contrast Academic Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tight text-slate-900 mb-8 leading-[1.05] font-display">
                The University-Backed <br className="hidden md:block" />
                <span className="bg-clip-text text-blue-600">
                  Micro-Internship Platform.
                </span>
              </h1>

              {/* Structured Description */}
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-12 leading-relaxed border-l-2 border-slate-200 pl-6">
                We connect ambitious students with growing SMEs through paid, structured, and verified micro-projects. No bidding wars. No unverified freelancers. 
              </p>

              {/* Rigid Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={onScrollToWaitlist}
                  size="lg"
                  className="rounded-none w-full sm:w-auto text-sm font-mono tracking-wide px-8 h-14 bg-blue-600 hover:bg-blue-700 text-white shadow-none transition-colors"
                >
                  [ JOIN THE WAITLIST ]
                  <ArrowRight className="ml-3 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-none w-full sm:w-auto text-sm font-mono tracking-wide px-8 h-14 border-slate-300 hover:bg-slate-100 text-slate-700"
                  onClick={() => {
                    const element = document.getElementById('how-it-works');
                    if (element) {
                      // Calculate offset to account for fixed headers if any
                      const yOffset = -80;
                      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }}
                >
                  [ HOW IT WORKS ]
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Blueprint Specifications Bar (Formerly Trust Bar) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-300 bg-white/90 backdrop-blur-sm relative"
        >
          {/* Spec 1 */}
          <div className="flex flex-col p-6 border-b md:border-b-0 md:border-r border-slate-300 group hover:bg-slate-50 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <ShieldCheck className="w-5 h-5 text-blue-600" strokeWidth={1.5} />
              <span className="font-mono text-[10px] text-slate-400">SPEC.01</span>
            </div>
            <span className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-1">University Verified</span>
            <span className="text-xs text-slate-500 font-mono">Institutional-grade vetting</span>
          </div>

          {/* Spec 2 */}
          <div className="flex flex-col p-6 border-b md:border-b-0 md:border-r border-slate-300 group hover:bg-slate-50 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <CheckCircle className="w-5 h-5 text-blue-600" strokeWidth={1.5} />
              <span className="font-mono text-[10px] text-slate-400">SPEC.02</span>
            </div>
            <span className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-1">Escrow Protected</span>
            <span className="text-xs text-slate-500 font-mono">Secure transactional layer</span>
          </div>

          {/* Spec 3 */}
          <div className="flex flex-col p-6 group hover:bg-slate-50 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <Award className="w-5 h-5 text-blue-600" strokeWidth={1.5} />
              <span className="font-mono text-[10px] text-slate-400">SPEC.03</span>
            </div>
            <span className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-1">Micro-Credentials</span>
            <span className="text-xs text-slate-500 font-mono">Verifiable blockchain ledger</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default EcosystemHero;