"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur-md border-b border-border-ink py-4 shadow-sm"
          : "bg-paper/50 backdrop-blur-none border-b border-transparent py-5"
      }`}
    >
      {/* Blueprint Top Border Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-ink/5"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between relative">
        {/* Logo and Lab Indicator */}
        <div className="flex items-center space-x-8">
          <a
            href="#"
            className="group flex flex-col items-start leading-none select-none focus:outline-none"
            aria-label="Mast Design and Automation Homepage"
          >
            <span className="font-serif text-2xl font-bold tracking-tight text-ink flex items-baseline">
              MAST
              <span className="h-2 w-2 rounded-full bg-accent ml-1 transition-transform duration-300 group-hover:scale-125"></span>
            </span>
            <span className="text-[9px] tracking-[0.2em] font-sans font-medium uppercase text-muted mt-1">
              Design &amp; Automation
            </span>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10" aria-label="Desktop Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-xs font-mono uppercase tracking-wider text-ink/75 hover:text-ink transition-colors duration-200 py-1.5 group focus:outline-none focus:ring-1 focus:ring-accent"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#contact"
            className="relative px-5 py-2 text-xs font-mono uppercase tracking-widest bg-ink text-paper hover:bg-accent hover:text-paper rounded-full transition-all duration-300 border border-ink hover:border-accent shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
          >
            Let's Talk
          </a>
        </nav>

        {/* Hamburger Menu Toggle (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-ink hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded-full z-50 relative"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between relative overflow-hidden">
            <span
              className={`w-6 h-[2px] bg-current transition-all duration-300 origin-left ${
                isOpen ? "rotate-45 translate-x-[2px] translate-y-[-1px]" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-[2px] bg-current transition-all duration-300 ${
                isOpen ? "opacity-0 -translate-x-3" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-[2px] bg-current transition-all duration-300 origin-left ${
                isOpen ? "-rotate-45 translate-x-[2px] translate-y-[1px]" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-paper/98 backdrop-blur-md z-40 flex flex-col justify-center px-8 transition-transform duration-500 ease-in-out md:hidden bg-grid-dots ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ height: "100vh" }}
      >
        {/* Decorative Grid Lines in Menu */}
        <div className="absolute inset-y-0 left-8 border-l border-ink/5 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-8 border-r border-ink/5 pointer-events-none"></div>

        <div className="flex flex-col space-y-8 text-left relative z-10 pl-6 border-l border-accent/20">
          <span className="text-[10px] tracking-[0.25em] font-mono text-accent font-bold uppercase mb-2">
            NAVIGATION
          </span>
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-serif text-4xl font-normal text-ink hover:text-accent transition-colors duration-300 focus:outline-none"
              style={{
                transitionDelay: isOpen ? `${idx * 75}ms` : "0ms",
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateY(0)" : "translateY(20px)",
                transitionProperty: "opacity, transform, color",
              }}
            >
              {link.name}
            </a>
          ))}
          <div
            className="pt-8 border-t border-ink/10"
            style={{
              transitionDelay: isOpen ? `${navLinks.length * 75}ms` : "0ms",
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "translateY(0)" : "translateY(20px)",
              transitionProperty: "opacity, transform",
            }}
          >
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-block px-8 py-3.5 bg-accent text-paper font-mono text-xs uppercase tracking-widest hover:bg-accent-hover rounded-full transition-colors duration-300 shadow-md"
            >
              Let's Talk
            </a>
            <p className="mt-8 text-xs font-mono text-muted">mast.automations@gmail.com</p>
          </div>
        </div>
      </div>
    </header>
  );
}
