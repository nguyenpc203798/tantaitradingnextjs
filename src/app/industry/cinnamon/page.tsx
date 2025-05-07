import { Metadata } from "next";
import CinnamonPage from "@/components/pages/industry/products/CinnamonPage";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSeoMetadata({
  title: "Cinnamon Industry",
  description: "Khám phá sản phẩm quế chất lượng cao của Tantai Trading, quy trình chế biến và cam kết phát triển bền vững ngành quế Việt Nam.",
  keywords: ["cinnamon", "quế", "cassia", "gia vị", "quế Việt Nam", "xuất khẩu quế", "tinh dầu quế"],
  canonical: "/industry/cinnamon",
  ogImage: "https://tantaitrading.com/images/pages/industry/Cinnamon/cinnamon1.webp",
  ogImageAlt: "Tantai Trading Cinnamon Production",
});

export default function Cinnamon() {
  return <CinnamonPage />;
} 