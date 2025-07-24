import { useState, useEffect } from "react";

export function useSwitchTema() {
  // Estado para saber si el modo oscuro está activado o no
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("color-theme") === "dark" ||
        (!("color-theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  // Función que se ejecuta cuando el toggle cambia
  const handleThemeToggle = (isChecked) => {
    setIsDarkMode(isChecked);
  };

  // Efecto para aplicar la clase al HTML y guardar en localStorage
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  }, [isDarkMode]);

  return {
    isDarkMode,
    handleThemeToggle,
  };
}
