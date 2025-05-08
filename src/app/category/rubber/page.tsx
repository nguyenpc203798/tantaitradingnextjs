import { Metadata } from "next";
import RubberPage from "@/components/pages/category/products/RubberPage";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSeoMetadata({
  title: "Natural Rubber Category",
  description: "Explore Tantai Trading's natural rubber products, processing methods, and commitment to sustainable rubber production in Vietnam.",
  keywords: ["natural rubber", "SVR", "latex", "rubber production", "vietnamese rubber", "sustainable rubber"],
  canonical: "/category/rubber",
  ogImage: "https://tantaitrading.com/images/pages/category/NaturalRubber/rubber1.webp",
  ogImageAlt: "Tantai Trading Natural Rubber Production",
});

export default function Rubber() {
  return <RubberPage />;
} 