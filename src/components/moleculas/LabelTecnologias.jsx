import { Icono } from "../atomos/Icono.jsx";
import { normalizar } from "../../utilidades/normalizarIconos.js";
import { tecnologiasData } from "../../constantes/tecnologias.js";

export function LabelTecnologias({ tecnologias }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tecnologias.map((nombreTecnologia) => {
        const idIcono = normalizar(nombreTecnologia);

        const info = tecnologiasData[idIcono];

        if (!info) return null;

        const gradientClass = ` bg-gradient-to-r ${info.gradient}`;

        return (
          <div
            key={idIcono}
            className={`flex items-center gap-2 justify-center rounded-2xl outline outline-accent-primary-light dark:outline-accent-primary-dark ${gradientClass} ${info.textColor} p-1 px-4 text-xs md:text-sm`}
            title={info.label}
          >
            <Icono nombre={idIcono} tamaño="20" />
            <span>{info.label}</span>
          </div>
        );
      })}
    </div>
  );
}
