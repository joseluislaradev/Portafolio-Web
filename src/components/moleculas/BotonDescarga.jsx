import {
  buttonBaseStyles,
  buttonVariantStyles,
} from "../../constantes/styles.js";
import clsx from "clsx";
import { Icono } from "../atomos/Icono.jsx";
import toast from "react-hot-toast"; // 👈 1. Importa la función toast

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

  const handleDownload = () => {
    toast.success("Descarga iniciada.", {
      duration: 4000,
      style: {
        background: "var(--color-accent-primary-light)",
        color: "var(--color-text-button-light)",
      },
      icon: "📥",
    });
  };

  return (
    <a
      href={href}
      className={combinedClassName}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
      onClick={handleDownload}
    >
      {iconName && <Icono nombre={iconName} tamaño={24} color="currentColor" />}
      {children}
    </a>
  );
}
