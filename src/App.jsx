import { Header } from "./components/organismos/Header";
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

  return (
    <div className="">
      {isProjectDetailPage ? <HeaderDetalle /> : <Header />}

      <main className="pt-16">
        <Suspense
          fallback={
            <div className="h-screen w-full flex items-center justify-center">
              Cargando...
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
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
