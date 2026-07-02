import React from "react";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const SUPPORT_EMAIL = "support@aurrumintelligence.com";

const disclosures = [
  {
    k: "No investment advice",
    v: "Aurrum Intelligence is a market-research and educational publisher. Nothing on this site, in the daily briefing, in the mentorship, or in any Aurrum communication constitutes personal investment advice, a recommendation, a solicitation, or an offer to buy or sell any financial instrument.",
  },
  {
    k: "High-risk instruments",
    v: "Trading leveraged products — CFDs, futures, forex, options, and crypto derivatives — carries a high level of risk and may not be suitable for every investor. Leverage magnifies both gains and losses. You may lose more than your initial deposit. Only trade with capital you can afford to lose in full.",
  },
  {
    k: "Past performance",
    v: "Past performance, hypothetical results, back-tests, published trade ideas and mentorship P&L are not indicative of, and do not guarantee, future results. Market conditions change; strategies that worked historically may fail entirely in different regimes.",
  },
  {
    k: "Your responsibility",
    v: "You are solely responsible for your trading decisions, position sizing, and risk management. Before acting on any information from Aurrum, consult an independent, licensed financial advisor and consider your objectives, financial situation, and risk tolerance.",
  },
  {
    k: "Prop firm & funded accounts",
    v: "Prop-firm mentorship outcomes vary widely by individual, firm rules, market conditions, and execution discipline. Aurrum makes no guarantee of a funded account, a payout, or the retention of any funded account. Firm-specific rules always supersede any general guidance we publish.",
  },
  {
    k: "No fiduciary relationship",
    v: "Subscribing to Aurrum Intelligence, joining the mentorship, or corresponding with the desk does not create a fiduciary, advisory, brokerage, or client relationship between you and Aurrum.",
  },
  {
    k: "Regulatory",
    v: "Aurrum Intelligence is not registered as an investment adviser, broker-dealer, or commodity trading adviser with any regulator, including the SEC, FCA, CFTC, NFA, SEBI, or any equivalent authority. Nothing on this site should be construed as a regulated financial service.",
  },
  {
    k: "Content & IP",
    v: "All briefings, research notes, charts, mentorship material, and site content are the intellectual property of Aurrum Intelligence. Redistribution, republication, or resale in any form is prohibited without written consent.",
  },
];

export default function Contact() {
  return (
    <section id="contact" data-testid="contact-section" className="section-invert relative py-20 sm:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left column — reach + brand */}
          <div className="lg:col-span-5">
            <div className="font-mono-ui text-[10px] uppercase tracking-[0.32em] text-[#f7f3e8]/70 mb-6" data-testid="contact-eyebrow">
              Reach the desk
            </div>

            <motion.h2
              data-testid="contact-headline"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.02em] text-[#f7f3e8]"
            >
              Talk to the desk.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="mt-8 font-sans-ui text-base sm:text-lg text-[#f7f3e8]/85 max-w-md"
              data-testid="contact-lede"
            >
              Every message is read by an analyst — no bots, no funnels.
              Ask about a briefing, request a sector primer, or tell us what
              you&rsquo;d like to see on your desk tomorrow morning.
            </motion.p>

            <div className="mt-10 border-t border-dashed border-[#f7f3e8]/30 pt-8 space-y-6 max-w-md">
              <div>
                <div className="font-mono-ui text-[10px] uppercase tracking-[0.32em] text-[#f7f3e8]/70">
                  Desk · Direct
                </div>
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="font-display text-2xl sm:text-3xl underline underline-offset-4 break-all"
                  data-testid="contact-email-link"
                >
                  {SUPPORT_EMAIL}
                </a>
              </div>

              <div>
                <div className="font-mono-ui text-[10px] uppercase tracking-[0.32em] text-[#f7f3e8]/70">
                  Hours
                </div>
                <div className="font-sans-ui text-base">
                  Mon &ndash; Fri &middot; 05:30 &ndash; 17:00 ET
                </div>
              </div>

              <MagneticButton
                as="a"
                href={`mailto:${SUPPORT_EMAIL}?subject=Aurrum%20Intelligence%20-%20Inquiry`}
                className="btn-ink"
                style={{ background: "#f7f3e8", color: "#013aa9", borderColor: "#f7f3e8" }}
                testId="contact-email-cta"
              >
                Email the desk
                <span aria-hidden>→</span>
              </MagneticButton>
            </div>
          </div>

          {/* Right column — risk disclosure */}
          <div className="lg:col-span-7 lg:pl-10 lg:border-l lg:border-dashed lg:border-[#f7f3e8]/30" data-testid="risk-disclosure">
            <div className="font-mono-ui text-[10px] uppercase tracking-[0.32em] text-[#f7f3e8]/70 mb-6">
              Legal · Risk Disclosure
            </div>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.9 }}
              className="font-display text-2xl sm:text-3xl lg:text-4xl leading-[1.1] tracking-[-0.01em] text-[#f7f3e8] mb-8"
              data-testid="risk-headline"
            >
              Read this before you trade a single tick.
            </motion.h3>

            <dl className="space-y-6">
              {disclosures.map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="grid sm:grid-cols-12 gap-2 sm:gap-6 pb-5 border-b border-dashed border-[#f7f3e8]/20"
                  data-testid={`risk-item-${i}`}
                >
                  <dt className="sm:col-span-4">
                    <div className="font-mono-ui text-[10px] uppercase tracking-[0.28em] text-[#f7f3e8]/70">
                      0{i + 1}
                    </div>
                    <div className="font-display text-lg text-[#f7f3e8] mt-1">
                      {d.k}
                    </div>
                  </dt>
                  <dd className="sm:col-span-8 font-sans-ui text-sm sm:text-[15px] leading-relaxed text-[#f7f3e8]/85">
                    {d.v}
                  </dd>
                </motion.div>
              ))}
            </dl>

            <div className="mt-10 font-mono-ui text-[10px] uppercase tracking-[0.32em] text-[#f7f3e8]/60">
              By using this site or any Aurrum product, you acknowledge that you have read, understood, and accepted this disclosure in full.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
