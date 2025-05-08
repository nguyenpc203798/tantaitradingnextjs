'use client';

import { motion } from 'framer-motion';
import { memo } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import LazyImage from '@/components/LazyImage';

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

  // Danh mục sản phẩm
  const categories = [
    { id: 1, name: t('news.categories.coffee'), count: 15, slug: "ca-phe" },
    { id: 2, name: t('news.categories.rubber'), count: 8, slug: "cao-su" },
    { id: 3, name: t('news.categories.cashew'), count: 12, slug: "hat-dieu" },
    { id: 4, name: t('news.categories.pepper'), count: 10, slug: "hat-tieu" },
    { id: 5, name: t('news.categories.star_anise'), count: 6, slug: "hoi" },
    { id: 6, name: t('news.categories.cinnamon'), count: 7, slug: "que" },
    { id: 7, name: t('news.categories.other'), count: 9, slug: "nong-san-khac" },
  ];

  // Tin tức mới nhất
  const latestNews = [
    {
      id: 1,
      image: "/images/cohoi/ch1.webp",
      date: "15/12/2023",
      title: "Xuất khẩu cà phê Việt Nam đạt kỷ lục mới trong năm 2023",
      slug: "xuat-khau-ca-phe-viet-nam-dat-ky-luc-moi"
    },
    {
      id: 2,
      image: "/images/cohoi/ch2.webp",
      date: "10/12/2023",
      title: "Thị trường cao su thiên nhiên tăng trưởng tích cực",
      slug: "thi-truong-cao-su-thien-nhien-tang-truong-tich-cuc"
    },
    {
      id: 3,
      image: "/images/cohoi/ch3.jpg",
      date: "05/12/2023",
      title: "Giá tiêu trong nước tăng mạnh nhờ nhu cầu xuất khẩu",
      slug: "gia-tieu-trong-nuoc-tang-manh-nho-nhu-cau-xuat-khau"
    }
  ];

  // Danh sách tags
  const tags = ["Cà phê", "Xuất khẩu", "Cao su", "Nông sản", "Hạt điều", "Hồ tiêu", "Giá cả", "Thị trường", "Nông nghiệp"];

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
        className="bg-white rounded-lg shadow-md p-6"
      >
        <h3 className="text-xl font-bold mb-4 text-[#1a3d0a]">{t('news.search.title')}</h3>
        <div className="relative">
          <input
            type="text"
            placeholder={t('news.search.placeholder')}
            className="w-full py-3 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a3d0a] focus:border-transparent"
          />
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </motion.div>

      {/* Khối danh mục */}
      <motion.div 
        variants={fadeInUp}
        className="bg-white rounded-lg shadow-md p-6"
      >
        <h3 className="text-xl font-bold mb-4 text-[#1a3d0a]">{t('news.categories.title')}</h3>
        <ul className="space-y-3">
          {categories.map((category) => (
            <li key={category.id}>
              <Link 
                href={`/news/category/${category.slug}`}
                className="flex justify-between items-center py-2 border-b border-gray-100 hover:text-[#1a3d0a] transition-colors duration-300"
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
        className="bg-white rounded-lg shadow-md p-6"
      >
        <h3 className="text-xl font-bold mb-4 text-[#1a3d0a]">{t('news.latest_news.title')}</h3>
        <div className="space-y-4">
          {latestNews.map((news) => (
            <Link 
              href={`/news/${news.slug}`}
              key={news.id}
              className="flex gap-3 group"
            >
              <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
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
        className="bg-white rounded-lg shadow-md p-6"
      >
        <h3 className="text-xl font-bold mb-4 text-[#1a3d0a]">{t('news.tags.title')}</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Link 
              key={index} 
              href={`/news/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
              className="bg-[#e7ece5] text-[#1a3d0a] px-3 py-1 rounded-full text-sm hover:bg-[#1a3d0a] hover:text-white transition-colors duration-300"
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