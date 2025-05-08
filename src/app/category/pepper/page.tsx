import { Metadata } from "next";
import PepperPage from "@/components/pages/category/products/PepperPage";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSeoMetadata({
  title: "Black Pepper Category",
  description: "Khám phá sản phẩm tiêu đen chất lượng cao của Tantai Trading, quy trình chế biến và cam kết phát triển bền vững ngành tiêu Việt Nam.",
  keywords: ["black pepper", "tiêu đen", "tiêu trắng", "tiêu Việt Nam", "xuất khẩu tiêu", "gia vị"],
  canonical: "/category/pepper",
  ogImage: "https://tantaitrading.com/images/pages/category/Pepper/pepper1.webp",
  ogImageAlt: "Tantai Trading Black Pepper Production",
});

export default function Pepper() {
  return <PepperPage />;
} 