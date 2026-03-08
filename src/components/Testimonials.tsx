import { testimonials } from "@/data/cafe-data";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-24 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-olive mb-4 text-center">
          What People Say
        </h2>
        <p className="text-center text-foreground/70 mb-12">
          4.6★ Dining · 4.4★ Delivery on Zomato · 4.8★ Google
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((review) => (
            <div
              key={review.name}
              className="bg-olive/5 rounded-2xl p-6 border border-olive/10"
            >
              <div className="flex gap-1 mb-2">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-gold text-gold"
                    aria-hidden
                  />
                ))}
              </div>
              <p className="text-foreground/90 text-sm mb-4 italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <div>
                <div className="font-semibold text-olive">{review.name}</div>
                <div className="text-xs text-foreground/60">{review.source}</div>
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
