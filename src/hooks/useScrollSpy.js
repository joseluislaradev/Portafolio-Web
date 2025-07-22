// src/hooks/useScrollSpy.js
import { useState, useEffect } from 'react';

// El hook ahora recibe el objeto de refs
export function useScrollSpy( sectionRefs ) {
  const [activeSection, setActiveSection] = useState('');

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
      { rootMargin: '-50% 0px -50% 0px' }
    );

    // Creamos un array con los elementos del DOM a partir de los refs
    const elements = Object.values(sectionRefs)
      .map(ref => ref.current)
      .filter(Boolean); // Filtramos por si algún ref es nulo

    // Le decimos al observer que vigile esos elementos
    elements.forEach(element => observer.observe(element));

    // La función de limpieza
    return () => {
      elements.forEach(element => observer.unobserve(element));
    };
  }, [sectionRefs]); // La dependencia ahora es el objeto de refs

  return activeSection;
}