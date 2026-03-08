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
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="relative z-10 text-center px-6 py-24 max-w-4xl mx-auto">
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-cream mb-4 drop-shadow-lg">
          {cafe.name}
        </h1>
        <p className="font-heading text-2xl md:text-4xl text-gold mb-2 font-medium">
          {cafe.tagline}
        </p>
        <p className="text-cream/90 text-sm md:text-base mb-1">
          {cafe.taglineSub}
        </p>
        <p className="text-cream/80 text-xs md:text-sm mb-8">
          {cafe.cuisines}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/menu">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold/90 text-olive font-semibold rounded-full px-8 py-6 text-lg"
            >
              View Menu
            </Button>
          </Link>
          <a href={cafe.maps} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-lg border-2 border-cream bg-transparent text-cream hover:bg-cream hover:text-olive font-semibold transition-colors"
            >
              View Directions
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
