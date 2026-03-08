import Link from "next/link";
import { Button } from "@/components/ui/button";
import { menuHighlights } from "@/data/cafe-data";

export function MenuHighlights() {
  return (
    <section className="py-24 px-6 bg-olive/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-olive mb-12 text-center">
          What&apos;s Good
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuHighlights.map((item) => (
            <div
              key={item.name}
              className="bg-cream rounded-2xl p-6 shadow-sm border border-olive/10 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-heading text-xl font-semibold text-olive">
                  {item.name}
                </h3>
                <span className="font-semibold text-gold">₹{item.price}</span>
              </div>
              <span className="inline-block text-xs font-medium text-olive/80 bg-olive/10 px-2 py-1 rounded-full mb-2">
                {item.tag}
              </span>
              <p className="text-foreground/80 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/menu">
            <Button
              size="lg"
              className="bg-olive hover:bg-secondary text-cream rounded-full px-8"
            >
              View Full Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
