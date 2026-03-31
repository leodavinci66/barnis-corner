import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";
import Fab from "@/components/Fab";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Visit />
      </main>
      <Footer />
      <Fab />
    </>
  );
}
