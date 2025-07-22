import { ThemeSwitcher } from "../atomos/SwitchTema";
import { MenuEscondido } from "../moleculas/MenuEscondido";
import { useState } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { MenuComputadora } from "../moleculas/MenuComputadora.jsx";

export function Header({ sectionRefs, sectionIds, activeSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width: 768px)"); // Cambia el valor según tu diseño

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full fixed bg-background-primary-light dark:bg-background-primary-dark z-50 h-16 outline-solid outline-1 outline-accent-secondary-light dark:outline-accent-secondary-dark ">
      <div className="flex justify-between items-center w-full relative">
        <div className="absolute left-4 top-4">
          <ThemeSwitcher />
        </div>

        {!isMobile && (
          <div className="absolute top-4 right-4 z-10">
            <MenuComputadora sectionRefs={sectionRefs} sectionIds={sectionIds} activeSection={activeSection} />
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
              <span className="material-symbols-outlined ">menu</span>
            </button>
          </div>
        )}

        {isMobile && <MenuEscondido sectionRefs={sectionRefs} sectionIds={sectionIds} activeSection={activeSection} isMenuOpen={isMenuOpen} />}
      </div>
    </header>
  );
}
