import { useLayoutEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState<string>(
    window.localStorage.getItem("data-theme") || "light"
  );
  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("data-theme", theme);
  }, [theme]);

  return { theme, setTheme };
};
