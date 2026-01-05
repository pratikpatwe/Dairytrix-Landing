import Hero from "../components/landing/Hero";
import Header from "../components/landing/Header";

export default function Home() {
  return (
    <main className="min-h-[200vh] bg-[#f5f4f5]">
      <Header />
      <div className="relative">
        <Hero />
      </div>
      {/* Spacer to allow scrolling on the page but keeping Hero at screen height */}
      <div className="h-[100vh]" />
    </main>
  );
}
