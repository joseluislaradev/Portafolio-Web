import { useRef, useMemo } from "react";
import { Hero } from "../components/organismos/Hero";
import { Proyectos } from "../components/organismos/Proyectos.jsx";
import { ExperienciaLaboral } from "../components/organismos/ExperienciaLaboral.jsx";
import { SobreMi } from "../components/organismos/SobreMi.jsx";
import { Contacto } from "../components/organismos/Contacto.jsx";
import { useScrollSpy } from "./useScrollSpy.js";

const SECTION_DEFS = [
  { id: "hero", label: "Inicio", Component: Hero },
  {
    id: "proyectos",
    label: "Proyectos",
    Component: Proyectos,
  },
  {
    id: "experiencia",
    label: "Experiencia",
    Component: ExperienciaLaboral,
  },
  {
    id: "sobreMi",
    label: "Sobre mí",
    Component: SobreMi,
  },
  {
    id: "contacto",
    label: "Contacto",
    Component: Contacto,
  },
];

export function useSections() {
  // Crea refs UNa sola vez por id estable
  const refsMap = useRef(
    Object.fromEntries(SECTION_DEFS.map((s) => [s.id, { current: null }]))
  ).current;

  const sections = useMemo(() => {
    return SECTION_DEFS.map((s) => ({ ...s, ref: refsMap[s.id] }));
  }, [refsMap]);

  const sectionRefs = refsMap;

  const activeSection = useScrollSpy(sectionRefs);

  return { sections, activeSection, sectionRefs };
}
