import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * Signature Aurrum motif: an animated Elliott Wave (1-2-3-4-5, A-B-C)
 * with Fibonacci retracement levels drawn behind it.
 */
export default function ElliottWaveFib({ className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  // Elliott wave pivots inside a 1000 x 220 viewBox (y=200 low, y=20 high)
  // kind: "peak" places label above pivot, "trough" places label below
  const pivots = [
    { x: 40,  y: 200, label: "",    kind: "trough" }, // origin
    { x: 175, y: 130, label: "(1)", kind: "peak" },
    { x: 245, y: 165, label: "(2)", kind: "trough" },
    { x: 470, y: 45,  label: "(3)", kind: "peak" },
    { x: 585, y: 95,  label: "(4)", kind: "trough" },
    { x: 720, y: 22,  label: "(5)", kind: "peak" },
    { x: 815, y: 100, label: "(A)", kind: "trough" },
    { x: 880, y: 65,  label: "(B)", kind: "peak" },
    { x: 995, y: 130, label: "(C)", kind: "trough" },
  ];

  const line = (arr) => arr.map((p, i) => (i === 0 ? `M${p.x},${p.y}` : `L${p.x},${p.y}`)).join(" ");
  const impulsePath = line(pivots.slice(0, 6));
  const correctionPath = line(pivots.slice(5));

  // Fib retracement from origin low (y=200) up to wave 5 high (y=22)
  const low = 200;
  const high = 22;
  const range = low - high; // 178
  const fibs = [
    { pct: 0.0,   label: "0.0%" },
    { pct: 0.236, label: "23.6%" },
    { pct: 0.382, label: "38.2%" },
    { pct: 0.500, label: "50.0%" },
    { pct: 0.618, label: "61.8%" },
    { pct: 0.786, label: "78.6%" },
    { pct: 1.0,   label: "100.0%" },
  ].map((f) => ({ ...f, y: high + f.pct * range }));

  return (
    <div ref={ref} className={"relative " + className}>
      <svg viewBox="0 0 1090 240" preserveAspectRatio="none" className="w-full h-full" aria-hidden>
        {/* Section captions */}
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
          x="1050" y="14" textAnchor="end"
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
            {/* Fib level percentage chip at end of line */}
            <motion.g
              initial={{ opacity: 0, x: 8 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 3.4 + i * 0.12 }}
            >
              <rect
                x="1006" y={f.y - 8}
                width="66" height="15"
                fill="#f7f3e8"
                stroke="#013aa9"
                strokeWidth={f.pct === 0.618 ? 1 : 0.6}
                strokeOpacity={f.pct === 0.618 ? 1 : 0.5}
              />
              <text
                x="1039" y={f.y + 3}
                textAnchor="middle"
                fill="#013aa9"
                fontSize="10"
                fontFamily="IBM Plex Mono, monospace"
                fontWeight={f.pct === 0.618 ? 700 : 500}
                letterSpacing="1"
              >
                {f.label}
              </text>
            </motion.g>
          </g>
        ))}

        {/* Impulse wave 1 to 5 */}
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
        {/* Correction wave A to C */}
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

        {/* Pivot dots + labels positioned based on peak/trough */}
        {pivots.filter((p) => p.label).map((p, i) => {
          const isImpulse = i < 5;
          const delay = isImpulse ? 0.5 + i * 0.36 : 2.9 + (i - 5) * 0.3;
          const labelDy = p.kind === "peak" ? -10 : 18;
          return (
            <g key={i}>
              <motion.circle
                cx={p.x} cy={p.y} r="3.6"
                fill="#f7f3e8"
                stroke="#013aa9"
                strokeWidth="1.5"
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.35, delay }}
              />
              <motion.text
                x={p.x}
                y={p.y + labelDy}
                textAnchor="middle"
                fill="#013aa9"
                fontSize="10"
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
