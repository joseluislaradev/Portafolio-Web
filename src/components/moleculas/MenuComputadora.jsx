import { NavLinks } from "./NavLinks.jsx";

export function MenuComputadora({ sections, activeSection, sectionRefs }) {
  return (
    <nav>
      <ul className="flex items-center gap-6 text-lg font-semibold">
        <NavLinks
          sections={sections}
          activeSection={activeSection}
          sectionRefs={sectionRefs}
        />
      </ul>
    </nav>
  );
}
