import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-semibold text-primary mr-8">
              Tantai Trading
            </Link>
            
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
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <ThemeSwitcher />
              <LanguageSwitcher />
              <Button size="sm" className="ml-4">
                {t("nav.contact")}
              </Button>
            </div>
            
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
      {isMenuOpen && (
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
      )}
    </header>
  );
};

export default Header; 