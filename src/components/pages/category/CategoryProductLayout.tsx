'use client';

import { memo, ReactNode } from 'react';
import MainLayout from "@/layouts/MainLayout";
import PageHero from '@/components/ui/PageHero';
import { motion } from 'framer-motion';

interface CategoryProductLayoutProps {
  children: ReactNode;
  title: string;
  heroImageUrl: string;
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' }
  }
};

const CategoryProductLayout = memo(({ children, title, heroImageUrl }: CategoryProductLayoutProps) => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <PageHero 
          title={title}
          backgroundImage={heroImageUrl}
        />
      </motion.div>

      {/* Content Section */}
      <motion.div 
        className="py-16 md:py-24"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          {children}
        </div>
      </motion.div>
    </MainLayout>
  );
});

CategoryProductLayout.displayName = 'CategoryProductLayout';

export default CategoryProductLayout; 