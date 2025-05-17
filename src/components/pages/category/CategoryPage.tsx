'use client';

import { memo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from "@/context/LanguageContext";
import MainLayout from "@/layouts/MainLayout";
import LazyImage from "@/components/LazyImage";
import PageHero from '@/components/ui/PageHero';

// Animation variants
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

// Danh sách các sản phẩm ngành hàng
const industries = [
  {
    id: 'coffee',
    image: '/images/pages/category/Coffee/hero.jpg'
  },
  {
    id: 'rubber',
    image: '/images/pages/category/NaturalRubber/hero.jpg'
  },
  { 
    id: 'tapioca',
    image: '/images/pages/category/TapiocaStarch/hero.jpg'
  },
  {
    id: 'cashew',
    image: '/images/pages/category/CashewNuts/hero.jpg'
  },
  {
    id: 'star_anise',
    image: '/images/pages/category/StarAnise/hero.jpg'
  },
  {
    id: 'cinnamon',
    image: '/images/pages/category/Cinnamon/hero.jpg'
  },
  {
    id: 'pepper',
    image: '/images/pages/category/BlackPepper/hero.jpg'
  }
];
  
const CategoryPage = memo(() => {
  const { t } = useLanguage();
  
  // Tính toán số phần tử còn dư khi chia cho 3 cột
  const remainder = industries.length % 3;
  // Boolean kiểm tra phần tử có phải phần tử cuối trong grid có 3 cột không
  const isLastItemInThreeColGrid = (index: number) => {
    return index === industries.length - 1 && remainder === 1;
  };

  return (
    <MainLayout>
        {/* Hero Section */}
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <PageHero 
          title={t("category.title")}
          backgroundImage="/images/pages/category/hero.jpg"
          darkOverlay={false}
        />
      </motion.div>

      {/* Category Products Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerChildren}
          >
            {industries.map((category, index) => (
              <motion.div
                key={category.id}
                className={`group relative overflow-hidden rounded-[2rem] shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isLastItemInThreeColGrid(index) ? 'lg:col-start-2' : ''
                }`}
                variants={fadeInUp}
              >
                <Link 
                  href={`/category/${category.id}`} 
                  className="block aspect-[4/3] relative"
                  aria-label={t(`nav.products_items.${category.id}`)}
                >
                  <div className="w-full h-full relative">
                    <LazyImage
                      src={category.image}
                      alt={t(`nav.products_items.${category.id}`)}
                      className="object-cover h-full w-full rounded-[2rem] transition-transform duration-700 group-hover:scale-110"
                      width={600}
                      height={450}
                      priority={index < 3}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col items-center justify-end p-6 rounded-[2rem] group-hover:from-black/80 transition-all duration-300">
                    <h3 className="text-white text-2xl font-bold mb-2 text-center group-hover:scale-110 transition-transform duration-300">
                      {t(`nav.products_items.${category.id}`)}
                    </h3>
                    <div className="w-0 group-hover:w-1/3 h-1 bg-white rounded transition-all duration-500 mb-4"></div>
                    <span className="text-white text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      {t("nav.products")}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
});

CategoryPage.displayName = 'CategoryPage';

export default CategoryPage; 