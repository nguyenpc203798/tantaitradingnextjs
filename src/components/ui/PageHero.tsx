'use client';

import { motion } from 'framer-motion';
import { memo } from 'react';
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
}

const PageHero = memo(({
  title,
  description,
  backgroundImage = '/images/default-hero-bg.jpg',
  i18nKey,
  height = 'h-[40vh] md:h-[50vh]',
  darkOverlay = true,
  variant = 'default',
  className = ''
}: PageHeroProps) => {
  const { t } = useLanguage();

  // Lấy text từ i18n nếu có i18nKey
  const heroTitle = title || (i18nKey ? t(i18nKey.title) : '');
  const heroDescription = description || (i18nKey ? t(i18nKey.description) : '');

  // Simple variant (kiểu hero trang About)
  if (variant === 'simple') {
    return (
      <section className={`pt-20 pb-16 md:py-32 bg-muted ${className}`}>
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
    <section className={`relative w-full ${height} bg-[#1a3d0a] flex items-center ${className}`}>
      {backgroundImage && (
        <div 
          className={`absolute inset-0 w-full h-full ${darkOverlay ? 'opacity-40' : 'opacity-70'} bg-no-repeat bg-cover bg-center`}
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
      )}
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
              className="text-lg md:text-xl max-w-3xl mx-auto"
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