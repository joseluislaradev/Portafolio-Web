import { MenuEscondido } from "../moleculas/MenuEscondido";
import { useState } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { MenuComputadora } from "../moleculas/MenuComputadora.jsx";
import { MenuIcon } from "../atomos/MenuIcon.jsx";
import { ThemeSwitcher } from "../moleculas/ThemeSwitcher.jsx";

export function Header({ sections, sectionRefs, activeSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width: 768px)"); // Cambia el valor según tu diseño

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full fixed bg-background-primary-light dark:bg-background-primary-dark z-50 h-16 select-none ">
      <div w-full className="max-w-[1900px] mx-auto">
        <div className="flex justify-between items-center w-full relative">
          <div className="absolute left-4 top-3 animate-slide-in-top">
            <ThemeSwitcher />
          </div>

          {!isMobile && (
            <div className="absolute top-4 right-4 z-10 animate-slide-in-top">
              <MenuComputadora
                sections={sections}
                sectionRefs={sectionRefs}
                activeSection={activeSection}
              />
            </div>
          )}

          {isMobile && (
            <div className="absolute top-4 right-4 z-10">
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

          {isMobile && (
            <MenuEscondido
              sections={sections}
              sectionRefs={sectionRefs}
              activeSection={activeSection}
              isMenuOpen={isMenuOpen}
            />
          )}
        </div>
      </div>
    </header>
  );
}
