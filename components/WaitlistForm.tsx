import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FormData, UserRole } from '../types';
import { 
  CheckCircle2, 
  Loader2, 
  Building2, 
  User, 
  Mail, 
  Briefcase,
  Search,
  Shield,
  Check
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { universities } from '@/src/universities-data';

interface University {
  name: string;
}

// Minimalist background
const MinimalBackground = () => (
  <div className="absolute inset-0 -z-10 h-full w-full bg-white" />
);

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
  const [activeField, setActiveField] = useState<string | null>(null);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sortedUnis = universities.sort((a: University, b: University) => 
      a.name.localeCompare(b.name)
    );
    setFilteredUniversities(sortedUnis);

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

  const roleOptions: { value: UserRole; label: string; icon: React.ReactNode }[] = [
    { value: 'Student', label: 'Student', icon: <User className="h-4 w-4" /> },
    { value: 'Business', label: 'Business Professional', icon: <Briefcase className="h-4 w-4" /> },
    { value: 'University', label: 'University Staff', icon: <Building2 className="h-4 w-4" /> }
  ];

  return (
    <section id="waitlist" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-4 py-20">
      <MinimalBackground />
      
      <div className="container relative z-10 mx-auto max-w-[480px]">
        <AnimatePresence mode='wait'>
          {!isSuccess ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Header Section */}
              <div className="text-center mb-10">
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4 leading-tight"
                >
                  Join the Waitlist
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-lg text-slate-600 max-w-md mx-auto leading-relaxed"
                >
                  Be among the first to experience the future of academic collaboration
                </motion.p>
              </div>

              {/* Form Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Card className="bg-white border-slate-200/60 p-8 md:p-10 rounded-3xl">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Name Input */}
                    <div className="space-y-2.5">
                      <Label htmlFor="name" className="text-sm font-semibold text-slate-700">
                        Full Name
                      </Label>
                      <div className="relative">
                        <Input
                          type="text"
                          name="name"
                          id="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setActiveField('name')}
                          onBlur={() => setActiveField(null)}
                          placeholder="Enter your full name"
                          className={cn(
                            "h-12 px-4 bg-slate-50/50 border-2 rounded-xl transition-all duration-200",
                            "placeholder:text-slate-400",
                            "focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10",
                            activeField === 'name' && "border-blue-500"
                          )}
                        />
                      </div>
                    </div>

                    {/* Email Input */}
                    <div className="space-y-2.5">
                      <Label htmlFor="email" className="text-sm font-semibold text-slate-700">
                        Email Address
                      </Label>
                      <div className="relative">
                        <Input
                          type="email"
                          name="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setActiveField('email')}
                          onBlur={() => setActiveField(null)}
                          placeholder="you@university.edu"
                          className={cn(
                            "h-12 px-4 bg-slate-50/50 border-2 rounded-xl transition-all duration-200",
                            "placeholder:text-slate-400",
                            "focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10",
                            activeField === 'email' && "border-blue-500"
                          )}
                        />
                      </div>
                      <p className="text-xs text-slate-500 mt-1.5">
                        Use your institutional email for priority access
                      </p>
                    </div>

                    {/* Role Selection - Custom Radio Buttons */}
                    <div className="space-y-2.5">
                      <Label className="text-sm font-semibold text-slate-700">
                        I am a...
                      </Label>
                      <div className="grid grid-cols-1 gap-2.5">
                        {roleOptions.map((option) => (
                          <label
                            key={option.value}
                            className={cn(
                              "flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200",
                              formData.role === option.value
                                ? "border-blue-500 bg-blue-50/50"
                                : "border-slate-200 bg-slate-50/30"
                            )}
                          >
                            <input
                              type="radio"
                              name="role"
                              value={option.value}
                              checked={formData.role === option.value}
                              onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value as UserRole }))}
                              className="sr-only"
                            />
                            <div className={cn(
                              "flex items-center justify-center h-5 w-5 rounded-full border-2 transition-all",
                              formData.role === option.value
                                ? "border-blue-500 bg-blue-500"
                                : "border-slate-300"
                            )}>
                              {formData.role === option.value && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="h-2 w-2 rounded-full bg-white"
                                />
                              )}
                            </div>
                            <span className={cn(
                              "flex-1 text-sm font-medium transition-colors",
                              formData.role === option.value
                                ? "text-slate-900"
                                : "text-slate-600"
                            )}>
                              {option.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Dynamic Organization Input */}
                    <div className="space-y-2.5" ref={dropdownRef}>
                      <Label htmlFor="organization" className="text-sm font-semibold text-slate-700">
                        {formData.role === 'Student' ? 'University' : 'Organization'}
                      </Label>
                      
                      {formData.role === 'Student' ? (
                        <div className="relative">
                          <Search className="absolute left-4 top-3.5 h-4 w-4 text-slate-400 pointer-events-none" />
                          <Input
                            id="organization"
                            required
                            value={formData.organization}
                            onChange={handleOrganizationInputChange}
                            onFocus={() => {
                              setActiveField('organization');
                              setShowDropdown(true);
                            }}
                            onBlur={() => setActiveField(null)}
                            placeholder="Search your university..."
                            className={cn(
                              "h-12 pl-11 pr-4 bg-slate-50/50 border-2 rounded-xl transition-all duration-200",
                              "placeholder:text-slate-400",
                              "focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10",
                              activeField === 'organization' && "border-blue-500"
                            )}
                            autoComplete="off"
                          />
                          
                          <AnimatePresence>
                            {showDropdown && (
                              <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-2xl shadow-2xl shadow-slate-900/10 z-50 max-h-64 overflow-y-auto"
                              >
                                {filteredUniversities.length > 0 ? (
                                  <div className="p-2">
                                    {filteredUniversities.slice(0, 50).map((uni, index) => (
                                      <button
                                        key={index}
                                        type="button"
                                        onClick={() => handleSelectUniversity(uni)}
                                        className="w-full text-left px-4 py-3 hover:bg-slate-50 rounded-lg transition-colors flex items-start gap-3 group"
                                      >
                                        <div className="flex-1 min-w-0">
                                          <div className="text-sm font-medium text-slate-900 truncate">
                                            {uni.name}
                                          </div>
                                        </div>
                                      </button>
                                    ))}
                                  </div>
                                ) : (
                                  <div className="p-8 text-center">
                                    <Search className="h-8 w-8 text-slate-300 mx-auto mb-2" />
                                    <p className="text-sm text-slate-500">No universities found</p>
                                  </div>
                                )}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <div className="relative">
                          <Input
                            name="organization"
                            id="organization"
                            required
                            value={formData.organization}
                            onChange={handleChange}
                            onFocus={() => setActiveField('organization')}
                            onBlur={() => setActiveField(null)}
                            placeholder="Enter your organization name"
                            className={cn(
                              "h-12 px-4 bg-slate-50/50 border-2 rounded-xl transition-all duration-200",
                              "placeholder:text-slate-400",
                              "focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10",
                              activeField === 'organization' && "border-blue-500"
                            )}
                          />
                        </div>
                      )}
                    </div>

                    {/* Terms & Privacy Agreement */}
                    <div className="space-y-3 pt-2">
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={acceptedTerms}
                          onChange={(e) => setAcceptedTerms(e.target.checked)}
                          className="sr-only"
                        />
                        <div className="shrink-0 mt-1">
                          <div className={cn(
                            "flex items-center justify-center h-5 w-5 rounded-lg border-2 transition-all duration-200",
                            acceptedTerms
                              ? "border-blue-500 bg-blue-500"
                              : "border-slate-300 bg-white group-hover:border-slate-400"
                          )}>
                            {acceptedTerms && (
                              <Check className="h-3 w-3 text-white" strokeWidth={3} />
                            )}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-sm text-slate-600">
                            I agree to the{' '}
                            <a href="/privacy" className="font-semibold text-blue-600 hover:text-blue-700 underline transition-colors">
                              Privacy Policy
                            </a>{' '}
                            and{' '}
                            <a href="/terms" className="font-semibold text-blue-600 hover:text-blue-700 underline transition-colors">
                              Terms of Service
                            </a>
                          </span>
                        </div>
                      </label>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting || !acceptedTerms}
                      className="w-full h-12 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors"
                    >
                      {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="animate-spin h-4 w-4" />
                        Securing your spot...
                      </span>
                      ) : (
                      "Reserve My Spot"
                      )}
                    </Button>

                    {/* Trust Badge */}
                    <div className="pt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
                      <Shield className="h-3.5 w-3.5" />
                      <span>Your data is encrypted and secure</span>
                    </div>
                  </form>
                </Card>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card className="bg-white border-slate-200/60 shadow-xl shadow-slate-900/5 p-12 md:p-16 rounded-3xl text-center">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
                  className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-linear-to-br from-green-400 to-emerald-500 mb-8 relative"
                >
                  <CheckCircle2 className="h-10 w-10 text-white" strokeWidth={2.5} />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">
                  You're on the list!
                  </h3>
                  <p className="text-lg text-slate-600 mb-2">
                  Welcome aboard, <span className="font-semibold text-slate-900">{formData.name}</span>
                  </p>
                  <p className="text-slate-500 max-w-sm mx-auto mb-8">
                  We've sent a confirmation to <span className="font-medium text-slate-700">{formData.email}</span>. 
                  Check your inbox for next steps.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    variant="outline"
                    onClick={() => setIsSuccess(false)}
                    className="h-11 px-6 rounded-xl border-2 border-slate-200 hover:bg-slate-50 font-medium"
                  >
                    Add another person
                  </Button>
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WaitlistForm;
