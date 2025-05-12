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

const AboutVisionMission = memo(() => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-backgroundprimary">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
        >
          <motion.h2 
            className="text-center"
            variants={fadeInUp}
          >
            {t("about.vision_mission.title")}
          </motion.h2>
          
          <motion.div className="space-y-12" variants={staggerChildren}>
            <motion.div 
              className="bg-card rounded-xl shadow-sm p-8"
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-semibold mb-4">{t("about.vision_mission.vision_title")}</h3>
              <p>
                {t("about.vision_mission.vision_content")}
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-card rounded-xl shadow-sm p-8"
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-semibold mb-4">{t("about.vision_mission.mission_title")}</h3>
              <ul className="space-y-3 list-disc pl-5">
                <li>{t("about.vision_mission.mission_items.item1")}</li>
                <li>{t("about.vision_mission.mission_items.item2")}</li>
                <li>{t("about.vision_mission.mission_items.item3")}</li>
                <li>{t("about.vision_mission.mission_items.item4")}</li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

AboutVisionMission.displayName = 'AboutVisionMission';

export default AboutVisionMission; 