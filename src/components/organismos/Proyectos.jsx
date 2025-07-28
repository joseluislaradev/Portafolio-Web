import { CardProyectos } from "../moleculas/CardProyectos.jsx";
import { TitulosSecciones } from "../atomos/TitulosSecciones.jsx";
import { proyectosData } from "../../data/proyectosData";
import { LinkBoton } from "../moleculas/LinkBoton.jsx";
import { AnimateOnScroll } from "../atomos/AnimateOnScroll.jsx";

export function Proyectos() {
  return (
    <section
      id="proyectos"
      className="w-full min-h-screen p-4 bg-background-secondary-light dark:bg-background-secondary-dark py-8md:py-12 lg:py-16"
    >
      <div className="max-w-6xl mx-auto ">
        <AnimateOnScroll>
          <TitulosSecciones titulo="Proyectos" />
        </AnimateOnScroll>

        <div className="mt-14 flex flex-col gap-16 md:gap-20 lg:gap-24">
          {proyectosData.map((proyecto) => (
            <AnimateOnScroll key={proyecto.id}>
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
            </AnimateOnScroll>
          ))}
        </div>
        <div className="mt-12 mb-8 lg:mt-20 lg:mb-6 text-center">
          <AnimateOnScroll>
            <LinkBoton
              href="https://github.com/joseluislaradev?tab=repositories"
              variant="ghost"
              className="flex items-center justify-center gap-4 flex-row-reverse"
              iconName="flecha-forward"
            >
              Ver todos mis proyectos en GitHub
            </LinkBoton>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
