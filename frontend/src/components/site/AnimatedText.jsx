import React from "react";
import { motion } from "framer-motion";

/**
 * Scroll-triggered word-by-word or letter-by-letter reveal.
 */
export function RevealText({ text, as: Tag = "span", stagger = 0.05, className = "", testId }) {
  const words = text.split(" ");
  return (
    <Tag data-testid={testId} className={className}>
      {words.map((w, i) => (
        <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}>
          <motion.span
            initial={{ y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * stagger }}
            style={{ display: "inline-block", paddingRight: "0.28em" }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

export function RevealBlock({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
