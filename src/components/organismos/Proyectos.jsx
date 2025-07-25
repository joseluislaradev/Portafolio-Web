import { CardProyectos } from "../moleculas/CardProyectos.jsx";
import { TitulosSecciones } from "../atomos/TitulosSecciones.jsx";
import { proyectosData } from "../../data/proyectosData";

export function Proyectos() {
  return (
    <section
      id="proyectos"
      className="w-full min-h-screen p-4 bg-background-secondary-light dark:bg-background-secondary-dark py-8md:py-12 lg:py-16"
    >
      <div className="max-w-6xl mx-auto ">
        <TitulosSecciones titulo="Proyectos" />

        <div className="mt-14 flex flex-col gap-16 md:gap-20 lg:gap-24">
          {proyectosData.map((proyecto) => (
            <CardProyectos
              key={proyecto.id}
              titulo={proyecto.titulo}
              descripcion={proyecto.descripcion}
              imageUrl={proyecto.imageUrl}
              detailsLink={proyecto.detailsLink}
              liveLink={proyecto.liveLink}
              codeLink={proyecto.codeLink}
              tecnologias={proyecto.tecnologias}
            />
          ))}
        </div>
        <div className="mt-12 mb-8 lg:mt-20 lg:mb-6 text-center">
          <p className="text-lg font-medium text-text-subtitle-light dark:text-text-subtitle-dark hover:scale-105 hover:text-accent-secondary-light dark:hover:text-accent-secondary-dark transition-all duration-200">
            Ver más ...
          </p>
        </div>
      </div>
    </section>
  );
}
