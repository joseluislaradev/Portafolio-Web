import { TitulosSecciones } from "../atomos/TitulosSecciones";

export function ExperienciaLaboral() {
  return (
    <section
      id="experiencia"
      className="w-full min-h-screen p-4 bg-background-secondary-light dark:bg-background-secondary-dark py-8 md:py-12 lg:py-16"
    >
      <div className="max-w-6xl mx-auto ">
        <TitulosSecciones titulo="Experiencia Laboral" />
      </div>
    </section>
  );
}
