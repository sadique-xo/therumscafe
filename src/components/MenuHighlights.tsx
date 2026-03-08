import Link from "next/link";
import { Button } from "@/components/ui/button";
import { menuHighlights } from "@/data/cafe-data";

export function MenuHighlights() {
  return (
    <section className="py-28 px-6 bg-gradient-olive relative">
      <div className="max-w-6xl mx-auto">
        <p className="text-luxury-wide text-gold text-xs font-medium tracking-[0.2em] mb-4 text-center">
          Signature Dishes
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-olive mb-12 text-center tracking-tight">
          What&apos;s Good
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuHighlights.map((item) => (
            <div
              key={item.name}
              className="bg-cream-warm rounded-2xl p-6 shadow-luxury border border-olive/10 hover:shadow-luxury-lg hover:border-gold/20 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-heading text-xl font-semibold text-olive group-hover:text-olive-light transition-colors">
                  {item.name}
                </h3>
                <span className="font-semibold bg-gradient-gold bg-clip-text text-transparent">₹{item.price}</span>
              </div>
              <span className="inline-block text-xs font-medium text-olive/80 bg-olive/10 px-3 py-1.5 rounded-full mb-3 tracking-wide">
                {item.tag}
              </span>
              <p className="text-foreground/80 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-14">
          <Link href="/menu">
            <Button
              size="lg"
              className="bg-olive hover:bg-olive-light text-cream rounded-full px-10 py-6 text-base font-semibold shadow-luxury hover:shadow-luxury-lg transition-all duration-300"
            >
              View Full Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
