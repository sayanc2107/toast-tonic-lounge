# Toast & Tonic Lounge 

# Website Generation Prompt — Toast & Tonic, Manikonda

Create a complete, production-ready, mobile-first website for **Toast & Tonic** (తోఅస్ట్ అండ్ తోనిక్), a lounge bar in Manikonda, Hyderabad. The result should feel like a premium hospitality studio designed it: editorial, modern, tactile, atmospheric, polished and conversion-focused. Avoid generic restaurant templates, stock-looking AI art, clutter, loud gradients and excessive animation.

## Business facts — preserve accurately

- Name: Toast & Tonic (Telugu display name: తోఅస్ట్ అండ్ తోనిక్)

- Type: Lounge bar

- Address: 9 Building, 1-1/38/B, Cloud, Lanco Hills Road, Manikonda, Telangana 500089, India. Zomato renders this as 9, Building, 1-1/38/B, Laxminagar Colony, Lanco Hills Road, Manikonda, Hyderabad.

- Phone: +91 77997 93737 (077997 93737)

- Listing currently says: Closed · Opens 12:30 pm. Treat hours as variable; show “Check today’s hours” or link to the live listing rather than implying a full weekly schedule.

- Google Maps listing offers Reserve a table and Order online. The supplied reserve URL: https://www.google.com/maps/reserve/v/dine/c/8qn_4Yg3MAI

- Business website shown in listing: https://toast-and-tonic.grexa.site/

- LGBTQ+ friendly.

- The user supplied no actual Instagram URL and no direct Zomato URL. We located the Manikonda Zomato ordering/menu page: https://www.zomato.com/hyderabad/toast-tonic-manikonda/order . No beverage items were exposed in the accessible Zomato menu text. Do not fabricate drinks or an Instagram username. Keep Instagram and Beverages UI ready to populate when the owner provides the official links/data.

## Brand and art direction

Build a restrained palette around near-black/ink, warm ivory, muted brass or copper, and one deep olive/forest accent. Use contrast and generous negative space. Typography should pair a confident editorial serif for display headlines with a highly legible modern sans for body/UI. Use real, appetizing hospitality photography if available; prioritize moody bar interiors, amber-lit cocktails, plated food, materials and the rooftop/city atmosphere only when actual imagery supports those details. Do not depict unsupported amenities or claim a rooftop/view unless imagery/business confirmation supports it. Keep surfaces refined: subtle grain, fine rules, soft shadows, tactile button states.

Use smooth, calm motion: restrained parallax or depth on the hero, gentle image reveals, subtle card hover lift, and polished page transitions. Any 3D effect must be lightweight, purposeful, and performant; no spinning objects, distracting scroll hijacks, or motion that harms readability. Respect `prefers-reduced-motion`. Optimize mobile performance and image loading.

## Site map and global UI

Create four navigable pages: **Home**, **Menu**, **About Us**, and **Visit Us**. Add a refined responsive header with wordmark, page links, a persistent “Reserve a Table” CTA, and a mobile menu. Footer repeats navigation, address, phone, directions, hours caveat, and social links only when verified. Use semantic HTML, accessible focus states, descriptive alt text, responsive typography, and strong color contrast.

Primary CTAs: “Reserve a Table”, “Explore the Menu”, “Get Directions”, “Call Now”. Use the supplied live reservation URL for reservation actions and a Google Maps directions search for the address. Make phone links `tel:+917799793737`. External actions should open clearly and safely. Do not claim that a reservation or online order is confirmed by this site.

## Page requirements and suggested copy

### Home

- Hero: bold, atmospheric headline such as **“An evening, well poured.”** Supporting copy: “Settle into Toast & Tonic in Manikonda for a relaxed lounge-bar evening, good food and a drink worth lingering over.” This is expressive positioning, not a promise about specific menu items or service features.

- CTAs: Reserve a Table; Explore the Menu.

- Use one strong visual focal point and a compact location cue: “Manikonda · Hyderabad”.

- Add a concise introduction, menu preview using verified food names, and a visit/location CTA.

