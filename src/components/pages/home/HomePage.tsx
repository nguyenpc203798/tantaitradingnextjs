'use client';

import MainLayout from "@/layouts/MainLayout";
import HomeSlider from "@/components/pages/home/HomeSlider";
import AboutSection from "@/components/pages/home/AboutSection";
import ProductsSection from "@/components/pages/home/ProductsSection";
import WarehouseSection from "@/components/pages/home/WarehouseSection";
import NewsSection from "@/components/pages/home/NewsSection";

const HomePage = () => {
  return (
    <MainLayout>
      {/* Slider Section */}
      <HomeSlider />

      {/* About Section */}
      <AboutSection />

      {/* Products Section */}
      <ProductsSection />

      {/* Warehouse Section */}
      <WarehouseSection />

      {/* News Section */}
      <NewsSection />
    </MainLayout>
  );
};

export default HomePage; 