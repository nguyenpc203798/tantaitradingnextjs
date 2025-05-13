'use client';

import { motion } from 'framer-motion';
import { memo, useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import LazyImage from '@/components/LazyImage';
import { useNewsFilters } from '@/hooks/useNewsFilters';
import { useRouter, useSearchParams } from 'next/navigation';

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

const NewsCategories = memo(() => {
  const { t } = useLanguage();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  
  // Lấy các params từ URL nếu có
  const categoryParam = searchParams.get('category') || '';
  const tagParam = searchParams.get('tag') || '';
  const searchParam = searchParams.get('search') || '';
  
  const {
    categories,
    tags,
    latestNews,
    handleSearch
  } = useNewsFilters({
    initialCategory: categoryParam,
    initialTag: tagParam,
    initialSearchTerm: searchParam
  });

  // Cập nhật search term từ URL param khi component mount
  useEffect(() => {
    if (searchParam) {
      setSearchTerm(searchParam);
    }
  }, [searchParam]);

  // Xử lý tìm kiếm khi nhấn Enter
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch(searchTerm);
      router.push(`/news?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  // Xử lý tìm kiếm khi click vào icon tìm kiếm
  const handleSearchClick = () => {
    handleSearch(searchTerm);
    router.push(`/news?search=${encodeURIComponent(searchTerm)}`);
  };

  // Thêm ngay sau khi lấy categories từ useNewsFilters
  // useEffect(() => {
  //   console.log('Categories trong NewsCategories:', categories);
  // }, [categories]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerChildren}
      className="space-y-10"
    >
      {/* Khối tìm kiếm */}
      <motion.div 
        variants={fadeInUp}
        className="bg-white rounded-[2rem] shadow-md p-6"
      >
        <h3 className="text-xl font-bold mb-4 text-[#1a3d0a]">{t('news.search.title')}</h3>
        <div className="relative">
          <input
            type="text"
            placeholder={t('news.search.placeholder')}
            className="w-full py-3 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a3d0a] focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
            onClick={handleSearchClick}
            aria-label="Search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </motion.div>

      {/* Khối danh mục */}
      <motion.div 
        variants={fadeInUp}
        className="bg-white rounded-[2rem] shadow-md p-6"
      >
        <h3 className="text-xl font-bold mb-4 text-[#1a3d0a]">{t('news.categories.title')}</h3>
        <ul className="space-y-3">
          {categories.map((category, index) => (
            <li key={index}>
              <Link 
                href={`/news?category=${category.slug}`}
                className={`flex justify-between items-center py-2 border-b border-gray-100 hover:text-[#1a3d0a] transition-colors duration-300 ${
                  categoryParam === category.slug ? 'text-[#1a3d0a] font-medium' : ''
                }`}
              >
                <span>{category.name}</span>
                <span className="bg-[#e7ece5] text-[#1a3d0a] text-xs px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Khối tin mới nhất */}
      <motion.div 
        variants={fadeInUp}
        className="bg-white rounded-[2rem] shadow-md p-6"
      >
        <h3 className="text-xl font-bold mb-4 text-[#1a3d0a]">{t('news.latest_news.title')}</h3>
        <div className="space-y-4">
          {latestNews.map((news) => (
            <Link 
              href={`/news/${news.slug}`}
              key={news.id}
              className="flex gap-3 group"
            >
              <div className="w-20 h-20 flex-shrink-0 rounded-[1rem] overflow-hidden">
                <LazyImage
                  src={news.image}
                  alt={news.title}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div>
                <p className="text-xs text-[#5a5a3a] mb-1">{news.date}</p>
                <h4 className="text-sm font-semibold leading-tight group-hover:text-[#1a3d0a] transition-colors duration-300">
                  {news.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Khối thẻ tag */}
      <motion.div 
        variants={fadeInUp}
        className="bg-white rounded-[2rem] shadow-md p-6"
      >
        <h3 className="text-xl font-bold mb-4 text-[#1a3d0a]">{t('news.tags.title')}</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Link 
              key={index} 
              href={`/news?tag=${tag.toLowerCase().replace(/\s+/g, '-')}`}
              className={`px-3 py-1 rounded-full text-sm transition-colors duration-300 ${
                tagParam === tag.toLowerCase().replace(/\s+/g, '-')
                  ? 'bg-[#1a3d0a] text-white'
                  : 'bg-[#e7ece5] text-[#1a3d0a] hover:bg-[#1a3d0a] hover:text-white'
              }`}
            >
              {tag}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
});

NewsCategories.displayName = 'NewsCategories';

export default NewsCategories; 