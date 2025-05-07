import { Metadata } from "next";
import AnisePage from "@/components/pages/industry/products/AnisePage";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSeoMetadata({
  title: "Star Anise Industry",
  description: "Khám phá sản phẩm hoa hồi chất lượng cao của Tantai Trading, quy trình chế biến và cam kết phát triển bền vững ngành hoa hồi Việt Nam.",
  keywords: ["star anise", "hoa hồi", "đại hồi", "gia vị", "hồi Việt Nam", "xuất khẩu hoa hồi", "tinh dầu hồi"],
  canonical: "/industry/anise",
  ogImage: "https://tantaitrading.com/images/pages/industry/Anise/anise1.webp",
  ogImageAlt: "Tantai Trading Star Anise Production",
});

export default function Anise() {
  return <AnisePage />;
} 