import React, { useEffect, useRef, useState } from "react";

/**
 * Custom cursor orb that follows the mouse with spring lag,
 * expands over interactive elements, and inverts on dark sections.
 */
export default function CursorOrb() {
  const dot = useRef(null);
  const ring = useRef(null);
  const [visible, setVisible] = useState(false);
  const state = useRef({
    x: 0, y: 0, tx: 0, ty: 0,
    rx: 0, ry: 0,
    scale: 1, tscale: 1,
    invert: false,
  });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e) => {
      state.current.tx = e.clientX;
      state.current.ty = e.clientY;
      setVisible(true);
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const interactive = el?.closest("a, button, input, textarea, [data-magnetic], [data-cursor-hover]");
      state.current.tscale = interactive ? 2.3 : 1;
      // Check if inside inverted section
      const invSection = el?.closest(".section-invert");
      state.current.invert = !!invSection;
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    let raf;
    const tick = () => {
      const s = state.current;
      s.x += (s.tx - s.x) * 0.9;
      s.y += (s.ty - s.y) * 0.9;
      s.rx += (s.tx - s.rx) * 0.18;
      s.ry += (s.ty - s.ry) * 0.18;
      s.scale += (s.tscale - s.scale) * 0.18;

      if (dot.current) {
        dot.current.style.transform = `translate3d(${s.x - 3}px, ${s.y - 3}px, 0)`;
        dot.current.style.background = s.invert ? "#f7f3e8" : "#013aa9";
      }
      if (ring.current) {
        ring.current.style.transform = `translate3d(${s.rx - 18}px, ${s.ry - 18}px, 0) scale(${s.scale})`;
        ring.current.style.borderColor = s.invert ? "#f7f3e8" : "#013aa9";
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dot}
        aria-hidden
        data-testid="cursor-dot"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#013aa9",
          pointerEvents: "none",
          zIndex: 9998,
          opacity: visible ? 1 : 0,
          transition: "opacity .3s ease, background .3s ease",
          mixBlendMode: "normal",
        }}
      />
      <div
        ref={ring}
        aria-hidden
        data-testid="cursor-ring"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "1px solid #013aa9",
          pointerEvents: "none",
          zIndex: 9998,
          opacity: visible ? 1 : 0,
          transition: "opacity .3s ease, border-color .3s ease",
        }}
      />
    </>
  );
}
