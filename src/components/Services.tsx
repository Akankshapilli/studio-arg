"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    num: "01",
    title: "Interior Design",
    desc: "Full-scope residential and commercial interior design — from concept and space planning to material selection, furniture, lighting, and final styling.",
  },
  {
    num: "02",
    title: "Architectural Design",
    desc: "Architecture that responds to context, culture, and client aspirations. From initial sketches to construction documentation and site supervision.",
  },
  {
    num: "03",
    title: "Space Planning",
    desc: "Thoughtful layout strategies that optimise flow, functionality, and experience for any scale of space — residential, hospitality, or commercial.",
  },
  {
    num: "04",
    title: "3D Visualisation",
    desc: "Photorealistic renders and walkthroughs that bring designs to life before a single wall goes up, helping clients see and feel their future space.",
  },
  {
    num: "05",
    title: "Renovation & Fit-Out",
    desc: "End-to-end management of renovation projects — coordinating contractors, suppliers, and timelines to deliver seamless transformations.",
  },
  {
    num: "06",
    title: "Consultation",
    desc: "One-on-one design consultations for clients who need expert direction on colour palettes, furniture choices, or design decisions for their space.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      ref={ref}
      className="bg-[#1A1A1A] px-8 md:px-16 py-28"
    >
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.32em] uppercase text-[#C9A96E] mb-4 flex items-center gap-3"
        >
          What We Offer <span className="block w-8 h-px bg-[#C9A96E]" />
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-[family-name:var(--font-cormorant)] text-[clamp(36px,4vw,54px)] font-light leading-[1.15] text-[#FDFAF5] mb-16"
        >
          Design <em className="italic text-[#C9A96E]">Services</em>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-white/7">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="p-10 border border-white/7 group hover:bg-white/[0.03] transition-colors duration-300"
            >
              <div className="font-[family-name:var(--font-cormorant)] text-5xl font-light text-[#B08D57]/20 leading-none mb-5 group-hover:text-[#B08D57]/40 transition-colors duration-300">
                {s.num}
              </div>
              <div className="font-[family-name:var(--font-cormorant)] text-[22px] font-light text-[#FDFAF5] mb-4">
                {s.title}
              </div>
              <p className="font-[family-name:var(--font-jost)] text-[13px] font-light leading-[1.85] text-[#F6F1E9]/45">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
