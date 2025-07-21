import { LinkBoton } from "../atomos/LinkBoton";

export function MenuComputadora() {
  return (
    <nav>
      <ul className="flex items-center gap-6 text-lg font-semibold">
        <li>
          <LinkBoton href="#hero" variant="ghost">
            Inicio
          </LinkBoton>
        </li>
        <li>
          <LinkBoton href="#proyectos" variant="ghost">
            Proyectos
          </LinkBoton>
        </li>
        <li>
          <LinkBoton href="#experiencia" variant="ghost">
            Experiencia
          </LinkBoton>
        </li>
        <li>
          <LinkBoton href="#sobreMi" variant="ghost">
            Sobre mí
          </LinkBoton>
        </li>
        <li>
          <LinkBoton href="#contacto" variant="ghost">
            Contacto
          </LinkBoton>
        </li>
      </ul>
    </nav>
  );
}
