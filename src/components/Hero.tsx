"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end overflow-hidden bg-[#1A1A1A]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2a2520] via-[#1A1A1A] to-[#0f0d0b]">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/images/hero.jpg"
            alt="Studio ARG"
            fill
            className="object-cover opacity-80"
            priority
          />
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/40 to-transparent" />

      {/* Big ARG text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.04 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="font-[family-name:var(--font-cormorant)] text-[clamp(80px,18vw,240px)] font-light leading-none text-white whitespace-nowrap"
        >
          ARG
        </motion.p>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-8 md:px-16 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.35em] uppercase text-[#B08D57] mb-6"
          >
            Interior Design &amp; Architecture
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-[family-name:var(--font-cormorant)] text-[clamp(52px,8vw,110px)] font-light leading-[1.02] text-[#FDFAF5] mb-4"
          >
            Studio <em className="italic text-[#B08D57]">ARG</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-[family-name:var(--font-cormorant)] text-lg md:text-xl font-light italic text-[#FDFAF5]/50 mb-3"
          >
            by Anisha Rai Gouni
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ originX: 0 }}
            className="h-px w-24 bg-[#B08D57]/50 mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="font-[family-name:var(--font-cormorant)] text-lg md:text-xl font-light italic text-[#FDFAF5]/60 max-w-xl mb-10"
          >
            Crafting spaces where architecture meets intention, and every detail
            tells a story.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex items-center gap-8"
          >
            <a
              href="#projects"
              className="font-[family-name:var(--font-jost)] text-[11px] tracking-[0.22em] uppercase bg-[#B08D57] text-[#FDFAF5] px-9 py-4 hover:bg-[#C9A96E] transition-colors duration-300"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="font-[family-name:var(--font-jost)] text-[11px] tracking-[0.22em] uppercase text-[#FDFAF5]/60 border-b border-[#FDFAF5]/30 pb-px hover:text-[#B08D57] hover:border-[#B08D57] transition-colors duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 right-16 hidden md:flex flex-col items-center gap-3"
      >
        <span className="font-[family-name:var(--font-jost)] text-[9px] tracking-[0.3em] uppercase text-[#FDFAF5]/30">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-14 bg-gradient-to-b from-transparent to-[#B08D57]/60"
        />
      </motion.div>
    </section>
  );
}
