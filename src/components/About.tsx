"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const stats = [
  { num: "4+", label: "Years Experience" },
  { num: "20+", label: "Projects Completed" },
  { num: "100%", label: "Client Satisfaction" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="bg-[#FDFAF5] px-8 md:px-16 py-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Left */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.32em] uppercase text-[#B08D57] mb-4 flex items-center gap-3"
          >
            About <span className="block w-8 h-px bg-[#B08D57]" />
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-[family-name:var(--font-cormorant)] text-[clamp(36px,4vw,54px)] font-light leading-[1.15] text-[#1A1A1A] mb-8"
          >
            Designing with
            <br />
            <em className="italic text-[#B08D57]">Purpose & Precision</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-[family-name:var(--font-jost)] text-[15px] font-light leading-[1.9] text-[#5C5751] mb-5"
          >
            Studio ARG is an interior design and architecture studio founded by
            Anisha Rai Gouni, based in Hyderabad. Known for creating spaces that
            seamlessly blend aesthetics with function, the studio draws from a
            deep respect for materials, light, and the human experience of
            space.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-[family-name:var(--font-jost)] text-[15px] font-light leading-[1.9] text-[#5C5751]"
          >
            Each project is approached as a unique narrative — one that reflects
            the client&apos;s vision while pushing the boundaries of thoughtful,
            timeless design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 mt-12 pt-10 border-t border-[#B08D57]/20"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-[family-name:var(--font-cormorant)] text-[44px] font-light text-[#B08D57] leading-none mb-1">
                  {s.num}
                </div>
                <div className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.15em] uppercase text-[#5C5751]">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — photo placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[3/4] relative overflow-hidden">
            <Image
              src="/images/me.png"
              alt="Anisha Rai Gouni"
              fill
              className="object-cover object-[50%_15%] scale-160"
            />
          </div>
          {/* Decorative border offset */}
          <div className="absolute -top-4 -left-4 right-4 bottom-4 border border-[#B08D57]/20 -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
