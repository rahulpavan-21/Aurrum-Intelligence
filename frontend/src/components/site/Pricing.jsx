import React from "react";
import { motion } from "framer-motion";
import { RevealText } from "./AnimatedText";
import MagneticButton from "./MagneticButton";

const features = [
  "Daily pre-market briefing (05:30 ET)",
  "Weekly macro & sector deep-dives",
  "Asymmetric trade ideas with sizing framework",
  "Public P&L ledger — we track every call",
  "Risk radar & positioning heat maps",
  "Access to the analyst desk (Q&A weekly)",
];

export default function Pricing() {
  return (
    <section id="pricing" data-testid="pricing-section" className="relative py-28 sm:py-40 dashed-grid">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        <div className="mb-16 max-w-3xl">
          <div className="font-mono-ui text-[10px] uppercase tracking-[0.32em] text-[#013aa9]/70 mb-4">§05 — Access</div>
          <RevealText
            text="Institutional research. Retail pricing."
            as="h2"
            className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.02em] text-[#013aa9]"
            testId="pricing-headline"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="grid lg:grid-cols-12 gap-0 border border-[#013aa9]"
        >
          {/* Left: Number */}
          <div className="lg:col-span-5 p-10 sm:p-14 relative overflow-hidden">
            <div className="font-mono-ui text-[10px] uppercase tracking-[0.32em] text-[#013aa9]/70 mb-6">Aurrum · Standard</div>
            <div className="flex items-start gap-2" data-testid="pricing-price">
              <span className="font-display text-2xl mt-6 sm:mt-10 text-[#013aa9]">$</span>
              <span className="font-display text-[120px] sm:text-[180px] lg:text-[220px] leading-none tracking-[-0.04em] text-[#013aa9]">29</span>
              <span className="font-mono-ui text-xs uppercase tracking-[0.28em] mt-6 sm:mt-10 text-[#013aa9]/70">/ month</span>
            </div>
            <div className="mt-4 font-sans-ui text-[#013aa9]/75 text-sm sm:text-base">
              Or $290 / year — two months on the desk.
              Cancel any time. No lock-ins, ever.
            </div>
          </div>

          {/* Right: Features */}
          <div className="lg:col-span-7 p-10 sm:p-14 border-t lg:border-t-0 lg:border-l border-dashed border-[#013aa9]/40 section-invert">
            <div className="font-mono-ui text-[10px] uppercase tracking-[0.32em] text-[#f7f3e8]/70 mb-6">Included · Everything</div>
            <ul className="space-y-4 mb-10">
              {features.map((f, i) => (
                <motion.li
                  key={i}
                  data-testid={`pricing-feature-${i}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.6 }}
                  className="flex items-start gap-4 font-sans-ui text-sm sm:text-base"
                >
                  <span className="mt-2 w-3 h-px bg-[#f7f3e8]" />
                  {f}
                </motion.li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-3">
              <MagneticButton
                as="a"
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="btn-ink"
                style={{ background: "#f7f3e8", color: "#013aa9", borderColor: "#f7f3e8" }}
                testId="pricing-cta"
              >
                Start Your Subscription
                <span aria-hidden>→</span>
              </MagneticButton>
              <span className="font-mono-ui text-[10px] uppercase tracking-[0.28em] text-[#f7f3e8]/70">
                14-day money-back · No questions.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
