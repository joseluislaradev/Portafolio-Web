import { Link } from "react-router-dom";
import { LinkBoton } from "../atomos/LinkBoton";

export function Proyectos() {
  return (
    <section id="proyectos" className="w-full h-screen p-4 ">
      <h1 className="text-2xl font-bold md:text-4xl text-center mt-4 md:mt-8 mb-6 md:mb-12">
        PROYECTOS
      </h1>
      <section>
        <figure>
          <img
            src="/src/assets/images/proyectoSINUTACyD.png"
            alt="Imagen de la pantalla principal de proyecto."
          />
        </figure>
        <h2 className="text-lg font-semibold">Proyecto SINUTACyD</h2>
        <p className="text-base">
          Proyecto de gestión de incidencias y tareas para el área de
          infraestructura y desarrollo de la empresa SINUTACyD.
        </p>
        <div>
          <LinkBoton to="/proyectos/sinutacyd">Ver detalles</LinkBoton>
        </div>
      </section>
    </section>
  );
}
