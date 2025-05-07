import { Metadata } from "next";
import IndustryPage from "@/components/pages/industry/IndustryPage";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSeoMetadata({
  title: "Our Industry Products",
  description: "Explore Tantai Trading's extensive range of high-quality agricultural products, including coffee, natural rubber, tapioca starch, cashew nuts, star anise, cinnamon, and black pepper.",
  keywords: ["agricultural products", "coffee", "natural rubber", "tapioca starch", "cashew nuts", "star anise", "cinnamon", "black pepper"],
  canonical: "/industry",
  ogImage: "https://tantaitrading.com/images/pages/industry/Coffee/coffee1.webp",
  ogImageAlt: "Tantai Trading Agricultural Products",
});

export default function Industry() {
  return <IndustryPage />;
} 