'use client';

import { memo, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from "@/context/LanguageContext";
import { fadeInUp, staggerChildren } from '@/lib/animations';

const AboutVisionMission = memo(() => {
  const { t } = useLanguage();
  
  // Sử dụng framer-motion để tạo hiệu ứng parallax
  const sectionRef = useRef<HTMLElement>(null);
  
  // Sử dụng useScroll và useTransform từ framer-motion để tạo hiệu ứng parallax tốt hơn
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Hiệu ứng di chuyển y khi scroll
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 overflow-hidden"
    >
      {/* Background với Next.js Image và parallax từ Framer Motion */}
      <div className="absolute inset-0 w-full z-0 h-[130%] -top-[50%]">
        <motion.div style={{ y }} className="w-full h-full">
          <Image 
            src="/images/gioithieu/VisionMission/bg.jpg"
            alt="Vision and Mission Background"
            fill
            sizes="100vw"
            className="object-cover"
            quality={90}
            priority={false}
          />
        </motion.div>
      </div>
      
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