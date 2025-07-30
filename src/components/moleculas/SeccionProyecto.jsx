import { ContentRenderer } from "./ContentRenderer.jsx";
import { TitulosSecciones } from "../atomos/TitulosSecciones.jsx";

export function SeccionProyecto({ title, content }) {
  return (
    <div>
      <TitulosSecciones titulo={title} />

      <ContentRenderer content={content} />
    </div>
  );
}
