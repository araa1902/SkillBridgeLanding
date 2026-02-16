import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold text-slate-900 tracking-tight">SkillBridge</span>
            <p className="text-sm text-slate-500 mt-2">© {new Date().getFullYear()} SkillBridge. All rights reserved.</p>
          </div>
          
          <div className="flex items-center space-x-8">
            <a href="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors font-medium">About</a>
            <a href="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors font-medium">Contact</a>
            <a href="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors font-medium">Privacy</a>
            <a href="#" className="text-slate-400 hover:text-[#0077b5] transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;