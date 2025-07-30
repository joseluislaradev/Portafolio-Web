import { useParams, useNavigate } from "react-router-dom";
import { proyectosData } from "../data/proyectosData";
import { LabelTecnologias } from "../components/moleculas/LabelTecnologias";
import { LinkBoton } from "../components/moleculas/LinkBoton";
import { NotFoundPage } from "./NotFoundPage";
import { TitulosSecciones } from "../components/atomos/TitulosSecciones.jsx";
import { Boton } from "../components/atomos/Boton.jsx";
import { Section } from "../layout/Section.jsx";
import { Carousel } from "../components/moleculas/Carousel.jsx";
import { Alert } from "../components/moleculas/Alert.jsx";
import { ContentRender } from "../components/moleculas/ContentRender.jsx";

export function ProjectDetailPage() {
  const { projectId } = useParams(); // 'projectId' debe coincidir con el :projectId de tu Route
  const navigate = useNavigate(); // hook para obtener la función de navegación

  const proyecto = proyectosData.find((p) => p.slug === projectId);

  if (!proyecto) {
    return <NotFoundPage />;
  }

  return (
    <Section className=" !pt-8 bg-gradient-to-b from-background-primary-light via-50% to-background-secondary-light dark:from-background-primary-dark  dark:via-50%  dark:to-background-secondary-dark">
      <Boton
        iconName="flecha-back"
        onClick={() => navigate(-1)}
        variant="ghost"
        className="flex items-center gap-2 "
      >
        Volver a todos los proyectos
      </Boton>

      <TitulosSecciones titulo={proyecto.titulo} />

      <Carousel imagenes={proyecto.detalle.imagenesGaleria} className="mb-8" />

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
          <h3 className="text-lg font-bold md:text-xl text-center ">
            El Desafío
          </h3>
          <ContentRender content={proyecto.detalle.desafio} />
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-bold md:text-xl text-center">
            Mi Solución
          </h3>
          <ContentRender content={proyecto.detalle.solucion} />
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-bold md:text-xl text-center mb-8">
            Proceso y metodología
          </h3>
          <ContentRender content={proyecto.detalle.procesoYMetodologia} />
        </div>

        {proyecto.detalle.confidencialidad && (
          <Alert
            iconName="info"
            tipo="info"
            titulo="Nota sobre la Confidencialidad:"
          >
            {proyecto.detalle.confidencialidad}
          </Alert>
        )}
      </div>

      <div className="flex justify-center gap-4 mt-12 md:mt-16">
        {proyecto.buttons.liveLink && (
          <LinkBoton
            href={proyecto.buttons.liveLink}
            variant="primary"
            iconName="in-live-tv"
          >
            Ver Demo en Vivo
          </LinkBoton>
        )}
        {proyecto.buttons.codeLink && (
          <LinkBoton
            href={proyecto.buttons.codeLink}
            variant="outline"
            iconName="github"
          >
            Ver Código
          </LinkBoton>
        )}
      </div>
    </Section>
  );
}
