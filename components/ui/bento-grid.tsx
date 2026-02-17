import React, { ComponentPropsWithoutRef, ReactNode, useState } from "react"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode
  className?: string
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string
  className: string
  background: ReactNode
  Icon: React.ElementType
  description: string
  href?: string
  cta?: string
  showCta?: boolean
  animation?: ReactNode
  animationType?: 'orbit' | 'lock' | 'chart' | 'none'
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

// Animation Components
const OrbitAnimation = ({ isHovered }: { isHovered: boolean }) => (
  <div className="flex items-center justify-center h-full">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>{`
          @keyframes orbit {
            from { transform: rotate(0deg) translateX(40px) rotate(0deg); }
            to { transform: rotate(360deg) translateX(40px) rotate(-360deg); }
          }
          @keyframes pulse-ring {
            0%, 100% { r: 40px; opacity: 0.3; }
            50% { r: 50px; opacity: 0; }
          }
          .orbit-dot {
            animation: orbit 20s linear infinite;
            transform-origin: 100px 100px;
          }
          .pulse-ring {
            animation: pulse-ring 3s ease-out infinite;
          }
        `}</style>
      </defs>
      <circle cx="100" cy="100" r="40" fill="rgb(99 102 241 / 0.1)" />
      <circle cx="100" cy="60" r="6" fill="rgb(59 130 246 / 0.6)" className="orbit-dot" />
      <circle cx="100" cy="100" r="40" fill="none" stroke="rgb(99 102 241 / 0.2)" strokeWidth="2" className="pulse-ring" />
    </svg>
  </div>
)

const LockAnimation = ({ isHovered }: { isHovered: boolean }) => (
  <div className="flex items-center justify-center h-full">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>{`
          @keyframes lock-rotate {
            0%, 100% { transform: rotate(-5deg); }
            50% { transform: rotate(5deg); }
          }
          @keyframes scale-pulse {
            0%, 100% { transform: scale(1); opacity: 0.4; }
            50% { transform: scale(1.1); opacity: 0.8; }
          }
          .lock-icon {
            animation: lock-rotate 4s ease-in-out infinite;
          }
          .lock-ring {
            animation: scale-pulse 3s ease-in-out infinite;
          }
        `}</style>
      </defs>
      <g className="lock-icon" transform="translate(100, 100)">
        <rect x="-20" y="-10" width="40" height="35" rx="4" fill="none" stroke="rgb(16 185 129 / 0.5)" strokeWidth="2" />
        <path d="M -12 -10 Q -12 -25 0 -25 Q 12 -25 12 -10" fill="none" stroke="rgb(16 185 129 / 0.5)" strokeWidth="2" />
        <circle cx="0" cy="8" r="3" fill="rgb(16 185 129 / 0.5)" />
      </g>
      <circle cx="100" cy="100" r="55" fill="none" stroke="rgb(16 185 129 / 0.3)" strokeWidth="2" className="lock-ring" />
    </svg>
  </div>
)

const ChartAnimation = ({ isHovered }: { isHovered: boolean }) => (
  <div className="flex items-center justify-center h-full">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>{`
          @keyframes chart-bar-1 {
            0%, 100% { height: 20px; }
            50% { height: 60px; }
          }
          @keyframes chart-bar-2 {
            0%, 100% { height: 40px; }
            50% { height: 80px; }
          }
          @keyframes chart-bar-3 {
            0%, 100% { height: 30px; }
            50% { height: 70px; }
          }
          .bar-1 { animation: chart-bar-1 2s ease-in-out infinite; }
          .bar-2 { animation: chart-bar-2 2s ease-in-out infinite 0.2s; }
          .bar-3 { animation: chart-bar-3 2s ease-in-out infinite 0.4s; }
        `}</style>
      </defs>
      <g transform="translate(100, 120)">
        <rect x="-30" y="0" width="12" height="20" fill="rgb(6 182 212 / 0.6)" className="bar-1" />
        <rect x="-8" y="0" width="12" height="40" fill="rgb(59 130 246 / 0.6)" className="bar-2" />
        <rect x="14" y="0" width="12" height="30" fill="rgb(34 197 94 / 0.6)" className="bar-3" />
      </g>
      <line x1="60" y1="130" x2="140" y2="80" stroke="rgb(6 182 212 / 0.3)" strokeWidth="2" />
      <circle cx="140" cy="80" r="4" fill="rgb(6 182 212 / 0.6)" />
    </svg>
  </div>
)

const getAnimationForType = (type?: 'orbit' | 'lock' | 'chart' | 'none', isHovered?: boolean) => {
  switch (type) {
    case 'orbit':
      return <OrbitAnimation isHovered={isHovered || false} />
    case 'lock':
      return <LockAnimation isHovered={isHovered || false} />
    case 'chart':
      return <ChartAnimation isHovered={isHovered || false} />
    default:
      return null
  }
}

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  showCta = true,
  animation,
  animationType,
  ...props
}: BentoCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const displayAnimation = animation || getAnimationForType(animationType, isHovered)

  return (
    <motion.div
      key={name}
      className={cn(
        "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
        // light styles
        "bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "dark:bg-background transform-gpu dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      <div>{background}</div>
      
      {displayAnimation && (
        <motion.div 
          className="absolute inset-0 z-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0.6 }}
          transition={{ duration: 0.3 }}
        >
          {displayAnimation}
        </motion.div>
      )}
      
      <div className="relative z-10 flex flex-col justify-between h-full p-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <Icon className="h-10 w-10 text-neutral-700 shrink-0" />
            <h3 className="text-xl font-semibold text-black leading-tight">
              {name}
            </h3>
          </div>
          <p className="text-sm text-black leading-relaxed">{description}</p>
        </div>

        {showCta && cta && href && (
          <Button
            variant="link"
            asChild
            size="sm"
            className="pointer-events-auto p-0 w-fit text-neutral-700 hover:text-neutral-900"
          >
            <a href={href} className="flex items-center gap-2">
              {cta}
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </Button>
        )}
      </div>
    </motion.div>
  )
}

export { BentoCard, BentoGrid }
