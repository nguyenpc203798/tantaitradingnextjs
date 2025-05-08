'use client';

import { memo } from 'react';
import PageHero from '@/components/ui/PageHero';
import NewsList from './NewsList';
import NewsCategories from './NewsCategories';
import FeaturedNews from './FeaturedNews';
import MainLayout from '@/layouts/MainLayout';

const NewsPage = memo(() => {
  return (
    <MainLayout>
      <div className="min-h-screen overflow-hidden">
        <PageHero 
          backgroundImage="/images/news-banner.jpg"
          i18nKey={{
            title: 'news.title',
            description: 'news.description'
          }}
        />
        <FeaturedNews />
        <div className="container mx-auto px-4 py-10 flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-3/4">
            <NewsList />
          </div>
          <div className="w-full lg:w-1/4">
            <NewsCategories />
          </div>
        </div>
      </div>
    </MainLayout>
  );
});

NewsPage.displayName = 'NewsPage';

export default NewsPage; 