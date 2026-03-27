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

/**
 * Full catalog — Afghan dry fruits & nuts (local names in subtitles).
 * Images: curated Unsplash / Pexels stock photography.
 */
export const products: Product[] = [
  {
    id: "almonds-badam",
    name: "Almonds",
    subtitle: "Badam — whole, naturally dried, rich and buttery",
    price: 34,
    image: "/images/afghan-fruits/almonds-badam.jpg",
    benefits: ["High in protein & vitamin E", "Ideal for snacking & baking", "Resealable pack"],
    ingredients: ["Premium almonds", "Product of Afghanistan region", "No added oil"],
    rating: 4.9,
    reviews: 892,
    badge: "Best seller"
  },
  {
    id: "pistachios-pista",
    name: "Pistachios",
    subtitle: "Pista — jumbo kernels, naturally opened",
    price: 38,
    image: "/images/afghan-fruits/pistachios-pista.jpg",
    benefits: ["Crisp texture", "Naturally vibrant color", "Great for gifting"],
    ingredients: ["Roasted pistachios", "Lightly salted option available"],
    rating: 4.9,
    reviews: 624,
    badge: "Premium"
  },
  {
    id: "walnuts-akhrot",
    name: "Walnuts",
    subtitle: "Akhrot — halves & pieces, omega-rich",
    price: 32,
    image: "/images/afghan-fruits/walnuts-akhrot.jpeg",
    benefits: ["Brain-friendly fats", "Bakery & breakfast ready", "Sorted for quality"],
    ingredients: ["Shelled walnuts", "Cool storage recommended"],
    rating: 4.8,
    reviews: 541
  },
  {
    id: "raisins-kishmish",
    name: "Raisins",
    subtitle: "Kishmish — sweet, plump dried grapes",
    price: 18,
    image: "/images/afghan-fruits/raisins-kishmish.webp",
    benefits: ["Natural sweetness", "Fiber & energy", "Perfect for desserts"],
    ingredients: ["Sun-dried grapes", "No artificial colors"],
    rating: 4.8,
    reviews: 710
  },
  {
    id: "apricots-khurmani",
    name: "Dried Apricots",
    subtitle: "Khurmani — soft, tangy-sweet halves",
    price: 24,
    image: "/images/afghan-fruits/apricots-khurmani.jpeg",
    benefits: ["Beta-carotene rich", "Great for trail mix", "Traditional sun-drying"],
    ingredients: ["Whole dried apricots", "Sulfite-free option on pack"],
    rating: 4.7,
    reviews: 403
  },
  {
    id: "figs-anjeer",
    name: "Dried Figs",
    subtitle: "Anjeer — large, honey-sweet whole figs",
    price: 28,
    image: "/images/afghan-fruits/figs-anjeer.jpg",
    benefits: ["Fiber-rich", "Naturally sweet", "Gift-worthy"],
    ingredients: ["Whole dried figs", "Hand-sorted"],
    rating: 4.9,
    reviews: 612,
    badge: "Family favorite"
  },
  {
    id: "anardana",
    name: "Pomegranate Seeds",
    subtitle: "Anardana — tart dried arils for cooking",
    price: 21,
    image: "/images/afghan-fruits/pomegranate-seeds-anardana.jpg",
    benefits: ["Adds tang to chutneys & salads", "Traditional spice use", "Aromatic"],
    ingredients: ["Dried pomegranate seeds", "Store airtight"],
    rating: 4.6,
    reviews: 289
  },
  {
    id: "mulberries-shahtoot",
    name: "Dried Mulberries",
    subtitle: "Shahtoot — chewy, naturally sweet berries",
    price: 22,
    image: "/images/afghan-fruits/mulberries-shahtoot.webp",
    benefits: ["Unique flavor", "Iron & antioxidants", "Snack or cereal topping"],
    ingredients: ["White / dark mulberries", "No added sugar"],
    rating: 4.7,
    reviews: 356
  },
  {
    id: "pine-nuts-chilgoza",
    name: "Pine Nuts",
    subtitle: "Chilgoza — delicate, buttery kernels",
    price: 42,
    image: "/images/afghan-fruits/pine-nuts-chilgoza.webp",
    benefits: ["Premium garnish for rice & salads", "Rich & creamy", "Use sparingly"],
    ingredients: ["Raw pine nuts", "Keep refrigerated after opening"],
    rating: 4.8,
    reviews: 198,
    badge: "Rare"
  },
  {
    id: "dates-khorma",
    name: "Dried Dates",
    subtitle: "Khorma — soft, caramel-sweet whole dates",
    price: 26,
    image: "/images/afghan-fruits/dried-dates-khorma.webp",
    benefits: ["Natural energy", "Ramadan & gifting favorite", "Pitted options"],
    ingredients: ["Whole dates", "Pitted or with pit — see label"],
    rating: 4.9,
    reviews: 834
  },
  {
    id: "prunes-aloo-bukhara",
    name: "Dried Plums (Prunes)",
    subtitle: "Aloo Bukhara — soft, deep-flavor prunes",
    price: 22,
    image: "/images/afghan-fruits/prunes-aloo-bukhara.jpg",
    benefits: ["Fiber support", "Baking & compotes", "Naturally sweet"],
    ingredients: ["Dried plums", "Pitted"],
    rating: 4.7,
    reviews: 412
  },
  {
    id: "black-currants-manuka",
    name: "Black Currants",
    subtitle: "Manuka — tiny, intense dried berries",
    price: 19,
    image: "/images/afghan-fruits/black-currants-manuka.webp",
    benefits: ["Bold flavor for baking", "Antioxidants", "Great in muesli"],
    ingredients: ["Dried black currants", "May contain traces of other berries"],
    rating: 4.6,
    reviews: 267
  },
  {
    id: "saffron-zafran",
    name: "Saffron",
    subtitle: "Zafran — premium threads for rice & desserts",
    price: 45,
    image: "/images/afghan-fruits/saffron-zafran.webp",
    benefits: ["Aroma & color", "A little goes far", "Lab-tested purity"],
    ingredients: ["100% saffron threads", "Glass vial packaging"],
    rating: 4.9,
    reviews: 412,
    badge: "Luxury"
  },
  {
    id: "barberries-zereshk",
    name: "Barberries",
    subtitle: "Zereshk — tart ruby berries for polo & salads",
    price: 24,
    image: "/images/afghan-fruits/barberries-zereshk.webp",
    benefits: ["Classic with rice dishes", "Tart punch", "Rinse before use"],
    ingredients: ["Dried barberries", "Store cool & dry"],
    rating: 4.8,
    reviews: 301
  },
  {
    id: "green-raisins-sabz",
    name: "Green Raisins",
    subtitle: "Sabz Kishmish — light, sweet golden raisins",
    price: 19,
    image: "/images/afghan-fruits/green-raisins-sabz-kishmish.webp",
    benefits: ["Mild & sweet", "Biryani & desserts", "Uniform size"],
    ingredients: ["Green grape raisins", "Sulfured for color — see label"],
    rating: 4.8,
    reviews: 502
  },
];

export const primaryProduct = products[0];

export const BRAND_NAME = "Kabul Harvest";
