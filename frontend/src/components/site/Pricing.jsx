import React from "react";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import DashedChart from "./DashedChart";

const plans = [
  {
    id: "tool",
    tag: "Aurrum · Tool",
    title: "Aurrum Market Intelligence Tool",
    price: "29",
    unit: "/ month",
    sub: "Or $290 / year — two months on the desk.",
    inverted: true,
    features: [
      "An Intelligent Tool to analyse your desired markets.",
      "Direct Briefings from Aurrum desk on specific products.",
      "Setup guide from our expert team.",
      "Modules on how to apply and build your own setup.",
    ],
    meta: [
      { k: "Frequency", v: "Daily" },
      { k: "Delivery", v: "05:30 ET" },
      { k: "Cancel", v: "Any time" },
    ],
    ctaLabel: "Start Your Subscription",
  },
  {
    id: "mentorship",
    tag: "Aurrum · Mentorship",
    title: "Aurrum Mentorship",
    price: "91",
    unit: "/ one-time",
    sub: "Spending $91 helps you prevent many account breaches and succeed at your very first attempt.",
    inverted: false,
    features: [
      "Path to your first Funded account and payout.",
      "Applicable to any CFDs and Futures firm.",
      "Mentorship from traders with 100k+ payouts.",
    ],
    meta: [
      { k: "Format", v: "1-to-1 + Cohort" },
      { k: "Access", v: "Lifetime" },
      { k: "Cohort", v: "Rolling" },
    ],
    ctaLabel: "Join the Mentorship",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" data-testid="pricing-section" className="relative py-20 sm:py-28 dashed-grid">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        <div className="mb-12 max-w-3xl">
          <div className="font-mono-ui text-[10px] uppercase tracking-[0.32em] text-[#013aa9]/70 mb-6" data-testid="pricing-eyebrow">
            Access
          </div>
          <motion.h2
            data-testid="pricing-headline"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.02em] text-[#013aa9]"
          >
            Institutional research. Retail pricing.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:gap-10">
          {plans.map((p, idx) => (
            <PricingCard key={p.id} plan={p} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan, index }) {
  const dark = plan.inverted;
  return (
    <motion.div
      data-testid={`pricing-card-${plan.id}`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className={
        "grid lg:grid-cols-12 gap-0 border " +
        (dark ? "border-[#013aa9]" : "border-[#013aa9]")
      }
    >
      {/* Left half — number */}
      <div className={"lg:col-span-5 p-10 sm:p-12 relative overflow-hidden flex flex-col " + (dark ? "bg-[#f7f3e8]" : "bg-[#f7f3e8]")}>
        <div className="font-mono-ui text-[10px] uppercase tracking-[0.32em] text-[#013aa9]/70 mb-6" data-testid={`${plan.id}-tag`}>
          {plan.tag}
        </div>
        <div className="flex items-start gap-2" data-testid={`${plan.id}-price`}>
          <span className="font-display text-2xl mt-5 sm:mt-8 text-[#013aa9]">$</span>
          <span className="font-display text-[100px] sm:text-[140px] lg:text-[170px] leading-none tracking-[-0.04em] text-[#013aa9]">
            {plan.price}
          </span>
          <span className="font-mono-ui text-xs uppercase tracking-[0.28em] mt-5 sm:mt-8 text-[#013aa9]/70 whitespace-nowrap">
            {plan.unit}
          </span>
        </div>
        <div className="mt-4 font-sans-ui text-[#013aa9]/80 text-sm sm:text-base leading-relaxed" data-testid={`${plan.id}-sub`}>
          {plan.sub}
        </div>

        {/* Filler: signature dashed chart + meta chip pushed to bottom */}
        <div className="mt-8 flex-1 flex flex-col justify-end gap-6">
          <div className="relative">
            <DashedChart className="w-full h-20 sm:h-24 opacity-70" />
          </div>
          <div className="grid grid-cols-3 gap-3 pt-6 border-t border-dashed border-[#013aa9]/40">
            {plan.meta.map((m, i) => (
              <div key={i}>
                <div className="font-mono-ui text-[9px] uppercase tracking-[0.24em] text-[#013aa9]/60">
                  {m.k}
                </div>
                <div className="mt-1 font-display text-base sm:text-lg text-[#013aa9] leading-tight">
                  {m.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right half — features (deep blue) */}
      <div className="lg:col-span-7 p-10 sm:p-12 border-t lg:border-t-0 lg:border-l border-dashed border-[#013aa9]/40 section-invert">
        <div className="font-mono-ui text-[10px] uppercase tracking-[0.32em] text-[#f7f3e8]/70 mb-6">
          Included
        </div>
        <ul className="space-y-4 mb-10">
          {plan.features.map((f, i) => (
            <motion.li
              key={i}
              data-testid={`${plan.id}-feature-${i}`}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.6 }}
              className="flex items-start gap-4 font-sans-ui text-sm sm:text-base leading-relaxed"
            >
              <span className="mt-2 w-3 h-px bg-[#f7f3e8] shrink-0" />
              <span>{f}</span>
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
            testId={`${plan.id}-cta`}
          >
            {plan.ctaLabel}
            <span aria-hidden>→</span>
          </MagneticButton>
        </div>
      </div>
    </motion.div>
  );
}
