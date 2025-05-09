'use client';

import React from 'react';
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LenisProvider } from "@/context/LenisContext";

// Khởi tạo QueryClient
const queryClient = new QueryClient();

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LanguageProvider>
          <TooltipProvider>
            <LenisProvider 
              options={{
                lerp: 0.08, // Giá trị thấp hơn cho hiệu ứng mượt mà hơn (0.01-0.1)
                wheelMultiplier: 1.2, // Điều chỉnh tốc độ cuộn bằng chuột
                touchMultiplier: 1.3, // Điều chỉnh tốc độ cuộn trên thiết bị cảm ứng
                smoothWheel: true, // Kích hoạt cuộn mượt
                syncTouch: true, // Đồng bộ hóa cử chỉ chạm
                duration: 1.2, // Thời lượng hoàn thành animation cuộn (giây)
              }}
            >
              {children}
            </LenisProvider>
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Providers; 