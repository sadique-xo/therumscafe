import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cafe } from "@/data/cafe-data";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="The Rums Café - neon signage at night"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-b from-olive/20 via-transparent to-olive/30" />
      </div>

      <div className="relative z-10 text-center px-6 py-24 max-w-4xl mx-auto">
        <p className="text-luxury-wide text-gold-light text-xs md:text-sm font-medium tracking-[0.2em] mb-4">
          Premium Dining · Ranchi
        </p>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-4 drop-shadow-2xl tracking-tight">
          {cafe.name}
        </h1>
        <p className="font-heading text-2xl md:text-4xl text-gold-light mb-2 font-medium drop-shadow-lg">
          {cafe.tagline}
        </p>
        <p className="text-cream/95 text-sm md:text-base mb-1 font-light">
          {cafe.taglineSub}
        </p>
        <p className="text-cream/80 text-xs md:text-sm mb-10 tracking-wide">
          {cafe.cuisines}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/menu">
            <Button
              size="lg"
              className="bg-gradient-gold hover:opacity-95 text-olive font-semibold rounded-full px-8 py-6 text-lg shadow-luxury hover:shadow-gold-glow transition-all duration-300 border border-gold-dark/20"
            >
              View Menu
            </Button>
          </Link>
          <a href={cafe.maps} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-lg border-2 border-cream/90 bg-cream/5 backdrop-blur-sm text-cream hover:bg-cream hover:text-olive font-semibold transition-all duration-300 shadow-luxury-sm"
            >
              View Directions
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
