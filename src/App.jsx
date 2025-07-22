import { Component, useRef } from "react";
import { Header } from "./components/organismos/Header";
import { Hero } from "./components/organismos/Hero";
import { Proyectos } from "./components/organismos/Proyectos.jsx";
import { useScrollSpy } from "./hooks/useScrollSpy";

export function App() {
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
      Component: null,
    },
    {
      id: "sobreMi",
      label: "Sobre mí",
      ref: useRef(null),
      Component: null,
    },
    {
      id: "contacto",
      label: "Contacto",
      ref: useRef(null),
      Component: null,
    },
  ];
  //Extraemos los refs de cada sección
  const sectionRefs = sections.reduce((acc, section) => {
    acc[section.id] = section.ref;
    return acc;
  }, {});

  const activeSection = useScrollSpy(sectionRefs);

  return (
    <>
      <Header
        sections={sections}
        sectionRefs={sectionRefs}
        activeSection={activeSection}
      />
      <main className="pt-16">
        {sections.map(({ id, ref, Component }) => (
          <div key={id} ref={ref} id={id}>
            {Component && <Component />}
          </div>
        ))}
      </main>
    </>
  );
}
