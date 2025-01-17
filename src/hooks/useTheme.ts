import { useEffect } from "react";

export const useTheme = (defaultTheme: "dark" | "light" = "dark") => {
  useEffect(() => {
    document.documentElement.classList.add(defaultTheme);
  }, []);
};
