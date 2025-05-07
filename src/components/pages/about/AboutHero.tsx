'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from "@/context/LanguageContext";

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

const AboutHero = memo(() => {
  const { t } = useLanguage();

  return (
    <section className="pt-20 pb-16 md:py-32 bg-muted">
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
            {t("about.hero.title")}
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-8"
            variants={fadeInUp}
          >
            {t("about.hero.description")}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
});

AboutHero.displayName = 'AboutHero';

export default AboutHero; 