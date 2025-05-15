'use client';

import { memo } from 'react';
import { useLanguage } from "@/context/LanguageContext";
import CategoryProductLayout from "../CategoryProductLayout";
import ProductDetail from "../ProductDetail";

const CinnamonPage = memo(() => {
  const { t } = useLanguage();
  
  const cinnamonImages = [
    {
      src: '/images/pages/category/Cinnamon/cinnamon1.webp',
      alt: t("category.products.cinnamon.image_alts.alt1"),
      width: 800,
      height: 600
    },
    {
      src: '/images/pages/category/Cinnamon/cinnamon2.webp',
      alt: t("category.products.cinnamon.image_alts.alt2"),
      width: 800,
      height: 600
    },
    {
      src: '/images/pages/category/Cinnamon/tablecinnamon.webp',
      alt: t("category.products.cinnamon.image_alts.alt3"),
      width: 800,
      height: 600
    }
  ];

  const cinnamonContent = (
    <>
      <h2 className="text-3xl font-bold mb-4 text-center text-[#1a3d0a]">{t("category.products.cinnamon.title")}</h2>
      <h3 className="text-xl font-semibold mb-8 text-center text-muted-foreground">{t("category.products.cinnamon.subtitle")}</h3>
      
      <div className="space-y-6">
        <p className="text-gray-700">{t("category.products.cinnamon.description.paragraph1")}</p>
        <p className="text-gray-700">{t("category.products.cinnamon.description.paragraph2")}</p>
        <p className="text-gray-700">{t("category.products.cinnamon.description.paragraph3")}</p>
      </div>
    </>
  );

  return (
    <CategoryProductLayout 
      title={t("nav.products_items.cinnamon")}
      heroImageUrl="/images/pages/category/Cinnamon/hero.jpg"
    >
      <ProductDetail 
        content={cinnamonContent}
        images={cinnamonImages}
        imageLayout="gallery"
      />
    </CategoryProductLayout>
  );
});

CinnamonPage.displayName = 'CinnamonPage';

export default CinnamonPage; 