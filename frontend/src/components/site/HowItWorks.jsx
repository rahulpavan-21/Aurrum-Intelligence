import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RevealText } from "./AnimatedText";

const steps = [
  {
    n: "01",
    title: "Ingestion.",
    desc: "Analyst desks and quantitative feeds pipe in ~14,000 datapoints nightly — filings, positioning, flow, macro prints, alternative data.",
    stat: "14,000",
    statLabel: "datapoints / night",
  },
  {
    n: "02",
    title: "Synthesis.",
    desc: "Senior former buy-side analysts distill the noise into the four or five narratives that will actually move price today.",
    stat: "12",
    statLabel: "senior analysts",
  },
  {
    n: "03",
    title: "Briefing.",
    desc: "A disciplined 6-minute morning read: one macro view, one sector view, one asymmetric idea, one risk flag. No filler.",
    stat: "6 min",
    statLabel: "read time",
  },
  {
    n: "04",
    title: "Execution.",
    desc: "You read. You size. You trade the edge. We track our own calls in the public P&L ledger — no hiding.",
    stat: "05:30",
    statLabel: "ET delivery",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section id="how" data-testid="how-section" className="section-invert relative">
      <div ref={ref} className="max-w-[1400px] mx-auto px-6 sm:px-10 py-28 sm:py-40">
        <div className="mb-20">
          <div className="font-mono-ui text-[10px] uppercase tracking-[0.32em] text-[#f7f3e8]/70 mb-4">
            §03 — Process
          </div>
          <RevealText
            text="From noise to signal in four disciplined moves."
            as="h2"
            className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.02em] text-[#f7f3e8] max-w-5xl"
            testId="how-headline"
          />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 relative">
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
            <div className="aspect-square border border-[#f7f3e8]/25 relative overflow-hidden">
              {/* Rotating index label */}
              <div className="absolute inset-0 grid place-items-center">
                <motion.div
                  style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, 360]) }}
                  className="w-3/4 h-3/4 rounded-full border border-dashed border-[#f7f3e8]/40 grid place-items-center"
                >
                  <div className="font-display text-8xl sm:text-9xl">
                    <motion.span data-testid="how-progress-number">
                      {useProgressLabel(scrollYProgress, steps)}
                    </motion.span>
                  </div>
                </motion.div>
              </div>
              <div className="absolute top-4 left-4 font-mono-ui text-[10px] uppercase tracking-[0.32em] opacity-70">
                Process index
              </div>
              <div className="absolute bottom-4 right-4 font-mono-ui text-[10px] uppercase tracking-[0.32em] opacity-70">
                / 04
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-24 lg:space-y-40">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                data-testid={`how-step-${s.n}`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20% 0px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="flex items-baseline gap-6 mb-6">
                  <div className="font-mono-ui text-sm tracking-[0.32em]">{s.n}</div>
                  <div className="flex-1 h-px bg-[#f7f3e8]/25" />
                  <div className="font-mono-ui text-xs uppercase tracking-[0.28em] opacity-70">{s.statLabel}</div>
                  <div className="font-display text-xl">{s.stat}</div>
                </div>
                <h3 className="font-display text-4xl sm:text-6xl leading-[0.95] tracking-[-0.02em]">{s.title}</h3>
                <p className="mt-5 font-sans-ui text-base sm:text-lg leading-relaxed text-[#f7f3e8]/85 max-w-2xl">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function useProgressLabel(mv, steps) {
  const [label, setLabel] = React.useState("01");
  React.useEffect(() => {
    return mv.on("change", (v) => {
      const i = Math.min(steps.length - 1, Math.floor(v * steps.length));
      setLabel(steps[i].n);
    });
  }, [mv, steps]);
  return label;
}
