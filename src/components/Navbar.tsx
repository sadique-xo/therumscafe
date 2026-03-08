"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cafe } from "@/data/cafe-data";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/#about", label: "About" },
  { href: "/#visit", label: "Visit" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isOverHero = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-3 px-4" : "py-6 px-4"
      )}
    >
      <nav
        className={cn(
          "max-w-6xl mx-auto flex items-center justify-between transition-all duration-300 rounded-full px-6 py-3",
          scrolled
            ? "bg-cream/80 backdrop-blur-md border border-olive/10 shadow-sm"
            : "bg-transparent"
        )}
      >
        <Link
          href="/"
          className={cn(
            "font-heading text-xl font-bold transition-colors",
            isOverHero ? "text-cream drop-shadow-md" : "text-olive"
          )}
        >
          {cafe.name}
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-medium transition-colors",
                isOverHero
                  ? "text-cream/95 hover:text-cream drop-shadow-sm"
                  : "text-foreground/80 hover:text-olive"
              )}
            >
              {link.label}
            </Link>
          ))}
          <a href={`tel:${cafe.phoneRaw}`}>
            <Button
              className={cn(
                "rounded-full transition-colors",
                isOverHero
                  ? "bg-cream/90 hover:bg-cream text-olive border border-cream/20"
                  : "bg-olive hover:bg-secondary text-cream"
              )}
            >
              Reserve a Table
            </Button>
          </a>
        </div>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className={cn(
                "p-2 rounded-lg transition-colors",
                isOverHero ? "hover:bg-cream/20 text-cream" : "hover:bg-olive/10 text-olive"
              )}
            >
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-cream border-olive/10 pt-12">
              <SheetHeader className="relative">
                <SheetTitle className="font-heading text-olive text-xl">
                  {cafe.name}
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-5 mt-8 px-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-olive transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href={`tel:${cafe.phoneRaw}`}
                  onClick={() => setOpen(false)}
                  className="mt-4"
                >
                  <Button className="w-full bg-olive hover:bg-secondary text-cream rounded-full">
                    Reserve a Table
                  </Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
