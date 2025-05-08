import { Metadata } from "next";
import CoffeePage from "@/components/pages/category/products/CoffeePage";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSeoMetadata({
  title: "Coffee Category",
  description: "Learn about Tantai Trading's premium coffee products, production process, and our commitment to quality and sustainability in coffee farming and processing.",
  keywords: ["coffee", "robusta", "arabica", "vietnamese coffee", "coffee production", "coffee export"],
  canonical: "/category/coffee",
  ogImage: "https://tantaitrading.com/images/pages/category/Coffee/coffee1.webp",
  ogImageAlt: "Tantai Trading Coffee Production",
});

export default function Coffee() {
  return <CoffeePage />;
} 