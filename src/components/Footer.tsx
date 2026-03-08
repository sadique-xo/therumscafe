import { Instagram } from "lucide-react";
import { cafe } from "@/data/cafe-data";

export function Footer() {
  return (
    <footer className="py-20 px-6 bg-gradient-footer text-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(184,134,11,0.08)_0%,_transparent_70%)]" />
      <div className="max-w-6xl mx-auto text-center relative">
        <div className="font-heading text-2xl font-bold mb-2 tracking-tight">{cafe.name}</div>
        <p className="text-gold-light font-medium mb-1">{cafe.tagline}</p>
        <p className="text-cream/80 text-sm mb-8">{cafe.taglineSub}</p>
        <div className="flex justify-center gap-6 mb-8">
          <a
            href={cafe.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold-light transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6" />
          </a>
          <a
            href={cafe.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors text-sm flex items-center"
          >
            WhatsApp
          </a>
        </div>
        <a
          href={`tel:${cafe.phoneRaw}`}
          className="text-cream/90 hover:text-cream transition-colors"
        >
          {cafe.phone}
        </a>
        <div className="mt-8 pt-8 border-t border-cream/20 text-sm text-cream/70">
          <p>© 2025 {cafe.name}. All rights reserved.</p>
          <p className="mt-2">
            Created by{" "}
            <a
              href="https://sadique.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-light hover:text-gold transition-colors duration-300"
            >
              Sadique (sadique.co)
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
