import { memo, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

// Import các component đã tách
import Navigation from "@/components/header/Navigation";
import MobileMenu from "@/components/header/MobileMenu";
import DesktopActions from "@/components/header/DesktopActions";

// Component chính
const Header = memo(() => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // useCallback để tối ưu hóa hàm xử lý sự kiện
  const handleToggleMenu = useCallback(() => {
    setIsMenuOpen(prevState => !prevState);
  }, []);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 py-2">
        <div className="flex h-12 md:h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/logo/logo.png" 
                alt="Tantai Trading Logo" 
                width={120} 
                height={40} 
                className="h-12 md:h-16 w-auto"
              />
            </Link>
          </div>
          
          {/* Navigation ở giữa */}
          <div className="flex-grow flex justify-center">
            <Navigation t={t} />
          </div>
          
          {/* Actions */}
          <div className="flex items-center space-x-4">
            <DesktopActions t={t} />
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={handleToggleMenu}
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} t={t} />
    </header>
  );
});

Header.displayName = "Header";

export default Header; 