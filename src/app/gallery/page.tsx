import { getGalleryItems } from "@/lib/queries";
import GalleryClient from "./GalleryClient";

export default async function GalleryPage() {
  const galleryItems = await getGalleryItems();
  return <GalleryClient galleryItems={galleryItems} />;
}
