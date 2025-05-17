'use client';

import { motion } from 'framer-motion';
import { memo, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

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
      staggerChildren: 0.1
    }
  }
};

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactForm = memo(() => {
  const { t } = useLanguage();
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formValues.name.trim()) {
      newErrors.name = t('contact.form.errors.name_required');
      isValid = false;
    }

    if (!formValues.email.trim()) {
      newErrors.email = t('contact.form.errors.email_required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = t('contact.form.errors.email_invalid');
      isValid = false;
    }

    if (!formValues.subject.trim()) {
      newErrors.subject = t('contact.form.errors.subject_required');
      isValid = false;
    }

    if (!formValues.message.trim()) {
      newErrors.message = t('contact.form.errors.message_required');
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Giả lập gửi form, thay thế bằng API call thực tế sau
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Thành công
      setSubmitSuccess(true);
      setFormValues({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Reset thông báo thành công sau 5 giây
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch {
      setSubmitError(t('contact.form.errors.submit_failed'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerChildren}
      className="bg-white dark:bg-[#1c2033] rounded-[2rem] shadow-lg p-8"
    >
      <motion.div variants={fadeInUp} className="mb-8">
        <h2 className="text-3xl font-bold text-[#1a3d0a] dark:text-green-400 mb-4">{t('contact.form.title')}</h2>
        <p className="text-gray-600 dark:text-gray-300">{t('contact.form.description')}</p>
      </motion.div>

      {submitSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-md p-4 mb-6 text-green-800 dark:text-green-300"
        >
          {t('contact.form.success_message')}
        </motion.div>
      )}

      {submitError && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-700 rounded-md p-4 mb-6 text-red-800 dark:text-red-300"
        >
          {submitError}
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Họ tên */}
        <motion.div variants={fadeInUp}>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
            {t('contact.form.name')} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.name ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-neutral-700'
            } bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1a3d0a] dark:focus:ring-green-400 focus:border-transparent`}
            placeholder={t('contact.form.name_placeholder')}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
          )}
        </motion.div>

        {/* Email */}
        <motion.div variants={fadeInUp}>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
            {t('contact.form.email')} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.email ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-neutral-700'
            } bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1a3d0a] dark:focus:ring-green-400 focus:border-transparent`}
            placeholder={t('contact.form.email_placeholder')}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
          )}
        </motion.div>

        {/* Tiêu đề */}
        <motion.div variants={fadeInUp}>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
            {t('contact.form.subject')} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formValues.subject}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.subject ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-neutral-700'
            } bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1a3d0a] dark:focus:ring-green-400 focus:border-transparent`}
            placeholder={t('contact.form.subject_placeholder')}
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subject}</p>
          )}
        </motion.div>

        {/* Nội dung tin nhắn */}
        <motion.div variants={fadeInUp}>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
            {t('contact.form.message')} <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formValues.message}
            onChange={handleChange}
            rows={5}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.message ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-neutral-700'
            } bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1a3d0a] dark:focus:ring-green-400 focus:border-transparent resize-none`}
            placeholder={t('contact.form.message_placeholder')}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
          )}
        </motion.div>

        {/* Nút gửi */}
        <motion.div variants={fadeInUp}>
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
                {t('contact.form.submitting')}
              </>
            ) : (
              t('contact.form.submit')
            )}
          </button>
        </motion.div>
      </form>
    </motion.div>
  );
});

ContactForm.displayName = 'ContactForm';

export default ContactForm; 