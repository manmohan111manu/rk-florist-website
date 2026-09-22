export type ProductCategory = "Bouquets" | "Plants" | "Gifts";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  description: string;
  image: string;
  tags: string[];
  bestseller?: boolean;
}

export const products: Product[] = [
  {
    id: "classic-rose-bouquet",
    name: "Rose Basket with Chocolates",
    category: "Bouquets",
    price: 499,
    description: "A thoughtful rose basket with premium chocolates, ideal for gifting on birthdays, anniversaries, and special occasions.",
    image: "/images/products/red-rose-bouquet.jpg",
    tags: ["Rose Basket", "Chocolates", "Gift Set"],
    bestseller: true,
  },
  {
    id: "sunshine-mix",
    name: "Flower Pot Display",
    category: "Bouquets",
    price: 399,
    description: "A decorative flower pot display with vibrant blooms and decorative greenery for home styling.",
    image: "/images/products/yellow-flower-bouquet.jpg",
    tags: ["Flower Pot", "Home Decor", "Display"],
  },
  {
    id: "pink-peony-blush",
    name: "White Pot Collection",
    category: "Bouquets",
    price: 799,
    description: "A clean collection of ceramic pots and planters styled for modern floral decor and gifting.",
    image: "/images/products/pink-rose-bouquet.jpg",
    tags: ["Pots", "Decor", "Ceramic"],
    bestseller: true,
  },
  {
    id: "white-lily-elegance",
    name: "White Rose Bouquet",
    category: "Bouquets",
    price: 599,
    description: "An elegant white rose bouquet with soft greenery, perfect for weddings, blessings, and graceful gifting.",
    image: "/images/products/white-flower-bouquet.jpg",
    tags: ["White Roses", "Elegant", "Wedding"],
  },
  {
    id: "lavender-dreams",
    name: "Bonsai Plant",
    category: "Bouquets",
    price: 649,
    description: "A decorative bonsai-style plant in a pot, ideal for stylish indoor spaces and thoughtful gifts.",
    image: "/images/products/purple-flower-bouquet.jpg",
    tags: ["Bonsai", "Indoor Plant", "Decor"],
  },
  {
    id: "tropical-paradise",
    name: "Green Indoor Plant",
    category: "Bouquets",
    price: 899,
    description: "A lush green indoor plant arrangement designed to add freshness and life to any room.",
    image: "/images/products/mixed-flower-bouquet.jpg",
    tags: ["Plant", "Green Decor", "Indoor"],
  },
  {
    id: "monstera-deliciosa",
    name: "Monstera Deliciosa",
    category: "Plants",
    price: 349,
    description: "A healthy monstera plant in a decorative pot. Easy to care for and adds a tropical feel to any space.",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=800&q=80",
    tags: ["Indoor", "Easy Care", "Tropical"],
  },
  {
    id: "peace-lily",
    name: "Peace Lily",
    category: "Plants",
    price: 299,
    description: "An elegant peace lily with glossy leaves and white blooms. Known for its air-purifying qualities.",
    image: "https://images.unsplash.com/photo-1593691509543-c55f24c2e59b?w=800&q=80",
    tags: ["Indoor", "Air Purifying", "White Blooms"],
  },
  {
    id: "orchid-collection",
    name: "Orchid Collection",
    category: "Plants",
    price: 549,
    description: "A stunning potted orchid with delicate blooms. A graceful gift for someone special.",
    image: "https://images.unsplash.com/photo-1566928039229-8d5f2c5f0b5e?w=800&q=80",
    tags: ["Orchid", "Delicate", "Gift"],
  },
  {
    id: "succulent-garden",
    name: "Succulent Garden",
    category: "Plants",
    price: 249,
    description: "A charming collection of mini succulents in a wooden planter. Low maintenance and adorable.",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=800&q=80",
    tags: ["Succulent", "Low Maintenance", "Mini"],
  },
  {
    id: "snake-plant",
    name: "Snake Plant",
    category: "Plants",
    price: 199,
    description: "A hardy snake plant that thrives in low light. Perfect for beginners and busy lifestyles.",
    image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=800&q=80",
    tags: ["Indoor", "Hardy", "Low Light"],
  },
  {
    id: "chocolate-box",
    name: "Gourmet Chocolate Box",
    category: "Gifts",
    price: 449,
    description: "An assortment of premium chocolates in an elegant gift box. A sweet treat for any celebration.",
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=800&q=80",
    tags: ["Chocolates", "Sweet", "Box"],
  },
  {
    id: "teddy-bear",
    name: "Cuddly Teddy Bear",
    category: "Gifts",
    price: 399,
    description: "A soft, huggable teddy bear that pairs perfectly with any bouquet.",
    image: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=800&q=80",
    tags: ["Teddy", "Soft", "Cute"],
  },
  {
    id: "scented-candle",
    name: "Scented Candle Set",
    category: "Gifts",
    price: 349,
    description: "A set of three aromatic candles in calming scents. Create a relaxing atmosphere at home.",
    image: "https://images.unsplash.com/photo-1602874801006-e26c8c0d6b2e?w=800&q=80",
    tags: ["Candles", "Aromatic", "Set"],
  },
  {
    id: "photo-frame",
    name: "Memory Photo Frame",
    category: "Gifts",
    price: 199,
    description: "A beautiful wooden photo frame to display your most cherished memories.",
    image: "https://images.unsplash.com/photo-1578500464564-a42b7d9a6d69?w=800&q=80",
    tags: ["Frame", "Wooden", "Memories"],
  },
];
