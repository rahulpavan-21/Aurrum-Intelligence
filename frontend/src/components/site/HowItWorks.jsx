import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Read before you trade.",
    desc: "Get the same technical analysis from our Intelligent system which top-tier desks receive every morning.",
    stat: "3 min",
  },
  {
    n: "02",
    title: "Analyse and mark.",
    desc: "Understand the analysis, mark your levels and pre-plan your day setups.",
    stat: "6 min",
  },
  {
    n: "03",
    title: "Execution.",
    desc: "Execute one of the most celebrated and accurate technical setups in the global trading space.",
    stat: "All set in 9 min",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section id="how" data-testid="how-section" className="section-invert relative">
      <div ref={ref} className="max-w-[1400px] mx-auto px-6 sm:px-10 py-20 sm:py-28">
        {/* Header */}
        <div className="mb-14">
          <div className="font-mono-ui text-[10px] uppercase tracking-[0.32em] text-[#f7f3e8]/70 mb-6">
            Process
          </div>

          <motion.h2
            data-testid="how-headline"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.02em] text-[#f7f3e8]"
          >
            Why this works.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-3xl space-y-5 font-sans-ui text-lg sm:text-xl leading-relaxed text-[#f7f3e8]/90"
            data-testid="how-explanation"
          >
            <p>
              Markets are made by institutional trading activity — and you are seeing the exact
              same levels they see. Which means you have an accurate trading setup, not a
              speculation.
            </p>
            <p className="text-[#f7f3e8]/75">
              Trust us on this. The desks are not reading whatever is easily available to you.
            </p>
          </motion.div>
        </div>

        {/* Steps + rotating index */}
        <div className="grid lg:grid-cols-12 gap-12 relative pt-8 border-t border-dashed border-[#f7f3e8]/25">
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start pt-8">
            <div className="aspect-square border border-[#f7f3e8]/25 relative overflow-hidden">
              <div className="absolute inset-0 grid place-items-center">
                <motion.div
                  style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, 360]) }}
                  className="w-3/4 h-3/4 rounded-full border border-dashed border-[#f7f3e8]/40 grid place-items-center"
                >
                  <div className="font-display text-8xl sm:text-9xl">
                    <ProgressLabel mv={scrollYProgress} steps={steps} />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-20 lg:space-y-32 pt-8">
            {steps.map((s) => (
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
                  <div className="font-display text-2xl">{s.stat}</div>
                </div>
                <h3 className="font-display text-4xl sm:text-5xl leading-[0.95] tracking-[-0.02em]">{s.title}</h3>
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

function ProgressLabel({ mv, steps }) {
  const [label, setLabel] = React.useState("01");
  React.useEffect(() => {
    return mv.on("change", (v) => {
      const i = Math.min(steps.length - 1, Math.floor(v * steps.length));
      setLabel(steps[i].n);
    });
  }, [mv, steps]);
  return <span data-testid="how-progress-number">{label}</span>;
}
