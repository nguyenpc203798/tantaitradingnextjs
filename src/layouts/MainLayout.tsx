import React, { useEffect, useState } from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { useTheme } from "@/context/ThemeContext";

interface MainLayoutProps {
  children: React.ReactNode;
}

// Sử dụng function component
function MainLayout({ children }: MainLayoutProps) {
  // Client-side rendering và xử lý hydration mismatch
  const [isClient, setIsClient] = useState(false);
  
  // Sử dụng useEffect để xác định khi rendered trên client
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Lấy theme từ context
  const { theme } = useTheme();

  // Logic className cho theme
  const themeClass = isClient && theme === "dark" ? "dark" : "";

  return (
    <div className={`min-h-screen flex flex-col ${themeClass}`}>
      <Header />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
