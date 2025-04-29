import { memo, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import ThemeSwitcher from "@/components/header/ThemeSwitcher";
import LanguageSwitcher from "@/components/header/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

// Tách phần Navigation thành component riêng (SRP)
const Navigation = memo(({ t }: { t: (key: string) => string }) => {
  return (
    <nav className="hidden md:flex space-x-8">
      <Link href="/" className="text-foreground hover:text-primary transition-colors">
        {t("nav.home")}
      </Link>
      <Link href="/about" className="text-foreground hover:text-primary transition-colors">
        {t("nav.about")}
      </Link>
      <Link href="/services" className="text-foreground hover:text-primary transition-colors">
        {t("nav.services")}
      </Link>
      <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
        {t("nav.contact")}
      </Link>
    </nav>
  );
});

Navigation.displayName = "Navigation";

// Tách phần MobileMenu thành component riêng (SRP)
const MobileMenu = memo(({ 
  isOpen, 
  t 
}: { 
  isOpen: boolean; 
  t: (key: string) => string; 
}) => {
  if (!isOpen) return null;
  
  return (
    <div className="md:hidden bg-background border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
        <Link href="/" className="text-foreground hover:text-primary transition-colors py-2">
          {t("nav.home")}
        </Link>
        <Link href="/about" className="text-foreground hover:text-primary transition-colors py-2">
          {t("nav.about")}
        </Link>
        <Link href="/services" className="text-foreground hover:text-primary transition-colors py-2">
          {t("nav.services")}
        </Link>
        <Link href="/contact" className="text-foreground hover:text-primary transition-colors py-2">
          {t("nav.contact")}
        </Link>
        <div className="flex items-center space-x-4 pt-2">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </nav>
    </div>
  );
});

MobileMenu.displayName = "MobileMenu";

// Tách phần Desktop Actions thành component riêng (SRP)
const DesktopActions = memo(({ t }: { t: (key: string) => string }) => {
  return (
    <div className="hidden md:flex items-center space-x-2">
      <ThemeSwitcher />
      <LanguageSwitcher />
      <Button size="sm" className="ml-4">
        {t("nav.contact")}
      </Button>
    </div>
  );
});

DesktopActions.displayName = "DesktopActions";

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
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/logo/logo.png" 
                alt="Tantai Trading Logo" 
                width={120} 
                height={40} 
                className="h-16 w-auto"
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