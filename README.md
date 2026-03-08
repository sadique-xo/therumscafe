# The Rums Café - Website

Premium café website for The Rums Café, Ranchi. Built with Next.js 14, Tailwind CSS, and shadcn/ui.

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **shadcn/ui**
- **Lucide Icons**
- **Google Fonts** (Playfair Display, Inter)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

- `/` - Home (Hero, About, Menu Highlights, Instagram, Testimonials, Location, Footer)
- `/menu` - Full menu with sticky category tabs

## Customization

All content lives in `src/data/cafe-data.ts`. Edit this file to update menu items, testimonials, contact info, etc.

### Google Maps Embed

To get the correct Maps embed: Go to [Google Maps](https://maps.google.com), search "The Rums Cafe Argora Chowk Ranchi", click **Share** → **Embed a map**, and replace the `src` in `src/components/Location.tsx`.

## Deploy on Vercel

```bash
npm run build
```

Then connect your repo to [Vercel](https://vercel.com) for one-click deployment.

## Checklist

- [x] Olive green + cream + gold theme
- [x] Playfair Display headings, Inter body
- [x] Full menu with sticky tabs
- [x] Instagram feed section
- [x] Google reviews
- [x] Maps, WhatsApp, Zomato, Swiggy links
- [x] Mobile responsive
- [x] Footer: "Created by Sadique (sadique.co)"

---

*The Rums Café - FLAVOUR to SOUL !*
