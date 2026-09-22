import { cache } from "react";
import { products as fallbackProducts, type Product } from "@/data/products";
import { eventPackages as fallbackEvents, type EventPackage } from "@/data/events";
import { galleryItems as fallbackGallery, type GalleryItem } from "@/data/gallery";
import { bookedDates as fallbackBookedDates } from "@/data/bookedDates";
import { getSupabase } from "@/lib/supabase";

function mapProduct(row: Record<string, unknown>): Product {
  return {
    id: String(row.id),
    name: String(row.name),
    category: row.category as Product["category"],
    price: Number(row.price),
    description: String(row.description),
    image: String(row.image),
    tags: Array.isArray(row.tags) ? (row.tags as string[]) : [],
    bestseller: Boolean(row.bestseller),
  };
}

function mapEvent(row: Record<string, unknown>): EventPackage {
  return {
    id: String(row.id),
    name: String(row.name),
    category: row.category as EventPackage["category"],
    price: String(row.price),
    duration: String(row.duration),
    description: String(row.description),
    inclusions: Array.isArray(row.inclusions) ? (row.inclusions as string[]) : [],
    image: String(row.image),
    popular: Boolean(row.popular),
  };
}

function mapGallery(row: Record<string, unknown>): GalleryItem {
  return {
    id: String(row.id),
    title: String(row.title),
    category: row.category as GalleryItem["category"],
    image: String(row.image),
    description: String(row.description),
  };
}

export const getProducts = cache(async (): Promise<Product[]> => {
  const supabase = getSupabase();
  if (!supabase) return fallbackProducts;

  const { data, error } = await supabase.from("products").select("*").order("name");
  if (error || !data?.length) return fallbackProducts;
  return data.map((row) => mapProduct(row as Record<string, unknown>));
});

export const getEventPackages = cache(async (): Promise<EventPackage[]> => {
  const supabase = getSupabase();
  if (!supabase) return fallbackEvents;

  const { data, error } = await supabase.from("event_packages").select("*").order("name");
  if (error || !data?.length) return fallbackEvents;
  return data.map((row) => mapEvent(row as Record<string, unknown>));
});

export const getGalleryItems = cache(async (): Promise<GalleryItem[]> => {
  const supabase = getSupabase();
  if (!supabase) return fallbackGallery;

  const { data, error } = await supabase.from("gallery_items").select("*").order("title");
  if (error || !data?.length) return fallbackGallery;
  return data.map((row) => mapGallery(row as Record<string, unknown>));
});

export const getBookedDates = cache(async (): Promise<string[]> => {
  const supabase = getSupabase();
  if (!supabase) return fallbackBookedDates;

  const { data, error } = await supabase.from("booked_dates").select("date");
  if (error || !data?.length) return fallbackBookedDates;
  return data.map((row) => String(row.date));
});
