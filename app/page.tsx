import Hero from "../components/landing/Hero";
import Header from "../components/landing/Header";
import FAQ from "../components/landing/FAQ";
import Footer from "../components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f4f5] bg-gradient-to-b from-[#f5f4f5] from-40% to-[#faf9fa] to-60%">
      <Header />
      <div className="relative">
        <Hero />
      </div>
      <FAQ />
      <Footer />
    </main>
  );
}
