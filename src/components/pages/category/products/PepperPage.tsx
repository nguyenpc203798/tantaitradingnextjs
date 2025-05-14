'use client';

import { memo } from 'react';
import { useLanguage } from "@/context/LanguageContext";
import CategoryProductLayout from "../CategoryProductLayout";
import ProductDetail from "../ProductDetail";

const PepperPage = memo(() => {
  const { t } = useLanguage();
  
  const pepperImages = [
    {
      src: '/images/pages/category/BlackPepper/balckpepper1.webp',
      alt: t("category.products.pepper.image_alts.alt1"),
      width: 800,
      height: 600
    },
    {
      src: '/images/pages/category/BlackPepper/balckpepper2.webp',
      alt: t("category.products.pepper.image_alts.alt2"),
      width: 800,
      height: 600
    },
    {
      src: '/images/pages/category/BlackPepper/balckpepper3.webp',
      alt: t("category.products.pepper.image_alts.alt3"),
      width: 800,
      height: 600
    },
    {
      src: '/images/pages/category/BlackPepper/tablebalckpepper1.webp',
      alt: t("category.products.pepper.image_alts.alt4"),
      width: 800,
      height: 600
    },
    {
      src: '/images/pages/category/BlackPepper/tablebalckpepper2.webp',
      alt: 'Dây chuyền sàng lọc và đóng gói tiêu xuất khẩu',
      width: 800,
      height: 600
    }
  ];

  const pepperContent = (
    <>
      <h2 className="text-3xl font-bold mb-4 text-center text-[#1a3d0a]">{t("category.products.pepper.title")}</h2>
      <h3 className="text-xl font-semibold mb-8 text-center text-muted-foreground">{t("category.products.pepper.subtitle")}</h3>
      
      <div className="space-y-6">
        <p className="text-gray-700">{t("category.products.pepper.description.paragraph1")}</p>
        <p className="text-gray-700">{t("category.products.pepper.description.paragraph2")}</p>
        <p className="text-gray-700">{t("category.products.pepper.description.paragraph3")}</p>
      </div>
    </>
  );

  return (
    <CategoryProductLayout 
      title={t("nav.products_items.pepper")}
      heroImageUrl="/images/pages/category/BlackPepper/balckpepper1.webp"
    >
      <ProductDetail 
        content={pepperContent}
        images={pepperImages}
        imageLayout="gallery"
      />
    </CategoryProductLayout>
  );
});

PepperPage.displayName = 'PepperPage';

export default PepperPage; 