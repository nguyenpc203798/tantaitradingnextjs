'use client';

import { motion } from 'framer-motion';
import { memo } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import LazyImage from '@/components/LazyImage';
import Link from 'next/link';
import { useNewsFilters } from '@/hooks/useNewsFilters';

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

const FeaturedNews = memo(() => {
  const { t } = useLanguage();
  const { latestNews } = useNewsFilters();
  
  // Lấy 3 tin mới nhất làm tin nổi bật
  const featuredNews = latestNews.slice(0, 3);

  return (
    <section className="py-12 bg-backgroundprimary">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
          className="space-y-8"
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <h2 className="text-center">{t('news.featured.title')}</h2>
            <p className="text-center max-w-2xl mx-auto">{t('news.featured.description')}</p>
          </motion.div>

          <motion.div 
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {featuredNews.map((news) => (
              <motion.div 
                key={news.id}
                variants={fadeInUp}
                className="bg-white rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
              >
                <Link href={`/news/${news.slug}`} className="block h-52 overflow-hidden">
                  <LazyImage
                    src={news.image}
                    alt={news.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
                <div className="p-6">
                  <div className="flex flex-wrap justify-between items-center mb-4">
                    <span className="text-sm text-[#5a5a3a]">{news.date}</span>
                    <Link href={`/news?category=${news.category}`}>
                      <span className="text-xs uppercase tracking-wider bg-[#e7ece5] px-2 py-1 rounded-full text-[#1a3d0a] font-medium">
                        {news.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </span>
                    </Link>
                  </div>
                  <Link href={`/news/${news.slug}`}>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 line-clamp-2 group-hover:text-[#1a3d0a] transition-colors duration-300">
                      {news.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    {news.excerpt}
                  </p>
                  <div className="flex justify-end">
                    <Link 
                      href={`/news/${news.slug}`}
                      className="text-[#1a3d0a] font-medium text-sm hover:underline flex items-center gap-1"
                    >
                      {t('news.featured.read_more')}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

FeaturedNews.displayName = 'FeaturedNews';

export default FeaturedNews; 