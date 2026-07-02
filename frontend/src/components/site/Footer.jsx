import React from "react";

const LOGO = "https://customer-assets.emergentagent.com/job_aurrum-quantum-ui/artifacts/d3aqalox_Final%20%283%29.png";
const SUPPORT_EMAIL = "support@aurrumintelligence.com";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="relative bg-[#f7f3e8] border-t border-dashed border-[#013aa9]/40">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-16 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <img
            src={LOGO}
            alt="Aurrum Intelligence"
            data-testid="footer-logo"
            className="w-32 h-32 sm:w-36 sm:h-36 object-cover object-center block mb-6"
            loading="lazy"
          />
          <p className="font-sans-ui text-sm text-[#013aa9]/75 max-w-md">
            Aurrum Intelligence &middot; Market intelligence platform for the independent trader.
            Institutional research, delivered pre-market, priced for retail.
          </p>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            data-testid="footer-email"
            className="mt-5 inline-block font-mono-ui text-[11px] uppercase tracking-[0.28em] text-[#013aa9] hover:underline underline-offset-4"
          >
            {SUPPORT_EMAIL}
          </a>
        </div>

        <div className="lg:col-span-5">
          <div className="font-mono-ui text-[10px] uppercase tracking-[0.32em] text-[#013aa9]/70 mb-4">Navigate</div>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2 font-sans-ui text-sm text-[#013aa9]/85">
            {[
              { l: "Intelligence", h: "#about" },
              { l: "Process", h: "#how" },
              { l: "Sample Briefing", h: "#sample" },
              { l: "Pricing", h: "#pricing" },
              { l: "Contact", h: "#contact" },
            ].map((x) => (
              <li key={x.h}>
                <a href={x.h} className="hover:underline underline-offset-4">{x.l}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-dashed border-[#013aa9]/40">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-ui text-[10px] uppercase tracking-[0.28em] text-[#013aa9]/70">
          <div>&copy; {new Date().getFullYear()} Aurrum Intelligence &middot; All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#013aa9]">Terms</a>
            <a href="#" className="hover:text-[#013aa9]">Privacy</a>
            <a href="#contact" className="hover:text-[#013aa9]">Disclosure</a>
          </div>
          <div>Not investment advice. Read carefully.</div>
        </div>
      </div>
    </footer>
  );
}
