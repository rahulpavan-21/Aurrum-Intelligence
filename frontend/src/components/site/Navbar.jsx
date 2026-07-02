import React, { useEffect, useState } from "react";
import MagneticButton from "./MagneticButton";

const links = [
  { label: "Intelligence", href: "#about" },
  { label: "Capabilities", href: "#services" },
  { label: "Process", href: "#how" },
  { label: "Briefing", href: "#sample" },
  { label: "Pricing", href: "#pricing" },
  { label: "Desk", href: "#team" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const jump = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header
      data-testid="site-navbar"
      className={
        "fixed top-0 inset-x-0 z-50 transition-all duration-500 " +
        (scrolled
          ? "backdrop-blur-xl bg-[#f7f3e8]/85 border-b border-[#013aa9]/15"
          : "bg-transparent")
      }
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 h-16 sm:h-20 flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => jump(e, "#top")}
          data-testid="nav-logo"
          className="flex items-center gap-3 text-[#013aa9]"
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
            <path d="M2 20 L8 8 L13 16 L18 6 L24 22" stroke="#013aa9" strokeWidth="1.6" strokeDasharray="3 3" fill="none" />
            <circle cx="13" cy="13" r="12" stroke="#013aa9" strokeWidth="1" fill="none" strokeDasharray="2 3" />
          </svg>
          <span className="font-display text-xl sm:text-2xl leading-none tracking-tight">
            Aurrum
            <span className="font-sans-ui text-[10px] uppercase tracking-[0.28em] ml-2 font-semibold align-middle">Intelligence</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => jump(e, l.href)}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className="font-sans-ui text-[11px] uppercase tracking-[0.22em] text-[#013aa9]/80 hover:text-[#013aa9] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <MagneticButton
            as="a"
            href="#contact"
            onClick={(e) => jump(e, "#contact")}
            className="btn-ink hidden sm:inline-flex"
            testId="nav-cta"
          >
            Get Briefing
            <span aria-hidden>→</span>
          </MagneticButton>

          <button
            data-testid="nav-menu-toggle"
            aria-label="Open menu"
            className="lg:hidden w-10 h-10 grid place-items-center border border-[#013aa9]/40"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="block w-4 h-px bg-[#013aa9]" />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-[#f7f3e8] border-t border-[#013aa9]/15">
          <div className="max-w-[1400px] mx-auto px-6 py-6 grid gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => jump(e, l.href)}
                data-testid={`nav-mobile-${l.label.toLowerCase()}`}
                className="font-sans-ui text-sm uppercase tracking-[0.22em] text-[#013aa9]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => jump(e, "#contact")}
              className="btn-ink justify-center"
              data-testid="nav-mobile-cta"
            >
              Get Briefing →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
