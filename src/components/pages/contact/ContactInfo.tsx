'use client';

import { motion } from 'framer-motion';
import { memo } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { MapPinIcon, EnvelopeIcon, PhoneIcon, ClockIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline';
import { fadeInUp , staggerChildren } from '@/lib/animations';

const ContactInfo = memo(() => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerChildren}
      className="space-y-8"
    >
      <motion.div variants={fadeInUp}>
        <h2 className="text-3xl font-bold text-[#1a3d0a] dark:text-green-400 mb-6">{t('contact.info.title')}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{t('contact.info.description')}</p>
      </motion.div>

      <div className="space-y-6">
        {/* Trụ sở chính */}
        <motion.div 
          variants={fadeInUp}
          className="flex items-start gap-4"
        >
          <div className="mt-1 bg-[#e7ece5] dark:bg-neutral-800 p-3 rounded-full">
            <MapPinIcon className="h-6 w-6 text-[#1a3d0a] dark:text-green-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#1a3d0a] dark:text-green-400 mb-1">{t('contact.info.head_office')}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t('footer.contact_info.head_office')}
            </p>
          </div>
        </motion.div>

        {/* Email */}
        <motion.div 
          variants={fadeInUp}
          className="flex items-start gap-4"
        >
          <div className="mt-1 bg-[#e7ece5] dark:bg-neutral-800 p-3 rounded-full">
            <EnvelopeIcon className="h-6 w-6 text-[#1a3d0a] dark:text-green-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#1a3d0a] dark:text-green-400 mb-1">{t('contact.info.email')}</h3>
            <a href="mailto:info@tantaitrading.com" className="text-gray-600 dark:text-gray-300 hover:text-[#1a3d0a] dark:hover:text-green-400 transition-colors duration-300">
              {t('footer.contact_info.email')}
            </a>
          </div>
        </motion.div>

        {/* Điện thoại */}
        <motion.div 
          variants={fadeInUp}
          className="flex items-start gap-4"
        >
          <div className="mt-1 bg-[#e7ece5] dark:bg-neutral-800 p-3 rounded-full">
            <PhoneIcon className="h-6 w-6 text-[#1a3d0a] dark:text-green-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#1a3d0a] dark:text-green-400 mb-1">{t('contact.info.phone')}</h3>
            <a href="tel:+84899565868" className="text-gray-600 dark:text-gray-300 hover:text-[#1a3d0a] dark:hover:text-green-400 transition-colors duration-300">
              {t('footer.contact_info.phone')}
            </a>
          </div>
        </motion.div>

        {/* Thời gian hỗ trợ */}
        <motion.div 
          variants={fadeInUp}
          className="flex items-start gap-4"
        >
          <div className="mt-1 bg-[#e7ece5] dark:bg-neutral-800 p-3 rounded-full">
            <ClockIcon className="h-6 w-6 text-[#1a3d0a] dark:text-green-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#1a3d0a] dark:text-green-400 mb-1">{t('contact.info.support_time')}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t('footer.contact_info.response')}
            </p>
          </div>
        </motion.div>

        {/* Văn phòng đại diện */}
        <motion.div 
          variants={fadeInUp}
          className="flex items-start gap-4"
        >
          <div className="mt-1 bg-[#e7ece5] dark:bg-neutral-800 p-3 rounded-full">
            <BuildingOffice2Icon className="h-6 w-6 text-[#1a3d0a] dark:text-green-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#1a3d0a] dark:text-green-400 mb-1">{t('footer.representative_office.title')}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t('footer.representative_office.content')}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
});

ContactInfo.displayName = 'ContactInfo';

export default ContactInfo; 