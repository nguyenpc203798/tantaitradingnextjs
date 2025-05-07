'use client';

import { memo } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade, Autoplay } from 'swiper/modules';
import { useLanguage } from '@/context/LanguageContext';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HomeSlider = memo(() => {
  const { t } = useLanguage();
  
  // Mảng chứa thông tin các slide
  const sliderImages = [
    {
      src: '/images/slider/slide1.jpg',
      alt: t('home.slider.slide1_alt') || 'Tantai Trading Slide 1'
    },
    {
      src: '/images/slider/slide2.jpg',
      alt: t('home.slider.slide2_alt') || 'Tantai Trading Slide 2'
    },
    {
      src: '/images/slider/slide3.jpg',
      alt: t('home.slider.slide3_alt') || 'Tantai Trading Slide 3'
    },
    {
      src: '/images/slider/slide4.jpg',
      alt: t('home.slider.slide4_alt') || 'Tantai Trading Slide 4'
    }
  ];

  return (
    <div className="relative w-full h-[400px] md:h-[600px]">
      <Swiper
        modules={[Pagination, EffectFade, Autoplay]}
        effect="fade"
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}"></span>`;
          },
          verticalClass: 'swiper-pagination-vertical',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1000}
        className="h-full w-full"
      >
        {sliderImages.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(max-width: 768px) 100vw, 100vw"
                priority={index === 0}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom CSS cho pagination dọc bên phải */}
      <style jsx global>{`
        .swiper-pagination {
          right: 20px !important;
          left: auto !important;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
        }
        
        .swiper-pagination-bullet-active {
          background: #fff;
        }
      `}</style>
    </div>
  );
});

HomeSlider.displayName = 'HomeSlider';

export default HomeSlider;
