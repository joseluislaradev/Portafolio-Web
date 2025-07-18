import { ThemeSwitcher } from "../atomos/SwitchTema"; // Asegúrate de importar el componente SwitchTema
import { MenuEscondido } from "../moleculas/MenuEscondido";
import { useState } from "react"; // Importa useState para manejar el estado del menú

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full fixed">
      <div className="flex justify-between items-center w-full relative">
        <div className="absolute left-4 top-4">
          <ThemeSwitcher />
        </div>

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

        <MenuEscondido isMenuOpen={isMenuOpen} />
      </div>
    </header>
  );
}
