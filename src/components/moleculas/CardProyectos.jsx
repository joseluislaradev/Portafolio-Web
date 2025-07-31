import { LinkBoton } from "../moleculas/LinkBoton.jsx";
import { LabelTecnologias } from "./LabelTecnologias.jsx";

export function CardProyectos({
  titulo,
  descripcion,
  imageUrl,
  detailsLink,
  liveLink,
  codeLink,
  tecnologias = [],
}) {
  return (
    <article className=" rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 group ">
      <figure className="flex items-center overflow-hidden h-full w-full group-hover:scale-[.98] transition-transform duration-200 ease-in-out">
        <img
          src={imageUrl}
          alt={`Imagen de la pantalla principal de ${titulo}.`}
          className="w-full h-48 object-cover rounded-2xl transition-all duration-200 ease-in-out shadow-xl group-hover:shadow-2xl group-hover:border-3 group-hover:border-accent-secondary-light dark:group-hover:border-1 dark:group-hover:border-accent-secondary-dark"
        />
      </figure>
      <div className="p-6 lg:col-span-2 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold md:text-2xl text-text-primary dark:text-dark-text-primary">
            {titulo}
          </h3>

          <LabelTecnologias tecnologias={tecnologias} />
        </div>

        <p className="text-text-secondary dark:text-dark-text-secondary">
          {descripcion}
        </p>

        <div className="flex gap-4 flex-wrap ">
          {/* Botón de Detalles (Solo si existe la prop detailsLink) */}
          {detailsLink && (
            <LinkBoton
              href={detailsLink}
              iconName="more-horizontal"
              variant="secondary"
              className="text-base"
            >
              Ver Caso de Estudio
            </LinkBoton>
          )}

          {/* Botón de Demo (Solo si existe la prop liveLink) */}
          {liveLink && !detailsLink && (
            <LinkBoton
              href={liveLink}
              iconName="in-live-tv"
              variant="secondary"
              className="text-base"
            >
              Ver en vivo
            </LinkBoton>
          )}

          {/* Botón de Código (Solo si existe la prop codeLink) */}
          {codeLink && !detailsLink && (
            <LinkBoton
              href={codeLink}
              iconName="github"
              variant="secondary"
              className="text-base"
            >
              Ver código
            </LinkBoton>
          )}
        </div>
      </div>
    </article>
  );
}
