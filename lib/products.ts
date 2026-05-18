export type Product = {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  image: string;
  benefits: string[];
  ingredients: string[];
  rating: number;
  reviews: number;
  badge?: string;
};

const fruitImage = (filename: string) =>
  `/images/afghan-fruits/${encodeURIComponent(filename)}`;

/**
 * Full catalog — Afghan dry fruits & nuts (local names in subtitles).
 * Images: public/images/afghan-fruits
 */
export const products: Product[] = [
  {
    id: "afghan-almonds-badam",
    name: "Afghan Almonds",
    subtitle: "Badam — whole, naturally dried, rich and buttery",
    price: 129,
    image: fruitImage("Afghan Almonds (Badam).jpg"),
    benefits: ["High in protein & vitamin E", "Ideal for snacking & baking", "Resealable pack"],
    ingredients: ["Premium almonds", "Product of Afghanistan region", "No added oil"],
    rating: 4.9,
    reviews: 892,
    badge: "Best seller",
  },
  {
    id: "pistachios-pista",
    name: "Pistachios",
    subtitle: "Pista — jumbo kernels, naturally opened",
    price: 189,
    image: fruitImage("Pistachios (Pista).jpg"),
    benefits: ["Crisp texture", "Naturally vibrant color", "Great for gifting"],
    ingredients: ["Roasted pistachios", "Lightly salted option available"],
    rating: 4.9,
    reviews: 624,
    badge: "Premium",
  },
  {
    id: "walnuts-charmaghz",
    name: "Walnuts",
    subtitle: "Charmaghz — halves & pieces, omega-rich",
    price: 119,
    image: fruitImage("Walnuts (Charmaghz).jpeg"),
    benefits: ["Brain-friendly fats", "Bakery & breakfast ready", "Sorted for quality"],
    ingredients: ["Shelled walnuts", "Cool storage recommended"],
    rating: 4.8,
    reviews: 541,
  },
  {
    id: "raisins-kishmish",
    name: "Raisins",
    subtitle: "Kishmish — sweet, plump dried grapes",
    price: 59,
    image: fruitImage("Raisins (Kishmish).webp"),
    benefits: ["Natural sweetness", "Fiber & energy", "Perfect for desserts"],
    ingredients: ["Sun-dried grapes", "No artificial colors"],
    rating: 4.8,
    reviews: 710,
  },
  {
    id: "apricots-ashtaq",
    name: "Apricots (Ashtaq)",
    subtitle: "Ashtaq — firm, tangy-sweet dried apricots",
    price: 89,
    image: fruitImage("Apricots (Ashtaq).jpeg"),
    benefits: ["Beta-carotene rich", "Great for trail mix", "Traditional sun-drying"],
    ingredients: ["Whole dried apricots", "Sulfite-free option on pack"],
    rating: 4.7,
    reviews: 318,
  },
  {
    id: "apricots-kishta",
    name: "Apricots (Kishta)",
    subtitle: "Kishta — soft, honey-sweet apricot halves",
    price: 95,
    image: fruitImage("Apricots (Kishta).jpg"),
    benefits: ["Naturally sweet", "Snack or baking", "Hand-sorted"],
    ingredients: ["Dried apricot halves", "No added sugar"],
    rating: 4.8,
    reviews: 403,
  },
  {
    id: "figs-anjeer",
    name: "Figs",
    subtitle: "Anjeer — large, honey-sweet whole figs",
    price: 109,
    image: fruitImage("Figs (Anjeer).jpg"),
    benefits: ["Fiber-rich", "Naturally sweet", "Gift-worthy"],
    ingredients: ["Whole dried figs", "Hand-sorted"],
    rating: 4.9,
    reviews: 612,
    badge: "Family favorite",
  },
  {
    id: "anardana",
    name: "Pomegranate Seeds",
    subtitle: "Anardana — tart dried arils for cooking",
    price: 79,
    image: fruitImage("Pomegranate Seeds (Anardana).jpg"),
    benefits: ["Adds tang to chutneys & salads", "Traditional spice use", "Aromatic"],
    ingredients: ["Dried pomegranate seeds", "Store airtight"],
    rating: 4.6,
    reviews: 289,
  },
  {
    id: "white-mulberry-shahtoot",
    name: "White Mulberry",
    subtitle: "Shahtoot — chewy, naturally sweet berries",
    price: 85,
    image: fruitImage("White Mulberry(Shahtoot).webp"),
    benefits: ["Unique flavor", "Iron & antioxidants", "Snack or cereal topping"],
    ingredients: ["White mulberries", "No added sugar"],
    rating: 4.7,
    reviews: 356,
  },
  {
    id: "pine-nuts-jalghoza",
    name: "Pine Nuts",
    subtitle: "Jalghoza — delicate, buttery kernels",
    price: 249,
    image: fruitImage("Pine Nuts (Jalghoza).webp"),
    benefits: ["Premium garnish for rice & salads", "Rich & creamy", "Use sparingly"],
    ingredients: ["Raw pine nuts", "Keep refrigerated after opening"],
    rating: 4.8,
    reviews: 198,
    badge: "Rare",
  },
  {
    id: "dates-khorma",
    name: "Dried Dates",
    subtitle: "Khorma — soft, caramel-sweet whole dates",
    price: 99,
    image: fruitImage("Dried Dates (Khorma).webp"),
    benefits: ["Natural energy", "Ramadan & gifting favorite", "Pitted options"],
    ingredients: ["Whole dates", "Pitted or with pit — see label"],
    rating: 4.9,
    reviews: 834,
  },
  {
    id: "saffron-zafran",
    name: "Saffron",
    subtitle: "Zafran — premium threads for rice & desserts",
    price: 349,
    image: fruitImage("Saffron (Zafran).webp"),
    benefits: ["Aroma & color", "A little goes far", "Lab-tested purity"],
    ingredients: ["100% saffron threads", "Glass vial packaging"],
    rating: 4.9,
    reviews: 412,
    badge: "Luxury",
  },
  {
    id: "barberries-zereshk",
    name: "Barberries",
    subtitle: "Zereshk — tart ruby berries for polo & salads",
    price: 89,
    image: fruitImage("Barberries (Zereshk).webp"),
    benefits: ["Classic with rice dishes", "Tart punch", "Rinse before use"],
    ingredients: ["Dried barberries", "Store cool & dry"],
    rating: 4.8,
    reviews: 301,
  },
  {
    id: "black-bulberry-toot-siya",
    name: "Black Bulberry",
    subtitle: "Toot Siya — intense, tiny dried berries",
    price: 69,
    image: fruitImage("Black Bulberry (Toot Siya).webp"),
    benefits: ["Bold flavor for baking", "Antioxidants", "Great in muesli"],
    ingredients: ["Dried black bulberries", "May contain traces of other berries"],
    rating: 4.6,
    reviews: 267,
  },
  {
    id: "sinjid",
    name: "Sinjid",
    subtitle: "Traditional Afghan oleaster — tangy-sweet dried fruit",
    price: 75,
    image: fruitImage("Sinjid.webp"),
    benefits: ["Distinctive flavor", "Snack or tea pairing", "Naturally dried"],
    ingredients: ["Dried sinjid fruit", "No added sugar"],
    rating: 4.7,
    reviews: 184,
  },
  {
    id: "qorot",
    name: "Qorot",
    subtitle: "Dried yogurt curd — savory traditional staple",
    price: 65,
    image: fruitImage("qorot.jpeg"),
    benefits: ["Rich umami for soups & stews", "Long shelf life", "Authentic pantry staple"],
    ingredients: ["Dried fermented yogurt curd", "Store cool & dry"],
    rating: 4.5,
    reviews: 142,
  },
];

export const primaryProduct = products[0];

export const BRAND_NAME = "Kabul Harvest";
