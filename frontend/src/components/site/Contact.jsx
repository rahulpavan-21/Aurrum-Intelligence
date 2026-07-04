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
                  className="font-display text-lg sm:text-xl lg:text-2xl underline underline-offset-4 whitespace-nowrap"
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
                  Mon &ndash; Fri
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
              {/* Socials */}
              <div>
                <div className="font-mono-ui text-[10px] uppercase tracking-[0.32em] text-[#f7f3e8]/70 mb-3">
                  Follow the desk
                </div>
                <div className="flex items-center gap-3">
                  <a href="https://www.linkedin.com/company/133354670/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                     className="w-11 h-11 grid place-items-center border border-[#f7f3e8]/40 text-[#f7f3e8] transition-colors hover:bg-[#f7f3e8] hover:text-[#013aa9]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 002.5 6 2.5 2.5 0 005 8.5 2.5 2.5 0 007.5 6 2.5 2.5 0 005 3.5h-.02zM3 9h4v12H3V9zm6 0h3.8v1.7h.05c.53-1 1.8-2.05 3.7-2.05 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21H9V9z"/></svg>
                  </a>
                  <a href="https://www.instagram.com/aurrum_intelligence/L" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                     className="w-11 h-11 grid place-items-center border border-[#f7f3e8]/40 text-[#f7f3e8] transition-colors hover:bg-[#f7f3e8] hover:text-[#013aa9]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2.5" y="2.5" width="19" height="19" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" stroke="none"/></svg>
                  </a>
                  <a href="https://x.com/aurrumintellige" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"
                     className="w-11 h-11 grid place-items-center border border-[#f7f3e8]/40 text-[#f7f3e8] transition-colors hover:bg-[#f7f3e8] hover:text-[#013aa9]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.3 8.3L23 22h-6.8l-5.3-6.9L4.8 22H1.7l7.8-8.9L1 2h7l4.8 6.3L18.9 2zm-1.2 18h1.9L7.4 4H5.4l12.3 16z"/></svg>
                  </a>
                </div>
              </div>
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

            <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
              {disclosures.map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="pb-5 border-b border-dashed border-[#f7f3e8]/20"
                  data-testid={`risk-item-${i}`}
                >
                  <div className="font-mono-ui text-[10px] uppercase tracking-[0.28em] text-[#f7f3e8]/70">
                    0{i + 1}
                  </div>
                  <dt className="font-display text-base sm:text-lg text-[#f7f3e8] mt-1 mb-2">
                    {d.k}
                  </dt>
                  <dd className="font-sans-ui text-xs sm:text-sm leading-relaxed text-[#f7f3e8]/80">
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
