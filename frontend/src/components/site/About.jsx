import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RevealText, RevealBlock } from "./AnimatedText";
import DashedChart from "./DashedChart";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="about" ref={ref} data-testid="about-section" className="relative py-28 sm:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="font-mono-ui text-[10px] uppercase tracking-[0.32em] text-[#013aa9]/70 mb-6" data-testid="about-eyebrow">
              §01 — Mandate
            </div>
            <motion.div style={{ y }} className="sticky top-32">
              <div className="font-display italic text-2xl text-[#013aa9]/70 leading-snug">
                “Information asymmetry is the last durable edge. We close it — every morning, before the bell.”
              </div>
              <div className="mt-6 font-mono-ui text-[10px] uppercase tracking-[0.3em] text-[#013aa9]/60">
                — The Aurrum Desk
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-8 lg:pl-12 lg:border-l lg:border-dashed lg:border-[#013aa9]/40">
            <RevealText
              text="A market intelligence platform, engineered for traders."
              as="h2"
              className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.02em] text-[#013aa9]"
              testId="about-headline"
            />

            <RevealBlock delay={0.15}>
              <p className="mt-10 font-sans-ui text-lg sm:text-xl leading-relaxed text-[#013aa9]/85 max-w-3xl" data-testid="about-lede">
                Aurrum Intelligence distills the same institutional research that moves hedge fund desks into a
                single, disciplined morning brief. Positioning shifts, macro pivots, sector rotations, cross-asset
                dislocations — pre-market, in your inbox, at a price built for the independent trader.
              </p>
            </RevealBlock>

            <div className="mt-16 grid sm:grid-cols-3 gap-10 border-t border-dashed border-[#013aa9]/40 pt-10">
              {[
                { k: "05:30", label: "ET · Desk opens", desc: "Brief drafted before pre-market opens." },
                { k: "12", label: "Analysts · buy-side", desc: "Former desks: GS, Citadel, MS, Bridgewater." },
                { k: "$29", label: "/ month", desc: "Institutional research. Retail pricing." },
              ].map((s, i) => (
                <RevealBlock key={i} delay={0.2 + i * 0.1}>
                  <div className="font-display text-5xl sm:text-6xl text-[#013aa9]" data-testid={`about-stat-${i}`}>{s.k}</div>
                  <div className="mt-2 font-mono-ui text-[10px] uppercase tracking-[0.28em] text-[#013aa9]/70">{s.label}</div>
                  <div className="mt-3 font-sans-ui text-sm text-[#013aa9]/75">{s.desc}</div>
                </RevealBlock>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 relative">
          <DashedChart className="w-full h-24 opacity-70" />
        </div>
      </div>
    </section>
  );
}
