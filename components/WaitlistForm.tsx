import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FormData, UserRole } from '../types';
import { CheckCircle2, Loader2 } from 'lucide-react';

const WaitlistForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    role: 'Student',
    organization: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="waitlist" className="bg-slate-50 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-12 border border-slate-100">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Join the SkillBridge Waitlist</h2>
            <p className="text-slate-600">
              Be the first to access our platform. We are launching soon at selected UK universities.
            </p>
          </div>

          <AnimatePresence mode='wait'>
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">You're on the list!</h3>
                <p className="text-slate-600">
                  Thanks for joining {formData.name}. We'll be in touch shortly.
                </p>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-3 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 bg-slate-50 focus:bg-white transition-all"
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-3 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 bg-slate-50 focus:bg-white transition-all"
                    placeholder="jane@university.ac.uk"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-slate-700 mb-2">
                    I am a...
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-3 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 bg-slate-50 focus:bg-white transition-all"
                  >
                    <option value="Student">Student</option>
                    <option value="Business">Business</option>
                    <option value="University">University Representative</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-slate-700 mb-2">
                    {formData.role === 'Student' ? 'University Name' : 'Company / Institution Name'}
                  </label>
                  <input
                    type="text"
                    name="organization"
                    id="organization"
                    required
                    value={formData.organization}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-3 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 bg-slate-50 focus:bg-white transition-all"
                    placeholder={formData.role === 'Student' ? 'University of Bath' : 'Acme Corp'}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full justify-center rounded-lg bg-blue-600 px-3 py-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="animate-spin h-5 w-5" /> Processing...
                    </span>
                  ) : (
                    "Join the SkillBridge Waitlist"
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
          
          <p className="mt-6 text-center text-xs text-slate-400">
            We value your privacy. Your data is stored securely.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;