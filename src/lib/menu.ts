/**
 * Food menu — names only, no prices. Based on the restaurant's Zomato listing.
 * Egg dishes live under Non-Veg in an "Eggetarian" group.
 * Beverages stay empty until the owner supplies a verified list.
 */

export type Diet = "veg" | "nonveg";

export type MenuSection = {
  id: string;
  title: string;
  note?: string;
  items: string[];
};

export const foodMenu: Record<Diet, MenuSection[]> = {
  veg: [
    {
      id: "veg-starters",
      title: "Veg Starters",
      items: [
        "Aloo Makai Sev Tikki",
        "Babycorn 65",
        "Chilly Babycorn",
        "Chettinad Paneer Vepudu",
        "Onion Rings",
        "Lotus Stem Honey Chilly",
        "Mix Veg Pakoda",
        "Mushroom Salt & Pepper",
        "Palak Mushroom Pakoda",
        "Kothimeera Paneer Vepudu",
        "Malai Broccoli",
        "Peri Peri Paneer Tikka",
        "Chilly Mushroom",
        "Crispy Corn",
        "Karaikudi Mushroom Fry",
        "Stuffed Mushroom",
        "Tomato Basil Bruschetta",
        "Veg Ball Manchurian",
        "Chilly Paneer",
      ],
    },
    {
      id: "veg-soups",
      title: "Soups",
      items: ["Veg Hot & Sour Soup", "Veg Manchow Soup", "Tomato Rasam"],
    },
    {
      id: "veg-favorites",
      title: "Guest Favorites",
      note: "Most loved by our guests",
      items: [
        "Margherita Pizza",
        "Veg Fried Rice",
        "Veg Noodles",
        "Veg Lovers Pizza",
        "Veg Red Sauce Pasta",
        "Veg White Sauce Pasta",
        "Veg Nachos",
      ],
    },
    {
      id: "veg-curry",
      title: "Veg Curry",
      items: [
        "Babycorn Mushroom Curry",
        "Bhendi Masala",
        "Palkura Pappu",
        "Munnakaya Tomato Curry",
        "Methi Paneer Tomato Curry",
        "Miloni Subzi",
        "Mutter Paneer",
        "Paneer Butter Masala",
        "Paneer Tikka Masala",
        "Dal Tadka",
        "Tomato Pappu",
        "Gutti Vankaya Kura",
        "Kadai Veg",
        "Veg Kurma",
        "Kadai Paneer",
        "Kaju Paneer Curry",
        "Kaju Tomato Curry",
      ],
    },
    {
      id: "breads",
      title: "Breads",
      items: [
        "Roti",
        "Butter Roti",
        "Naan",
        "Butter Naan",
        "Plain Kulcha",
        "Garlic Naan",
        "Phulka 2Pc",
        "Cheese Naan",
      ],
    },
    {
      id: "rice",
      title: "Rice",
      items: [
        "Bagara Rice",
        "Muddapappu Avakai Annam",
        "Steam Rice",
        "Jeera Rice",
        "Sambar Rice",
        "Curd Rice",
        "Pudina Rice",
      ],
    },
    {
      id: "veg-pulao",
      title: "Veg Pulao",
      items: [
        "Chettinad Veg Pulao",
        "Mushroom Pudina Pulao",
        "Pachi Mirchi Paneer Pulao",
        "Paneer Pulao",
        "Gutti Vankaya Pulao",
        "Veg Pulao",
      ],
    },
    {
      id: "sweets",
      title: "Sweets",
      items: ["Apricot Delight", "Gulab Jamun", "Chocolate Brownie"],
    },
  ],
  nonveg: [
    {
      id: "nonveg-starters",
      title: "Non-Veg Starters",
      items: [
        "Chicken 65",
        "Chicken Chettinad Dry",
        "Chicken Drumsticks",
        "Chicken Kali Mirch",
        "Chicken Wings Peri Peri",
        "Andhra Fish Fry",
        "Apollo Fish",
        "Kodi Vepudu",
        "Nalakaram Chicken Fry",
        "Pachi Mirchi Kodi Vepudu",
        "Lemon Butter Garlic Prawns",
        "Loose Prawns",
        "Peri Peri Chicken Tikka",
        "Chilly Chicken",
        "Kaju Chicken Pakoda",
        "Karivepaku Chicken Vepudu",
        "Rayalaseema Chicken Fry",
        "Royal Chicken",
        "Chilly Fish",
        "Fish And Chips",
        "Fish Ghee Vepudu",
        "Tangadi Kebab 3 Pc",
        "Tandoori Chicken (Half)",
        "Kaju Mutton Vepudu",
        "Mutton Ghee Roast",
        "Mutton Chettinad",
        "Prawns Ghee Karam Fry",
        "Prawns Miriyala Vepudu",
        "Prawns Tempura",
      ],
    },
    {
      id: "tandoori",
      title: "Tandoori",
      items: ["Fish Tikka"],
    },
    {
      id: "eggetarian",
      title: "Eggetarian",
      note: "Egg dishes",
      items: [
        "Chilly Egg",
        "Egg Miriyala Vepudu",
        "Egg Potato",
        "Egg Potu",
        "Egg Curry",
        "Egg Eguru",
        "Egg Masala",
        "Egg Pulusu",
        "Egg Fried Rice",
        "Egg Noodles",
      ],
    },
    {
      id: "nonveg-soups",
      title: "Soups",
      items: [
        "Chicken Hot & Sour Soup",
        "Chicken Manchow Soup",
        "Chicken Miryala Rasam",
        "Kodi Charu",
        "Mutton Marag",
      ],
    },
    {
      id: "nonveg-favorites",
      title: "Guest Favorites",
      note: "Most loved by our guests",
      items: [
        "Chicken Fried Rice",
        "Chicken Noodles",
        "Chicken Red Sauce Pasta",
        "Chicken White Sauce Pasta",
        "Peri Peri Chicken Pizza",
        "Chilly Chicken Pizza",
        "Chicken Nachos",
        "Grilled Chicken with Mashed Potato",
        "Grilled Fish",
      ],
    },
    {
      id: "nonveg-curry",
      title: "Non-Veg Curry",
      items: [
        "Andhra Chicken Curry",
        "Butter Chicken",
        "Chicken Curry Homestyle",
        "Chicken Dopiyaza",
        "Chicken Hyderabadi",
        "Chicken Kurma",
        "Chapala Pulusu",
        "Konaseema Kodi Kura",
        "Nellore Chapala Pulusu",
        "Kadai Chicken",
        "Rayalaseema Chicken Curry",
        "Telangana Kodi Kura",
        "Mutton Chettinad",
        "Mutton Rogan Josh",
        "Royalla Iguru",
        "Telangana Mutton Curry",
      ],
    },
    {
      id: "nonveg-pulao",
      title: "Non-Veg Pulao",
      items: [
        "Chettinad Chicken Pulao",
        "Chettinad Kodi Pulao",
        "Bheemavaram Mutton Pulao",
        "Kodi Pulao",
        "Kottimeera Kodi Pulao",
        "Konaseema Royyala Pulao",
        "Kothamir Mutton Pulao",
        "Fish Pulao",
        "Chettinad Mutton Pulao",
        "Prawns Rayalaseema Pulao",
      ],
    },
  ],
};

