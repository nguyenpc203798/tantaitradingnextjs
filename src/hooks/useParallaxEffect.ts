import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Lenis from 'lenis';

interface ParallaxOptions {
  /**
   * Tốc độ di chuyển của hiệu ứng parallax
   * Giá trị càng cao, hiệu ứng chuyển động càng nhanh
   */
  speed?: number;
  /**
   * Chiều cao phần tử background (%) so với container
   */
  backgroundHeight?: number;
  /**
   * Vị trí top ban đầu (%) của background, giá trị âm đẩy background lên trên
   */
  backgroundTop?: number;
}

/**
 * Hook để tạo hiệu ứng parallax với GSAP và Lenis
 * @param lenis Instance của Lenis scroll từ context
 * @param options Các tùy chọn cho hiệu ứng parallax
 * @returns Các ref cần được gắn vào các phần tử DOM
 */
export const useParallaxEffect = (lenis: Lenis | null, options: ParallaxOptions = {}) => {
  // Lấy tùy chọn với giá trị mặc định
  const {
    speed = 100,
    backgroundHeight = 120,
    backgroundTop = -10
  } = options;

  // Tạo refs để theo dõi các phần tử DOM
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Không tiếp tục nếu không có refs hoặc lenis
    if (!sectionRef.current || !parallaxRef.current) return;

    // Tạo biến để theo dõi vị trí scroll
    let currentScroll = 0;
    let targetScroll = 0;
    let scrollTween: gsap.core.Tween | undefined;

    // Hàm cập nhật hiệu ứng parallax
    const updateParallax = () => {
      // Làm mượt hiệu ứng scrolling với GSAP
      targetScroll = lenis?.scroll || 0;
      currentScroll = gsap.utils.interpolate(currentScroll, targetScroll, 0.1);
      
      // Tính toán vị trí y cho hiệu ứng parallax
      if (sectionRef.current && parallaxRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        
        // Kiểm tra xem section có trong viewport không
        if (sectionRect.bottom > 0 && sectionRect.top < window.innerHeight) {
          const progress = (window.innerHeight - sectionRect.top) / (window.innerHeight + sectionRect.height);
          
          // Tạo hiệu ứng di chuyển cho background
          gsap.set(parallaxRef.current, {
            y: progress * speed, // Tốc độ di chuyển background
            force3D: true,
          });
        }
      }
    };

    // Cập nhật animation frame
    const raf = () => {
      updateParallax();
      rafId = requestAnimationFrame(raf);
    };
    
    let rafId = requestAnimationFrame(raf);
    
    // Cleanup khi unmount
    return () => {
      cancelAnimationFrame(rafId);
      if (scrollTween) {
        scrollTween.kill();
      }
    };
  }, [lenis, speed, backgroundHeight, backgroundTop]);

  // Trả về các refs và CSS properties
  return {
    sectionRef,
    parallaxRef,
    parallaxStyles: {
      backgroundSize: "cover",
      backgroundPosition: "center",
      transform: "translateZ(0)", // Kích hoạt GPU acceleration
      height: `${backgroundHeight}%`,
      top: `${backgroundTop}%`,
    }
  };
};

export default useParallaxEffect; 