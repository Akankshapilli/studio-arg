"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const links = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/#projects" },
  { name: "Services", href: "/#services" },
  { name: "Process", href: "/#process" },
  { name: "Contact", href: "/#contact" },
];

interface NavbarProps {
  forceLight?: boolean;
}

export default function Navbar({ forceLight = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLight = scrolled || forceLight;

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-16 transition-all duration-500 ${
          isLight
            ? "py-3 bg-[#FFFCF8]/90 backdrop-blur-xl border-b border-[#B08D57]/10 shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
            : "py-6 bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center relative">
          {/* Dark logo */}
          <Image
            src="/images/logo.svg"
            alt="Studio ARG"
            width={130}
            height={42}
            className={`transition-all duration-500 ${
              isLight ? "opacity-100" : "opacity-0 absolute"
            }`}
            style={{
              filter: "brightness(0)",
              width: "auto",
            }}
          />

          {/* White logo */}
          <Image
            src="/images/logo.svg"
            alt="Studio ARG"
            width={130}
            height={42}
            className={`transition-all duration-500 ${
              isLight ? "opacity-0 absolute" : "opacity-100"
            }`}
            style={{
              filter: "brightness(0) invert(1)",
              width: "auto",
            }}
          />
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden md:flex gap-10">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="font-[family-name:var(--font-jost)] text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 hover:text-[#B08D57]"
                style={{
                  color: isLight ? "#5C5751" : "rgba(253,250,245,0.75)",
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-px"
            style={{
              background: isLight ? "#1A1A1A" : "#FDFAF5",
            }}
          />

          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-px"
            style={{
              background: isLight ? "#1A1A1A" : "#FDFAF5",
            }}
          />

          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-px"
            style={{
              background: isLight ? "#1A1A1A" : "#FDFAF5",
            }}
          />
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#F6F1E9] flex flex-col items-center justify-center gap-10"
          >
            {/* Mobile logo */}
            <Image
              src="/images/logo.svg"
              alt="Studio ARG"
              width={160}
              height={52}
              className="mb-6"
              style={{ filter: "brightness(0)" }}
            />

            {links.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[#1A1A1A] hover:text-[#B08D57] transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
