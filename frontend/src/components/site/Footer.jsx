import React, { useState } from "react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const LOGO = "https://customer-assets.emergentagent.com/job_aurrum-quantum-ui/artifacts/u7r7no9f_Final%20%282%29.png";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle");

  const onSubscribe = async (e) => {
    e.preventDefault();
    setState("loading");
    try {
      await axios.post(`${API}/subscribe`, { email });
      setState("ok");
      setEmail("");
    } catch { setState("err"); }
  };

  return (
    <footer data-testid="site-footer" className="relative bg-[#f7f3e8] border-t border-dashed border-[#013aa9]/40">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-20 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <img src={LOGO} alt="Aurrum Intelligence" className="w-52 mb-8" data-testid="footer-logo" />
          <p className="font-sans-ui text-sm text-[#013aa9]/75 max-w-md">
            Aurrum Intelligence · Market intelligence platform for the independent trader.
            Institutional research, delivered pre-market, priced for retail.
          </p>
        </div>

        <div className="lg:col-span-3">
          <div className="font-mono-ui text-[10px] uppercase tracking-[0.32em] text-[#013aa9]/70 mb-4">Navigate</div>
          <ul className="space-y-2 font-sans-ui text-sm text-[#013aa9]/85">
            {[
              { l: "Intelligence", h: "#about" },
              { l: "Capabilities", h: "#services" },
              { l: "Process", h: "#how" },
              { l: "Sample Briefing", h: "#sample" },
              { l: "Pricing", h: "#pricing" },
              { l: "The Desk", h: "#team" },
              { l: "Contact", h: "#contact" },
            ].map((x) => (
              <li key={x.h}>
                <a href={x.h} className="hover:underline underline-offset-4">{x.l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <div className="font-mono-ui text-[10px] uppercase tracking-[0.32em] text-[#013aa9]/70 mb-4">The Wire · Free weekly</div>
          <p className="font-sans-ui text-sm text-[#013aa9]/75 mb-4">
            One free excerpt from the daily briefing. Every Sunday.
          </p>
          <form onSubmit={onSubscribe} className="flex items-stretch border border-[#013aa9]" data-testid="footer-newsletter">
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email"
              className="flex-1 bg-transparent px-4 py-3 font-sans-ui text-sm text-[#013aa9] outline-none placeholder-[#013aa9]/40"
              data-testid="footer-newsletter-input"
            />
            <button
              type="submit"
              className="px-5 bg-[#013aa9] text-[#f7f3e8] font-mono-ui text-[10px] uppercase tracking-[0.28em]"
              data-testid="footer-newsletter-submit"
            >
              {state === "loading" ? "…" : state === "ok" ? "Subscribed" : "Subscribe →"}
            </button>
          </form>
          {state === "ok" && <div className="mt-3 font-mono-ui text-[10px] uppercase tracking-[0.28em] text-[#013aa9]/70">✓ Confirmed. First issue this Sunday.</div>}
          {state === "err" && <div className="mt-3 font-mono-ui text-[10px] uppercase tracking-[0.28em] text-[#b02929]">Something failed. Try again.</div>}
        </div>
      </div>

      <div className="border-t border-dashed border-[#013aa9]/40">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-ui text-[10px] uppercase tracking-[0.28em] text-[#013aa9]/70">
          <div>© {new Date().getFullYear()} Aurrum Intelligence · All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#013aa9]">Terms</a>
            <a href="#" className="hover:text-[#013aa9]">Privacy</a>
            <a href="#" className="hover:text-[#013aa9]">Disclosure</a>
          </div>
          <div>Not investment advice. Read carefully.</div>
        </div>
      </div>
    </footer>
  );
}
