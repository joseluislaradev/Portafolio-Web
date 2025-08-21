import { MenuEscondido } from "../moleculas/MenuEscondido";
import { useState } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { MenuComputadora } from "../moleculas/MenuComputadora.jsx";
import { MenuIcon } from "../atomos/MenuIcon.jsx";
import { ThemeSwitcher } from "../moleculas/ThemeSwitcher.jsx";
import { Logo } from "../atomos/Logo.jsx";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width: 896px)"); // Cambia el valor según tu diseño

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full fixed bg-background-primary-light dark:bg-background-primary-dark z-50 h-18 select-none p-4 pb-6">
      <div className="max-w-[1900px] mx-auto">
        <div className="flex justify-between items-center w-full ">
          <div className="">
            <Logo />
          </div>

          {!isMobile && (
            <div className="flex items-center gap-4 animate-slide-in-top relative z-100">
              <MenuComputadora />
              <ThemeSwitcher />
            </div>
          )}

          {isMobile && (
            <div className="flex items-center gap-4 animate-slide-in-top relative z-100">
              <ThemeSwitcher />
              <button
                type="button"
                onClick={toggleMenu}
                className=" rounded-md text-accent-primary-light dark:text-accent-primary-dark hover:scale-105 transition-transform duration-200" // Estilos para el área clickeable
                aria-label="Abrir menú"
              >
                <MenuIcon isOpen={isMenuOpen} />
              </button>
            </div>
          )}

          {isMobile && <MenuEscondido isMenuOpen={isMenuOpen} />}
        </div>
      </div>
    </header>
  );
}
