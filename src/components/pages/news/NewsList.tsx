'use client';

import { motion } from 'framer-motion';
import { memo } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import LazyImage from '@/components/LazyImage';
import Link from 'next/link';
import { useNewsFilters } from '@/hooks/useNewsFilters';
import { useSearchParams } from 'next/navigation';

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

type NewsListProps = {
  initialCategory?: string;
  initialTag?: string;
  initialSearchTerm?: string;
};

const NewsList = memo(({
  initialCategory = '',
  initialTag = '',
  initialSearchTerm = ''
}: NewsListProps) => {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  
  // Lấy các params từ URL nếu có
  const categoryParam = searchParams.get('category') || initialCategory;
  const tagParam = searchParams.get('tag') || initialTag;
  const searchParam = searchParams.get('search') || initialSearchTerm;
  
  const {
    currentPage,
    totalPages,
    paginatedNews,
    handlePageChange
  } = useNewsFilters({
    initialCategory: categoryParam,
    initialTag: tagParam,
    initialSearchTerm: searchParam
  });

  return (
    <section id="news-list" className="pb-12">
      <motion.div
        key={`page-${currentPage}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={staggerChildren}
        className="space-y-8"
      >
        <motion.div variants={fadeInUp} className="mb-8">
          <h2 className="dark:text-white">{t('news.news_list.title')}</h2>
          <div className="w-20 h-1 bg-[#1a3d0a] dark:bg-[#8cbb78]"></div>
        </motion.div>

        {paginatedNews.length > 0 ? (
          <motion.div variants={staggerChildren} key={`news-items-${currentPage}`} className="space-y-8">
            {paginatedNews.map((news) => (
              <motion.div 
                key={news.id}
                variants={fadeInUp}
                className="group flex flex-col md:flex-row gap-6 bg-white dark:bg-gray-800 rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 p-4"
              >
                <div className="w-full md:w-1/3 h-60 md:h-auto overflow-hidden rounded-[2rem]">
                  <Link href={`/news/${news.slug}`}>
                    <LazyImage
                      src={news.image}
                      alt={news.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>
                </div>
                <div className="w-full md:w-2/3 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap gap-2 items-center mb-3">
                      <span className="text-sm text-[#5a5a3a] dark:text-gray-400">{news.date}</span>
                      <Link href={`/news?category=${news.category}`}>
                        <span className="text-xs uppercase tracking-wider bg-[#e7ece5] dark:bg-gray-700 px-2 py-1 rounded-full text-[#1a3d0a] dark:text-gray-200 font-medium">
                          {news.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        </span>
                      </Link>
                    </div>
                    
                    <Link href={`/news/${news.slug}`}>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-[#1a3d0a] dark:group-hover:text-[#8cbb78] transition-colors duration-300">
                        {news.title}
                      </h3>
                    </Link>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {news.excerpt}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {news.tags.map((tag, idx) => (
                        <Link 
                          key={idx} 
                          href={`/news?tag=${tag.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-xs bg-gray-100 dark:bg-gray-700 hover:bg-[#e7ece5] dark:hover:bg-gray-600 px-2 py-1 rounded-full text-gray-600 dark:text-gray-300 hover:text-[#1a3d0a] dark:hover:text-white transition-colors duration-300"
                        >
                          #{tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Link 
                      href={`/news/${news.slug}`}
                      className="bg-[#1a3d0a] dark:bg-[#2c5b18] text-white text-sm px-6 py-2 rounded-full hover:bg-[#2c5b18] dark:hover:bg-[#3d7a23] transition-colors duration-300"
                    >
                      {t('news.news_list.read_more')}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div variants={fadeInUp} className="text-center py-20">
            <p className="text-lg text-gray-500 dark:text-gray-400">{t('news.no_results')}</p>
          </motion.div>
        )}

        {/* Phân trang */}
        {totalPages > 1 && (
          <motion.div 
            variants={fadeInUp}
            className="flex justify-center items-center gap-2 mt-10"
          >
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                  currentPage === index + 1
                    ? 'bg-[#1a3d0a] dark:bg-[#2c5b18] text-white'
                    : 'bg-[#e7ece5] dark:bg-gray-700 text-[#1a3d0a] dark:text-gray-200 hover:bg-[#c5d5c5] dark:hover:bg-gray-600'
                }`}
                aria-label={`Page ${index + 1}`}
              >
                {index + 1}
              </button>
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
});

NewsList.displayName = 'NewsList';

export default NewsList; 