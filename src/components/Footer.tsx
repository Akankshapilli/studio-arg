import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] px-8 md:px-16 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.svg"
            alt="Studio ARG"
            width={120}
            height={40}
            style={{ filter: "brightness(0) invert(1)", width: "auto" }}
          />
        </Link>

        <p className="font-[family-name:var(--font-jost)] text-[11px] font-light tracking-[0.12em] text-[#F6F1E9]/30 text-center">
          © 2025 Studio ARG · All Rights Reserved
        </p>

        <p className="font-[family-name:var(--font-jost)] text-[11px] font-light tracking-[0.1em] text-[#F6F1E9]/30">
          Designed &amp; Developed by{" "}
          <a
            href="#"
            className="text-[#B08D57] hover:text-[#C9A96E] transition-colors"
          >
            Akanksha Pilli
          </a>
        </p>
      </div>
    </footer>
  );
}
