import React from "react";
import { motion } from "framer-motion";
import DashedChart from "./DashedChart";
import MagneticButton from "./MagneticButton";

// TODO: replace with your real WhatsApp number (E.164 with country code, no + no spaces)
const WHATSAPP_URL = "https://wa.me/916301971390?text=" + encodeURIComponent(
  "Hi Aurrum, I'd like a free preview of the daily briefing."
);

const applicableTo = [
  "Metals (XAUUSD, XAGUSD and others)",
  "Energy (USOIL, Palm Oil, Brent Oil)",
  "DXY · NQ · ES · US100 · US30",
  "Grains (Soybean, Corn, Wheat)",
  "Forex pairs",
];

export default function SampleBriefing() {
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
              What you'll actually read.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="mt-8 font-sans-ui text-base sm:text-lg text-[#013aa9]/85 max-w-md"
              data-testid="sample-lede"
            >
              A redacted excerpt from our intelligent model — best applied to:
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
                  <span className="mt-2 w-2 h-2 rounded-full bg-[#013aa9] shrink-0" />
                  <span>{label}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right column — subtly obscured briefing preview with lock overlay */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative"
            data-testid="sample-locked-wrapper"
          >
            {/* The lightly-obscured briefing card underneath */}
            <article
              data-testid="sample-card"
              aria-hidden
              className="relative bg-[#f7f3e8] border border-[#013aa9] p-6 sm:p-10 select-none pointer-events-none"
              style={{ filter: "blur(2px)", opacity: 0.85 }}
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
            </article>

            {/* Minimal lock + CTA overlay */}
            <div
              data-testid="sample-lock-overlay"
              className="absolute inset-0 grid place-items-center"
            >
              <div className="flex flex-col items-center gap-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 grid place-items-center bg-[#f7f3e8] border border-[#013aa9]" data-testid="sample-lock-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <rect x="4" y="10" width="16" height="12" stroke="#013aa9" strokeWidth="1.6" />
                    <path d="M8 10 V7 a4 4 0 0 1 8 0 V10" stroke="#013aa9" strokeWidth="1.6" fill="none" />
                    <circle cx="12" cy="16" r="1.4" fill="#013aa9" />
                  </svg>
                </div>

                <MagneticButton
                  as="a"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ink"
                  testId="sample-preview-cta"
                >
                  Click here for a free preview
                  <span aria-hidden>→</span>
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
