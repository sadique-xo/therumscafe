import { testimonials } from "@/data/cafe-data";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-28 px-6 bg-gradient-luxury relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(30,45,18,0.04)_0%,_transparent_50%)]" />
      <div className="max-w-6xl mx-auto relative">
        <p className="text-luxury-wide text-gold text-xs font-medium tracking-[0.2em] mb-4 text-center">
          Testimonials
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-olive mb-4 text-center tracking-tight">
          What People Say
        </h2>
        <p className="text-center text-foreground/70 mb-14 font-medium">
          4.6★ Dining · 4.4★ Delivery on Zomato · 4.8★ Google
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((review) => (
            <div
              key={review.name}
              className="bg-cream-warm/80 backdrop-blur-sm rounded-2xl p-6 shadow-luxury border border-olive/10 hover:shadow-luxury-lg hover:border-gold/15 transition-all duration-300"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-gold text-gold"
                    aria-hidden
                  />
                ))}
              </div>
              <p className="text-foreground/90 text-sm mb-5 italic leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
              <div>
                <div className="font-semibold text-olive">{review.name}</div>
                <div className="text-xs text-foreground/60 font-medium">{review.source}</div>
                <div className="text-xs text-foreground/50 mt-1">
                  Food: 5/5 · Service: 5/5 · Atmosphere: 5/5
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
