import { LinkBoton } from "../moleculas/LinkBoton.jsx";

export function Logo() {
  return (
    <LinkBoton
      href="/"
      className="text-text-primary-light dark:text-text-primary-dark font-bold text-lg"
      variant="ghost"
    >
      José Luis Lara
    </LinkBoton>
  );
}
