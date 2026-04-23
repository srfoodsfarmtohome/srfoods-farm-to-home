export type Product = {
  slug: string;
  name: string;
  telugu: string;
  category: "pickles" | "karam";
  description: string;
  heat: 1 | 2 | 3 | 4 | 5;
  price: number;
  weight: string;
  image: string;
};

export const products: Product[] = [
  {
    slug: "avakaya-mango-pickle",
    name: "Avakaya Mango Pickle",
    telugu: "ఆవకాయ",
    category: "pickles",
    description:
      "The legendary Andhra mango pickle — raw mango chunks slow-soaked in mustard, garlic and Guntur red chilli oil.",
    heat: 5,
    price: 349,
    weight: "500 g",
    image: "/mango-pickle.png",
  },
  {
    slug: "gongura-pandu-mirchi-pickle",
    name: "Gongura Pandu Mirchi Pickle",
    telugu: "గోంగూర పండు మిర్చి",
    category: "pickles",
    description:
      "Tangy gongura leaves stone-pounded with ripe red chillies — Andhra’s most loved leafy pickle.",
    heat: 4,
    price: 329,
    weight: "500 g",
    image: "/gongura-pandu-mirchi-pickle.png",
  },
  {
    slug: "pandu-mirchi-pickle",
    name: "Pandu Mirchi Nilava Pachadi",
    telugu: "పండు మిర్చి నిలవ పచ్చడి",
    category: "pickles",
    description:
      "Fiery whole ripe-red chilli pickle, sun-cured in cold-pressed sesame oil. A spoonful is enough.",
    heat: 5,
    price: 379,
    weight: "500 g",
    image: "/pandu-mirchi-pickle.jpg",
  },
  {
    slug: "guntur-mirchi-karam",
    name: "Guntur Mirchi Karam",
    telugu: "గుంటూరు మిర్చి కారం",
    category: "karam",
    description:
      "Pure stone-ground Guntur red chilli powder — deep red colour, sharp aroma, unmistakable Andhra heat.",
    heat: 5,
    price: 269,
    weight: "500 g",
    image: "/plain-mirchi-karam.png",
  },
  {
    slug: "vellulli-karam",
    name: "Vellulli Karam",
    telugu: "వెల్లుల్లి కారం",
    category: "karam",
    description:
      "Garlic-rich karam podi — pounded with toasted chillies and salt. Perfect with hot rice and ghee.",
    heat: 4,
    price: 249,
    weight: "250 g",
    image: "/vellulli-karam.png",
  },
  {
    slug: "sambhar-masala-karam",
    name: "Sambhar Masala Karam",
    telugu: "సాంబార్ మసాలా",
    category: "karam",
    description:
      "Slow-roasted lentils, coriander seed and chilli — a fragrant blend that builds restaurant-style sambhar at home.",
    heat: 3,
    price: 229,
    weight: "250 g",
    image: "/sambhar-masala-karam.png",
  },
];

export const pickles = products.filter((p) => p.category === "pickles");
export const karam = products.filter((p) => p.category === "karam");
