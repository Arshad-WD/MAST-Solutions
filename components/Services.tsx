"use client";

interface ServiceItem {
  number: string;
  title: string;
  codeSnippet: string;
  description: string;
  icon: React.ReactNode;
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      number: "01",
      title: "Website Design & Dev",
      codeSnippet: "const app = NextJS.create({ latency: < 150 });",
      description: "Custom-coded, SEO-optimized Next.js systems engineered for lightning speeds, high accessibility, and flawless animations.",
      icon: (
        <svg
          className="w-6 h-6 text-accent"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <rect width="20" height="15" x="2" y="3" rx="1" />
          <path strokeLinecap="round" d="M2 14h20M6 18h.01M10 18h.01" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Business Automations",
      codeSnippet: "pipeline.connect(CRM).pipe(Email).trigger();",
      description: "We code automated workflows that bind CRM platforms, billing hubs, scheduling scripts, and notifications together.",
      icon: (
        <svg
          className="w-6 h-6 text-accent"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="5" r="3" />
          <circle cx="5" cy="19" r="3" />
          <circle cx="19" cy="19" r="3" />
          <path d="M12 8v4M5 16v-2a2 2 0 012-2h10a2 2 0 012 2v2" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Landing Pages",
      codeSnippet: "page.optimize({ conversion: 'max', css: 0 });",
      description: "Fast-loading standalone capture zones engineered with high copy density and micro-interactions that trigger actions.",
      icon: (
        <svg
          className="w-6 h-6 text-accent"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Custom Integrations",
      codeSnippet: "API.sync({ database: 'secure', delay: 0 });",
      description: "Bespoke connector APIs and middleware scripts linking legacy databases to modern software tools safely.",
      icon: (
        <svg
          className="w-6 h-6 text-accent"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 border-t border-ink/10 relative bg-paper bg-grid-dots">
      {/* Decorative vertical lines */}
      <div className="absolute inset-y-0 left-8 border-l border-ink/5 pointer-events-none hidden md:block"></div>
      <div className="absolute inset-y-0 right-8 border-l border-ink/5 pointer-events-none hidden md:block"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="lg:col-span-6 flex flex-col space-y-4">

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-ink">
              We build systems that capture value.
            </h2>
          </div>
          <div className="lg:col-span-6 flex items-end">
            <p className="text-base md:text-lg text-muted max-w-xl leading-relaxed">
              We create specialized web assets and automated workflows that streamline your operations and drive measurable results.
            </p>
          </div>
        </div>

        {/* Services Code Windows Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-[#FAF8F5] border border-ink/12 flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(18,24,36,0.06)] focus-within:ring-1 focus-within:ring-accent rounded-lg"
              tabIndex={0}
            >
              {/* Window Header Tab */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-ink/10 bg-paper/60">
                <div className="flex items-center space-x-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-ink/15 group-hover:bg-red-500/80 transition-colors duration-300"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-ink/15 group-hover:bg-yellow-500/80 transition-colors duration-300"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-ink/15 group-hover:bg-green-500/80 transition-colors duration-300"></span>
                </div>
                <span className="text-[9px] font-mono text-muted/60">{service.number} / SERVICE</span>
              </div>

              {/* Code Snippet Box */}
              <div className="px-5 py-3.5 bg-[#FAF8F5] border-b border-ink/5 flex items-center justify-between">
                <span className="text-[10px] font-mono text-ink/80 select-all overflow-x-auto scrollbar-none whitespace-nowrap">
                  {service.codeSnippet}
                </span>
                <span className="text-ink/80 ml-2">{service.icon}</span>
              </div>

              {/* Text Description Box */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-paper/20">
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold tracking-tight text-ink mb-3 group-hover:text-accent transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted leading-relaxed line-clamp-4">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-ink/5 flex justify-between items-center text-[9px] font-mono text-muted/50 uppercase">
                  <span>SERVICE BRIEF</span>
                  <span className="text-accent group-hover:underline">Inquire &gt;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
