import React, { useState } from "react";
import { motion } from "framer-motion";
import DashedChart from "./DashedChart";
import MagneticButton from "./MagneticButton";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const applicableTo = [
  "Metals (XAUUSD, XAGUSD and others)",
  "Energy (USOIL, Palm Oil, Brent Oil)",
  "DXY · NQ · ES · US100 · US30",
  "Grains (Soybean, Corn, Wheat)",
  "Forex pairs",
];

export default function SampleBriefing() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("locked"); // locked | loading | unlocked | error

  const requestPreview = async (e) => {
    e.preventDefault();
    if (!email) return;
    setState("loading");
    try {
      await axios.post(`${API}/subscribe`, { email });
      setState("unlocked");
    } catch {
      setState("error");
    }
  };

  const isBlurred = state !== "unlocked";

  return (
    <section id="sample" data-testid="sample-section" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left column */}
          <div className="lg:col-span-5">
            <div className="font-mono-ui text-[10px] uppercase tracking-[0.32em] text-[#013aa9]/70 mb-6" data-testid="sample-eyebrow">
              Sample
            </div>

            <motion.h2
              data-testid="sample-headline"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.02em] text-[#013aa9]"
            >
              A briefing you&rsquo;ll actually read.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="mt-8 font-sans-ui text-base sm:text-lg text-[#013aa9]/85 max-w-md"
              data-testid="sample-lede"
            >
              This is a redacted excerpt from our Intelligent model. This can be best applied to
            </motion.p>

            <ul className="mt-8 space-y-3" data-testid="sample-applicable-list">
              {applicableTo.map((label, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-3 font-sans-ui text-sm sm:text-base text-[#013aa9]/90"
                  data-testid={`sample-market-${i}`}
                >
                  <span className="mt-2 w-2 h-2 bg-[#013aa9] shrink-0" />
                  <span>{label}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right column — locked briefing preview */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative"
            data-testid="sample-locked-wrapper"
          >
            {/* The blurred briefing card underneath */}
            <article
              data-testid="sample-card"
              aria-hidden={isBlurred}
              className={
                "relative bg-[#f7f3e8] border border-[#013aa9] p-6 sm:p-10 select-none transition-all duration-700 " +
                (isBlurred ? "blur-md pointer-events-none" : "blur-none")
              }
            >
              <div className="flex items-start justify-between mb-8 pb-6 border-b border-dashed border-[#013aa9]/40">
                <div>
                  <div className="font-mono-ui text-[10px] uppercase tracking-[0.32em] text-[#013aa9]/70">Issue №0247 · Tuesday, pre-market</div>
                  <div className="font-display italic text-3xl sm:text-4xl mt-2 text-[#013aa9]">The dollar is the trade.</div>
                </div>
                <div className="text-right font-mono-ui text-[10px] uppercase tracking-[0.28em] text-[#013aa9]/70">
                  <div>Aurrum Intelligence</div>
                  <div>Desk · New York</div>
                </div>
              </div>

              <div className="relative border border-dashed border-[#013aa9]/40 p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-mono-ui text-[10px] uppercase tracking-[0.28em] text-[#013aa9]/70">DXY · 30D</div>
                  <div className="font-mono-ui text-xs text-[#013aa9]"><span className="text-green-700">▲ 2.14%</span> · 60D</div>
                </div>
                <DashedChart className="w-full h-40 sm:h-48" />
                <div className="flex items-center justify-between font-mono-ui text-[9px] uppercase tracking-[0.24em] text-[#013aa9]/60">
                  <span>D-30</span><span>D-20</span><span>D-10</span><span>Today</span>
                </div>
              </div>

              <div className="mt-8 space-y-4 font-sans-ui text-[15px] leading-relaxed text-[#013aa9]/90 max-w-2xl">
                <p>
                  <span className="font-display text-2xl float-left mr-2 leading-none">D</span>
                  XY closed above 106 for the fourth session — a level that has historically
                  capped every EM currency rally since 2022. Positioning in the CFTC report
                  remains net-short dollar, which reads increasingly like a pain trade.
                </p>
                <p>
                  The desk is watching the Australian dollar as the cleanest expression:
                  short AUD/USD offers the highest carry-adjusted convexity if the DXY breakout confirms.
                  Invalidation on a daily close back below 105.20.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-dashed border-[#013aa9]/40 grid grid-cols-3 gap-4">
                {[
                  { k: "Idea", v: "Short AUD/USD" },
                  { k: "Invalidate", v: "< 105.20 DXY" },
                  { k: "Convexity", v: "3.2x" },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="font-mono-ui text-[10px] uppercase tracking-[0.24em] text-[#013aa9]/70">{s.k}</div>
                    <div className="font-display text-lg text-[#013aa9] mt-1">{s.v}</div>
                  </div>
                ))}
              </div>
            </article>

            {/* Lock overlay */}
            {isBlurred && (
              <div
                data-testid="sample-lock-overlay"
                className="absolute inset-0 grid place-items-center px-6"
              >
                <div className="relative w-full max-w-lg bg-[#f7f3e8]/85 backdrop-blur-md border border-[#013aa9] p-8 sm:p-10 text-center">
                  {/* Corner brackets */}
                  <span className="absolute top-2 left-2 w-4 h-4 border-l border-t border-dashed border-[#013aa9]/60" />
                  <span className="absolute top-2 right-2 w-4 h-4 border-r border-t border-dashed border-[#013aa9]/60" />
                  <span className="absolute bottom-2 left-2 w-4 h-4 border-l border-b border-dashed border-[#013aa9]/60" />
                  <span className="absolute bottom-2 right-2 w-4 h-4 border-r border-b border-dashed border-[#013aa9]/60" />

                  <div className="mx-auto w-14 h-14 border border-[#013aa9] grid place-items-center mb-6" data-testid="sample-lock-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <rect x="4" y="10" width="16" height="12" stroke="#013aa9" strokeWidth="1.6" />
                      <path d="M8 10 V7 a4 4 0 0 1 8 0 V10" stroke="#013aa9" strokeWidth="1.6" fill="none" />
                      <circle cx="12" cy="16" r="1.4" fill="#013aa9" />
                    </svg>
                  </div>

                  <div className="font-mono-ui text-[10px] uppercase tracking-[0.32em] text-[#013aa9]/70 mb-3">
                    Subscribers only
                  </div>
                  <h3 className="font-display text-3xl sm:text-4xl leading-[1.05] text-[#013aa9]" data-testid="sample-lock-headline">
                    Get a free preview.
                  </h3>
                  <p className="mt-4 font-sans-ui text-sm sm:text-base text-[#013aa9]/80 max-w-sm mx-auto">
                    Drop your email — we&rsquo;ll send the full briefing directly to your inbox.
                  </p>

                  <form onSubmit={requestPreview} className="mt-6 flex items-stretch border border-[#013aa9]" data-testid="sample-preview-form">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email"
                      className="flex-1 bg-transparent px-4 py-3 font-sans-ui text-sm text-[#013aa9] outline-none placeholder-[#013aa9]/40"
                      data-testid="sample-preview-input"
                    />
                    <MagneticButton
                      as="button"
                      type="submit"
                      className="btn-ink"
                      testId="sample-preview-submit"
                    >
                      {state === "loading" ? "…" : "Unlock"}
                      <span aria-hidden>→</span>
                    </MagneticButton>
                  </form>
                  {state === "error" && (
                    <div className="mt-3 font-mono-ui text-[10px] uppercase tracking-[0.28em] text-[#b02929]">
                      Something failed. Try again.
                    </div>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
