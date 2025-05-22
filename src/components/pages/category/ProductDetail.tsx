'use client';

import { memo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import LazyImage from "@/components/LazyImage";
import { fadeInUp, fadeInLeft, fadeInRight, staggerChildren } from '@/lib/animations';


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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          {images.map((image, index) => (
            <motion.div 
              key={index}
              className="group rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              variants={fadeInUp}
            >
              <div>
                <LazyImage
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="w-full h-auto object-cover aspect-[4/3] hover:scale-110 transition-transform duration-700"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {imageLayout === 'gallery' && (
        <motion.div
          className="mt-12 space-y-16"
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
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center bg-[#f8f9f7] dark:bg-[#1c2033] p-6 md:p-10 rounded-[2rem] shadow-sm hover:shadow-md transition-all duration-300`}
                variants={isEven ? fadeInLeft : fadeInRight}
              >
                <div className="md:w-1/2">
                  <div className="group">
                    <LazyImage
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      className="object-contain w-full aspect-[4/2] group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>  
                <div className="md:w-1/2">
                  <h3 className="text-xl font-bold mb-4 text-[#1a3d0a] dark:text-[#7fb766]">{image.alt}</h3>
                  <div className="h-1 w-24 bg-[#1a3d0a]/30 dark:bg-[#7fb766]/30 rounded mb-6"></div>
                  <p>
                    Tantai Trading cung cấp sản phẩm chất lượng cao, đáp ứng tiêu chuẩn quốc tế. Chúng tôi tự hào về quy trình sản xuất chuyên nghiệp, đảm bảo chất lượng ổn định và giá trị dinh dưỡng cao trong mỗi sản phẩm.
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