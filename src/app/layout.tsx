import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "Studio ARG — Interior Design & Architecture",
  description:
    "Studio ARG is a design studio by Anisha Rai Gouni, crafting refined spaces through interior design and architecture.",
  keywords: [
    "interior design",
    "architecture",
    "Hyderabad",
    "Studio ARG",
    "Anisha Rai Gouni",
  ],
  openGraph: {
    title: "Studio ARG",
    description: "Interior Design & Architecture Studio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>{children}</body>
    </html>
  );
}
