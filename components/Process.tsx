"use client";

interface Step {
  number: string;
  title: string;
  tag: string;
  output: string;
  description: string;
}

export default function Process() {
  const steps: Step[] = [
    {
      number: "01",
      tag: "DISCOVER",
      output: "Tech Stack Audit",
      title: "Discover",
      description: "We audit your tech stacks, trace manual workflows, and build an API integration layout detailing fields, databases, and dependencies.",
    },
    {
      number: "02",
      tag: "DESIGN",
      output: "Bespoke Design Prototypes",
      title: "Design",
      description: "We compile wireframes and structural design proposals with high typographic control. We structure layouts to be fast and convert.",
    },
    {
      number: "03",
      tag: "BUILD",
      output: "Next.js Codebase",
      title: "Build",
      description: "We write clean, high-performance Next.js apps, configure databases, connect API bridges, and link your custom CRM actions.",
    },
    {
      number: "04",
      tag: "LAUNCH",
      output: "Live Production Site",
      title: "Launch",
      description: "We conduct cross-device testing, review SEO layout scores, run production build optimizations, and launch the codebase.",
    },
  ];

  return (
    <section id="process" className="py-20 md:py-32 border-t border-ink/10 relative bg-paper">
      {/* Decorative vertical lines */}
      <div className="absolute inset-y-0 left-8 border-l border-ink/5 pointer-events-none hidden md:block"></div>
      <div className="absolute inset-y-0 right-8 border-l border-ink/5 pointer-events-none hidden md:block"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col space-y-4">

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-ink">
            How we ship value.
          </h2>
        </div>

        {/* Horizontal Pipeline (Desktop - lg and up) */}
        <div className="hidden lg:block relative mt-16 pb-8">
          {/* Main timeline axis line */}
          <div className="absolute top-[39px] left-0 w-full h-[1px] bg-ink/15"></div>

          <div className="grid grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col group">
                
                {/* Pipeline Node */}
                <div className="flex items-center mb-8 relative">
                  <div className="h-20 w-20 rounded-full border border-ink/12 bg-[#FAF8F5] flex items-center justify-center relative shadow-sm group-hover:border-accent transition-colors duration-300">
                    <span className="font-mono text-xs font-semibold text-ink group-hover:text-accent transition-colors duration-250">
                      {step.number}
                    </span>
                    {/* Glowing coordinate dot */}
                    <span className="absolute -bottom-1 left-[36px] h-2.5 w-2.5 rounded-full bg-paper border border-ink/30 flex items-center justify-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-ink/30 group-hover:bg-accent transition-colors duration-200"></span>
                    </span>
                  </div>
                  
                  {/* Status Indicator Tag */}
                  <span className="absolute left-24 top-2 font-mono text-[8px] font-bold text-accent border border-accent/25 bg-accent/3 px-1.5 py-0.5 rounded-full">
                    {step.tag}
                  </span>
                </div>

                {/* Content Block */}
                <div className="p-6 bg-[#FAF8F5] border border-ink/8 relative group-hover:-translate-y-0.5 transition-transform duration-300 rounded-lg">
                  <h3 className="font-serif text-xl font-bold tracking-tight text-ink mb-1">
                    {step.title}
                  </h3>
                  <span className="text-[9px] font-mono text-muted/65 block mb-4">
                    Deliverable: {step.output}
                  </span>
                  <p className="text-xs text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Vertical Pipeline (Mobile/Tablet - below lg) */}
        <div className="lg:hidden relative mt-8 pl-8 border-l border-ink/15 space-y-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col group">
              {/* Timeline dot marker */}
              <div className="absolute -left-[40px] top-1.5 h-4 w-4 rounded-full bg-paper border border-accent flex items-center justify-center">
                <span className="h-2.5 w-2.5 rounded-full bg-accent"></span>
              </div>

              {/* Step metadata */}
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="font-mono text-xs font-semibold text-accent">{step.number} / {step.tag}</span>
                <span className="text-[8px] font-mono text-muted font-bold border border-ink/10 px-2 py-0.5 rounded-full bg-ink/3">Deliverable: {step.output}</span>
              </div>

              {/* Content card */}
              <div className="p-5 bg-[#FAF8F5] border border-ink/10 relative rounded-lg">
                <h3 className="font-serif text-2xl font-bold tracking-tight text-ink mb-2">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
