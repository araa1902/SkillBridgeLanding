import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChatDots } from '@phosphor-icons/react';

interface CounterProps {
  end: number;
  label: string;
  suffix?: string;
  duration?: number;
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  // --- Original 5 ---
  {
    quote: "SkillBridge isn't just a marketplace - it's a movement. We're creating pathways for talented students to prove themselves, enabling businesses to find reliable talent, and helping universities deliver on their mission.",
    name: "Aravind Kumar",
    role: "Co-Founder, SkillBridge",
  },
  {
    quote: "I was stuck in the 'no experience, no job' loop. SkillBridge gave me the chance to build a real portfolio with paid micro-projects. I actually had verifiable work to show in my graduate interviews.",
    name: "Sarah Thompson",
    role: "BSc Business Management Student",
  },
  {
    quote: "Finding reliable, short-term talent used to be a gamble. With SkillBridge, we get verified university students who bring fresh perspectives to our campaigns, without the overhead of a full-time hire.",
    name: "Rajesh Kumar",
    role: "Marketing Director, TechStart Ltd",
  },
  {
    quote: "A highly scalable solution to the employability challenge. It gives our students verifiable, real-world experience that directly impacts our TEF metrics and graduate outcome reporting.",
    name: "Dr. Emma Davies",
    role: "Head of Careers, University Partner",
  },
  {
    quote: "The structured briefs and escrow payments make hiring students completely risk-free. It's the perfect way to get high-quality help on our short-term development sprints while supporting local talent.",
    name: "Marcus Chen",
    role: "Founder, FinTech Innovators",
  },
  
  // --- 8 New Additions ---
  {
    quote: "Living outside of major tech hubs meant missing out on top internships. SkillBridge's remote micro-projects let me work with great startups from my dorm room, completely leveling the playing field.",
    name: "James O'Connor",
    role: "BSc Computer Science Student",
  },
  {
    quote: "We initially used SkillBridge for a 20-hour data cleanup sprint. The student was so impressive we ended up hiring her full-time after graduation. It's the ultimate low-risk talent pipeline.",
    name: "Elena Rostova",
    role: "CEO, DataFlow Analytics",
  },
  {
    quote: "We built the AI matching engine to look beyond just grades. It connects students to projects based on actual demonstrable skills and career aspirations, creating perfect fits for SMEs.",
    name: "Varatt Saengsiripongpun",
    role: "Co-Founder & Tech Lead, SkillBridge",
  },
  {
    quote: "The analytics dashboard is a game-changer. Seeing real-time data on which digital skills local employers are actually demanding allows us to adapt our curriculum proactively.",
    name: "Prof. David Vance",
    role: "Director of Student Experience",
  },
  {
    quote: "The co-branded digital badges I earned on SkillBridge completely transformed my LinkedIn profile. Employers finally saw proof of my skills, not just a list of university modules.",
    name: "Priya Patel",
    role: "BA Graphic Design Graduate",
  },
  {
    quote: "As a small business owner, I don't have time to sift through hundreds of CVs. SkillBridge's AI matching connected me with the exact web development student I needed in under 24 hours.",
    name: "Tom Higgins",
    role: "Owner, LocalRoast Coffee",
  },
  {
    quote: "Balancing final year studies with work is tough. The 10-hour project sprints on SkillBridge let me earn money and relevant experience without sacrificing my grades.",
    name: "Liam Davies",
    role: "MSc Data Science Student",
  },
  {
    quote: "Traditional placement years only reach a fraction of our cohort. SkillBridge allows us to offer structured, work-integrated learning to thousands of students simultaneously without the massive admin burden.",
    name: "Sarah Jenkins",
    role: "Employability Programme Manager",
  }
];

const AnimatedCounter: React.FC<CounterProps> = ({
  end,
  label,
  suffix = '',
  duration = 2,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
      <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-bold text-white mb-2"
      >
        {count.toLocaleString()}
        {suffix}
      </motion.div>
      <p className="text-slate-400 text-base">{label}</p>
    </div>
  );
};

const TestimonialConveyor: React.FC = () => {
  // Duplicating the array ensures a seamless, infinite loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 overflow-hidden bg-black text-white">
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Trusted across the Ecosystem
        </h2>
        <p className="mt-4 text-lg text-slate-300">
          Hear from the students, businesses, and universities building the future of work.
        </p>
      </div>

      {/* The mask-image property creates the smooth fade-out blur effect on the left and right edges */}
      <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <motion.div
          className="flex gap-6 w-max py-4"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
        >
          {duplicatedTestimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="w-100 md:w-100 shrink-0 bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:bg-white/8 transition-colors duration-300"
            >
              <p className="text-sm md:text-base text-slate-200 mb-6 leading-relaxed font-light">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div>
                  <p className="font-semibold text-white text-sm leading-tight">{testimonial.name}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <div className="mt-20">
      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Trusted across the Ecosystem
        </h3>
        <p className="text-slate-300 text-lg">
          Hear from the students, businesses, and universities building the future of work.
        </p>
      </div>

      {/* The mask-image property creates the smooth fade-out blur effect on the left and right edges */}
      <div 
        className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
        onMouseLeave={() => setHoveredIdx(null)}
      >
        <motion.div
          className="flex gap-6 w-max py-4"
          animate={{ x: ["-66.66%", "0%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: hoveredIdx !== null ? 300 : 180,
          }}
        >
          {duplicatedTestimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              animate={{
                opacity: hoveredIdx !== null && idx !== hoveredIdx ? 0.4 : 1,
              }}
              transition={{
                opacity: { duration: 0.3 },
              }}
              className="w-[320px] md:w-100 shrink-0 bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:bg-white/8 transition-colors duration-300 cursor-pointer"
            >
              <p className="text-sm md:text-base text-slate-200 mb-6 leading-relaxed font-light">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-white text-sm leading-tight">{testimonial.name}</p>
                <p className="text-slate-400 text-xs mt-0.5">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const ImpactSection: React.FC = () => {
  const metrics = [
    {
      end: 2500,
      label: 'Students Onboarded',
      suffix: '+',
    },
    {
      end: 450000,
      label: 'Total Earnings Generated',
      suffix: '',
    },
    {
      end: 350,
      label: 'Businesses Partnered',
      suffix: '+',
    },
    {
      end: 45,
      label: 'Universities Connected',
      suffix: '+',
    },
  ];

  return (
    <section id="impact" className="relative py-16 lg:py-20 bg-black text-white overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full mb-4 border border-white/10">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-white uppercase tracking-wide">Our Impact</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Transforming Early-Career Trajectories
          </h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  );
};

export { TestimonialConveyor };
export default ImpactSection;
