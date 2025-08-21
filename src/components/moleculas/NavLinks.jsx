import { LinkBoton } from "./LinkBoton.jsx";
import { useSections } from "../../hooks/useSections.js";
import { memo } from "react";

function NavLinksBase() {
  const { sections, sectionRefs, activeSection } = useSections();

  return (
    <>
      {sections.map(({ id, label }) => (
        <li key={id}>
          <LinkBoton
            href={`#${id}`}
            variant="ghost"
            className={
              activeSection === id
                ? `!text-accent-secondary-light dark:!text-accent-secondary-dark border-b-2 border-accent-secondary-light dark:border-accent-secondary-dark`
                : ""
            }
            sectionRefs={sectionRefs}
          >
            {label}
          </LinkBoton>
        </li>
      ))}
    </>
  );
}

export const NavLinks = memo(NavLinksBase); // 👈 memo para evitar renders si no cambia `sections`
