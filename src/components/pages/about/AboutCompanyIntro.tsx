'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from "@/context/LanguageContext";
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

const AboutCompanyIntro = memo(() => {
  const { t } = useLanguage();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
        >
          <motion.div variants={fadeInUp}>
            <LazyImage 
              src="/images/pages/about/image1.webp"
              alt={t("about.company_intro.image1_alt")}
              className="rounded-2xl shadow-lg object-cover"
              width={600}
              height={400}
            />
          </motion.div>
          <motion.div className="space-y-6" variants={fadeInUp}>
            <h2 className="text-3xl font-bold mb-6">{t("about.company_intro.title")}</h2>
            <p className="text-muted-foreground text-justify">
              {t("about.company_intro.paragraph1")}
            </p>
            <p className="text-muted-foreground text-justify">
              {t("about.company_intro.paragraph2")}
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
        >
          <motion.div className="space-y-6 order-2 lg:order-1" variants={fadeInUp}>
            <p className="text-muted-foreground text-justify">
              {t("about.company_intro.paragraph3")}
            </p>
            <p className="text-muted-foreground text-justify">
              {t("about.company_intro.paragraph4")}
            </p>
          </motion.div>
          <motion.div className="order-1 lg:order-2" variants={fadeInUp}>
            <LazyImage 
              src="/images/pages/about/image2.webp"
              alt={t("about.company_intro.image2_alt")}
              className="rounded-2xl shadow-lg object-cover"
              width={600}
              height={400}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

AboutCompanyIntro.displayName = 'AboutCompanyIntro';

export default AboutCompanyIntro; 