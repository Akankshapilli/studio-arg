import Image from "next/image";

export default function ConnectPage() {
  return (
    <main className="min-h-screen bg-[#F5F1EA] flex items-center justify-center px-6">
      <div className="w-full max-w-md text-center">
        {/* Logo */}
        <Image
          src="/images/Light.png"
          alt="Studio ARG"
          width={300}
          height={300}
          className="w-40 mx-auto mb-8"
        />

        {/* Heading */}
        <h1 className="text-4xl tracking-wide text-black mb-2">
          STUDIO<span className="font-serif">ARG</span>
        </h1>

        <p className="text-sm tracking-wide text-[#B08D57] mb-10">
          Interior Design & Architecture
        </p>

        {/* Buttons */}
        <div className="space-y-4">
          <a
            href="https://instagram.com/studioarg.design"
            target="_blank"
            className="block border border-[#B08D57] rounded-xl py-4 text-lg hover:bg-[#B08D57] hover:text-white transition"
          >
            Instagram
          </a>

          <a
            href="https://wa.me/918885508822"
            target="_blank"
            className="block border border-[#B08D57] rounded-xl py-4 text-lg hover:bg-[#B08D57] hover:text-white transition"
          >
            WhatsApp
          </a>

          <a
            href="https://studioarg.in"
            target="_blank"
            className="block border border-[#B08D57] rounded-xl py-4 text-lg hover:bg-[#B08D57] hover:text-white transition"
          >
            Website
          </a>
        </div>
      </div>
    </main>
  );
}
