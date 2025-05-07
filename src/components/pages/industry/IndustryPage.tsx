'use client';

import { memo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from "@/context/LanguageContext";
import MainLayout from "@/layouts/MainLayout";
import LazyImage from "@/components/LazyImage";

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
    image: '/images/pages/industry/Coffee/coffee1.webp'
  },
  {
    id: 'rubber',
    image: '/images/pages/industry/NaturalRubber/naturalrubber1.webp'
  },
  { 
    id: 'tapioca',
    image: '/images/pages/industry/TapiocaStarch/tapioca1.webp'
  },
  {
    id: 'cashew',
    image: '/images/pages/industry/CashewNuts/cashew1.webp'
  },
  {
    id: 'star_anise',
    image: '/images/pages/industry/StarAnise/staranise1.webp'
  },
  {
    id: 'cinnamon',
    image: '/images/pages/industry/Cinnamon/cinnamon1.webp'
  },
  {
    id: 'pepper',
    image: '/images/pages/industry/BlackPepper/pepper1.webp'
  }
];

const IndustryPage = memo(() => {
  const { t } = useLanguage();

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-muted/30 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerChildren}
          >
            <motion.h1 
              className="mb-6"
              variants={fadeInUp}
            >
              {t("nav.products")}
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-8"
              variants={fadeInUp}
            >
              Tantai Trading cung cấp các sản phẩm nông nghiệp chất lượng cao đạt tiêu chuẩn quốc tế
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Industry Products Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerChildren}
          >
            {industries.map((industry) => (
              <motion.div
                key={industry.id}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500"
                variants={fadeInUp}
              >
                <Link href={`/industry/${industry.id}`} className="block aspect-[4/3] relative">
                  <div className="w-full h-full relative">
                    <LazyImage
                      src={industry.image}
                      alt={t(`nav.products_items.${industry.id}`)}
                      className="object-cover h-full w-full"
                      width={600}
                      height={450}
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-bold px-4 py-2 text-center">
                      {t(`nav.products_items.${industry.id}`)}
                    </h3>
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

IndustryPage.displayName = 'IndustryPage';

export default IndustryPage; 