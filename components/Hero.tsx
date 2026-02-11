import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, ShieldCheck, UserCheck } from 'lucide-react';
import { UserRole } from '../types';
import { Button } from '@/components/ui/button';

interface HeroProps {
  onScrollToWaitlist: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollToWaitlist }) => {
  const [activeRole, setActiveRole] = useState<UserRole>('Student');

  const roleContent = {
    Student: "Launch your career with verified micro-projects.",
    Business: "Access verified university talent on demand.",
    University: "Boost graduate employability outcomes."
  };

  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy */}
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 mb-6 border border-blue-100">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
                Now enrolling beta partners
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl mb-6">
                Bridge the Gap Between <br className="hidden lg:block"/>
                <span className="text-blue-600">Education</span> and <span className="text-slate-700">Employment</span>
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                {roleContent[activeRole]} SkillBridge connects university talent with forward-thinking SMEs through structured, verified micro-internships.
              </p>

                  {/* Segmentation Toggle */}
                  <div className="mb-8 inline-flex rounded-lg bg-slate-100 p-1">
                  {(['Student', 'Business', 'University'] as UserRole[]).map((role) => (
                    <button
                    key={role}
                    onClick={() => setActiveRole(role)}
                    className={`px-4 py-2 rounded-md font-medium text-sm transition-all duration-200 ${
                      activeRole === role
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                    }`}
                    >
                    I'm a {role}
                    </button>
                  ))}
                  </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={onScrollToWaitlist}
                  size="lg"
                  className="inline-flex items-center"
                >
                  Join the Waitlist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
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

          {/* Right Column: UI Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:pl-10"
          >
            <div className="relative rounded-xl bg-slate-900/5 p-4 lg:p-6 ring-1 ring-inset ring-slate-900/10">
              {/* Abstract Dashboard UI */}
              <div className="relative bg-white rounded-lg shadow-xl overflow-hidden border border-slate-200">
                {/* Header */}
                <div className="border-b border-slate-100 bg-slate-50 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                    <div className="h-3 w-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-xs font-medium text-slate-400">Dashboard</div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Market Research Analysis</h3>
                      <p className="text-sm text-slate-500 mt-1">Posted by FinTech Solutions Ltd.</p>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                      £250 Fixed
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-slate-900">University Verified</p>
                        <p className="text-xs text-slate-500">Only verified students can apply.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-slate-900">Structured Brief</p>
                        <p className="text-xs text-slate-500">Clear deliverables and timelines defined.</p>
                      </div>
                    </div>
                     <div className="flex items-start gap-3">
                      <UserCheck className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-slate-900">AI Matched</p>
                        <p className="text-xs text-slate-500">Candidates matched by course & skills.</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
                     <div className="flex -space-x-2">
                        <div className="h-8 w-8 rounded-full bg-slate-200 ring-2 ring-white flex items-center justify-center text-xs text-slate-500">JD</div>
                        <div className="h-8 w-8 rounded-full bg-slate-300 ring-2 ring-white flex items-center justify-center text-xs text-slate-600">AS</div>
                     </div>
                     <Button size="sm">
                        View Project
                     </Button>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg border border-slate-100 hidden sm:block">
                <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                        <CheckCircle className="h-5 w-5 text-blue-600"/>
                    </div>
                    <div>
                        <p className="text-sm font-bold text-slate-900">Verified Payment</p>
                        <p className="text-xs text-slate-500">Funds held in escrow</p>
                    </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;