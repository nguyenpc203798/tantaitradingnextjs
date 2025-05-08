import { Metadata } from "next";
import CashewPage from "@/components/pages/category/products/CashewPage";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSeoMetadata({
  title: "Cashew Nuts Category",
  description: "Khám phá sản phẩm hạt điều chất lượng cao của Tantai Trading, quy trình sản xuất và cam kết phát triển bền vững ngành điều Việt Nam.",
  keywords: ["cashew nuts", "hạt điều", "điều Việt Nam", "sản xuất hạt điều", "xuất khẩu điều", "điều bền vững"],
  canonical: "/category/cashew",
  ogImage: "https://tantaitrading.com/images/pages/category/Cashew/cashew1.webp",
  ogImageAlt: "Tantai Trading Cashew Nuts Production",
});

export default function Cashew() {
  return <CashewPage />;
} 