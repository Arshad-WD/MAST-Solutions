"use client";

export default function Footer() {
  const currentYear = 2025; // Explicitly requested "© 2025 Mast Design and Automation. All rights reserved."

  const links = [
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="w-full bg-[#FAF8F5] border-t border-ink/10 pt-16 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12">
          
          {/* Brand Column (Left - 6 cols on desktop) */}
          <div className="md:col-span-6 flex flex-col space-y-4">
            <a href="#" className="flex flex-col items-start leading-none select-none focus:outline-none">
              <span className="font-serif text-2xl font-bold tracking-tight text-ink flex items-baseline">
                MAST
                <span className="h-2 w-2 rounded-full bg-accent ml-1"></span>
              </span>
              <span className="text-[9px] tracking-[0.2em] font-sans font-medium uppercase text-muted mt-1">
                Design &amp; Automation
              </span>
            </a>
            <p className="text-sm md:text-base text-muted font-normal italic max-w-sm">
              "We build what grows your business."
            </p>
          </div>

          {/* Quick Links Column (Middle - 3 cols on desktop) */}
          <div className="md:col-span-3 flex flex-col space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-ink/75">
              Index
            </span>
            <ul className="flex flex-col space-y-2.5">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-accent transition-colors duration-250 focus:outline-none focus:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column (Right - 3 cols on desktop) */}
          <div className="md:col-span-3 flex flex-col space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-ink/75">
              Inquiries
            </span>
            <div className="flex flex-col space-y-2">
              <a
                href="mailto:mast.automations@gmail.com"
                className="text-sm text-muted hover:text-accent transition-colors duration-250 focus:outline-none"
              >
                mast.automations@gmail.com
              </a>
              <span className="text-xs text-muted/60">
                Bengaluru, IN
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-ink/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted/70">
            &copy; {currentYear} Mast Design and Automation. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-xs text-muted/60">
            <span>Design &amp; Automation</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
