"use client";

import { useState, useEffect, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { fullMenuSections } from "@/data/cafe-data";
import { cn } from "@/lib/utils";

export default function MenuPage() {
  const [activeSection, setActiveSection] = useState(fullMenuSections[0].id);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0 }
    );

    fullMenuSections.forEach((section) => {
      const el = sectionRefs.current[section.id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-olive mb-12 text-center">
            The Full Spread
          </h1>

          <div className="sticky top-20 z-40 bg-cream/95 backdrop-blur py-3 -mx-6 px-6 overflow-x-auto mb-12">
            <div className="flex gap-2 min-w-max">
              {fullMenuSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors",
                    activeSection === section.id
                      ? "bg-olive text-cream"
                      : "bg-olive/10 text-olive hover:bg-olive/20"
                  )}
                >
                  {section.name}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-16">
            {fullMenuSections.map((section) => (
              <div
                key={section.id}
                id={section.id}
                ref={(el) => {
                  sectionRefs.current[section.id] = el;
                }}
                className="scroll-mt-32"
              >
                <h2 className="font-heading text-2xl font-bold text-olive mb-2">
                  {section.name}
                </h2>
                {section.note && (
                  <p className="text-foreground/80 text-sm mb-6 italic">
                    {section.note}
                  </p>
                )}
                <div className="space-y-4">
                  {section.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 py-3 border-b border-olive/10 last:border-0"
                    >
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-medium text-foreground">
                            {item.name}
                          </span>
                          <span className="text-xs text-olive/80 bg-olive/10 px-2 py-0.5 rounded">
                            {item.type}
                          </span>
                        </div>
                        {item.desc && (
                          <p className="text-sm text-foreground/70 mt-1">
                            {item.desc}
                          </p>
                        )}
                      </div>
                      <span className="font-semibold text-gold shrink-0">
                        ₹{item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-foreground/60 text-sm mt-12">
            More categories (Pizza, Pasta, Burgers, Mains, Beverages, Shakes,
            Desserts) coming soon.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
