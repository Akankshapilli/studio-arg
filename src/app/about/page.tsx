import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function AboutPage() {
  return (
    <main className="bg-[#FDFAF5] min-h-screen">
      <Navbar />
      <div className="pt-28">
        <About />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
