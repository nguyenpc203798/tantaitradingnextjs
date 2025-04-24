import React, { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  width = 800,
  height = 600,
  className,
  priority = false,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSrc, setCurrentSrc] = useState(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI2YxZjVmOSIvPjwvc3ZnPg=="
  );

  useEffect(() => {
    // Chỉ tải ảnh nếu không phải priority
    if (!priority) {
      const img = document.createElement('img');
      img.src = src;
      img.onload = () => {
        setCurrentSrc(src);
        setIsLoading(false);
      };
    } else {
      setCurrentSrc(src);
      setIsLoading(false);
    }
  }, [src, priority]);

  return (
    <div className="relative overflow-hidden">
      <Image
        src={priority ? src : currentSrc}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          "duration-700 ease-in-out",
          isLoading
            ? "grayscale blur-sm scale-105"
            : "grayscale-0 blur-0 scale-100",
          className
        )}
        priority={priority}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
};

export default LazyImage; 