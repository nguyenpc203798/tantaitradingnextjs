import { Metadata } from "next";
import CategoryPage from "@/components/pages/category/CategoryPage";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSeoMetadata({
  title: "Our Category Products",
  description: "Explore Tantai Trading's extensive range of high-quality agricultural products, including coffee, natural rubber, tapioca starch, cashew nuts, star anise, cinnamon, and black pepper.",
  keywords: ["agricultural products", "coffee", "natural rubber", "tapioca starch", "cashew nuts", "star anise", "cinnamon", "black pepper"],
  canonical: "/category",
  ogImage: "https://tantaitrading.com/images/pages/category/Coffee/coffee1.webp",
  ogImageAlt: "Tantai Trading Agricultural Products",
});

export default function Category() {
  return <CategoryPage />;
} 