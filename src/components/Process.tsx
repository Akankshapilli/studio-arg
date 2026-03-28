"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "1",
    title: "Discovery",
    desc: "Understanding your vision, lifestyle, and requirements through an in-depth brief and site visit.",
  },
  {
    num: "2",
    title: "Concept",
    desc: "Developing mood boards, space plans, and a design direction that captures the essence of your project.",
  },
  {
    num: "3",
    title: "Design",
    desc: "Detailed design development including 3D visualisations, material selections, and technical drawings.",
  },
  {
    num: "4",
    title: "Delivery",
    desc: "Overseeing execution on-site to ensure every detail is realised exactly as envisioned.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="process"
      ref={ref}
      className="bg-[#FDFAF5] px-8 md:px-16 py-28"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.32em] uppercase text-[#B08D57] mb-4 flex items-center justify-center gap-3"
          >
            How We Work <span className="block w-8 h-px bg-[#B08D57]" />
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-[family-name:var(--font-cormorant)] text-[clamp(36px,4vw,54px)] font-light text-[#1A1A1A]"
          >
            The Design <em className="italic text-[#B08D57]">Process</em>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          {/* Connecting line — desktop only */}
          <div className="absolute top-7 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#B08D57]/30 to-transparent hidden md:block" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full border border-[#B08D57] flex items-center justify-center mb-6 bg-[#FDFAF5] relative z-10">
                <span className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-[#B08D57]">
                  {step.num}
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-light text-[#1A1A1A] mb-3">
                {step.title}
              </h3>
              <p className="font-[family-name:var(--font-jost)] text-[13px] font-light leading-[1.8] text-[#5C5751]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
