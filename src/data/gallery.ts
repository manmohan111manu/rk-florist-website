export interface GalleryItem {
  id: string;
  title: string;
  category: "Wedding" | "Birthday" | "Anniversary" | "Bouquets";
  image: string;
  description: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "royal-wedding-decor",
    title: "Royal Wedding Decor",
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=80",
    description: "A grand wedding setup with marigold and rose garlands.",
  },
  {
    id: "pastel-birthday",
    title: "Pastel Birthday Celebration",
    category: "Birthday",
    image: "https://images.unsplash.com/photo-1502781252888-9143ba7f074e?w=1200&q=80",
    description: "Soft pastel theme for a sweet sixteen celebration.",
  },
  {
    id: "garden-anniversary",
    title: "Garden Anniversary",
    category: "Anniversary",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1200&q=80",
    description: "Outdoor anniversary setup with white roses and greenery.",
  },
  {
    id: "bridal-bouquet",
    title: "Bridal Bouquet",
    category: "Bouquets",
    image: "https://images.unsplash.com/photo-1522748906250-160e28b4d3c1?w=1200&q=80",
    description: "Custom bridal bouquet with white roses and peonies.",
  },
  {
    id: "corporate-event",
    title: "Corporate Event",
    category: "Anniversary",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=80",
    description: "Elegant stage setup for a corporate anniversary gala.",
  },
  {
    id: "kids-party",
    title: "Kids Birthday Party",
    category: "Birthday",
    image: "https://images.unsplash.com/photo-1566415758026-50b3e7322db8?w=1200&q=80",
    description: "Colorful theme party with balloons and floral accents.",
  },
  {
    id: "table-centerpiece",
    title: "Table Centerpiece",
    category: "Bouquets",
    image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=1200&q=80",
    description: "Elegant centerpiece arrangement for a dinner event.",
  },
  {
    id: "engagement-stage",
    title: "Engagement Stage",
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=1200&q=80",
    description: "Floral stage design for an intimate engagement ceremony.",
  },
];
