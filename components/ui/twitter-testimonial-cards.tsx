"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  className?: string;
  avatar?: string;
  username?: string;
  handle?: string;
  content?: string;
  date?: string;
  verified?: boolean;
  likes?: number;
  retweets?: number;
  tweetUrl?: string;
  onHover?: () => void;
  onLeave?: () => void;
  isActive?: boolean;
  onTap?: () => void;
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function VerifiedBadge() {
  return (
    <svg
      className="size-4 text-accent"
      viewBox="0 0 22 22"
      fill="currentColor"
    >
      <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" />
    </svg>
  );
}

function TestimonialCard({
  className,
  avatar,
  username = "PEPE",
  handle = "@PEPE_bigbrother",
  content = "This is amazing! 🔥 Absolutely loving what the team is building here. Can't wait to see what comes next!",
  date = "Jan 5, 2026",
  verified = true,
  likes = 142,
  retweets = 23,
  tweetUrl = "https://x.com",
  onHover,
  onLeave,
  isActive,
  onTap,
}: TestimonialCardProps) {
  const handleClick = (e: React.MouseEvent | React.TouchEvent) => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isTouchDevice) {
      if (!isActive) {
        e.preventDefault();
        onTap?.();
      }
    }
  };

  return (
    <a
      href={tweetUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={cn(
        "relative flex h-auto min-h-[160px] sm:min-h-[190px] w-[260px] sm:w-[360px] -skew-y-[4deg] select-none flex-col bg-[#FAF8F5] border border-ink/12 px-5 py-5 transition-all duration-500 hover:border-accent hover:shadow-[0_8px_30px_rgba(18,24,36,0.08)] cursor-pointer text-ink tech-tick",
        isActive && "ring-1 ring-accent/50",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-start gap-3 mb-3 border-b border-ink/5 pb-2.5">
        <div className="size-9 sm:size-11 rounded-full bg-gradient-to-br from-accent via-accent/30 to-ink/20 flex items-center justify-center overflow-hidden shrink-0">
          {avatar ? (
            <img src={avatar} alt={username} className="w-full h-full object-cover" />
          ) : (
            <span className="text-lg sm:text-2xl">⚡</span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1">
            <span className="font-bold text-ink truncate text-xs sm:text-sm font-sans tracking-tight">{username}</span>
            {verified && <VerifiedBadge />}
          </div>
          <span className="text-muted text-[10px] sm:text-xs font-mono uppercase tracking-wide block">■ {handle}</span>
        </div>
        <TwitterIcon className="size-4 text-accent shrink-0" />
      </div>

      {/* Content */}
      <p className="text-ink/90 text-xs sm:text-[13px] leading-relaxed mb-3 line-clamp-4 font-sans">
        "{content}"
      </p>

      {/* Footer (Technical Monospace Blueprint logs) */}
      <div className="flex items-center justify-between text-[9px] font-mono text-muted uppercase mt-auto pt-2 border-t border-ink/5">
        <span>DATE: {date}</span>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <span>LIKES_{likes}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>RT_{retweets}</span>
          </div>
        </div>
      </div>
    </a>
  );
}

interface TestimonialsProps {
  cards?: TestimonialCardProps[];
}

export function Testimonials({ cards }: TestimonialsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const getCardClassName = (index: number, baseClassName: string) => {
    const focusedIndex = hoveredIndex ?? activeIndex;
    
    if (focusedIndex === 0 && index === 1) {
      return baseClassName + " !translate-y-20 sm:!translate-y-28 !translate-x-12 sm:!translate-x-20";
    }
    if (focusedIndex === 0 && index === 2) {
      return baseClassName + " !translate-y-28 sm:!translate-y-36 !translate-x-20 sm:!translate-x-32";
    }
    if (focusedIndex === 1 && index === 2) {
      return baseClassName + " !translate-y-24 sm:!translate-y-32 !translate-x-20 sm:!translate-x-32";
    }
    return baseClassName;
  };

  const handleTap = (index: number) => {
    if (activeIndex === index) {
      return;
    }
    setActiveIndex(index);
  };

  const defaultCards: TestimonialCardProps[] = [
    {
      className:
        "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:h-[100%] before:content-[''] before:bg-[#FAF8F5]/60 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-500 hover:grayscale-0 before:left-0 before:top-0 z-10",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      username: "Sarah Chen",
      handle: "@sarahchen_hq",
      content: "MAST delivered our automated CRM and Next.js frontend in just 12 days! The velocity is absolutely insane, and the code is incredibly clean. 🚀🔥",
      date: "Feb 18, 2026",
      verified: true,
      likes: 184,
      retweets: 32,
      tweetUrl: "https://x.com",
    },
    {
      className:
        "[grid-area:stack] translate-x-6 sm:translate-x-12 translate-y-4 sm:translate-y-6 hover:-translate-y-4 before:absolute before:w-[100%] before:h-[100%] before:content-[''] before:bg-[#FAF8F5]/60 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-500 hover:grayscale-0 before:left-0 before:top-0 z-20",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
      username: "Mike Henderson",
      handle: "@mikeh_ops",
      content: "No unneeded meetings, no endless consulting fluff. Just pure execution. Bypassing typical agency bloat saved us months of project delays. MAST works.",
      date: "Feb 22, 2026",
      verified: true,
      likes: 95,
      retweets: 14,
      tweetUrl: "https://x.com",
    },
    {
      className: "[grid-area:stack] translate-x-12 sm:translate-x-24 translate-y-8 sm:translate-y-12 hover:translate-y-2 sm:hover:translate-y-4 z-30",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      username: "Alex Rivera",
      handle: "@alex_architect",
      content: "Flawless mobile-first UI viewport scaling and 100/100 Core Web Vitals on our new landing funnel. The Apple-style Dynamic Island nav is chef's kiss! 👨‍🍳⚡",
      date: "May 24, 2026",
      verified: true,
      likes: 243,
      retweets: 48,
      tweetUrl: "https://x.com",
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700 select-none pb-12">
      {displayCards.map((cardProps, index) => (
        <TestimonialCard
          key={index}
          {...cardProps}
          className={getCardClassName(index, cardProps.className || "")}
          onHover={() => setHoveredIndex(index)}
          onLeave={() => setHoveredIndex(null)}
          isActive={activeIndex === index}
          onTap={() => handleTap(index)}
        />
      ))}
    </div>
  );
}
