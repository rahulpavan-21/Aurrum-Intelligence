import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Magnetic button that gently pulls toward the cursor.
 * Renders children inside — either <button> or <a>.
 */
export default function MagneticButton({
  children,
  as = "button",
  className = "",
  strength = 0.35,
  onClick,
  href,
  testId,
  type = "button",
  ...rest
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 22 });
  const sy = useSpring(y, { stiffness: 260, damping: 22 });

  const onMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  const Comp = as === "a" ? motion.a : motion.button;
  return (
    <Comp
      ref={ref}
      data-magnetic
      data-testid={testId}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      href={href}
      type={as === "a" ? undefined : type}
      style={{ x: sx, y: sy, display: "inline-flex" }}
      className={className}
      {...rest}
    >
      {children}
    </Comp>
  );
}
