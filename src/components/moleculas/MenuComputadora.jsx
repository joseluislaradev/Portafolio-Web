import { NavLinks } from "./NavLinks.jsx";

export function MenuComputadora({ sections, sectionRefs }) {
  return (
    <nav>
      <ul className="flex items-center gap-6 text-lg font-semibold">
        <NavLinks sections={sections} sectionRefs={sectionRefs} />
      </ul>
    </nav>
  );
}
