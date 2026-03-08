import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { MenuHighlights } from "@/components/MenuHighlights";
import { Testimonials } from "@/components/Testimonials";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <MenuHighlights />
        <Testimonials />
        <Location />
        <Footer />
      </main>
    </>
  );
}
