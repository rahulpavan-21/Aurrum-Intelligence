import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "./MagneticButton";
import ParticleNetwork from "./ParticleNetwork";
import ElliottWaveFib from "./ElliottWaveFib";

const LOGO = "https://customer-assets.emergentagent.com/job_aurrum-quantum-ui/artifacts/u7r7no9f_Final%20%282%29.png";

function SpanReveal({ children, delay = 0 }) {
  return (
    <span style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}>
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay }}
        style={{ display: "inline-block", paddingRight: "0.15em" }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 0.2], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0.2]);

  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const timeStr = time.toUTCString().split(" ").slice(4, 5)[0] + " UTC";

  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-[100svh] pt-24 pb-16 overflow-hidden dashed-grid"
    >
      <ParticleNetwork density={38} />

      {/* Corner meta */}
      <div className="absolute top-24 left-6 sm:left-10 z-10 font-mono-ui text-[10px] sm:text-xs text-[#013aa9]/70 tracking-[0.2em] space-y-3" data-testid="hero-meta-left">
        <div>
          <div>N 40°42′25″ · W 74°00′41″</div>
          <div className="mt-1 opacity-80">DESK · NEW YORK</div>
        </div>
        <div>
          <div>N 51°30′56″ · W 00°05′53″</div>
          <div className="mt-1 opacity-80">DESK · LONDON</div>
        </div>
        <div>
          <div>N 35°40′52″ · E 139°46′43″</div>
          <div className="mt-1 opacity-80">DESK · TOKYO</div>
        </div>
      </div>
      <div className="absolute top-24 right-6 sm:right-10 z-10 font-mono-ui text-[10px] sm:text-xs text-[#013aa9]/70 tracking-[0.2em] text-right" data-testid="hero-meta-right">
        <div>{timeStr}</div>
        <div className="mt-1 flex items-center gap-2 justify-end">
          <span className="w-1.5 h-1.5 rounded-full bg-[#013aa9] blink" />
          MARKETS · LIVE
        </div>
      </div>

      <motion.div style={{ y: y1, opacity }} className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 pt-16 sm:pt-24">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="font-mono-ui text-[11px] uppercase tracking-[0.32em] text-[#013aa9]/70 mb-6 flex items-center gap-3" data-testid="hero-eyebrow">
              <span className="inline-block w-6 h-px bg-[#013aa9]" />
              Market Intelligence · A Daily Ritual
            </div>

            <h1 className="font-display text-[52px] sm:text-[84px] lg:text-[128px] leading-[0.9] tracking-[-0.02em] text-[#013aa9]" data-testid="hero-headline">
              <div>
                <SpanReveal delay={0.05}>Read</SpanReveal>{" "}
                <SpanReveal delay={0.15}>the</SpanReveal>
              </div>
              <div className="italic font-medium">
                <SpanReveal delay={0.28}>market.</SpanReveal>
              </div>
              <div>
                <SpanReveal delay={0.42}>Trade</SpanReveal>{" "}
                <SpanReveal delay={0.55}>the</SpanReveal>{" "}
                <SpanReveal delay={0.66}>edge.</SpanReveal>
              </div>
            </h1>
          </div>

          <div className="lg:col-span-4 lg:pl-8 lg:border-l lg:border-dashed lg:border-[#013aa9]/40">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="font-sans-ui text-base sm:text-lg leading-relaxed text-[#013aa9]/85"
              data-testid="hero-subhead"
            >
              Aurrum delivers institutional-grade daily market briefings —
              macro reads, sector deep-dives, and asymmetric trade ideas —
              curated by senior desks and priced for the independent trader.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <MagneticButton
                as="a"
                href="#pricing"
                onClick={(e) => { e.preventDefault(); document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" }); }}
                className="btn-ink"
                testId="hero-cta-primary"
              >
                Get Daily Briefing
                <span aria-hidden>→</span>
              </MagneticButton>
              <MagneticButton
                as="a"
                href="#sample"
                onClick={(e) => { e.preventDefault(); document.querySelector("#sample")?.scrollIntoView({ behavior: "smooth" }); }}
                className="btn-ghost"
                testId="hero-cta-secondary"
              >
                See a Sample
              </MagneticButton>
            </motion.div>
          </div>
        </div>

        {/* Elliott Wave + Fibonacci signature */}
        <motion.div style={{ y: y2 }} className="mt-16 sm:mt-24 relative" data-testid="hero-elliott-wave">
          <ElliottWaveFib className="w-full h-40 sm:h-56" />
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="mt-10 flex items-center gap-3 font-mono-ui text-[10px] uppercase tracking-[0.3em] text-[#013aa9]/70"
          data-testid="hero-scroll-cue"
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓
          </motion.span>
          Scroll · The briefing begins
        </motion.div>
      </motion.div>

      {/* Floating logo watermark bottom right */}
      <motion.img
        initial={{ opacity: 0, rotate: -5 }}
        animate={{ opacity: 0.06, rotate: 0 }}
        transition={{ delay: 0.4, duration: 1.6 }}
        src={LOGO}
        alt=""
        aria-hidden
        className="absolute -bottom-24 -right-24 w-[640px] max-w-[80vw] pointer-events-none select-none"
      />
    </section>
  );
}
