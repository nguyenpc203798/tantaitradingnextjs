'use client';

import { motion } from 'framer-motion';
import { memo } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const ContactMap = memo(() => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 mb-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-[#1a3d0a] mb-4">{t('contact.map.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">{t('contact.map.description')}</p>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInUp}
        className="w-full h-[400px] md:h-[500px]"
      >
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2025.4565479789883!2d106.70499730756588!3d10.78164289942857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4ec96fae79%3A0xda53c6fa6c52539a!2sLim%20Tower!5e0!3m2!1svi!2s!4v1741164233251!5m2!1svi!2s"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title={t('contact.map.title')}
          className="w-full h-full"
        />
      </motion.div>
    </section>
  );
});

ContactMap.displayName = 'ContactMap';

export default ContactMap; 