import { LinkBoton } from "../moleculas/LinkBoton.jsx"; // O atomos/LinkBoton.jsx

export function CardProyectos({
  titulo,
  descripcion,
  imageUrl,
  detailsLink,
  liveLink,
  codeLink,
}) {
  return (
    <article className="border rounded-lg overflow-hidden shadow-lg bg-background-secondary-light dark:bg-background-secondary-dark">
      <figure>
        <img
          src={imageUrl}
          alt={`Imagen de la pantalla principal de ${titulo}.`}
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="p-6">
        <h3 className="text-xl font-bold text-text-primary dark:text-dark-text-primary">
          {titulo}
        </h3>
        <p className="text-text-secondary dark:text-dark-text-secondary mt-2">
          {descripcion}
        </p>

        <div className="flex gap-4 mt-6">
          {/* Botón de Detalles (Solo si existe la prop detailsLink) */}
          {detailsLink && (
            <LinkBoton
              href={detailsLink}
              iconName="more-horizontal"
              variant="primary"
            >
              Ver Caso de Estudio
            </LinkBoton>
          )}

          {/* Botón de Demo (Solo si existe la prop liveLink) */}
          {liveLink && (
            <LinkBoton
              href={liveLink}
              iconName="in-live-tv"
              variant="secondary"
            >
              Ver en vivo
            </LinkBoton>
          )}

          {/* Botón de Código (Solo si existe la prop codeLink) */}
          {codeLink && (
            <LinkBoton href={codeLink} iconName="github" variant="outline">
              Ver código
            </LinkBoton>
          )}
        </div>
      </div>
    </article>
  );
}
