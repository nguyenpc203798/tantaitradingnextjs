import { createContext, useContext, useMemo, ReactNode } from 'react';
import useLenis from '@/hooks/useLenis';
import Lenis from 'lenis';

interface LenisProviderProps {
  children: ReactNode;
  options?: {
    lerp?: number;
    wheelMultiplier?: number;
    touchMultiplier?: number;
    smoothWheel?: boolean;
    syncTouch?: boolean;
    duration?: number;
    orientation?: 'vertical' | 'horizontal';
  };
}

// Tạo context để lưu trữ instance của Lenis
const LenisContext = createContext<Lenis | null>(null);

/**
 * Provider để cung cấp instance Lenis cho toàn bộ ứng dụng
 */
export function LenisProvider({ children, options = {} }: LenisProviderProps) {
  // Sử dụng hook đã tạo ở trên để khởi tạo và quản lý Lenis
  const lenis = useLenis({
    lerp: options.lerp || 0.08,
    wheelMultiplier: options.wheelMultiplier || 1.2,
    touchMultiplier: options.touchMultiplier || 1.2,
    smoothWheel: options.smoothWheel !== undefined ? options.smoothWheel : true,
    syncTouch: options.syncTouch !== undefined ? options.syncTouch : true,
    duration: options.duration || 1.2,
    orientation: options.orientation || 'vertical',
  });

  // Dùng useMemo để tối ưu hiệu suất
  const contextValue = useMemo(() => lenis, [lenis]);

  return (
    <LenisContext.Provider value={contextValue}>
      {children}
    </LenisContext.Provider>
  );
}

/**
 * Hook để sử dụng Lenis từ bất kỳ component nào trong ứng dụng
 */
export function useLenisInstance() {
  const context = useContext(LenisContext);
  
  if (context === undefined) {
    throw new Error('useLenisInstance must be used within a LenisProvider');
  }
  
  return context;
}

export default LenisProvider; 