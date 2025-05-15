'use client';

import { memo } from 'react';
import { useLanguage } from "@/context/LanguageContext";
import CategoryProductLayout from "../CategoryProductLayout";
import ProductDetail from "../ProductDetail";

const CoffeePage = memo(() => {
  const { t } = useLanguage();
  
  const coffeeImages = [
    {
      src: '/images/pages/category/Coffee/coffee1.png',
      alt: t("category.products.coffee.image_alts.alt1"),
      width: 800,
      height: 600
    },
    {
      src: '/images/pages/category/Coffee/coffee2.png',
      alt: t("category.products.coffee.image_alts.alt2"),
      width: 800,
      height: 600
    },
    {
      src: '/images/pages/category/Coffee/coffee3.png',
      alt: t("category.products.coffee.image_alts.alt3"),
      width: 800,
      height: 600
    },
    {
      src: '/images/pages/category/Coffee/bangcoffee.webp',
      alt: t("category.products.coffee.image_alts.alt4"),
      width: 800,
      height: 600
    }
  ];
  
  const coffeeContent = (
    <>
      <h2 className="text-3xl font-bold mb-4 text-center text-[#1a3d0a]">{t("category.products.coffee.title")}</h2>
      <h3 className="text-xl font-semibold mb-8 text-center text-muted-foreground">{t("category.products.coffee.subtitle")}</h3>
      
      <div className="space-y-6">
        <p className="text-gray-700">{t("category.products.coffee.description.paragraph1")}</p>
        <p className="text-gray-700">{t("category.products.coffee.description.paragraph2")}</p>
        <p className="text-gray-700">{t("category.products.coffee.description.paragraph3")}</p>
      </div>
    </>
  );

  return (
    <CategoryProductLayout 
      title={t("nav.products_items.coffee")}
      heroImageUrl="/images/pages/category/Coffee/hero.jpg"
    >
      <ProductDetail 
        content={coffeeContent}
        images={coffeeImages}
        imageLayout="gallery"
      />
    </CategoryProductLayout>
  );
});

CoffeePage.displayName = 'CoffeePage';

export default CoffeePage; 