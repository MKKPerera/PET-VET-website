# PawCare – Pet Shop & Vet Clinic

A sample pet shop and veterinary clinic website built with Nuxt 3.

## Pages

- **Home** – hero, shop by pet, services, featured products, testimonials, gallery
- **Shop** – product listing with category/pet filters, search and sorting
- **Vet Services** – checkups, vaccinations, grooming, boarding, vet team
- **Appointment** – booking form
- **Contact** – contact form and details
- **Cart** – quantities, delivery and checkout

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production

```bash
npm run build
node .output/server/index.mjs
```

Site content (products, services, testimonials) lives in `data/site.ts`. Photos are from [Unsplash](https://unsplash.com) and stored in `public/images/`.
