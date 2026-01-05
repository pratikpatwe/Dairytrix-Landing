import Hero from "../components/landing/Hero";
import Header from "../components/landing/Header";
import Footer from "../components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f4f5] bg-gradient-to-b from-[#f5f4f5] from-40% to-[#faf9fa] to-60%">
      <Header />
      <div className="relative">
        <Hero />
      </div>
      {/* Spacer to allow scrolling on the page but keeping Hero at screen height */}
      <div className="h-[100vh]" />
      <Footer />
    </main>
  );
}
