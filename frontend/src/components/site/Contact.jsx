import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { RevealText } from "./AnimatedText";
import MagneticButton from "./MagneticButton";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const STYLES = ["Discretionary", "Systematic / Quant", "Swing", "Position", "Options", "Other"];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", trading_style: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      await axios.post(`${API}/contact`, form);
      setStatus("success");
      setForm({ name: "", email: "", trading_style: "", message: "" });
    } catch (err) {
      setStatus("error");
      const detail = err?.response?.data?.detail;
      setError(typeof detail === "string" ? detail : "Something went wrong. Try again.");
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="section-invert relative py-28 sm:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-6">
            <div className="font-mono-ui text-[10px] uppercase tracking-[0.32em] text-[#f7f3e8]/70 mb-4">§07 — Reach the desk</div>
            <RevealText
              text="Have a question? The analyst desk answers."
              as="h2"
              className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.02em] text-[#f7f3e8] max-w-2xl"
              testId="contact-headline"
            />
            <p className="mt-8 font-sans-ui text-base sm:text-lg text-[#f7f3e8]/85 max-w-xl" data-testid="contact-lede">
              Ask about a briefing, request a sector primer, or tell us what you&apos;d like to see on your desk tomorrow morning.
              Every message is read by an analyst — no bots, no funnels.
            </p>

            <div className="mt-14 space-y-6 border-t border-dashed border-[#f7f3e8]/30 pt-8 max-w-md">
              <div>
                <div className="font-mono-ui text-[10px] uppercase tracking-[0.32em] text-[#f7f3e8]/70">Desk · Direct</div>
                <a href="mailto:desk@aurrum.co" className="font-display text-2xl underline underline-offset-4">desk@aurrum.co</a>
              </div>
              <div>
                <div className="font-mono-ui text-[10px] uppercase tracking-[0.32em] text-[#f7f3e8]/70">Hours</div>
                <div className="font-sans-ui text-base">Mon–Fri · 05:30 – 17:00 ET</div>
              </div>
              <div>
                <div className="font-mono-ui text-[10px] uppercase tracking-[0.32em] text-[#f7f3e8]/70">Location</div>
                <div className="font-sans-ui text-base">200 Water St, Floor 12 · New York, NY</div>
              </div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={onSubmit}
            data-testid="contact-form"
            className="lg:col-span-6 border border-[#f7f3e8]/30 p-8 sm:p-10 bg-[#012c82]/40 backdrop-blur-sm"
          >
            <Field label="Full name" required>
              <input
                data-testid="contact-input-name"
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border-b border-[#f7f3e8]/40 focus:border-[#f7f3e8] py-3 font-sans-ui text-base text-[#f7f3e8] placeholder-[#f7f3e8]/50 outline-none transition-colors"
                placeholder="Ada Lovelace"
              />
            </Field>

            <Field label="Email" required>
              <input
                data-testid="contact-input-email"
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent border-b border-[#f7f3e8]/40 focus:border-[#f7f3e8] py-3 font-sans-ui text-base text-[#f7f3e8] placeholder-[#f7f3e8]/50 outline-none transition-colors"
                placeholder="ada@analog.eng"
              />
            </Field>

            <Field label="Trading style">
              <div className="flex flex-wrap gap-2 pt-2" data-testid="contact-style-group">
                {STYLES.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setForm({ ...form, trading_style: s })}
                    data-testid={`contact-style-${s.toLowerCase().replace(/[^a-z]/g, "-")}`}
                    className={
                      "px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] font-sans-ui border transition-colors " +
                      (form.trading_style === s
                        ? "bg-[#f7f3e8] text-[#013aa9] border-[#f7f3e8]"
                        : "border-[#f7f3e8]/40 hover:border-[#f7f3e8]")
                    }
                  >
                    {s}
                  </button>
                ))}
              </div>
            </Field>

            <Field label="Message" required>
              <textarea
                data-testid="contact-input-message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent border-b border-[#f7f3e8]/40 focus:border-[#f7f3e8] py-3 font-sans-ui text-base text-[#f7f3e8] placeholder-[#f7f3e8]/50 outline-none resize-none transition-colors"
                placeholder="What's on your desk this week?"
              />
            </Field>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <MagneticButton
                as="button"
                type="submit"
                className="btn-ink"
                style={{ background: "#f7f3e8", color: "#013aa9", borderColor: "#f7f3e8" }}
                testId="contact-submit"
              >
                {status === "loading" ? "Sending…" : "Send to the desk"}
                <span aria-hidden>→</span>
              </MagneticButton>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-mono-ui text-xs uppercase tracking-[0.28em] text-[#7ce0a2]"
                  data-testid="contact-success"
                >
                  ✓ Received. Analyst will reply within 24h.
                </motion.div>
              )}
              {status === "error" && (
                <div className="font-mono-ui text-xs uppercase tracking-[0.28em] text-[#ff9c9c]" data-testid="contact-error">
                  {error}
                </div>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children, required }) {
  return (
    <label className="block mb-6">
      <span className="font-mono-ui text-[10px] uppercase tracking-[0.32em] text-[#f7f3e8]/70">
        {label}{required && <span className="text-[#f7f3e8]"> *</span>}
      </span>
      {children}
    </label>
  );
}
