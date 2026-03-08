import type { Metadata } from "next";
import { Kaushan_Script, Inter } from "next/font/google";
import "./globals.css";

const kaushanScript = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-kaushan",
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
    <html lang="en" className={`${kaushanScript.variable} ${inter.variable}`}>
      <body className="font-body antialiased bg-cream-warm text-foreground overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
