'use client';

import { motion } from 'framer-motion';
import { memo, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { fadeInUp } from '@/lib/animations';

const NewsletterSubscription = memo(() => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError('');
  };

  const validateEmail = (email: string): boolean => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setError(t('contact.newsletter.errors.email_required'));
      return;
    }

    if (!validateEmail(email)) {
      setError(t('contact.newsletter.errors.email_invalid'));
      return;
    }

    setIsSubmitting(true);

    try {
      // Giả lập gửi form, thay thế bằng API call thực tế sau
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Thành công
      setSuccess(true);
      setEmail('');

      // Reset thông báo thành công sau 5 giây
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch {
      setError(t('contact.newsletter.errors.submit_failed'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      className="bg-[#e7ece5] dark:bg-[#1c2033] rounded-[2rem] p-6"
    >
      <h3 className="text-2xl font-bold text-[#1a3d0a] dark:text-green-400 mb-4">{t('contact.newsletter.title')}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-6">{t('contact.newsletter.description')}</p>

      {success && (
        <div className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 text-green-800 dark:text-green-300 rounded-md p-3 mb-4">
          {t('contact.newsletter.success_message')}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={handleChange}
            placeholder={t('contact.newsletter.email_placeholder')}
            className={`w-full px-4 py-3 rounded-[2rem] border ${
              error ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-neutral-700'
            } bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1a3d0a] dark:focus:ring-green-400 focus:border-transparent`}
          />
          {error && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 bg-[#1a3d0a] dark:bg-green-600 text-white dark:text-white rounded-[2rem] font-medium hover:bg-[#2c5b18] dark:hover:bg-green-700 transition-colors duration-300 flex items-center justify-center ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {t('contact.newsletter.submitting')}
            </>
          ) : (
            t('contact.newsletter.subscribe')
          )}
        </button>
      </form>
    </motion.div>
  );
});

NewsletterSubscription.displayName = 'NewsletterSubscription';

export default NewsletterSubscription; 