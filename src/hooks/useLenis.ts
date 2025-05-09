import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

interface UseLenisOptions {
  lerp?: number;
  wheelMultiplier?: number;
  touchMultiplier?: number;
  smoothWheel?: boolean;
  syncTouch?: boolean;
  duration?: number;
  easing?: (t: number) => number;
  orientation?: 'vertical' | 'horizontal';
  gestureOrientation?: 'vertical' | 'horizontal' | 'both';
  infinite?: boolean;
}

/**
 * Custom hook để khởi tạo và quản lý Lenis smooth scrolling
 * @param options Các tùy chọn cho Lenis
 * @returns Instance của Lenis
 */
export function useLenis(options: UseLenisOptions = {}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Khởi tạo Lenis với các thông số mặc định và tùy chỉnh
    const lenis = new Lenis({
      lerp: options.lerp || 0.08, // Giá trị lerp thấp = cuộn mượt hơn, nhưng chậm hơn
      wheelMultiplier: options.wheelMultiplier || 1.2, // Tăng tốc độ cuộn bằng chuột
      touchMultiplier: options.touchMultiplier || 1.2, // Hệ số nhân cho touch
      smoothWheel: options.smoothWheel !== undefined ? options.smoothWheel : true, // Bật tính năng cuộn mượt
      syncTouch: options.syncTouch !== undefined ? options.syncTouch : true, // Đồng bộ touch
      duration: options.duration || 1.2, // Thời gian hoàn thành animation
      orientation: options.orientation || 'vertical', // Hướng cuộn
      gestureOrientation: options.gestureOrientation || 'vertical', // Hướng cử chỉ
      infinite: options.infinite || false, // Cuộn vô hạn
      easing: options.easing || ((t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))), // Hàm easing mặc định
    });

    // Lưu instance vào ref
    lenisRef.current = lenis;

    // Tạo animation loop để liên tục cập nhật Lenis
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Bắt đầu animation loop
    requestAnimationFrame(raf);

    // Cleanup khi unmount
    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [
    options.lerp, 
    options.wheelMultiplier, 
    options.touchMultiplier, 
    options.smoothWheel, 
    options.syncTouch, 
    options.duration, 
    options.orientation,
    options.gestureOrientation,
    options.infinite,
    options.easing
  ]);

  return lenisRef.current;
}

export default useLenis; 