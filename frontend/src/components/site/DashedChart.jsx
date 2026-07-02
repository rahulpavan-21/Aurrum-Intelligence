import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * The signature Aurrum dashed chart motif — reused across sections.
 */
export default function DashedChart({ className = "", stroke = "#013aa9", strokeOpacity = 1 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <svg
      ref={ref}
      viewBox="0 0 1000 200"
      preserveAspectRatio="none"
      className={className}
      aria-hidden
    >
      <motion.path
        d="M0,140 L80,120 L140,150 L210,90 L280,110 L360,60 L430,95 L500,40 L570,80 L650,30 L730,70 L810,50 L890,100 L970,45 L1000,70"
        fill="none"
        stroke={stroke}
        strokeOpacity={strokeOpacity}
        strokeWidth="2"
        strokeDasharray="8 8"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 3.2, ease: "easeInOut" }}
      />
      <motion.path
        d="M0,170 L80,160 L140,175 L210,140 L280,150 L360,120 L430,140 L500,100 L570,130 L650,90 L730,115 L810,100 L890,140 L970,105 L1000,120"
        fill="none"
        stroke={stroke}
        strokeOpacity={strokeOpacity * 0.4}
        strokeWidth="1"
        strokeDasharray="4 6"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 3.5, ease: "easeInOut", delay: 0.3 }}
      />
    </svg>
  );
}
