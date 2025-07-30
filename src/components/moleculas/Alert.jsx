import { Icono } from "../atomos/Icono";
import { alertBaseStyles, alertStyles } from "../../constantes/styles";

export function Alert({
  tipo,
  titulo = "",
  children,
  iconName,
  className = "",
}) {
  return (
    <div className={`${alertBaseStyles} ${alertStyles[tipo]} ${className}`}>
      <div className="mt-1">
        <Icono nombre={iconName} />
      </div>
      <div className="">
        <p className="text-base md:text-lg text-text-secondary-light dark:text-text-secondary-dark">
          <span className="font-bold ">{titulo}</span> {children}
        </p>
      </div>
    </div>
  );
}
