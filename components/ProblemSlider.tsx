import React, { useCallback, useMemo, useState } from 'react';
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useReducedMotion,
} from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, BriefcaseIcon } from 'lucide-react';
import { GraduationCap, Briefcase, Building, StudentIcon, BuildingIcon } from '@phosphor-icons/react';

type SegmentKey = 'students' | 'businesses' | 'universities';

type Segment = {
  key: SegmentKey;
  label: string;
  icon: React.ReactNode;
  accent: {
    ring: string;
    pill: string;
    softBg: string;
    iconBg: string;
    iconFg: string;
  };
  kicker: string;
  headline: string;
  problem: {
    title: string;
    description: string;
    bullets: string[];
  };
  solution: {
    title: string;
    description: string;
    bullets: string[];
  };
};

const ProblemSlider: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const segments: Segment[] = useMemo(
    () => [
      {
        key: 'students',
        label: 'Students',
        icon: <StudentIcon className="w-5 h-5" weight="bold" />,
        accent: {
          ring: 'ring-emerald-400/30',
          pill: 'bg-emerald-600',
          softBg: 'bg-emerald-50/60',
          iconBg: 'bg-emerald-600/10',
          iconFg: 'text-emerald-700',
        },
        kicker: 'For students',
        headline: 'Turn skills into verified experience.',
        problem: {
          title: 'Before',
          description:
            'Early-career experience is gated by connections, scarce internships, and slow application cycles.',
          bullets: [
            'No network → fewer opportunities',
            'Highly competitive roles',
            'Long timelines and ghosting',
            'Little to show on your CV',
          ],
        },
        solution: {
          title: 'After SkillBridge',
          description:
            'Get matched to real, scoped work quickly—earn, build proof, and stack credentials.',
          bullets: [
            'Real projects with clear deliverables',
            'Fair, skill-based matching',
            'Fast turnaround (days/weeks)',
            'Verified micro-credentials',
          ],
        },
      },
      {
        key: 'businesses',
        label: 'Businesses',
        icon: <BriefcaseIcon className="w-5 h-5" weight="bold" />,
        accent: {
          ring: 'ring-violet-400/30',
          pill: 'bg-violet-600',
          softBg: 'bg-violet-50/60',
          iconBg: 'bg-violet-600/10',
          iconFg: 'text-violet-700',
        },
        kicker: 'For businesses',
        headline: 'Ship work without hiring drag.',
        problem: {
          title: 'Before',
          description:
            'Short-term talent sourcing is noisy: inconsistent quality, slow vetting, and unclear scope.',
          bullets: [
            'Unverified marketplaces',
            'Quality varies wildly',
            'Time-heavy screening',
            'Scope creep & disputes',
          ],
        },
        solution: {
          title: 'After SkillBridge',
          description:
            'Post a micro-project, get matched to verified students, and pay safely with clear deliverables.',
          bullets: [
            'University-verified talent',
            'Measurable deliverables',
            'Matched in days',
            'AI-optimized briefs',
          ],
        },
      },
      {
        key: 'universities',
        label: 'Universities',
        icon: <BuildingIcon className="w-5 h-5" weight="bold" />,
        accent: {
          ring: 'ring-blue-400/30',
          pill: 'bg-blue-600',
          softBg: 'bg-blue-50/60',
          iconBg: 'bg-blue-600/10',
          iconFg: 'text-blue-700',
        },
        kicker: 'For universities',
        headline: 'Scale employability outcomes.',
        problem: {
          title: 'Before',
          description:
            'Partnerships don’t scale to every student, and outcome tracking becomes a manual burden.',
          bullets: [
            'Limited partner capacity',
            'Hard to track outcomes',
            'Manual coordination overhead',
            'Unequal student access',
          ],
        },
        solution: {
          title: 'After SkillBridge',
          description:
            'An institutional layer that automates matching and captures verified outcomes at scale.',
          bullets: [
            'Unlimited participation',
            'Outcome tracking built-in',
            'Automated matching',
            'Institution-grade credibility',
          ],
        },
      },
    ],
    []
  );

  const current = segments[activeIndex];

  const goTo = useCallback(
    (next: number) => {
      const target = ((next % segments.length) + segments.length) % segments.length;
      setDirection(target > activeIndex ? 1 : -1);
      setActiveIndex(target);
    },
    [activeIndex, segments.length]
  );

  const onPrev = () => goTo(activeIndex - 1);
  const onNext = () => goTo(activeIndex + 1);

  const slideVariants = {
    enter: (dir: 1 | -1) => ({
      x: reduceMotion ? 0 : dir > 0 ? 32 : -32,
      opacity: 0,
      filter: reduceMotion ? 'none' : 'blur(4px)',
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: 'blur(0px)',
    },
    exit: (dir: 1 | -1) => ({
      x: reduceMotion ? 0 : dir > 0 ? -32 : 32,
      opacity: 0,
      filter: reduceMotion ? 'none' : 'blur(4px)',
    }),
  };

  return (
    <section className="relative py-20 lg:py-24 bg-white overflow-hidden">
      <MotionConfig reducedMotion="user">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-3">
              Built for every side of the ecosystem
            </h2>
          </div>

            {/* Persona selector (segmented control) */}
            <div className="flex justify-center mb-12">
            <div
              className="relative inline-flex rounded-2xl border border-slate-200 bg-slate-50 p-1 shadow-sm"
              role="tablist"
              aria-label="Select perspective"
              onKeyDown={(e) => {
              if (e.key === 'ArrowLeft') onPrev();
              if (e.key === 'ArrowRight') onNext();
              }}
            >
              {segments.map((s, idx) => {
              const selected = idx === activeIndex;
              return (
                <button
                key={s.key}
                role="tab"
                id={`tab-${s.key}`}
                aria-selected={selected}
                aria-controls={`segment-panel-${s.key}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => goTo(idx)}
                className={`relative z-10 flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                  selected ? 'text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
                >
                {selected && (
                  <motion.div
                  layoutId="activeTabPill"
                  className={`absolute inset-0 z-0 rounded-xl ${s.accent.pill}`}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span className={selected ? 'text-white/95' : s.accent.iconFg}>
                  {s.icon}
                  </span>
                  {s.label}
                </span>
                </button>
              );
              })}
            </div>
          </div>

          {/* Main card */}
          <div className="relative">
            {/* Background Halo */}
            <div className="absolute -inset-x-6 -top-10 -bottom-10 pointer-events-none">
              <div
                className={`h-full w-full rounded-[32px] transition-colors duration-500 ${current.accent.softBg}`}
              />
            </div>

            <div className="relative rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              
              {/* Top strip */}
              <div className="flex items-center justify-between gap-4 px-6 sm:px-8 py-6 border-b border-slate-200">
                <div className="flex items-center gap-4">
                  <div
                    className={`h-12 w-12 rounded-xl border border-slate-200 flex items-center justify-center transition-colors duration-300 ${current.accent.iconBg} ${current.accent.iconFg}`}
                  >
                    {current.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-wide uppercase text-slate-500 mb-0.5">
                      {current.kicker}
                    </div>
                    <div className="text-lg sm:text-xl font-semibold text-slate-900 tracking-tight">
                      {current.headline}
                    </div>
                  </div>
                </div>

                {/* Nav Arrows */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={onPrev}
                    className="h-10 w-10 flex items-center justify-center rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition"
                    aria-label="Previous segment"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={onNext}
                    className="h-10 w-10 flex items-center justify-center rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition"
                    aria-label="Next segment"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Slide content */}
              <div className="px-6 sm:px-8 py-8 overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={current.key}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    id={`segment-panel-${current.key}`}
                    role="tabpanel"
                    aria-labelledby={`tab-${current.key}`}
                    drag={reduceMotion ? false : 'x'}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(_, info) => {
                      if (reduceMotion) return;
                      const offset = info.offset.x;
                      const velocity = info.velocity.x;
                      
                      // Swipe thresholds
                      if (offset < -50 || velocity < -500) onNext();
                      else if (offset > 50 || velocity > 500) onPrev();
                    }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 cursor-grab active:cursor-grabbing"
                  >
                    {/* Before */}
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
                          {current.problem.title}
                        </h3>
                        <span className="text-xs font-semibold text-slate-500 bg-slate-200/50 px-2 py-1 rounded-md">
                          What’s broken
                        </span>
                      </div>
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {current.problem.description}
                      </p>
                      <ul className="space-y-4 mt-auto">
                        {current.problem.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="mt-0.5 shrink-0 h-5 w-5 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 text-xs font-bold">
                              ✕
                            </span>
                            <span className="text-sm text-slate-700">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* After */}
                    <div
                      className={`rounded-2xl border border-slate-200 bg-white p-6 ring-1 flex flex-col h-full ${current.accent.ring}`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
                          {current.solution.title}
                        </h3>
                        <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
                          What you get
                        </span>
                      </div>
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {current.solution.description}
                      </p>
                      <ul className="space-y-4 mb-8">
                        {current.solution.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span
                              className={`mt-0.5 shrink-0 h-5 w-5 rounded-full flex items-center justify-center text-xs font-bold ${current.accent.iconBg} ${current.accent.iconFg}`}
                            >
                              ✓
                            </span>
                            <span className="text-sm text-slate-700 font-medium">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </MotionConfig>
    </section>
  );
};

export default ProblemSlider;