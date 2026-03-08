import { about } from "@/data/cafe-data";

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-cream">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-olive mb-8">
          {about.heading}
        </h2>
        <p className="text-lg text-foreground/90 leading-relaxed mb-12">
          {about.text}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {about.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-3xl font-bold text-gold mb-1">
                {stat.value}
              </div>
              <div className="text-foreground/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
