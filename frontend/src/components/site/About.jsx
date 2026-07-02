import React from "react";
import { motion } from "framer-motion";
import { RevealBlock } from "./AnimatedText";

const quotes = [
  "Information asymmetry is the last durable edge. We close it — every morning, before the bell.",
  "Escape the analysis paralysis and cut those fake-guru noise.",
  "Retail drowns in information. Institutions act on interpretation. We hand you the interpretation.",
];

export default function About() {
  return (
    <section id="about" data-testid="about-section" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        {/* Eyebrow */}
        <div className="font-mono-ui text-[10px] uppercase tracking-[0.32em] text-[#013aa9]/70 mb-10" data-testid="about-eyebrow">
          Mandate
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left: 3 stacked quotes */}
          <div className="lg:col-span-5 space-y-8 lg:space-y-10">
            {quotes.map((q, i) => (
              <RevealBlock key={i} delay={i * 0.15}>
                <div
                  data-testid={`about-quote-${i}`}
                  className="border-l border-dashed border-[#013aa9]/40 pl-6"
                >
                  <div className="font-display italic text-xl sm:text-2xl leading-snug text-[#013aa9]/85">
                    &ldquo;{q}&rdquo;
                  </div>
                </div>
              </RevealBlock>
            ))}
          </div>

          {/* Right: Big statement + lede */}
          <div className="lg:col-span-7 lg:pl-8 lg:border-l lg:border-dashed lg:border-[#013aa9]/40">
            <motion.h2
              data-testid="about-headline"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.02em] text-[#013aa9]"
            >
              Built by traders who&rsquo;ve sat on institutional desks
              <span className="block italic font-medium mt-2">
                — and beaten the prop firm game.
              </span>
            </motion.h2>

            <RevealBlock delay={0.2}>
              <p className="mt-10 font-sans-ui text-lg sm:text-xl leading-relaxed text-[#013aa9]/85 max-w-3xl" data-testid="about-lede">
                Aurrum Intelligence distills the same institutional research that moves hedge fund
                desks into a single, disciplined morning brief. Positioning shifts, macro pivots,
                sector rotations, cross-asset dislocations — pre-market, in your inbox, at a price
                built for the independent trader.
              </p>
            </RevealBlock>
          </div>
        </div>
      </div>
    </section>
  );
}
