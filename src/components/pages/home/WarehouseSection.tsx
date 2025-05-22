'use client';

import { motion } from 'framer-motion';
import { memo } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { fadeInUp , staggerChildren } from '@/lib/animations';
import LazyImage from '@/components/LazyImage';

const WarehouseSection = memo(() => {
  const { t } = useLanguage();
  
  return (
    <section id="nhamaykhohang" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          {t('home.warehouse_section.title')}
        </motion.h2>
        <motion.div 
          className="flex flex-wrap gap-6 lg:gap-3 xl:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
        >
          <motion.div variants={fadeInUp} className="w-full lg:w-[48%] h-[200px] lg:h-[500px] overflow-hidden rounded-[2rem]">
            <LazyImage
              alt={t('home.warehouse_section.image1_alt') || "Interior of a large warehouse with forklifts and stacks of pallets"}
              className="w-full h-full object-cover hover:scale-110"
              src="/images/nhamaykhohang/1.webp"
              width={800}
              height={500}
            />
          </motion.div>
          <motion.div 
            className="flex flex-col gap-6 lg:gap-3 xl:gap-6 w-full lg:w-[24%] lg:h-[500px]"
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="w-full h-[200px] lg:h-[55%] xl:h-[54%] overflow-hidden rounded-[2rem]">
              <LazyImage
                alt={t('home.warehouse_section.image2_alt') || "Forklift lifting white sacks inside a warehouse with warm lighting"}
                className="w-full h-full object-cover hover:scale-110"
                src="/images/nhamaykhohang/2.webp"
                width={400}
                height={300}
              />
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full h-[200px] lg:h-[43%] xl:h-[41%] overflow-hidden rounded-[2rem]">
              <LazyImage
                alt={t('home.warehouse_section.image3_alt') || "Warehouse loading dock with pallets and a truck backed up to the door"}
                className="w-full h-full object-cover hover:scale-110"
                src="/images/nhamaykhohang/3.webp"
                width={400}
                height={250}
              />
            </motion.div>
          </motion.div>
          <motion.div variants={fadeInUp} className="w-full lg:w-[23%] h-[200px] lg:h-[500px] overflow-hidden rounded-[2rem]">
            <LazyImage
              alt={t('home.warehouse_section.image4_alt') || "Two people wearing hardhats discussing inside a warehouse aisle"}
              className="w-full h-full object-cover hover:scale-110"
              src="/images/nhamaykhohang/4.webp"
              width={350}
              height={500}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

WarehouseSection.displayName = 'WarehouseSection';

export default WarehouseSection; 