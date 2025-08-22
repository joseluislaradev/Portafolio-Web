import { LinkBoton } from "./LinkBoton.jsx";
import { useContext } from "react";
import { SectionActiveContext } from "../../context/sectionActive.jsx";

export function NavLinks({ sections, sectionRefs }) {
  const { activeSection } = useContext(SectionActiveContext);
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
