import { Transition } from "@headlessui/react";
import { NavLinks } from "./NavLinks.jsx";

export function MenuEscondido({
  sections,
  activeSection,
  sectionRefs,
  isMenuOpen,
}) {
  console.log("isMenuOpen:", isMenuOpen); // Verifica el estado del menú en la consola

  return (
    <Transition
      show={isMenuOpen} // La visibilidad se controla con el estado de React
      // --- Clases para la animación de ENTRADA ---
      enter="transition-transform duration-300 ease-in-out"
      enterFrom="translate-x-full" // Empieza fuera de la pantalla (a la derecha)
      enterTo="translate-x-0" // Termina en su posición final (en pantalla)
      // --- Clases para la animación de SALIDA ---
      leave="transition-transform duration-300 ease-in-out"
      leaveFrom="translate-x-0" // Empieza en su posición final
      leaveTo="translate-x-full" // Termina fuera de la pantalla (a la derecha)
    >
      <nav className="menu absolute w-1/2 h-screen top-0 right-0 bg-background-secondary-light dark:bg-background-secondary-dark">
        <ul className="flex bg-background-primary-light dark:bg-background-primary-dark  flex-col items-center justify-center h-full space-y-6 text-lg font-semibold">
          <NavLinks
            sections={sections}
            activeSection={activeSection}
            sectionRefs={sectionRefs}
          />
        </ul>
      </nav>
    </Transition>
  );
}
