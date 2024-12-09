import { useEffect, useState } from "react";
import { getFromStorage } from "../utils/storage";
const useDarkMode = () => {
  const [theme, setTheme] = useState<any>(
    localStorage.getItem("theme") || "light"
  );
  const colorTheme = theme === "dark" ? "light" : "dark";
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);
  return [theme, setTheme];
};
export default useDarkMode;
