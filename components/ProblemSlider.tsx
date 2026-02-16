import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { GraduationCap, Briefcase, Building } from '@phosphor-icons/react';

const ProblemSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const problems = [
    {
      segment: 'Students',
      icon: <GraduationCap className="w-5 h-5" />,
      color: 'from-student-500 to-student-600',
      lightBg: 'bg-student-50',
      problem: {
        title: 'The Problem',
        description: 'Getting verified early-career experience is nearly impossible without existing connections. Traditional internships are scarce and highly competitive.',
        pain: [
          'No network = No opportunities',
          'Impossible competition for spots',
          'Months of rejection',
          'Zero professional credentials'
        ]
      },
      solution: {
        title: 'SkillBridge Solution',
        description: 'Get matched with real projects from day one, earn money, build credentials.',
        benefits: [
          'Hundreds of projects available',
          'Fair, skill-based matching',
          'Get hired in weeks, not months',
          'Earn verified micro-credentials'
        ]
      }
    },
    {
      segment: 'Businesses',
      icon: <Briefcase className="w-5 h-5" />,
      color: 'from-business-500 to-business-600',
      lightBg: 'bg-business-50',
      problem: {
        title: 'The Problem',
        description: 'Finding reliable, short-term talent is time-consuming. Freelance marketplaces are chaotic, and quality control is often a gamble.',
        pain: [
          'Chaotic, unverified freelancers',
          'Quality varies wildly',
          'Months of vetting required',
          'Scope creep & disputes'
        ]
      },
      solution: {
        title: 'SkillBridge Solution',
        description: 'Access pre-vetted university students with clear deliverables and escrow protection.',
        benefits: [
          'University-verified talent only',
          'Consistent, measurable quality',
          'Get matched in days',
          'AI-optimized project briefs'
        ]
      }
    },
    {
      segment: 'Universities',
      icon: <Building className="w-5 h-5" />,
      color: 'from-blue-500 to-blue-600',
      lightBg: 'bg-blue-50',
      problem: {
        title: 'The Problem',
        description: 'Demonstrating employability outcomes is critical, but scaling industry partnerships to support every student is logistically overwhelming.',
        pain: [
          'Limited partnership capacity',
          'Hard to track outcomes',
          'Manual coordination burden',
          'Limited student access'
        ]
      },
      solution: {
        title: 'SkillBridge Solution',
        description: 'Institutional-grade platform that automatically connects students with verified industry experience.',
        benefits: [
          'Unlimited student participation',
          'Real outcome tracking',
          'Fully automated matching',
          'Institutional credibility'
        ]
      }
    }
  ];

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % problems.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + problems.length) % problems.length);
  };

  const current = problems[activeIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="relative py-16 lg:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-student-50 px-4 py-2 rounded-full mb-4 border border-student-200">
            <span className="text-sm font-semibold text-student-700">The Reality</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 font-display">
            Problems We Solve for Everyone
          </h2>
          <p className="text-lg text-slate-600 font-reading font-light">
            Select who you are to see how SkillBridge transforms your ecosystem
          </p>
        </motion.div>

        {/* Slider container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          {/* Segment selector buttons */}
          <div className="flex gap-3 justify-center mb-12">
            {problems.map((p, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > activeIndex ? 1 : -1);
                  setActiveIndex(idx);
                }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeIndex === idx
                    ? idx === 0
                      ? 'bg-student-50 text-student-700 border-2 border-student-600 shadow-lg'
                      : idx === 1
                      ? 'bg-business-50 text-business-700 border-2 border-business-600 shadow-lg'
                      : 'bg-blue-50 text-blue-700 border-2 border-blue-600 shadow-lg'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {p.segment}
              </button>
            ))}
          </div>

          {/* Slider content */}
          <div className="relative overflow-hidden rounded-2xl">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, type: 'spring', stiffness: 300, damping: 30 }}
              className="w-full"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-12">
                {/* Problem side */}
                <div className="bg-linear-to-br from-red-50 to-orange-50 rounded-xl p-8 border border-red-200 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-red-900 mb-4">
                      {current.problem.title}
                    </h3>
                    <p className="text-red-700 mb-8 leading-relaxed">
                      {current.problem.description}
                    </p>
                    <div className="space-y-4">
                      {current.problem.pain.map((pain, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <span className="text-red-500 text-xl font-bold mt-0.5">✕</span>
                          <span className="text-red-700 text-sm md:text-base">{pain}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Solution side */}
                <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-green-900 mb-4">
                      {current.solution.title}
                    </h3>
                    <p className="text-green-700 mb-8 leading-relaxed">
                      {current.solution.description}
                    </p>
                    <div className="space-y-4">
                      {current.solution.benefits.map((benefit, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <span className="text-green-600 text-xl font-bold mt-0.5">✓</span>
                          <span className="text-green-700 text-sm md:text-base">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all duration-300 hover:shadow-md"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-3">
              {problems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > activeIndex ? 1 : -1);
                    setActiveIndex(idx);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? 'bg-blue-600 w-8'
                      : 'bg-slate-300 w-2 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all duration-300 hover:shadow-md"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSlider;
