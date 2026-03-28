"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectCategory } from "@/types";
import Image from "next/image";

const categories: ProjectCategory[] = [
  "All",
  "Residential",
  "Commercial",
  "Hospitality",
];

export default function Projects() {
  const [active, setActive] = useState<ProjectCategory>("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section
      id="projects"
      ref={ref}
      className="bg-[#F6F1E9] px-8 md:px-16 py-28"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.32em] uppercase text-[#B08D57] mb-4 flex items-center gap-3"
            >
              Portfolio <span className="block w-8 h-px bg-[#B08D57]" />
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-[family-name:var(--font-cormorant)] text-[clamp(36px,4vw,54px)] font-light leading-[1.15] text-[#1A1A1A]"
            >
              Selected <em className="italic text-[#B08D57]">Projects</em>
            </motion.h2>
          </div>

          {/* Category filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-[family-name:var(--font-jost)] text-[10px] tracking-[0.2em] uppercase px-5 py-2.5 border transition-all duration-300 ${
                  active === cat
                    ? "bg-[#1A1A1A] text-[#F6F1E9] border-[#1A1A1A]"
                    : "bg-transparent text-[#5C5751] border-[#5C5751]/30 hover:border-[#B08D57] hover:text-[#B08D57]"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const isFirstFeatured = i === 0;
              const isWide = i === 4;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className={`
                    ${isFirstFeatured ? "md:col-span-2 md:row-span-2" : ""}
                    ${isWide && !isFirstFeatured ? "md:col-span-2" : ""}
                  `}
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className={`group block h-full ${isFirstFeatured ? "flex flex-col" : ""}`}
                  >
                    {/* Image container */}
                    <div
                      className={`relative overflow-hidden bg-[#EEE8DC] ${
                        isFirstFeatured
                          ? "flex-1 min-h-[400px]"
                          : isWide
                            ? "aspect-[16/7]"
                            : "aspect-[4/3]"
                      }`}
                    >
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        sizes={
                          isFirstFeatured
                            ? "(max-width: 768px) 100vw, 66vw"
                            : isWide
                              ? "(max-width: 768px) 100vw, 66vw"
                              : "(max-width: 768px) 100vw, 33vw"
                        }
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        priority={i < 2}
                      />

                      {/* Dark overlay on hover */}
                      <div className="absolute inset-0 bg-[#1A1A1A]/0 group-hover:bg-[#1A1A1A]/70 transition-all duration-500" />

                      {/* Category tag — always visible */}
                      <div className="absolute top-4 left-4">
                        <span className="font-[family-name:var(--font-jost)] text-[9px] tracking-[0.25em] uppercase bg-[#F6F1E9]/90 text-[#B08D57] px-3 py-1.5">
                          {project.category}
                        </span>
                      </div>

                      {/* Hover content */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
                        <p className="font-[family-name:var(--font-jost)] text-[9px] tracking-[0.25em] uppercase text-[#C9A96E] mb-2">
                          {project.category} · {project.year} ·{" "}
                          {project.location}
                        </p>
                        <p className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-light text-[#FDFAF5] mb-2 leading-tight">
                          {project.title}
                        </p>
                        <p className="font-[family-name:var(--font-jost)] text-[12px] font-light text-[#FDFAF5]/65 leading-relaxed max-w-md">
                          {project.shortDesc}
                        </p>
                        <div className="flex items-center gap-2 mt-4">
                          <span className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.2em] uppercase text-[#B08D57]">
                            View Project
                          </span>
                          <span className="block w-8 h-px bg-[#B08D57]" />
                        </div>
                      </div>
                    </div>

                    {/* Info below image */}
                    <div className="pt-3 pb-1 flex items-start justify-between">
                      <div>
                        <p className="font-[family-name:var(--font-cormorant)] text-[18px] font-light text-[#1A1A1A] group-hover:text-[#B08D57] transition-colors leading-tight">
                          {project.title}
                        </p>
                        <p className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.15em] uppercase text-[#5C5751]/70 mt-0.5">
                          {project.year} · {project.area}
                        </p>
                      </div>
                      <span className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.15em] uppercase text-[#B08D57] mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap ml-4">
                        View →
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
