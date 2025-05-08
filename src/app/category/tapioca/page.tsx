import { Metadata } from "next";
import TapiocaPage from "@/components/pages/category/products/TapiocaPage";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSeoMetadata({
  title: "Tapioca Starch Category",
  description: "Discover Tantai Trading's high-quality tapioca starch products, production process, and our commitment to sustainable tapioca farming and processing in Vietnam.",
  keywords: ["tapioca starch", "cassava", "food category", "industrial starch", "vietnamese tapioca", "sustainable tapioca"],
  canonical: "/category/tapioca",
  ogImage: "https://tantaitrading.com/images/pages/category/TapiocaStarch/tapioca1.webp",
  ogImageAlt: "Tantai Trading Tapioca Starch Production",
});

export default function Tapioca() {
  return <TapiocaPage />;
} 