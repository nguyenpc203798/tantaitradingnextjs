'use client';

import { useState, useEffect } from 'react';
import { useLenisInstance } from '@/context/LenisContext';
import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';

interface ScrollToTopProps {
  threshold?: number;
  bottom?: number;
  right?: number;
  className?: string;
}

const ScrollToTop = ({
  threshold = 400,
  bottom = 24,
  right = 24,
  className = '',
}: ScrollToTopProps) => {
  const [show, setShow] = useState(false);
  const lenis = useLenisInstance();

  useEffect(() => {
    const checkScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setShow(scrollY > threshold);
    };

    // Thêm event listener
    window.addEventListener('scroll', checkScroll);
    
    // Kiểm tra trạng thái ban đầu
    checkScroll();
    
    // Cleanup
    return () => window.removeEventListener('scroll', checkScroll);
  }, [threshold]);

  const handleScrollToTop = () => {
    if (lenis) {
      // Sử dụng Lenis để cuộn mượt lên đầu trang
      lenis.scrollTo(0, {
        duration: 1.2, // Thời gian animation
        easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // Easing function
      });
    } else {
      // Fallback nếu Lenis không khả dụng
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!show) return null;

  return (
    <Button
      variant="secondary"
      size="icon"
      className={`fixed z-50 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-2px] ${className}`}
      style={{ bottom: `${bottom}px`, right: `${right}px` }}
      onClick={handleScrollToTop}
      aria-label="Cuộn lên đầu trang"
    >
      <ChevronUp className="h-5 w-5" />
    </Button>
  );
};

export default ScrollToTop; 