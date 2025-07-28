import { useParams, useNavigate } from "react-router-dom";
import { proyectosData } from "../data/proyectosData";
import { LabelTecnologias } from "../components/moleculas/LabelTecnologias";
import { LinkBoton } from "../components/moleculas/LinkBoton";
import { NotFoundPage } from "./NotFoundPage";
import { TitulosSecciones } from "../components/atomos/TitulosSecciones.jsx";
import { Boton } from "../components/atomos/Boton.jsx";
import { Carousel } from "flowbite-react";

export function ProjectDetailPage() {
  const { projectId } = useParams(); // 'projectId' debe coincidir con el :projectId de tu Route
  const navigate = useNavigate(); // hook para obtener la función de navegación

  const proyecto = proyectosData.find((p) => p.slug === projectId);

  // 3. Si el proyecto no existe, mostramos la página 404
  if (!proyecto) {
    return <NotFoundPage />;
  }

  const customCarouselTheme = {
    control: {
      base: "inline-flex h-8 w-8 items-center justify-center rounded-full sm:h-10 sm:w-10 bg-background-secondary-light dark:bg-background-secondary-dark text-text-primary dark:text-dark-text-primary hover:bg-background-secondary/50 dark:hover:bg-background-secondary/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-secondary-light dark:focus:ring-offset-background-secondary-dark",
      icon: "h-5 w-5 sm:h-6 sm:w-6 text-text-primary-light dark:text-text-primary-dark",
    },
    // Estilos para los puntos indicadores de abajo
    indicators: {
      active: {
        off: "bg-accent-primary-light/50 dark:bg-accent-primary-dark/50", // Color del indicador activo cuando no está seleccionado
        on: "bg-accent-primary-light dark:bg-accent-primary-dark", // Color del indicador activo
      },
      base: "h-3 w-3 rounded-full",
      wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
    },
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-background-primary-light via-50% to-background-secondary-light dark:from-background-primary-dark  dark:via-50%  dark:to-background-secondary-dark p-4 py-8 md:py-12 lg:py-16 ">
      <div className="max-w-6xl mx-auto">
        <Boton
          iconName="flecha-back"
          onClick={() => navigate(-1)}
          variant="ghost"
          className="flex items-center gap-2 "
        >
          Volver a todos los proyectos
        </Boton>

        <TitulosSecciones titulo={proyecto.titulo} />

        <div className="mb-8 w-full h-64 md:h-96 lg:h-[500px]">
          <Carousel theme={customCarouselTheme} slideInterval={5000}>
            {proyecto.detalle.imagenesGaleria.map((imagen, index) => (
              <img
                key={index}
                src={imagen.imagenUrl}
                alt={imagen.imageCaption}
                className="w-full h-full object-cover "
              />
            ))}
          </Carousel>
        </div>

        <p className="text-base md:text-lg mt-4">{proyecto.descripcion}</p>
        <div className="mt-6 flex flex-col gap-4 ">
          <p className="text-base md:text-lg font-bold">Tecnologias: </p>
          <LabelTecnologias
            tecnologias={proyecto.tecnologias}
            className="text-sm md:text-base "
          />
        </div>

        <hr className="my-12 border-gray-200 dark:border-gray-700" />

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="mt-8">
            <h3 className="text-lg font-bold md:text-xl text-text-primary dark:text-dark-text-primary ">
              El Desafío
            </h3>
            {proyecto.detalle.desafio.map((parrafo, index) => (
              <p className="text-base md:text-lg mt-4" key={index}>
                {parrafo}
              </p>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-bold md:text-xl text-text-primary dark:text-dark-text-primary">
              Mi Solución
            </h3>
            {proyecto.detalle.solucion.map((parrafo, index) => (
              <p className="text-base md:text-lg mt-4" key={index}>
                {parrafo}
              </p>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-bold md:text-xl text-text-primary dark:text-dark-text-primary">
              {proyecto.detalle.procesoYMetodologia.titulo}
            </h3>
            {proyecto.detalle.procesoYMetodologia.parrafos.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            {proyecto.detalle.procesoYMetodologia.subsecciones.map((sub, i) => (
              <div key={i} className="mt-4">
                <h3 className="text-xl font-semibold">{sub.titulo}</h3>
                <p>{sub.contenido}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-12 md:mt-16">
          {proyecto.liveLink && (
            <LinkBoton
              href={proyecto.liveLink}
              variant="primary"
              iconName="in-live-tv"
            >
              Ver Demo en Vivo
            </LinkBoton>
          )}
          {proyecto.codeLink && (
            <LinkBoton
              href={proyecto.codeLink}
              variant="outline"
              iconName="github"
            >
              Ver Código
            </LinkBoton>
          )}
        </div>
      </div>
    </section>
  );
}
