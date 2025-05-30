'use client';

import { motion } from 'framer-motion';
import { memo, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useLanguage } from '@/context/LanguageContext';
import LazyImage from '@/components/LazyImage';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Button } from '@/components/ui/button';

import { fadeInUp , staggerChildren } from '@/lib/animations';

const NewsSection = memo(() => {
  const { t } = useLanguage();

  // Dữ liệu tin tức
  const newsItems = [
    {
      id: 1,
      image: "/images/cohoi/ch1.webp",
      date: t('home.news_section.news_items.item1.date'),
      title: t('home.news_section.news_items.item1.title'),
      alt: t('home.news_section.news_items.item1.alt') || "Close-up of hands holding red coffee cherries with some falling"
    },
    {
      id: 2,
      image: "/images/cohoi/ch2.webp",
      date: t('home.news_section.news_items.item2.date'),
      title: t('home.news_section.news_items.item2.title'),
      alt: t('home.news_section.news_items.item2.alt') || "Close-up image of roasted coffee beans in a container"
    },
    {
      id: 3,
      image: "/images/cohoi/ch3.jpg",
      date: t('home.news_section.news_items.item3.date'),
      title: t('home.news_section.news_items.item3.title'),
      alt: t('home.news_section.news_items.item3.alt') || "Close-up of hands holding red coffee cherries with some falling"
    },
    {
      id: 4,
      image: "/images/cohoi/ch4.jpg",
      date: t('home.news_section.news_items.item4.date'),
      title: t('home.news_section.news_items.item4.title'),
      alt: t('home.news_section.news_items.item4.alt') || "Close-up image of roasted coffee beans in a container"
    }
  ];

  // Tính toán số lượng slides hiển thị dựa trên kích thước màn hình
  const [slidesPerView, setSlidesPerView] = useState(1);

  // Hàm xử lý thay đổi kích thước màn hình
  const handleResize = () => {
    if (typeof window !== 'undefined') {
      setSlidesPerView(window.innerWidth >= 768 ? 2 : 1);
    }
  };

  // Gắn sự kiện resize khi component mount
  useEffect(() => {
    // Thiết lập giá trị ban đầu
    handleResize();

    // Thêm sự kiện lắng nghe resize
    window.addEventListener('resize', handleResize);

    // Xóa sự kiện khi component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="tintuc" className="bg-backgroundprimary py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
        >
          <motion.div
            className="w-full md:w-[60%]"
            variants={fadeInUp}
          >
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop={true}
              spaceBetween={24}
              slidesPerView={1}
              slidesPerGroup={1}
              speed={2000}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                  spaceBetween: 24,
                },
              }}
              className="h-full w-full news-swiper relative"
            >
              {newsItems.map((item) => (
                <SwiperSlide key={item.id} className="space-y-3">
                  <div className="h-[18rem] md:h-[15rem] object-cover rounded-[2rem] overflow-hidden">
                    <LazyImage
                      alt={item.alt}
                      className="h-full w-full object-cover hover:scale-110"
                      src={item.image}
                      width={600}
                      height={400}
                    />
                  </div>
                  <p className="text-[10px] text-[#5a5a3a] dark:text-[#cdd4c5]">
                    {item.date}
                  </p>
                  <h3 className="text-[15px] font-bold leading-tight">
                    {item.title}
                  </h3>
                  <Button
                    size="sm"
                    className="hover:bg-transparent"
                  >
                    {t('home.news_section.view_more')}
                  </Button>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Custom CSS cho pagination dots */}
            <style jsx global>{`
              .news-swiper {
                padding-bottom: 3rem;
              }
              .news-swiper .swiper-pagination {
                display: flex;
                flex-direction: row;
                justify-content: center;
                gap: 8px;
              }
              
              .news-swiper .swiper-pagination-bullet {
                width: 8px;
                height: 8px;
                display: block;
                border-radius: 50%;
                background: #a5c7a5; /* Màu xanh nhạt */
                opacity: 1;
                transition: all 0.3s ease;
                cursor: pointer;
              }
              
              .news-swiper .swiper-pagination-bullet:hover {
                transform: scale(1.2);
                background: #8ab88a;
              }
              
              .news-swiper .swiper-pagination-bullet-active {
                background: #1a3d0a; /* Màu xanh đậm */
                transform: scale(1.2);
              }
              
              .dark .news-swiper .swiper-pagination-bullet-active {
                background: #a8fd82; /* Nền trắng cho dark mode */
                transform: scale(1.2);
              }
              
              /* Ẩn pagination bullets thừa */
              .news-swiper .swiper-pagination-bullet:nth-child(n+${Math.ceil(newsItems.length / slidesPerView) + 1}) {
                display: none;
              }
            `}</style>
          </motion.div>
          <motion.div
            className="w-full md:w-[40%] flex flex-col justify-start"
            variants={fadeInUp}
          >
            <p className="text-[#5a5a3a] dark:text-[#cdd4c5] uppercase tracking-widest font-semibold mb-2">
              {t('home.news_section.section_label')}
            </p>
            <h2 className="text-[2.5rem] font-bold leading-tight mb-3">
              {t('home.news_section.heading')}
            </h2>
            <p className="leading-relaxed text-justify">
              {t('home.news_section.description')}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

NewsSection.displayName = 'NewsSection';

export default NewsSection; 