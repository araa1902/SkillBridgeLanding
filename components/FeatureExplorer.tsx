import React from 'react';
import { motion } from 'framer-motion';
import { CertificateIcon, ChartLineUpIcon, LockLaminatedIcon, NetworkIcon, RobotIcon, SealCheckIcon } from '@phosphor-icons/react';
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';

const FeatureExplorer: React.FC = () => {
  const features = [
    {
      icon: SealCheckIcon,
      title: 'University Verified',
      description: 'Every student is verified through their university email. No bots, no anonymous freelancers—just verified talent.',
      className: 'lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3',
      href: '#',
      showCta: false,
      animationType: 'orbit',
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-indigo-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/10 rounded-full filter blur-2xl" />
        </div>
      ),
    },
    {
      icon: LockLaminatedIcon,
      title: 'Escrow Protection',
      description: 'Payments held securely until work is approved. Complete protection for both parties.',
      className: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3',
      href: '#',
      showCta: false,
      animationType: 'lock',
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-green-500/10">
          <div className="absolute inset-0 flex items-center justify-center opacity-40">
            <div className="w-64 h-64 border-[3px] border-emerald-500/30 rounded-2xl rotate-12 animate-pulse" />
            <div className="absolute w-48 h-48 border-[3px] border-teal-500/40 rounded-2xl -rotate-12 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
      ),
    },
    {
      icon: CertificateIcon,
      title: 'Micro-Credentials',
      description: 'Earn verifiable, portable credentials that prove your skills—more valuable than freelance ratings.',
      className: 'lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4',
      href: '#',
      showCta: false,
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-yellow-500/10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-amber-500/20 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute top-8 right-8 w-24 h-24 bg-orange-500/15 rounded-full filter blur-2xl" />
        </div>
      ),
    },
    {
      icon: RobotIcon,
      title: 'AI-Powered Matching',
      description: 'Smart algorithms match you based on skills, courses, and career goals. No more endless applications.',
      className: 'lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2',
      href: '#',
      showCta: false,
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-purple-500/10 to-fuchsia-500/10">
          <div className="absolute top-8 right-8 w-32 h-32 bg-violet-500/20 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-8 left-8 w-36 h-36 bg-fuchsia-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '0.7s' }} />
        </div>
      ),
    },
    {
      icon: ChartLineUpIcon,
      title: 'Career Analytics',
      description: 'Track your growth. See how projects build your profile and open new opportunities.',
      className: 'lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4',
      href: '#',
      showCta: false,
      animationType: 'chart',
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-sky-500/10">
          <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgb(6 182 212 / 0.3)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          <div className="absolute bottom-12 left-12 w-40 h-40 bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse" />
        </div>
      ),
    },
  ];


  return (
    <section id="features" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      {/* Enhanced decorative background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 rounded-full filter blur-3xl -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-r from-cyan-500/3 via-blue-500/3 to-violet-500/3 rounded-full filter blur-3xl -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 font-display leading-tight">
            Built for{' '}
            <span className="bg-clip-text text-blue-600">
              Real Impact
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 font-reading leading-relaxed">
            Every feature is purposefully designed to remove friction, build trust, and create genuine opportunities for verified student talent
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <BentoGrid className="lg:grid-rows-3">
            {features.map((feature) => (
              <BentoCard 
                key={feature.title}
                name={feature.title}
                Icon={feature.icon}
                description={feature.description}
                href={feature.href}
                showCta={feature.showCta}
                animationType={feature.animationType as any}
                background={feature.background}
                className={feature.className}
              />
            ))}
          </BentoGrid>
        </motion.div>

        {/* Optional: Network effect visual */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 text-center"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureExplorer;
