import { memo, useCallback } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Tách phần hiển thị ngôn ngữ thành component riêng (SRP)
const LanguageText = memo(({ language }: { language: string }) => {
  return <>{language === "en" ? "VI" : "EN"}</>;
});

LanguageText.displayName = "LanguageText";

// Tách phần tooltip content thành component riêng (SRP)
const LanguageTooltipText = memo(({ language }: { language: string }) => {
  return <p>{language === "en" ? "Chuyển sang tiếng Việt" : "Switch to English"}</p>;
});

LanguageTooltipText.displayName = "LanguageTooltipText";

// Component chính
const LanguageSwitcher = memo(() => {
  const { language, setLanguage } = useLanguage();

  // useCallback để tối ưu hóa hàm xử lý sự kiện
  const handleToggleLanguage = useCallback(() => {
    setLanguage(language === "en" ? "vi" : "en");
  }, [language, setLanguage]);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleToggleLanguage}
            aria-label={language === "en" ? "Chuyển sang tiếng Việt" : "Switch to English"}
          >
            <LanguageText language={language} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <LanguageTooltipText language={language} />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
});

LanguageSwitcher.displayName = "LanguageSwitcher";

export default LanguageSwitcher; 