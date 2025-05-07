import { Metadata } from "next";
import CashewPage from "@/components/pages/industry/products/CashewPage";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSeoMetadata({
  title: "Cashew Nuts Industry",
  description: "Khám phá sản phẩm hạt điều chất lượng cao của Tantai Trading, quy trình sản xuất và cam kết phát triển bền vững ngành điều Việt Nam.",
  keywords: ["cashew nuts", "hạt điều", "điều Việt Nam", "sản xuất hạt điều", "xuất khẩu điều", "điều bền vững"],
  canonical: "/industry/cashew",
  ogImage: "https://tantaitrading.com/images/pages/industry/Cashew/cashew1.webp",
  ogImageAlt: "Tantai Trading Cashew Nuts Production",
});

export default function Cashew() {
  return <CashewPage />;
} 