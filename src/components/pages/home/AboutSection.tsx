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

const AboutSection = memo(() => {
  const { t } = useLanguage();
  
  return (
    <section id="gioithieu" className="bg-backgroundprimary py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-[10rem]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
        >
          <motion.h2 
            className="text-foreground font-extrabold text-[2rem] lg:text-[3rem] mb-3 leading-tight"
            variants={fadeInUp}
          >
            {t('home.about_section.title')}
          </motion.h2>
          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div 
              className="flex flex-col justify-between w-full lg:w-1/2"
              variants={fadeInUp}
            >
              <p className="text-muted-foreground w-full leading-tight mb-8 text-justify">
                {t('home.about_section.main_description')}
              </p>
              <div className="h-[20rem] lg:h-[40rem] xl:h-[50rem] overflow-hidden rounded-[2rem]">
                <LazyImage
                  alt={t('home.about_section.image1_alt') || "Basket of red coffee cherries held by person wearing checkered shirt with green coffee leaves"}
                  className="w-full h-full object-cover hover:scale-110"
                  src="/images/gioithieu/1.webp"
                  width={600}
                  height={600}
                />
              </div>
            </motion.div>
            <motion.div 
              className="flex flex-col justify-between w-full lg:w-1/2"
              variants={fadeInUp}
            >
              <div>
                <div className="h-[20rem] lg:h-[20rem] xl:h-[30rem] mb-8 overflow-hidden rounded-[2rem]">
                  <LazyImage
                    alt={t('home.about_section.image2_alt') || "Farmers harvesting coffee plants in green hilly area wearing yellow and blue jackets"}
                    className="w-full h-full object-cover hover:scale-110"
                    src="/images/gioithieu/2.webp"
                    width={600}
                    height={400}
                  />
                </div>
                <p className="text-muted-foreground leading-tight mb-12 text-justify">
                  {t('home.about_section.secondary_description')}
                </p>
              </div>
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-muted-foreground"
                variants={staggerChildren}
              >
                <motion.div variants={fadeInUp}>
                  <h3 className="text-foreground font-extrabold mb-1 leading-tight text-[14px]">
                    {t('home.about_section.growth_strategies.export_growth.title')}
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-justify">
                    <li>
                      {t('home.about_section.growth_strategies.export_growth.items.0')}
                    </li>
                    <li>
                      {t('home.about_section.growth_strategies.export_growth.items.1')}
                    </li>
                  </ul>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="text-foreground font-extrabold mb-1 leading-tight text-[14px]">
                    {t('home.about_section.growth_strategies.warehouse_investment.title')}
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-justify">
                    <li>
                      {t('home.about_section.growth_strategies.warehouse_investment.items.0')}
                    </li>
                    <li>
                      {t('home.about_section.growth_strategies.warehouse_investment.items.1')}
                    </li>
                  </ul>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="text-foreground font-extrabold mb-1 leading-tight text-[14px]">
                    {t('home.about_section.growth_strategies.warehouse_service.title')}
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-justify">
                    <li>
                      {t('home.about_section.growth_strategies.warehouse_service.items.0')}
                    </li>
                    <li>
                      {t('home.about_section.growth_strategies.warehouse_service.items.1')}
                    </li>
                  </ul>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div 
          className="flex flex-wrap justify-between text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
        >
          <motion.div className="w-1/2 md:w-1/4 mb-12 md:mb-0" variants={fadeInUp}>
            <p className="text-[40px] sm:text-[50px] font-semibold leading-none text-foreground">
              {t('home.about_section.stats.company')}
            </p>
            <p className="text-muted-foreground/60 mt-1">
              {t('home.about_section.stats.company_subtitle')}
            </p>
          </motion.div>
          <motion.div className="w-1/2 md:w-1/4 mb-12 md:mb-0" variants={fadeInUp}>
            <p className="text-[40px] sm:text-[50px] font-semibold leading-none text-foreground">
              {t('home.about_section.stats.bags_per_year')}
            </p>
            <p className="text-muted-foreground/60 mt-1">
              {t('home.about_section.stats.bags_subtitle')}
            </p>
          </motion.div>
          <motion.div className="w-1/2 md:w-1/4 mb-6 md:mb-0" variants={fadeInUp}>
            <p className="text-[40px] sm:text-[50px] font-semibold leading-none text-foreground">
              {t('home.about_section.stats.tons_per_year')}
            </p>
            <p className="text-muted-foreground/60 mt-1">
              {t('home.about_section.stats.tons_subtitle')}
            </p>
          </motion.div>
          <motion.div className="w-1/2 md:w-1/4" variants={fadeInUp}>
            <p className="text-[40px] sm:text-[50px] font-semibold leading-none text-foreground">
              {t('home.about_section.stats.revenue')}
            </p>
            <p className="text-muted-foreground/60 mt-1">
              {t('home.about_section.stats.revenue_subtitle')}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

AboutSection.displayName = 'AboutSection';

export default AboutSection; 