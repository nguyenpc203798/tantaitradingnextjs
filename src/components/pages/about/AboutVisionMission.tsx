'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from "@/context/LanguageContext";
import { useLenisInstance } from '@/context/LenisContext';
import useParallaxEffect from '@/hooks/useParallaxEffect';
import { fadeInUp, staggerChildren } from '@/lib/animations';

const AboutVisionMission = memo(() => {
  const { t } = useLanguage();
  const lenis = useLenisInstance();
  
  // Sử dụng hook useParallaxEffect để tạo hiệu ứng parallax
  const { sectionRef, parallaxRef, parallaxStyles } = useParallaxEffect(lenis, {
    speed: 500, // Tốc độ hiệu ứng parallax
    backgroundHeight: 120, // Chiều cao của background
    backgroundTop: -50, // Vị trí top ban đầu
  });

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 overflow-hidden"
    >
      {/* Background parallax layer */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 w-full z-0 will-change-transform"
        style={{
          backgroundImage: "url('/images/gioithieu/VisionMission/bg.jpg')",
          ...parallaxStyles
        }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
        >
          <motion.h2 
            className="text-white text-center text-shadow"
            variants={fadeInUp}
          >
            {t("about.vision_mission.title")}
          </motion.h2>
          
          <motion.div className="space-y-12" variants={staggerChildren}>
            <motion.div 
              className="blur-bg rounded-[2rem] shadow-sm p-8"
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-semibold mb-4">{t("about.vision_mission.vision_title")}</h3>
              <p className='text-foreground'>
                {t("about.vision_mission.vision_content")}
              </p>
            </motion.div>
            
            <motion.div 
              className="blur-bg rounded-[2rem] shadow-sm p-8"
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-semibold mb-4">{t("about.vision_mission.mission_title")}</h3>
              <ul className="text-foreground space-y-3 list-disc pl-5">
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