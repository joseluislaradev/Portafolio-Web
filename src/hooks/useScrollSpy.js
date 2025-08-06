import { useState, useEffect } from "react";

// El hook ahora recibe un array de ELEMENTOS DEL DOM, no de refs
export function useScrollSpy(elements) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Si no hay elementos listos para observar, no hacemos nada
    if (!elements || elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            break;
          }
        }
      },
      {
        rootMargin: "-40% 0px -60% 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    // La función de limpieza
    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, [elements]); // Su única dependencia es el array de elementos

  return activeSection;
}