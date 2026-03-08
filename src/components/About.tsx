import { about } from "@/data/cafe-data";

export function About() {
  return (
    <section id="about" className="py-28 px-6 bg-gradient-luxury relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(184,134,11,0.06)_0%,_transparent_50%)]" />
      <div className="max-w-4xl mx-auto relative">
        <p className="text-luxury-wide text-gold text-xs font-medium tracking-[0.2em] mb-4">
          Our Story
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-olive mb-8 tracking-tight">
          {about.heading}
        </h2>
        <p className="text-lg text-foreground/90 leading-relaxed mb-16 max-w-2xl">
          {about.text}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {about.stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="font-heading text-4xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-foreground/70 text-sm font-medium tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
