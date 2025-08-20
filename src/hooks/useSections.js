import { useRef } from "react";
import { Hero } from "../components/organismos/Hero";
import { Proyectos } from "../components/organismos/Proyectos.jsx";
import { ExperienciaLaboral } from "../components/organismos/ExperienciaLaboral.jsx";
import { SobreMi } from "../components/organismos/SobreMi.jsx";
import { Contacto } from "../components/organismos/Contacto.jsx";
import { useScrollSpy } from "./useScrollSpy.js";

export function useSections() {
  const sections = [
    { id: "hero", label: "Inicio", ref: useRef(null), Component: Hero },
    {
      id: "proyectos",
      label: "Proyectos",
      ref: useRef(null),
      Component: Proyectos,
    },
    {
      id: "experiencia",
      label: "Experiencia",
      ref: useRef(null),
      Component: ExperienciaLaboral,
    },
    {
      id: "sobreMi",
      label: "Sobre mí",
      ref: useRef(null),
      Component: SobreMi,
    },
    {
      id: "contacto",
      label: "Contacto",
      ref: useRef(null),
      Component: Contacto,
    },
  ];
  //Extraemos los refs de cada sección
  const sectionRefs = sections.reduce((acc, section) => {
    acc[section.id] = section.ref;
    return acc;
  }, {});

  const activeSection = useScrollSpy(sectionRefs);

  return { sections, activeSection, sectionRefs };
}
