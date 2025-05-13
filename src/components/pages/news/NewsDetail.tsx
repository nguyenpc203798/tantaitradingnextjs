'use client';

import { memo } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import MainLayout from '@/layouts/MainLayout';
import LazyImage from '@/components/LazyImage';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { NewsItem } from '@/hooks/useNewsFilters';
import { useEffect, useState } from 'react';
import PageHero from '@/components/ui/PageHero';
import NewsCategories from './NewsCategories';
import newsData from '@/data/news.json';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

interface NewsDetailProps {
  slug: string;
}

const NewsDetail = memo(({ slug }: NewsDetailProps) => {
  const { t } = useLanguage();
  const [news, setNews] = useState<NewsItem | null>(null);
  const [relatedNews, setRelatedNews] = useState<NewsItem[]>([]);

  // Tìm tin tức dựa vào slug
  useEffect(() => {
    // Tìm tin tức theo slug
    const newsItem = (newsData as NewsItem[]).find(item => item.slug === slug);
    
    if (newsItem) {
      setNews(newsItem);
      
      // Tìm tin tức liên quan (cùng category hoặc có chung tag)
      const related = (newsData as NewsItem[])
        .filter(item => 
          item.id !== newsItem.id && (
            item.category === newsItem.category ||
            item.tags.some(tag => newsItem.tags.includes(tag))
          )
        )
        .slice(0, 3);
      
      setRelatedNews(related);
    }
  }, [slug]);

  if (!news) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{t('news.not_found')}</h2>
        <Link href="/news" className="bg-[#1a3d0a] text-white px-6 py-2 rounded-full hover:bg-[#2c5b18] transition-colors duration-300">
          {t('news.back_to_news')}
        </Link>
      </div>
    </div>;
  }

  return (
    <MainLayout>
      <div className="min-h-screen overflow-hidden">
        <PageHero 
          backgroundImage="/images/news-banner.jpg"
          title={news.title}
          description={news.excerpt}
        />

        <div className="container mx-auto px-4 py-10 flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-3/4">
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerChildren}
              className="bg-white rounded-[2rem] shadow-md p-6 mb-8"
            >
              {/* Metadata */}
              <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 mb-6">
                <span className="text-[#5a5a3a]">{news.date}</span>
                <Link href={`/news?category=${news.category}`}>
                  <span className="text-xs uppercase tracking-wider bg-[#e7ece5] px-3 py-1 rounded-full text-[#1a3d0a] font-medium">
                    {news.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </span>
                </Link>
                <span className="text-gray-500">
                  {t('news.by')} {news.author}
                </span>
              </motion.div>

              {/* Hình ảnh chính */}
              <motion.div variants={fadeInUp} className="mb-8 rounded-[2rem] overflow-hidden">
                <LazyImage
                  src={news.image}
                  alt={news.title}
                  width={1200}
                  height={630}
                  className="w-full h-auto"
                />
              </motion.div>

              {/* Nội dung */}
              <motion.div variants={fadeInUp} className="prose max-w-none">
                <p className="text-lg font-medium mb-6">
                  {news.excerpt}
                </p>
                
                {/* Giả lập nội dung chi tiết từ content_preview */}
                <p className="mb-4">
                  {news.content_preview}
                </p>
                
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl eget ultricies ultrices, nunc nisl aliquam nunc, eget aliquet nisl nisl eget nisl. Sed euismod, nisl eget ultricies ultrices, nunc nisl aliquam nunc, eget aliquet nisl nisl eget nisl.
                </p>
                
                <h3 className="text-xl font-bold mt-8 mb-4 text-[#1a3d0a]">
                  {t('news.market_overview')}
                </h3>
                
                <p className="mb-4">
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis ornare vel eu leo. Cras mattis consectetur purus sit amet fermentum.
                </p>

                <p className="mb-4">
                  Nulla vitae elit libero, a pharetra augue. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum.
                </p>
              </motion.div>

              {/* Tags */}
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-gray-200">
                <span className="font-medium text-gray-700">{t('news.tags.title')}:</span>
                {news.tags.map((tag, idx) => (
                  <Link 
                    key={idx} 
                    href={`/news?tag=${tag.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm bg-gray-100 hover:bg-[#e7ece5] px-3 py-1 rounded-full text-gray-600 hover:text-[#1a3d0a] transition-colors duration-300"
                  >
                    #{tag}
                  </Link>
                ))}
              </motion.div>
            </motion.article>

            {/* Tin tức liên quan */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerChildren}
              className="space-y-6"
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-2xl font-bold mb-6 text-[#1a3d0a]">
                  {t('news.related_news')}
                </h2>
              </motion.div>

              <motion.div variants={staggerChildren} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedNews.map((item) => (
                  <motion.div 
                    key={item.id}
                    variants={fadeInUp}
                    className="bg-white rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
                  >
                    <Link href={`/news/${item.slug}`} className="block h-40 overflow-hidden">
                      <LazyImage
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={250}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </Link>
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-[#5a5a3a]">{item.date}</span>
                        <span className="text-xs uppercase tracking-wider bg-[#e7ece5] px-2 py-1 rounded-full text-[#1a3d0a] font-medium">
                          {item.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        </span>
                      </div>
                      <Link href={`/news/${item.slug}`}>
                        <h3 className="text-base font-bold leading-tight group-hover:text-[#1a3d0a] transition-colors duration-300 line-clamp-2">
                          {item.title}
                        </h3>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/4">
            <NewsCategories />
          </div>
        </div>
      </div>
    </MainLayout>
  );
});

NewsDetail.displayName = 'NewsDetail';

export default NewsDetail;