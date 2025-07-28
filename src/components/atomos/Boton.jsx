import { buttonBaseStyles, buttonVariantStyles } from "../../constantes/styles";
import { Icono } from "./Icono";

export function Boton({
  children,
  variant = "primary",
  className = "",
  iconName,
  ...rest
}) {
  const clasesCombinadas = `${buttonBaseStyles} ${buttonVariantStyles[variant]} ${className}`;

  return (
    <button className={clasesCombinadas} {...rest}>
      {iconName && <Icono nombre={iconName} tamaño={24} color="currentColor" />}
      {children}
    </button>
  );
}
