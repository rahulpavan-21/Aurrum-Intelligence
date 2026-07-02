import React, { useEffect, useState } from "react";
import MagneticButton from "./MagneticButton";

const LOGO = "https://customer-assets.emergentagent.com/job_aurrum-quantum-ui/artifacts/u7r7no9f_Final%20%282%29.png";

const links = [
  { label: "Intelligence", href: "#about" },
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
      <div className="w-full h-16 sm:h-20 flex items-stretch justify-between pr-4 sm:pr-8">
        <a
          href="#top"
          onClick={(e) => jump(e, "#top")}
          data-testid="nav-logo"
          aria-label="Aurrum Intelligence — home"
          className="flex items-stretch shrink-0"
        >
          <div
            role="img"
            aria-hidden
            className="h-16 sm:h-20 w-64 sm:w-80 shrink-0"
            style={{
              backgroundImage: `url("${LOGO}")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "auto 320%",
              backgroundPosition: "0% 48%",
            }}
          />
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
