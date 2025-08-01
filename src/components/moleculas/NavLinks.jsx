import { LinkBoton } from "./LinkBoton.jsx";

export function NavLinks({ sections, activeSection, sectionRefs}) {
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