- Add an Instagram section with editorial heading (“A little more Toast & Tonic”), social preview tiles, and “Follow on Instagram”. Since no official profile URL was supplied or verified, render an unobtrusive configurable placeholder and do not link to an assumed account or display unrelated content. Make it straightforward for the owner to set the verified profile URL and feed.

### Menu

- Create clickable top-level category tabs **Food** and **Beverages**. Food must have clear **Veg** and **Non-Veg** lists. Use accessible tabs or buttons with visible active state and keyboard support. Provide search/filtering if practical.

- Organize Food into digestible subcategories (Breads, Veg Starters, Non-Veg Starters, Eggetarian, Tandoori, Rice, Veg Pulao, Soups, Guest Favorites, Veg Curry, Non-Veg Curry, Non-Veg Pulao, Sweets). Keep the supplied menu names intact; correct obvious spelling only when it does not alter the dish identity. Do not show prices.

- For classification, put egg dishes under Non-Veg with a clearly marked Eggetarian subgroup, and retain named veg/non-veg distinctions from the source. Tandoori includes Fish Tikka; list it under Non-Veg. The Zomato “Most Loved By Our Guest” section contains both veg and non-veg items; split by dish. Keep duplicates that appear in the source only if they are truly separate listed entries (Veg Pulao appears twice in the Zomato extraction; display once unless the owner confirms distinct variants).

- **Beverages tab:** preserve the clickable category, but do not invent drinks. Show a tasteful “Beverage menu coming soon” message or a configurable empty state until a verified beverage list is supplied. Do not infer cocktails from the lounge-bar category.

- Source attribution in a quiet footer note: “Menu items based on the restaurant’s Zomato listing; availability may change.” Link to the Zomato page above.

### About Us

- Introduce Toast & Tonic as a lounge bar in Manikonda, Hyderabad. Keep the story warm and editorial without inventing founding history, chef credentials, sourcing claims, awards, signature cocktail names, or service promises.

- Give the name and atmosphere visual room; connect food and a well-paced evening without presenting unsupported operational specifics.

- Include a CTA to explore the menu or reserve.

### Visit Us

- Show full address, tap-to-call phone number, directions/map embed or map link, reserve CTA, and “Check today’s hours” linking to the live Google listing. Do not hard-code unstable opening hours beyond the listing snippet above.

- Add a compact arrival panel with the neighborhood and map directions.

- Add a second Instagram section with verified-profile configurable embed/link and “Follow on Instagram”. Until the official Instagram URL is supplied, show a neutral placeholder, not a guessed handle.

## Complete Food menu (names only; no prices)

Use the following source names and group them as directed. Keep all listed dishes; spelling is preserved from the Zomato extraction where uncertain.

### Breads (Veg)

Roti; Butter Roti; Naan; Butter Naan; Plain Kulcha; Garlic Naan; Phulka 2Pc; Cheese Naan.

### Veg Starters

Aloo Makai Sev Tikki; Babycorn 65; Chilly Babycorn; Chettinad Paneer Vepudu; Onion Rings; Lotus Stem Honey Chilly; Mix Veg Pakoda; Mushroo Salt&Pepper; Palak Mushroom Pakoda; Kothimeera Paneer Vepudu; Malai Broccoli; Peri Peri Paneer Tikka; Chilly Mushroom; Crispy Corn; Karaikudi Mushroom Fry; Stuffed Mushroom; Tomato Basil Bruschetta; Veg Ball Manchurian; Chilly Paneer.

### Non-Veg Starters

Chicken 65; Chicken Chettinad Dry; Chicken Drumsticks; Chicken Kali Mirch; Chicken Wings Peri Peri; Andhra Fish Fry; Apolo Fish; Kodi Vepudu; Nalakaram Chicken Fry; Pachi Mirchi Kodi Vepudu; Lemon Butter Garlic Prawns; Loose Prawns; Peri Peri Chicken Tikka; Chilly Chicken; Kaju Chicken Pakoda; Karivepaku Chicken Vepudu; Rayalaseema Chicken Fry; Royal Chicken; Chilly Fish; Fish And Chips; Fish Ghee Vepudu; Tangadi Kebab 3 Pc; Tandoori Chicken (Half); Kaju Mutton Vepudu; Mutton Ghee Roast; Muttton Chettinad; Prawns Ghee Karam Fry; Prawns Miriyala Vepudu; Prawns Tempura.

