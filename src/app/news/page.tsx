import { Metadata } from "next";
import NewsPage from "@/components/pages/news/NewsPage";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSeoMetadata({
  title: "Tin tức nông sản",
  description: "Cập nhật tin tức mới nhất về nông sản, xu hướng thị trường và các thông tin ngành nông nghiệp.",
  keywords: ["tin tức nông sản", "nông nghiệp", "cà phê", "cao su", "hạt điều", "tantai"],
  canonical: "/news",
});

export default function News() {
  return <NewsPage />;
} 