import React from "react";
import { motion } from "framer-motion";
import { RevealText } from "./AnimatedText";
import DashedChart from "./DashedChart";

export default function SampleBriefing() {
  return (
    <section id="sample" data-testid="sample-section" className="relative py-28 sm:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="font-mono-ui text-[10px] uppercase tracking-[0.32em] text-[#013aa9]/70 mb-4">§04 — Sample</div>
            <RevealText
              text="A briefing you'll actually read."
              as="h2"
              className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.02em] text-[#013aa9]"
              testId="sample-headline"
            />
            <p className="mt-8 font-sans-ui text-base sm:text-lg text-[#013aa9]/80 max-w-md" data-testid="sample-lede">
              This is a redacted excerpt from a recent morning briefing.
              Positioning is stripped. The reasoning stays.
            </p>
            <div className="mt-10 space-y-4 font-mono-ui text-xs uppercase tracking-[0.24em] text-[#013aa9]/70">
              <div className="flex items-center gap-3"><span className="w-2 h-2 bg-[#013aa9]" /> Macro read</div>
              <div className="flex items-center gap-3"><span className="w-2 h-2 bg-[#013aa9]" /> Positioning delta</div>
              <div className="flex items-center gap-3"><span className="w-2 h-2 bg-[#013aa9]" /> One asymmetric idea</div>
              <div className="flex items-center gap-3"><span className="w-2 h-2 bg-[#013aa9]" /> Risk flag</div>
            </div>
          </div>

          <motion.article
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            data-testid="sample-card"
            className="lg:col-span-7 relative bg-[#f7f3e8] border border-[#013aa9] p-6 sm:p-10"
          >
            {/* Corner meta */}
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

            {/* Chart */}
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

            {/* Body copy */}
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
              <p className="text-[#013aa9]/60 italic">
                […] full briefing continues for subscribers — sector reads, four trade ideas, and the risk radar.
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
          </motion.article>
        </div>
      </div>
    </section>
  );
}
