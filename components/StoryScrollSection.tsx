"use client";

import React, { useState } from "react";
import FlowArt, { FlowSection } from "@/components/ui/story-scroll";
import { Terminal, Cpu, Zap, Layout, Settings, Compass, Layers, CheckCircle2, ArrowRight, Folder, FileCode, Play, Eye } from "lucide-react";

type ServiceTab = "web_dev" | "automation" | "landing" | "integrations";

export default function StoryScrollSection() {
  const [activeTab, setActiveTab] = useState<ServiceTab>("web_dev");

  return (
    <FlowArt aria-label="Mast Capabilities and Processes">
      
      {/* SECTION 1: THE CAPABILITIES WORKBENCH (SERVICES) */}
      <FlowSection 
        id="services"
        aria-label="Capabilities" 
        style={{ backgroundColor: "#121824", color: "#F4F0EA" }}
        className="border-b border-paper/10 flex flex-col justify-between"
      >
        {/* Slide Metadata Header */}
        <div className="flex justify-between items-center text-[9px] font-mono text-muted-foreground uppercase tracking-[0.25em] border-b border-paper/10 pb-4 w-full">
          <span>01 — STUDIO CAPABILITIES</span>
          <span className="hidden sm:inline">CAPABILITIES WORKBENCH</span>
          <span>REVISION: v1.0</span>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch my-auto flex-1 py-8">
          
          {/* Column Left: Asymmetric Editorial Pitch */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-6">

            
            <h2 
              data-toc-title="Capabilities"
              className="text-[clamp(2rem,4.5vw,6rem)] font-serif font-semibold leading-[0.95] uppercase tracking-tight text-[#F4F0EA]"
            >
              Systems
              <br />
              We Code.
            </h2>
            
            <p className="text-xs md:text-sm text-muted-foreground/80 leading-relaxed font-sans max-w-sm pt-2">
              We bypass typical agency slide decks. We write specialized web assets and build trigger-workflows that eliminate manual operational overhead.
            </p>

            {/* Micro directory summary */}
            <div className="hidden lg:flex flex-col space-y-1.5 border-t border-paper/10 pt-6 font-sans text-xs text-[#F4F0EA]/60">
              <div className="font-mono text-[9px] text-accent uppercase tracking-wider font-bold mb-1">Architecture</div>
              <div>• Next.js + React 19 Engine</div>
              <div>• Lightning Fast Response Times</div>
            </div>
          </div>

          {/* Column Right: Technical Dossier Split Layout */}
          <div className="lg:col-span-8 flex flex-col lg:flex-row w-full lg:border-l border-paper/10 pt-12 lg:pt-0">
            
            {/* Huge Editorial Menu (Left side of right column) */}
            <div className="lg:w-[45%] flex flex-col space-y-0 border-b lg:border-b-0 lg:border-r border-paper/10 pb-8 lg:pb-0 pr-0 lg:pr-8">
              <div className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-[0.25em] mb-8 font-bold lg:pl-8">
                SERVICES INDEX
              </div>
              
              <div className="flex flex-col space-y-6 lg:pl-8">
                <button 
                  onMouseEnter={() => setActiveTab("web_dev")}
                  onClick={() => setActiveTab("web_dev")}
                  className={`text-left transition-all duration-300 group ${activeTab === "web_dev" ? "text-accent opacity-100 pl-4 border-l-[3px] border-accent" : "text-[#F4F0EA] opacity-30 hover:opacity-60 pl-4 border-l-[3px] border-transparent"}`}
                >
                  <span className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight block leading-[1.1]">Web</span>
                  <span className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight block leading-[1.1]">Development</span>
                </button>

                <button 
                  onMouseEnter={() => setActiveTab("automation")}
                  onClick={() => setActiveTab("automation")}
                  className={`text-left transition-all duration-300 group ${activeTab === "automation" ? "text-accent opacity-100 pl-4 border-l-[3px] border-accent" : "text-[#F4F0EA] opacity-30 hover:opacity-60 pl-4 border-l-[3px] border-transparent"}`}
                >
                  <span className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight block leading-[1.1]">CRM &</span>
                  <span className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight block leading-[1.1]">Automations</span>
                </button>

                <button 
                  onMouseEnter={() => setActiveTab("landing")}
                  onClick={() => setActiveTab("landing")}
                  className={`text-left transition-all duration-300 group ${activeTab === "landing" ? "text-accent opacity-100 pl-4 border-l-[3px] border-accent" : "text-[#F4F0EA] opacity-30 hover:opacity-60 pl-4 border-l-[3px] border-transparent"}`}
                >
                  <span className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight block leading-[1.1]">Landing</span>
                  <span className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight block leading-[1.1]">Funnels</span>
                </button>

                <button 
                  onMouseEnter={() => setActiveTab("integrations")}
                  onClick={() => setActiveTab("integrations")}
                  className={`text-left transition-all duration-300 group ${activeTab === "integrations" ? "text-accent opacity-100 pl-4 border-l-[3px] border-accent" : "text-[#F4F0EA] opacity-30 hover:opacity-60 pl-4 border-l-[3px] border-transparent"}`}
                >
                  <span className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight block leading-[1.1]">Custom</span>
                  <span className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight block leading-[1.1]">Integrations</span>
                </button>
              </div>
            </div>

            {/* Spec Sheet Display (Right side of right column) */}
            <div className="lg:w-[55%] pt-8 lg:pt-0 lg:pl-10 flex flex-col justify-center min-h-[350px]">
              
              <div className="flex-1 flex flex-col justify-center font-sans">
                {activeTab === "web_dev" && (
                  <div className="space-y-6 animate-fade-in-up">
                    <div className="text-accent font-semibold font-mono text-[10px] uppercase tracking-widest border-b border-paper/10 pb-2 inline-block">WEB ARCHITECTURE</div>
                    <h3 data-toc-ignore className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#F4F0EA] leading-tight">
                      Next-Gen Core Web Architecture
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed md:max-w-md">
                      Custom-coded, lightning-fast Next.js portals optimized for Core Web Vitals, flawless animations, semantic SEO structures, and dynamic responsive viewport scales.
                    </p>
                    <pre className="p-4 bg-[#0A0F1D]/50 border-l-2 border-accent text-[#F4F0EA]/80 overflow-x-auto scrollbar-none text-[10px] leading-relaxed font-mono">
                      <code>{`const site = NextJS.compile({
  latency: "< 120ms",
  lighthouse: "100/100",
  optimizations: ["seo", "mobile", "animations"]
});`}</code>
                    </pre>
                  </div>
                )}

                {activeTab === "automation" && (
                  <div className="space-y-6 animate-fade-in-up">
                    <div className="text-accent font-semibold font-mono text-[10px] uppercase tracking-widest border-b border-paper/10 pb-2 inline-block">CRM & AUTOMATIONS</div>
                    <h3 data-toc-ignore className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#F4F0EA] leading-tight">
                      Frictionless Automated Pipeline
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed md:max-w-md">
                      We build custom event bridges, webhook listeners, scheduling triggers, and automation pipelines linking CRM platforms, billing hubs, and email infrastructure together.
                    </p>
                    <pre className="p-4 bg-[#0A0F1D]/50 border-l-2 border-accent text-[#F4F0EA]/80 overflow-x-auto scrollbar-none text-[10px] leading-relaxed font-mono">
                      <code>{`def trigger_event_bridge(lead):
    pipeline = connect_crm(provider="HubSpot")
    pipeline.sync_fields(lead.payload)
    pipeline.notify_slack(channel="#leads")`}</code>
                    </pre>
                  </div>
                )}

                {activeTab === "landing" && (
                  <div className="space-y-6 animate-fade-in-up">
                    <div className="text-accent font-semibold font-mono text-[10px] uppercase tracking-widest border-b border-paper/10 pb-2 inline-block">LANDING FUNNELS</div>
                    <h3 data-toc-ignore className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#F4F0EA] leading-tight">
                      High-Conversion Capture Portals
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed md:max-w-md">
                      Fast-loading landing hubs engineered with high copy density, custom micro-interactions, responsive form payloads, and animated swipe submission buttons.
                    </p>
                    <pre className="p-4 bg-[#0A0F1D]/50 border-l-2 border-accent text-[#F4F0EA]/80 overflow-x-auto scrollbar-none text-[10px] leading-relaxed font-mono">
                      <code>{`export default function LandingFunnel() {
  return (
    <Page optimize={{ conversion: "max" }}>
      <InteractiveForm swipeAction={submitPayload} />
    </Page>
  );
}`}</code>
                    </pre>
                  </div>
                )}

                {activeTab === "integrations" && (
                  <div className="space-y-6 animate-fade-in-up">
                    <div className="text-accent font-semibold font-mono text-[10px] uppercase tracking-widest border-b border-paper/10 pb-2 inline-block">CUSTOM INTEGRATIONS</div>
                    <h3 data-toc-ignore className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#F4F0EA] leading-tight">
                      Bespoke Secure Connectors
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed md:max-w-md">
                      Custom middleware integrations, database synchronizers, and legacy platform connectors compiled to securely bridge software silos and eliminate administrative overhead.
                    </p>
                    <pre className="p-4 bg-[#0A0F1D]/50 border-l-2 border-accent text-[#F4F0EA]/80 overflow-x-auto scrollbar-none text-[10px] leading-relaxed font-mono">
                      <code>{`func SyncLegacyDatabase(ctx context.Context) {
  conn := ConnectSQL(secure=true)
  defer conn.Close()
  conn.SyncBatch(ctx, "0ms_delay")
}`}</code>
                    </pre>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Footer info row */}
        <div className="mt-auto pt-6 border-t border-paper/10 flex justify-between items-center text-[9px] font-mono text-muted-foreground/60 uppercase">
          <span>STUDIO CAPABILITIES</span>
          <span>[SYSTEMS: ACTIVE]</span>
        </div>
      </FlowSection>

      {/* SECTION 2: THE DIAGNOSTIC ASSERTION GRID (WHY US) */}
      <FlowSection 
        id="why-us"
        aria-label="Benchmarks" 
        style={{ backgroundColor: "#F4F0EA", color: "#121824" }}
        className="border-b border-ink/10 flex flex-col justify-between"
      >
        {/* Slide Metadata Header */}
        <div className="flex justify-between items-center text-[10px] font-mono text-muted uppercase tracking-[0.25em] border-b border-ink/10 pb-4 w-full">
          <span>02 — BENCHMARKS</span>
          <span className="hidden sm:inline">STUDIO PERFORMANCE</span>
          <span>STATUS: VERIFIED</span>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center my-auto flex-1 py-8">
          
          {/* Column Left: Big Serif Title */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <span className="text-[10px] tracking-[0.25em] font-mono text-accent font-semibold uppercase">
              PERFORMANCE STANDARD
            </span>
            <h2 
              data-toc-title="Benchmarks"
              className="text-[clamp(2rem,4.5vw,6rem)] font-serif font-semibold leading-[0.95] uppercase tracking-tight text-accent"
            >
              Zero
              <br />
              Bloat.
              <br />
              Pure
              <br />
              Execution.
            </h2>
            <p className="text-xs md:text-sm text-muted leading-relaxed font-sans max-w-sm">
              Traditional agencies compile code on unneeded visual page templates, dragging down load times. We hand-write customized code to yield pristine diagnostic metrics.
            </p>
          </div>

          {/* Column Right: Editorial Horizontal Rows */}
          <div className="lg:col-span-8 flex flex-col border-t border-ink/15 w-full">
            
            {/* Metric Row 1 */}
            <div className="group flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 lg:p-10 border-b border-ink/15 hover:bg-ink hover:text-paper transition-all duration-500 cursor-default">
              <div className="flex items-center gap-6 md:gap-8 md:w-1/2">
                <span className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-ink group-hover:text-accent transition-colors duration-500 w-[120px] md:w-[150px] shrink-0">14d</span>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-bold tracking-tight mb-1 md:mb-2 text-ink group-hover:text-paper transition-colors duration-500">Average Delivery</h3>
                  <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-muted group-hover:text-paper/60 transition-colors">Sprint Cycles</span>
                </div>
              </div>
              <p className="text-xs md:text-sm text-muted group-hover:text-paper/80 leading-relaxed font-sans md:w-5/12 mt-4 md:mt-0 transition-colors duration-500">
                We deploy fully interactive staging links within days. Because we eliminate middle-management meetings, we build systems directly at the speed of logic.
              </p>
            </div>

            {/* Metric Row 2 */}
            <div className="group flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 lg:p-10 border-b border-ink/15 hover:bg-ink hover:text-paper transition-all duration-500 cursor-default">
              <div className="flex items-center gap-6 md:gap-8 md:w-1/2">
                <span className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-ink group-hover:text-accent transition-colors duration-500 w-[120px] md:w-[150px] shrink-0">100%</span>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-bold tracking-tight mb-1 md:mb-2 text-ink group-hover:text-paper transition-colors duration-500">Mobile-First UI</h3>
                  <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-muted group-hover:text-paper/60 transition-colors">Viewport Scaling</span>
                </div>
              </div>
              <p className="text-xs md:text-sm text-muted group-hover:text-paper/80 leading-relaxed font-sans md:w-5/12 mt-4 md:mt-0 transition-colors duration-500">
                We program from the smallest mobile device up. 48px+ touch rail targets, lightweight asset payloads, and dynamic HSL layout conversions.
              </p>
            </div>

            {/* Metric Row 3 */}
            <div className="group flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 lg:p-10 border-b border-ink/15 hover:bg-ink hover:text-paper transition-all duration-500 cursor-default">
              <div className="flex items-center gap-6 md:gap-8 md:w-1/2">
                <span className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-ink group-hover:text-accent transition-colors duration-500 w-[120px] md:w-[150px] shrink-0">0%</span>
                <div>
                  <h3 data-toc-title="No Template Bloat" className="font-serif text-xl md:text-2xl lg:text-3xl font-bold tracking-tight mb-1 md:mb-2 text-ink group-hover:text-paper transition-colors duration-500">No Bloat</h3>
                  <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-muted group-hover:text-paper/60 transition-colors">Bespoke Architecture</span>
                </div>
              </div>
              <p className="text-xs md:text-sm text-muted group-hover:text-paper/80 leading-relaxed font-sans md:w-5/12 mt-4 md:mt-0 transition-colors duration-500">
                Every section, code block, and script is hand-engineered without heavy visual page builder overhead. High conversion is the default.
              </p>
            </div>
            
          </div>
        </div>

        {/* Footer info row */}
        <div className="mt-auto pt-6 border-t border-ink/10 flex justify-between items-center text-[9px] font-mono text-muted/60 uppercase">
          <span>MAST BENCHMARKS</span>
          <span>[METRICS: ALL PASSED]</span>
        </div>
      </FlowSection>

      {/* SECTION 3: THE PIPELINE DIAGRAM (PROCESS) */}
      <FlowSection 
        id="process"
        aria-label="Process" 
        style={{ backgroundColor: "#C65135", color: "#F4F0EA" }}
        className="border-b border-paper/10 flex flex-col justify-between"
      >
        {/* Slide Metadata Header */}
        <div className="flex justify-between items-center text-[10px] font-mono text-[#F4F0EA]/80 uppercase tracking-[0.25em] border-b border-[#F4F0EA]/20 pb-4 w-full">
          <span>03 — DEVELOPMENT PROCESS</span>
          <span className="hidden sm:inline">CHRONOLOGY</span>
          <span>STATE: ACTIVE</span>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center my-auto flex-1 py-8">
          
          {/* Column Left: Big Serif Title */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <span className="text-[10px] tracking-[0.25em] font-mono text-[#F4F0EA] font-semibold uppercase">
              OUR PROCESS
            </span>
            <h2 
              data-toc-title="Pipeline Stages"
              className="text-[clamp(2rem,4.5vw,6rem)] font-serif font-semibold leading-[0.95] uppercase tracking-tight text-[#F4F0EA]"
            >
              Engineered
              <br />
              To
              <br />
              Ship.
            </h2>
            <p className="text-xs md:text-sm text-[#F4F0EA]/85 leading-relaxed font-sans max-w-sm">
              We leverage an agile four-stage compile pipeline to audit, wireframe, engineer, and deploy clean codebases that serve a clear financial purpose.
            </p>
          </div>

          {/* Column Right: Vertical Architectural Timeline */}
          <div className="lg:col-span-8 flex flex-col w-full relative group lg:border-l border-paper/10 lg:pl-16 mt-12 lg:mt-0 pb-8">
            
            {/* Step 1 Node */}
            <div className="relative py-8 md:py-12 transition-all duration-500 opacity-100 group-hover:opacity-20 hover:!opacity-100 cursor-default">
              {/* Massive Watermark Number */}
              <div className="absolute top-1/2 -translate-y-1/2 left-[-1rem] lg:left-[-5.5rem] text-[8rem] md:text-[14rem] font-serif font-bold text-paper/5 pointer-events-none select-none -z-10 leading-none">01</div>
              
              {/* Timeline Dot (Desktop only) */}
              <div className="hidden lg:block absolute left-[-4.25rem] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-paper/30 ring-4 ring-[#C65135]"></div>
              
              <div className="max-w-xl pl-4 lg:pl-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-mono text-paper/50 uppercase tracking-widest">STEP 01</span>
                  <div className="h-[1px] w-8 bg-paper/20"></div>
                  <Compass className="w-4 h-4 text-paper/50" />
                </div>
                <h3 data-toc-title="01 / Audit & Design" className="font-serif text-2xl md:text-4xl font-bold tracking-tight text-[#F4F0EA] mb-3 md:mb-4">Audit & Design</h3>
                <p className="text-xs md:text-sm text-[#F4F0EA]/75 leading-relaxed font-sans mb-5 md:mb-6">
                  We audit your technology stack, map custom data structures, and detail every API bridge, database, and structural dependency.
                </p>
                <div className="inline-block border border-paper/10 bg-paper/5 px-3 py-1.5 text-[9px] font-mono text-[#F4F0EA]/60 uppercase tracking-widest rounded">
                  Deliverable: Tech Stack Audit
                </div>
              </div>
            </div>

            {/* Step 2 Node */}
            <div className="relative py-8 md:py-12 transition-all duration-500 opacity-100 group-hover:opacity-20 hover:!opacity-100 cursor-default">
              {/* Massive Watermark Number */}
              <div className="absolute top-1/2 -translate-y-1/2 left-[-1rem] lg:left-[-5.5rem] text-[8rem] md:text-[14rem] font-serif font-bold text-paper/5 pointer-events-none select-none -z-10 leading-none">02</div>
              
              {/* Timeline Dot (Desktop only) */}
              <div className="hidden lg:block absolute left-[-4.25rem] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-paper/30 ring-4 ring-[#C65135]"></div>
              
              <div className="max-w-xl pl-4 lg:pl-0 lg:ml-12">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-mono text-paper/50 uppercase tracking-widest">STEP 02</span>
                  <div className="h-[1px] w-8 bg-paper/20"></div>
                  <Layers className="w-4 h-4 text-paper/50" />
                </div>
                <h3 data-toc-title="02 / Typographic UX" className="font-serif text-2xl md:text-4xl font-bold tracking-tight text-[#F4F0EA] mb-3 md:mb-4">Typographic UX</h3>
                <p className="text-xs md:text-sm text-[#F4F0EA]/75 leading-relaxed font-sans mb-5 md:mb-6">
                  We build structural layout blueprints with precise typography. We design interface systems optimized for conversion and fast mobile viewports.
                </p>
                <div className="inline-block border border-paper/10 bg-paper/5 px-3 py-1.5 text-[9px] font-mono text-[#F4F0EA]/60 uppercase tracking-widest rounded">
                  Deliverable: Responsive Design
                </div>
              </div>
            </div>

            {/* Step 3 Node */}
            <div className="relative py-8 md:py-12 transition-all duration-500 opacity-100 group-hover:opacity-20 hover:!opacity-100 cursor-default">
              {/* Massive Watermark Number */}
              <div className="absolute top-1/2 -translate-y-1/2 left-[-1rem] lg:left-[-5.5rem] text-[8rem] md:text-[14rem] font-serif font-bold text-paper/5 pointer-events-none select-none -z-10 leading-none">03</div>
              
              {/* Timeline Dot (Desktop only) */}
              <div className="hidden lg:block absolute left-[-4.25rem] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-paper/30 ring-4 ring-[#C65135]"></div>
              
              <div className="max-w-xl pl-4 lg:pl-0 lg:ml-24">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-mono text-paper/50 uppercase tracking-widest">STEP 03</span>
                  <div className="h-[1px] w-8 bg-paper/20"></div>
                  <Cpu className="w-4 h-4 text-paper/50" />
                </div>
                <h3 data-toc-title="03 / Clean Compile" className="font-serif text-2xl md:text-4xl font-bold tracking-tight text-[#F4F0EA] mb-3 md:mb-4">Clean Compile</h3>
                <p className="text-xs md:text-sm text-[#F4F0EA]/75 leading-relaxed font-sans mb-5 md:mb-6">
                  We write custom high-performance Next.js code, establish backend schema bridges, compile trigger webhooks, and map CRM actions.
                </p>
                <div className="inline-block border border-paper/10 bg-paper/5 px-3 py-1.5 text-[9px] font-mono text-[#F4F0EA]/60 uppercase tracking-widest rounded">
                  Deliverable: Next.js Codebase
                </div>
              </div>
            </div>

            {/* Step 4 Node */}
            <div className="relative py-8 md:py-12 transition-all duration-500 opacity-100 group-hover:opacity-20 hover:!opacity-100 cursor-default">
              {/* Massive Watermark Number */}
              <div className="absolute top-1/2 -translate-y-1/2 left-[-1rem] lg:left-[-5.5rem] text-[8rem] md:text-[14rem] font-serif font-bold text-paper/5 pointer-events-none select-none -z-10 leading-none">04</div>
              
              {/* Timeline Dot (Desktop only) */}
              <div className="hidden lg:block absolute left-[-4.25rem] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-paper/30 ring-4 ring-[#C65135]"></div>
              
              <div className="max-w-xl pl-4 lg:pl-0 lg:ml-36">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-mono text-paper/50 uppercase tracking-widest">STEP 04</span>
                  <div className="h-[1px] w-8 bg-paper/20"></div>
                  <CheckCircle2 className="w-4 h-4 text-paper/50" />
                </div>
                <h3 data-toc-title="04 / Deployment" className="font-serif text-2xl md:text-4xl font-bold tracking-tight text-[#F4F0EA] mb-3 md:mb-4">Deployment</h3>
                <p className="text-xs md:text-sm text-[#F4F0EA]/75 leading-relaxed font-sans mb-5 md:mb-6">
                  We run performance diagnostic stress-testing, check responsive viewport targets, optimize CSS asset weights, and deploy the codebase.
                </p>
                <div className="inline-block border border-paper/10 bg-paper/5 px-3 py-1.5 text-[9px] font-mono text-[#F4F0EA]/60 uppercase tracking-widest rounded">
                  Deliverable: Live Production Site
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer info row */}
        <div className="mt-auto pt-6 border-t border-[#F4F0EA]/20 flex justify-between items-center text-[9px] font-mono text-[#F4F0EA]/60 uppercase">
          <span>STUDIO WORKFLOW</span>
          <span>[SYSTEMS: DEPLOYED]</span>
        </div>
      </FlowSection>

      {/* SECTION 4: THE PRINTED MANIFESTO (VISION) */}
      <FlowSection 
        id="vision"
        aria-label="Vision" 
        style={{ backgroundColor: "#0A0F1D", color: "#F4F0EA" }}
        className="border-b border-ink/10 flex flex-col justify-between"
      >
        {/* Slide Metadata Header */}
        <div className="flex justify-between items-center text-[10px] font-mono text-muted-foreground uppercase tracking-[0.25em] border-b border-paper/10 pb-4 w-full">
          <span>04 — STUDIO VISION</span>
          <span className="hidden sm:inline">DIGITAL CRAFTSMANSHIP</span>
          <span>STATUS: ACTIVE</span>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center my-auto flex-1 py-8">
          
          {/* Column Left: Asymmetric Pitch */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <span className="text-[10px] tracking-[0.25em] font-mono text-accent font-semibold uppercase">
              OUR VISION
            </span>
            
            <h2 
              data-toc-title="Our Vision"
              className="text-[clamp(2rem,4.5vw,6rem)] font-serif font-semibold leading-[0.95] uppercase tracking-tight text-[#F4F0EA]"
            >
              Future
              <br />
              Of
              <br />
              Art &amp; Tech.
            </h2>
            
            <p className="text-xs md:text-sm text-muted-foreground/80 leading-relaxed font-sans max-w-sm">
              We are not just designing static interfaces. We engineer high-velocity custom web systems designed directly to eliminate operational friction and scale client conversions.
            </p>
          </div>

          {/* Column Right: Massive Manifesto Blockquote */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-12 md:space-y-16 pl-0 lg:pl-12">
            
            {/* Manifesto Quote Box */}
            <div className="relative border-l-[3px] md:border-l-[4px] border-accent pl-6 md:pl-10 py-2 md:py-4">
              <p className="text-2xl md:text-4xl lg:text-5xl text-[#F4F0EA] italic font-serif leading-[1.15] md:leading-[1.15] max-w-3xl tracking-tight">
                "Traditional digital agencies are bogged down in bloated team overhead, infinite stand-up meetings, and unneeded wireframes. We cut through the noise, engineering robust custom systems that load in milliseconds and convert traffic immediately."
              </p>
            </div>
            
            {/* Initialize pipeline trigger */}
            <div className="flex">
              <a 
                href="#contact" 
                className="group inline-flex items-center space-x-4 px-10 md:px-12 py-4 md:py-5 bg-transparent border border-accent text-accent font-mono text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-accent hover:text-paper rounded-full transition-all duration-500 shadow-[0_0_0_0_rgba(198,81,53,0)] hover:shadow-[0_0_30px_0_rgba(198,81,53,0.4)]"
              >
                <span className="font-bold">Initialize Pipeline</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-500 group-hover:translate-x-2" />
              </a>
            </div>

          </div>
        </div>

        {/* Footer info row */}
        <div className="mt-auto pt-6 border-t border-paper/10 flex justify-between items-center text-[9px] font-mono text-muted-foreground/60 uppercase">
          <span>STUDIO BLUEPRINT</span>
          <span>[SYSTEMS: READY]</span>
        </div>
      </FlowSection>

    </FlowArt>
  );
}
