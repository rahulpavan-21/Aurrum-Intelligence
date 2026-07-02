import React from "react";
import { motion } from "framer-motion";
import { RevealText } from "./AnimatedText";

const team = [
  {
    name: "Ishaan Roy",
    role: "Head of Desk · Macro",
    prev: "Ex-Bridgewater, GS Global Macro",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDB8fHx8MTc4MzAwNDg4NHww&ixlib=rb-4.1.0&q=85",
  },
  {
    name: "Amara Whitfield",
    role: "Lead Analyst · Equities",
    prev: "Ex-Citadel L/S Fundamental",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDB8fHx8MTc4MzAwNDg4NHww&ixlib=rb-4.1.0&q=85",
  },
  {
    name: "Livia Cortez",
    role: "Quant · Positioning & Flow",
    prev: "Ex-Morgan Stanley PB Data",
    img: "https://images.unsplash.com/photo-1614786269829-d24616faf56d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDB8fHx8MTc4MzAwNDg4NHww&ixlib=rb-4.1.0&q=85",
  },
];

export default function Team() {
  return (
    <section id="team" data-testid="team-section" className="relative py-28 sm:py-40">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="font-mono-ui text-[10px] uppercase tracking-[0.32em] text-[#013aa9]/70 mb-4">§06 — The Desk</div>
            <RevealText
              text="Senior sell-side and buy-side. Now working for you."
              as="h2"
              className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.02em] text-[#013aa9] max-w-4xl"
              testId="team-headline"
            />
          </div>
          <p className="max-w-md font-sans-ui text-base text-[#013aa9]/80" data-testid="team-lede">
            Twelve analysts. Combined 90+ years on institutional desks.
            No influencers, no gurus — just seasoned professionals writing what they&apos;d read.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          {team.map((m, i) => (
            <motion.figure
              key={m.name}
              data-testid={`team-card-${i}`}
              data-cursor-hover
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden border border-[#013aa9]/25">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-1000 group-hover:scale-105"
                  style={{
                    backgroundImage: `url("${m.img}")`,
                    filter: "grayscale(100%) contrast(1.1)",
                  }}
                />
                <div className="absolute inset-0 bg-[#013aa9] mix-blend-multiply opacity-40 group-hover:opacity-10 transition-opacity duration-700" />
                <div className="absolute top-3 left-3 font-mono-ui text-[9px] uppercase tracking-[0.32em] text-[#f7f3e8]">
                  0{i + 1} / 12
                </div>
                <div className="absolute bottom-3 right-3 font-mono-ui text-[9px] uppercase tracking-[0.32em] text-[#f7f3e8]">
                  Aurrum · Desk
                </div>
              </div>
              <figcaption className="mt-5">
                <div className="font-display text-2xl text-[#013aa9] leading-none">{m.name}</div>
                <div className="mt-2 font-mono-ui text-[10px] uppercase tracking-[0.28em] text-[#013aa9]/80">{m.role}</div>
                <div className="mt-1 font-sans-ui text-sm text-[#013aa9]/70">{m.prev}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
