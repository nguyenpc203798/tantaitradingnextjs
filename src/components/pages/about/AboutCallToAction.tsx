'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";

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

const AboutCallToAction = memo(() => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
        >
          <motion.h2 
            className="text-3xl font-bold mb-4"
            variants={fadeInUp}
          >
            {t("about.cta.title")}
          </motion.h2>
          <motion.p 
            className="text-lg opacity-90 max-w-xl mx-auto mb-8"
            variants={fadeInUp}
          >
            {t("about.cta.description")}
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button size="lg" variant="green" className="border-2">
              {t("about.cta.button")}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

AboutCallToAction.displayName = 'AboutCallToAction';

export default AboutCallToAction; 