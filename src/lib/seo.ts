import { Metadata } from "next";

interface SeoProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogImageAlt?: string;
  ogImageWidth?: number;
  ogImageHeight?: number;
  twitterImage?: string;
  canonical?: string;
  noIndex?: boolean;
}

/**
 * Tạo metadata chuẩn SEO cho các trang Next.js
 * @param seoProps - Thông tin SEO cho trang
 * @returns Metadata object cho Next.js
 */
export function generateSeoMetadata({
  title,
  description,
  keywords = [],
  ogImage = "https://tantaitrading.com/images/og-image.jpg",
  ogImageAlt = "Tantai Trading",
  ogImageWidth = 1200,
  ogImageHeight = 630,
  twitterImage = "https://tantaitrading.com/images/twitter-image.jpg",
  canonical = "",
  noIndex = false,
}: SeoProps): Metadata {
  // Tạo title với template
  const fullTitle = `${title} | Tantai Trading`;
  
  // Xây dựng metadata object
  const metadata: Metadata = {
    title: title,
    description: description,
    keywords: [...keywords, "business", "trading", "consulting", "vietnam"],
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: fullTitle,
      description: description,
      url: canonical ? `https://tantaitrading.com${canonical}` : "https://tantaitrading.com",
      siteName: "Tantai Trading",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: ogImage,
          width: ogImageWidth,
          height: ogImageHeight,
          alt: ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: description,
      images: [twitterImage],
    },
  };

  // Thêm canonical URL nếu được cung cấp
  if (canonical) {
    metadata.alternates = {
      canonical: canonical,
    };
  }

  return metadata;
} 