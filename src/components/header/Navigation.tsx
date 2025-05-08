import { memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import {
  HoverDropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Component Navigation với chức năng active link
const Navigation = memo(({ t }: { t: (key: string) => string }) => {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname === path;
  };
  
  const isProductActive = () => {
    return pathname.startsWith('/category/');
  };
  
  return (
    <nav className="hidden md:flex space-x-8">
      <Link 
        href="/" 
        className={`font-semibold transition-colors ${isActive('/') ? 'text-green-800' : 'text-foreground hover:text-green-800'}`}
      >
        {t("nav.home")}
      </Link>
      <Link 
        href="/about" 
        className={`font-semibold transition-colors ${isActive('/about') ? 'text-green-800' : 'text-foreground hover:text-green-800'}`}
      >
        {t("nav.about")}
      </Link>
      
      <HoverDropdownMenu>
        <DropdownMenuTrigger 
          className={`font-semibold transition-colors flex items-center gap-2 focus:outline-none ${isProductActive() ? 'text-green-800' : 'text-foreground hover:text-green-800'}`}
        >
          {t("nav.products")}
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center" className="w-[15rem] p-4 rounded-2xl shadow-lg">
          <DropdownMenuItem asChild>
            <Link 
              href="/category/coffee" 
              className={`w-full cursor-pointer ${isActive('/category/coffee') ? 'text-green-800' : ''}`}
            >
              {t("nav.products_items.coffee")}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link 
              href="/category/rubber" 
              className={`w-full cursor-pointer ${isActive('/category/rubber') ? 'text-green-800' : ''}`}
            >
              {t("nav.products_items.rubber")}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link 
              href="/category/tapioca" 
              className={`w-full cursor-pointer ${isActive('/category/tapioca') ? 'text-green-800' : ''}`}
            >
              {t("nav.products_items.tapioca")}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link 
              href="/category/cashew" 
              className={`w-full cursor-pointer ${isActive('/category/cashew') ? 'text-green-800' : ''}`}
            >
              {t("nav.products_items.cashew")}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link 
              href="/category/anise" 
              className={`w-full cursor-pointer ${isActive('/category/anise') ? 'text-green-800' : ''}`}
            >
              {t("nav.products_items.star_anise")}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link 
              href="/category/cinnamon" 
              className={`w-full cursor-pointer ${isActive('/category/cinnamon') ? 'text-green-800' : ''}`}
            >
              {t("nav.products_items.cinnamon")}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link 
              href="/category/pepper" 
              className={`w-full cursor-pointer ${isActive('/category/pepper') ? 'text-green-800' : ''}`}
            >
              {t("nav.products_items.pepper")}
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </HoverDropdownMenu>
      
      <Link 
        href="/news" 
        className={`font-semibold transition-colors ${isActive('/news') ? 'text-green-800' : 'text-foreground hover:text-green-800'}`}
      >
        {t("nav.news")}
      </Link>
    </nav>
  );
});

Navigation.displayName = "Navigation";

export default Navigation; 