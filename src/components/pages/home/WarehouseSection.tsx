'use client';

import { motion } from 'framer-motion';
import { memo } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import LazyImage from '@/components/LazyImage';

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

const WarehouseSection = memo(() => {
  const { t } = useLanguage();
  
  return (
    <section id="nhamaykhohang" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-black font-extrabold text-[3rem] mb-8 leading-tight"
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
          <motion.div variants={fadeInUp} className="w-full lg:w-[48%] h-[200px] lg:h-[500px]">
            <LazyImage
              alt={t('home.warehouse_section.image1_alt') || "Interior of a large warehouse with forklifts and stacks of pallets"}
              className="rounded-[2rem] w-full h-full object-cover"
              src="/images/nhamaykhohang/1.webp"
              width={800}
              height={500}
            />
          </motion.div>
          <motion.div 
            className="flex flex-col gap-6 lg:gap-3 xl:gap-6 w-full lg:w-[24%] lg:h-[500px]"
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="w-full h-[200px] lg:h-[55%] xl:h-[54%]">
              <LazyImage
                alt={t('home.warehouse_section.image2_alt') || "Forklift lifting white sacks inside a warehouse with warm lighting"}
                className="rounded-[2rem] w-full h-full object-cover"
                src="/images/nhamaykhohang/2.webp"
                width={400}
                height={300}
              />
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full h-[200px] lg:h-[43%] xl:h-[41%]">
              <LazyImage
                alt={t('home.warehouse_section.image3_alt') || "Warehouse loading dock with pallets and a truck backed up to the door"}
                className="rounded-[2rem] w-full h-full object-cover"
                src="/images/nhamaykhohang/3.webp"
                width={400}
                height={250}
              />
            </motion.div>
          </motion.div>
          <motion.div variants={fadeInUp} className="w-full lg:w-[23%] h-[200px] lg:h-[500px]">
            <LazyImage
              alt={t('home.warehouse_section.image4_alt') || "Two people wearing hardhats discussing inside a warehouse aisle"}
              className="rounded-[2rem] w-full h-full object-cover"
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