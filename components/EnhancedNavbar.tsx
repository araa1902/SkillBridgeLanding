import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ResizableNavbarProps {
  onScrollToWaitlist: () => void;
}

const NAV_LINKS = [
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Features', href: '#features' },
  { name: 'Impact', href: '#impact' },
  { name: 'About Us', href: '#about' },
];

const ResizableNavbar: React.FC<ResizableNavbarProps> = ({ onScrollToWaitlist }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll detection for resizing and glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]'
            : 'bg-white/40 backdrop-blur-sm border-b border-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text tracking-tight group-hover:opacity-80 transition-opacity">
                SkillBridge
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-200 px-3 py-2 rounded-full transition-all duration-200 ease-out"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Button
                onClick={onScrollToWaitlist}
                className="hidden md:inline-flex text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-md transition-all rounded-full px-6"
              >
                Get Early Access
              </Button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl"
            >
              <div className="flex flex-col p-4 space-y-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 px-4 py-3 rounded-lg transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 border-t border-slate-100 px-2">
                  <Button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onScrollToWaitlist();
                    }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full py-6"
                  >
                    Get Early Access
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer to prevent content jump - matches the navbar height */}
      <div className="h-20" />
    </>
  );
};

export default ResizableNavbar;