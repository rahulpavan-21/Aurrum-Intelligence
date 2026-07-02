import React from "react";
import { motion } from "framer-motion";
import { RevealText } from "./AnimatedText";

const services = [
  {
    id: "daily",
    tag: "Daily",
    title: "The Morning Briefing",
    desc: "A 6-minute read delivered pre-market. Macro pivots, positioning shifts, and the one trade the desk is watching today.",
    span: "lg:col-span-8 lg:row-span-2",
    big: true,
  },
  {
    id: "macro",
    tag: "Macro",
    title: "Macro Intelligence",
    desc: "Rates, dollar, growth, liquidity — weekly deep-reads with actionable regime calls.",
    span: "lg:col-span-4",
  },
  {
    id: "sector",
    tag: "Sectors",
    title: "Sector Deep-Dives",
    desc: "Semis, energy, financials, defensives — bi-weekly primers with buy/sell setups.",
    span: "lg:col-span-4",
  },
  {
    id: "ideas",
    tag: "Alpha",
    title: "Trade Ideas",
    desc: "Asymmetric long & short setups with entry, invalidation, and sizing framework.",
    span: "lg:col-span-6",
  },
  {
    id: "risk",
    tag: "Risk",
    title: "Risk Radar",
    desc: "Weekly tail-risk map. What's mispriced, what's crowded, where the liquidity hides.",
    span: "lg:col-span-6",
  },
];

export default function Services() {
  return (
    <section id="services" data-testid="services-section" className="relative py-28 sm:py-40 dashed-grid">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="font-mono-ui text-[10px] uppercase tracking-[0.32em] text-[#013aa9]/70 mb-4">
              §02 — Capabilities
            </div>
            <RevealText
              text="Five products. One edge."
              as="h2"
              className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.02em] text-[#013aa9]"
              testId="services-headline"
            />
          </div>
          <p className="max-w-md font-sans-ui text-base text-[#013aa9]/80" data-testid="services-lede">
            Every subscription includes access to the full research stack.
            Read what you need. Skip what you don&apos;t. Trade the delta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 auto-rows-[minmax(180px,auto)]">
          {services.map((s, i) => (
            <motion.article
              key={s.id}
              data-testid={`service-card-${s.id}`}
              data-cursor-hover
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className={"group relative bg-[#f7f3e8] border border-[#013aa9]/25 p-8 sm:p-10 " + s.span + " hover:border-[#013aa9] transition-colors overflow-hidden"}
            >
              {/* Dashed corner brackets */}
              <span className="absolute top-3 left-3 w-4 h-4 border-l border-t border-dashed border-[#013aa9]/50" />
              <span className="absolute top-3 right-3 w-4 h-4 border-r border-t border-dashed border-[#013aa9]/50" />
              <span className="absolute bottom-3 left-3 w-4 h-4 border-l border-b border-dashed border-[#013aa9]/50" />
              <span className="absolute bottom-3 right-3 w-4 h-4 border-r border-b border-dashed border-[#013aa9]/50" />

              <div className="flex items-start justify-between mb-8">
                <div className="font-mono-ui text-[10px] uppercase tracking-[0.32em] text-[#013aa9]/70">
                  0{i + 1} · {s.tag}
                </div>
                <div className="w-8 h-8 border border-[#013aa9]/40 rounded-full grid place-items-center group-hover:bg-[#013aa9] group-hover:text-[#f7f3e8] transition-all">
                  <span className="text-xs">↗</span>
                </div>
              </div>

              <h3 className={"font-display leading-none tracking-tight text-[#013aa9] " + (s.big ? "text-4xl sm:text-6xl" : "text-2xl sm:text-3xl")}>
                {s.title}
              </h3>
              <p className={"mt-6 font-sans-ui text-[#013aa9]/75 max-w-md " + (s.big ? "text-lg" : "text-sm")}>
                {s.desc}
              </p>

              {s.big && (
                <div className="mt-10 pt-8 border-t border-dashed border-[#013aa9]/40 grid grid-cols-3 gap-4">
                  {["Pre-market", "6 min read", "Every trading day"].map((k, j) => (
                    <div key={j} className="font-mono-ui text-[10px] uppercase tracking-[0.24em] text-[#013aa9]/70">
                      {k}
                    </div>
                  ))}
                </div>
              )}

              <motion.div
                className="absolute inset-x-0 bottom-0 h-px bg-[#013aa9] origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
