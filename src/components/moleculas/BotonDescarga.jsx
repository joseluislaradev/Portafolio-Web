import {
  buttonBaseStyles,
  buttonVariantStyles,
} from "../../constantes/styles.js";
import clsx from "clsx";
import { Icono } from "../atomos/Icono.jsx";

export function BotonDescarga({
  href,
  children,
  variant = "primary",
  className = "",
  iconName,
  ...rest
}) {
  const combinedClassName = clsx(
    buttonBaseStyles,
    buttonVariantStyles[variant],
    className
  );

  return (
    <a
      href={href}
      className={combinedClassName}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      {iconName && <Icono nombre={iconName} tamaño={24} color="currentColor" />}
      {children}
    </a>
  );
}
