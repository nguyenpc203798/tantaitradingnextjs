import { Metadata } from "next";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSeoMetadata({
  title: "Industry",
  description: "Explore Tantai Trading's agricultural product lines including coffee, natural rubber, tapioca starch, cashew nuts, star anise, cinnamon, and black pepper.",
  keywords: ["agricultural products", "coffee", "natural rubber", "tapioca starch", "cashew nuts", "star anise", "cinnamon", "black pepper"],
  canonical: "/industry",
  ogImage: "https://tantaitrading.com/images/pages/industry/Coffee/coffee1.webp",
  ogImageAlt: "Tantai Trading Agricultural Products",
});

export default function IndustryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
} 