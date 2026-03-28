"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "Anisha transformed our home beyond what we imagined. Her attention to detail, creative vision, and ability to understand our needs made the entire experience exceptional.",
    author: "Priya & Rahul Mehta",
    role: "Residential Client, Hyderabad",
  },
  {
    quote:
      "Working with Studio ARG on our office redesign was seamless. She delivered a space that is both beautiful and deeply functional — our team loves coming in every day.",
    author: "Kiran Reddy",
    role: "Founder, Studio Arc",
  },
  {
    quote:
      "The boutique Anisha designed for us has become a destination in itself. Every customer comments on how unique and inviting the space feels. Truly remarkable work.",
    author: "Deepa Nair",
    role: "Owner, Maison Boutique",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="testimonials"
      ref={ref}
      className="bg-[#EEE8DC] px-8 md:px-16 py-28"
    >
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.32em] uppercase text-[#B08D57] mb-4 flex items-center gap-3"
        >
          Client Words <span className="block w-8 h-px bg-[#B08D57]" />
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-[family-name:var(--font-cormorant)] text-[clamp(36px,4vw,54px)] font-light leading-[1.15] text-[#1A1A1A] mb-16"
        >
          What Clients <em className="italic text-[#B08D57]">Say</em>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[#FDFAF5] p-10"
            >
              <span className="font-[family-name:var(--font-cormorant)] text-[80px] leading-[0.6] text-[#B08D57]/20 block mb-5">
                &ldquo;
              </span>
              <p className="font-[family-name:var(--font-cormorant)] text-[17px] font-light italic leading-[1.8] text-[#1A1A1A] mb-8">
                {t.quote}
              </p>
              <div className="font-[family-name:var(--font-jost)] text-[11px] tracking-[0.18em] uppercase text-[#B08D57]">
                {t.author}
              </div>
              <div className="font-[family-name:var(--font-jost)] text-[12px] font-light text-[#5C5751] mt-1">
                {t.role}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
