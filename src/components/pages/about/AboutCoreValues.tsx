'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from "@/context/LanguageContext";
import { fadeInUp , staggerChildren, staggerGrid } from '@/lib/animations';

interface CoreValue {
  title: string;
  description: string;
  icon?: string;
  key: string;
}

const AboutCoreValues = memo(() => {
  const { t } = useLanguage();

  const coreValues: CoreValue[] = [
    {
      key: "quality",
      title: t("about.core_values.values.quality.title"),
      description: t("about.core_values.values.quality.description"),
      icon: "shield-check"
    },
    {
      key: "partnership",
      title: t("about.core_values.values.partnership.title"),
      description: t("about.core_values.values.partnership.description"),
      icon: "handshake"
    },
    {
      key: "innovation",
      title: t("about.core_values.values.innovation.title"),
      description: t("about.core_values.values.innovation.description"),
      icon: "lightbulb"
    },
    {
      key: "responsibility",
      title: t("about.core_values.values.responsibility.title"),
      description: t("about.core_values.values.responsibility.description"),
      icon: "users"
    }
  ];

  return (
    <section className="py-20 bg-backgroundprimary">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
        >
          <motion.h2 
            variants={fadeInUp}
          >
            {t("about.core_values.title")}
          </motion.h2>
          <motion.p 
            className="text-center text-muted-foreground max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            {t("about.core_values.description")}
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerGrid}
        >
          {coreValues.map((value) => (
            <motion.div 
              key={value.key} 
              className="bg-card border border-border rounded-[2rem] p-6 shadow-sm hover:shadow-md transition-shadow"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-muted-foreground text-justify">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

AboutCoreValues.displayName = 'AboutCoreValues';

export default AboutCoreValues; 