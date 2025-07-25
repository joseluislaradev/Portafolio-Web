import { useSwitchTema } from "../../hooks/useSwitchTema.jsx";
import { Icono } from "../atomos/Icono.jsx";

export function ThemeSwitcher() {
  const { isDarkMode, handleThemeToggle } = useSwitchTema();
  return (
    <button
      type="button"
      onClick={() => handleThemeToggle(!isDarkMode)}
      className="rounded-md text-accent-primary-light dark:text-accent-primary-dark hover:scale-105 transition-transform duration-200"
      aria-label="Cambiar tema"
    >
      <div className="rounded-full p-2 box-border bg-background-secondary-light dark:bg-background-secondary-dark group">
        {isDarkMode ? (
          <Icono
            nombre="dark-mode"
            className="group-hover:text-accent-secondary-dark"
          />
        ) : (
          <Icono
            nombre="light-mode"
            className="group-hover:text-accent-secondary-light"
          />
        )}
      </div>
    </button>
  );
}
