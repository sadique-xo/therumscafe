import Image from "next/image";

const galleryImages = [
  { src: "/gallery/gallery-1.png", alt: "Outdoor patio seating with pendant lights and greenery" },
  { src: "/gallery/gallery-2.png", alt: "Indoor-outdoor seating with woven furniture and olive cushions" },
  { src: "/gallery/gallery-3.png", alt: "Stylish lounge area with natural stone floor and bamboo backdrop" },
  { src: "/gallery/gallery-4.png", alt: "Covered patio with eclectic pendant lights and plants" },
  { src: "/gallery/gallery-5.png", alt: "Premium seating arrangement with warm wood flooring" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-28 px-6 bg-gradient-olive relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <p className="text-luxury-wide text-gold text-xs font-medium tracking-[0.2em] mb-4 text-center">
          Our Space
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-olive mb-12 text-center tracking-tight">
          Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="relative overflow-hidden rounded-2xl shadow-luxury border border-olive/10 hover:shadow-luxury-lg hover:border-gold/20 transition-all duration-300 group"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
