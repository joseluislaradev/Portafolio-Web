import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollInPage() {
  // Este hook nos da información sobre la ruta actual
  const { pathname, hash } = useLocation();

  // Este efecto se ejecutará cada vez que el 'pathname' (la URL) cambie
  useEffect(() => {
    // Si la URL tiene un 'hash' (ej. #proyectos)
    if (hash) {
      const targetId = hash.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView();
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
