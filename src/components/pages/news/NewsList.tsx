'use client';

import { motion } from 'framer-motion';
import { memo, useState } from 'react';
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
      staggerChildren: 0.1
    }
  }
};

const NewsList = memo(() => {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);

  // Danh sách tin tức
  const newsItems = [
    {
      id: 4,
      image: "/images/cohoi/ch4.jpg",
      date: "01/12/2023",
      title: "Hạt điều Việt Nam: Cơ hội lớn trên thị trường quốc tế",
      category: "Hạt điều",
      excerpt: "Xuất khẩu hạt điều của Việt Nam có nhiều cơ hội tăng trưởng khi nhu cầu từ các thị trường lớn như Mỹ, Châu Âu và Trung Quốc đang tăng cao.",
      slug: "hat-dieu-viet-nam-co-hoi-lon-tren-thi-truong-quoc-te"
    },
    {
      id: 5,
      image: "/images/cohoi/ch1.webp",
      date: "28/11/2023",
      title: "Xu hướng tiêu thụ cà phê hữu cơ tăng mạnh tại thị trường châu Âu",
      category: "Cà phê",
      excerpt: "Nhu cầu cà phê hữu cơ tại thị trường châu Âu đang tăng mạnh, mở ra cơ hội lớn cho các nhà sản xuất và xuất khẩu cà phê Việt Nam.",
      slug: "xu-huong-tieu-thu-ca-phe-huu-co-tang-manh"
    },
    {
      id: 6,
      image: "/images/cohoi/ch2.webp",
      date: "25/11/2023",
      title: "Giá cà phê trong nước tăng gần 5% trong tháng 11/2023",
      category: "Cà phê",
      excerpt: "Giá cà phê trong nước tiếp tục xu hướng tăng, tăng gần 5% trong tháng 11/2023, đạt mức 65.000-67.000 đồng/kg tại các tỉnh Tây Nguyên.",
      slug: "gia-ca-phe-trong-nuoc-tang-gan-5-thang-11-2023"
    },
    {
      id: 7,
      image: "/images/cohoi/ch3.jpg",
      date: "20/11/2023",
      title: "Triển vọng thị trường tiêu quốc tế năm 2024",
      category: "Hồ tiêu",
      excerpt: "Thị trường tiêu quốc tế được dự báo sẽ khả quan trong năm 2024 với nguồn cung giảm từ các nước sản xuất chính và nhu cầu tiêu thụ phục hồi sau đại dịch.",
      slug: "trien-vong-thi-truong-tieu-quoc-te-nam-2024"
    },
    {
      id: 8,
      image: "/images/cohoi/ch4.jpg",
      date: "15/11/2023",
      title: "Bộ Nông nghiệp đề xuất giải pháp phát triển bền vững ngành cao su",
      category: "Cao su",
      excerpt: "Bộ Nông nghiệp và Phát triển Nông thôn vừa đề xuất các giải pháp phát triển bền vững cho ngành cao su, tập trung vào nâng cao chất lượng và áp dụng công nghệ trong sản xuất.",
      slug: "bo-nong-nghiep-de-xuat-giai-phap-phat-trien-ben-vung-nganh-cao-su"
    },
    {
      id: 9,
      image: "/images/cohoi/ch1.webp",
      date: "10/11/2023",
      title: "Hội nghị nông sản xuất khẩu 2023: Cơ hội và thách thức",
      category: "Nông sản",
      excerpt: "Hội nghị nông sản xuất khẩu 2023 được tổ chức tại Hà Nội với sự tham gia của hàng trăm doanh nghiệp trong ngành, thảo luận về cơ hội và thách thức trong bối cảnh mới.",
      slug: "hoi-nghi-nong-san-xuat-khau-2023"
    }
  ];

  // Phân trang
  const itemsPerPage = 4;
  const totalPages = Math.ceil(newsItems.length / itemsPerPage);
  const currentItems = newsItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Cuộn lên đầu phần danh sách tin tức
    window.scrollTo({ top: document.getElementById('news-list')?.offsetTop || 0, behavior: 'smooth' });
  };

  return (
    <section id="news-list" className="pb-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerChildren}
        className="space-y-8"
      >
        <motion.div variants={fadeInUp} className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#1a3d0a]">{t('news.news_list.title')}</h2>
          <div className="w-20 h-1 bg-[#1a3d0a]"></div>
        </motion.div>

        <motion.div variants={staggerChildren} className="space-y-8">
          {currentItems.map((news) => (
            <motion.div 
              key={news.id}
              variants={fadeInUp}
              className="group flex flex-col md:flex-row gap-6 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 p-4"
            >
              <div className="w-full md:w-1/3 h-60 md:h-auto overflow-hidden rounded-lg">
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
                    <span className="text-sm text-[#5a5a3a]">{news.date}</span>
                    <span className="text-xs uppercase tracking-wider bg-[#e7ece5] px-2 py-1 rounded-full text-[#1a3d0a] font-medium">
                      {news.category}
                    </span>
                  </div>
                  <Link href={`/news/${news.slug}`}>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#1a3d0a] transition-colors duration-300">
                      {news.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-4">
                    {news.excerpt}
                  </p>
                </div>
                <div className="flex justify-end">
                  <Link 
                    href={`/news/${news.slug}`}
                    className="bg-[#1a3d0a] text-white text-sm px-6 py-2 rounded-full hover:bg-[#2c5b18] transition-colors duration-300"
                  >
                    {t('news.news_list.read_more')}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

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
                    ? 'bg-[#1a3d0a] text-white'
                    : 'bg-[#e7ece5] text-[#1a3d0a] hover:bg-[#c5d5c5]'
                }`}
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