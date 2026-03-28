"use client";
import { motion } from "framer-motion";

const items = [
  "Interior Design",
  "Architecture",
  "Space Planning",
  "3D Visualisation",
  "Renovation",
  "Fit-Out",
  "Studio ARG",
];

export default function Marquee() {
  return (
    <div className="overflow-hidden bg-[#1A1A1A] py-4 border-y border-[#B08D57]/20">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap"
      >
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 px-6 font-[family-name:var(--font-cormorant)] text-base font-light italic text-[#B08D57]/70"
          >
            {item}
            <span className="text-[#B08D57]/30 not-italic font-light">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
