import { Icono } from "../atomos/Icono.jsx";
import { normalizar } from "../../utilidades/normalizarIconos.js";

export function CuadriculaTecnologia({ titulo, tecnologias }) {
  return (
    <div className="h-[300px] bg-background-primary-light dark:bg-background-primary-dark flex flex-col items-center p-4">
      <h2 className="text-lg font-semibold">{titulo}</h2>
      <div className="flex w-full flex-wrap justify-center items-center gap-5 mt-7">
        {tecnologias.map((tecnologia, index) => {
          const tecnologiaNormalizada = normalizar(tecnologia);
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-2 w-1/4 justify-center text-center"
            >
              <div>
                <Icono nombre={tecnologiaNormalizada} />
              </div>
              <h5>{tecnologia}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}
