import { useParams, useNavigate } from "react-router-dom";
import { proyectosData } from "../data/proyectosData";
import { LabelTecnologias } from "../components/moleculas/LabelTecnologias";
import { LinkBoton } from "../components/moleculas/LinkBoton";
import { NotFoundPage } from "./NotFoundPage";
import { TitulosSecciones } from "../components/atomos/TitulosSecciones.jsx";
import { Boton } from "../components/atomos/Boton.jsx";
import { Section } from "../layout/Section.jsx";
import { Carousel } from "../components/moleculas/Carousel.jsx";
import { Icono } from "../components/atomos/Icono.jsx";

export function ProjectDetailPage() {
  const { projectId } = useParams(); // 'projectId' debe coincidir con el :projectId de tu Route
  const navigate = useNavigate(); // hook para obtener la función de navegación

  const proyecto = proyectosData.find((p) => p.slug === projectId);

  // 3. Si el proyecto no existe, mostramos la página 404
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
          {proyecto.detalle.desafio.map((parrafo, index) => (
            <p className="text-base md:text-lg mt-4" key={index}>
              {parrafo}
            </p>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-bold md:text-xl text-center">
            Mi Solución
          </h3>
          {proyecto.detalle.solucion.map((parrafo, index) => (
            <p className="text-base md:text-lg mt-4" key={index}>
              {parrafo}
            </p>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-bold md:text-xl text-center mb-8">
            {proyecto.detalle.procesoYMetodologia.titulo}
          </h3>
          {proyecto.detalle.procesoYMetodologia.parrafos.map((p, i) => (
            <p key={i} className="text-base md:text-lg mt-4">
              {p}
            </p>
          ))}

          <ul className="list-disc pl-6 mt-4">
            {proyecto.detalle.procesoYMetodologia.subsecciones.map((sub, i) => (
              <li key={i} className="mt-4">
                <h3 className="text-lg font-semibold">{sub.titulo}</h3>
                <p className="text-base md:text-lg">{sub.contenido}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex mt-12 md:mt-16 gap-4 justify-center w-full bg-accent-primary-light/20 dark:bg-accent-primary-dark/20 p-4 rounded-lg">
          <div>
            <Icono nombre="info" />
          </div>
          <div className="">
            <p className="text-base md:text-lg text-text-secondary-light dark:text-text-secondary-dark">
              <span className="font-bold ">
                Nota sobre la Confidencialidad:
              </span>{" "}
              Debido a acuerdos de confidencialidad, la información y las
              imágenes aquí presentadas son una vista general. El enlace "Ver en
              Vivo" dirige a la pantalla de login, ya que no es posible
              compartir credenciales.
            </p>
          </div>
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
    </Section>
  );
}
