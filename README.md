# Satellite Gold Car — Landing Page

Pure HTML/CSS/JS. Open `index.html` directly in a browser — no build step, no server required.

## How to replace the demo vehicles with real ones

Open **`script.js`** and find the `cars` array near the top (section `2. VEHICLES DATA`).

Each vehicle is one object:

```js
{
  id: "dacia-sandero",        // unique, no spaces (used internally)
  name: "Dacia Sandero",
  category: "Citadine",       // Citadine / Berline / SUV / etc. — drives the filter buttons
  description: "…",
  price: 250,                 // number only, in MAD
  priceUnit: "jour",
  seats: 5,
  transmission: "Manuelle",   // or "Automatique"
  fuel: "Essence",            // or "Diesel"
  image: "images/cars/dacia-sandero.jpg",
  available: true             // false shows an "Indisponible" badge
}
```

- **Add a car**: copy one object, paste it, edit the values.
- **Remove a car**: delete its object from the array.
- **Change a price/description/photo**: edit the matching field.

The catalog, filters, cards and the vehicle-details modal are all generated automatically from this array — you never need to touch the HTML for vehicle changes.

## How to add real photos

Put your images in `images/cars/` using the exact filenames referenced in the `image` field (e.g. `images/cars/dacia-sandero.jpg`), plus `images/cars/hero-car.jpg` for the hero section photo and `images/logo.png` if you want a logo image instead of the "SGC" text mark.

If a photo is missing or fails to load, the site automatically shows a clean placeholder instead of a broken image icon — nothing breaks visually.

## How to edit company info

Open **`script.js`**, section `1. COMPANY CONFIGURATION` (the `company` object at the very top):

```js
const company = {
  name: "Satellite Gold Car",
  phone: "+212634047344",
  displayPhone: "+212 634 047 344",
  whatsapp: "212634047344",
  instagram: "https://www.instagram.com/auto_abderrezak/",
  tiktok: "https://www.tiktok.com/@abdobennajari",
  maps: "https://maps.app.goo.gl/pDUPNMShXNpDhmyU9?g_st=ic",
  address: "Hay Al Wafa 155, IMM Oumkaltouma Nº2 EL, Mohammedia 28810"
};
```

Changing `phone` / `whatsapp` here automatically updates every WhatsApp button, the `tel:` links, and the floating WhatsApp button across the whole site.

For Instagram/TikTok links specifically, they're also set directly in the footer of `index.html` (search for `instagram.com` / `tiktok.com`) — update both places if you change the usernames.

For the Google Maps embed (the map shown in the "Localisation" section), edit the `src` of the `<iframe>` in `index.html` under the `LOCATION` section comment.

## File structure

```
index.html   → page structure & content
style.css    → all styling (colors/fonts as CSS variables at the top)
script.js    → company info, vehicle data, and all interactivity
images/      → put your real photos here
```
