import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
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
  Check,
  ArrowRight,
  ChevronLeft
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { universities } from '@/src/universities-data';
import { submitWaitlistSignup } from '@/api/waitlist/submit';

interface University {
  name: string;
}

export interface WaitlistFormHandle {
  focusEmailInput: () => void;
}

// Minimalist background
const MinimalBackground = () => (
  <div className="absolute inset-0 -z-10 h-full w-full bg-white" />
);

const WaitlistForm = forwardRef<WaitlistFormHandle>((_, ref) => {
  // Multi-step form state
  const [currentStep, setCurrentStep] = useState<'email' | 'profile' | 'success'>('email');

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    role: 'Student',
    organization: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [filteredUniversities, setFilteredUniversities] = useState<University[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

  // Expose focusEmailInput method to parent components
  useImperativeHandle(ref, () => ({
    focusEmailInput: () => {
      if (emailInputRef.current) {
        emailInputRef.current.focus();
        emailInputRef.current.select();
      }
    }
  }));

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

  // Validate email format
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // STEP 1: Email capture - triggers Step 2
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email.trim() || !isValidEmail(formData.email)) return;

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsSubmitting(false);
    setCurrentStep('profile');
  };

  // STEP 2: Complete profile submission
  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptedTerms || !formData.organization.trim()) return;

    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const response = await submitWaitlistSignup(formData);

      if (response.success) {
        setCurrentStep('success');
      } else {
        setSubmitError(response.error || response.message);
        console.error('Failed to submit:', response.error);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      setSubmitError(errorMessage);
      console.error('Unexpected error during submission:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Go back from Step 2 to Step 1
  const handleBackToEmail = () => {
    setCurrentStep('email');
  };

  // Reset form
  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      role: 'Student',
      organization: ''
    });
    setAcceptedTerms(false);
    setSubmitError(null);
    setCurrentStep('email');
  };

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle organization input change with filtering
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

  // Handle university selection
  const handleSelectUniversity = (uni: University) => {
    setFormData(prev => ({ ...prev, organization: uni.name }));
    setShowDropdown(false);
  };

  const roleOptions: { value: UserRole; label: string; icon: React.ReactNode }[] = [
    { value: 'Student', label: 'Student', icon: <User className="h-4 w-4" /> },
    { value: 'Business', label: 'Business Professional', icon: <Briefcase className="h-4 w-4" /> },
    { value: 'University', label: 'University Staff', icon: <Building2 className="h-4 w-4" /> }
  ];

  // Conditional organization label
  const getOrganizationLabel = () => {
    if (formData.role === 'Business') return 'Company Name';
    return 'University Name';
  };

  return (
    <section id="waitlist" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-4 py-20">
      <MinimalBackground />

      <div className="container relative z-10 mx-auto max-w-120">
        <AnimatePresence mode='wait'>
          {/* STEP 1: Email Capture (The Hook) */}
          {currentStep === 'email' && (
            <motion.div
              key="step1-email"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-center mb-12">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight mb-4 leading-tight"
                >
                  Are you interested?
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-xl text-slate-600 max-w-md mx-auto leading-relaxed"
                >
                  Let us know if you are interested in SkillBridge, and we will keep you updated on our launch and early access opportunities.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <Card className="bg-white border-slate-200/60 p-10 md:p-14 rounded-3xl shadow-lg shadow-slate-900/5">
                  <form onSubmit={handleEmailSubmit} className="space-y-6">
                    {/* Email Input - The Hook */}
                    <div className="space-y-3">
                      <Label htmlFor="email-step1" className="text-sm font-semibold text-slate-700">
                        Email Address
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-5 h-4 w-4 text-slate-400 pointer-events-none" />
                        <Input
                          ref={emailInputRef}
                          type="email"
                          id="email-step1"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          onFocus={() => setActiveField('email-step1')}
                          onBlur={() => setActiveField(null)}
                          placeholder="Enter your email address..."
                          className={cn(
                            "h-14 pl-11 pr-4 bg-slate-50/50 border-2 rounded-xl transition-all duration-200 text-base",
                            "placeholder:text-slate-400",
                            "focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/15",
                            activeField === 'email-step1' && "border-blue-600"
                          )}
                          autoComplete="email"
                        />
                      </div>
                    </div>

                    {/* High-Contrast CTA Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting || !formData.email.trim() || !isValidEmail(formData.email)}
                      className={cn(
                        "w-full h-14 font-semibold rounded-xl transition-all duration-200 text-base",
                        isSubmitting || !formData.email.trim() || !isValidEmail(formData.email)
                          ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                          : "bg-white border-2 border-slate-200 text-slate-900 hover:border-blue-500 hover:bg-blue-50/30 hover:text-blue-600"
                      )}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <Loader2 className="animate-spin h-4 w-4" />
                          Confirming...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          Get Started
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      )}
                    </Button>

                    {/* Trust Badge */}
                    <div className="pt-2 flex items-center justify-center gap-2 text-xs text-slate-500">
                      <Shield className="h-3.5 w-3.5" />
                      <span>Your data is encrypted and secure</span>
                    </div>
                  </form>
                </Card>
              </motion.div>
            </motion.div>
          )}

          {/* STEP 2: Profile Qualifier (Low-Friction) */}
          {currentStep === 'profile' && (
            <motion.div
              key="step2-profile"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-center mb-10">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-2 leading-tight"
                >
                  Almost there!
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-lg text-slate-600 max-w-md mx-auto leading-relaxed"
                >
                  Just a few more details to personalize your experience
                </motion.p>

                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700"
                  >
                    {submitError}
                  </motion.div>
                )}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <Card className="bg-white border-slate-200/60 p-8 md:p-10 rounded-3xl shadow-lg shadow-slate-900/5">
                  <form onSubmit={handleProfileSubmit} className="space-y-6">

                    {/* Full Name - Optional */}
                    <div className="space-y-2.5">
                      <Label htmlFor="name" className="text-sm font-semibold text-slate-700">
                        Full Name <span className="text-xs text-slate-400 font-normal">(Optional)</span>
                      </Label>
                      <div className="relative">
                        <User className="absolute left-4 top-3.5 h-4 w-4 text-slate-400 pointer-events-none" />
                        <Input
                          type="text"
                          name="name"
                          id="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setActiveField('name')}
                          onBlur={() => setActiveField(null)}
                          placeholder="John Doe"
                          className={cn(
                            "h-12 pl-11 pr-4 bg-slate-50/50 border-2 rounded-xl transition-all duration-200",
                            "placeholder:text-slate-400",
                            "focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10",
                            activeField === 'name' && "border-blue-500"
                          )}
                        />
                      </div>
                    </div>

                    {/* Role Selection - Single Choice */}
                    <div className="space-y-3">
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
                                ? "border-blue-500 bg-blue-50/50 shadow-md shadow-blue-500/10"
                                : "border-slate-200 bg-slate-50/30 hover:border-slate-300"
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
                              "flex items-center justify-center h-5 w-5 rounded-full border-2 transition-all shrink-0",
                              formData.role === option.value
                                ? "border-blue-500 bg-blue-500"
                                : "border-slate-300 bg-white"
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
                              "flex items-center gap-3 flex-1 text-sm font-medium transition-colors",
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

                    {/* Dynamic Organization/University Input */}
                    <div className="space-y-2.5" ref={dropdownRef}>
                      <Label htmlFor="organization" className="text-sm font-semibold text-slate-700">
                        {getOrganizationLabel()} <span className="text-xs text-red-500 font-normal">*</span>
                      </Label>

                      {formData.role === 'Business' ? (
                        // For Business: Simple text input for company
                        <div className="relative">
                          <Search className="absolute left-4 top-3.5 h-4 w-4 text-slate-400 pointer-events-none" />
                          <Input
                            name="organization"
                            id="organization"
                            required
                            value={formData.organization}
                            onChange={handleChange}
                            onFocus={() => setActiveField('organization')}
                            onBlur={() => setActiveField(null)}
                            placeholder="Enter your company name..."
                            className={cn(
                              "h-12 pl-11 pr-4 bg-slate-50/50 border-2 rounded-xl transition-all duration-200",
                              "placeholder:text-slate-400",
                              "focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10",
                              activeField === 'organization' && "border-blue-500"
                            )}
                          />
                        </div>
                      ) : (
                        // For Students/Staff: Searchable university dropdown
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
                            placeholder="Search or type your university..."
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
                                        className="w-full text-left px-4 py-3 hover:bg-slate-50 rounded-lg transition-colors flex items-start gap-3"
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

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleBackToEmail}
                        disabled={isSubmitting}
                        className="flex-1 h-12 border-2 border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold rounded-xl transition-colors"
                      >
                        <ChevronLeft className="h-4 w-4 mr-2" />
                        Back
                      </Button>

                      <Button
                        type="submit"
                        disabled={isSubmitting || !acceptedTerms || !formData.organization.trim()}
                        className="flex-1 h-12 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors shadow-lg shadow-blue-600/40 hover:shadow-xl hover:shadow-blue-600/50"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <Loader2 className="animate-spin h-4 w-4" />
                            Securing...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center gap-2">
                            Register your interest
                            <ArrowRight className="h-4 w-4" />
                          </span>
                        )}
                      </Button>
                    </div>

                    {/* Trust Badge */}
                    <div className="pt-2 flex items-center justify-center gap-2 text-xs text-slate-500">
                      <Shield className="h-3.5 w-3.5" />
                      <span>Your data is encrypted and secure</span>
                    </div>
                  </form>
                </Card>
              </motion.div>
            </motion.div>
          )}

          {/* STEP 3: Success State */}
          {currentStep === 'success' && (
            <motion.div
              key="step3-success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-md mx-auto"
            >
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
                  className="mx-auto mb-6"
                >
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 mx-auto">
                    <CheckCircle2 className="h-12 w-12 text-white" strokeWidth={2} />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                    You're on the list!
                  </h3>

                  <p className="text-lg text-slate-600 max-w-md mx-auto leading-relaxed mb-8">
                    Thank you for registering your interest in SkillBridge. We will keep you updated on our launch and early access opportunities.
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Card className="bg-white border-slate-200/60 p-8 rounded-3xl shadow-lg shadow-slate-900/5">
                  <Button
                    onClick={handleReset}
                    className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors shadow-md shadow-blue-600/30"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Sign up another person
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Button>
                </Card>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
});

WaitlistForm.displayName = 'WaitlistForm';

export default WaitlistForm;
