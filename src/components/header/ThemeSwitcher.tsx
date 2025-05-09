import { memo, useCallback } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Tách phần hiển thị icon thành component riêng (SRP)
const ThemeIcon = memo(({ theme }: { theme: string }) => {
  return theme === "light" ? (
    <Moon className="h-[1.2rem] w-[1.2rem]" />
  ) : (
    <Sun className="h-[1.2rem] w-[1.2rem]" />
  );
});

ThemeIcon.displayName = "ThemeIcon";

// Tách phần tooltip content thành component riêng (SRP)
const ThemeTooltipText = memo(({ theme }: { theme: string }) => {
  const { t } = useLanguage();
  return <p>{theme === "light" ? t("theme_switcher.dark_mode") : t("theme_switcher.light_mode")}</p>;
});

ThemeTooltipText.displayName = "ThemeTooltipText";

// Component chính
const ThemeSwitcher = memo(() => {
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();

  // useCallback để tối ưu hóa hàm xử lý sự kiện
  const handleToggleTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme, setTheme]);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleToggleTheme}
            aria-label={theme === "light" ? t("theme_switcher.dark_mode") : t("theme_switcher.light_mode")}
          >
            <ThemeIcon theme={theme} />
          </Button>
        </TooltipTrigger> 
        <TooltipContent>
          <ThemeTooltipText theme={theme} />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
});

ThemeSwitcher.displayName = "ThemeSwitcher";

export default ThemeSwitcher; 