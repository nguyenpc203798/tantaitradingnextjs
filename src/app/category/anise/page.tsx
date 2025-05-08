import { Metadata } from "next";
import AnisePage from "@/components/pages/category/products/AnisePage";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSeoMetadata({
  title: "Star Anise Category",
  description: "Khám phá sản phẩm hoa hồi chất lượng cao của Tantai Trading, quy trình chế biến và cam kết phát triển bền vững ngành hoa hồi Việt Nam.",
  keywords: ["star anise", "hoa hồi", "đại hồi", "gia vị", "hồi Việt Nam", "xuất khẩu hoa hồi", "tinh dầu hồi"],
  canonical: "/category/anise",
  ogImage: "https://tantaitrading.com/images/pages/category/Anise/anise1.webp",
  ogImageAlt: "Tantai Trading Star Anise Production",
});

export default function Anise() {
  return <AnisePage />;
} 