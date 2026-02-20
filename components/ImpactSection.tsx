import React from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Briefcase,
  Users,
  MessageSquareQuote,
} from 'lucide-react';
import {
  BriefcaseIcon,
  BuildingApartmentIcon,
  GraduationCapIcon,
  TrendUpIcon,
  UsersFourIcon,
} from '@phosphor-icons/react';

// ─── Data ────────────────────────────────────────────────────────────────────

const marketStats = [
  {
    metric: '72%',
    title: 'Workplace Readiness',
    description:
      'Candidates with hands-on project experience demonstrate stronger skills and better professional attitudes.',
    source: 'Institute of Student Employers',
    icon: TrendUpIcon,
    color: 'text-blue-400',
  },
  {
    metric: '61%',
    title: 'Flexible Resourcing',
    description:
      'More than half of SMBs rely on external talent for digital, design, and administrative workloads.',
    source: 'UK Market Insights 2025',
    icon: BriefcaseIcon,
    color: 'text-emerald-400',
  },
  {
    metric: '50%+',
    title: 'The Experience Gap',
    description:
      'Students struggle to access career-building opportunities due to competition and geographic barriers.',
    source: 'Higher Education Research',
    icon: UsersFourIcon,
    color: 'text-amber-400',
  },
];

const prototypeFeedback = [
  {
    quote:
      'The application status timeline eliminates the "black-hole" of applying. It provides constant assurance throughout.',
    role: 'Student Tester',
    category: 'Undergraduate User',
    Icon: GraduationCapIcon,
    accent: 'text-blue-400',
    dot: 'bg-blue-400',
  },
  {
    quote:
      "I wouldn't know what a fair budget or duration is. The pre-built templates completely solve that friction for me.",
    role: 'SME Tester',
    category: 'Hiring Manager View',
    Icon: BriefcaseIcon,
    accent: 'text-emerald-400',
    dot: 'bg-emerald-400',
  },
  {
    quote:
      'We need patterns, not individual stories. Seeing skill demand trends lets us proactively adapt our curriculum.',
    role: 'University Admin',
    category: 'Institutional View',
    Icon: BuildingApartmentIcon,
    accent: 'text-amber-400',
    dot: 'bg-amber-400',
  },
];

// ─── Variants ────────────────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45, delay },
});

// ─── Component ───────────────────────────────────────────────────────────────

const ImpactSection: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-slate-900 overflow-hidden">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">

        {/* ── Section Label ── */}
        <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-10">
          <span className="h-px w-8 bg-blue-500/60" />
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
            Market Validation
          </span>
        </motion.div>

        {/* ── Header ── */}
        <motion.div {...fadeUp(0.05)} className="mb-12 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
            Backed by Data.{' '}
            <span className="text-slate-400">Built for the Future of Work.</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            The gap between academic theory and employment readiness is widening.
            SkillBridge is engineered to solve a systemic problem recognised across the UK.
          </p>
        </motion.div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">

          {/* LEFT — Stats list */}
          <div className="flex flex-col gap-4">
            {marketStats.map((stat, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.1 + i * 0.1)}
                className="group flex items-start gap-5 bg-white/[0.04] border border-white/[0.07] rounded-2xl p-5 hover:bg-white/[0.07] transition-colors"
              >
                {/* Metric badge */}
                <div className="shrink-0 w-16 text-center">
                  <span className={`text-2xl font-extrabold tracking-tight ${stat.color}`}>
                    {stat.metric}
                  </span>
                </div>

                {/* Divider */}
                <div className="w-px self-stretch bg-white/[0.08]" />

                {/* Copy */}
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <stat.icon className={`w-4 h-4 shrink-0 ${stat.color}`} />
                    <h3 className="text-sm font-semibold text-white">{stat.title}</h3>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">{stat.description}</p>
                  <span className="mt-2 inline-block text-[10px] font-medium text-slate-600 uppercase tracking-wider">
                    {stat.source}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT — Quote strip */}
          <div className="flex flex-col gap-4">
            <motion.div {...fadeUp(0.1)} className="mb-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Early Prototype Feedback
              </p>
            </motion.div>

            {prototypeFeedback.map((fb, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.15 + i * 0.1)}
                className="flex flex-col justify-between bg-slate-800/50 border border-slate-700/60 rounded-2xl p-5"
              >
                <div className="flex items-start gap-3 mb-4">
                  <MessageSquareQuote className="w-4 h-4 text-slate-600 mt-0.5 shrink-0" />
                  <p className="text-slate-300 text-sm leading-relaxed italic">
                    "{fb.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-700/50">
                  <div className={`w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center ${fb.accent}`}>
                    <fb.Icon size={14} weight="duotone" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white leading-none">{fb.role}</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">{fb.category}</p>
                  </div>
                  <div className={`ml-auto w-1.5 h-1.5 rounded-full ${fb.dot} opacity-70`} />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
