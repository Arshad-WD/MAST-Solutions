"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

/* ---------------- WordsPullUp ---------------- */
interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: React.CSSProperties;
}

export const WordsPullUp = ({ text, className = "", showAsterisk = false, style }: WordsPullUpProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`inline-flex flex-wrap overflow-hidden ${className}`} style={style}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={i}
            initial={{ y: "100%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block relative"
            style={{ marginRight: isLast ? 0 : "0.25em" }}
          >
            {word}
            {showAsterisk && isLast && (
              <span className="absolute top-[0.1em] -right-[0.35em] text-[0.35em] text-accent">*</span>
            )}
          </motion.span>
        );
      })}
    </div>
  );
};

/* ---------------- HandDrawnCircle ---------------- */
const HandDrawnCircle = () => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2.5, ease: [0.43, 0.13, 0.23, 0.96] as const },
        opacity: { duration: 0.5 },
      },
    },
  };

  return (
    <motion.svg
      width="100%"
      height="100%"
      viewBox="0 0 1200 600"
      preserveAspectRatio="none"
      initial="hidden"
      animate="visible"
      className="absolute inset-0 w-full h-[150%] top-[-25%] pointer-events-none"
    >
      <motion.path
        d="M 950 90 
           C 1250 300, 1050 480, 600 520
           C 250 520, 150 480, 150 300
           C 150 120, 350 80, 600 80
           C 850 80, 950 180, 950 180"
        fill="none"
        strokeWidth="15"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={draw}
        className="text-accent/30"
      />
    </motion.svg>
  );
};

/* ---------------- PrismaHero (Adapted) ---------------- */
const PrismaHero = () => {
  return (
    <section className="min-h-[92vh] w-full pt-4">
      <div className="relative h-full min-h-[92vh] w-full overflow-hidden rounded-t-[2.5rem] bg-paper bg-grid-dots transition-colors duration-300">
        
        {/* Subtle grid lines for editorial structure */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-ink/10"></div>
        <div className="absolute left-6 md:left-12 inset-y-0 w-[1px] bg-ink/5"></div>
        <div className="absolute right-6 md:right-12 inset-y-0 w-[1px] bg-ink/5"></div>
        
        {/* Hero Content Wrapper */}
        <div className="relative z-10 flex flex-col justify-between h-full min-h-[92vh] px-6 sm:px-8 md:px-12 pt-20 pb-32 md:pb-24">
          
          {/* Centerpiece Area - Fully Centered Title */}
          <div className="flex-1 flex flex-col items-center justify-center pointer-events-none mt-[-5vh]">
            <h1
              className="font-serif font-normal leading-[1.05] tracking-[-0.04em] text-[12vw] sm:text-[10vw] lg:text-[8vw] xl:text-[8vw] text-ink flex flex-row items-center justify-center text-center z-10 relative pointer-events-auto whitespace-nowrap"
            >
              <div className="relative inline-block z-0 px-4 md:px-8 py-2">
                <HandDrawnCircle />
                <WordsPullUp text="Mast Solutions" showAsterisk />
              </div>
            </h1>
          </div>
          
          {/* Lower content */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 w-full border-t border-ink/10 pt-8 pointer-events-auto">
            
            <div className="flex flex-col space-y-3 lg:max-w-md">
               <div className="text-accent font-semibold uppercase tracking-[0.2em] font-mono text-[10px]">
                  STUDIO CAPABILITIES
               </div>
               <motion.p
                 initial={{ y: 20, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                 className="text-sm md:text-base font-sans text-muted leading-relaxed"
               >
                 We build custom, high-performance web applications and workflow automations tailored to your exact business needs.
               </motion.p>
            </div>

            <motion.a
              href="#contact"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group inline-flex items-center justify-between w-full lg:w-fit gap-6 rounded-full bg-accent py-2 pl-6 pr-2 text-xs md:text-sm font-mono font-bold uppercase tracking-widest text-paper shadow-md transition-all hover:bg-accent-hover"
            >
              <span>Initialize Project</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-paper transition-transform group-hover:scale-105">
                <ArrowRight className="h-4 w-4 text-accent" />
              </span>
            </motion.a>

          </div>
        </div>
      </div>
    </section>
  );
};

export { PrismaHero };
