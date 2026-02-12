import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FormData, UserRole } from '../types'; // Assuming these exist in your project
import { 
  CheckCircle2, 
  Loader2, 
  ChevronDown, 
  Building2, 
  User, 
  Mail, 
  ArrowRight,
  Sparkles 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils'; // standard shadcn utility
import { universities } from '@/src/universities-data';

interface University {
  name: string;
  country: string;
}

// --- Visual Components ---

const BackgroundGrid = () => (
  <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
    <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]" />
  </div>
);

// --- Main Form ---

const WaitlistForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    role: 'Student',
    organization: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [filteredUniversities, setFilteredUniversities] = useState<University[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  
  // Ref for clicking outside dropdown
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize with all universities sorted by name
    const sortedUnis = universities.sort((a: University, b: University) => 
      a.name.localeCompare(b.name)
    );
    setFilteredUniversities(sortedUnis);

    // Click outside handler
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleOrganizationInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, organization: value }));
    setShowDropdown(true);

    if (value.trim()) {
      const filtered = universities.filter(uni =>
        uni.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredUniversities(filtered);
    } else {
      setFilteredUniversities(universities);
    }
  };

  const handleSelectUniversity = (uni: University) => {
    setFormData(prev => ({ ...prev, organization: uni.name }));
    setShowDropdown(false);
  };

  return (
    <section id="waitlist" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center py-20 px-4">
      <BackgroundGrid />
      
      <div className="container relative z-10 mx-auto max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="backdrop-blur-xl bg-white/80 border-slate-200/60 shadow-2xl shadow-indigo-500/10 p-8 sm:p-10 rounded-2xl overflow-hidden relative">
            
            {/* Top Decorative Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-indigo-500 via-purple-500 to-indigo-500" />

            <AnimatePresence mode='wait'>
              {!isSuccess ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center mb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
                      Join the Waitlist
                    </h2>
                    <p className="text-slate-500 text-lg">
                      Secure your spot for the next generation of academic collaboration.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Name Input */}
                    <div className="space-y-1.5">
                      <Label htmlFor="name" className="text-slate-700 font-medium">Full Name</Label>
                      <div className="relative group">
                        <User className="absolute left-3 top-3 h-4 w-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                        <Input
                          type="text"
                          name="name"
                          id="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Jane Doe"
                          className="pl-10 h-11 bg-slate-50/50 border-slate-200 focus:bg-white focus:border-indigo-500 focus:ring-indigo-500/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-slate-700 font-medium">Work/University Email</Label>
                      <div className="relative group">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                        <Input
                          type="email"
                          name="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="jane@university.ac.uk"
                          className="pl-10 h-11 bg-slate-50/50 border-slate-200 focus:bg-white focus:border-indigo-500 focus:ring-indigo-500/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* Role Select */}
                    <div className="space-y-1.5">
                      <Label htmlFor="role" className="text-slate-700 font-medium">I am a...</Label>
                      <Select value={formData.role} onValueChange={(value) => setFormData(prev => ({ ...prev, role: value as UserRole }))}>
                        <SelectTrigger id="role" className="h-11 bg-slate-50/50 border-slate-200 focus:ring-indigo-500/20">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Student">Student</SelectItem>
                          <SelectItem value="Business">Business Professional</SelectItem>
                          <SelectItem value="University">University Staff</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Dynamic Organization Input */}
                    <div className="space-y-1.5" ref={dropdownRef}>
                      <Label htmlFor="organization" className="text-slate-700 font-medium">
                        {formData.role === 'Student' ? 'University' : 'Organization'}
                      </Label>
                      
                      {formData.role === 'Student' ? (
                        <div className="relative group">
                          <Building2 className="absolute left-3 top-3 h-4 w-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                          <Input
                            id="organization"
                            required
                            value={formData.organization}
                            onChange={handleOrganizationInputChange}
                            onFocus={() => setShowDropdown(true)}
                            placeholder="Search your university..."
                            className="pl-10 h-11 bg-slate-50/50 border-slate-200 focus:bg-white focus:border-indigo-500 focus:ring-indigo-500/20 transition-all"
                            autoComplete="off"
                          />
                          <ChevronDown className={`absolute right-3 top-3.5 h-4 w-4 text-slate-400 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} />
                          
                          <AnimatePresence>
                            {showDropdown && (
                              <motion.div
                                initial={{ opacity: 0, y: 5, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 5, scale: 0.98 }}
                                className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-100 rounded-xl shadow-xl shadow-slate-200/50 z-50 max-h-60 overflow-y-auto"
                              >
                                {filteredUniversities.length > 0 ? (
                                  <div className="py-1">
                                    {filteredUniversities.map((uni, index) => (
                                      <button
                                        key={index}
                                        type="button"
                                        onClick={() => handleSelectUniversity(uni)}
                                        className="w-full text-left px-4 py-2.5 hover:bg-indigo-50 transition-colors flex items-center gap-2 group/item"
                                      >
                                        <div className="h-1.5 w-1.5 rounded-full bg-slate-300 group-hover/item:bg-indigo-500 transition-colors" />
                                        <span className="text-sm text-slate-700 font-medium">{uni.name}</span>
                                      </button>
                                    ))}
                                  </div>
                                ) : (
                                  <div className="p-4 text-center text-slate-500 text-sm">
                                    No universities found.
                                  </div>
                                )}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <div className="relative group">
                          <Building2 className="absolute left-3 top-3 h-4 w-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                          <Input
                            name="organization"
                            id="organization"
                            required
                            value={formData.organization}
                            onChange={handleChange}
                            placeholder="Company Name"
                            className="pl-10 h-11 bg-slate-50/50 border-slate-200 focus:bg-white focus:border-indigo-500 focus:ring-indigo-500/20"
                          />
                        </div>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-11 bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-lg shadow-indigo-500/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <Loader2 className="animate-spin h-4 w-4" /> Joining the waitlist...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Join Waitlist <ArrowRight className="h-4 w-4 opacity-50" />
                        </span>
                      )}
                    </Button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16 px-4"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                    className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-50 mb-6 relative"
                  >
                     <div className="absolute inset-0 rounded-full bg-green-100 animate-ping opacity-20" />
                    <CheckCircle2 className="h-10 w-10 text-green-600" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">You're on the list!</h3>
                  <p className="text-slate-600 mb-8 max-w-xs mx-auto">
                    Thanks for joining, <span className="font-semibold text-slate-900">{formData.name}</span>. We've sent a confirmation to your email.
                  </p>
                  <Button variant="outline" onClick={() => setIsSuccess(false)} className="text-sm">
                    Register another person
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
            
            <div className="mt-8 pt-6 border-t border-slate-100 text-center">
               <p className="text-xs text-slate-400 flex items-center justify-center gap-2">
                 <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                 Your privacy is important to us. All personal data is securely stored
               </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default WaitlistForm;