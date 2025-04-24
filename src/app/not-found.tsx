'use client';

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const { language } = useLanguage();
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-32 flex flex-col items-center justify-center text-center">
        <h1 className="text-9xl font-bold text-primary mb-6">404</h1>
        <h2 className="text-3xl font-semibold mb-4">
          {language === "en" ? "Page Not Found" : "Không Tìm Thấy Trang"}
        </h2>
        <p className="text-muted-foreground text-lg max-w-lg mb-8">
          {language === "en" 
            ? "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable." 
            : "Trang bạn đang tìm kiếm có thể đã bị xóa, đổi tên hoặc tạm thời không khả dụng."}
        </p>
        <Button asChild size="lg">
          <Link href="/">
            {language === "en" ? "Return to Home" : "Quay Về Trang Chủ"}
          </Link>
        </Button>
      </div>
    </MainLayout>
  );
} 