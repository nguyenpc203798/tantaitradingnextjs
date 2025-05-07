import { Metadata } from "next";
import AboutPage from "@/components/pages/about/AboutPage";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSeoMetadata({
  title: "About Us",
  description: "Learn about Tan Tai Trading's history, values, and our dedicated team of professionals providing business solutions in Vietnam.",
  keywords: ["about us", "company history", "team", "values", "business ethics"],
  canonical: "/about",
  ogImage: "https://tantaitrading.com/images/about-og-image.jpg",
  ogImageAlt: "Tan Tai Trading Team",
});

export default function About() {
  return <AboutPage />;
} 