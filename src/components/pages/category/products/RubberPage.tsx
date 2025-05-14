'use client';

import { memo } from 'react';
import { useLanguage } from "@/context/LanguageContext";
import CategoryProductLayout from "../CategoryProductLayout";
import ProductDetail from "../ProductDetail";

const RubberPage = memo(() => {
  const { t } = useLanguage();
  
  const rubberImages = [
    {
      src: '/images/pages/category/NaturalRubber/naturalrubber1.webp',
      alt: t("category.products.rubber.image_alts.alt1"),
      width: 800,
      height: 600
    },
    {
      src: '/images/pages/category/NaturalRubber/naturalrubber2.webp',
      alt: t("category.products.rubber.image_alts.alt2"),
      width: 800,
      height: 600
    },
    {
      src: '/images/pages/category/NaturalRubber/naturalrubber3.webp',
      alt: t("category.products.rubber.image_alts.alt3"),
      width: 800,
      height: 600
    },
    {
      src: '/images/pages/category/NaturalRubber/bangnaturalrubber.webp',
      alt: t("category.products.rubber.image_alts.alt4"),
      width: 800,
      height: 600
    }
  ];
  
  const rubberContent = (
    <>
      <h2 className="text-3xl font-bold mb-4 text-center text-[#1a3d0a]">{t("category.products.rubber.title")}</h2>
      <h3 className="text-xl font-semibold mb-8 text-center text-muted-foreground">{t("category.products.rubber.subtitle")}</h3>
      
      <div className="space-y-6">
        <p className="text-gray-700">{t("category.products.rubber.description.paragraph1")}</p>
        <p className="text-gray-700">{t("category.products.rubber.description.paragraph2")}</p>
        <p className="text-gray-700">{t("category.products.rubber.description.paragraph3")}</p>
      </div>
    </>
  );

  return (
    <CategoryProductLayout 
      title={t("nav.products_items.rubber")}
      heroImageUrl="/images/pages/category/NaturalRubber/naturalrubber1.webp"
    >
      <ProductDetail 
        content={rubberContent}
        images={rubberImages}
        imageLayout="gallery"
      />
    </CategoryProductLayout>
  );
});

RubberPage.displayName = 'RubberPage';

export default RubberPage; 