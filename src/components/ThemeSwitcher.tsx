import { memo, useCallback } from "react";
import { useTheme } from "@/context/ThemeContext";
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
  return <p>{theme === "light" ? "Bật chế độ tối" : "Bật chế độ sáng"}</p>;
});

ThemeTooltipText.displayName = "ThemeTooltipText";

// Component chính
const ThemeSwitcher = memo(() => {
  const { theme, setTheme } = useTheme();

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
            aria-label={theme === "light" ? "Bật chế độ tối" : "Bật chế độ sáng"}
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