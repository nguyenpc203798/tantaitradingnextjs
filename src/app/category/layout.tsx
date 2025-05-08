import { Metadata } from "next";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSeoMetadata({
  title: "Category",
  description: "Explore Tantai Trading's agricultural product lines including coffee, natural rubber, tapioca starch, cashew nuts, star anise, cinnamon, and black pepper.",
  keywords: ["agricultural products", "coffee", "natural rubber", "tapioca starch", "cashew nuts", "star anise", "cinnamon", "black pepper"],
  canonical: "/category",
  ogImage: "https://tantaitrading.com/images/pages/category/Coffee/coffee1.webp",
  ogImageAlt: "Tantai Trading Agricultural Products",
});

export default function CategoryLayout({
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