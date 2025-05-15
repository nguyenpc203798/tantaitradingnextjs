'use client';

import { memo } from 'react';
import { useLanguage } from "@/context/LanguageContext";
import CategoryProductLayout from "../CategoryProductLayout";
import ProductDetail from "../ProductDetail";

const AnisePage = memo(() => {
  const { t } = useLanguage();
  
  const aniseImages = [
    {
      src: '/images/pages/category/StarAnise/staranise1.webp',
      alt: t("category.products.star_anise.image_alts.alt1"),
      width: 800,
      height: 600
    },
    {
      src: '/images/pages/category/StarAnise/staranise2.webp',
      alt: t("category.products.star_anise.image_alts.alt2"),
      width: 800,
      height: 600
    },
    {
      src: '/images/pages/category/StarAnise/tablestaranise.webp',
      alt: t("category.products.star_anise.image_alts.alt3"),
      width: 800,
      height: 600
    }
  ];

  const aniseContent = (
    <>
      <h2 className="text-3xl font-bold mb-4 text-center text-[#1a3d0a]">{t("category.products.star_anise.title")}</h2>
      <h3 className="text-xl font-semibold mb-8 text-center text-muted-foreground">{t("category.products.star_anise.subtitle")}</h3>
      
      <div className="space-y-6">
        <p className="text-gray-700">{t("category.products.star_anise.description.paragraph1")}</p>
        <p className="text-gray-700">{t("category.products.star_anise.description.paragraph2")}</p>
        <p className="text-gray-700">{t("category.products.star_anise.description.paragraph3")}</p>
      </div>
    </>
  );

  return (
    <CategoryProductLayout 
      title={t("nav.products_items.star_anise")}
      heroImageUrl="/images/pages/category/StarAnise/hero.jpg"
    >
      <ProductDetail 
        content={aniseContent}
        images={aniseImages}
        imageLayout="gallery"
      />
    </CategoryProductLayout>
  );
});

AnisePage.displayName = 'AnisePage';

export default AnisePage; 