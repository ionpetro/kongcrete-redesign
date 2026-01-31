import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Clients from "@/components/Clients";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Clients />
      <CTA />
      <Footer />
    </main>
  );
}
