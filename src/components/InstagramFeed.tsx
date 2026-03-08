import { cafe } from "@/data/cafe-data";
import Image from "next/image";

const placeholderImages = [
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80",
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&q=80",
  "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400&q=80",
  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80",
  "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=400&q=80",
];

export function InstagramFeed() {
  return (
    <section className="py-24 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-olive mb-4 text-center">
          @therumsindia
        </h2>
        <p className="text-center text-foreground/70 mb-12">
          Follow us for the latest updates and mouth-watering visuals
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {placeholderImages.map((src, i) => (
            <a
              key={i}
              href={cafe.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square rounded-xl overflow-hidden border border-olive/10 hover:opacity-90 transition-opacity"
            >
              <Image
                src={src}
                alt={`Instagram post ${i + 1}`}
                width={400}
                height={400}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </a>
          ))}
        </div>
        <div className="text-center">
          <a
            href={cafe.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-olive text-cream px-6 py-3 rounded-full hover:bg-secondary transition-colors font-medium"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
