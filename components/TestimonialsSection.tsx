"use client";

import React from "react";

const testimonials = [
  {
    name: "Noah Smith",
    company: "US OPERATOR",
    body: "100/100 Lighthouse metrics on real production builds. Our traffic conversion rate doubled instantly.",
  },
  {
    name: "Ava Green",
    company: "AU SYSTEMS",
    body: "MAST custom CRM trigger workflows saved our team 24+ manual hours every single week. Absolute magic.",
  },
  {
    name: "Maya Patel",
    company: "IN ENGINEERING",
    body: "We synced our legacy SQL databases with HubSpot in 10 days. Zero template bloat, pure systems logic.",
  },
  {
    name: "Lucas Stone",
    company: "FR DESIGN",
    body: "Outstanding mobile-first viewport scaling. The editorial blueprint theme is incredibly distinct.",
  },
  {
    name: "Ana Miller",
    company: "DE OPS",
    body: "Vertical Next.js compiler speed is pure execution. Bypassed 3 weeks of agency meeting bloat.",
  },
];

export default function TestimonialsSection() {
  return (
    <section 
      id="testimonials" 
      className="py-24 md:py-36 border-t border-ink/10 relative bg-[#F4F0EA]"
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10 flex flex-col">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end mb-16 md:mb-24">
          <div className="lg:col-span-8 flex flex-col space-y-6">
            <span className="text-[10px] tracking-[0.25em] font-mono text-accent font-semibold uppercase">
              WALL OF LOVE
            </span>
            <h2 
              data-toc-title="Wall of Love"
              className="text-[clamp(3rem,6vw,8rem)] font-serif font-semibold leading-[0.9] uppercase tracking-tight text-ink"
            >
              Tested in
              <br />
              The Field.
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end lg:pb-4">
             <p className="text-xs md:text-sm text-muted-foreground leading-relaxed max-w-sm uppercase font-mono tracking-widest">
              Trusted by global operators. We bypass bottlenecks and code high-performance web systems.
            </p>
          </div>
        </div>

        {/* Testimonials Ledger */}
        <div className="flex flex-col border-t border-ink/15">
          {testimonials.map((review, idx) => (
            <div 
              key={idx}
              className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 p-6 md:p-10 border-b border-ink/15 hover:bg-ink hover:text-[#F4F0EA] transition-all duration-500 cursor-default items-center"
            >
              <div className="md:col-span-2 hidden md:flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted group-hover:text-[#F4F0EA]/60 transition-colors">Client</span>
                <span className="font-bold text-xs uppercase tracking-wider text-ink group-hover:text-[#F4F0EA] mt-1 transition-colors">{review.name}</span>
              </div>
              
              <div className="md:col-span-8">
                <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-[1.2] tracking-tight text-ink group-hover:text-[#F4F0EA] transition-colors">
                  "{review.body}"
                </p>
              </div>

              <div className="md:col-span-2 flex justify-between items-center md:flex-col md:items-end md:justify-center h-full">
                 <div className="md:hidden flex flex-col">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted group-hover:text-[#F4F0EA]/60 transition-colors">Client</span>
                    <span className="font-bold text-xs uppercase tracking-wider text-ink group-hover:text-[#F4F0EA] mt-1 transition-colors">{review.name}</span>
                 </div>
                 <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent group-hover:text-accent transition-colors text-right">
                   [{review.company}]
                 </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info row */}
        <div className="mt-24 pt-6 border-t border-ink/10 flex justify-between items-center text-[9px] font-mono text-muted/60 uppercase">
          <span>OPERATOR REVIEWS</span>
          <span>[VERIFIED LOGS]</span>
        </div>

      </div>
    </section>
  );
}
