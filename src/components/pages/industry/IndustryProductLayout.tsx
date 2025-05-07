'use client';

import { memo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import MainLayout from "@/layouts/MainLayout";

// Animation variants
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
      staggerChildren: 0.2
    }
  }
};

interface IndustryProductLayoutProps {
  children: ReactNode;
  title: string;
  heroImageUrl: string;
}

const IndustryProductLayout = memo(({ children, title, heroImageUrl }: IndustryProductLayoutProps) => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section 
        className="relative pt-24 pb-16 md:pt-32 md:pb-24"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${heroImageUrl}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerChildren}
          >
            <motion.h1 
              className="mb-6 text-white"
              variants={fadeInUp}
            >
              {title}
            </motion.h1>
            <motion.div 
              className="w-24 h-1 bg-green mx-auto mb-8"
              variants={fadeInUp}
            />
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {children}
        </div>
      </div>
    </MainLayout>
  );
});

IndustryProductLayout.displayName = 'IndustryProductLayout';

export default IndustryProductLayout; 