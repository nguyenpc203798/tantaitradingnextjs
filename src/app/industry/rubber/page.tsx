import { Metadata } from "next";
import RubberPage from "@/components/pages/industry/products/RubberPage";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSeoMetadata({
  title: "Natural Rubber Industry",
  description: "Explore Tantai Trading's natural rubber products, processing methods, and commitment to sustainable rubber production in Vietnam.",
  keywords: ["natural rubber", "SVR", "latex", "rubber production", "vietnamese rubber", "sustainable rubber"],
  canonical: "/industry/rubber",
  ogImage: "https://tantaitrading.com/images/pages/industry/NaturalRubber/rubber1.webp",
  ogImageAlt: "Tantai Trading Natural Rubber Production",
});

export default function Rubber() {
  return <RubberPage />;
} 