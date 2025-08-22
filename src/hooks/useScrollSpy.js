// src/hooks/useScrollSpy.js
import { useContext, useEffect } from "react";
import { SectionActiveContext } from "../context/sectionActive.jsx"; // Asegúrate de que la ruta es correcta

// El hook ahora recibe el objeto de refs
export function useScrollSpy(sectionRefs) {
  const { setActiveSection } = useContext(SectionActiveContext);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            break; // Salimos del bucle en cuanto encontramos la primera sección visible
          }
        }
      },
      {
        // 👇 ESTA ES LA MAGIA 👇
        // Crea una "zona de activación" en el centro de la pantalla.
        // Se activará cualquier sección que entre en esta zona.
        rootMargin: "-40% 0px -60% 0px",
      }
    );

    // Creamos un array con los elementos del DOM a partir de los refs
    const elements = Object.values(sectionRefs)
      .map((ref) => ref.current)
      .filter(Boolean); // Filtramos por si algún ref es nulo

    // Le decimos al observer que vigile esos elementos
    elements.forEach((element) => observer.observe(element));

    // La función de limpieza
    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, [sectionRefs, setActiveSection]); // La dependencia ahora es el objeto de refs
}
