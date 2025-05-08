'use client';

import { memo, ReactNode } from 'react';
import MainLayout from "@/layouts/MainLayout";
import PageHero from '@/components/ui/PageHero';

interface CategoryProductLayoutProps {
  children: ReactNode;
  title: string;
  heroImageUrl: string;
}

const CategoryProductLayout = memo(({ children, title, heroImageUrl }: CategoryProductLayoutProps) => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <PageHero 
        title={title}
        backgroundImage={heroImageUrl}
        height="h-[40vh] md:h-[45vh]"
        darkOverlay={false}
      />

      {/* Content Section */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {children}
        </div>
      </div>
    </MainLayout>
  );
});

CategoryProductLayout.displayName = 'CategoryProductLayout';

export default CategoryProductLayout; 