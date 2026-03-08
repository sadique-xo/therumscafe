import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { cafe } from "@/data/cafe-data";

export function Location() {
  return (
    <section id="visit" className="py-24 px-4 sm:px-6 bg-olive/5 overflow-x-hidden">
      <div className="max-w-6xl mx-auto w-full min-w-0">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-olive mb-12 text-center">
          Find Us
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-start min-w-0">
          <div className="space-y-6">
            <div className="flex gap-4">
              <MapPin className="h-6 w-6 text-gold shrink-0" />
              <div>
                <div className="font-semibold text-olive mb-1">Address</div>
                <p className="text-foreground/90">{cafe.address}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="h-6 w-6 text-gold shrink-0" />
              <div>
                <div className="font-semibold text-olive mb-1">Phone</div>
                <a
                  href={`tel:${cafe.phoneRaw}`}
                  className="text-foreground/90 hover:text-olive transition-colors"
                >
                  {cafe.phone}
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="h-6 w-6 text-gold shrink-0" />
              <div>
                <div className="font-semibold text-olive mb-1">Hours</div>
                <p className="text-foreground/90">{cafe.hours}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={cafe.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-olive text-cream px-4 py-2 rounded-full hover:bg-secondary transition-colors text-sm font-medium"
              >
                <MapPin className="h-4 w-4" />
                Get Directions
              </a>
              <a
                href={cafe.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors text-sm font-medium"
              >
                WhatsApp
              </a>
              <a
                href={cafe.zomato}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-olive text-olive px-4 py-2 rounded-full hover:bg-olive/10 transition-colors text-sm font-medium"
              >
                <ExternalLink className="h-4 w-4" />
                Zomato
              </a>
              <a
                href={cafe.swiggy}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-olive text-olive px-4 py-2 rounded-full hover:bg-olive/10 transition-colors text-sm font-medium"
              >
                <ExternalLink className="h-4 w-4" />
                Swiggy
              </a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-olive/10 aspect-video min-h-[250px] w-full max-w-full min-w-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.7386!2d85.298168!3d23.350152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1047b2b3b3b%3A0x0!2sThe%20Rums%20Cafe%2C%20Argora%20Chowk%2C%20Ranchi!5e0!3m2!1sen!2sin!4v1709900000000"
              width="100%"
              height="100%"
              style={{ border: 0, maxWidth: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Rums Café location"
              className="min-h-[250px] w-full h-full block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
