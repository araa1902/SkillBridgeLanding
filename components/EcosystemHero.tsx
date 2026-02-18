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
    <section className="relative overflow-hidden bg-[#FAFAFA] pt-8 pb-20 lg:pt-16 lg:pb-28 border-b border-slate-200 font-sans selection:bg-blue-200">
      
      {/* 1. Architectural Grid Background */}
      <div 
        className="absolute top-0 left-0 right-0 bottom-0 z-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #cbd5e1 1px, transparent 1px),
            linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0',
        }}
      />

      {/* 2. Technical Corner Markers (Registration Marks) */}
      <div className="absolute top-8 left-8 w-4 h-4 border-t-2 border-l-2 border-slate-400 z-0 hidden md:block" />
      <div className="absolute top-8 right-8 w-4 h-4 border-t-2 border-r-2 border-slate-400 z-0 hidden md:block" />
      <div className="absolute bottom-8 left-8 w-4 h-4 border-b-2 border-l-2 border-slate-400 z-0 hidden md:block" />
      <div className="absolute bottom-8 right-8 w-4 h-4 border-b-2 border-r-2 border-slate-400 z-0 hidden md:block" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Main Content Blueprint Box */}
        <div className="relative bg-white/90 backdrop-blur-sm border border-slate-300 p-8 md:p-12 lg:p-16 shadow-sm">
          
          {/* Internal Corner Crosshairs */}
          <div className="absolute top-4 left-4 text-slate-300 pointer-events-none">+</div>
          <div className="absolute top-4 right-4 text-slate-300 pointer-events-none">+</div>
          <div className="absolute bottom-4 left-4 text-slate-300 pointer-events-none">+</div>
          <div className="absolute bottom-4 right-4 text-slate-300 pointer-events-none">+</div>

          {/* Academic Sketches - Floating Elements */}
          
          {/* Math Equation - Top Left */}
            {/* Math Equation - Top Left */}
            <div className="absolute -left-28 top-8 w-40 hidden lg:block opacity-50 hover:opacity-70 transition-opacity pointer-events-none">
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                {/* E = mc² equation */}
                {/* E */}
                <text x="8" y="42" fontSize="32" fill="#3b82f6" opacity="1" fontFamily="serif" fontWeight="bold">E</text>
                
                {/* = sign */}
                <text x="42" y="42" fontSize="28" fill="#3b82f6" opacity="0.9" fontFamily="serif" fontWeight="600">=</text>
                
                {/* m */}
                <text x="70" y="42" fontSize="32" fill="#3b82f6" opacity="1" fontFamily="serif" fontWeight="bold">m</text>
                
                {/* c */}
                <text x="98" y="42" fontSize="32" fill="#3b82f6" opacity="1" fontFamily="serif" fontWeight="bold">c</text>
                
                {/* superscript 2 */}
                <text x="115" y="28" fontSize="18" fill="#3b82f6" opacity="0.9" fontFamily="serif" fontWeight="600">²</text>
                
                {/* Decorative underline */}
                <line x1="8" y1="60" x2="135" y2="60" stroke="#3b82f6" strokeWidth="1.5" opacity="0.4" />
              </svg>
            </motion.div>
            </div>

          {/* Geography Map - Bottom Left */}
          <div className="absolute -left-24 -bottom-12 w-36 hidden lg:block opacity-45 hover:opacity-65 transition-opacity pointer-events-none">
            <motion.div
              animate={{ rotate: [0, 12, 0], y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                <circle cx="100" cy="100" r="90" stroke="#059669" strokeWidth="2" opacity="0.8" />
                <path d="M 50 80 Q 60 70 75 75 Q 85 80 80 95 Q 70 105 50 100 Z" stroke="#059669" strokeWidth="2" fill="#059669" opacity="0.4" />
                <path d="M 120 60 L 140 50 L 145 70 L 130 75 Z" stroke="#059669" strokeWidth="2" fill="#059669" opacity="0.4" />
                <circle cx="100" cy="100" r="4" fill="#059669" opacity="0.9" />
                <text x="82" y="118" fontSize="14" fill="#059669" opacity="0.7" fontWeight="bold">N↑</text>
              </svg>
            </motion.div>
          </div>

          {/* Computer Science Code - Top Right */}
          <div className="absolute -right-32 top-12 w-44 hidden lg:block opacity-48 hover:opacity-68 transition-opacity pointer-events-none">
            <motion.div
              animate={{ y: [0, 15, 0], x: [0, 3, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                <text x="10" y="25" fontSize="12" fill="#8b5cf6" opacity="0.9" fontFamily="monospace" fontWeight="bold">function</text>
                <text x="95" y="25" fontSize="12" fill="#3b82f6" opacity="0.9" fontFamily="monospace" fontWeight="bold">solve()</text>
                <text x="10" y="45" fontSize="11" fill="#475569" opacity="0.8" fontFamily="monospace" fontWeight="600">  if (x &gt; 0)</text>
                <text x="15" y="62" fontSize="11" fill="#10b981" opacity="0.85" fontFamily="monospace" fontWeight="600">return true</text>
                <line x1="5" y1="15" x2="5" y2="70" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.6" />
                <path d="M 160 30 L 190 30 L 190 60 L 160 60 Z" stroke="#8b5cf6" strokeWidth="2" opacity="0.5" fill="none" />
              </svg>
            </motion.div>
          </div>

          {/* Chemistry Molecule - Bottom Right */}
          <div className="absolute -right-28 -bottom-8 w-40 hidden lg:block opacity-46 hover:opacity-66 transition-opacity pointer-events-none">
            <motion.div
              animate={{ rotate: [0, -20, 0], y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            >
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                {/* Central atom */}
                <circle cx="100" cy="100" r="10" fill="#f59e0b" opacity="0.9" />
                {/* Connected atoms */}
                <circle cx="140" cy="80" r="7" fill="#3b82f6" opacity="0.8" />
                <circle cx="130" cy="130" r="7" fill="#3b82f6" opacity="0.8" />
                <circle cx="70" cy="130" r="7" fill="#3b82f6" opacity="0.8" />
                <circle cx="60" cy="80" r="7" fill="#3b82f6" opacity="0.8" />
                {/* Bonds */}
                <line x1="108" y1="92" x2="132" y2="84" stroke="#f59e0b" strokeWidth="2" opacity="0.7" />
                <line x1="108" y1="108" x2="128" y2="130" stroke="#f59e0b" strokeWidth="2" opacity="0.7" />
                <line x1="92" y1="108" x2="72" y2="130" stroke="#f59e0b" strokeWidth="2" opacity="0.7" />
                <line x1="92" y1="92" x2="68" y2="84" stroke="#f59e0b" strokeWidth="2" opacity="0.7" />
              </svg>
            </motion.div>
          </div>

          {/* Graph/Statistics - Center Left (mid-height) */}
          <div className="absolute -left-20 top-1/2 w-32 hidden lg:block opacity-44 hover:opacity-64 transition-opacity pointer-events-none transform -translate-y-1/2">
            <motion.div
              animate={{ y: [0, 15, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            >
              <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                <line x1="20" y1="100" x2="180" y2="100" stroke="#06b6d4" strokeWidth="2" opacity="0.7" />
                <line x1="20" y1="100" x2="20" y2="20" stroke="#06b6d4" strokeWidth="2" opacity="0.7" />
                <polyline points="30,85 50,65 70,55 90,70 110,40 130,60 150,50 170,30" stroke="#06b6d4" strokeWidth="2.5" fill="none" opacity="0.8" />
                <circle cx="30" cy="85" r="3" fill="#06b6d4" opacity="0.9" />
                <circle cx="170" cy="30" r="3" fill="#06b6d4" opacity="0.9" />
              </svg>
            </motion.div>
          </div>

          {/* Geometry Shapes - Center Right (mid-height) */}
          <div className="absolute -right-20 top-1/2 w-32 hidden lg:block opacity-42 hover:opacity-62 transition-opacity pointer-events-none transform -translate-y-1/2">
            <motion.div
              animate={{ rotate: [0, -25, 0], y: [0, 8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                {/* Circle */}
                <circle cx="100" cy="100" r="40" stroke="#ec4899" strokeWidth="2" opacity="0.7" />
                {/* Triangle inscribed */}
                <polygon points="100,60 140,140 60,140" stroke="#ec4899" strokeWidth="2" fill="none" opacity="0.7" />
                {/* Square */}
                <rect x="70" y="70" width="60" height="60" stroke="#ec4899" strokeWidth="2" opacity="0.6" fill="none" />
                {/* Center point */}
                <circle cx="100" cy="100" r="2.5" fill="#ec4899" opacity="0.9" />
                <text x="108" y="115" fontSize="12" fill="#ec4899" opacity="0.7" fontWeight="bold">θ</text>
              </svg>
            </motion.div>
          </div>

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
              The New Standard for <br className="hidden md:block" />
              <span className="bg-clip-text text-blue-600">
                Early-Career Talent.
              </span>
            </h1>
            {/* Supporting Subtext: 
              "A unified platform where universities, students, and businesses collaborate on structured, risk-free micro-projects."
            */}

              {/* Structured Description */}
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-12 leading-relaxed border-l-2 border-slate-200 pl-6">
                Connecting ambitious students with growing SMEs through paid, structured, and verified micro-projects. No bidding wars. No unverified freelancers. 
              </p>

              {/* Rigid Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={onScrollToWaitlist}
                  size="lg"
                  className="rounded-lg w-full sm:w-auto text-sm font-semibold px-8 h-12 bg-blue-600 hover:bg-blue-700 text-white shadow-none transition-colors"
                >
                  Join the Waitlist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-lg w-full sm:w-auto text-sm font-semibold px-8 h-12 border-slate-300 hover:bg-slate-100 text-slate-700"
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
                  How It Works
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
            </div>
            <span className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-1">University Verified</span>
            <span className="text-xs text-slate-500 font-medium">Institutional-grade vetting</span>
          </div>

          {/* Spec 2 */}
          <div className="flex flex-col p-6 border-b md:border-b-0 md:border-r border-slate-300 group hover:bg-slate-50 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <CheckCircle className="w-5 h-5 text-blue-600" strokeWidth={1.5} />
            </div>
            <span className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-1">Escrow Protected</span>
            <span className="text-xs text-slate-500 font-medium">Secure transactional layer</span>
          </div>

          {/* Spec 3 */}
          <div className="flex flex-col p-6 group hover:bg-slate-50 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <Award className="w-5 h-5 text-blue-600" strokeWidth={1.5} />
            </div>
            <span className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-1">Micro-Credentials</span>
            <span className="text-xs text-slate-500 font-medium">Verifiable blockchain ledger</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default EcosystemHero;