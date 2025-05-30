'use client';

import { motion } from 'framer-motion';
import { memo } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

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

// Hàm kiểm tra tính hợp lệ của URL
const isValidImageUrl = (url: string): boolean => {
  // Kiểm tra xem url có phải là chuỗi không rỗng và bắt đầu bằng "/" hoặc "http"
  return !!url && (url.startsWith('/') || url.startsWith('http'));
};

interface PageHeroProps {
  title?: string;
  description?: string;
  backgroundImage?: string;
  i18nKey?: {
    title: string;
    description: string;
  };
  height?: string;
  darkOverlay?: boolean;
  variant?: 'default' | 'simple';
  className?: string;
  rounded?: boolean;
}

const PageHero = memo(({
  title,
  description,
  backgroundImage = '/images/default-hero-bg.jpg',
  i18nKey,
  height = 'h-[40vh] md:h-[50vh]',
  darkOverlay = true,
  variant = 'default',
  className = '',
  rounded = false
}: PageHeroProps) => {
  const { t } = useLanguage();

  // Lấy text từ i18n nếu có i18nKey
  const heroTitle = title || (i18nKey ? t(i18nKey.title) : '');
  const heroDescription = description || (i18nKey ? t(i18nKey.description) : '');
  
  // Đảm bảo backgroundImage là URL hợp lệ
  const validBackgroundImage = isValidImageUrl(backgroundImage) 
    ? backgroundImage 
    : '/images/default-hero-bg.jpg';

  // Simple variant (kiểu hero trang About)
  if (variant === 'simple') {
    return (
      <section className={`pt-20 pb-16 md:py-32 bg-muted ${className} ${rounded ? 'rounded-[2rem]' : ''}`}>
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerChildren}
          >
            <motion.h1 
              className="mb-6"
              variants={fadeInUp}
            >
              {heroTitle}
            </motion.h1>
            {heroDescription && (
              <motion.p 
                className="text-lg md:text-xl text-muted-foreground mb-8"
                variants={fadeInUp}
              >
                {heroDescription}
              </motion.p>
            )}
          </motion.div>
        </div>
      </section>
    );
  }

  // Default variant (với background image)
  return (
    <section className={`relative w-full ${height} bg-[#1a3d0a] flex items-center ${className} ${rounded ? 'rounded-[2rem] overflow-hidden' : ''}`}>
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src={validBackgroundImage}
          alt={heroTitle || "Background"}
          fill
          priority
          sizes="100vw"
          className={`object-cover object-center ${darkOverlay ? 'opacity-40' : 'opacity-70'}`}
          style={{ transform: 'translateZ(0)' }} // Kích hoạt GPU acceleration
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center text-white"
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            variants={fadeInUp}
          >
            {heroTitle}
          </motion.h1>
          {heroDescription && (
            <motion.p 
              className="text-white text-lg md:text-xl max-w-3xl mx-auto text-center"
              variants={fadeInUp}
            >
              {heroDescription}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
});

PageHero.displayName = 'PageHero';

export default PageHero; 