import { CuadriculaTecnologia } from "../atomos/CuadriculaTecnologia";
import { misTecnologiasData } from "../../data/misTecnologiasData";

export function StackTecnologias() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full ">
      <CuadriculaTecnologia
        titulo="FRONTEND"
        tecnologias={misTecnologiasData.frontend}
      />
      <CuadriculaTecnologia
        titulo="BACKEND"
        tecnologias={misTecnologiasData.backend}
      />
      <CuadriculaTecnologia
        titulo="APRENDIENDO"
        tecnologias={misTecnologiasData.aprendiendo}
      />
      <CuadriculaTecnologia
        titulo="HERRAMIENTAS"
        tecnologias={misTecnologiasData.herramientas}
      />
    </div>
  );
}
