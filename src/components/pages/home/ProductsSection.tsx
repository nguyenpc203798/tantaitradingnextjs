'use client';

import { motion } from 'framer-motion';
import { memo } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import LazyImage from '@/components/LazyImage';

import { fadeInUp , staggerChildren } from '@/lib/animations';

const ProductsSection = memo(() => {
  const { t } = useLanguage();

  // Dữ liệu sản phẩm bên trái
  const leftProducts = [
    {
      id: 1,
      name: t('home.products_section.products.coffee.name'),
      description: t('home.products_section.products.coffee.description'),
      image: "/images/nghanhhang/n1.png"
    },
    {
      id: 2,
      name: t('home.products_section.products.tapioca.name'),
      description: t('home.products_section.products.tapioca.description'),
      image: "/images/nghanhhang/n2.png"
    },
    {
      id: 3,
      name: t('home.products_section.products.star_anise.name'),
      description: t('home.products_section.products.star_anise.description'),
      image: "/images/nghanhhang/n3.png"
    }
  ];

  // Dữ liệu sản phẩm bên phải
  const rightProducts = [
    {
      id: 4,
      name: t('home.products_section.products.rubber.name'),
      description: t('home.products_section.products.rubber.description'),
      image: "/images/nghanhhang/n4.webp"
    },
    {
      id: 5,
      name: t('home.products_section.products.cashew.name'),
      description: t('home.products_section.products.cashew.description'),
      image: "/images/nghanhhang/n5.png"
    },
    {
      id: 6,
      name: t('home.products_section.products.cinnamon.name'),
      description: t('home.products_section.products.cinnamon.description'),
      image: "/images/nghanhhang/n6.png"
    }
  ];

  return (
    <section id="nghanhhang" className="bg-backgroundprimary py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          {t('home.products_section.title')}
        </motion.h2>
        
        {/* Sản phẩm hiển thị trên mobile */}
        <motion.div 
          className="block lg:hidden space-y-10 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
        >
          {/* Kết hợp cả hai mảng và hiển thị */}
          {[...rightProducts, ...leftProducts].map((product) => (
            <motion.div 
              key={product.id}
              className="flex items-center space-x-12 w-full"
              variants={fadeInUp}
            >
              <div className="h-[120px]">
                <LazyImage
                  alt={product.name}
                  className="w-full h-full object-contain"
                  src={product.image}
                  width={120}
                  height={120}
                />
              </div>
              <div className='w-[90%]'>
                <h2 className="text-foreground font-extrabold text-[2rem] mb-1">
                  {product.name}
                </h2>
                <p className="text-muted-foreground text-justify">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Layout desktop */}
        <motion.div 
          className="flex flex-col md:flex-row md:justify-between md:items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
        >
          {/* Left side items */}
          <motion.div 
            className="hidden lg:flex flex-col space-y-10 md:w-1/3"
            variants={staggerChildren}
          >
            {leftProducts.map((product) => (
              <motion.div 
                key={product.id}
                className="flex items-center space-x-12"
                variants={fadeInUp}
              >
                <div className="text-left md:text-right max-w-[200px]">
                  <h2 className="text-foreground font-extrabold text-[2rem] mb-1">
                    {product.name}
                  </h2>
                  <p className="text-muted-foreground text-justify">
                    {product.description}
                  </p>
                </div>
                <div className="w-[110px] h-[110px]">
                  <LazyImage
                    alt={product.name}
                    className="w-full h-full"
                    src={product.image}
                    width={110}
                    height={110}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Center image */}
          <motion.div 
            className="lg:mx-8 w-full lg:w-1/3 flex justify-center"
            variants={fadeInUp}
          >
            <div className="rounded-[20px] w-full lg:w-[450px] h-[500px] overflow-hidden">
              <LazyImage
                alt={t('home.products_section.center_image_alt') || "Lush green coffee plantation landscape with mountains and blue sky"}
                className="w-full h-full object-cover hover:scale-110"
                src="/images/nghanhhang/hinhgiua.webp"
                width={450}
                height={500}
              />
            </div>
          </motion.div>
          
          {/* Right side items */}
          <motion.div 
            className="hidden lg:flex flex-col space-y-10 md:w-1/3"
            variants={staggerChildren}
          >
            {rightProducts.map((product) => (
              <motion.div 
                key={product.id}
                className="flex items-center space-x-12 justify-end"
                variants={fadeInUp}
              >
                <div className="w-[110px] h-[110px]">
                  <LazyImage
                    alt={product.name}
                    className="w-full h-full"
                    src={product.image}
                    width={110}
                    height={110}
                  />
                </div>
                <div className="max-w-[200px]">
                  <h2 className="text-foreground font-extrabold text-[2rem] mb-1">
                    {product.name}
                  </h2>
                  <p className="text-muted-foreground text-justify">
                    {product.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

ProductsSection.displayName = 'ProductsSection';

export default ProductsSection; 