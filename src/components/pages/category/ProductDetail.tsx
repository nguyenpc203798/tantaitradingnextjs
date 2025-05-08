'use client';

import { memo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import LazyImage from "@/components/LazyImage";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0,
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

interface ProductDetailProps {
  content: ReactNode;
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
  imageLayout?: 'grid' | 'carousel' | 'gallery';
}

const ProductDetail = memo(({ content, images, imageLayout = 'grid' }: ProductDetailProps) => {
  return (
    <div>
      {/* Product Description */}
      <motion.div 
        className="mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerChildren}
      >
        <motion.div
          className="prose prose-lg mx-auto text-justify"
          variants={fadeInUp}
        >
          {content}
        </motion.div>
      </motion.div>

      {/* Product Images */}
      {imageLayout === 'grid' && (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          {images.map((image, index) => (
            <motion.div 
              key={index}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
              variants={fadeInUp}
            >
              <LazyImage
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </motion.div>
          ))}
        </motion.div>
      )}

      {imageLayout === 'gallery' && (
        <motion.div
          className="mt-12 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          {images.map((image, index) => {
            // Alternate layout for even/odd images
            const isEven = index % 2 === 0;
            
            return (
              <motion.div 
                key={index}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
                variants={isEven ? fadeInLeft : fadeInRight}
              >
                <div className="md:w-1/2">
                  <LazyImage
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-xl font-bold mb-3">{image.alt}</h3>
                  <p className="text-muted-foreground">
                    Tantai Trading cung cấp sản phẩm chất lượng cao, đáp ứng tiêu chuẩn quốc tế.
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </div>
  );
});

ProductDetail.displayName = 'ProductDetail';

export default ProductDetail; 