import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Rums Café | Ranchi's Premium Dining",
  description: "FLAVOUR to SOUL ! Cafe, Workspace, Eatery - Italian, Continental, Chinese, Indian, Tandoor. The Rums Café, Ranchi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-body antialiased bg-cream text-foreground overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
