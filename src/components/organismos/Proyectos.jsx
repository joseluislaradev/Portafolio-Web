import { CardProyectos } from "../moleculas/CardProyectos.jsx";
import { TitulosSecciones } from "../atomos/TitulosSecciones.jsx";
import { proyectosData } from "../../data/proyectosData"; // 👈 Importa tus datos

export function Proyectos() {
  return (
    <section
      id="proyectos"
      className="w-full min-h-screen p-4 bg-background-secondary-light dark:bg-background-secondary-dark "
    >
      <TitulosSecciones titulo="Proyectos" />

      <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {proyectosData.map((proyecto) => (
          <CardProyectos
            key={proyecto.id}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
            imageUrl={proyecto.imageUrl}
            detailsLink={proyecto.detailsLink}
            liveLink={proyecto.liveLink}
            codeLink={proyecto.codeLink}
          />
        ))}
      </div>
    </section>
  );
}
