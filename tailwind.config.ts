import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        cream: "#F5F0E8",
        "cream-warm": "#F8F4ED",
        "cream-deep": "#EDE6DB",
        olive: "#1E2D12",
        "olive-light": "#2C3E1A",
        gold: "#B8860B",
        "gold-light": "#D4A84B",
        "gold-dark": "#8B6914",
      },
      fontFamily: {
        heading: ["var(--font-kaushan)", "cursive"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-luxury": "linear-gradient(135deg, #F8F4ED 0%, #EDE6DB 50%, #E8DFD0 100%)",
        "gradient-olive": "linear-gradient(180deg, rgba(30,45,18,0.03) 0%, rgba(30,45,18,0.08) 100%)",
        "gradient-hero": "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.7) 100%)",
        "gradient-gold": "linear-gradient(135deg, #D4A84B 0%, #B8860B 50%, #8B6914 100%)",
        "gradient-footer": "linear-gradient(180deg, #1a2810 0%, #1E2D12 50%, #152010 100%)",
      },
      boxShadow: {
        "luxury-sm": "0 2px 8px -2px rgba(30,45,18,0.08), 0 4px 16px -4px rgba(30,45,18,0.06)",
        "luxury": "0 4px 20px -4px rgba(30,45,18,0.1), 0 8px 32px -8px rgba(30,45,18,0.08)",
        "luxury-lg": "0 12px 40px -8px rgba(30,45,18,0.12), 0 20px 60px -12px rgba(30,45,18,0.1)",
        "gold-glow": "0 0 24px -4px rgba(184,134,11,0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
