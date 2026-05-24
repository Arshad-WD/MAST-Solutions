"use client";

import { motion } from "framer-motion";

interface HandWrittenTitleProps {
    title?: string;
    subtitle?: string;
}

function HandWrittenTitle({
    title = "Hand Written",
    subtitle = "Optional subtitle",
}: HandWrittenTitleProps) {
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
        <div className="relative w-full max-w-4xl mx-auto py-8 sm:py-12 md:py-20 flex flex-col items-center justify-center">
            {/* Nested container wrapping ONLY the Title and its SVG Loop */}
            <div className="relative py-12 sm:py-16 md:py-20 px-6 w-full flex items-center justify-center min-h-[140px] md:min-h-[220px]">
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 1200 600"
                        preserveAspectRatio="xMidYMid meet"
                        initial="hidden"
                        animate="visible"
                        className="w-full h-full max-w-[95vw] md:max-w-full"
                    >
                        <title>KokonutUI</title>
                        <motion.path
                            d="M 950 90 
                               C 1250 300, 1050 480, 600 520
                               C 250 520, 150 480, 150 300
                               C 150 120, 350 80, 600 80
                               C 850 80, 950 180, 950 180"
                            fill="none"
                            strokeWidth="10"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            variants={draw}
                            className="text-accent/30 opacity-90"
                        />
                    </motion.svg>
                </div>
                
                <motion.h1
                    className="relative z-10 text-3xl sm:text-5xl md:text-7xl font-serif text-ink tracking-tight text-center leading-[1.1] max-w-[85%] select-none"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    {title}
                </motion.h1>
            </div>

            {/* Subtitle rendered outside the loop, avoiding alignment shift */}
            {subtitle && (
                <motion.p
                    className="relative z-10 text-[10px] sm:text-xs md:text-sm font-mono text-muted uppercase tracking-widest mt-4 max-w-2xl leading-relaxed text-center px-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
}

export { HandWrittenTitle };

