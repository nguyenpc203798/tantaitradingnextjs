import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const handleToggleLanguage = () => {
    setLanguage(language === "en" ? "vi" : "en");
  };

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
            {language === "en" ? "VI" : "EN"}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{language === "en" ? "Chuyển sang tiếng Việt" : "Switch to English"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default LanguageSwitcher; 