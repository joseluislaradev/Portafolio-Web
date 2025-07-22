import { LinkBoton } from "../atomos/LinkBoton";

export function MenuComputadora({ sectionRefs, sectionIds, activeSection }) {
  console.log("MenuComputadora activeSection:", activeSection);
  return (
    <nav>
      <ul className="flex items-center gap-6 text-lg font-semibold">

        {sectionIds.map((sectionId) => (
          <li key={sectionId}>
            <LinkBoton
              href={`#${sectionId}`}
              variant="ghost"
              className={activeSection === sectionId ? "text-accent-secondary-light dark:text-accent-secondary-dark" : ""}
              sectionRefs={sectionRefs}
            >
              {sectionId}
            </LinkBoton>
          </li>
        ))}
      </ul>
    </nav>
  );
}
