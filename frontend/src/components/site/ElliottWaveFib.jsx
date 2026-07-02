import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * Signature Aurrum motif: an animated Elliott Wave (1-2-3-4-5, A-B-C)
 * with Fibonacci retracement levels drawn behind it.
 * Draws the impulse first, then the correction, then fades in the Fib grid.
 */
export default function ElliottWaveFib({ className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  // Elliott wave pivots inside a 1000 x 220 viewBox (y=200 low, y=20 high)
  const pivots = [
    { x: 40, y: 200, label: "" },        // wave start / origin
    { x: 175, y: 130, label: "(1)" },
    { x: 245, y: 165, label: "(2)" },
    { x: 470, y: 45,  label: "(3)" },
    { x: 585, y: 95,  label: "(4)" },
    { x: 720, y: 22,  label: "(5)" },
    { x: 815, y: 100, label: "(A)" },
    { x: 880, y: 65,  label: "(B)" },
    { x: 995, y: 130, label: "(C)" },
  ];

  const line = (arr) => arr.map((p, i) => (i === 0 ? `M${p.x},${p.y}` : `L${p.x},${p.y}`)).join(" ");
  const impulsePath = line(pivots.slice(0, 6));
  const correctionPath = line(pivots.slice(5));

  // Fib retracement from origin low (y=200) up to wave 5 high (y=22)
  const low = 200;
  const high = 22;
  const range = low - high; // 178
  const fibs = [
    { pct: 0.0,   label: "0.000" },
    { pct: 0.236, label: "0.236" },
    { pct: 0.382, label: "0.382" },
    { pct: 0.500, label: "0.500" },
    { pct: 0.618, label: "0.618" },
    { pct: 0.786, label: "0.786" },
    { pct: 1.0,   label: "1.000" },
  ].map((f) => ({ ...f, y: high + f.pct * range }));

  return (
    <div ref={ref} className={"relative " + className}>
      <svg viewBox="0 0 1060 240" preserveAspectRatio="none" className="w-full h-full" aria-hidden>
        {/* Section label */}
        <motion.text
          x="40" y="14"
          fill="#013aa9" fillOpacity={0.55}
          fontSize="8" fontFamily="IBM Plex Mono, monospace" letterSpacing="2"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          ELLIOTT · IMPULSE + CORRECTION
        </motion.text>
        <motion.text
          x="1020" y="14" textAnchor="end"
          fill="#013aa9" fillOpacity={0.55}
          fontSize="8" fontFamily="IBM Plex Mono, monospace" letterSpacing="2"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          FIB RETRACEMENT
        </motion.text>

        {/* Fibonacci horizontal grid */}
        {fibs.map((f, i) => (
          <g key={i}>
            <motion.line
              x1="40" x2="1000" y1={f.y} y2={f.y}
              stroke="#013aa9"
              strokeOpacity={f.pct === 0 || f.pct === 1 ? 0.35 : 0.18}
              strokeWidth={f.pct === 0.618 ? 0.9 : 0.5}
              strokeDasharray={f.pct === 0.618 ? "0" : "2 4"}
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 1.6, delay: 3.0 + i * 0.12, ease: "easeInOut" }}
            />
            <motion.text
              x="1006" y={f.y + 3}
              fill="#013aa9" fillOpacity={0.6}
              fontSize="7" fontFamily="IBM Plex Mono, monospace" letterSpacing="1.4"
              initial={{ opacity: 0, x: 1010 }}
              animate={inView ? { opacity: 1, x: 1006 } : {}}
              transition={{ duration: 0.5, delay: 3.4 + i * 0.12 }}
            >
              {f.label}
            </motion.text>
          </g>
        ))}

        {/* Impulse wave 1→5 */}
        <motion.path
          d={impulsePath}
          fill="none"
          stroke="#013aa9"
          strokeWidth="1.6"
          strokeDasharray="8 4"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 2.6, ease: "easeInOut", delay: 0.2 }}
        />
        {/* Correction wave A→C (lighter, dashed) */}
        <motion.path
          d={correctionPath}
          fill="none"
          stroke="#013aa9"
          strokeOpacity={0.55}
          strokeWidth="1.2"
          strokeDasharray="4 5"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.8, ease: "easeInOut", delay: 2.6 }}
        />

        {/* Pivot dots + labels */}
        {pivots.filter((p) => p.label).map((p, i) => {
          const isImpulse = i < 5;
          const delay = isImpulse ? 0.5 + i * 0.36 : 2.9 + (i - 5) * 0.3;
          return (
            <g key={i}>
              <motion.circle
                cx={p.x} cy={p.y} r="3.2"
                fill="#f7f3e8"
                stroke="#013aa9"
                strokeWidth="1.4"
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.35, delay }}
              />
              <motion.text
                x={p.x + 8}
                y={p.y - 6}
                fill="#013aa9"
                fontSize="9"
                fontFamily="IBM Plex Mono, monospace"
                fontWeight="600"
                letterSpacing="0.5"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: delay + 0.1 }}
              >
                {p.label}
              </motion.text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
