import { useRef } from "react";
import { useScrollSpy } from "./hooks/useScrollSpy";
import { Header } from "./components/organismos/Header";
import { Hero } from "./components/organismos/Hero";
import { Proyectos } from "./components/organismos/Proyectos.jsx";
import { ExperienciaLaboral } from "./components/organismos/ExperienciaLaboral.jsx";
import { SobreMi } from "./components/organismos/SobreMi.jsx";
import { Contacto } from "./components/organismos/Contacto.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import { PiePagina } from "./components/moleculas/PiePagina.jsx";
import { Toaster } from "react-hot-toast";
import { HeaderDetalle } from "./components/organismos/HeaderDetalle.jsx";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const ProjectDetailPage = lazy(() => import("./pages/DetallesProyecto.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.jsx"));

export function App() {
  const location = useLocation();

  const isProjectDetailPage = location.pathname.startsWith("/proyectos/");

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
      {isProjectDetailPage ? (
        <HeaderDetalle />
      ) : (
        <Header
          sections={sections}
          sectionRefs={sectionRefs}
          activeSection={activeSection}
        />
      )}

      <main className="pt-16">
        <Suspense
          fallback={
            <div className="h-screen w-full flex items-center justify-center">
              Cargando...
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage sections={sections} />} />
            <Route
              path="/proyectos/:projectId"
              element={<ProjectDetailPage />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>

      <PiePagina />

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
