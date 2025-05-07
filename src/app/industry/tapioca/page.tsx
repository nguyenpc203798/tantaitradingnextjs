import { Metadata } from "next";
import TapiocaPage from "@/components/pages/industry/products/TapiocaPage";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSeoMetadata({
  title: "Tapioca Starch Industry",
  description: "Discover Tantai Trading's high-quality tapioca starch products, production process, and our commitment to sustainable tapioca farming and processing in Vietnam.",
  keywords: ["tapioca starch", "cassava", "food industry", "industrial starch", "vietnamese tapioca", "sustainable tapioca"],
  canonical: "/industry/tapioca",
  ogImage: "https://tantaitrading.com/images/pages/industry/TapiocaStarch/tapioca1.webp",
  ogImageAlt: "Tantai Trading Tapioca Starch Production",
});

export default function Tapioca() {
  return <TapiocaPage />;
} 