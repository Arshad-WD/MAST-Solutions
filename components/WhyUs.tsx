"use client";

interface Differentiator {
  metric: string;
  assertion: string;
  title: string;
  subtitle: string;
  description: string;
}

export default function WhyUs() {
  const differentiators: Differentiator[] = [
    {
      metric: "14d",
      assertion: "VELOCITY APPROVED",
      title: "Fast Delivery.",
      subtitle: "Sprint cycles vs. agency wait lists",
      description: "We measure delivery milestones in single days. Because we eliminate layers of account management and meetings, we deploy working prototypes and final builds directly to you in record cycles.",
    },
    {
      metric: "100%",
      assertion: "RESPONSIVE APPROVED",
      title: "Mobile-First Always.",
      subtitle: "Custom mobile viewport optimization",
      description: "Over 60% of web transactions happen on mobile. We compile and test from the smallest screen size up, engineering 48px+ touch targets, clean scroll rails, and low asset weight.",
    },
    {
      metric: "0% / BS",
      assertion: "EFFICIENCY APPROVED",
      title: "No Bloat, No Fluff.",
      subtitle: "Bespoke clean code compilation",
      description: "We refuse to use heavy pre-built templates or third-party web builders that slow down response times. Every page is hand-crafted in Next.js for high conversion and core web vitals.",
    },
  ];

  return (
    <section id="why-us" className="py-20 md:py-32 border-t border-ink/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col space-y-4">

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-ink max-w-3xl">
            We deliver fast, reliable execution.
          </h2>
        </div>

        {/* Assertions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border border-ink/12 divide-y lg:divide-y-0 lg:divide-x divide-ink/12 bg-transparent rounded-lg overflow-hidden">
          {differentiators.map((diff, index) => (
            <div
              key={index}
              className="p-8 md:p-12 flex flex-col justify-between group hover:bg-[#FAF8F5]/50 transition-colors duration-300"
            >
              <div>
                {/* Metric and Assertion Header */}
                <div className="flex justify-between items-start mb-8">
                  <span className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-accent transition-transform duration-300 group-hover:scale-105 origin-left inline-block">
                    {diff.metric}
                  </span>
                  
                  <span className="font-mono text-[9px] font-semibold text-green-600 bg-green-600/5 px-2 py-0.5 border border-green-600/10 rounded-full">
                    {diff.assertion}
                  </span>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-ink mb-2">
                  {diff.title}
                </h3>
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted block mb-6">
                  {diff.subtitle}
                </span>
              </div>

              <p className="text-xs md:text-sm text-muted leading-relaxed">
                {diff.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
