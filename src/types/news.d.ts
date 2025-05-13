declare module '@/data/news.json' {
  const newsData: {
    id: number;
    image: string;
    date: string;
    title: string;
    category: string;
    tags: string[];
    excerpt: string;
    slug: string;
    author: string;
    status: string;
    content_preview: string;
  }[];
  
  export default newsData;
} 