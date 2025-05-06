import { memo, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import ThemeSwitcher from "@/components/header/ThemeSwitcher";
import LanguageSwitcher from "@/components/header/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu } from "lucide-react";
import {
  HoverDropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Tách phần Navigation thành component riêng (SRP)
const Navigation = memo(({ t }: { t: (key: string) => string }) => {
  return (
    <nav className="hidden md:flex space-x-8">
      <Link href="/" className="font-semibold text-foreground hover:text-green-800 transition-colors">
        {t("nav.home")}
      </Link>
      <Link href="/about" className="font-semibold text-foreground hover:text-green-800 transition-colors">
        {t("nav.about")}
      </Link>
      
      <HoverDropdownMenu>
        <DropdownMenuTrigger className="font-semibold text-foreground hover:text-green-800 transition-colors flex items-center gap-2 focus:outline-none">
          {t("nav.products")}
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center" className="w-[15rem] p-4 rounded-2xl shadow-lg">
          <DropdownMenuItem asChild>
            <Link href="/products/coffee" className="w-full cursor-pointer">
              {t("nav.products_items.coffee")}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/products/rubber" className="w-full cursor-pointer">
              {t("nav.products_items.rubber")}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/products/tapioca" className="w-full cursor-pointer">
              {t("nav.products_items.tapioca")}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/products/cashew" className="w-full cursor-pointer">
              {t("nav.products_items.cashew")}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/products/star-anise" className="w-full cursor-pointer">
              {t("nav.products_items.star_anise")}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/products/cinnamon" className="w-full cursor-pointer">
              {t("nav.products_items.cinnamon")}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/products/pepper" className="w-full cursor-pointer">
              {t("nav.products_items.pepper")}
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </HoverDropdownMenu>
      
      <Link href="/news" className="font-semibold text-foreground hover:text-green-800 transition-colors">
        {t("nav.news")}
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
  const [showProductsSubmenu, setShowProductsSubmenu] = useState(false);
  
  const handleToggleProductsSubmenu = useCallback(() => {
    setShowProductsSubmenu(prev => !prev);
  }, []);

  return (
    <div className={`md:hidden bg-background border-b border-border overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
      <nav className="container mx-auto px-16 py-4 flex flex-col space-y-4">
        <Link href="/" className="text-foreground hover:text-primary transition-colors py-2">
          {t("nav.home")}
        </Link>
        <Link href="/about" className="text-foreground hover:text-primary transition-colors py-2">
          {t("nav.about")}
        </Link>
        
        
        <div className="flex flex-col">
          <button 
            onClick={handleToggleProductsSubmenu}
            className="flex items-center justify-between text-foreground hover:text-primary transition-colors py-2"
          >
            {t("nav.products")}
            <ChevronDown className={`h-4 w-4 transition-transform ${showProductsSubmenu ? 'rotate-180' : ''}`} />
          </button>
          
          <div className={`ml-4 flex flex-col space-y-2 mt-2 overflow-hidden transition-all duration-300 ease-in-out ${showProductsSubmenu ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <Link href="/products/coffee" className="text-foreground hover:text-primary transition-colors py-1">
              {t("nav.products_items.coffee")}
            </Link>
            <Link href="/products/rubber" className="text-foreground hover:text-primary transition-colors py-1">
              {t("nav.products_items.rubber")}
            </Link>
            <Link href="/products/tapioca" className="text-foreground hover:text-primary transition-colors py-1">
              {t("nav.products_items.tapioca")}
            </Link>
            <Link href="/products/cashew" className="text-foreground hover:text-primary transition-colors py-1">
              {t("nav.products_items.cashew")}
            </Link>
            <Link href="/products/star-anise" className="text-foreground hover:text-primary transition-colors py-1">
              {t("nav.products_items.star_anise")}
            </Link>
            <Link href="/products/cinnamon" className="text-foreground hover:text-primary transition-colors py-1">
              {t("nav.products_items.cinnamon")}
            </Link>
            <Link href="/products/pepper" className="text-foreground hover:text-primary transition-colors py-1">
              {t("nav.products_items.pepper")}
            </Link>
          </div>
        </div>
        
        <Link href="/news" className="text-foreground hover:text-primary transition-colors py-2">
          {t("nav.news")}
        </Link>
        
        <Link href="/contact" className="text-foreground hover:text-primary transition-colors py-2">
          {t("nav.contact")}
        </Link>
        
        <div className="flex items-center justify-center space-x-4 pt-2">
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