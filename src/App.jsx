import { useRef } from "react";
import { Header } from "./components/organismos/Header";
import { Hero } from "./components/organismos/Hero";
import { Proyectos } from "./components/organismos/Proyectos.jsx";
import { useScrollSpy } from "./hooks/useScrollSpy";

export function App() {
  const sectionRefs = {
    hero: useRef(null),
    proyectos: useRef(null),
    experiencia: useRef(null),
    sobreMi: useRef(null),
    contacto: useRef(null),
  };

  //Extraemos los refs y los IDs para pasarlos al hook y a los componentes
  const sectionIds = Object.keys(sectionRefs);
  const activeSection = useScrollSpy(sectionRefs);

  return (
    <>
      <Header
        sectionRefs={sectionRefs}
        sectionIds={sectionIds}
        activeSection={activeSection}
      />
      <main className="pt-16">
        <div ref={sectionRefs.hero}>
          <Hero />
        </div>
        <div ref={sectionRefs.proyectos}>
          <Proyectos />
        </div>
      </main>
    </>
  );
}
