import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Award, Zap, TrendingUp, Users } from 'lucide-react';

const FeatureExplorer: React.FC = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: 'University Verified',
      description: 'Every student is verified through their university email. No bots, no anonymous freelancers.',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:border-blue-300',
      badge: 'Trust',
    },
    {
      icon: Lock,
      title: 'Escrow Protection',
      description: 'Payments are held in escrow and only released when work is approved. Protection for all parties.',
      color: 'from-student-500 to-student-600',
      hoverColor: 'hover:border-student-300',
      badge: 'Security',
    },
    {
      icon: Award,
      title: 'Micro-Credentials',
      description: 'Earn verifiable, portable credentials that prove your skills. More valuable than freelance ratings.',
      color: 'from-business-500 to-business-600',
      hoverColor: 'hover:border-business-300',
      badge: 'Career',
    },
    {
      icon: Zap,
      title: 'AI-Powered Matching',
      description: 'Our algorithm matches based on skills, university course, and career goals. No more endless applications.',
      color: 'from-blue-600 to-student-600',
      hoverColor: 'hover:border-blue-300',
      badge: 'Innovation',
    },
    {
      icon: TrendingUp,
      title: 'Career Analytics',
      description: 'Track your growth. See how projects build your career profile and open new opportunities.',
      color: 'from-student-600 to-emerald-500',
      hoverColor: 'hover:border-emerald-300',
      badge: 'Insights',
    },
    {
      icon: Users,
      title: 'Institutional Network',
      description: 'Be part of a curated ecosystem of students, businesses, and universities driving real change.',
      color: 'from-business-600 to-amber-500',
      hoverColor: 'hover:border-amber-300',
      badge: 'Community',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="features" className="relative py-16 lg:py-20 bg-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-student-100 rounded-full filter blur-3xl opacity-20 -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-4 border border-blue-100">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-blue-700">Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 font-display">
            Designed for Impact
          </h2>
          <p className="text-lg text-slate-600 font-reading font-light">
            Every feature is purposefully built to remove friction and create real opportunities
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
          <div
            className="h-full p-8 rounded-2xl bg-white border border-slate-200 transition-all duration-300"
          >

            {/* Icon centered */}
            <div
              className="flex justify-center items-center w-14 h-14 rounded-xl text-slate-700 mb-8 mx-auto bg-slate-100"
            >
              <Icon className="w-7 h-7" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-slate-600 leading-relaxed text-center">
              {feature.description}
            </p>
          </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureExplorer;