export type BeverageSection = MenuSection;

/** Populate only with a verified beverage list from the owner. */
export const beverageMenu: BeverageSection[] = [];

export const dietLabel: Record<Diet, string> = { veg: "Veg", nonveg: "Non-Veg" };

export function countItems(sections: MenuSection[]) {
  return sections.reduce((n, s) => n + s.items.length, 0);
}

export function filterSections(sections: MenuSection[], query: string): MenuSection[] {
  const q = query.trim().toLowerCase();
  if (!q) return sections;
  return sections
    .map((s) => ({ ...s, items: s.items.filter((i) => i.toLowerCase().includes(q)) }))
    .filter((s) => s.items.length > 0);
}

/** Verified dish names highlighted on the home page preview. */
export const homeHighlights = [
  { name: "Chettinad Paneer Vepudu", diet: "veg" as Diet, section: "Veg Starters" },
  { name: "Rayalaseema Chicken Fry", diet: "nonveg" as Diet, section: "Non-Veg Starters" },
  { name: "Bheemavaram Mutton Pulao", diet: "nonveg" as Diet, section: "Non-Veg Pulao" },
  { name: "Gutti Vankaya Kura", diet: "veg" as Diet, section: "Veg Curry" },
  { name: "Lemon Butter Garlic Prawns", diet: "nonveg" as Diet, section: "Non-Veg Starters" },
  { name: "Muddapappu Avakai Annam", diet: "veg" as Diet, section: "Rice" },
];
