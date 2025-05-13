import { Metadata } from "next";
import { generateSeoMetadata } from "@/lib/seo";
import NewsDetail from "@/components/pages/news/NewsDetail";
import newsData from "@/data/news.json";

interface NewsPageProps {
  params: {
    slug: string;
  };
}

// Tạo metadata cho trang
export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
  const slug = params.slug;
  
  // Tìm tin tức theo slug
  const news = newsData.find(item => item.slug === slug);
  
  if (!news) {
    return generateSeoMetadata({
      title: "Tin tức không tồn tại",
      description: "Tin tức bạn đang tìm kiếm không tồn tại hoặc đã được chuyển sang địa chỉ khác.",
      canonical: `/news`,
    });
  }
  
  return generateSeoMetadata({
    title: news.title,
    description: news.excerpt,
    keywords: [news.category, ...news.tags, "tin tức", "tantai"],
    canonical: `/news/${slug}`,
  });
}

export default async function NewsDetailPage({ params }: NewsPageProps) {
  const slug = params.slug;
  return <NewsDetail slug={slug} />;
}

// Tạo trang tĩnh cho các slug có sẵn
export async function generateStaticParams() {
  return newsData.map((news) => ({
    slug: news.slug,
  }));
}