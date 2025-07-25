import { Component, useRef } from "react";
import { useScrollSpy } from "./hooks/useScrollSpy";
import { Header } from "./components/organismos/Header";
import { Hero } from "./components/organismos/Hero";
import { Proyectos } from "./components/organismos/Proyectos.jsx";
import { ExperienciaLaboral } from "./components/organismos/ExperienciaLaboral.jsx";
import { SobreMi } from "./components/organismos/SobreMi.jsx";
import { Contacto } from "./components/organismos/Contacto.jsx";
import { PiePagina } from "./components/moleculas/PiePagina.jsx";
import { Toaster } from "react-hot-toast";

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

  return (
    <div className="">
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
      <PiePagina />

      {/* 👇 Añade este componente aquí. Se encargará de mostrar los toasts */}
      <Toaster
        position="top-center"
        toastOptions={{
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
    </div>
  );
}
