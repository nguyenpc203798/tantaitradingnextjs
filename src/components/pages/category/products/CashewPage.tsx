'use client';

import { memo } from 'react';
import { useLanguage } from "@/context/LanguageContext";
import CategoryProductLayout from "../CategoryProductLayout";
import ProductDetail from "../ProductDetail";

const CashewPage = memo(() => {
  const { t } = useLanguage();
  
  const cashewImages = [
    {
      src: '/images/pages/category/CashewNuts/ww320.webp',
      alt: t("category.products.cashew.image_alts.alt1"),
      width: 800,
      height: 600
    },
    {
      src: '/images/pages/category/CashewNuts/ww320.webp',
      alt: t("category.products.cashew.image_alts.alt2"),
      width: 800,
      height: 600
    },
    {
      src: '/images/pages/category/CashewNuts/ww320.webp',
      alt: t("category.products.cashew.image_alts.alt3"),
      width: 800,
      height: 600
    },
    {
      src: '/images/pages/category/CashewNuts/ww320.webp',
      alt: t("category.products.cashew.image_alts.alt4"),
      width: 800,
      height: 600
    }
  ];
  
  const cashewContent = (
    <>
      <h2 className="text-3xl font-bold mb-4 text-center text-[#1a3d0a]">{t("category.products.cashew.title")}</h2>
      <h3 className="text-xl font-semibold mb-8 text-center text-muted-foreground">{t("category.products.cashew.subtitle")}</h3>
      
      <div className="space-y-6">
        <p className="text-gray-700">{t("category.products.cashew.description.paragraph1")}</p>
        <p className="text-gray-700">{t("category.products.cashew.description.paragraph2")}</p>
        <p className="text-gray-700">{t("category.products.cashew.description.paragraph3")}</p>
      </div>
    </>
  );

  return (
    <CategoryProductLayout 
      title={t("nav.products_items.cashew")}
      heroImageUrl="/images/pages/category/CashewNuts/hero.jpg"
    >
      <ProductDetail 
        content={cashewContent}
        images={cashewImages}
        imageLayout="gallery"
      />
    </CategoryProductLayout>
  );
});

CashewPage.displayName = 'CashewPage';

export default CashewPage; 