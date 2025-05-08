'use client';

import { memo } from 'react';
import MainLayout from '@/layouts/MainLayout';
import PageHero from '@/components/ui/PageHero';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import NewsletterSubscription from './NewsletterSubscription';
import ContactMap from './ContactMap';

const ContactPage = memo(() => {
  return (
    <MainLayout>
      <div className="min-h-screen overflow-hidden">
        <PageHero 
          backgroundImage="/images/contact-banner.jpg"
          i18nKey={{
            title: 'contact.hero.title',
            description: 'contact.hero.description'
          }}
        />    
        
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Thông tin liên hệ */}
            <div className="lg:col-span-5">
              <ContactInfo />
              <div className="mt-10">
                <NewsletterSubscription />
              </div>
            </div>
            
            {/* Form liên hệ */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
        
        {/* Bản đồ */}
        <ContactMap />
      </div>
    </MainLayout>
  );
});

ContactPage.displayName = 'ContactPage';

export default ContactPage; 