'use client';

import { motion } from 'framer-motion';
import { memo } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import LazyImage from '@/components/LazyImage';
import Link from 'next/link';

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
      staggerChildren: 0.2
    }
  }
};

const FeaturedNews = memo(() => {
  const { t } = useLanguage();

  // Dữ liệu bài viết nổi bật
  const featuredNews = [
    {
      id: 1,
      image: "/images/cohoi/ch1.webp",
      date: "15/12/2023",
      title: "Xuất khẩu cà phê Việt Nam đạt kỷ lục mới trong năm 2023",
      category: "Cà phê",
      excerpt: "Xuất khẩu cà phê Việt Nam đã đạt mức kỷ lục mới với giá trị vượt 4 tỷ USD trong năm 2023, khẳng định vị thế của Việt Nam trên thị trường cà phê toàn cầu.",
      slug: "xuat-khau-ca-phe-viet-nam-dat-ky-luc-moi"
    },
    {
      id: 2,
      image: "/images/cohoi/ch2.webp",
      date: "10/12/2023",
      title: "Thị trường cao su thiên nhiên tăng trưởng tích cực trong quý IV/2023",
      category: "Cao su",
      excerpt: "Giá cao su thiên nhiên tăng mạnh trong quý IV năm 2023 do nhu cầu từ thị trường Trung Quốc phục hồi và nguồn cung bị ảnh hưởng bởi thời tiết tại các nước sản xuất chính.",
      slug: "thi-truong-cao-su-thien-nhien-tang-truong-tich-cuc"
    },
    {
      id: 3,
      image: "/images/cohoi/ch3.jpg",
      date: "05/12/2023",
      title: "Giá tiêu trong nước tăng mạnh nhờ nhu cầu xuất khẩu tăng cao",
      category: "Hồ tiêu",
      excerpt: "Giá tiêu trong nước tăng mạnh, đạt mức 90.000-92.000 đồng/kg tại một số tỉnh trọng điểm do nhu cầu xuất khẩu tăng cao từ các thị trường Trung Đông và châu Âu.",
      slug: "gia-tieu-trong-nuoc-tang-manh-nho-nhu-cau-xuat-khau"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
          className="space-y-8"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a3d0a]">{t('news.featured_news.title')}</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {t('news.featured_news.description')}
            </p>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {featuredNews.map((news) => (
              <Link 
                href={`/news/${news.slug}`} 
                key={news.id}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-60 overflow-hidden">
                  <LazyImage
                    src={news.image}
                    alt={news.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-[#5a5a3a]">{news.date}</span>
                    <span className="text-xs uppercase tracking-wider bg-[#e7ece5] px-2 py-1 rounded-full text-[#1a3d0a] font-medium">
                      {news.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#1a3d0a] transition-colors duration-300">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {news.excerpt}
                  </p>
                  <div className="flex justify-end">
                    <button className="bg-[#1a3d0a] text-white text-sm px-6 py-2 rounded-full hover:bg-[#2c5b18] transition-colors duration-300">
                      {t('news.news_list.read_more')}
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

FeaturedNews.displayName = 'FeaturedNews';

export default FeaturedNews; 