export interface EventPackage {
  id: string;
  name: string;
  category: "Wedding" | "Birthday" | "Anniversary";
  price: string;
  duration: string;
  description: string;
  inclusions: string[];
  image: string;
  popular?: boolean;
}

export const eventPackages: EventPackage[] = [
  {
    id: "dream-wedding",
    name: "Dream Wedding",
    category: "Wedding",
    price: "₹45,000 onwards",
    duration: "Full Day",
    description: "A complete floral transformation for your wedding day, from the mandap to the reception.",
    inclusions: [
      "Bridal bouquet and bridesmaid bouquets",
      "Mandap and stage floral decor",
      "Venue entrance and aisle setup",
      "Table centerpieces for up to 100 guests",
      "Dedicated florist on-site",
    ],
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=80",
    popular: true,
  },
  {
    id: "garden-wedding",
    name: "Garden Wedding",
    category: "Wedding",
    price: "₹60,000 onwards",
    duration: "Full Day",
    description: "An outdoor wedding setup with lush greenery and seasonal flowers for a natural, romantic look.",
    inclusions: [
      "Outdoor arch and aisle decor",
      "Greenery and floral installations",
      "Reception table styling",
      "Welcome area setup",
      "On-site coordination",
    ],
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
  },
  {
    id: "birthday-bash",
    name: "Birthday Bash",
    category: "Birthday",
    price: "₹12,000 onwards",
    duration: "4-6 Hours",
    description: "Make every birthday memorable with themed decorations, balloon arches, and stunning floral arrangements.",
    inclusions: [
      "Themed balloon arch",
      "Cake table styling",
      "Entrance decoration",
      "Photo booth backdrop",
      "Table centerpieces",
    ],
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80",
    popular: true,
  },
  {
    id: "kids-birthday",
    name: "Kids Birthday",
    category: "Birthday",
    price: "₹8,000 onwards",
    duration: "3-4 Hours",
    description: "Colorful and fun decorations that bring your child's favorite theme to life.",
    inclusions: [
      "Character-themed backdrop",
      "Balloon cluster",
      "Party table decor",
      "Welcome banner",
      "Goodie bag styling",
    ],
    image: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=1200&q=80",
  },
  {
    id: "golden-anniversary",
    name: "Golden Anniversary",
    category: "Anniversary",
    price: "₹18,000 onwards",
    duration: "5-7 Hours",
    description: "Celebrate enduring love with elegant gold and ivory floral arrangements and romantic styling.",
    inclusions: [
      "Romantic table setting",
      "Gold and ivory centerpieces",
      "Memory lane photo display",
      "Cake table decor",
      "Ambient lighting setup",
    ],
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200&q=80",
    popular: true,
  },
  {
    id: "silver-anniversary",
    name: "Silver Anniversary",
    category: "Anniversary",
    price: "₹15,000 onwards",
    duration: "4-6 Hours",
    description: "A sophisticated celebration with silver accents, white florals, and timeless elegance.",
    inclusions: [
      "Silver and white florals",
      "Elegant backdrop",
      "Dinner table styling",
      "Champagne tower setup",
      "Keepsake floral arrangement",
    ],
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=80",
  },
];
