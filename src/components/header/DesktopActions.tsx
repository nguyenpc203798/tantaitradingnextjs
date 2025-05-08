import { memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "@/components/header/ThemeSwitcher";
import LanguageSwitcher from "@/components/header/LanguageSwitcher";

const DesktopActions = memo(({ t }: { t: (key: string) => string }) => {
  const pathname = usePathname();
  
  const isContactActive = pathname === "/contact";
  
  return (
    <div className="hidden md:flex items-center space-x-2">
      <ThemeSwitcher />
      <LanguageSwitcher />
      <Link href="/contact">
        <Button 
          size="sm" 
          className={`ml-4 ${isContactActive ? 'bg-green-800 hover:bg-green-700' : ''}`}
        >
          {t("nav.contact")}
        </Button>
      </Link>
    </div>
  );
});

DesktopActions.displayName = "DesktopActions";

export default DesktopActions; 