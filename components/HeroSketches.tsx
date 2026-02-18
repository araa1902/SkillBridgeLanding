import React from 'react';
import { motion } from 'framer-motion';

interface HeroSketchesProps {
  className?: string;
}

const HeroSketches: React.FC<HeroSketchesProps> = ({ className = '' }) => {
  // Sketch animation variants
  const sketchVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: (i: number) => ({
      opacity: 1,
      pathLength: 1,
      transition: {
        pathLength: { duration: 2, ease: 'easeInOut', delay: i * 0.3 },
        opacity: { duration: 0.5, delay: i * 0.3 },
      },
    }),
  };

  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 ${className}`}>
      {/* Sketch 1: Student Learning Blueprint */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative group"
      >
        <div className="relative bg-white/50 border border-slate-200 p-6 rounded-lg backdrop-blur-sm hover:bg-white/80 transition-colors overflow-hidden">
          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(to right, #e2e8f0 1px, transparent 1px),
                linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px',
            }}
          />

          <svg
            viewBox="0 0 200 200"
            className="w-full h-auto aspect-square relative z-10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Blueprint border */}
            <rect x="10" y="10" width="180" height="180" stroke="#94a3b8" strokeWidth="1.5" opacity="0.5" />

            {/* Sketch: Student at desk with books and lightbulb */}
            <motion.g
              custom={0}
              variants={sketchVariants}
              initial="hidden"
              animate="visible"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Desk */}
              <line x1="40" y1="120" x2="160" y2="120" stroke="#3b82f6" strokeWidth="2" />
              <line x1="50" y1="120" x2="50" y2="150" stroke="#3b82f6" strokeWidth="2" />
              <line x1="150" y1="120" x2="150" y2="150" stroke="#3b82f6" strokeWidth="2" />

              {/* Chair back */}
              <circle cx="100" cy="90" r="12" stroke="#3b82f6" strokeWidth="1.5" />

              {/* Books stack */}
              <rect x="55" y="90" width="18" height="22" stroke="#3b82f6" strokeWidth="1.5" />
              <rect x="58" y="85" width="18" height="22" stroke="#3b82f6" strokeWidth="1.5" />
              <line x1="55" y1="95" x2="73" y2="95" stroke="#3b82f6" strokeWidth="1" opacity="0.7" />
              <line x1="58" y1="90" x2="76" y2="90" stroke="#3b82f6" strokeWidth="1" opacity="0.7" />

              {/* Lightbulb - idea symbol */}
              <circle cx="130" cy="75" r="8" stroke="#fbbf24" strokeWidth="1.5" />
              <line x1="130" y1="84" x2="130" y2="92" stroke="#fbbf24" strokeWidth="1.5" />
              <rect x="127" y="92" width="6" height="4" stroke="#fbbf24" strokeWidth="1" />

              {/* Rays around lightbulb */}
              <line x1="130" y1="60" x2="130" y2="65" stroke="#fbbf24" strokeWidth="1" opacity="0.6" />
              <line x1="145" y1="75" x2="150" y2="75" stroke="#fbbf24" strokeWidth="1" opacity="0.6" />
              <line x1="142" y1="67" x2="146" y2="63" stroke="#fbbf24" strokeWidth="1" opacity="0.6" />

              {/* Label */}
              <text x="100" y="165" fontSize="10" fill="#475569" textAnchor="middle">
                LEARN & BUILD
              </text>
            </motion.g>
          </svg>
        </div>
      </motion.div>

      {/* Sketch 2: Work Project Blueprint */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative group"
      >
        <div className="relative bg-white/50 border border-slate-200 p-6 rounded-lg backdrop-blur-sm hover:bg-white/80 transition-colors overflow-hidden">
          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(to right, #e2e8f0 1px, transparent 1px),
                linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px',
            }}
          />

          <svg
            viewBox="0 0 200 200"
            className="w-full h-auto aspect-square relative z-10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Blueprint border */}
            <rect x="10" y="10" width="180" height="180" stroke="#94a3b8" strokeWidth="1.5" opacity="0.5" />

            {/* Sketch: Project board with tasks */}
            <motion.g
              custom={1}
              variants={sketchVariants}
              initial="hidden"
              animate="visible"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Board frame */}
              <rect x="40" y="40" width="120" height="100" stroke="#3b82f6" strokeWidth="2" />

              {/* Column 1: TODO */}
              <rect x="45" y="50" width="30" height="8" stroke="#3b82f6" strokeWidth="1" />
              <text x="60" y="56" fontSize="7" fill="#3b82f6" textAnchor="middle" fontWeight="bold">
                TODO
              </text>

              {/* Task cards - TODO */}
              <rect x="45" y="63" width="28" height="15" stroke="#3b82f6" strokeWidth="1" opacity="0.7" />
              <line x1="47" y1="67" x2="71" y2="67" stroke="#3b82f6" strokeWidth="0.8" opacity="0.5" />
              <line x1="47" y1="71" x2="65" y2="71" stroke="#3b82f6" strokeWidth="0.8" opacity="0.5" />

              {/* Column 2: IN PROGRESS */}
              <rect x="85" y="50" width="30" height="8" stroke="#fbbf24" strokeWidth="1" />
              <text x="100" y="56" fontSize="7" fill="#fbbf24" textAnchor="middle" fontWeight="bold">
                DOING
              </text>

              {/* Task cards - IN PROGRESS (highlighted) */}
              <rect x="85" y="63" width="28" height="15" stroke="#fbbf24" strokeWidth="1.5" />
              <line x1="87" y1="67" x2="111" y2="67" stroke="#fbbf24" strokeWidth="0.8" />
              <line x1="87" y1="71" x2="105" y2="71" stroke="#fbbf24" strokeWidth="0.8" opacity="0.7" />

              {/* Column 3: DONE */}
              <rect x="125" y="50" width="30" height="8" stroke="#10b981" strokeWidth="1" />
              <text x="140" y="56" fontSize="7" fill="#10b981" textAnchor="middle" fontWeight="bold">
                DONE
              </text>

              {/* Task cards - DONE (checkmark) */}
              <rect x="125" y="63" width="28" height="15" stroke="#10b981" strokeWidth="1" opacity="0.7" />
              <polyline points="130,70 133,73 138,68" stroke="#10b981" strokeWidth="1" />

              {/* Bottom text */}
              <text x="100" y="165" fontSize="10" fill="#475569" textAnchor="middle">
                STRUCTURED PROJECTS
              </text>
            </motion.g>
          </svg>
        </div>
      </motion.div>

      {/* Sketch 3: Verification & Credentials */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative group"
      >
        <div className="relative bg-white/50 border border-slate-200 p-6 rounded-lg backdrop-blur-sm hover:bg-white/80 transition-colors overflow-hidden">
          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(to right, #e2e8f0 1px, transparent 1px),
                linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px',
            }}
          />

          <svg
            viewBox="0 0 200 200"
            className="w-full h-auto aspect-square relative z-10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Blueprint border */}
            <rect x="10" y="10" width="180" height="180" stroke="#94a3b8" strokeWidth="1.5" opacity="0.5" />

            {/* Sketch: Certificate with badge */}
            <motion.g
              custom={2}
              variants={sketchVariants}
              initial="hidden"
              animate="visible"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Certificate paper */}
              <rect x="50" y="50" width="100" height="70" stroke="#3b82f6" strokeWidth="2" rx="4" />

              {/* Decorative border */}
              <rect x="55" y="55" width="90" height="60" stroke="#3b82f6" strokeWidth="1" opacity="0.5" />

              {/* Certificate text lines */}
              <line x1="65" y1="65" x2="135" y2="65" stroke="#3b82f6" strokeWidth="1" opacity="0.6" />
              <line x1="65" y1="72" x2="125" y2="72" stroke="#3b82f6" strokeWidth="0.8" opacity="0.5" />
              <line x1="65" y1="79" x2="130" y2="79" stroke="#3b82f6" strokeWidth="0.8" opacity="0.5" />
              <line x1="65" y1="86" x2="120" y2="86" stroke="#3b82f6" strokeWidth="0.8" opacity="0.5" />
              <line x1="65" y1="93" x2="115" y2="93" stroke="#3b82f6" strokeWidth="0.8" opacity="0.5" />

              {/* Ribbon/Seal badge */}
              <circle cx="100" cy="50" r="18" stroke="#10b981" strokeWidth="2" fill="none" />
              <circle cx="100" cy="50" r="14" stroke="#10b981" strokeWidth="1" fill="#10b981" opacity="0.1" />

              {/* Checkmark in badge */}
              <polyline points="94,50 98,54 106,46" stroke="#10b981" strokeWidth="2" fill="none" />

              {/* Badge ribbons */}
              <path d="M 85 65 Q 80 75 85 85" stroke="#10b981" strokeWidth="1.5" fill="none" />
              <path d="M 115 65 Q 120 75 115 85" stroke="#10b981" strokeWidth="1.5" fill="none" />

              {/* Label */}
              <text x="100" y="165" fontSize="10" fill="#475569" textAnchor="middle">
                VERIFIED CREDENTIALS
              </text>
            </motion.g>
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSketches;
