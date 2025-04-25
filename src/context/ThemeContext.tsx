import { createContext, useContext, useEffect, useState, useMemo, useCallback } from "react";

// Định nghĩa kiểu theme
type Theme = "light" | "dark";

// Định nghĩa kiểu dữ liệu cho context
type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

// Tạo context với giá trị mặc định undefined
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Custom hook để sử dụng theme
export function useTheme() {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  
  return context;
}

// Hook riêng để quản lý theme
function useThemeState() {
  // Bắt đầu với giá trị mặc định cho SSR
  const [theme, setThemeState] = useState<Theme>("light");
  const [isClient, setIsClient] = useState(false);

  // Cập nhật theme
  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
  }, []);

  // Effect chỉ chạy một lần sau khi component được mount
  useEffect(() => {
    setIsClient(true);
    
    // Đọc từ localStorage sau khi client-side
    const storedTheme = localStorage.getItem("theme") as Theme;
    
    if (storedTheme) {
      setThemeState(storedTheme);
    } else {
      // Sử dụng system preference nếu không có giá trị lưu trữ
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setThemeState(prefersDark ? "dark" : "light");
    }
  }, []);

  // Effect để đồng bộ với localStorage và DOM
  useEffect(() => {
    if (!isClient) return;
    
    // Lưu vào localStorage
    localStorage.setItem("theme", theme);
    
    // Cập nhật class trên HTML element
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme, isClient]);

  return {
    theme,
    setTheme,
    isClient
  };
}

// Component Provider
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useThemeState();
  
  // Memo hóa giá trị context để tránh re-render không cần thiết
  const value = useMemo(() => ({ 
    theme, 
    setTheme 
  }), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
} 