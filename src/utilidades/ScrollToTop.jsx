import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  // Este hook nos da información sobre la ruta actual
  const { pathname } = useLocation();

  // Este efecto se ejecutará cada vez que el 'pathname' (la URL) cambie
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Este componente no renderiza nada en la pantalla
  return null;
}
