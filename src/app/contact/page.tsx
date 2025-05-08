import { Metadata } from "next";
import ContactPage from "@/components/pages/contact/ContactPage";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSeoMetadata({
  title: "Liên hệ",
  description: "Liên hệ với Tantai Trading để được tư vấn và hỗ trợ về các sản phẩm nông sản xuất khẩu. Chúng tôi luôn sẵn sàng phục vụ quý khách.",
  keywords: ["liên hệ", "contact", "tantai trading", "hỗ trợ khách hàng", "tư vấn nông sản"],
  canonical: "/contact",
  ogImage: "/images/contact-banner.jpg",
  ogImageAlt: "Liên hệ Tantai Trading",
});

export default function Contact() {
  return <ContactPage />;
} 