'use client';

import { memo } from 'react';
import { useLanguage } from "@/context/LanguageContext";
import CategoryProductLayout from "../CategoryProductLayout";
import ProductDetail from "../ProductDetail";

const TapiocaPage = memo(() => {
  const { t } = useLanguage();
  
  const tapiocaImages = [
    {
      src: '/images/pages/category/TapiocaStarch/topiocastartch1.webp',
      alt: t("category.products.tapioca.image_alts.alt1"),
      width: 800,
      height: 600
    },  
    {
      src: '/images/pages/category/TapiocaStarch/topiocastartch2.webp',
      alt: t("category.products.tapioca.image_alts.alt2"),
      width: 800,
      height: 600
    },
    {
      src: '/images/pages/category/TapiocaStarch/topiocastartch3.webp',
      alt: t("category.products.tapioca.image_alts.alt3"),
      width: 800,
      height: 600
    },
    {
      src: '/images/pages/category/TapiocaStarch/tabletopiocastartch.webp',
      alt: t("category.products.tapioca.image_alts.alt4"),
      width: 800,
      height: 600
    }
  ];
  
  const tapiocaContent = (
    <>
      <h2 className="text-3xl font-bold mb-4 text-center text-[#1a3d0a]">{t("category.products.tapioca.title")}</h2>
      <h3 className="text-xl font-semibold mb-8 text-center text-muted-foreground">{t("category.products.tapioca.subtitle")}</h3>
      
      <div className="space-y-6">
        <p className="text-gray-700">{t("category.products.tapioca.description.paragraph1")}</p>
        <p className="text-gray-700">{t("category.products.tapioca.description.paragraph2")}</p>
        <p className="text-gray-700">{t("category.products.tapioca.description.paragraph3")}</p>
      </div>
    </>
  );

  return (
    <CategoryProductLayout 
      title={t("nav.products_items.tapioca")}
      heroImageUrl="/images/pages/category/TapiocaStarch/hero.jpg"
    >
      <ProductDetail 
        content={tapiocaContent}
        images={tapiocaImages}
        imageLayout="gallery"
      />
    </CategoryProductLayout>
  );
});

TapiocaPage.displayName = 'TapiocaPage';

export default TapiocaPage; 