### Eggetarian (Non-Veg grouping)

Chilly Egg; Egg Miriyala Vepudu; Egg Potato; Egg Potu; Egg Curry; Egg Eguru; Egg Masala; Egg Pulusu; Egg Fried Rice; Egg Noodles.

### Tandoori (Non-Veg)

Fish Tikka.

### Rice (Veg)

Bagara Rice; Muddapappu Avakai Annam; Steam Rice; Jeera Rice; Sambar Rice; Curd Rice; Pudina Rice.

### Veg Pulao

Chettinad Veg Pulao; Mushroom Pudina Pulao; Pachi Mirchi Paneer Pulao; Paneer Pulao; Gutti Vankaya Pulao; Veg Pulao.

### Soups (split Veg / Non-Veg)

**Veg:** Veg Hot & Sour Soup; Veg Manchow Soup; Tamato Rasam.

**Non-Veg:** Chicken Hot & Sour Soup; Chicken Manchow Soup; Chicken Miryala Rasam; Kodi Charu; Mutton Marag.

### Guest Favorites (split Veg / Non-Veg)

**Veg:** Margerita Pizza; Veg Fried Rice; Veg Noodles; Veg Lovers Pizza; Veg Red Sauce Pasta; Veg White Sauce Pasta; Veg Nachos.

**Non-Veg:** Chicken Fried Rice; Chicken Noodles; Chicken Red Sauce Pasta; Chicken White Sauce Pasta; Peri Peri Chicken Pizza; Chilly Chicken Pizza; Chicken Nachos; Grilled Chicken with mashed potato; Grilled Fish.

### Veg Curry

Babycorn Mushroom Curry; Bhendi Masala; Palkura Pappu; Munnakaya Tamoto Curry; Methi Paneer Tomato Curry; Miloni Subzi; Mutter Paneer; Paneer Butter Masala; Paneer Tikka Masala; Dal Tadka; Tamato Pappu; Gutti Vankaya Kura; Kadai Veg; Veg Kurma; Kadai Paneer; Kaju Paneer Curry; Kaju Tomato Curry.

### Non-Veg Curry

Andhra Chicken Curry; Butter Chicken; Chicken Curry Homestyle; Chicken Dopiyaza; Chicken Hyderabadi; Chicken Kurma; Chapala Pulusu; Konaseema Kodi Kura; Nellore Chapala Pulusu; Kadai Chicken; Rayalseema Chicken Curry; Telangana Kodi Kura; Mutton Chettinad; Mutton Rogan Josh; Royalla Iguru; Telengana Mutton Curry.

### Non-Veg Pulao

Chetnadu Chicken Pulao; Chettinad Kodi Pulao; Bheemavaram Mutton Pulao; Kodi Pulao; Kottimeera Kodi Pulao; Konaseema Royyala Pulao; Kothamir Mutton Pulao; Fish Pulao; Chettinad Mutton Pulao; Prawns Royalseema Pulao.

### Sweets (Veg)

Apricot Delight; Gulab Jamun; Chocolate Brownie.

## Conversion and quality bar

- Make the next action obvious on every page without crowding the layout.

- Keep copy concise, sensory, specific to verified facts, and free of unsupported claims.

- Make menu browsing usable on a phone: category navigation should remain accessible, long lists should scan well, and buttons should be thumb-friendly.

- Do not display prices, ratings, offers, fake testimonials, invented drink lists, fabricated Instagram handles, or unverified amenities.

- Add sensible page titles/meta descriptions for local discovery, including “Toast & Tonic | Lounge Bar in Manikonda, Hyderabad”.

- Deliver all four pages with working navigation and CTAs, not just a static landing page.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/85e5ac87-b861-5daa-932c-b642877e9b6e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
